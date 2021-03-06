"""
kombu.simple
============

Simple interface.

:copyright: (c) 2009 - 2010 by Ask Solem.
:license: BSD, see LICENSE for more details.

"""
import socket

from collections import deque
from time import time
from Queue import Empty

from kombu import entity
from kombu import messaging


class SimpleBase(object):
    _consuming = False

    def __init__(self, channel, producer, consumer, no_ack=False,
            channel_autoclose=False):
        self.channel = channel
        self.producer = producer
        self.consumer = consumer
        self.no_ack = no_ack
        self.channel_autoclose = channel_autoclose
        self.queue = self.consumer.queues[0]
        self.buffer = deque()
        self.consumer.register_callback(self._receive)

    def get(self, block=True, timeout=None, sync=False):
        if not block:
            return self.get_nowait()
        self._consume()
        elapsed = 0.0
        remaining = timeout
        while True:
            time_start = time()
            if self.buffer:
                return self.buffer.pop()
            try:
                self.channel.connection.client.drain_events(
                            timeout=timeout and remaining)
            except socket.timeout:
                raise Empty()
            elapsed += time() - time_start
            remaining = timeout - elapsed

    def get_nowait(self):
        m = self.queue.get(no_ack=self.no_ack)
        if not m:
            raise Empty()
        return m

    def put(self, message, serializer=None, headers=None, compression=None,
            routing_key=None, **kwargs):
        self.producer.publish(message,
                              serializer=serializer,
                              routing_key=routing_key,
                              headers=headers,
                              compression=compression,
                              **kwargs)

    def clear(self):
        return self.consumer.purge()

    def qsize(self):
        _, size, _ = self.queue.queue_declare(passive=True)
        return size

    def close(self):
        if self.channel_autoclose:
            self.channel.close()
        self.consumer.cancel()

    def _receive(self, message_data, message):
        self.buffer.append(message)

    def _consume(self):
        if not self._consuming:
            self.consumer.consume(no_ack=self.no_ack)
            self._consuming = True

    def __len__(self):
        """`len(self) -> self.qsize()`"""
        return self.qsize()

    def __nonzero__(self):
        return True


class SimpleQueue(SimpleBase):
    no_ack = False
    queue_opts = {}
    exchange_opts = {}

    def __init__(self, channel, name, no_ack=None, queue_opts=None,
            exchange_opts=None, serializer=None, compression=None, **kwargs):
        queue = name
        queue_opts = dict(self.queue_opts, **queue_opts or {})
        exchange_opts = dict(self.exchange_opts, **exchange_opts or {})
        if no_ack is None:
            no_ack = self.no_ack
        if not isinstance(queue, entity.Queue):
            exchange = entity.Exchange(name, "direct", **exchange_opts)
            queue = entity.Queue(name, exchange, name, **queue_opts)
        else:
            name = queue.name
            exchange = queue.exchange
        producer = messaging.Producer(channel, exchange,
                                      serializer=serializer,
                                      routing_key=name,
                                      compression=compression)
        consumer = messaging.Consumer(channel, queue)
        super(SimpleQueue, self).__init__(channel, producer,
                                          consumer, no_ack, **kwargs)


class SimpleBuffer(SimpleQueue):
    no_ack = True
    queue_opts = dict(durable=False,
                      auto_delete=True)
    exchange_opts = dict(durable=False,
                         delivery_mode="transient",
                         auto_delete=True)
