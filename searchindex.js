Search.setIndex({objects:{"kombu.transport.pyamqplib.Transport":{drain_events:[2,3,1],establish_connection:[2,3,1],create_channel:[2,3,1],close_connection:[2,3,1]},"kombu.transport.pypika.BlockingConnection":{channel:[16,3,1]},"kombu.messaging.Producer":{exchange:[12,2,1],routing_key:[12,2,1],publish:[12,3,1],serializer:[12,2,1],channel:[12,2,1],declare:[12,3,1],auto_declare:[12,2,1]},"kombu.abstract.MaybeChannelBound":{bind:[9,3,1],when_bound:[9,3,1],maybe_bind:[9,3,1],channel:[9,2,1],is_bound:[9,2,1]},"kombu.transport.memory.Transport":{Channel:[6,1,1]},"kombu.entity.Queue":{exclusive:[10,2,1],unbind:[10,3,1],when_bound:[10,3,1],consume:[10,3,1],durable:[10,2,1],queue_bind:[10,3,1],queue_declare:[10,3,1],auto_delete:[10,2,1],exchange:[10,2,1],routing_key:[10,2,1],purge:[10,3,1],queue_arguments:[10,2,1],binding_arguments:[10,2,1],cancel:[10,3,1],get:[10,3,1],"delete":[10,3,1],declare:[10,3,1],channel:[10,2,1],name:[10,2,1]},"kombu.transport.pypika.AsyncoreTransport":{Connection:[16,2,1]},"kombu.connection.BrokerConnection":{SimpleBuffer:[23,3,1],info:[23,3,1],create_transport:[23,3,1],SimpleQueue:[23,3,1],channel_errors:[23,2,1],clone:[23,3,1],acquire:[23,3,1],transport:[23,2,1],host:[23,2,1],release:[23,3,1],connection:[23,2,1],connection_errors:[23,2,1],ensure:[23,3,1],connect:[23,3,1],get_transport_cls:[23,3,1],create_backend:[23,3,1],ensure_connection:[23,3,1],close:[23,3,1],drain_events:[23,3,1],channel:[23,3,1]},"kombu.entity":{Queue:[10,1,1],Binding:[10,2,1],Exchange:[10,1,1]},"kombu.transport.pyamqplib.Connection":{read_timeout:[2,3,1],drain_events:[2,3,1],wait_multi:[2,3,1],channel:[2,3,1]},"kombu.transport.pyredis.Transport.Channel":{close:[3,3,1],client:[3,2,1]},"kombu.entity.Exchange":{name:[10,2,1],auto_delete:[10,2,1],delivery_mode:[10,2,1],publish:[10,3,1],declare:[10,3,1],arguments:[10,2,1],Message:[10,3,1],type:[10,2,1],durable:[10,2,1],channel:[10,2,1],"delete":[10,3,1]},"kombu.transport.virtual.Message":{reject:[1,3,1]},"kombu.connection.BrokerConnectionPool":{acquire:[23,3,1],replace:[23,3,1],release:[23,3,1],ensure:[23,3,1],active:[23,2,1],close:[23,3,1],total:[23,2,1],grow:[23,3,1]},"kombu.transport.virtual.Transport.Channel.Message":{reject:[1,3,1]},"kombu.abstract":{Object:[9,1,1],MaybeChannelBound:[9,1,1]},"kombu.transport.virtual.Channel.Message":{reject:[1,3,1]},"kombu.exceptions":{TimeoutError:[0,5,1],MessageStateError:[0,5,1],EnsureExhausted:[0,5,1],NotBoundError:[0,5,1],PoolExhausted:[0,5,1],PoolLimitExceeded:[0,5,1]},"kombu.transport.memory":{Channel:[6,1,1],Transport:[6,1,1]},"kombu.simple":{SimpleBuffer:[21,1,1],SimpleQueue:[21,1,1],SimpleBase:[21,1,1]},"kombu.transport.pypika":{SyncTransport:[16,1,1],AsyncoreConnection:[16,1,1],Message:[16,1,1],AsyncoreTransport:[16,1,1],Channel:[16,1,1],BlockingConnection:[16,1,1]},"kombu.transport.pyamqplib.Channel.Message":{body:[2,2,1],delivery_tag:[2,2,1],channel:[2,2,1]},"kombu.transport.pypika.Channel":{basic_ack:[16,3,1],basic_get:[16,3,1],basic_publish:[16,3,1],basic_consume:[16,3,1],message_to_python:[16,3,1],Message:[16,1,1],prepare_message:[16,3,1]},"kombu.compression":{get_decoder:[19,4,1],register:[19,4,1],compress:[19,4,1],get_encoder:[19,4,1],decompress:[19,4,1]},"kombu.transport.virtual.Channel":{exchange_declare:[1,3,1],qos_manager:[1,2,1],basic_ack:[1,3,1],queue_purge:[1,3,1],exchange_delete:[1,3,1],basic_qos:[1,3,1],drain_events:[1,3,1],queue_bind:[1,3,1],basic_reject:[1,3,1],flow:[1,3,1],basic_get:[1,3,1],basic_recover:[1,3,1],basic_cancel:[1,3,1],basic_consume:[1,3,1],queue_delete:[1,3,1],queue_declare:[1,3,1],basic_publish:[1,3,1],close:[1,3,1],Message:[1,1,1],prepare_message:[1,3,1],message_to_python:[1,3,1]},"kombu.simple.SimpleBase":{qsize:[21,3,1],get:[21,3,1],clear:[21,3,1],get_nowait:[21,3,1],put:[21,3,1],close:[21,3,1]},"kombu.serialization":{encode:[18,4,1],registry:[18,6,1],SerializerNotInstalled:[18,5,1]},kombu:{compat:[22,0,0],compression:[19,0,0],simple:[21,0,0],utils:[17,0,0],entity:[10,0,0],connection:[23,0,0],messaging:[12,0,0],exceptions:[0,0,0],serialization:[18,0,0],"abstract":[9,0,0],transport:[4,0,0]},"kombu.transport.base.Transport":{drain_events:[13,3,1],establish_connection:[13,3,1],create_channel:[13,3,1],close_connection:[13,3,1]},"kombu.transport.pyamqplib":{Message:[2,1,1],Connection:[2,1,1],Transport:[2,1,1],Channel:[2,1,1]},"kombu.transport.pyredis.Channel":{close:[3,3,1],client:[3,2,1]},"kombu.transport.pypika.SyncTransport":{drain_events:[16,3,1],establish_connection:[16,3,1],Connection:[16,2,1],create_channel:[16,3,1],Message:[16,1,1],close_connection:[16,3,1]},"kombu.transport.base.Message":{ack:[13,3,1],MessageStateError:[13,5,1],acknowledged:[13,2,1],decode:[13,3,1],reject:[13,3,1],requeue:[13,3,1],payload:[13,2,1]},"kombu.transport.pyamqplib.Message":{body:[2,2,1],delivery_tag:[2,2,1],channel:[2,2,1]},"kombu.transport.virtual.Transport":{close_channel:[1,3,1],drain_events:[1,3,1],establish_connection:[1,3,1],create_channel:[1,3,1],Cycle:[1,2,1],Channel:[1,1,1],close_connection:[1,3,1]},"kombu.compat.Consumer":{iterconsume:[22,3,1],process_next:[22,3,1],discard_all:[22,3,1],close:[22,3,1],iterqueue:[22,3,1],fetch:[22,3,1],wait:[22,3,1]},"kombu.messaging.Consumer":{qos:[12,3,1],consume:[12,3,1],register_callback:[12,3,1],receive:[12,3,1],queues:[12,2,1],on_decode_error:[12,2,1],flow:[12,3,1],purge:[12,3,1],callbacks:[12,2,1],channel:[12,2,1],cancel:[12,3,1],recover:[12,3,1],declare:[12,3,1],auto_declare:[12,2,1]},"kombu.transport.pyamqplib.Channel":{Message:[2,1,1],message_to_python:[2,3,1],prepare_message:[2,3,1]},"kombu.messaging":{Consumer:[12,1,1],Producer:[12,1,1]},"kombu.transport":{pyamqplib:[2,0,0],resolve_transport:[4,4,1],pyredis:[3,0,0],virtual:[1,0,0],base:[13,0,0],get_transport_cls:[4,4,1],memory:[6,0,0],pypika:[16,0,0]},"kombu.transport.virtual.QualityOfService":{ack:[1,3,1],restore_unacked:[1,3,1],restore_unacked_once:[1,3,1],can_consume:[1,3,1],requeue:[1,3,1],append:[1,3,1]},"kombu.compat":{Publisher:[22,1,1],iterconsume:[22,4,1],Consumer:[22,1,1],entry_to_queue:[22,4,1],ConsumerSet:[22,4,1]},"kombu.transport.pypika.AsyncoreConnection":{channel:[16,3,1]},"kombu.utils":{OrderedDict:[17,1,1],maybe_list:[17,4,1],partition:[17,4,1],rpartition:[17,4,1],retry_over_time:[17,4,1],repeatlast:[17,4,1]},"kombu.connection":{BrokerConnectionPool:[23,1,1],BrokerConnection:[23,1,1]},"kombu.utils.OrderedDict":{fromkeys:[17,7,1],setdefault:[17,3,1],keys:[17,3,1],items:[17,3,1],clear:[17,3,1],iteritems:[17,3,1],update:[17,3,1],pop:[17,3,1],values:[17,3,1],itervalues:[17,3,1],popitem:[17,3,1],copy:[17,3,1],iterkeys:[17,3,1]},"kombu.transport.virtual.FairCycle":{get:[1,3,1]},"kombu.transport.virtual":{Message:[1,1,1],Transport:[1,1,1],QualityOfService:[1,1,1],Channel:[1,1,1],FairCycle:[1,1,1]},"kombu.transport.virtual.Transport.Channel":{exchange_declare:[1,3,1],qos_manager:[1,2,1],exchange_delete:[1,3,1],basic_ack:[1,3,1],queue_purge:[1,3,1],queue_bind:[1,3,1],basic_qos:[1,3,1],drain_events:[1,3,1],basic_reject:[1,3,1],flow:[1,3,1],basic_get:[1,3,1],basic_recover:[1,3,1],basic_publish:[1,3,1],basic_consume:[1,3,1],message_to_python:[1,3,1],queue_declare:[1,3,1],close:[1,3,1],basic_cancel:[1,3,1],Message:[1,1,1],prepare_message:[1,3,1],queue_delete:[1,3,1]},"kombu.transport.pyredis":{Channel:[3,1,1],Transport:[3,1,1]},"kombu.compat.Publisher":{close:[22,3,1],send:[22,3,1]},"kombu.transport.base":{Message:[13,1,1],Transport:[13,1,1]},"kombu.transport.pyredis.Transport":{Channel:[3,1,1]}},terms:{"default":[11,18,12,7,17,10,23],pluggabl:7,concept:7,consum:[11,12,5,7,1,21,10,22],all:[0,12,7,17,10,23],interchang:11,four:[7,10],sleep:[17,23],per:7,follow:[7,12],disk:10,content:[7,5,12],depend:[0,7,11,10],base64:7,specif:[11,12,23,10],send:[11,5,12,7,15,10,22],articl:[7,10],program:7,under:7,sens:10,discontinu:7,sent:[7,12,13,10],passiv:10,mpg:11,sourc:7,everi:[7,17],string:[7,23,4],fals:[12,1,16,21,17,10,22,23],unacknowledg:12,util:[5,9,17,8],wikipedia:7,fan:7,fall:12,drain_ev:[13,7,1,2,16,23],affect:[7,12],look:7,iterconsum:22,level:[7,11],exchange_opt:[21,23],messagestateerror:[0,13],list:[11,5,12,7,14,23],rabbitmq:[7,12,14,10],"try":[0,12,17],asyncoreconnect:16,pypika:[5,16,8],warren:7,refer:[7,5,11,8],localhost:[7,11,23],pleas:7,stompi:7,impli:10,smaller:[7,12],slower:7,maybe_list:17,direct:[7,1,10],zero:[7,12,10],video:[7,11],pass:[7,12,17,23],download:7,port:[7,11,23],append:1,compat:[7,5,23,22,8],index:[7,5],what:7,establish_connect:[1,13,2,16],sub:[7,5],repli:10,section:7,connection_error:23,abl:23,brief:14,current:[7,11,23,12,10],delet:[7,12,23,10],version:7,"new":[7,12,17,23,10],ever:10,method:[0,11,13,12,7,10,23],requeu:[1,13,14,12],full:[7,11,4],hash:[7,10],timeouterror:0,iteritem:17,join:7,gener:[12,10],never:23,here:[11,23],bodi:[12,13,7,2,19,16,10],address:23,path:[23,4],along:12,ensure_connect:23,modifi:10,sinc:7,valu:[16,2,17,10],wait:[12,7,2,10,22,23],search:5,produc:[11,5,12,7,21,23],larger:7,delivery_tag:[16,1,13,2,12],queue:[11,12,13,7,1,16,10,22,23],datetim:11,prefetch_count:[1,12],qos_manag:1,action:[7,10],bound_exchang:[7,10],chanc:1,semant:23,via:7,regardless:23,qualityofservic:1,primit:[7,10],modul:[7,5],releas:[8,23,15,20],"boolean":7,basic_qo:1,instal:[7,18],redi:[11,5,23,3,8],total:23,establish:[11,23,2,16],select:13,highli:7,usd:[7,10],from:[11,12,13,7,1,17,10,23],describ:10,memori:[11,5,6,7,8,10,23],regist:[7,12,19],two:[7,11,17,12,10],next:17,readi:12,handler:16,call:[0,11,12,7,9,10,23],criteria:10,msg:2,type:[7,1,18,12,10],tell:23,science_new:10,more:[0,11,12,7,10,23],prefetch_s:[1,12],desir:7,faircycl:1,readm:7,simplebuff:[11,21,23],warn:12,flag:10,"transient":[11,23,10],accept:12,rabbit:[7,23],aris:11,hold:10,content_typ:[12,13,7,1,2,19,16,10],must:[23,12,13,17,10],annoy:7,high:7,none:[11,12,13,1,2,16,21,17,4,10,22,23],word:[7,10],my_pictur:7,alia:[1,16,4,10],setup:7,work:[7,14],uniqu:[12,2,10],histori:[5,20],remain:10,tag:[12,2,10],can:[0,11,12,7,17,9,10,23],create_backend:23,purpos:7,root:7,fetch:22,def:[7,11,23],control:12,encapsul:[2,16],give:[12,17,23],process:[7,11,13,12],autodetect:12,share:23,dump_entri:11,indic:5,topic:[7,10],carrot:[7,5,20,22,8],exchange_delet:1,want:[7,11,12],tarbal:7,serial:[11,5,12,7,21,8,10,18],occur:[12,23,10],alwai:[7,23,10],multipl:23,goal:7,feed_url:7,secur:7,rather:12,anoth:7,interval_step:[17,23],how:[17,23],purg:[12,10],"__init__":11,reject:[7,1,13,14],answer:14,instead:11,simpl:[11,5,12,15,21,8],connect_timeout:23,updat:17,map:12,resourc:1,max:[17,23],clone:23,execed:23,befor:[7,17,23],wait_multi:2,mixin:9,date:[7,8,11,15,20],end:12,data:[11,5,18,7,2,16],grow:23,github:7,attempt:12,nativ:7,classmethod:17,bind:[7,12,9,10],element:17,caus:7,inform:[7,11,10],maintain:7,media:7,exclus:[22,10],mechan:12,channel_autoclos:21,order:[12,17],queue_delet:1,origin:[7,12,13],help:7,media_exchang:7,over:[7,17],becaus:10,jpeg:7,image_queu:7,held:12,own:[11,10],undeliver:12,brokerconnect:[7,11,23],still:12,paramet:[12,17,16,23,10],fit:7,binari:[7,10],itervalu:17,amqplib:[11,5,7,2,8,23],better:7,yaml:[7,18],window:12,restart:10,persist:[11,23,10],mail:[7,5,14],therefor:10,consumerset:[7,22],eur:[7,10],them:[7,11,10],good:7,"return":[7,9,17,13,10],thei:[7,11,10],reveal:14,python:[11,5,13,18,7,2,16],auto:[7,23,10],cover:10,initi:[23,20],bound:[7,9,10],framework:[7,5],terminolog:7,amqp_messag:16,restore_unacked_onc:1,now:[7,10],discuss:14,introduct:[7,5],choic:7,term:12,name:[11,7,21,4,10,23],edit:7,close:[11,7,1,2,3,16,21,10,22,23],userid:[7,11,23],restore_unack:1,video_queu:7,separ:[7,23,10],reactiv:12,mode:10,timeout:[11,7,1,2,21,23],each:[7,1,17,23,10],januari:14,unicod:7,stock:[7,10],errback:[17,23],recommend:10,domain:[7,10],redeliv:12,replac:23,kombu:[0,5,13,11,6,12,7,1,2,17,3,16,21,8,9,19,4,10,22,23,18],discard_al:22,simplebas:21,connect:[0,5,13,11,6,12,7,1,2,15,3,16,8,10,22,23],our:[7,10],happen:[7,11],orient:7,special:[7,10],out:[0,7],msgpack:[7,18],unbound:[0,7,10],item:17,miss:7,publish:[12,13,7,10,22,23],primari:7,max_retri:[17,23],rewrit:[7,20],cest:20,sever:[7,11],print:[7,11,23],got:7,qualifi:4,insid:7,advanc:[7,12],bound_sicence_new:10,undo:12,standard:[7,11],reason:[7,14],base:[5,13,8],dictionari:[7,17],latest:7,ask:[7,5,14,12],close_connect:[1,13,2,16],interval_max:[17,23],basi:7,pyyaml:18,couldn:23,could:7,synchron:10,fromtimestamp:11,recov:12,channel_error:23,prefetch:12,log_messag:11,licens:7,frequent:[5,14],first:7,oper:[0,12,23,10],softwar:7,create_transport:23,attapattu:10,do_restor:1,exchange_declar:1,exchang:[11,12,7,1,16,10,22,23],qualiti:12,wast:7,basic_get:[1,16],mai:[7,11,23,12,10],instruct:7,alreadi:[0,12,13,7,9,23],done:[12,23,10],messag:[0,5,13,14,11,12,7,1,2,15,16,21,8,10,23],blank:10,open:[7,23],payload:[7,1,13,11],retry_over_tim:17,size:[7,12],prioriti:[1,16,2,12,10],is_bound:9,differ:11,when_bound:[9,10],guest:[7,11,23],queue_bind:[1,10],unknown:7,top:7,slept:23,system:7,least:10,necessarili:10,scheme:[7,10],routing_kei:[12,7,1,16,21,10,22,23],store:10,includ:[7,4],shell:7,option:[12,18,7,10,22,23],auto_delet:[22,1,10],signatur:12,copi:[23,9,17],message_data:[7,1,2,16],specifi:[7,11,23,12,10],process_media:7,forward:10,part:[7,10],consult:4,number:[11,12,17,23],than:[7,12,23,10],rss:7,keyword:[12,17,23],provid:[7,23,10],remov:[11,13,17,10],second:[17,23],structur:[7,18,13],charact:[7,10],reus:23,were:10,posit:17,design:10,minut:10,no_ack:[12,1,16,21,10,22,23],transport:[11,5,13,6,7,1,2,15,3,16,8,4,23],"function":[17,23,10],abov:[7,11],enable_callback:22,modern:7,ani:[7,12,23,2,10],raw:[7,5,10],pip:7,binding_argu:10,have:[7,11,23,12,10],deliv:[12,10],notbounderror:[0,7],notimplementederror:12,predic:1,issu:7,built:[7,18,10],equival:11,callback:[11,5,12,7,1,17,16,9,10,22,23],rout:[7,11,23,12,10],note:[7,23,10],rpartit:17,without:[7,5,11,10],read:[7,10],take:[12,17,23],which:[7,11,17,12,10],channel:[0,11,13,6,12,7,1,2,3,16,21,9,10,23],even:[7,11,10],shallow:17,distribut:7,usernam:[11,23],object:[11,5,7,17,8,9,10,23],compress:[11,5,12,19,21,8],dialogu:10,most:10,plai:7,regular:7,bsd:7,rkei:7,"class":[11,5,13,6,12,7,1,2,17,3,16,21,9,4,10,22,23],lazili:23,don:7,exc:[12,17,23],url:7,entry_to_queu:22,flow:[1,12],doe:[7,12,4,10],declar:[7,12,10],wildcard:10,pattern:[7,10],propos:7,dot:[7,10],recipi:12,imemedi:23,text:7,speedup:7,alias:[23,19],nasdaq:[7,10],protocol:7,feed_queu:7,resolve_transport:4,find:12,access:10,onli:[11,23,10],explicitli:[11,10],acquir:[0,23],activemq:7,configur:[7,23],apach:7,forev:17,should:[7,12],queu:7,local:[12,10],queue_opt:[21,23],pika:[11,5,7,16,8,23],info:[11,23],contribut:7,get:[11,7,1,21,4,10,23],familiar:7,stomp:7,express:7,pypi:7,synctransport:16,ssl:23,fifo:17,popitem:17,report:7,pipermail:14,requir:[11,18],bound_science_new:10,enabl:[12,23],yield:17,patch:7,channel_id:2,feed:7,common:10,partit:17,contain:10,asyncoretransport:16,where:[7,1,17,10],get_decod:19,respond:10,set:[11,12,7,1,17,10,23],basic_ack:[1,16],allowed_method:2,sep:17,"float":7,basic_reject:1,around:7,see:[11,12,7,14,10,23],fanout:10,mandatori:[12,16,10],result:23,arg:[22,9,2,17],disadvantag:7,serializernotinstal:18,if_unus:[1,10],infinit:[22,17],can_consum:1,detect:7,preconnect:23,databas:11,someth:[7,11],particip:7,favor:7,state:10,won:10,pyredi:[5,3,8],between:[12,17,23,10],"import":[7,11,10],entiti:[0,5,12,8,9,10],attribut:[7,10],altern:[7,12],default_seri:18,auto_decod:2,nowait:[16,10],august:[8,15],kei:[11,12,7,17,10,23],screen:7,xrang:11,brokerconnectionpool:23,cycl:[7,1],prepare_messag:[1,2,16],wait_for_open:16,come:11,addit:[11,23,10],both:[11,10],last:[7,17,10],queue_nam:11,howev:7,equal:[1,17,12],etc:7,instanc:[12,7,2,17,9,10],context:11,mani:[7,23],iterqueu:22,feedconsum:7,com:[7,23,14],simplequeu:[11,21,23],load:23,kwd:17,cancer:10,instanti:[12,23],delivery_info:13,pop:17,feed_exchang:7,sync:21,header:[12,13,7,1,2,16,21,10],dispatch:12,colon:23,param:12,cancel:[12,10],guid:[5,15],assum:10,been:[0,7,13,23,12],json:[7,11,18,12],much:[7,17],interpret:[7,10],basic:11,queue_declar:[1,10],immedi:[12,23,16,10],queue_purg:1,if_empti:[1,10],lifo:17,imag:7,convert:[2,16],argument:[11,12,1,17,10,23],decim:7,"catch":17,former:11,delimit:10,"case":[7,10],exchange_typ:22,stolen:10,queue_argu:10,process_next:22,packag:[7,18],plain:7,servic:12,properti:[13,7,1,2,16,10],import_fe:7,aim:7,defin:[7,11,10],"while":[7,11,17,12],suport:23,create_channel:[1,13,2,16],error:[11,23,10],fun:[1,17,23],loop:[7,23],import_feed_callback:7,stop:12,ordereddict:17,advantag:7,best:7,"__main__":11,henc:10,non:10,jpg:7,destin:10,need:[7,11,23,12],kwarg:[13,6,1,2,17,3,16,21,9,10,22,23],avi:7,apply_glob:[1,12],pyamqplib:[5,23,2,4,8],descript:10,conn:[7,23],scienc:10,develop:7,welcom:7,perform:[12,23,10],suggest:7,make:[7,11,10],cross:7,same:[7,11,23,10],handl:12,html:14,decod:[7,12,13,19,18],timestamp:11,document:[7,5,11],complet:23,exhaust:17,finish:[12,10],http:[7,14],hostnam:[7,11,23],decompress:19,fairli:7,rais:[12,13,7,17,10,23],user:[7,5,11,15],improv:12,respons:10,implement:[7,14],fromkei:17,appropri:7,cjson:[7,18],whole:12,thu:7,itself:12,cutekitten:11,pickl:[7,18],person:7,client:[12,13,6,1,2,3,16,10,23],thi:[11,12,13,7,2,17,10,23],choos:11,news_exchang:10,self:[7,11],usual:23,identifi:[2,10],entri:11,just:10,when:[11,12,7,17,9,10,23],on_return:12,activ:[1,23,12,10],yet:[11,14],languag:7,task:7,password:[7,11,23],easi:7,also:[7,11,23,12,10],close_channel:1,consumer_tag:[1,16,10],raw_messag:[1,2,16],except:[0,5,13,12,7,8,17,23,18],shortcut:11,blog:10,poollimitexceed:[0,23],add:[0,23],poll:[7,10],appli:[12,23],els:7,logger:11,determin:10,match:[7,10],build:7,applic:10,vendor:7,auto_declar:12,preserv:10,lolcat1:7,tabl:[5,4,10],insist:23,basic_publish:[1,16],bit:7,characterist:7,recurs:7,insert:17,like:[7,11,10],lost:10,arbitrari:12,rajith:10,manual:[7,12,10],integ:10,server:[12,13,23,10],basic_recov:1,from_dict:22,api:[7,5,23,22,8],singl:[11,12,17,23,10],if_unusu:1,page:5,exceed:[0,17,23],poolexhaust:[0,23],easy_instal:7,acknowledg:[0,7,13,23,10],interv:[1,17,23],some:7,back:[13,2,16],global:12,on_decode_error:12,basic_cancel:1,log_queu:11,librari:[7,11,18,10],tmp:7,expliclti:23,"0x1002aa4c0":17,avoid:12,get_nowait:21,octet:12,subclass:12,buffer:[11,23],imedi:12,retri:[17,23],leav:10,cnn:7,notabl:7,blockingconnect:16,either:[7,17,10],encourag:7,run:7,slight:7,reach:17,ident:[7,10],usag:[23,10],broker:[5,12,7,2,16,8,10,23],broken:23,host:[11,23],maybe_bind:9,although:[12,10],found:10,peer:12,"__name__":11,post:10,about:[7,14,10],central:18,socket:[11,23],constraint:7,ack:[7,1,13,11],slightli:11,delivery_mod:[12,10],manag:23,exampl:[7,11,23,10],constructor:23,discard:13,mean:[11,12,13,10],disabl:[12,23],block:[11,21,23],associ:10,qsize:21,reconnection_strategi:16,within:12,encod:[11,12,18,7,2,19,16,10],feedproduc:7,automat:[12,23],latter:11,down:12,pair:[17,23,10],empti:[1,10],ensur:[0,23],chang:[5,20],your:[7,11,10],durabl:[7,1,23,22,10],fast:7,log:11,transfer:7,support:[7,11,18,12,10],question:[5,14],iter:17,"long":[17,10],custom:[7,10],avail:[7,12,23,10],start:[7,17,23,10],setdefault:17,interfac:[11,5,13,7,1,15,21,8],tracker:7,myqueu:11,treat:10,deliveri:[12,2,10],properli:10,register_callback:[7,12],tupl:17,subscrib:12,gain:7,shamelessli:10,overflow:12,"true":[11,12,7,1,2,17,16,21,9,10,23],bug:7,iterkei:17,reappli:23,algorithm:[7,10],consist:[7,10],possibl:7,whether:10,maximum:[17,23],until:[12,17,10],below:7,limit:[0,7,23,22,12],virtual_host:[7,11,23],basic_consum:[1,16],otherwis:[12,10],clear:[21,17],repeatlast:17,creat:[11,5,7,9,10,23],request:[12,23,18],"abstract":[5,9,8],filenam:11,doesn:14,cure:10,exist:[7,10],file:7,read_timeout:2,check:10,probabl:7,again:[7,17],amqp:[11,5,7,2,16,8,9,10],content_encod:[12,13,7,1,2,16,10],excel:[7,11],simplejson:[7,18],virtual:[11,1,23,8,5],event:[23,2],field:[11,10],other:[7,11,17,23,12],get_encod:19,rememb:[17,23],test:7,you:[11,12,13,7,10,23],deseri:[7,11,13],star:[7,10],registri:18,fulli:4,put:[11,21,13],why:14,time:[0,7,17,11,23],get_transport_cl:[23,4],increas:17,backend_cl:23,pool:[0,23],stai:7,unbind:10,receiv:[11,5,13,12,7,2,15,10],sphinx:7,filterfunc:22,directori:7,reliabl:7,gethostnam:11,detail:7,interval_start:[17,23],ignor:12,potenti:12,maybechannelbound:9,ensureexhaust:0,message_to_python:[1,2,16]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:exception","6":"py:data","7":"py:classmethod"},titles:["Exceptions - kombu.exceptions","Virtual Transport Interface - kombu.transport.virtual","amqplib Transport - kombu.transport.pyamqplib","Redis Transport - kombu.transport.pyredis","Transports - kombu.transport","Kombu Documentation","In-memory Transport - kombu.transport.memory","kombu - AMQP Messaging Framework for Python","API Reference","Object Utilities - kombu.abstract","AMQP Entities - kombu.entity","Simple Interface","Messaging - kombu.messaging","Base Transport Interface - kombu.transport.base","Frequently Asked Questions","User Guide","pika Transport - kombu.transport.pypika","Utilities - kombu.utils","Serialization - kombu.serialization","Compression - kombu.compression","Change history","Simple Interface - kombu.simple","Carrot Compatible API - kombu.compat","Broker Connections - kombu.connection"],objnames:{"0":"Python module","1":"Python class","2":"Python attribute","3":"Python method","4":"Python function","5":"Python exception","6":"Python data","7":"Python class method"},filenames:["reference/kombu.exceptions","reference/kombu.transport.virtual","reference/kombu.transport.pyamqplib","reference/kombu.transport.pyredis","reference/kombu.transport","index","reference/kombu.transport.memory","introduction","reference/index","reference/kombu.abstract","reference/kombu.entity","userguide/simple","reference/kombu.messaging","reference/kombu.transport.base","faq","userguide/index","reference/kombu.transport.pypika","reference/kombu.utils","reference/kombu.serialization","reference/kombu.compression","changelog","reference/kombu.simple","reference/kombu.compat","reference/kombu.connection"]})