/*       Source:  Backing Store                                                               */
/*     Location:  js/common.js.pkg.php r110506                                                */
/*      Machine:  10.16.139.110                                                               */
/*    Generated:  July 17th 2008 4:09:45 AM PDT                                               */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


window.onloadRegister=window.onloadRegister||function(h){window.onloadhooks.push(h);};window.onloadhooks=window.onloadhooks||[];window.onafterloadRegister=window.onafterloadRegister||function(h){window.onafterloadhooks.push(h);};window.onafterloadhooks=window.onafterloadhooks||[];window.wait_for_load=window.wait_for_load||function(element,e,f){f=bind(element,f,e);if(window.loading_begun){return f();}
switch((e||event).type){case'load':onloadRegister(f);return;case'click':if(element.original_cursor===undefined){element.original_cursor=element.style.cursor;}
if(document.body.original_cursor===undefined){document.body.original_cursor=document.body.style.cursor;}
element.style.cursor=document.body.style.cursor='progress';onafterloadRegister(function(){element.style.cursor=element.original_cursor;document.body.style.cursor=document.body.original_cursor;element.original_cursor=document.body.original_cursor=undefined;if(element.tagName.toLowerCase()=='a'){var original_event=window.event;window.event=e;var ret_value=element.onclick.call(element,e);window.event=original_event;if(ret_value!==false&&element.href){window.location.href=element.href;}}else if(element.click){element.click();}});break;}
return false;};function bind(obj,method){var args=[];for(var ii=2;ii<arguments.length;ii++){args.push(arguments[ii]);}
var fn=function(){var _obj=obj||(this==window?false:this);var _args=args.slice();for(var jj=0;jj<arguments.length;jj++){_args.push(arguments[jj]);}
if(typeof(method)=="string"){if(_obj[method]){return _obj[method].apply(_obj,_args);}}else{return method.apply(_obj,_args);}};if(typeof method=='string'){fn.name=method;}else if(method&&method.name){fn.name=method.name;}
return fn;};function goURI(uri){uri=uri.toString();if(window.Quickling&&Quickling.isActive()){Quickling.go(uri);}else if(window.location.href==uri){window.location.reload();}else{window.location.href=uri;}}

if(!window.Bootloader){window.copy_properties=function(u,v){for(var k in v){u[k]=v[k];}
if(v.hasOwnProperty&&v.hasOwnProperty('toString')&&(v.toString!==undefined)&&(u.toString!==v.toString)){u.toString=v.toString;}
return u;}
window.Bootloader={loadResource:function(rsrc){var b=window.Bootloader;if(rsrc.name){if(b._loaded[rsrc.name]){return;}
b.markResourcesAsLoaded([rsrc.name]);}
var tgt=b._getHardpoint();switch(rsrc.type){case'js':++b._pending;case'js-ext':var script=document.createElement('script');script.src=rsrc.src;script.type='text/javascript';tgt.appendChild(script);break;case'css':var link=document.createElement('link');link.rel="stylesheet";link.type="text/css";link.media="all"
link.href=rsrc.src;tgt.appendChild(link);break;}},wait:function(wait_fn){var b=window.Bootloader;if(b._pending>0){b._wait.push(wait_fn);}else{if(b._pending<0&&window.Util){Util.error('Bootloader- there are supposedly '+b._pending+' resources pending.');}
wait_fn();}},done:function(num){num=num||1;var b=window.Bootloader;if(!b._ready){return;}
b._pending-=num;if(b._pending<=0){if(b._pending<0&&window.Util){Util.error('Bootloader- there are supposedly '+b._pending+' resources pending.');}
var wait=b._wait;b._wait=[];for(var ii=0;ii<wait.length;ii++){wait[ii]();}}},markResourcesAsLoaded:function(resources){var b=window.Bootloader;for(var ii=0;ii<resources.length;ii++){b._loaded[resources[ii]]=true;}
b._ready=true;},_getHardpoint:function(){var b=window.Bootloader;if(!b._hardpoint){var n,heads=document.getElementsByTagName('head');if(heads.length){n=heads[0];}else{n=document.body;}
b._hardpoint=n;}
return b._hardpoint;},_loaded:{},_pending:0,_hardpoint:null,_wait:[],_ready:false};}

function to_array(obj){var ret=[]
for(var i=0,l=obj.length;i<l;++i){ret.push(obj[i]);}
return ret;}
Array.prototype.alloc=function(length){return length?new Array(length):[];}
Array.prototype.map=function(callback,thisObject){if(this==window){throw new TypeError();}
if(typeof(callback)!=="function"){throw new TypeError();}
var ii;var len=this.length;var r=this.alloc(len);for(ii=0;ii<len;++ii){if(ii in this){r[ii]=callback.call(thisObject,this[ii],ii,this);}}
return r;};Array.prototype.forEach=function(callback,thisObject){this.map(callback,thisObject);return this;};Array.prototype.each=function(callback,thisObject){return this.forEach.apply(this,arguments);}
Array.prototype.filter=function(callback,thisObject){if(this==window){throw new TypeError();}
if(typeof(callback)!=="function"){throw new TypeError();}
var ii,val,len=this.length,r=this.alloc();for(ii=0;ii<len;++ii){if(ii in this){val=this[ii];if(callback.call(thisObject,val,ii,this)){r.push(val);}}}
return r;};Array.prototype.every=function(callback,thisObject){return(this.filter(callback,thisObject).length==this.length);}
Array.prototype.some=function(callback,thisObject){return(this.filter(callback,thisObject).length>0);}
Array.prototype.pull=function(callback){if(this==window){throw new TypeError();}
if(typeof(callback)!=="function"){throw new TypeError();}
var args=Array.prototype.slice.call(arguments,1);var len=this.length;var r=this.alloc(len);for(ii=0;ii<len;++ii){if(ii in this){r[ii]=callback.apply(this[ii],args);}}
return r;}
Array.prototype.pullEach=function(callback){this.pull.apply(this,arguments);return this;}
Array.prototype.filterEach=function(callback){var map=this.pull.apply(this,arguments);var len=this.length;var r=this.alloc();for(var ii=0;ii<len;++ii){if(ii in this){r.push(this[ii]);}}
return r;}
Array.prototype.reduce=null;Array.prototype.reduceRight=null;Array.prototype.sort=(function(sort){return function(callback){return(this==window)?null:(callback?sort.call(this,function(a,b){return callback(a,b)}):sort.call(this));}})(Array.prototype.sort);Array.prototype.reverse=(function(reverse){return function(){return(this==window)?null:reverse.call(this);}})(Array.prototype.reverse);Array.prototype.concat=(function(concat){return function(){return(this==window)?null:concat.apply(this,arguments);}})(Array.prototype.concat);Array.prototype.slice=(function(slice){return function(){return(this==window)?null:slice.apply(this,arguments);}})(Array.prototype.slice);Array.prototype.clone=Array.prototype.slice;if(Array.prototype.indexOf){Array.prototype.indexOf=(function(indexOf){return function(val,index){return(this==window)?null:indexOf.apply(this,arguments);}})(Array.prototype.indexOf);}else{Array.prototype.indexOf=function(val,index){if(this==window){throw new TypeError();}
var len=this.length;var from=Number(index)||0;from=(from<0)?Math.ceil(from):Math.floor(from);if(from<0){from+=len;}
for(;from<len;from++){if(from in this&&this[from]===val){return from;}}
return-1;};}
Array.prototype.contains=function(val){return this.indexOf(val)!=-1;};Array.prototype.remove=function(val){var index=this.indexOf(val);if(index!=-1){this.splice(index,1);}}

if(Object.prototype.eval){window.eval=Object.prototype.eval;}
delete Object.prototype.eval;delete Object.prototype.valueOf;function is_scalar(v){switch(typeof(v)){case'string':case'number':case'null':case'boolean':return true;}
return false;}
function is_empty(obj){if(obj instanceof Array){return obj.length==0;}else if(obj instanceof Object){for(var i in obj){return false;}
return true;}else{return!obj;}}
function object_keys(obj){var keys=[];for(var i in obj){keys.push(i);}
return keys;}
function object_values(obj){var values=[];for(var i in obj){values.push(obj[i]);}
return values;}
function object_key_count(obj){var count=0;for(var i in obj){count++;}
return count;}
function are_equal(a,b){return JSON.encode(a)==JSON.encode(b);}

Function.prototype.extend=function(superclass){var superprototype=__metaprototype(superclass,0);var subprototype=__metaprototype(this,superprototype.prototype.__level+1);subprototype.parent=superprototype;}
function __metaprototype(obj,level){if(obj.__metaprototype){return obj.__metaprototype;}
var metaprototype=new Function();metaprototype.construct=__metaprototype_construct;metaprototype.prototype.construct=__metaprototype_wrap(obj,level,true);metaprototype.prototype.__level=level;metaprototype.base=obj;obj.prototype.parent=metaprototype;obj.__metaprototype=metaprototype;return metaprototype;}
function __metaprototype_construct(instance){__metaprototype_init(instance.parent);var parents=[];var obj=instance;while(obj.parent){parents.push(new_obj=new obj.parent());new_obj.__instance=instance;obj=obj.parent;}
instance.parent=parents[1];parents.reverse();parents.pop();instance.__parents=parents;instance.__instance=instance;return instance.parent.construct.apply(instance.parent,arguments);}
window.aiert=(function(a){var aiert=function _aiert(m){if(window.last_alert){(window.alerts=window.alerts||[]).push((new Date()).getTime()-window.last_alert);window.alerts.splice(0,window.alerts.length-3);if(window.alerts.length==3&&window.alerts[0]+window.alerts[1]+window.alerts[2]<200){if(!confirm(m+'\n\nThis page may be caught in an infinite loop. Press "Cancel" to abort, or "Ok" to continue.')){window.aiert=bagofholding;}
window.last_alert=(new Date()).getTime();return;}}
a(m);window.last_alert=(new Date()).getTime();}
return aiert;})(window.alert);window.alert=function _alert(m){if(m!==undefined){(new Image()).src='/ajax/typeahead_callback.php?l='+escapeURI(document.location)+'&m='+
escapeURI(m)+(typeof Env!='undefined'?'&t='+Math.round(((new Date()).getTime()-Env.start)/100):'')+'&d='+escapeURI((typeof fbpd!='undefined')?fbpd:'')+'&s='+escapeURI(typeof Util!='undefined'?Util.stack():'');return window.aiert(m);}}
function __metaprototype_init(metaprototype){if(metaprototype.initialized)return;var base=metaprototype.base.prototype;if(metaprototype.parent){__metaprototype_init(metaprototype.parent);var parent_prototype=metaprototype.parent.prototype;for(i in parent_prototype){if(i!='__level'&&i!='construct'&&base[i]===undefined){base[i]=metaprototype.prototype[i]=parent_prototype[i]}}}
metaprototype.initialized=true;var level=metaprototype.prototype.__level;for(i in base){if(i!='parent'){base[i]=metaprototype.prototype[i]=__metaprototype_wrap(base[i],level);}}}
function __metaprototype_wrap(method,level,shift){if(typeof method!='function'||method.__prototyped){return method;}
var func=function(){var instance=this.__instance;if(instance){var old_parent=instance.parent;instance.parent=level?instance.__parents[level-1]:null;if(shift){var args=[];for(var i=1;i<arguments.length;i++){args.push(arguments[i]);}
var ret=method.apply(instance,args);}else{var ret=method.apply(instance,arguments);}
instance.parent=old_parent;return ret;}else{return method.apply(this,arguments);}}
func.__prototyped=true;return func;}
Function.prototype.bind=function(context){var argv=[arguments[0],this];var argc=arguments.length;for(var ii=1;ii<argc;ii++){argv.push(arguments[ii]);}
return bind.apply(null,argv);}
Function.prototype.defer=function(){setTimeout(this,0,false);}
function bagofholding(){return undefined;}
function identity(input){return input;}
function call_or_eval(obj,func,args_map){if(!func){return undefined;}
args_map=args_map||{};if(typeof(func)=='string'){var params=object_keys(args_map).join(', ');func=eval('({f: function('+params+') { '+func+'}})').f;}
if(typeof(func)!='function'){Util.error('handler was neither a function nor a string of JS code');return undefined;}
return func.apply(obj,object_values(args_map));}

String.prototype.trim=function(){if(this==window){return null;}
return this.replace(/^\s*|\s*$/g,'');}
function trim(text){return String(text).trim();}
String.prototype.startsWith=function(substr){if(this==window){return null;}
return this.substring(0,substr.length)==substr;};String.prototype.endsWith=function(substr){if(this==window){return null;}
return this.length>=substr.length&&this.substring(this.length-substr.length)==substr;};String.prototype.split=(function(split){return function(separator,limit){var flags="";if(separator===null||limit===null){return[];}else if(typeof separator=='string'){return split.call(this,separator,limit);}else if(separator===undefined){return[this.toString()];}else if(separator instanceof RegExp){if(!separator._2||!separator._1){flags=separator.toString().replace(/^[\S\s]+\//,"");if(!separator._1){if(!separator.global){separator._1=new RegExp(separator.source,"g"+flags);}else{separator._1=1;}}}
separator1=separator._1===1?separator:separator._1;var separator2=(separator._2?separator._2:separator._2=new RegExp("^"+separator1.source+"$",flags));if(limit===undefined||limit<0){limit=false;}else{limit=Math.floor(limit);if(!limit)return[];}
var match,output=[],lastLastIndex=0,i=0;while((limit?i++<=limit:true)&&(match=separator1.exec(this))){if((match[0].length===0)&&(separator1.lastIndex>match.index)){separator1.lastIndex--;}
if(separator1.lastIndex>lastLastIndex){if(match.length>1){match[0].replace(separator2,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined)match[j]=undefined;}});}
output=output.concat(this.substring(lastLastIndex,match.index),(match.index===this.length?[]:match.slice(1)));lastLastIndex=separator1.lastIndex;}
if(match[0].length===0){separator1.lastIndex++;}}
return(lastLastIndex===this.length)?(separator1.test("")?output:output.concat("")):(limit?output:output.concat(this.substring(lastLastIndex)));}else{return split.call(this,separator,limit);}}})(String.prototype.split);

function List(length){if(arguments.length>1){for(var ii=0;ii<arguments.length;ii++){this.push(arguments[ii]);}}else{this.resize(length||0);}}
List.prototype.length=0;List.prototype.size=function(){return this.length;}
List.prototype.resize=function(new_size){this.length=new_size;return this;}
List.prototype.push=function(element){this.length+=arguments.length;return Array.prototype.push.apply(this,arguments);}
List.prototype.pop=function(){--this.length;return Array.prototype.pop.apply(this);}
List.prototype.alloc=function(n){return new List(n);}
List.prototype.map=Array.prototype.map;List.prototype.forEach=Array.prototype.forEach;List.prototype.each=Array.prototype.each;List.prototype.filter=Array.prototype.filter;List.prototype.every=Array.prototype.every;List.prototype.some=Array.prototype.some;List.prototype.pull=Array.prototype.pull;List.prototype.pullEach=Array.prototype.pullEach;List.prototype.pullFilter=Array.prototype.pullFilter;

var ua={ie:function(){return this._ie;},firefox:function(){return this._firefox;},opera:function(){return this._opera;},safari:function(){return this._safari;},windows:function(){return this._windows;},osx:function(){return this._osx;},populate:function(){var agent=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera.(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec(navigator.userAgent);var os=/(Mac OS X;)|(Windows;)/.exec(navigator.userAgent);if(agent){ua._ie=agent[1]?parseFloat(agent[1]):NaN;ua._firefox=agent[2]?parseFloat(agent[2]):NaN;ua._opera=agent[3]?parseFloat(agent[3]):NaN;ua._safari=agent[4]?parseFloat(agent[4]):NaN;}else{ua._ie=ua._firefox=ua._opera=ua._safari=NaN;}
if(os){ua._osx=!!os[1];ua._windows=!!os[2];}else{ua._osx=ua._windows=false;}}};

function chain(u,v){var calls=[];for(var ii=0;ii<arguments.length;ii++){calls.push(arguments[ii]);}
return function(){for(var ii=0;ii<calls.length;ii++){if(calls[ii]&&calls[ii].apply(this,arguments)===false){return false;}}
return true;}}
function addEventBase(obj,type,fn,name_hash)
{if(obj.addEventListener){obj.addEventListener(type,fn,false);}
else if(obj.attachEvent)
{var fn_name=type+fn+name_hash;obj["e"+fn_name]=fn;obj[fn_name]=function(){obj["e"+fn_name](window.event);}
obj.attachEvent("on"+type,obj[fn_name]);}
return fn;}
function removeEventBase(obj,type,fn,name_hash)
{if(obj.removeEventListener){obj.removeEventListener(type,fn,false);}
else if(obj.detachEvent)
{var fn_name=type+fn+name_hash;if(obj[fn_name]){obj.detachEvent("on"+type,obj[fn_name]);obj[fn_name]=null;obj["e"+fn_name]=null;}}}
function event_get(e){return e||window.event;}
function event_get_target(e){return(e=event_get(e))&&(e['target']||e['srcElement']);}
function event_has_key_modifiers(e){return(e=event_get(e))&&(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey);}
function event_abort(e){(e=event_get(e))&&(e.cancelBubble=true)&&e.stopPropagation&&e.stopPropagation();return false;}
function event_prevent(e){(e=event_get(e))&&!(e.returnValue=false)&&e.preventDefault&&e.preventDefault();return false;}
function event_kill(e){return event_abort(e)||event_prevent(e);}
function event_get_keypress_keycode(event){event=event_get(event);if(!event){return false;}
switch(event.keyCode){case 63232:return 38;case 63233:return 40;case 63234:return 37;case 63235:return 39;case 63272:case 63273:case 63275:return null;case 63276:return 33;case 63277:return 34;}
if(event.shiftKey){switch(event.keyCode){case 33:case 34:case 37:case 38:case 39:case 40:return null;}}else{return event.keyCode;}}
function stopPropagation(e){if(!e)var e=window.event;e.cancelBubble=true;if(e.stopPropagation){e.stopPropagation();}}

window.onloadRegister=function(handler){window.loaded?_runHook(handler):_addHook('onloadhooks',handler);};function onafterloadRegister(handler){window.loaded?_runHook(handler):_addHook('onafterloadhooks',handler);}
function _include_quickling_events_default(){return window.loading_initial_content_div||window.loaded;}
function onbeforeunloadRegister(handler,include_quickling_events){if(include_quickling_events===undefined){include_quickling_events=_include_quickling_events_default();}
if(include_quickling_events){_addHook('onbeforeleavehooks',handler);}else{_addHook('onbeforeunloadhooks',handler);}}
function onunloadRegister(handler,include_quickling_events){if(include_quickling_events===undefined){include_quickling_events=_include_quickling_events_default();}
if(include_quickling_events){_addHook('onleavehooks',handler);}else{_addHook('onunloadhooks',handler);}}
function _onloadHook(){window.loading_begun=true;!window.loaded&&window.Env&&(Env.t_willonloadhooks=(new Date()).getTime());_runHooks('onloadhooks');!window.loaded&&window.Env&&(Env.t_doneonloadhooks=(new Date()).getTime());window.loaded=true;}
function _runHook(handler){try{handler();}catch(ex){Util.error('Uncaught exception in hook (run after page load): %x',ex);}}
function _runHooks(hooks){var isbeforeunload=hooks=='onbeforeleavehooks'||hooks=='onbeforeunloadhooks';var warn=null;do{var h=window[hooks];if(!isbeforeunload){window[hooks]=null;}
if(!h){break;}
for(var ii=0;ii<h.length;ii++){try{if(isbeforeunload){warn=warn||h[ii]();}else{h[ii]();}}catch(ex){Util.error('Uncaught exception in hook (%q) #%d: %x',hooks,ii,ex);}}
if(isbeforeunload){break;}}while(window[hooks]);if(isbeforeunload&&warn){return warn;}}
function _addHook(hooks,handler){(window[hooks]?window[hooks]:(window[hooks]=[])).push(handler);}
function _bootstrapEventHandlers(){if(document.addEventListener){if(ua.safari()){var timeout=setInterval(function(){if(/loaded|complete/.test(document.readyState)){(window.Env&&(Env.t_domcontent=(new Date()).getTime()));_onloadHook();clearTimeout(timeout);}},3);}else{document.addEventListener("DOMContentLoaded",function(){(window.Env&&(Env.t_domcontent=(new Date()).getTime()));_onloadHook();},true);}}else{var src='javascript:void(0)';if(window.location.protocol=='https:'){src='//:';}
document.write('<script onreadystatechange="if (this.readyState==\'complete\') {'+'(window.Env&&(Env.t_domcontent=(new Date()).getTime()));'+'this.parentNode.removeChild(this);_onloadHook();}" defer="defer" '+'src="'+src+'"><\/script\>');}
window.onload=chain(window.onload,function(){(window.Env&&(Env.t_layout=(new Date()).getTime()));var force_layout=document&&document.body&&document.body.offsetWidth;(window.Env&&(Env.t_onload=(new Date()).getTime()));_onloadHook();_runHooks('onafterloadhooks');});window.onbeforeunload=function(){var warn=_runHooks('onbeforeleavehooks')||_runHooks('onbeforeunloadhooks');if(!warn){window.loaded=false;}
return warn;};window.onunload=chain(window.onunload,function(){_runHooks('onleavehooks');_runHooks('onunloadhooks');});}
function keep_window_set_as_loaded(){if(window.loaded==false){window.loaded=true;_runHooks('onloadhooks');_runHooks('onafterloadhooks');}}

function EventController(eventResponderObject){copy_properties(this,{_queue:[],_ready:false,_responder:eventResponderObject});};copy_properties(EventController.prototype,{startQueue:function(){this._ready=true;this.dispatchEvents();return this;},pauseQueue:function(){this._ready=false;return this;},addEvent:function(event){event=event.toLowerCase();var args=[];for(var ii=1;ii<arguments.length;ii++){args.push(arguments[ii]);}
this._queue.push({type:event,args:args});if(this._ready){this.dispatchEvents();}
return false;},dispatchEvents:function(){if(!this._responder){throw new Error('No event responder.');}
for(var ii=0;ii<this._queue.length;ii++){var evtName='on'+this._queue[ii].type;if(typeof(this._responder[evtName])!='function'&&typeof(this._responder[evtName])!='null'){throw new Error('No event handler.');}else{if(this._responder[evtName]){this._responder[evtName].apply(this._responder,this._queue[ii].args);}}}
this._queue=[];}});

function adjustUABehaviors(){onloadRegister(addSafariLabelSupport);if(ua.ie()<7){try{document.execCommand('BackgroundImageCache',false,true);}catch(ignored){}}}
function addSafariLabelSupport(base){if(ua.safari()<500){var labels=(base||document.body).getElementsByTagName("label");for(i=0;i<labels.length;i++){labels[i].addEventListener('click',addLabelAction,true);}}}
function addLabelAction(event){var id=this.getAttribute('for');var item=null;if(id){item=document.getElementById(id);}else{item=this.getElementsByTagName('input')[0];}
if(!item||event.srcElement==item){return;}
if(item.type=='checkbox'){item.checked=!item.checked;}else if(item.type=='radio'){var radios=document.getElementsByTagName('input');for(i=0;i<radios.length;i++){if(radios[i].name==item.name&&radios[i].form==item.form){radios.checked=false;}}
item.checked=true;}else{item.focus();}
if(item.onclick){item.onclick(event);}}

function setCookie(cookieName,cookieValue,nDays){if(nDays){var today=new Date();var expire=new Date();expire.setTime(today.getTime()+3600000*24*nDays);}
document.cookie=cookieName+"="+encodeURIComponent(cookieValue)+"; "+
(nDays?"expires="+expire.toGMTString()+"; ":"")+"path=/; domain=.facebook.com";}
function clearCookie(cookieName){document.cookie=cookieName+"=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=/; domain=.facebook.com";}
function getCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0){return decodeURIComponent(c.substring(nameEQ.length,c.length))}}
return null;}

function escapeURI(u)
{if(encodeURIComponent){return encodeURIComponent(u);}
if(escape){return escape(u);}}
function htmlspecialchars(text){if(typeof(text)=='undefined'||!text.toString){return'';}
if(text===false){return'0';}else if(text===true){return'1';}
return text.toString().replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#039;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function htmlize(text){return htmlspecialchars(text).replace(/\n/g,'<br />');}
function escape_js_quotes(text){if(typeof(text)=='undefined'||!text.toString){return'';}
return text.toString().replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/"/g,'\\x22').replace(/'/g,'\\\'').replace(/</g,'\\x3c').replace(/>/g,'\\x3e').replace(/&/g,'\\x26');}

function html_wordwrap(str,wrap_limit,txt_fn){if(typeof wrap_limit=='undefined'){wrap_limit=60;}
if(typeof txt_fn!='function'){txt_fn=htmlize;}
var regex=new RegExp("\\S{"+(wrap_limit+1)+"}",'g');var start=0;var str_remaining=str;var ret_arr=[];var matches=str.match(regex);if(matches){for(var i=0;i<matches.length;i++){var match=matches[i];var match_index=start+str_remaining.indexOf(match);var chunk=str.substring(start,match_index);if(chunk){ret_arr.push(txt_fn(chunk));}
ret_arr.push(txt_fn(match)+'<wbr/>');start=match_index+match.length;str_remaining=str.substring(start);}}
if(str_remaining){ret_arr.push(txt_fn(str_remaining));}
return ret_arr.join('');}
function text_get_hyperlinks(str){if(typeof(str)!='string'){return[];}
return str.match(/(?:(?:ht|f)tps?):\/\/[^\s<]*[^\s<\.)]/ig);}
function html_hyperlink(str,txt_fn,url_fn){var accepted_delims={'<':'>','*':'*','{':'}','[':']',"'":"'",'"':'"','#':'#','+':'+','-':'-','(':')'};if(typeof(str)=='undefined'||!str.toString){return'';}
if(typeof txt_fn!='function'){txt_fn=htmlize;}
if(typeof url_fn!='function'){url_fn=htmlize;}
var str=str.toString();var http_matches=text_get_hyperlinks(str);var start=0;var str_remaining=str;var ret_arr=[];var str_remaining=str;if(http_matches){for(var i=0;i<http_matches.length;i++){var http_url=http_matches[i];var http_index=start+str_remaining.indexOf(http_url);var str_len=http_url.length;var non_url=str.substring(start,http_index);if(non_url){ret_arr.push(txt_fn(non_url));}
var trailing='';if(http_index>0){var delim=str[http_index-1];if(typeof accepted_delims[delim]!='undefined'){var end_delim=accepted_delims[delim];var end_delim_index=http_url.indexOf(end_delim);if(end_delim_index!=-1){trailing=txt_fn(http_url.substring(end_delim_index));http_url=http_url.substring(0,end_delim_index);}}}
http_str=url_fn(http_url);http_url_quote_escape=http_url.replace(/"/g,'%22');ret_arr.push('<a href="'+http_url_quote_escape+'" target="_blank" rel="nofollow">'+
http_str+'</a>'+trailing);start=http_index+str_len;str_remaining=str.substring(start);}}
if(str_remaining){ret_arr.push(txt_fn(str_remaining));}
return ret_arr.join('');}
function nl2br(text){if(typeof(text)=='undefined'||!text.toString){return'';}
return text.toString().replace(/\n/g,'<br />');}
function is_email(email){return/^([\w!.%+\-])+@([\w\-])+(?:\.[\w\-]+)+$/.test(email);}

function sprintf(){if(arguments.length==0){Util.warn('sprintf() was called with no arguments; it should be called with at '+'least one argument.');return'';}
var args=['This is an argument vector.'];for(var ii=arguments.length-1;ii>0;ii--){if(typeof(arguments[ii])=="undefined"){Util.log('You passed an undefined argument (argument '+ii+' to sprintf(). '+'Pattern was: `'+(arguments[0])+'\'.','error');args.push('');}else if(arguments[ii]===null){args.push('');}else if(arguments[ii]===true){args.push('true');}else if(arguments[ii]===false){args.push('false');}else{if(!arguments[ii].toString){Util.log('Argument '+(ii+1)+' to sprintf() does not have a toString() '+'method. The pattern was: `'+(arguments[0])+'\'.','error');return'';}
args.push(arguments[ii]);}}
var pattern=arguments[0];pattern=pattern.toString().split('%');var patlen=pattern.length;var result=pattern[0];for(var ii=1;ii<patlen;ii++){if(args.length==0){Util.log('Not enough arguments were provide to sprintf(). The pattern was: '+'`'+(arguments[0])+'\'.','error');return'';}
if(!pattern[ii].length){result+="%";continue;}
var p=0;var m=0;var r='';var padChar=' ';var padSize=null;var maxSize=null;var rawPad='';var pos=0;if(m=pattern[ii].match(/^('.)?(?:(-?\d+\.)?(-?\d+)?)/)){if(m[2]!==undefined&&m[2].length){padSize=parseInt(rawPad=m[2]);}
if(m[3]!==undefined&&m[3].length){if(padSize!==null){maxSize=parseInt(m[3]);}else{padSize=parseInt(rawPad=m[3]);}}
pos=m[0].length;if(m[1]!==undefined&&m[1].length){padChar=m[1].charAt(1);}else{if(rawPad.charAt(0)==0){padChar='0';}}}
switch(pattern[ii].charAt(pos)){case's':raw=htmlspecialchars(args.pop().toString());break;case'h':raw=args.pop().toString();break;case'd':raw=parseInt(args.pop()).toString();break;case'f':raw=parseFloat(args.pop()).toString();break;case'q':raw="`"+htmlspecialchars(args.pop().toString())+"'";break;case'e':raw="'"+escape_js_quotes(args.pop().toString())+"'";break;case'L':var list=args.pop();for(var ii=0;ii<list.length;ii++){list[ii]="`"+htmlspecialchars(args.pop().toString())+"'";}
if(list.length>1){list[list.length-1]='and '+list[list.length-1];}
raw=list.join(', ');break;case'x':x=args.pop();var line=null;var src=null;try{if(typeof(x['line'])!='undefined'){line=x.line;}else if(typeof(x['lineNumber'])!='undefined'){line=x.lineNumber;}
if(typeof(x['sourceURL'])!='undefined'){src=x['sourceURL'];}else if(typeof(x['fileName'])!='undefined'){src=x['fileName'];}}catch(exception){}
var s='[An Exception]';try{s=x.message||x.toString();}catch(exception){}
raw=s+' [at '+Stack.frameSrcToString(src,line)+']';break;default:raw="%"+pattern[ii].charAt(pos+1);break;}
if(padSize!==null){if(raw.length<Math.abs(padSize)){var padding='';var padlen=(Math.abs(padSize)-raw.length);for(var ll=0;ll<padlen;ll++){padding+=padChar;}
if(padSize<0){raw+=padding;}else{raw=padding+raw;}}}
if(maxSize!==null){if(raw.length>maxSize){raw=raw.substr(0,maxSize);}}
result+=raw+pattern[ii].substring(pos+1);}
if(args.length>1){Util.log('Too many arguments ('+(args.length-1)+' extras) were passed to '+'sprintf(). Pattern was: `'+(arguments[0])+'\'.','error');}
return result;}

function URI(uri){if(uri===window){Util.error('what the hell are you doing');return;}
if(this===window){return new URI(uri||window.location.href);}
this.parse(uri||'');}
copy_properties(URI,{getRequestURI:function(){return new URI(window.location.href);},expression:/(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,arrayQueryExpression:/^(\w+)((?:\[\w*\])+)=?(.*)/,explodeQuery:function(q){if(!q){return{};}
var ii,result={};q=q.split('&');for(ii=0,l=q.length;ii<l;ii++){var match=q[ii].match(URI.arrayQueryExpression);if(!match){var term=q[ii].split('=');result[URI.decodeComponent(term[0])]=URI.decodeComponent(term[1]||'');}else{var indices=match[2].split(/\]\[|\[|\]/).slice(0,-1);var name=match[1];var value=URI.decodeComponent(match[3]||'');indices[0]=name;var resultNode=result;for(var i=0;i<indices.length-1;i++){if(indices[i]){if(resultNode[indices[i]]===undefined){if(indices[i+1]&&!indices[i+1].match(/\d+$/)){resultNode[indices[i]]={};}else{resultNode[indices[i]]=[];}}
resultNode=resultNode[indices[i]];}else{if(indices[i+1]&&!indices[i+1].match(/\d+$/)){resultNode.push({});}else{resultNode.push([]);}
resultNode=resultNode[resultNode.length-1];}}
if(resultNode instanceof Array&&indices[indices.length-1]==''){resultNode.push(value);}else{resultNode[indices[indices.length-1]]=value;}}}
return result;},implodeQuery:function(obj,name){name=name||'';var r=[];if(obj instanceof Array){for(var ii=0;ii<obj.length;++ii){try{if(obj[ii]!==undefined){r.push(URI.implodeQuery(obj[ii],name?(name+'['+ii+']'):ii));}}catch(ignored){}}}else if(typeof(obj)=='object'){if(is_node(obj)){r.push('{node}');}else{for(var k in obj){try{r.push(URI.implodeQuery(obj[k],name?(name+'['+k+']'):k));}catch(ignored){}}}}else if(name&&name.length){r.push(URI.encodeComponent(name)+'='+URI.encodeComponent(obj));}else{r.push(URI.encodeComponent(obj));}
return r.join('&');},encodeComponent:function(raw){var parts=String(raw).split(/([\[\]])/);for(var i=0,l=parts.length;i<l;i+=2){parts[i]=window.encodeURIComponent(parts[i]);}
return parts.join('');},decodeComponent:function(encoded_s){return window.decodeURIComponent(encoded_s.replace(/\+/g,' '));}});copy_properties(URI.prototype,{parse:function(uri){var m=uri.toString().match(URI.expression);copy_properties(this,{protocol:m[3]||'',domain:m[4]||'',port:m[6]||'',path:m[7]||'',query:URI.explodeQuery(m[9]||''),fragment:m[11]||''});return this;},setProtocol:function(p){this.protocol=p;return this;},getProtocol:function(){return this.protocol;},setQueryData:function(o){this.query=o;return this;},addQueryData:function(o){return this.setQueryData(copy_properties(this.query,o));},removeQueryData:function(keys){if(!(keys instanceof Array)){keys=[keys];}
for(var i=0,l=keys.length;i<l;++i){delete this.query[keys[i]];}
return this;},getQueryData:function(){return this.query;},setFragment:function(f){this.fragment=f;return this;},getFragment:function(){return this.fragment;},setDomain:function(d){this.domain=d;return this;},getDomain:function(){return this.domain;},setPort:function(p){this.port=p;return this;},getPort:function(){return this.port;},setPath:function(p){this.path=p;return this;},getPath:function(){return this.path.replace(/^\/+/,'/');},toString:function(){var r='';var q=URI.implodeQuery(this.query);this.protocol&&(r+=this.protocol+'://');this.domain&&(r+=this.domain);this.port&&(r+=':'+this.port);if(this.domain&&!this.path){r+='/';}
this.path&&(r+=this.path);q&&(r+='?'+q);this.fragment&&(r+='#'+this.fragment);return r;},isFacebookURI:function(){return!this.domain||!!this.domain.match(/(^|\.)facebook\.com$/i);},getUnqualifiedURI:function(){return new URI(this).setProtocol(null).setDomain(null).setPort(null);},getQualifiedURI:function(){var uri=new URI(this);if(!uri.getDomain()){var current=URI();uri.setProtocol(current.getProtocol()).setDomain(current.getDomain()).setPort(current.getPort());}
return uri;},isSameOrigin:function(asThisURI){var uri=asThisURI||window.location.href;if(!(uri instanceof URI)){uri=new URI(uri.toString());}
if(this.getProtocol()&&this.getProtocol()!=uri.getProtocol()){return false;}
if(this.getDomain()&&this.getDomain()!=uri.getDomain()){return false;}
return true;},coerceToSameOrigin:function(targetURI){var uri=targetURI||window.location.href;if(!(uri instanceof URI)){uri=new URI(uri.toString());}
if(this.isSameOrigin(uri)){return true;}
if(this.getProtocol()!=uri.getProtocol()){return false;}
var dst=uri.getDomain().split('.');var src=this.getDomain().split('.');if(dst.pop()=='com'&&src.pop()=='com'){if(dst.pop()=='facebook'&&src.pop()=='facebook'){this.setDomain(uri.getDomain());return true;}}
return false;},go:function(){window.location.href=this;},setSubdomain:function(subdomain){var uri=new URI(this).getQualifiedURI();var domains=uri.getDomain().split('.');if(domains.length<=2){domains.unshift(subdomain);}else{domains[0]=subdomain;}
return uri.setDomain(domains.join('.'));},getSubdomain:function(){if(!this.getDomain()){return'';}
if(!this.isFacebookURI()){return null;}
var domains=this.getDomain().split('.');if(domains.length<=2){return'';}else{return domains[0];}}});

var Emote={_initialized:false,_imageBase:null,_emoteMap:null,_emoteOrderMap:null,_imageURLs:null,_regex:null,initImageURL:function(imageURL){Emote._imageURL=imageURL;},_init:function(){var staticBase=env_get('static_base');Emote._imageBase=staticBase+'images/emote/';Emote._blankImgSrc=staticBase+'images/blank.gif';var emoteOrder=['smile','frown','tongue','grin','gasp','wink','glasses','sunglasses','grumpy','unsure','cry','devil','angel','kiss','heart','kiki','squint','confused','upset','pacman','colonthree'];Emote._emoteMap={':-)':['\\:\\-\\)','smile'],':)':['\\:\\)','smile'],':]':['\\:\\]','smile'],'=)':['=\\)','smile'],':-(':['\\:\\-\\(','frown'],':(':['\\:\\(','frown'],':[':['\\:\\[','frown'],'=(':['=\\(','frown'],':-P':['\\:\\-P','tongue'],':P':['\\:P','tongue'],':-p':['\\:\\-p','tongue'],':p':['\\:p','tongue'],'=P':['=P','tongue'],':-D':['\\:\\-D','grin'],':D':['\\:D','grin'],'=D':['=D','grin'],':-O':['\\:\\-O','gasp'],':O':['\\:O','gasp'],':-o':['\\:\\-o','gasp'],':o':['\\:o','gasp'],';-)':['\\;\\-\\)','wink'],';)':['\\;\\)','wink'],'8-)':['8\\-\\)','glasses'],'8)':['8\\)','glasses'],'B-)':['B\\-\\)','glasses'],'B)':['B\\)','glasses'],'8-|':['8\\-\\|','sunglasses'],'8|':['8\\|','sunglasses'],'B-|':['B\\-\\|','sunglasses'],'B|':['B\\|','sunglasses'],'>:(':['>\\:\\(','grumpy'],'>:-(':['>\\:\\-\\(','grumpy'],':/':['\\:/','unsure'],':-/':['\\:\\-/','unsure'],':\\':['\\:\\\\','unsure'],':-\\':['\\:\\-\\\\','unsure'],":'(":["\\:'\\(",'cry'],'3:)':['3\\:\\)','devil'],'3:-)':['3\\:\\-\\)','devil'],'O:)':['O\\:\\)','angel'],'O:-)':['O\\:\\-\\)','angel'],':-*':['\\:\\-\\*','kiss'],':*':['\\:\\*','kiss'],'<3':['<3','heart'],'^_^':['\\^_\\^','kiki'],'-_-':['\\-_\\-','squint'],'o.O':['o\\.O','confused'],'O.o':['O\\.o','confused'],'>:O':['>\\:O','upset'],'>:-O':['>\\:\\-O','upset'],'>:o':['>\\:o','upset'],'>:-o':['>\\:\\-o','upset'],':v':['\\:v','pacman'],':|]':['\\:\\|\\]','robot'],':3':['\\:3','colonthree'],':putnam:':['\\:putnam\\:','putnam']};var regexArr=[];for(var match in Emote._emoteMap){regexArr.push(Emote._emoteMap[match][0]);}
var regexStr='(?:^|\\s|\'|"|\\.)('+regexArr.join('|')+')(?:\\s|\'|"|\\.|,|!|\\?|$)';Emote._regex=new RegExp(regexStr);Emote._emoteOrderMap={};for(var i=0;i<emoteOrder.length;i++){Emote._emoteOrderMap[emoteOrder[i]]=i;}
Emote._initialized=true;},htmlEmote:function(str,txtFn){if(typeof txtFn!='function'){txtFn=htmlize;}
if(!Emote._initialized){Emote._init();}
var start=0;var strRemaining=str;var retArr=[];while(true){var matchObj=Emote._regex.exec(strRemaining);if(!matchObj||!matchObj.length){break;}
var match=matchObj[1];var matchKey=Emote._emoteMap[match][1];var matchIndex=strRemaining.indexOf(match);var chunk=strRemaining.substring(0,matchIndex);if(chunk){retArr.push(txtFn(chunk));}
retArr.push('<span class="emote_text">');retArr.push(match);retArr.push('</span><img class="emote_img" ');var matchOrder;if(typeof(matchOrder=Emote._emoteOrderMap[matchKey])=='undefined'){retArr.push('src="');retArr.push(Emote._imageBase);retArr.push(matchKey);retArr.push('.gif" ');}else{var matchPos=matchOrder*-16;retArr.push('src="');retArr.push(Emote._blankImgSrc);retArr.push('" style="background:url(');retArr.push(Emote._imageURL);retArr.push(') ');retArr.push(matchPos);retArr.push('px top no-repeat" ');}
retArr.push('alt="');retArr.push(match);retArr.push('" />');strRemaining=strRemaining.substring(matchIndex+match.length);}
if(strRemaining){retArr.push(txtFn(strRemaining));}
return retArr.join('');}};

function env_get(k){return typeof(window['Env'])!='undefined'&&Env[k];}
var Util={fallbackErrorHandler:function(msg){aiert(msg);},isDevelopmentEnvironment:function(){return env_get('dev');},warn:function(){Util.log(sprintf.apply(null,arguments),'warn');},error:function(){Util.log(sprintf.apply(null,arguments),'error');},log:function(msg,type){if(Util.isDevelopmentEnvironment()){type=type||'log';if(typeof(console)!='undefined'&&console[type]){console[type](msg);}else if(typeof(window.TabConsole)!='undefined'){var con=TabConsole.getInstance();if(con){con.log(HTML(msg),type);}}else if(Util.fallbackErrorHandler){Util.fallbackErrorHandler(msg);}}else{if(type=='error'){msg+='\n\n'+Util.stack();(typeof(window['Env'])!='undefined')&&(Env.rlog)&&(typeof(window['debug_rlog'])=='function')&&debug_rlog(msg);}}},stack:function(){return(new Stack()).toString();}};

function Stack(){this.stack=[];try{var metaStack=[];try{({}).llama();}catch(e){if(e.stack){var regex=/^[^@]*?@(.+?):([0-9]+)$/mg;for(line=regex.exec(e.stack);line;line=regex.exec()){metaStack.push([line[1],line[2]]);}}}
var frame=arguments.callee,stale=[];for(var frame=arguments.callee,i=0;frame;frame=frame.caller,++i){i&&this.stack.push({func:frame,args:frame.arguments,file:metaStack[i]?metaStack[i][0]:null,line:metaStack[i]?metaStack[i][1]:null,toString:Stack.frameToString});if(stale.indexOf(frame)>=0){break;}
stale.push(frame);}}catch(e){}}
Stack.prototype.shift=function(n){this.stack.splice(0,n);return this;}
Stack.recurssion={toString:bind(Stack,'frameToString')};Stack.functionGetName=function(fn){return fn.name||(/^function *([^(]*)\(/.exec(fn)||[]).pop()||'(no name)';}
Stack.frameSrcToString=function(file,line){if(!file){return'?';}else if(file.indexOf('TabConsole.getInstance().onresult')>0){return'IceSpider';}else if(file.indexOf('with (__scope__.vars)')>0){return'FireBug';}else{return file+(line?':'+line:'');}}
Stack.frameToString=function(){if(this==Stack.recurssion){return'* * recurssion * *';}
var str=Stack.argToString(this.func)+'(';for(var i=0;i<this.args.length;i++){str+=(i?', ':'')+Stack.argToString(this.args[i]);}
return str+') @ '+Stack.frameSrcToString(this.file,this.line);}
Stack.argToString=function(arg){if(arg instanceof Function){return Stack.functionGetName(arg);}if(arg instanceof Array){return'Array';}else if(arg instanceof Object){return'Object';}else if(typeof arg=='string'){return'"'+arg.replace(/("|\\)/g,'\\$1')+'"';}else{return arg+'';}}
Stack.prototype.toString=function(){if(!this.stack.length){return'No stack trace available.';}
var str='';for(var i=0;i<this.stack.length;i++){str+=(i?'\n':'')+'#'+i+' '+this.stack[i];}
return str;}

var Configurable={getOption:function(opt){if(typeof(this.option[opt])=='undefined'){Util.warn('Failed to get option %q; it does not exist.',opt);return null;}
return this.option[opt];},setOption:function(opt,v){if(typeof(this.option[opt])=='undefined'){Util.warn('Failed to set option %q; it does not exist.',opt);}else{this.option[opt]=v;}
return this;},getOptions:function(){return this.option;}};

function Vector2(x,y,domain){copy_properties(this,{x:parseFloat(x),y:parseFloat(y),domain:domain||'pure'});};copy_properties(Vector2.prototype,{toString:function(){return'('+this.x+', '+this.y+')';},add:function(vx,vy){var x=this.x,y=this.y,l=arguments.length;if(l==1){if(vx.domain!='pure'){vx=vx.convertTo(this.domain);}
x+=vx.x;y+=vx.y;}else if(l==2){x+=parseFloat(vx);y+=parseFloat(arguments[1]);}else{Util.warn('Vector2.add called with %d arguments, should be one (a vector) or '+'two (x and y coordinates).',l);}
return new Vector2(x,y,this.domain);},mul:function(sx,sy){if(typeof(sy)=="undefined"){sy=sx;}
return new Vector2(this.x*sx,this.y*sy,this.domain);},sub:function(v){var x=this.x,y=this.y,l=arguments.length;if(l==1){if(v.domain!='pure'){v=v.convertTo(this.domain);}
x-=v.x;y-=v.y;}else if(l==2){x-=parseFloat(v);y-=parseFloat(arguments[1]);}else{Util.warn('Vector2.add called with %d arguments, should be one (a vector) or '+'two (x and y coordinates).',l);}
return new Vector2(x,y,this.domain);},distanceTo:function(v){return this.sub(v).magnitude();},magnitude:function(){return Math.sqrt((this.x*this.x)+(this.y*this.y));},convertTo:function(newDomain){if(newDomain!='pure'&&newDomain!='viewport'&&newDomain!='document'){Util.error('Domain %q is not valid; legitimate coordinate domains are %q, %q, '+'%q.',newDomain,'pure','viewport','document');return new Vector2(0,0);}
if(newDomain==this.domain){return new Vector2(this.x,this.y,this.domain);}
if(newDomain=='pure'){return new Vector2(this.x,this.y);}
if(this.domain=='pure'){Util.error('Unable to covert a pure vector to %q coordinates; a pure vector is '+'abstract and does not exist in any document coordinate system. If '+'you need to hack around this, create the vector explicitly in some '+'document coordinate domain, by passing a third argument to the '+'constructor. But you probably don\'t, and are just using the class '+'wrong. Stop doing that.',newDomain);return new Vector2(0,0);}
var o=Vector2.getScrollPosition('document');var x=this.x,y=this.y;if(this.domain=='document'){x-=o.x;y-=o.y;}else{x+=o.x;y+=o.y;}
return new Vector2(x,y,newDomain);},setElementPosition:function(el){var p=this.convertTo('document');el.style.left=parseInt(p.x)+'px';el.style.top=parseInt(p.y)+'px';return this;},setElementDimensions:function(el){el.style.width=parseInt(this.x,10)+'px';el.style.height=parseInt(this.y,10)+'px';return this;},setElementWidth:function(el){el.style.width=parseInt(this.x,10)+'px';return this;}});copy_properties(Vector2,{compass:{east:'e',west:'w',north:'n',south:'s',center:'center',northeast:'ne',northwest:'nw',southeast:'se',southwest:'sw'},getEventPosition:function(e,domain){domain=domain||'document';e=event_get(e);var x=e.pageX||(e.clientX+
(document.documentElement.scrollLeft||document.body.scrollLeft));var y=e.pageY||(e.clientY+
(document.documentElement.scrollTop||document.body.scrollTop));return(new Vector2(x,y,'document').convertTo(domain));},getScrollPosition:function(domain){domain=domain||'document';var x=document.body.scrollLeft||document.documentElement.scrollLeft;var y=document.body.scrollTop||document.documentElement.scrollTop;return(new Vector2(x,y,'document').convertTo(domain));},getElementPosition:function(el,domain){domain=domain||'document';return(new Vector2(elementX(el),elementY(el),'document').convertTo(domain));},getElementDimensions:function(el){if(ua.safari()&&el.nodeName=='TR'){var tds=el.getElementsByTagName('td');var dimensions=Vector2.getElementCompassPoint(tds[tds.length-1],Vector2.compass.southeast).sub(Vector2.getElementPosition(tds[0]));return dimensions;}
var x=el.offsetWidth||0;var y=el.offsetHeight||0;return new Vector2(x,y);},getElementCompassPoint:function(el,which){which=which||Vector2.compass.southeast;var p=Vector2.getElementPosition(el);var d=Vector2.getElementDimensions(el);var c=Vector2.compass;switch(which){case c.east:return p.add(d.x,d.y*.5);case c.west:return p.add(0,d.y*.5);case c.north:return p.add(d.x*.5,0);case c.south:return p.add(d.x*.5,d.y);case c.center:return p.add(d.mul(.5));case c.northwest:return p;case c.northeast:return p.add(d.x,0);case c.southwest:return p.add(0,d.y);case c.southeast:return p.add(d);}
Util.error('Unknown compass point %s.',which);return p;},getViewportDimensions:function(){var x=(window&&window.innerWidth)||(document&&document.documentElement&&document.documentElement.clientWidth)||(document&&document.body&&document.body.clientWidth)||0;var y=(window&&window.innerHeight)||(document&&document.documentElement&&document.documentElement.clientHeight)||(document&&document.body&&document.body.clientHeight)||0;return new Vector2(x,y);},getDocumentDimensions:function(){var x=(document&&document.body&&document.body.scrollWidth)||(document&&document.documentElement&&document.documentElement.scrollWidth)||0;var y=(document&&document.body&&document.body.scrollHeight)||(document&&document.documentElement&&document.documentElement.scrollHeight)||0;return new Vector2(x,y);},scrollTo:function(v){if(!(v instanceof Vector2)){var x=Vector2.getScrollPosition().x;var y=Vector2.getElementPosition($(v)).y;y=y-Math.min(0,Math.max(Vector2.getViewportDimensions().y/3,100));v=new Vector2(x,y,'document');}
v=v.convertTo('document');if(animation){animation(document.body).to('scrollTop',v.y).ease(animation.ease.end).duration(750).go();}else if(window.scrollTo){window.scrollTo(v.x,v.y);}}});var mouseX=function(e){return Vector2.getEventPosition(e).x;}
var mouseY=function(e){return Vector2.getEventPosition(e).y;}
var pageScrollX=function(){return Vector2.getScrollPosition().x;}
var pageScrollY=function(){return Vector2.getScrollPosition().y;}
var getViewportWidth=function(){return Vector2.getViewportDimensions().x;}
var getViewportHeight=function(){return Vector2.getViewportDimensions().y;}
var operaIgnoreScroll={'table':true,'inline-table':true,'inline':true};function elementX(obj){if(ua.safari()<500&&obj.tagName=='TR'){obj=obj.firstChild;}
var left=obj.offsetLeft;var op=obj.offsetParent;while(obj.parentNode&&document.body!=obj.parentNode){obj=obj.parentNode;if(!(ua.opera()<9.50)||!operaIgnoreScroll[window.getComputedStyle(obj,'').getPropertyValue('display')]){left-=obj.scrollLeft;}
if(op==obj){if(ua.safari()<500&&obj.tagName=='TR'){left+=obj.firstChild.offsetLeft;}else{left+=obj.offsetLeft;}
op=obj.offsetParent;}}
return left;}
function elementY(obj){if(ua.safari()<500&&obj.tagName=='TR'){obj=obj.firstChild;}
var top=obj.offsetTop;var op=obj.offsetParent;while(obj.parentNode&&document.body!=obj.parentNode){obj=obj.parentNode;if(!isNaN(obj.scrollTop)){if(!(ua.opera()<9.50)||!operaIgnoreScroll[window.getComputedStyle(obj,'').getPropertyValue('display')]){top-=obj.scrollTop;}}
if(op==obj){if(ua.safari()<500&&obj.tagName=='TR'){top+=obj.firstChild.offsetTop;}else{top+=obj.offsetTop;}
op=obj.offsetParent;}}
return top;}

function Rect(t,r,b,l,domain){if(this===window){if(t instanceof Rect){return t;}
return Rect.getElementBounds($(t));}
copy_properties(this,{t:t,r:r,b:b,l:l,domain:domain||'pure'});};copy_properties(Rect.prototype,{w:function(){return this.r-this.l;},h:function(){return this.b-this.t;},area:function(){return this.w()*this.h();},toString:function(){return'(('+this.l+', '+this.t+'), ('+this.r+', '+this.b+'))';},intersects:function(v){v=Rect(v).convertTo(this.domain);var u=this;if(u.l>v.r||v.l>u.r||u.t>v.b||v.t>u.b){return false;}
return true;},intersectingArea:function(v){v=Rect(v).convertTo(this.domain);var u=this;if(!this.intersects(v)){return null;}
return new Rect(Math.max(u.t,v.t),Math.min(u.r,v.r),Math.min(u.b,v.b),Math.max(u.l,v.l)).area();},contains:function(v){v=Rect(v).convertTo(this.domain);var u=this;if(v instanceof Vector2){return(u.l<=v.x&&u.r>=v.x&&u.t<=v.y&&u.b>=v.y);}else{return(u.l<=v.l&&u.r>=u.r&&u.t<=v.t&&u.b>=v.b);}},canContain:function(v){v=Rect(v).convertTo(this.domain);return(v.h()<=this.h())&&(v.w()<=this.w());},forceBelow:function(v,min){min=min||0;v=Rect(v).convertTo(this.domain);if(v.b>this.t){return this.offset(0,(v.b-this.t)+min);}
return this;},offset:function(x,y){return new Rect(this.t+y,this.r+x,this.b+y,this.l+x,this.domain);},expand:function(x,y){return new Rect(this.t,this.r+x,this.b+y,this.l,this.domain);},scale:function(x,y){y=y||x;return new Rect(this.t,this.l+(this.w()*x),this.t+(this.h()*y),this.l,this.domain);},setDimensions:function(x,y){return new Rect(this.t,this.l+x,this.t+y,this.l,this.domain);},setPosition:function(x,y){return new Rect(x,this.w(),this.h(),y,this.domain);},boundWithin:function(v){if(v.contains(this)||!v.canContain(this)){return this;}
var x=0,y=0;if(this.l<v.l){x=v.l-this.l;}else if(this.r>v.r){x=v.r-this.r;}
if(this.t<v.t){y=v.t-this.t;}else if(this.b>v.b){y=v.b-this.b;}
return this.offset(x,y);},setElementBounds:function(el){this.getPositionVector().setElementPosition(el);this.getDimensionVector().setElementDimensions(el);return this;},getPositionVector:function(){return new Vector2(this.l,this.t,this.domain);},getDimensionVector:function(){return new Vector2(this.w(),this.h(),'pure');},convertTo:function(newDomain){if(this.domain==newDomain){return this;}
if(newDomain=='pure'){return new Rect(this.t,this.r,this.b,this.l,'pure');}
if(this.domain=='pure'){Util.error('Unable to convert a pure rect to %q coordinates.',newDomain);return new Rect(0,0,0,0);}
var p=new Vector2(this.l,this.t,this.domain).convertTo(newDomain);return new Rect(p.y,p.x+this.w(),p.y+this.h(),p.x,newDomain);},constrict:function(x,y){if(typeof(y)=='undefined'){y=x;}
x=x||0;return new Rect(this.t+y,this.r-x,this.b-y,this.l+x,this.domain);},expandX:function(){return new Rect(this.t,Number.POSITIVE_INFINITY,this.b,Number.NEGATIVE_INFINITY);},expandY:function(){return new Rect(number.NEGATIVE_INFINITY,this.r,Number.POSITIVE_INFINITY,this.l);}});copy_properties(Rect,{newFromVectors:function(pos,dim){return new Rect(pos.y,pos.x+dim.x,pos.y+dim.y,pos.x,pos.domain);},getElementBounds:function(el){return Rect.newFromVectors(Vector2.getElementPosition(el),Vector2.getElementDimensions(el));},getViewportBounds:function(){return Rect.newFromVectors(Vector2.getScrollPosition(),Vector2.getViewportDimensions());},getDocumentBounds:function(){return Rect.newFromVectors(new Vector2(0,0,'document'),Vector2.getDocumentDimensions());}});

function rand32(){return Math.floor(Math.random()*4294967295);}

function gen_unique(){return++gen_unique._counter;}
gen_unique._counter=0;function create_hidden_input(name,value){return $N('input',{name:name,id:name,value:value,type:'hidden'});}
var KEYS={BACKSPACE:8,TAB:9,RETURN:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};var KeyCodes={Up:63232,Down:63233,Left:63234,Right:63235};function MenuBar(core_menu_id){this.core_menu_id=core_menu_id;this.core_menu=$(core_menu_id);this.menus=DOM.scry(this.core_menu,'div.fb_menu');this.timeout=250;}
copy_properties(MenuBar.prototype,{setTimeoutInterval:function(timeout){this.timeout=timeout;return this;},init:function(){var i;for(i=0;i<this.menus.length;i++){var menu=this.menus[i];var dropdown_id=menu.id+'_dropdown';if(ge(dropdown_id)){var menu_anchor=menu.firstChild.firstChild;dropmenu(menu_anchor).setPosition((menu.id.indexOf('account')!=-1?dropmenu.ALIGN_RIGHT:dropmenu.ALIGN_LEFT)).registerHTMLMenu(dropdown_id).addHook('show',bind(this,'_onShowCallback',menu_anchor,$(dropdown_id))).addHook('hide',bind(this,'_onHideCallback',menu_anchor,$(dropdown_id)));}}},_onShowCallback:function(clickTarget,menuElement){CSS.addClass(clickTarget,'hover');var scroller=window['ScrollArea']&&ScrollArea.getInnerInstance(menuElement);if(scroller){scroller.moveTo(0);}},_onHideCallback:function(clickTarget,menuElement){CSS.removeClass(clickTarget,'hover');}});function optional_drop_down_menu(arrow,link,menu,event,arrow_class,arrow_old_class,on_click_callback,off_click_callback,offset_el,offset_info)
{if(menu.style.display=='none'){menu.style.display='block';if(offset_info&&offset_el){for(prop in offset_info){switch(prop){case'top':menu.style.top=(offset_el.offsetTop
+offset_info[prop])
+'px';break;case'left':menu.style.left=(offset_el.offsetLeft
+offset_info[prop])
+'px';break;case'right':menu.style.left=(offset_el.offsetLeft
+offset_el.offsetWidth
-offset_info[prop]
-menu.offsetWidth)
+'px';break;case'bottom':menu.style.top=(offset_el.offsetTop
+offset_el.offsetHeight
-offset_info[prop]
-menu.offsetHeight)
+'px';break;}}}
if(arrow){var old_arrow_classname=arrow_old_class?arrow_old_class:arrow.className;}
if(link){CSS.addClass(link,'active')}
if(arrow){arrow.className=arrow_class?arrow_class:'global_menu_arrow_active';}
var justChanged=true;var shim=ge(menu.id+'_iframe');if(shim){shim.style.top=menu.style.top;shim.style.right=menu.style.right;shim.style.display='block';shim.style.width=(menu.offsetWidth+2)+'px';shim.style.height=(menu.offsetHeight+2)+'px';}
menu.offclick=function(e){if(!justChanged){hide(this);if(link){CSS.removeClass(link,'active');}
if(arrow){arrow.className=old_arrow_classname;}
var shim=ge(menu.id+'_iframe');if(shim){shim.style.display='none';shim.style.width=menu.offsetWidth+'px';shim.style.height=menu.offsetHeight+'px';}
if(off_click_callback){off_click_callback(e);}
removeEventBase(document,'click',this.offclick,menu.id);}else{justChanged=false;}}.bind(menu);if(on_click_callback){on_click_callback();}
addEventBase(document,'click',menu.offclick,menu.id);onunloadRegister(menu.offclick,true);}
return false;}
function position_app_switcher(){var switcher=ge('app_switcher');var menu=ge('app_switcher_menu');menu.style.top=(switcher.offsetHeight-1)+'px';menu.style.right='0px';}
function getTableRowShownDisplayProperty(){if(ua.ie()){return'inline';}else{return'table-row';}}
function showTableRow()
{for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display=getTableRowShownDisplayProperty();}
return false;}
function getParentRow(el){el=ge(el);while(el.tagName&&el.tagName!="TR"){el=el.parentNode;}
return el;}
function show_standard_status(status){s=ge('standard_status');if(s){var header=s.firstChild;header.innerHTML=status;show('standard_status');}}
function hide_standard_status(){s=ge('standard_status');if(s){hide('standard_status');}}
function adjustImage(obj,stop_word,max){var block=obj.parentNode;while(get_style(block,'display')!='block'&&block.parentNode){block=block.parentNode;}
var width=block.offsetWidth;if(obj.offsetWidth>width){try{if(ua.ie()){var img_div=document.createElement('div');img_div.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+obj.src.replace('"','%22')+'", sizingMethod="scale")';img_div.style.width=width+'px';img_div.style.height=Math.floor(((width/obj.offsetWidth)*obj.offsetHeight))+'px';if(obj.parentNode.tagName=='A'){img_div.style.cursor='pointer';}
obj.parentNode.insertBefore(img_div,obj);obj.parentNode.removeChild(obj);}else{throw 1;}}catch(e){obj.style.width=width+'px';}}
remove_css_class_name(obj,'img_loading');}
function imageConstrainSize(src,maxX,maxY,placeholderid){var image=new Image();image.onload=function(){if(image.width>0&&image.height>0){var width=image.width;var height=image.height;if(width>maxX||height>maxY){var desired_ratio=maxY/maxX;var actual_ratio=height/width;if(actual_ratio>desired_ratio){width=width*(maxY/height);height=maxY;}else{height=height*(maxX/width);width=maxX;}}
var placeholder=ge(placeholderid);if(placeholder){var newimage=document.createElement('img');newimage.src=src;newimage.width=width;newimage.height=height;placeholder.parentNode.insertBefore(newimage,placeholder);placeholder.parentNode.removeChild(placeholder);}}}
image.src=src;}
function login_form_change(){var persistent=ge('persistent');if(persistent){persistent.checked=false;}}
function require_password_confirmation(onsuccess,oncancel){if((!getCookie('sid')||getCookie('sid')=='0')||getCookie('pk')){onsuccess();return;}
require_password_confirmation.onsuccess=onsuccess;require_password_confirmation.oncancel=oncancel;(new pop_dialog()).show_ajax_dialog('/ajax/password_check_dialog.php');}
function search_validate(search_input_id){var search_input=$(search_input_id);if(search_input.value!=""&&search_input.value!=search_input.getAttribute('placeholder')){return true;}else{search_input.focus();return false;}}
function abTest(data,inline)
{AsyncRequest.pingURI('/ajax/abtest.php',{data:data,"post_form_id":null},true);if(!inline){return true;}}
function ac(metadata)
{AsyncRequest.pingURI('/ajax/ac.php',{'meta':metadata},true);return true;}
function alc(metadata)
{AsyncRequest.pingURI('/ajax/alc.php',{'meta':metadata},true);return true;}
function scribe_log(category,message){AsyncRequest.pingURI('/ajax/scribe_log.php',{'category':category,'message':message,'post_form_id':null},true);}
function image_has_loaded(obj){try{if((obj.mimeType!=null&&obj.complete&&obj.mimeType!='')||(obj.naturalHeight!=null&&obj.complete&&obj.naturalHeight!=0)){return true;}else if(ua.safari()<3){var new_image=new Image();new_image.src=obj.src;if(new_image.complete==true){return true;}
delete new_image;}}catch(exception){return true;}}
function image_has_failed(obj){if((obj.complete==null&&obj.width==20&&obj.height==20)||(obj.mimeType!=null&&obj.complete&&obj.mimeType=='')||(obj.naturalHeight!=null&&obj.complete&&obj.naturalHeight==0)){return true;}}
function cavalry_log(cohort,server_time,filepath,pagetype){if(!window.Env||typeof(___t_measuring)=='undefined'||!___t_measuring){___t_measuring=false;return;}
if(!filepath){filepath=encodeURIComponent(window.location);}
if(!pagetype){pagetype='NORMAL';}
window.scrollBy(0,1);var t=[server_time,___tcss,___tjs+___tcss,___thtml+___tcss+___tjs,parseInt(Env.t_domcontent-Env.start,10),parseInt(Env.t_onload-Env.start,10),parseInt(Env.t_layout-Env.start,10),parseInt(((new Date()).getTime())-Env.start,10),parseInt(Env.t_doneonloadhooks-Env.t_willonloadhooks,10)];var resInfo=[];if(typeof(cavalry_measure)!='undefined'){for(var i=0;i<cavalry_measure.length;i++){c=cavalry_measure[i];resInfo.push(c.name+":"+c.time);}}
var width=0;var height=0;if(typeof(window.innerWidth)=='number'){width=window.innerWidth;height=window.innerHeight;}else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){width=document.documentElement.clientWidth;height=document.documentElement.clientHeight;}else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){width=document.body.clientWidth;height=document.body.clientHeight;}
(new Image()).src="/common/instrument_endpoint.php?"
+"g="+cohort
+"&uri="+filepath
+"&t="+t.join(',')
+"&p="+pagetype
+"&f="+encodeURIComponent(resInfo.join(','))
+"&sw="+width
+"&sh="+height
+"&"+parseInt(Math.random()*10000,10);___t_measuring=false;}
function show_search_profile(user_id){var async=new AsyncRequest().setURI('/ajax/search_profile.php').setData({id:user_id}).setMethod('GET').setReadOnly(true);new Dialog().setAsync(async).setButtons(Dialog.CLOSE).setContentWidth(490).show();}
function _search_profile_link_handler(link){var uri=new URI(link.href);if(uri.getPath()=='/s.php'){var query=uri.getQueryData();if(query.k==100000080){show_search_profile(query.id);return false;}}}
onloadRegister(function(){LinkController.registerHandler(_search_profile_link_handler);});function warn_if_unsaved(form_id){var form=ge(form_id);if(!form){Util.error("warn_if_unsaved couldn't find form in order to save its "
+"original state.  This is probably because you called "
+"render_start_form_with_unsaved_warning to render a form, "
+"but then didn't echo it into page.  To get around this, you "
+"can call render_start_form, and then call warn_if_unsaved "
+"yourself once you've caused the form to appear.");return;}
if(!_unsaved_forms_to_check_for){_unsaved_forms_to_check_for={};LinkController.registerHandler(_check_for_unsaved_forms);}
form.original_state=serialize_form(form);_unsaved_forms_to_check_for[form_id]=true;}
function _check_for_unsaved_forms(link){for(var form_id in _unsaved_forms_to_check_for){var form=ge(form_id);if(form&&form.original_state&&!are_equal(form.original_state,serialize_form(form))){var href=link.href;var submit=_find_first_submit_button(form);var buttons=[];if(submit){buttons.push({name:'save',label:tx('sh:save-button'),handler:function(){submit.click();}});}
buttons.push({name:'dont_save',label:tx('uw:dont-save'),className:'inputaux',handler:function(){window.location.href=href;}});buttons.push(Dialog.CANCEL);new Dialog().setTitle(tx('uw:title')).setBody(tx('uw:body')).setButtons(buttons).setModal().show();return false;}}}
function _find_first_submit_button(root_element){var inputs=root_element.getElementsByTagName('input');for(var i=0;i<inputs.length;++i){if(inputs[i].type.toUpperCase()=='SUBMIT'){return inputs[i];}}
return null;}
_unsaved_forms_to_check_for=undefined;function textLimit(ta,count){var text=ge(ta);if(text.value.length>count){text.value=text.value.substring(0,count);if(arguments.length>2){$(arguments[2]).style.display='block';}}}
function textLimitStrict(text_id,limit,message_id,count_id,submit_id){var text=ge(text_id);var len=text.value.length;var diff=len-limit;if(diff>0){if(diff>25000){text.value=text.value.substring(0,limit+25000);diff=25000;}
$(message_id).style.display='block';$(count_id).innerHTML=diff;$(submit_id).disabled=true;}else if(len==0){$(message_id).style.display='none';$(submit_id).disabled=true;$(count_id).innerHTML=1;}else{if($(count_id).innerHTML!=0){$(count_id).innerHTML=0;$(message_id).style.display='none';$(submit_id).disabled=false;}}}
function city_selector_onfound(input,obj){input.value=obj?obj.i:-1;}
function city_selector_onselect(success){if(window[success]){window[success]();}}
ua.populate();_bootstrapEventHandlers();adjustUABehaviors();if(navigator&&navigator.userAgent&&!(parseInt((/Gecko\/([0-9]+)/.exec(navigator.userAgent)||[]).pop())<=20060508)){document.domain='facebook.com';}

var DOM={tryElement:function(id){if(typeof(id)=='undefined'){Util.error('Tried to get "undefined" element!');return null;}
var obj;if(typeof(id)=='string'){obj=document.getElementById(id);if(!(ua.ie()>=7)){return obj;}
if(!obj){return null;}else if(typeof(obj.id)=='string'&&obj.id==id){return obj;}else{var candidates=document.getElementsByName(id);if(!candidates||!candidates.length){return null;}
var maybe=[];for(var ii=0;ii<candidates.length;ii++){var c=candidates[ii];if(!c.id&&id){continue;}
if(typeof(c.id)=='string'&&c.id!=id){continue;}
maybe.push(candidates[ii]);}
if(!maybe.length){return null;}
return maybe[0];}}
return id;},getElement:function(id){var el=DOM.tryElement.apply(null,arguments);if(!el){Util.warn('Tried to get element %q, but it is not present in the page. (Use '+'ge() to test for the presence of an element.)',arguments[0]);}
return el;},setText:function(el,text){if(ua.firefox()){el.textContent=text;}else{el.innerText=text;}},getText:function(el){if(ua.firefox()){return el.textContent;}else{return el.innerText;}},setContent:function(el,content){if(ua.ie()){for(var ii=el.childNodes.length-1;ii>=0;--ii){DOM.remove(el.childNodes[ii]);}}else{el.innerHTML='';}
if(content instanceof HTML){set_inner_html(el,content.toString());}else if(is_scalar(content)){content=document.createTextNode(content);el.appendChild(content);}else if(is_node(content)){el.appendChild(content);}else if(content instanceof Array){for(var ii=0;ii<content.length;ii++){var node=content[ii];if(!is_node(node)){node=document.createTextNode(node);}
el.appendChild(node);}}else{Util.error('No way to set content %q.',content);}},remove:function(element){element=$(element);if(element.removeNode){element.removeNode(true);}else{for(var ii=element.childNodes.length-1;ii>=0;--ii){DOM.remove(element.childNodes[ii]);}
element.parentNode.removeChild(element);}},create:function(element,attributes,children){element=document.createElement(element);if(attributes){attributes=copy_properties({},attributes);if(attributes.style){copy_properties(element.style,attributes.style);delete attributes.style;}
copy_properties(element,attributes);}
if(children!=undefined){DOM.setContent(element,children);}
return element;},createFromMarkup:function(markup){var wrapper_elm=document.createElement('div');set_inner_html(wrapper_elm,markup);return wrapper_elm.childNodes;},scry:function(element,pattern){pattern=pattern.split('.');var tag=pattern[0]||null;if(!tag){return[];}
var cls=pattern[1]||null;var candidates=element.getElementsByTagName(tag);if(cls!==null){var satisfy=[];for(var ii=0;ii<candidates.length;ii++){if(CSS.hasClass(candidates[ii],cls)){satisfy.push(candidates[ii]);}}
candidates=satisfy;}
return candidates;},prependChild:function(parent,child){parent=$(parent);if(parent.firstChild){parent.insertBefore(child,parent.firstChild);}else{parent.appendChild(child);}},getCaretPosition:function(element){element=$(element);if(!is_node(element,['input','textarea'])){return{start:undefined,end:undefined};}
if(!document.selection){return{start:element.selectionStart,end:element.selectionEnd};}
if(is_node(element,'input')){var range=document.selection.createRange();return{start:-range.moveStart('character',-element.value.length),end:-range.moveEnd('character',-element.value.length)};}else{var range=document.selection.createRange();var range2=range.duplicate();range2.moveToElementText(element);range2.setEndPoint('StartToEnd',range);var end=element.value.length-range2.text.length;range2.setEndPoint('StartToStart',range);return{start:element.value.length-range2.text.length,end:end};}},addEvent:function(element,type,func,name_hash){return addEventBase(element,type,func,name_hash);}};var $N=DOM.create;var ge=DOM.tryElement;var $$=function _$$(rules){var args=[document].concat(Array.prototype.slice.apply(arguments));return DOM.scry.apply(null,args);}
var $=DOM.getElement;var remove_node=DOM.remove;var prependChild=DOM.prependChild;var get_caret_position=DOM.getCaretPosition;function is_node(o,of_type){if(typeof(Node)=='undefined'){Node=null;}
try{if(!o||!((Node!=undefined&&o instanceof Node)||o.nodeName)){return false;}}catch(ignored){return false;}
if(typeof(of_type)!=="undefined"){if(!(of_type instanceof Array)){of_type=[of_type];}
var name;try{name=new String(o.nodeName).toUpperCase();}catch(ignored){return false;}
for(var ii=0;ii<of_type.length;ii++){try{if(name==of_type[ii].toUpperCase()){return true;}}catch(ignored){}}
return false;}
return true;}
function is_descendent(base_obj,target_id){var target_obj=ge(target_id);if(base_obj==null)return;while(base_obj!=target_obj){if(base_obj.parentNode){base_obj=base_obj.parentNode;}else{return false;}}
return true;}
function iterTraverseDom(root,visitCb){var c=root,n=null;var it=0;do{n=c.firstChild;if(!n){if(visitCb(c)==false)
return;n=c.nextSibling;}
if(!n){var tmp=c;do{n=tmp.parentNode;if(n==root)
break;if(visitCb(n)==false)
return;tmp=n;n=n.nextSibling;}
while(!n);}
c=n;}
while(c!=root);}
function insertAfter(parent,child,elem){if(parent!=child.parentNode){Util.error('child is not really a child of parent - wtf, seriously.');}
if(child.nextSibling){var ret=parent.insertBefore(elem,child.nextSibling);}else{var ret=parent.appendChild(elem);}
if(!ret){return null;}
return elem;}
function set_caret_position(obj,start,end){if(document.selection){if(obj.tagName=='TEXTAREA'){var i=obj.value.indexOf("\r",0);while(i!=-1&&i<end){end--;if(i<start){start--;}
i=obj.value.indexOf("\r",i+1);}}
var range=obj.createTextRange();range.collapse(true);range.moveStart('character',start);if(end!=undefined){range.moveEnd('character',end-start);}
range.select();}else{obj.selectionStart=start;var sel_end=end==undefined?start:end;obj.selectionEnd=Math.min(sel_end,obj.value.length);obj.focus();}}

var CSS={hasClass:function(element,className){element=$(element);if(element&&className&&element.className){return new RegExp('\\b'+trim(className)+'\\b').test(element.className);}
return false;},addClass:function(element,className){element=$(element);if(element&&className){if(!CSS.hasClass(element,className)){if(element.className){element.className+=' '+trim(className);}else{element.className=trim(className);}}}
return this;},removeClass:function(element,className){element=$(element);if(element&&className&&element.className){className=trim(className);var regexp=new RegExp('\\b'+className+'\\b','g');element.className=element.className.replace(regexp,'');}
return this;},conditionClass:function(element,className,shouldShow){element=$(element);if(shouldShow){CSS.addClass(element,className);}else{CSS.removeClass(element,className);}},setClass:function(element,className){element=$(element);element.className=className;return this;},toggleClass:function(element,className){element=$(element);if(CSS.hasClass(element,className)){return CSS.removeClass(element,className);}else{return CSS.addClass(element,className);}},getStyle:function(element,property){element=$(element);function hyphenate(property){return property.replace(/[A-Z]/g,function(match){return'-'+match.toLowerCase();});}
if(window.getComputedStyle){return window.getComputedStyle(element,null).getPropertyValue(hyphenate(property));}
if(document.defaultView&&document.defaultView.getComputedStyle){var computedStyle=document.defaultView.getComputedStyle(element,null);if(computedStyle)
return computedStyle.getPropertyValue(hyphenate(property));if(property=="display")
return"none";Util.error("Can't retrieve requested style %q due to a bug in Safari",property);}
if(element.currentStyle){return element.currentStyle[property];}
return element.style[property];},setOpacity:function(element,opacity){element=$(element);var opaque=(opacity==1);try{element.style.opacity=(opaque?'':''+opacity);}catch(ignored){}
try{element.style.filter=(opaque?'':'alpha(opacity='+(opacity*100)+')');}catch(ignored){}},getOpacity:function(element){element=$(element);var opacity=get_style(element,'filter');var val=null;if(opacity&&(val=/(\d+(?:\.\d+)?)/.exec(opacity))){return parseFloat(val.pop())/100;}else if(opacity=get_style(element,'opacity')){return parseFloat(opacity);}else{return 1.0;}},Cursor:{kGrabbable:'grabbable',kGrabbing:'grabbing',kEditable:'editable',set:function(element,name){element=$(element);element=element||document.body;switch(name){case CSS.Cursor.kEditable:name='text';break;case CSS.Cursor.kGrabbable:if(ua.firefox()){name='-moz-grab';}else{name='move';}
break;case CSS.Cursor.kGrabbing:if(ua.firefox()){name='-moz-grabbing';}else{name='move';}
break;}
element.style.cursor=name;}}};var has_css_class_name=CSS.hasClass;var add_css_class_name=CSS.addClass;var remove_css_class_name=CSS.removeClass;var toggle_css_class_name=CSS.toggleClass;var get_style=CSS.getStyle;var set_opacity=CSS.setOpacity;var get_opacity=CSS.getOpacity;

function getRadioFormValue(obj){for(i=0;i<obj.length;i++){if(obj[i].checked){return obj[i].value;}}
return null;}
function getElementsByTagNames(list,obj){if(!obj)var obj=document;var tagNames=list.split(',');var resultArray=new Array();for(var i=0;i<tagNames.length;i++){var tags=obj.getElementsByTagName(tagNames[i]);for(var j=0;j<tags.length;j++){resultArray.push(tags[j]);}}
var testNode=resultArray[0];if(!testNode)return[];if(testNode.sourceIndex){resultArray.sort(function(a,b){return a.sourceIndex-b.sourceIndex;});}
else if(testNode.compareDocumentPosition){resultArray.sort(function(a,b){return 3-(a.compareDocumentPosition(b)&6);});}
return resultArray;}
function get_all_form_inputs(root_element){if(!root_element){root_element=document;}
return getElementsByTagNames('input,select,textarea,button',root_element);}
function get_form_select_value(select){return select.options[select.selectedIndex].value;}
function set_form_select_value(select,value){for(var i=0;i<select.options.length;++i){if(select.options[i].value==value){select.selectedIndex=i;break;}}}
function get_form_attr(form,attr){var val=form[attr];if(typeof val=='object'&&val.tagName=='INPUT'){var pn=val.parentNode,ns=val.nextSibling,node=val;pn.removeChild(node);val=form[attr];ns?pn.insertBefore(node,ns):pn.appendChild(node);}
return val;}
function serialize_form_helper(data,name,value){var match=/([^\]]+)\[([^\]]*)\](.*)/.exec(name);if(match){data[match[1]]=data[match[1]]||{};if(match[2]==''){var i=0;while(data[match[1]][i]!=undefined){i++;}}else{i=match[2];}
if(match[3]==''){data[match[1]][i]=value;}else{serialize_form_helper(data[match[1]],i.concat(match[3]),value);}}else{data[name]=value;}}
function serialize_form_fix(data){var keys=[];for(var i in data){if(data instanceof Object){data[i]=serialize_form_fix(data[i]);}
keys.push(i);}
var j=0,is_array=true;keys.sort().each(function(i){if(i!=j++){is_array=false;}});if(is_array){var ret={};keys.each(function(i){ret[i]=data[i];});return ret;}else{return data;}}
function serialize_form(obj){var data={};var elements=obj.tagName=='FORM'?obj.elements:get_all_form_inputs(obj);for(var i=elements.length-1;i>=0;i--){if(elements[i].name&&!elements[i].disabled){if(!elements[i].type||((elements[i].type=='radio'||elements[i].type=='checkbox')&&elements[i].checked)||elements[i].type=='text'||elements[i].type=='password'||elements[i].type=='hidden'||elements[i].tagName=='TEXTAREA'||elements[i].tagName=='SELECT'){serialize_form_helper(data,elements[i].name,elements[i].value);}}}
return serialize_form_fix(data);}
function is_button(element){var tagName=element.tagName.toUpperCase();if(tagName=='BUTTON'){return true;}
if(tagName=='INPUT'&&element.type){var type=element.type.toUpperCase();return type=='BUTTON'||type=='SUBMIT';}
return false;}
function do_post(uri){var pieces=/(^([^?])+)\??(.*)$/.exec(uri.toString());var form=document.createElement('form');form.action=pieces[1];form.method='post';form.style.display='none';var sparam=/&?([^=]+)(?:=([^&]+)|&|$)/g;var param=null;if(ge('post_form_id')){pieces[3]+='&post_form_id='+$('post_form_id').value;}
while(param=sparam.exec(pieces[3])){var input=document.createElement('input');input.type='hidden';input.name=decodeURIComponent(param[1]);input.value=decodeURIComponent(param[2]);form.appendChild(input);}
document.body.appendChild(form);form.submit();return false;}
function dynamic_post(uri,params){var form=document.createElement('form');form.action=uri.toString();form.method='POST';form.style.display='none';if(ge('post_form_id')){params['post_form_id']=$('post_form_id').value;}
for(var param in params){var input=document.createElement('input');input.type='hidden';input.name=param;input.value=params[param];form.appendChild(input);}
document.body.appendChild(form);form.submit();return false;}

function HTML(content){if(this===window){return new HTML(content);}
this.content=content;return this;}
copy_properties(HTML.prototype,{toString:function(){return this.content;}});

function show(){for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display='';}
return false;}
function hide(){for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display='none';}
return false;}
function shown(el){el=ge(el);return(el.style.display!='none'&&!(el.style.display==''&&el.offsetWidth==0));}
function toggle(){for(var i=0;i<arguments.length;i++){var element=$(arguments[i]);element.style.display=get_style(element,"display")=='block'?'none':'block';}
return false;}
function toggleDisplayNone(){for(var i=0;i<arguments.length;i++){var element=$(arguments[i]);if(shown(element)){hide(element);}else{show(element);}}
return false;}
function set_inner_html(obj,html,defer_js_execution){var dummy='<span style="display:none">&nbsp;</span>';html=html.replace('<style',dummy+'<style');html=html.replace('<STYLE',dummy+'<STYLE');html=html.replace('<script',dummy+'<script');html=html.replace('<SCRIPT',dummy+'<SCRIPT');obj.innerHTML=html;if(defer_js_execution){eval_inner_js.bind(null,obj).defer();}else{eval_inner_js(obj);}
(function(){var handlers=set_inner_html._handlers;for(var i=0,l=handlers.length;i<l;++i){handlers[i](obj);}}).defer();}
set_inner_html.registerHandler=function(callback,call_now){if(call_now){callback(document.body);}
set_inner_html._handlers.push(callback);};set_inner_html._handlers=[bind(window,'addSafariLabelSupport')];function eval_inner_js(obj){var scripts=obj.getElementsByTagName('script');for(var i=0;i<scripts.length;i++){if(scripts[i].src){var script=document.createElement('script');script.type='text/javascript';script.src=scripts[i].src;document.body.appendChild(script);}else{try{eval_global(scripts[i].innerHTML);}catch(e){if(typeof console!='undefined'){console.error(e);}}}}}
function eval_global(js){var obj=document.createElement('script');obj.type='text/javascript';try{obj.innerHTML=js;}catch(e){obj.text=js;}
document.body.appendChild(obj);}

function DOMControl(root){copy_properties(this,{root:root&&$(root),updating:false});if(root){root.getControl=identity.bind(null,this);}}
copy_properties(DOMControl.prototype,{getRoot:function(){return this.root;},beginUpdate:function(){if(this.updating){return false;}
this.updating=true;return true;},endUpdate:function(){this.updating=false;},update:function(){if(!this.beginUpdate()){return this;}
this.onupdate();this.endUpdate();}});

function TextInputControl(textinput){this.parent.construct(this,textinput);copy_properties(this,{placeholderText:null,maxLength:this.getRoot().maxLength||null,radio:null,focused:false,nativePlaceholder:false});var r=this.getRoot();if((String(r.type).toLowerCase()=='search')&&ua.safari()){this.nativePlaceholder=true;this.setPlaceholderText(r.getAttribute('placeholder'));}
DOM.addEvent(r,'focus',this.setFocused.bind(this,true));DOM.addEvent(r,'blur',this.setFocused.bind(this,false));var up=this.update.bind(this);DOM.addEvent(r,'keydown',up);DOM.addEvent(r,'keyup',up);DOM.addEvent(r,'keypress',up);setInterval(up,150);this.setFocused(false);}
TextInputControl.extend(DOMControl);copy_properties(TextInputControl.prototype,{associateWithRadioButton:function(element){this.radio=element&&$(element);return this;},setMaxLength:function(maxlength){this.maxLength=maxlength;this.getRoot().maxLength=this.maxLength||null;return this;},getValue:function(){if(!this.focused&&this.getRoot().value==this.placeholderText){return null;}
return this.getRoot().value;},isEmpty:function(){var v=this.getValue();return(v===null||v=='');},setValue:function(value){this.getRoot().value=value;this.update();return this;},clear:function(){return this.setValue('');},isFocused:function(){return this.focused;},setFocused:function(focused){var empty=this.isEmpty();this.focused=focused;if(this.placeholderText&&!this.nativePlaceholder){var r=this.getRoot();var v=r.value;if(this.focused){CSS.removeClass(r,'DOMControl_placeholder');if(empty){this.clear();}}else if(empty){CSS.addClass(r,'DOMControl_placeholder');this.setValue(this.placeholderText);}}
this.update();return this;},setPlaceholderText:function(text){this.placeholderText=text;if(this.nativePlaceholder){this.getRoot().setAttribute('placeholder',text);}
return this.setFocused(this.isFocused());},onupdate:function(){if(this.radio){if(this.focused){this.radio.checked=true;}}
var r=this.getRoot();if(this.maxLength>0){if(r.value.length>this.maxLength){r.value=r.value.substring(0,this.maxLength);}}
this.setFocused(this.focused);}});function placeholderSetup(id){if(!ge(id)){Util.warn('Setting up a placeholder for an element which does not exist: %q.',id);return;}
if(!$(id).getAttribute('placeholder')){Util.warn('Setting up a placeholder for an element with no placeholder text: %q.',id);return;}
return new TextInputControl($(id)).setPlaceholderText($(id).getAttribute('placeholder'));}

function TextAreaControl(textarea){copy_properties(this,{autogrow:false,shadow:null,originalHeight:null,metricsValue:null});this.parent.construct(this,textarea);};TextAreaControl.extend(TextInputControl);copy_properties(TextAreaControl.prototype,{setAutogrow:function(autogrow){this.autogrow=autogrow;this.refreshShadow();CSS.addClass(this.getRoot(),'DOMControl_autogrow');return this;},onupdate:function(){this.parent.onupdate();var r=this.getRoot();if(this.autogrow&&r.value!=this.metricsValue){this.metricsValue=r.value;if(CSS.getStyle(r,'fontSize')==""){return false;}
copy_properties(this.shadow.style,{fontSize:parseInt(CSS.getStyle(r,'fontSize'),10)+'px',fontFamily:CSS.getStyle(r,'fontFamily')+'px',width:(Vector2.getElementDimensions(r).x-8)+'px'});DOM.setContent(this.shadow,HTML(htmlize(r.value)));r.style.height=Math.max(this.originalHeight,Vector2.getElementDimensions(this.shadow).y+15)+'px';}},refreshShadow:function(){if(this.autogrow){this.shadow=$N('div',{className:'DOMControl_shadow'});document.body.appendChild(this.shadow);var r=this.getRoot();this.originalHeight=parseInt(CSS.getStyle(r,'height'))||Vector2.getElementDimensions(this.getRoot()).y;}else{if(this.shadow){DOM.remove(this.shadow);}
this.shadow=null;}}});function autogrow_textarea(element){element=$(element);if(!element._hascontrol){element._hascontrol=true;new TextAreaControl(element).setAutogrow(true);}}
function textarea_maxlength(element,length){element=$(element);if(!element._hascontrol){element._hascontrol=true;new TextAreaControl(element).setMaxLength(length);}}

function AsyncRequest(){var dispatchResponse=bind(this,function(asyncResponse){try{this.clearStatusIndicator();if(this.initialHandler(asyncResponse)!==false){try{this.handler(asyncResponse);}catch(exception){this.finallyHandler(asyncResponse);throw exception;}
this.finallyHandler(asyncResponse);if(asyncResponse.instrument){Env.t_domcontent=(new Date()).getTime();Env.t_layout=Env.t_domcontent;var force_layout=document&&document.body&&document.body.offsetWidth;Env.t_onload=(new Date()).getTime();Env.t_willonloadhooks=Env.t_onload;}
var onload=asyncResponse.onload;if(onload){for(var ii=0;ii<onload.length;ii++){try{eval('(function() {'+onload[ii]+'})();');}catch(exception){Util.error('An onload hook in response to a request to to URI %q threw an '+'exception: %x. (This is not a problem with AsyncRequest, it is '+'a problem with the registered hook.)',this.uri,exception);}}}
if(asyncResponse.instrument){Env.t_doneonloadhooks=(new Date()).getTime();}
var onafterload=asyncResponse.onafterload;if(onafterload){for(var ii=0;ii<onafterload.length;ii++){try{eval('(function() {'+onafterload[ii]+'})();');}catch(exception){Util.error('An onafterload hook in response to a request to to URI %q threw an '+'exception: %x. (This is not a problem with AsyncRequest, it is '+'a problem with the registered hook.)',this.uri,exception);}}}
if(asyncResponse.instrument&&asyncResponse.server_stats&&(typeof(haste_stats)=="function")){haste_stats(asyncResponse.server_stats);}}
if(asyncResponse.cacheObservation&&typeof(TabConsoleCacheobserver)!='undefined'&&TabConsoleCacheobserver.instance){TabConsoleCacheobserver.getInstance().addAsyncObservation(asyncResponse.cacheObservation);}}catch(exception){Util.error('The user supplied handler function for an AsyncRequest to URI %q '+'threw an exception: %x. (This is not a problem with AsyncRequest, it '+'is a problem with the callback, which failed to catch the exception.)',this.uri,exception);}});var dispatchErrorResponse=bind(this,function(asyncResponse,isTransport){try{this.clearStatusIndicator();if(this.initialHandler(asyncResponse)!==false){try{if(isTransport){this.transportErrorHandler(asyncResponse);}else{this.errorHandler(asyncResponse);}}catch(exception){this.finallyHandler(asyncResponse);throw exception;}
this.finallyHandler(asyncResponse);}}catch(exception){Util.error('Async error handler threw an exception for URI %q, when processing a '+'%d error: %x.',this.uri,asyncResponse.getError(),exception);}});var _interpretTransportResponse=bind(this,function(){if(this.getOption('suppressEvaluation')){var r=new AsyncResponse();r.payload=this.transport;return{asyncResponse:r};}
var shield="for (;;);";var shieldlen=shield.length;if(this.transport.responseText.length<=shieldlen){var kind=this.transport.responseText.length?('a '+this.transport.responseText.length+' byte'):'an empty';return{transportError:sprintf('An error occurred when making an AsyncRequest to %q. '+'The server returned '+kind+' response.',this.uri)};}
var text=this.transport.responseText;var offset=0;while(text.charAt(offset)==" "||text.charAt(offset)=="\n"){offset++;}
if(offset&&text.substring(offset,offset+shieldlen)==shield){Util.error('Response for request to endpoint %q seems to be valid, but was '+'preceeded by whitespace. (This probably means that someone '+'committed whitespace in a header file.)',this.uri);}
var safeResponse=text.substring(offset+shieldlen);var response;try{eval('response = ('+safeResponse+')');}catch(exception){return{transportError:sprintf('Evaluation failed for <a href="javascript:aiert(%e);">'+'response from %q</a>: %x.',this.transport.responseText,this.uri,exception)};}
return interpretResponse(response);});var interpretResponse=bind(this,function(response){if(response.redirect){return{redirect:response.redirect};}
var r=new AsyncResponse();if(typeof(response.payload)=='undefined'||typeof(response.error)=='undefined'||typeof(response.errorDescription)=='undefined'||typeof(response.errorSummary)=='undefined'){Util.warn('AsyncRequest to endpoint %q returned a JSON response, but it '+'is not properly formatted. The endpoint needs to provide a '+'response including both error and payload information; use '+'the AsyncResponse PHP class to do this easily.',this.uri);r.payload=response;}else{copy_properties(r,response);}
return{asyncResponse:r};});var invokeResponseHandler=bind(this,function(interp){if(typeof(interp.redirect)!='undefined'){(function(){this.setURI(interp.redirect).send();}).bind(this).defer();return;}
if(this.handler){if(typeof(interp.transportError)!='undefined'){var r=new AsyncResponse();var errorDescription=Util.isDevelopmentEnvironment()?interp.transportError:('Something went wrong. '
+'We\'re working on getting this fixed as soon as we can. '
+'You may be able to try again.');copy_properties(r,{error:1000,errorSummary:'Oops',errorDescription:errorDescription});if(this.transportErrorHandler){dispatchErrorResponse(r,true);}else{Util.error('Something bad happened; provide a transport error handler for '+'complete details.');}
return;}
var r=interp.asyncResponse;if(r.instrument){if(window.___t_measuring){r.instrument=false;}else{window.___t_measuring=true;window.Env=window.Env||{};Env.start=(new Date()).getTime();cavalry_measure=[];}}
if(r.bootload){var boot=r.bootload;for(var ii=0;ii<boot.length;ii++){Bootloader.loadResource(boot[ii]);}}
if(r.instrument){___tcss=0;___thtml=0;___tjs=(new Date()).getTime()-Env.start;}
if(r.getError()){Bootloader.wait(dispatchErrorResponse.bind(null,r));}else{Bootloader.wait.bind(null,(dispatchResponse.bind(null,r))).defer();}}});var invokeErrorHandler=bind(this,function(explicitError){try{if(!window.loaded){return;}}catch(ex){return;}
var r=new AsyncResponse();var err;try{err=explicitError||this.transport.status||1001;}catch(ex){err=1001;}
try{if(this.responseText==''){err=1002;}}catch(ignore){}
if(this.transportErrorHandler){var desc=sprintf('Transport error (#%d) while retrieving data from endpoint %q: %s',err,this.uri,AsyncRequest.getHTTPErrorDescription(err));if(!this.getOption('suppressErrorAlerts')){Util.error(desc);}
copy_properties(r,{error:err,errorSummary:AsyncRequest.getHTTPErrorSummary(err),errorDescription:desc});dispatchErrorResponse(r,true);}else{Util.error('Async request to %q failed with a %d error, but there was no error '+'handler available to deal with it.',this.uri,err);}});var onStateChange=function(){try{if(this.transport.readyState==4){if(this.transport.status>=200&&this.transport.status<300){invokeResponseHandler(_interpretTransportResponse());}else{if(ua.safari()&&(typeof(this.transport.status)=='undefined')){invokeErrorHandler(1002);}else{invokeErrorHandler();}}
delete this.transport;}}catch(exception){try{if(!window.loaded){return;}}catch(ex){return;}
delete this.transport;if(this.remainingRetries){--this.remainingRetries;this.send(true);}else{if(!this.getOption('suppressErrorAlerts')){Util.error('AsyncRequest exception when attempting to handle a state change: %x.',exception);}
invokeErrorHandler(1001);}}};copy_properties(this,{onstatechange:onStateChange,invokeResponseHandler:invokeResponseHandler,interpretResponse:interpretResponse,transport:null,method:'POST',uri:'',initialHandler:bagofholding,handler:null,errorHandler:null,transportErrorHandler:null,finallyHandler:bagofholding,statusElement:null,data:{},readOnly:false,writeRequiredParams:['post_form_id'],remainingRetries:0,option:{asynchronous:true,suppressErrorHandlerWarning:false,suppressEvaluation:false,suppressErrorAlerts:false,retries:1,jsonp:false,useIframeTransport:false}});if(typeof ErrorDialog!="undefined"){this.errorHandler=ErrorDialog.showAsyncError;this.transportErrorHandler=ErrorDialog.showAsyncError;}
return this;}
copy_properties(AsyncRequest,{getHTTPErrorSummary:function(errCode){return AsyncRequest._getHTTPError(errCode).summary;},getHTTPErrorDescription:function(errCode){return AsyncRequest._getHTTPError(errCode).description;},pingURI:function(uri,data,synchronous){data=data||{};return new AsyncRequest().setURI(uri).setData(data).setOption('asynchronous',!synchronous).setOption('suppressErrorHandlerWarning',true).send();},receiveJSONPResponse:function(path,data){if(this._JSONPReceivers[path]){for(var ii=0;ii<this._JSONPReceivers[path].length;ii++){var request=this._JSONPReceivers[path][ii];if(request.transportIframe){document.body.removeChild(request.transportIframe);}
request.invokeResponseHandler(request.interpretResponse(data));}
delete this._JSONPReceivers[path];}},_getHTTPError:function(errCode){var e=AsyncRequest._HTTPErrors[errCode]||AsyncRequest._HTTPErrors[errCode-(errCode%100)]||{summary:'HTTP Error',description:'Unknown HTTP error #'+errCode};return e;},_HTTPErrors:{400:{summary:'Bad Request',description:'Bad HTTP request.'},401:{summary:'Unauthorized',description:'Not authorized.'},403:{summary:'Forbidden',description:'Access forbidden.'},404:{summary:'Not Found',description:'Web address does not exist.'},1000:{summary:'Bad Response',description:'Invalid response.'},1001:{summary:'No Network',description:'A network error occurred. Check that you are connected to the '+'internet.'},1002:{summary:'No Data',description:'The server did not return a response.'},1003:{summary:'Eval Error',description:'Exception thrown during JSON evaluation.'}},_JSONPReceivers:[]});copy_properties(AsyncRequest.prototype,{setMethod:function(m){this.method=m.toString().toUpperCase();return this;},getMethod:function(){return this.method;},setData:function(obj){this.data=obj;return this;},getData:function(){return this.data;},setURI:function(uri){var uri_s=uri.toString();uri=URI(uri);if(this.getOption('useIframeTransport')&&!uri.isFacebookURI()){Util.error('IframeTransport requests should only be used when going between '+'different Facebook subdomains.  This probably won\'t do what you want '+'if you\'re going to a non-Facebook URI.  Check out JSONP for that, '+'but that\'s also a bad idea to use.');return this;}
if(!this.getOption('jsonp')&&!this.getOption('useIframeTransport')&&!uri.isSameOrigin()){Util.error('Asynchronous requests must specify relative URIs (like %q); this '+'ensures they conform to the Same Origin Policy (see %q). The '+'provided absolute URI (%q) is invalid, use a relative URI instead. '+'If you need to dispatch cross-domain requests, you can use JSONP, '+'but consider this decision carefully because there are tradeoffs and '+'JSONP is completely insecure.','/path/to/endpoint.php','http://www.mozilla.org/projects/security/components/same-origin.html',uri);return this;}
this.uri=uri.toString();return this;},getURI:function(){return this.uri;},setInitialHandler:function(fn){this.initialHandler=fn;return this;},setHandler:function(fn){if(typeof(fn)!='function'){Util.error('AsyncRequest response handlers must be functions. Pass a function, '+'or use bind() to build one.');}else{this.handler=fn;}
return this;},getHandler:function(){return this.handler;},setErrorHandler:function(fn){if(typeof(fn)!='function'){Util.error('AsyncRequest error handlers must be functions. Pass a function, or '+'use bind() to build one.');}else{this.errorHandler=fn;}
return this;},setTransportErrorHandler:function(fn){this.transportErrorHandler=fn;return this;},getErrorHandler:function(){return this.errorHandler;},getTransportErrorHandler:function(){return this.transportErrorHandler;},setFinallyHandler:function(fn){this.finallyHandler=fn;return this;},setReadOnly:function(readOnly){if(typeof(readOnly)!='boolean'){Util.error('AsyncRequest readOnly value must be a boolean.');}else{this.readOnly=readOnly;}
return this;},setFBMLForm:function(){this.writeRequiredParams=["fb_sig"];return this;},getReadOnly:function(){return this.readOnly;},setStatusElement:function(element){this.statusElement=element;return this;},getStatusElement:function(){return this.statusElement;},clearStatusIndicator:function(){if(this.getStatusElement()){remove_css_class_name($(this.getStatusElement()),'async_saving');}},addStatusIndicator:function(){if(this.getStatusElement()){add_css_class_name($(this.getStatusElement()),'async_saving');}},specifiesWriteRequiredParams:function(){var specifiesWriteRequiredParams=true;for(var i=0;i<this.writeRequiredParams.length;i++){var param=this.writeRequiredParams[i];if(typeof(this.data[param])=='undefined'){var e=ge(param);if(e&&typeof(e.value)!='undefined'){this.data[param]=e.value;}else{specifiesWriteRequiredParams=false;break;}}}
return specifiesWriteRequiredParams;},setOption:function(opt,v){if(typeof(this.option[opt])!='undefined'){this.option[opt]=v;}else{Util.warn('AsyncRequest option %q does not exist; request to set it was ignored.',opt);}
return this;},getOption:function(opt){if(typeof(this.option[opt])=='undefined'){Util.warn('AsyncRequest option %q does not exist, get request failed.',opt);}
return this.option[opt];},send:function(isRetry){isRetry=isRetry||false;if(!this.uri){Util.error('Attempt to dispatch an AsyncRequest without an endpoint URI! This is '+'all sorts of silly and impossible, so the request failed.');return false;}
if(!this.errorHandler&&!this.getOption('suppressErrorHandlerWarning')){Util.warn('Dispatching an AsyncRequest that does not have an error handler. '+'You SHOULD supply one, or use AsyncRequest.pingURI(). If this '+'omission is intentional and well-considered, set the %q option to '+'suppress this warning.','suppressErrorHandlerWarning');}
if(this.getOption('jsonp')&&this.method!='GET'){this.setMethod('GET');}
if(this.getOption('useIframeTransport')&&this.method!='GET'){Util.warn('Iframe transport currently works only with GET.');this.setMethod('GET');}
if(!this.getReadOnly()){if(!this.specifiesWriteRequiredParams()){Util.error('You are making a POST request without one or more of the required '+'parameters: %s. Requests which modify data and do not verify the '+'request origin through parameter validation are vulnerable to CSRF '+'attacks. You should either specify values for these parameters '+'explicitly by using setData(), put them in the page as inputs, or '+'mark this request as safe and idempotent by using setReadOnly(). '+'Consult the setReadOnly() documentation for more information.',this.writeRequiredParams.join(','));return false;}
if(this.method!='POST'){Util.error('You are making a GET request which modifies data; this violates '+'the HTTP spec and is generally a bad idea. Either change this '+'request to use POST or use setReadOnly() to mark the request as '+'idempotent and appropriate for HTTP GET. Consult the setReadOnly() '+'documentation for more information.');return false;}}
var uri;var query=URI.implodeQuery(this.data);if(this.method=='GET'){uri=this.uri+(query?'?'+query:'');query='';}else{uri=this.uri;}
if(this.getOption('jsonp')||this.getOption('useIframeTransport')){var path=URI(this.uri).getPath();if(!AsyncRequest._JSONPReceivers[path]){AsyncRequest._JSONPReceivers[path]=[];}
AsyncRequest._JSONPReceivers[path].push(this);if(this.getOption('jsonp')){(function(){document.body.appendChild($N('script',{src:uri,type:"text/javascript"}))}).bind(this).defer();}else{var style={position:'absolute',top:'-1000px',left:'-1000px',width:'80px',height:'80px'};this.transportIframe=$N('iframe',{src:uri,style:style});document.body.appendChild(this.transportIframe);}
return true;}
if(this.transport){Util.error('You must wait for an AsyncRequest to complete before sending another '+'request with the same object. To send two simultaneous requests, '+'create a second AsyncRequest object.');return false;}
var transport=null;try{transport=new XMLHttpRequest();}catch(ignored){};if(!transport){try{transport=new ActiveXObject("Msxml2.XMLHTTP");}catch(ignored){};}
if(!transport){try{transport=new ActiveXObject("Microsoft.XMLHTTP");}catch(ignored){};}
if(!transport){Util.error('Unable to build XMLHTTPRequest transport.');return false;}
transport.onreadystatechange=bind(this,'onstatechange');if(!isRetry){this.remainingRetries=0;if(this.getReadOnly()){this.remainingRetries=this.getOption('retries');}}
this.transport=transport;try{this.transport.open(this.method,uri,this.getOption('asynchronous'));}catch(ex){Util.error(sprintf('Exception when opening Async transport to %q: %x',uri,ex));return false;}
var svn_rev=env_get('svn_rev');if(svn_rev){this.transport.setRequestHeader('X-SVN-Rev',String(svn_rev));}
if(this.method=='POST'){this.transport.setRequestHeader('Content-Type','application/x-www-form-urlencoded');}
this.addStatusIndicator();this.transport.send(query);return true;}});function AsyncResponse(payload){copy_properties(this,{error:0,errorSummary:null,errorDescription:null,onload:null,payload:payload||null});return this;}
copy_properties(AsyncResponse.prototype,{getPayload:function(){return this.payload;},getError:function(){return this.error;},getErrorSummary:function(){return this.errorSummary;},getErrorDescription:function(){return this.errorDescription;}});

function AsyncSignal(uri,data){this.data=data||{};this.uri=uri;this.handler=null;}
AsyncSignal.prototype.setHandler=function(h){this.handler=h;return this;}
AsyncSignal.prototype.send=function(){var h=this.handler,d=this.data,u=this.uri,s=[],i=new Image(),a=document.getElementById('post_form_id');d.asyncSignal=true;if(a){d.post_form_id=a.value;}
for(var k in d){s.push(encodeURIComponent(k)+'='+encodeURIComponent(d[k]));}
if(u.indexOf('?')==-1){u+='?';}
u+=s.join('&');if(h){i.onload=i.onerror=(function(i,h){return function(){h((i.height==1));}})(i,h);}
i.src=u;return this;}

function _fbt(text){return fbt(arguments);}
function fbt(text){if(arguments.length==1){return text;}
var name_map=new Object();var match;var arg_index=1;var fbt_reg=/(?:[^\{]|^)(\{\w\})(?!\})/g;while((match=fbt_reg.exec(text))!=null){var token=match[1].slice(1,-1);while(!(token in name_map)){if(arg_index<arguments.length){var arg=arguments[arg_index++];var t_arg=typeof arg;if(arg==null){Util.error('fbt: null value for arg for text: %s',text);}else if(arg instanceof Array||t_arg=="array"){Util.error(sprintf('fbt: cannot use Array type as arg in js fbt. '+'Use Object instead. text: %s',text));}else if(t_arg=='number'||t_arg=='string'){name_map[token]=arg;}else if(t_arg=='object'){copy_properties(name_map,arg);}else{Util.error(sprintf('fbt: cannot use %s type as arg in fbt: %s',t_arg,text));}}else{Util.error('fbt: Too few arguments for text: %s',text);break;}}}
if(arg_index<arguments.length&&typeof arguments[arg_index++]=="string"&&arg_index<arguments.length){Util.error('fbt: Too many arguments.');}
return fbt_replace_braces(text,name_map);}
function fbts(project,text){return fbt.apply(this,to_array(arguments).slice(1));}
function fbt_replace_braces(text,args){if(args){if(typeof args!='object'){Util.error('intl.js: the 2nd argument must be a keyed array (not a string) for tx('+text+', ...)');}else{for(var key in args){var reg=new RegExp("([^\\{]|^)\\{"+key+"\\}(?!\\})",'g');text=text.replace(reg,'$1'+args[key]);}}}
return text.replace(/\{\{/g,'{').replace(/\}\}/g,'}');}
function tx(str,args){if(typeof _string_table=='undefined'){return;}
str=_string_table[str];return _tx(str,args);}
function _tx(str,args){if(args){if(typeof args!='object'){Util.error('intl.js: the 2nd argument must be a keyed array (not a string) for tx('+str+', ...)');}else{for(var key in args){var regexp=new RegExp('\{'+key+'\}',"g");str=str.replace(regexp,args[key]);}}}
return str;}
function intl_set_xmode(xmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({xmode:xmode}).setHandler(function(){document.location.reload();}).send();}
function intl_set_cmode(cmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({cmode:cmode}).setHandler(function(){document.location.reload();}).send();}
function intl_set_vmode(vmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({vmode:vmode}).setHandler(function(){document.location.reload();}).send();}
function intl_set_vmode(vmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({vmode:vmode}).setHandler(function(){document.location.reload();}).send();}
function intl_set_tpmode(tpmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({tpmode:tpmode}).setHandler(function(){if(tpmode==1){hide($('xtrmode'));show($('xtrmode_off'));}else{show($('xtrmode'));hide($('xtrmode_off'));}}).send();}
function intl_set_amode(amode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({amode:amode,app:false}).setHandler(function(){document.location.reload();}).send();}
function intl_set_app_amode(amode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({amode:amode,app:true}).setHandler(function(){document.location.reload();}).send();}
function intl_set_locale(obj,which,locale){if(!locale){var locale=obj.options[obj.selectedIndex].value;}
(new AsyncRequest()).setURI('/ajax/intl/save_locale.php').setData({locale:locale,which:which}).setHandler(function(){document.location.reload();}).send();}
function intl_set_cookie_locale(obj,locale){if(!locale){var locale=obj.options[obj.selectedIndex].value;}
clearCookie('locale');setCookie('locale',locale,7);document.location.reload();}
function intl_disable_rooster_save(obj){var save=document.getElementById('install_translation_app');save.disabled=!obj.checked;var container=document.getElementById('install_container');if(obj.checked){container.style.display='block';}else{container.style.display='none';}}
function intl_confirm_rooster_and_install_app(uid,divid){document.location='add.php?api_key=efa7a7045708fcadede8d705e39b1642';}

function KeyEventController(){copy_properties(this,{handlers:{}});document.onkeyup=this.onkeyevent.bind(this,'onkeyup');document.onkeydown=this.onkeyevent.bind(this,'onkeydown');document.onkeypress=this.onkeyevent.bind(this,'onkeypress');}
copy_properties(KeyEventController,{instance:null,getInstance:function(){return KeyEventController.instance||(KeyEventController.instance=new KeyEventController());},defaultFilter:function(event,type){event=event_get(event);return KeyEventController.filterEventTypes(event,type)&&KeyEventController.filterEventTargets(event,type)&&KeyEventController.filterEventModifiers(event,type);},filterEventTypes:function(event,type){if(type==='onkeydown'){return true;}
return false;},filterEventTargets:function(event,type){var target=event_get_target(event);if(target!==document.body&&target!==document.documentElement){if(!ua.ie()){return false;}
if(is_node(target,['input','select','textarea','object','embed'])){return false;}}
return true;},filterEventModifiers:function(event,type){if(event.ctrlKey||event.altKey||event.metaKey||event.repeat){return false;}
return true;},registerKey:function(key,callback,filter_callback){if(filter_callback===undefined){filter_callback=KeyEventController.defaultFilter;}
var ctl=KeyEventController.getInstance();var eqv=ctl.mapKey(key);for(var ii=0;ii<eqv.length;ii++){key=eqv[ii];if(!ctl.handlers[key]){ctl.handlers[key]=[];}
ctl.handlers[key].push({callback:callback,filter:filter_callback});}},bindToAccessKeys:function(){var ii,k;var links=document.getElementsByTagName('a');for(ii=0;ii<links.length;ii++){if(links[ii].accessKey){if(k){KeyEventController.registerKey(k,bind(KeyEventController,'accessLink',links[ii]));}}}
var inputs=document.getElementsByTagName('input');for(ii=0;ii<inputs.length;ii++){if(inputs[ii].accessKey){if(k){KeyEventController.registerKey(k,bind(KeyEventController,'accessInput',inputs[ii]));}}}
var areas=document.getElementsByTagName('textarea');for(ii=0;ii<areas.length;ii++){if(areas[ii].accessKey){if(k){KeyEventController.registerKey(k,bind(KeyEventController,'accessInput',areas[ii]));}}}},accessLink:function(l,e){if(l.onclick){return l.onclick(e);}
if(l.href){window.location.href=l.href;}},accessInput:function(i,e){Vector2.scrollTo(i);i.focus(e);if(i.type=='submit'){i.form.submit();}},keyCodeMap:{'[':[219],']':[221],'`':[192],'LEFT':[KEYS.LEFT,KeyCodes.Left],'RIGHT':[KEYS.RIGHT,KeyCodes.Right],'RETURN':[KEYS.RETURN],'TAB':[KEYS.TAB],'DOWN':[KEYS.DOWN,KeyCodes.Down],'UP':[KEYS.UP,KeyCodes.Up],'ESCAPE':[KEYS.ESC]}});copy_properties(KeyEventController.prototype,{mapKey:function(k){if(typeof(k)=='number'){return[k];}
if(KeyEventController.keyCodeMap[k.toUpperCase()]){return KeyEventController.keyCodeMap[k.toUpperCase()];}
var l=k.charCodeAt(0);var u=k.toUpperCase().charCodeAt(0);if(l!=u){return[l,u];}
return[l];},onkeyevent:function(type,e){e=event_get(e);var evt=null;var handlers=this.handlers[e.keyCode];var callback,filter,abort;if(handlers){for(var ii=0;ii<handlers.length;ii++){callback=handlers[ii].callback;filter=handlers[ii].filter;try{if(!filter||filter(e,type)){abort=callback(e,type);if(abort===false){return event_abort(e)||event_prevent(e);}}}catch(exception){Util.error('Uncaught exception in key handler: %x',exception);}}}
return true;}});

function editor_two_level_change(selector,subtypes_array,sublabels_array)
{selector=ge(selector);if(selector.getAttribute("typefor"))
subselector=ge(selector.getAttribute("typefor"));if(selector&&subselector){subselector.options.length=1;type_value=selector.options[selector.selectedIndex].value;if(type_value==""){type_value=-1;}
index=1;suboptions=subtypes_array[type_value];if(typeof(suboptions)!="undefined"){for(var key=0;key<suboptions.length;key++){if(typeof(suboptions[key])!="undefined"){subselector.options[index++]=new Option(suboptions[key],key);}}}
if(sublabels_array){if(sublabels_array[type_value]){subselector.options[0]=new Option(sublabels_array[type_value],"");subselector.options[0].selected=true;}else{subselector.options[0]=new Option("---","");subselector.options[0].selected=true;}}
subselector.disabled=subselector.options.length<=1;}}
function editor_two_level_set_subselector(subselector,value)
{subselector=ge(subselector);if(subselector){opts=subselector.options;for(var index=0;index<opts.length;index++){if((opts[index].value==value)||(value===null&&opts[index].value=='')){subselector.selectedIndex=index;}}}}
function editor_network_change(selector,prefix,orig_value){selector=ge(selector);if(selector&&selector.value>0){show('display_network_message');}else{hide('display_network_message');}}
function editor_rel_change(selector,prefix,orig_value)
{selector=ge(selector);for(var rel_type=2;rel_type<=6;rel_type++){if(rel_type==selector.value){show(prefix+'_new_partner_'+rel_type);}else{hide(prefix+'_new_partner_'+rel_type);}}
if(selector&&ge(prefix+'_new_partner')){if(selector.value>1){show(prefix+'_new_partner');}else{hide(prefix+'_new_partner');}}
if(selector&&ge(prefix+'_rel_uncancel')){if(selector.value>1)
editor_rel_uncancel(selector,prefix,selector.value);else
editor_rel_cancel(selector,prefix);}
_editor_rel_toggle_awaiting(selector,prefix,orig_value);}
function rel_typeahead_onsubmit(){return false;}
function rel_typeahead_onselect(friend){if(!friend)
return;$('new_partner').value=friend.i;show($('relationship_warning'));set_inner_html($('relationshipee'),htmlize(friend.t));}
function _editor_rel_toggle_awaiting(selector,prefix,orig_value)
{selector=ge(selector);if(selector&&ge(prefix+'_rel_required')){if(selector.value==orig_value){hide(prefix+'_rel_required');show(prefix+'_rel_awaiting');}
else{show(prefix+'_rel_required');hide(prefix+'_rel_awaiting');}}}
function editor_rel_cancel(selector,prefix)
{if(ge(prefix+'_rel_uncancel'))
show(prefix+'_rel_uncancel');if(ge(prefix+'_rel_cancel'))
hide(prefix+'_rel_cancel');selector=ge(selector);if(ge(selector)&&$(selector).selectedIndex>1)
_editor_rel_set_value(selector,1);}
function editor_rel_cancel_new(selector,prefix,orig_value)
{hide($('relationship_warning'));$('new_partner').value='';$('relationship_typeahead').typeahead.clear();_editor_rel_set_value($(selector),orig_value);editor_rel_change($(selector),prefix,orig_value);}
function editor_rel_uncancel(selector,prefix,rel_value)
{if(ge(prefix+'_rel_uncancel'))
hide(prefix+'_rel_uncancel');if(ge(prefix+'_rel_cancel'))
show(prefix+'_rel_cancel');if(rel_value==4||rel_value==5){hide(prefix+'_rel_with');show(prefix+'_rel_to');}else if(rel_value>1){show(prefix+'_rel_with');hide(prefix+'_rel_to');}
if(ge(selector)&&$(selector).selectedIndex<=1)
_editor_rel_set_value(selector,rel_value);_editor_rel_toggle_awaiting(selector,prefix,rel_value);}
function editor_autocomplete_onselect(result){var hidden=ge(/(.*)_/.exec(this.obj.name)[1]+'_id');if(result){hidden.value=result.i==null?result.t:result.i;}
else{hidden.value=-1;}}
function _editor_rel_set_value(selector,value)
{selector=ge(selector);if(selector){opts=selector.options;opts_length=opts.length;for(var index=0;index<opts_length;index++){if((opts[index].value==value)||(value===null&&opts[index].value=='')){selector.selectedIndex=index;}}}}
function enableDisable(gainFocus,loseFocus){loseFocus=ge(loseFocus);if(loseFocus){if(loseFocus.value)loseFocus.value="";if(loseFocus.selectedIndex)loseFocus.selectedIndex=0;}}
function show_editor_error(error_text,exp_text)
{$('editor_error_text').innerHTML=error_text;$('editor_error_explanation').innerHTML=exp_text;show('error');}
function make_explanation_list(list,num,type){var exp='';if(type=='missing'){if(num==1){exp=tx('el01',{'thing-1':list[0]});}else if(num==2){exp=tx('el02',{'thing-1':list[0],'thing-2':list[1]});}else if(num==3){exp=tx('el03',{'thing-1':list[0],'thing-2':list[1],'thing-3':list[2]});}else if(num==4){exp=tx('el04',{'thing-1':list[0],'thing-2':list[1],'thing-3':list[2],'thing-4':list[3]});}else if(num>4){exp=tx('el05',{'thing-1':list[0],'thing-2':list[1],'thing-3':list[2],'num':num-3});}}else if(type=='bad'){if(num==1){exp=tx('el06',{'thing-1':list[0]});}else if(num==2){exp=tx('el07',{'thing-1':list[0],'thing-2':list[1]});}else if(num==3){exp=tx('el08',{'thing-1':list[0],'thing-2':list[1],'thing-3':list[2]});}else if(num==4){exp=tx('el09',{'thing-1':list[0],'thing-2':list[1],'thing-3':list[2],'thing-4':list[3]});}else if(num>4){exp=tx('el10',{'thing-1':list[0],'thing-2':list[1],'thing-3':list[2],'num':num-3});}}
return exp;}
function TimeSpan(start_prefix,end_prefix,span,auto){this.get_start_ts=function(){return _get_date_time_ts(_start_month,_start_day,_start_year,_start_hour,_start_min,_start_ampm);}
this.get_end_ts=function(){var start_ts=_get_date_time_ts(_start_month,_start_day,_start_year,_start_hour,_start_min,_start_ampm);var end_ts=_get_date_time_ts(_end_month,_end_day,_end_year,_end_hour,_end_min,_end_ampm);if(start_ts>end_ts&&!(_start_year&&_end_year)){var future_date=new Date();future_date.setTime(end_ts);future_date.setFullYear(future_date.getFullYear()+1);return future_date.getTime();}else{return end_ts;}}
var _start_month=ge(start_prefix+'_month');var _start_day=ge(start_prefix+'_day');var _start_hour=ge(start_prefix+'_hour');var _start_year=ge(start_prefix+'_year');var _start_min=ge(start_prefix+'_min');var _start_ampm=ge(start_prefix+'_ampm');var _end_month=ge(end_prefix+'_month');var _end_day=ge(end_prefix+'_day');var _end_year=ge(end_prefix+'_year');var _end_hour=ge(end_prefix+'_hour');var _end_min=ge(end_prefix+'_min');var _end_ampm=ge(end_prefix+'_ampm');var _bottom_touched;if(auto){_bottom_touched=false;}else{_bottom_touched=true;}
var _start_touched=function(){if(!_bottom_touched){_propogate_time_span(_start_month,_start_day,_start_year,_start_hour,_start_min,_start_ampm);}}
var _end_touched=function(){_bottom_touched=true;}
var _propogate_time_span=function(){var start_ts=_get_date_time_ts(_start_month,_start_day,_start_year,_start_hour,_start_min,_start_ampm);var end_ts=start_ts+span*60000;_set_date_time_from_ts(end_ts,_end_month,_end_day,_end_year,_end_hour,_end_min,_end_ampm);}
var _get_date_time_ts=function(m,d,y,h,min,ampm){var this_date=new Date();var date_this_day=this_date.getDate();var date_this_month=this_date.getMonth();var date_this_year=this_date.getFullYear();var month=m.value-1;var date=d.value;var hour;var minutes=min.value;var year;hour=parseInt(h.value);if(ampm.value!=''){if(hour==12)hour=0;if(ampm.value=='pm'){hour=hour+12;}}
if(!y){if(month<date_this_month){year=date_this_year+1;}else{if(month==date_this_month&&date<date_this_day){year=date_this_year+1;}else{year=date_this_year;}}}else{year=y.value;}
var new_date=new Date(year,month,date,hour,minutes,0,0);var ts=new_date.getTime();return ts;}
var _set_date_time_from_ts=function(ts,m,d,y,h,min,ampm){var new_date=new Date();new_date.setTime(ts);var old_month=m.value;var new_month=new_date.getMonth()+1;var new_day=new_date.getDate();var new_hour=new_date.getHours();var new_minutes=new_date.getMinutes();var new_year=new_date.getFullYear();var new_ampm;if(ampm.value!=''){if(new_hour>11){new_ampm='pm';if(new_hour>12){new_hour=new_hour-12;}}else{if(new_hour==0)new_hour=12;new_ampm='am';}}else{new_ampm='';}
if(new_minutes<10){new_minutes="0"+new_minutes;}
m.value=new_month;d.value=new_day;if(y){y.value=new_year;}
h.value=new_hour;min.value=new_minutes;ampm.value=new_ampm;if(old_month!=new_month){editor_date_month_change(m,d,y?y:false);}}
var _start_month_touched=function(){_start_touched();editor_date_month_change(_start_month,_start_day,_start_year?_start_year:false);}
var _end_month_touched=function(){_end_touched();editor_date_month_change(_end_month,_end_day,_end_year?_end_year:false);}
_start_month.onchange=_start_month_touched;_start_day.onchange=_start_touched;if(_start_year){_start_year.onchange=_start_touched;}
_start_hour.onchange=_start_touched;_start_min.onchange=_start_touched;_start_ampm.onchange=_start_touched;_end_month.onchange=_end_month_touched;_end_day.onchange=_end_touched;if(_end_year){_end_year.onchange=_end_touched;}
_end_hour.onchange=_end_touched;_end_min.onchange=_end_touched;_end_ampm.onchange=_end_touched;}
function editor_date_month_change(month_el,day_el,year_el){var month_el=ge(month_el);var day_el=ge(day_el);var year_el=year_el?ge(year_el):false;var new_num_days=_month_get_num_days(month_el.value,year_el.value&&year_el.value!=-1?year_el.value:false);var b=day_el.options[0].value==-1?1:0;for(var i=day_el.options.length;i>new_num_days+b;i--){remove_node(day_el.options[i-1]);}
for(var i=day_el.options.length;i<new_num_days+b;i++){day_el.options[i]=new Option(i+(b?0:1));}}
function _month_get_num_days(month,year){var temp_date;if(month==-1){return 31;}
temp_date=new Date(year?year:1912,month,0);return temp_date.getDate();}
function toggleEndWorkSpan(prefix){if(shown(prefix+'_endspan')){hide(prefix+'_endspan');show(prefix+'_present');}else{show(prefix+'_endspan');hide(prefix+'_present');}}
function regionCountryChange(label_id,country_id,region_id,label_prefix){switch(country_id){case'326':show(region_id);$(label_id).innerHTML=label_prefix+tx('el13');break;case'398':show(region_id);$(label_id).innerHTML=label_prefix+tx('el12');break;default:$(label_id).innerHTML=label_prefix+tx('el11');hide(region_id);break;}}
function regionCountryChange_twoLabels(country_label_id,region_label_id,country_id,region_id,label_prefix){show(country_label_id);$(country_label_id).innerHTML=label_prefix+tx('el11');switch(country_id){case'326':show(region_id);show(region_label_id);$(region_label_id).innerHTML=label_prefix+tx('el13');break;case'':case'398':show(region_id);show(region_label_id);$(region_label_id).innerHTML=label_prefix+tx('el12');break;default:$(region_label_id).innerHTML=label_prefix+tx('el12');$(region_id).disabled=true;break;}}
function regionCountyChange_setUSifStateChosen(country_select_id,region_select_id){region_select=ge(region_select_id);country_select=ge(country_select_id);if(region_select.value!=''&&country_select.value==''){country_select.value=398;}}
function regionCountryChange_restrictions(country_select_id,region_select_id){country_select=ge(country_select_id);if(country_select.value==398){country_select.value='';}else if(country_select.value==326){region_select=ge(region_select_id);if(region_select.value){country_select.value='';}}}
function mobile_phone_nag(words,obj,anchor){var nagged=false;var callback=function(){if(nagged){return;}
for(var i=0;i<words.length;i++){if((new RegExp('\\b'+words[i]+'\\b','i')).test(obj.value)){nagged=true;(new AsyncRequest()).setURI('/ajax/mobile_phone_nag.php').setHandler(function(async){var html=async.getPayload();if(html){var div=document.createElement('div');div.innerHTML=html;div.className='mobile_nag';div.style.display='none';anchor.parentNode.insertBefore(div,anchor);animation(div).blind().show().from('height',0).to('height','auto').go();}}).setReadOnly(true).setOption('suppressErrorHandlerWarning',true).send();break;}}}
addEventBase(obj,'keyup',callback);addEventBase(obj,'change',callback);}
function mobile_phone_nag_hide(obj){while(obj.parentNode&&obj.className!='mobile_nag'){obj=obj.parentNode;}
obj.parentNode.removeChild(obj);}

function tz_calculate(timestamp){var d=new Date();var raw_offset=d.getTimezoneOffset()/30;var time_sec=d.getTime()/1000;var time_diff=Math.round((timestamp-time_sec)/1800);var rounded_offset=Math.round(raw_offset+time_diff)%48;if(rounded_offset==0){return 0;}else if(rounded_offset>24){rounded_offset-=Math.ceil(rounded_offset/48)*48;}else if(rounded_offset<-28){rounded_offset+=Math.ceil(rounded_offset/-48)*48;}
return rounded_offset*30;}
function ajax_tz_set(tzForm){var timestamp=tzForm.time.value;var gmt_off=-tz_calculate(timestamp);var cur_gmt_off=tzForm.tz_gmt_off.value;if(gmt_off!=cur_gmt_off){var ajaxUrl='/ajax/autoset_timezone_ajax.php';new AsyncSignal(ajaxUrl,{user:tzForm.user.value,post_form_id:tzForm.post_form_id.value,gmt_off:gmt_off}).send();}}
function tz_autoset(){var tz_form=ge('tz_autoset_form');if(tz_form)
ajax_tz_set(tz_form);}

function typeaheadpro(obj,source,properties){if(!typeaheadpro.hacks){typeaheadpro.should_check_missing_events=ua.safari()<500;typeaheadpro.should_use_iframe=typeaheadpro.should_simulate_keypress=ua.ie()||(ua.safari()>500&&ua.safari()<523||ua.safari()>=525);typeaheadpro.should_use_overflow=ua.opera()<9.5||ua.safari()<500;if(ua.firefox()){this.poll_handle=setInterval(this.check_value.bind(this),100);this.deactivate_poll_on_blur=false;}
typeaheadpro.hacks=true;}
typeaheadpro.instances=(typeaheadpro.instances||[]);typeaheadpro.instances.push(this);this.instance=typeaheadpro.instances.length-1;copy_properties(this,properties||{});this.obj=obj;this.obj.typeahead=this;this.obj.onfocus=this._onfocus.bind(this);this.obj.onblur=chain(this.obj.onblur,this._onblur.bind(this));this.obj.onchange=this._onchange.bind(this);this.obj.onkeyup=function(event){return this._onkeyup(event||window.event);}.bind(this);this.obj.onkeydown=function(event){return this._onkeydown(event||window.event);}.bind(this);this.obj.onkeypress=function(event){return this._onkeypress(event||window.event);}.bind(this);this.want_icon_list=false;this.showing_icon_list=false;this.stop_suggestion_select=false;if(this.typeahead_icon_class&&this.typeahead_icon_get_return){this.typeahead_icon=document.createElement('div');this.typeahead_icon.className='typeahead_list_icon '+this.typeahead_icon_class;this.typeahead_icon.innerHTML='&nbsp;';this.setup_typeahead_icon();setTimeout(function(){this.focus();}.bind(this),50);this.typeahead_icon.onmousedown=function(event){return this.typeahead_icon_onclick(event||window.event);}.bind(this);}
this.focused=this.obj.offsetWidth?true:false;this.anchor=this.setup_anchor();this.dropdown=document.createElement('div');this.dropdown.className='typeahead_list';if(!this.focused){this.dropdown.style.display='none';}
this.anchor_block=this.anchor_block||this.anchor.tagName.toLowerCase()=='div';if(this.should_use_absolute){document.body.appendChild(this.dropdown);this.dropdown.className+=' typeahead_list_absolute';}else{var us=this.anchor;var parent=us.parentNode;if(us.nextSibling){parent.insertBefore(this.dropdown,us.nextSibling);}else{parent.appendChild(this.dropdown);}
if(!this.anchor_block){parent.insertBefore(document.createElement('br'),this.dropdown);}}
this.dropdown.appendChild(this.list=document.createElement('div'));this.dropdown.onmousedown=function(event){return this.dropdown_onmousedown(event||window.event);}.bind(this);if(typeaheadpro.should_use_iframe&&!typeaheadpro.iframe){typeaheadpro.iframe=document.createElement('iframe');typeaheadpro.iframe.src="/common/blank.html";typeaheadpro.iframe.className='typeahead_iframe';typeaheadpro.iframe.style.display='none';typeaheadpro.iframe.frameBorder=0;document.body.appendChild(typeaheadpro.iframe);}
if(typeaheadpro.should_use_iframe&&typeaheadpro.iframe){typeaheadpro.iframe.style.zIndex=parseInt(get_style(this.dropdown,'zIndex'))-1;}
this.results_text='';this.last_key_suggestion=0;this.status=typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP;this.clear_placeholder();if(source){this.set_source(source);}
if(this.source){this.selectedindex=-1;if(this.focused){this.show();this._onkeyup();this.set_class('');this.capture_submit();}}else{this.hide();}}
typeaheadpro.prototype.enumerate=false;typeaheadpro.prototype.interactive=false;typeaheadpro.prototype.changed=false;typeaheadpro.prototype.render_block_size=50;typeaheadpro.prototype.typeahead_icon_class=false;typeaheadpro.prototype.typeahead_icon_get_return=false;typeaheadpro.prototype.old_value="";typeaheadpro.prototype.poll_handle=null;typeaheadpro.prototype.deactivate_poll_on_blur=true;typeaheadpro.prototype.suggestion_count=0;typeaheadpro.STATUS_IDLE=0;typeaheadpro.STATUS_WAITING_ON_SOURCE=1;typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP=2;typeaheadpro.prototype.should_use_absolute=false;typeaheadpro.prototype.max_results=0;typeaheadpro.prototype.max_display=10;typeaheadpro.prototype.allow_placeholders=true;typeaheadpro.prototype.auto_select=true;typeaheadpro.prototype.set_source=function(source){this.source=source;this.source.set_owner(this);this.status=typeaheadpro.STATUS_IDLE;this.cache={};this.last_search=0;this.suggestions=[];}
typeaheadpro.prototype.setup_anchor=function(){return this.obj;}
typeaheadpro.prototype.destroy=function(){if(this.typeahead_icon){this.typeahead_icon.parentNode.removeChild(this.typeahead_icon);this.toggle_icon_list=function(){};}
this.clear_render_timeouts();if(!this.anchor_block&&this.anchor.nextSibling.tagName.toLowerCase()=='br'){this.anchor.parentNode.removeChild(this.anchor.nextSibling);}
if(this.dropdown){this.dropdown.parentNode.removeChild(this.dropdown);}
this.obj.onfocus=this.obj.onblur=this.obj.onkeyup=this.obj.onkeydown=this.obj.onkeypress=null;this.obj.parentNode.removeChild(this.obj);this.anchor=this.obj=this.obj.typeahead=this.dropdown=null;delete typeaheadpro.instances[this.instance];}
typeaheadpro.prototype.check_value=function(){if(this.obj){var new_value=this.obj.value;if(new_value!=this.old_value){this.dirty_results();this.old_value=new_value;}}}
typeaheadpro.prototype._onkeyup=function(e){this.last_key=e?e.keyCode:-1;if(this.key_down==this.last_key){this.key_down=0;}
switch(this.last_key){case 27:this.selectedindex=-1;this._onselect(false);this.hide();break;}}
typeaheadpro.prototype._onkeydown=function(e){this.key_down=this.last_key=e?e.keyCode:-1;this.interactive=true;switch(this.last_key){case 33:case 34:case 38:case 40:if(typeaheadpro.should_simulate_keypress){this._onkeypress({keyCode:this.last_key});}
return false;case 9:this.select_suggestion(this.selectedindex);this.advance_focus();break;case 13:if(this.select_suggestion(this.selectedindex)){this.hide();}
if(typeof(this.submit_keydown_return)!='undefined'){this.submit_keydown_return=this._onsubmit(this.get_current_selection());}
return this.submit_keydown_return;case 229:if(!this.poll_handle){this.poll_handle=setInterval(this.check_value.bind(this),100);}
break;default:setTimeout(bind(this,'check_value'),10);}}
typeaheadpro.prototype._onkeypress=function(e){var multiplier=1;this.last_key=e?event_get_keypress_keycode(e):-1;this.interactive=true;switch(this.last_key){case 33:multiplier=this.max_display;case 38:this.set_suggestion(multiplier>1&&this.selectedindex>0&&this.selectedindex<multiplier?0:this.selectedindex-multiplier);this.last_key_suggestion=(new Date()).getTime();return false;case 34:multiplier=this.max_display;case 40:if(trim(this.get_value())==''&&!this.enumerate){this.enumerate=true;this.results_text=null;this.dirty_results();}else{this.set_suggestion(this.suggestions.length<=this.selectedindex+multiplier?this.suggestions.length-1:this.selectedindex+multiplier);this.last_key_suggestion=(new Date()).getTime();}
return false;case 13:var ret=null;if(typeof(this.submit_keydown_return)=='undefined'){ret=this.submit_keydown_return=this._onsubmit(this.get_current_selection());}else{ret=this.submit_keydown_return;delete this.submit_keydown_return;}
return ret;default:setTimeout(bind(this,'check_value'),10);break;}
return true;}
typeaheadpro.prototype._onchange=function(){this.changed=true;}
typeaheadpro.prototype._onfound=function(obj){return this.onfound?this.onfound.call(this,obj):true;}
typeaheadpro.prototype._onsubmit=function(obj){if(this.onsubmit){var ret=this.onsubmit.call(this,obj);if(ret&&this.obj.form){if(!this.obj.form.onsubmit||this.obj.form.onsubmit()){this.obj.form.submit();}
return false;}
return ret;}else{this.advance_focus();return false;}}
typeaheadpro.prototype._onselect=function(obj){if(this.onselect){this.onselect.call(this,obj);}}
typeaheadpro.prototype._onfocus=function(){if(this.last_dropdown_mouse>(new Date()).getTime()-10||this.focused){return;}
this.focused=true;this.changed=false;this.clear_placeholder();this.results_text='';this.set_class('');this.dirty_results();this.show();this.capture_submit();if(this.typeahead_icon){show(this.typeahead_icon);}}
typeaheadpro.prototype._onblur=function(event){if(this.last_dropdown_mouse&&this.last_dropdown_mouse>(new Date()).getTime()-10){event_prevent(event);setTimeout(function(){this.focus();}.bind(this),0);return false;}
if(!this.stop_hiding){if(this.showing_icon_list){this.toggle_icon_list(true);}}else{this.focus();return false;}
this.focused=false;if(this.changed&&!this.interactive){this.dirty_results();this.changed=false;return;}
if(!this.suggestions){this._onselect(false);}else if(this.selectedindex>=0&&this.auto_select){this.select_suggestion(this.selectedindex);}
this.hide();this.update_class();if(!this.get_value()){var noinput=this.allow_placeholders?'':this.source.gen_noinput();this.set_value(noinput?noinput:'');this.set_class('typeahead_placeholder')}
if(this.poll_handle&&this.deactivate_poll_on_blur){clearInterval(this.poll_handle);this.poll_handle=null;}}
typeaheadpro.prototype.typeahead_icon_onclick=function(event){this.stop_hiding=true;this.focus();setTimeout(function(){this.toggle_icon_list();}.bind(this),50);event_abort(event);return false;}
typeaheadpro.prototype.dropdown_onmousedown=function(event){this.last_dropdown_mouse=(new Date()).getTime();}
typeaheadpro.prototype.setup_typeahead_icon=function(){this.typeahead_parent=document.createElement('div');this.typeahead_parent.className='typeahead_parent';this.typeahead_parent.appendChild(this.typeahead_icon);this.obj.parentNode.insertBefore(this.typeahead_parent,this.obj);}
typeaheadpro.prototype.mouse_set_suggestion=function(index){if(!this.visible){return;}
if((new Date()).getTime()-this.last_key_suggestion>50){this.set_suggestion(index);}}
typeaheadpro.prototype.capture_submit=function(){if(!typeaheadpro.should_check_missing_events)return;if((!this.captured_form||this.captured_substitute!=this.captured_form.onsubmit)&&this.obj.form){this.captured_form=this.obj.form;this.captured_event=this.obj.form.onsubmit;this.captured_substitute=this.obj.form.onsubmit=function(){return((this.key_down&&this.key_down!=13&&this.key_down!=9)?this.submit_keydown_return:(this.captured_event?this.captured_event.apply(arguments,this.captured_form):true))?true:false;}.bind(this);}}
typeaheadpro.prototype.set_suggestion=function(index){this.stop_suggestion_select=false;if(!this.suggestions||this.suggestions.length<=index){return}
var old_node=this.get_suggestion_node(this.selectedindex);this.selectedindex=(index<=-1)?-1:index;var cur_node=this.get_suggestion_node(this.selectedindex);if(old_node){old_node.className=old_node.className.replace(/\btypeahead_selected\b/,'typeahead_not_selected');}
if(cur_node){cur_node.className=cur_node.className.replace(/\btypeahead_not_selected\b/,'typeahead_selected');}
this.recalc_scroll();this._onfound(this.get_current_selection());}
typeaheadpro.prototype.get_suggestion_node=function(index){var nodes=this.list.childNodes;return index==-1?null:nodes[Math.floor(index/this.render_block_size)].childNodes[index%this.render_block_size];}
typeaheadpro.prototype.get_current_selection=function(){return this.selectedindex==-1?false:this.suggestions[this.selectedindex];}
typeaheadpro.prototype.update_class=function(){if(this.suggestions&&this.selectedindex!=-1&&typeahead_source.flatten_string(this.get_current_selection().t)==typeahead_source.flatten_string(this.get_value())){this.set_class('typeahead_found');}else{this.set_class('');}}
typeaheadpro.prototype.select_suggestion=function(index){if(!this.stop_suggestion_select&&this.current_selecting!=index){this.current_selecting=index;}
if(!this.suggestions||index==undefined||index===false||this.suggestions.length<=index||index<0){this._onfound(false);this._onselect(false);this.selectedindex=-1;this.set_class('');}else{this.selectedindex=index;this.set_value(this.suggestions[index].t);this.set_class('typeahead_found');this._onfound(this.suggestions[this.selectedindex]);this._onselect(this.suggestions[this.selectedindex]);}
if(!this.interactive){this.hide();this.blur();}
this.current_selecting=null;return true;}
typeaheadpro.prototype.set_value=function(value){this.obj.value=value;}
typeaheadpro.prototype.get_value=function(){if(this.showing_icon_list&&this.old_typeahead_value!=this.obj.value){this.toggle_icon_list();}
if(this.want_icon_list){return this.typeahead_icon_get_return;}else{if(this.showing_icon_list){this.toggle_icon_list();}}
return this.obj.value;}
typeaheadpro.prototype.found_suggestions=function(suggestions,text,fake_data){if(!suggestions){suggestions=[];}
this.suggestion_count=suggestions.length;if(!fake_data){this.status=typeaheadpro.STATUS_IDLE;this.add_cache(text,suggestions);}
this.clear_render_timeouts();if(this.get_value()==this.results_text){return;}else if(!fake_data){this.results_text=typeahead_source.flatten_string(text);if(this.enumerate&&trim(this.results_text)!=''){this.enumerate=false;}}
var current_selection=-1;if(this.selectedindex!=-1){var selected_id=this.suggestions[this.selectedindex].i;for(var i=0,l=suggestions.length;i<l;i++){if(suggestions[i].i==selected_id){current_selection=i;break;}}}
if(current_selection==-1&&this.auto_select&&suggestions.length){current_selection=0;this._onfound(suggestions[0]);}
this.selectedindex=current_selection;this.suggestions=suggestions;if(!fake_data){this.real_suggestions=suggestions;}
if(suggestions.length){var html=[],blocks=Math.ceil(suggestions.length/this.render_block_size),must_render={},firstblock,samplenode=null;this.list.innerHTML='';for(var i=0;i<blocks;i++){this.list.appendChild(document.createElement('div'));}
if(current_selection>-1){firstblock=Math.floor(current_selection/this.render_block_size);must_render[firstblock]=true;if(current_selection%this.render_block_size>this.render_block_size/2){must_render[firstblock+1]=true;}else if(firstblock!=0){must_render[firstblock-1]=true;}}else{must_render[0]=true;}
for(var node in must_render){this.render_block(node);sample=this.list.childNodes[node].firstChild;}
this.show();if(blocks){var suggestion_height=sample.offsetHeight;this.render_timeouts=[];for(var i=1;i<blocks;i++){if(!must_render[i]){this.list.childNodes[i].style.height=suggestion_height*Math.min(this.render_block_size,suggestions.length-i*this.render_block_size)+'px';this.list.childNodes[i].style.width='1px';this.render_timeouts.push(setTimeout(this.render_block.bind(this,i),700+i*50));}}}}else{this.selectedindex=-1;this.set_message(this.status==typeaheadpro.STATUS_IDLE?this.source.gen_nomatch():this.source.gen_loading());this._onfound(false);}
this.recalc_scroll();if(!fake_data&&this.results_text!=typeahead_source.flatten_string(this.get_value())){this.dirty_results();}}
typeaheadpro.prototype.render_block=function(block,stack){var suggestions=this.suggestions,selectedindex=this.selectedindex,text=this.get_value(),instance=this.instance,html=[],node=this.list.childNodes[block];for(var i=block*this.render_block_size,l=Math.min(suggestions.length,(block+1)*this.render_block_size);i<l;i++){html.push('<div class="');if(selectedindex==i){html.push('typeahead_suggestion typeahead_selected');}else{html.push('typeahead_suggestion typeahead_not_selected');}
html.push('" onmouseover="typeaheadpro.instances[',instance,'].mouse_set_suggestion(',i,')" ','onmousedown="typeaheadpro.instances[',instance,'].select_suggestion(',i,'); event_abort(event);">',this.source.gen_html(suggestions[i],text),'</div>');}
node.innerHTML=html.join('');node.style.height='auto';node.style.width='auto';}
typeaheadpro.prototype.clear_render_timeouts=function(){if(this.render_timeouts){for(var i=0;i<this.render_timeouts.length;i++){clearTimeout(this.render_timeouts[i]);}
this.render_timeouts=null;}}
typeaheadpro.prototype.recalc_scroll=function(){var cn=this.list.firstChild;if(!cn){return;}
if(cn.childNodes.length>this.max_display){var last_child=cn.childNodes[this.max_display-1];var height=last_child.offsetTop+last_child.offsetHeight;this.dropdown.style.height=height+'px';var selected=this.get_suggestion_node(this.selectedindex);if(selected){var scrollTop=this.dropdown.scrollTop;if(selected.offsetTop<scrollTop){this.dropdown.scrollTop=selected.offsetTop;}else if(selected.offsetTop+selected.offsetHeight>height+scrollTop){this.dropdown.scrollTop=selected.offsetTop+selected.offsetHeight-height;}}
if(!typeaheadpro.should_use_overflow){this.dropdown.style.overflowY='scroll';this.dropdown.style.overflowX='hidden';}}else{this.dropdown.style.height='auto';if(!typeaheadpro.should_use_overflow){this.dropdown.style.overflowY='hidden';}}}
typeaheadpro.prototype.search_cache=function(text){return this.cache[typeahead_source.flatten_string(text)];}
typeaheadpro.prototype.add_cache=function(text,results){if(this.source.cache_results){this.cache[typeahead_source.flatten_string(text)]=results;}}
typeaheadpro.prototype.update_status=function(status){this.status=status;this.dirty_results();}
typeaheadpro.prototype.set_class=function(name){this.obj.className=(this.obj.className.replace(/typeahead_[^\s]+/g,'')+' '+name).replace(/ {2,}/g,' ');}
typeaheadpro.prototype.dirty_results=function(){if(!this.enumerate&&trim(this.get_value())==''){this.results_text='';this.set_message(this.source.gen_placeholder());this.suggestions=[];this.selectedindex=-1;this.list.innerHTML='';return;}else if(this.results_text==typeahead_source.flatten_string(this.get_value())){return;}else if(this.status==typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP){this.set_message(this.source.gen_loading());return;}
var time=(new Date).getTime();var updated=false;if(this.last_search<=(time-this.source.search_limit)&&this.status==typeaheadpro.STATUS_IDLE){updated=this.perform_search();}else{if(this.status==typeaheadpro.STATUS_IDLE){if(!this.search_timeout){this.search_timeout=setTimeout(function(){this.search_timeout=false;if(this.status==typeaheadpro.STATUS_IDLE){this.dirty_results();}}.bind(this),this.source.search_limit-(time-this.last_search));}}}
if(this.source.allow_fake_results&&this.real_suggestions&&!updated){var ttext=typeahead_source.tokenize(this.get_value()).sort(typeahead_source._sort);var fake_results=[];for(var i=0;i<this.real_suggestions.length;i++){if(typeahead_source.check_match(ttext,this.real_suggestions[i].t+' '+this.real_suggestions[i].n)){fake_results.push(this.real_suggestions[i]);}}
if(fake_results.length){this.found_suggestions(fake_results,this.get_value(),true);}else{this.selectedindex=-1;this.set_message(this.source.gen_loading());}}}
typeaheadpro.prototype.perform_search=function(){if(this.get_value()==this.results_text){return true;}
var results;if((results=this.search_cache(this.get_value()))===undefined&&!(results=this.source.search_value(this.get_value()))){this.status=typeaheadpro.STATUS_WAITING_ON_SOURCE;this.last_search=(new Date).getTime();return false;}
this.found_suggestions(results,this.get_value(),false);return true;}
typeaheadpro.prototype.set_message=function(text){this.clear_render_timeouts();if(text){this.list.innerHTML='<div class="typeahead_message">'+text+'</div>';this.reset_iframe();}else{this.hide();}
this.recalc_scroll();}
typeaheadpro.prototype.reset_iframe=function(){if(!typeaheadpro.should_use_iframe){return}
if(this.should_use_absolute){typeaheadpro.iframe.style.top=this.dropdown.style.top;typeaheadpro.iframe.style.left=this.dropdown.style.left;}else{typeaheadpro.iframe.style.top=elementY(this.dropdown)+'px';typeaheadpro.iframe.style.left=elementX(this.dropdown)+'px';}
typeaheadpro.iframe.style.width=this.dropdown.offsetWidth+'px';typeaheadpro.iframe.style.height=this.dropdown.offsetHeight+'px';typeaheadpro.iframe.style.display='';}
typeaheadpro.prototype.advance_focus=function(){var inputs=this.obj.form?get_all_form_inputs(this.obj.form):get_all_form_inputs();var next_inputs=false;for(var i=0;i<inputs.length;i++){if(next_inputs){if(inputs[i].type!='hidden'&&inputs[i].tabIndex!=-1&&inputs[i].offsetParent){next_inputs.push(inputs[i]);}}else if(inputs[i]==this.obj){next_inputs=[];}}
setTimeout(function(){for(var i=0;i<this.length;i++){try{if(this[i].offsetParent){this[i].focus();setTimeout(function(){try{this.focus();}catch(e){}}.bind(this[i]),0);return;}}catch(e){}}}.bind(next_inputs?next_inputs:[]),0);}
typeaheadpro.prototype.clear_placeholder=function(){if(this.obj.className.indexOf('typeahead_placeholder')!=-1){this.set_value('');this.set_class('');}}
typeaheadpro.prototype.clear=function(){this.set_value('');this.set_class('');this.selectedindex=-1;this.enumerate=false;this.dirty_results();}
typeaheadpro.prototype.hide=function(){if(this.stop_hiding){return;}
this.visible=false;if(this.should_use_absolute){this.dropdown.style.display='none';}else{this.dropdown.style.visibility='hidden';}
this.clear_render_timeouts();if(typeaheadpro.should_use_iframe){typeaheadpro.iframe.style.display='none';}}
typeaheadpro.prototype.show=function(){this.visible=true;if(this.focused){if(this.should_use_absolute){this.dropdown.style.top=elementY(this.anchor)+this.anchor.offsetHeight+'px';this.dropdown.style.left=elementX(this.anchor)+'px';}
this.dropdown.style.width=(this.anchor.offsetWidth-2)+'px';this.dropdown.style[this.should_use_absolute?'display':'visibility']='';if(typeaheadpro.should_use_iframe){typeaheadpro.iframe.style.display='';this.reset_iframe();}}}
typeaheadpro.prototype.toggle_icon_list=function(no_focus){if(this.showing_icon_list){this.showing_icon_list=false;this.source.showing_icon_list=false;if(!no_focus){this.focus();}
remove_css_class_name(this.typeahead_icon,'on_selected');this.want_icon_list=false;this.showing_icon_list=false;this.stop_suggestion_select=true;if(this.obj){this.dirty_results();}}else{this.source.showing_icon_list=true;this.old_typeahead_value=this.obj.value;this.stop_suggestion_select=true;this.want_icon_list=true;this.dirty_results();this.focus();add_css_class_name(this.typeahead_icon,'on_selected');this.show();this.set_suggestion(-1);this.showing_icon_list=true;}
setTimeout(function(){this.stop_hiding=false;}.bind(this),100)}
typeaheadpro.prototype.focus=function(){this.obj.focus();}
typeaheadpro.prototype.blur=function(){if(this.obj){this.obj.blur();}}
typeaheadpro.kill_typeahead=function(obj){if(obj.typeahead){if(!this.should_use_absolute&&!this.anchor_block){obj.parentNode.removeChild(obj.nextSibling);}
obj.parentNode.removeChild(obj.nextSibling);if(obj.typeahead.source){obj.typeahead.source=obj.typeahead.source.owner=null;}
obj.onfocus=obj.onblur=obj.onkeypress=obj.onkeyup=obj.onkeydown=obj.typeahead=null;}}

var share_data=null;var share_last_comment={p:null,t:null};function share_internal_config(params){if(share_last_comment.p==params){params+='&c='+escapeURI(share_last_comment.t?share_last_comment.t:'');}else{share_last_comment.p=params;}
var async=new AsyncRequest().setURI('/ajax/share_dialog.php?'+params).setMethod('GET').setReadOnly(true);var dialog=new Dialog().setAsync(async).setContentWidth(445).show();return false;}
function share_show_error(params){var dialog=new pop_dialog('share_error_dialog');dialog.show_message(tx('sh01'),tx('sh02'));return false;}
function share_is_shareable(url){return(/(?:https?:\/\/)?\w+\.\w+/.test(url));}
function share_internal_bookmarklet(){if(/http:\/\/[^\/]*?\/posted?\.php/.test(document.location.href)){var dialog=new pop_dialog('share_congratulations');dialog.show_message(tx('sh03'),'<div class="status"><h2>'+tx('sh04')+'</h2><p>'+tx('sh05')+'</p></div>');}
else{throw 0;}}
function share_show_comments(share_id,focus_textarea){var focus_textarea=(focus_textarea==null)?false:focus_textarea;share_footer=ge('share_footer'+share_id);if(share_footer.className=='share_footer hide_comments'){share_footer.className='share_footer show_comments';}
if(focus_textarea){textarea_id='comment'+share_id;$(textarea_id).focus();}
return false;}
function share_show_add_comment(obj,share_id){var node=obj.parentNode;remove_node(node);var add_comment=ge('add_comment_input'+share_id);show(add_comment);var submit_button=ge('add_comment_button'+share_id);submit_button.disabled=false;var textarea_id='comment'+share_id;$(textarea_id).focus();return false;}
function share_add_comment_submit(obj,share_id){var node=obj.parentNode;var comment=node.getElementsByTagName('textarea')[0].value;if(/^\s*$/.test(comment)){share_flash_comment_error(obj.parentNode.getElementsByTagName('textarea')[0]);return;}
else if(comment.length>1000){$('add_comment_error'+share_id).style.display='block';return;}
var commentsNode=ge('share_comments_for_'+share_id);new AsyncRequest().setURI('/ajax/share_misc.php').setData({share_id:share_id,comment:comment}).setHandler(function(response){hide(node);if(commentsNode!=null){commentsNode.innerHTML=commentsNode.innerHTML+response.getPayload();}
node.getElementsByTagName('textarea')[0].value='';}).send();obj.disabled=true;return true;}
function share_delete_comment(obj,share_id,comment_id){var dialog=new pop_dialog();while(obj.className.indexOf('share_other_comment')==-1&&obj!=null){obj=obj.parentNode;}
if(obj!=null){var delete_function=function(){p=obj.parentNode;remove_node(obj);if(p.childNodes.length==0){hide(p);}
new AsyncRequest().setURI('/ajax/share_misc.php').setData({share_id:share_id,delcomment:1,comment_id:comment_id}).send();generic_dialog.get_dialog(this).hide();};dialog.show_choice(tx('sh06'),tx('sh07'),tx('sh08'),delete_function,tx('sh:cancel-button'),function(){generic_dialog.get_dialog(this).hide()});}
return true;}
function share_flash_comment_error(obj){animation(obj).from('background','#ffc8c8').to('background','#fff').duration(500).go();}
function share_show_delete_dialog(context,href){var dialog=new contextual_dialog();dialog.set_context(context);dialog.show_choice(tx('sh10'),tx('sh11'),tx('sh12'),function(){share_delete_clicked(this,context,href)},tx('sh09'),function(){generic_dialog.get_dialog(this).hide()});return false;}
function share_delete_clicked(button,context,href){while(context.parentNode&&context.className.indexOf('sharebox_item ')==-1){context=context.parentNode;}
generic_dialog.get_dialog(button).hide();new AsyncRequest().setURI(href).send();remove_node(context);}
function share_play_video(share_id,unique_id){share_log_play_content(share_id,'video');if(holder=ge(unique_id+'_holder')){if(container=holder.parentNode.parentNode){container.className+=' playing';}}
return false;}
function share_video_thumb_load(img,share_id){if((img.complete==null&&img.width==20&&img.height==20)||(img.mimeType!=null&&img.complete&&img.mimeType=='')||(img.naturalHeight!=null&&img.complete&&img.naturalHeight==0))
{}}
function share_log_play_content(share_id,media_type){new AsyncRequest().setURI('/ajax/shareplay_ajax.php').setData({s:share_id,m:media_type}).send();}
function share_composer_method(obj,method){var tabs=obj.parentNode.parentNode.getElementsByTagName('a');for(var i=0;i<tabs.length;i++){tabs[i].className='';}
obj.className='selected';while(obj.className.indexOf('share_composer')==-1){obj=obj.parentNode;}
obj.className='share_composer share_status_'+method;return false;}
function share_send_onsubmit(obj){var ids=ge('ids');if(!ids.tokenizer||ids.tokenizer.count_names()==0){aiert(tx('sh13'));return false;}
var post=serialize_form(obj);post.action='send';var inputs=obj.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){inputs[i].disabled=true;}
var inputs=obj.getElementsByTagName('textarea');for(var i=0;i<inputs.length;i++){inputs[i].disabled=true;}
share_last_comment.t=inputs[0].value;var divs=obj.getElementsByTagName('div');for(var i=0;i<divs.length;i++){if(typeof divs[i].tokenizer!='undefined'){divs[i].tokenizer.disable();}else if(divs[i].className.indexOf('tokenizer')!=-1){divs[i].className+=' tokenizer_locked';}}
while(obj.className.indexOf('dialog_content')==-1){obj=obj.parentNode;}
new AsyncRequest().setURI('/ajax/share.php').setData(post).setHandler(share_post_send_callback.bind(obj)).send();}
function share_wallpost_onsubmit(obj){var ids=ge('wall_id');if(!ids.tokenizer||ids.tokenizer.count_names()==0){aiert(tx('sh13'));return false;}
var post=serialize_form(obj);post.action='wall';var inputs=obj.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){inputs[i].disabled=true;}
var inputs=obj.getElementsByTagName('textarea');for(var i=0;i<inputs.length;i++){inputs[i].disabled=true;}
share_last_comment.t=inputs[0].value;var divs=obj.getElementsByTagName('div');for(var i=0;i<divs.length;i++){if(typeof divs[i].tokenizer!='undefined'){divs[i].tokenizer.disable();}else if(divs[i].className.indexOf('tokenizer')!=-1){divs[i].className+=' tokenizer_locked';}}
while(obj.className.indexOf('dialog_content')==-1){obj=obj.parentNode;}
new AsyncRequest().setURI('/ajax/share.php').setData(post).setHandler(share_post_send_callback.bind(obj)).send();}
function share_post_onsubmit(obj){var post=serialize_form(obj);post.action='post';var inputs=obj.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){inputs[i].disabled=true;}
var inputs=obj.getElementsByTagName('textarea');for(var i=0;i<inputs.length;i++){inputs[i].disabled=true;}
share_last_comment.t=inputs[0].value;while(obj.className.indexOf('dialog_content')==-1){obj=obj.parentNode;}
new AsyncRequest().setURI('/ajax/share.php').setData(post).setHandler(share_post_send_callback.bind(obj)).send();}
function share_post_send_callback(response){response=response.getPayload();if(response['html']){this.innerHTML=response['html'];if(response['redr']){setTimeout(function(){goURI(response['redr'])},3000);}else{var gd=generic_dialog.get_dialog(this);var tmout=3000;if(response['timeout']){tmout=response['timeout'];}
if(gd){gd.fade_out(500,tmout);}else if(response['close']){setTimeout(function(){self.close()},tmout);}}}else if(response['redr']){goURI(response['redr']);}}
function inline_editor(obj,name,textarea){this.name=name;this.obj=obj;this.more_than_meets_the_eye=true;var edit=document.createElement(textarea?'textarea':'input');this.edit=edit;this.original_value=edit.value=obj.firstChild.nodeValue;edit.className='inputtext inline_edit';if(this.is_textarea=textarea){edit.style.width=(obj.offsetWidth-16)+'px';}
obj.parentNode.insertBefore(edit,obj);obj.parentNode.removeChild(obj);edit.onblur=this._onblur.bind(this);edit.onchange=this._onchange.bind(this);edit.onkeypress=function(event){return this._onkeypress(event?event:window.event)}.bind(this);edit.focus();edit.select();}
inline_editor.prototype._onkeypress=function(event){switch(event?event.keyCode:0){case 27:this.edit.value=this.original_value;case 13:this._onblur();return false;}}
inline_editor.prototype._onblur=function(){if(!this.more_than_meets_the_eye){return false;}
this.more_than_meets_the_eye=false;this._onchange();var anchor=document.createElement('a');var name=this.name;var is_textarea=this.is_textarea;anchor.appendChild(document.createTextNode(this.edit.value));anchor.href='#';anchor.onclick=function(){new inline_editor(this,name,is_textarea);return false};anchor.onmousedown=function(){return false};anchor.className='inline_edit';this.edit.parentNode.insertBefore(anchor,this.edit);this.edit.parentNode.removeChild(this.edit);}
inline_editor.prototype._onchange=function(){var target=this.edit.form[this.name];if(!target){target=document.createElement('input');target.name=this.name;target.type='hidden';this.edit.form.appendChild(target);}
target.value=this.edit.value;}
function composer_attachment(){}
composer_attachment.from_url=function(url){if(!/(?:https?:\/\/)?\w+\.\w+/.test(url)){return false;}
var attachment=new composer_attachment();attachment.url=url;new AsyncRequest().setURI('/inbox/ajax/ajax.php').setData({action:'attachment',url:url}).setHandler(attachment.async_callback.bind(attachment)).send();return attachment;}
composer_attachment.prototype.container_ready=function(obj,show_loading){this.container=obj;var inputs=obj.getElementsByTagName('input');var html=[''];for(var i=0;i<inputs.length;i++){if(inputs[i].type=='text'||inputs[i].type=='hidden'){html.push('<input type="hidden" name="'+htmlspecialchars(inputs[i].name)+'" value="'+htmlspecialchars(inputs[i].value)+'" />');}}
if(show_loading){html.push('&nbsp;');obj.innerHTML=html.join('');obj.className+=' share_attachment_loading';}else{obj.innerHTML+=html.join('');}}
composer_attachment.prototype.render_inputs_recursive=function(name,params){var html=[];if(typeof params=='object'){for(var i in params){html.push(this.render_inputs_recursive(name+'['+i+']',params[i]));}}else if(typeof(params)!='function'){html.push('<input type="hidden" name="',name,'" value="',htmlspecialchars(params),'" />');}
return html.join('');}
composer_attachment.prototype.async_callback=function(response){var payload=response.getPayload();var html=[payload.html];html.push(this.render_inputs_recursive('attachment[params]',payload.params));html.push('<input type="hidden" name="attachment[type]" value="',payload.type,'" />');this.container.className=this.container.className.replace('share_attachment_loading','');set_inner_html(this.container,html.join(''));}
composer_attachment.setup_thumbnails=function(imgs,obj){var sandbox=new image_sandbox();sandbox.onfinish=function(){imgs=sandbox.get_imgs();for(var i=imgs.length-1;i>=0;i--){if(imgs[i].width&&(imgs[i].height<50||imgs[i].width<50||imgs[i].height/imgs[i].width>3||imgs[i].width/imgs[i].height>3)){imgs.splice(i,1);}}
if(!imgs.length){obj.className=obj.className.replace('loading','');obj.parentNode.className=obj.parentNode.className.replace('has_image','');var input=obj;while(input.parentNode&&input.tagName.toLowerCase()!='form'){input=input.parentNode;}
input=input.getElementsByTagName('input');for(var i=0;i<input.length;i++){if(input[i].name.indexOf('[params][images]')!=-1){input[i].parentNode.removeChild(input[i]);}}
return;}
for(var si=0;si<imgs.length-1;si++){for(var sj=imgs.length-1;sj>=si;sj--){if(imgs[si].width*imgs[si].height<imgs[sj].width*imgs[sj].height){temp=imgs[si];imgs[si]=imgs[sj];imgs[sj]=temp;}}}
var input=obj;while(input.parentNode&&input.tagName.toLowerCase()!='form'){input=input.parentNode;}
input=input.getElementsByTagName('input');for(var i=0;i<input.length;i++){if(input[i].name.indexOf('[params][images]')!=-1){input=input[i];break;}}
obj.className=obj.className.replace('loading','');new thumbnail_selector(obj,input,imgs);}.bind(this);sandbox.load_images(imgs);}
function thumbnail_selector(obj,input,images){var html=['<div class="thumbnail_stage"><h4>'+tx('sh14')+'</h4><div class="selector clearfix"><div class="arrows clearfix">','<span class="left"><a href="#" class="arrow disabled">&nbsp;</a></span>','<span class="right"><a href="#" class="arrow ',images.length>1?'enabled':'disabled','">&nbsp;</a></span>','</div><div class="counter"><span>1 of ',images.length,'</span></div></div>'];for(var k=0;k<images.length;k++){html.push('<div class="thumbnail',k==0?' thumbnail_selected':' thumbnail_unselected','">','<img class="img_loading" src="',images[k].src,'" onload="adjustImage(this);" />','</div>');}
html.push('<label style="white-space:nowrap"><input type="checkbox" onclick="this.parentNode.parentNode.parentNode.thumbnail.use_thumbnail(this.checked)" />'+tx('sh15')+'</label></div>');obj.innerHTML=html.join('');this.images=images;this.input=input;input.value=this.images[0].src;this.obj=obj;this.obj.thumbnail=this;this.label=obj.getElementsByTagName('span')[2];this.index=0;var anchors=obj.getElementsByTagName('a');this.left=anchors[0];this.right=anchors[1];this.left.onclick=this.left_arrow_press.bind(this);this.right.onclick=this.right_arrow_press.bind(this);this.left.onselectsart=this.right.onselectstart=function(){return false};this.left.onmousedown=this.right.onmousedown=this._onmousedown;this.left.onmouseout=this.right.onmouseout=this._onmouseout;}
thumbnail_selector.prototype.use_thumbnail=function(checkbox){if(!checkbox){this.move_selection(0);remove_css_class_name(this.obj,'thumbnail_dont_use');}else{this.input.value='';add_css_class_name(this.obj,'thumbnail_dont_use');}}
thumbnail_selector.prototype._onmousedown=function(){add_css_class_name(this,'active');return false;}
thumbnail_selector.prototype._onmouseout=function(){remove_css_class_name(this,'active');}
thumbnail_selector.prototype.left_arrow_press=function(){remove_css_class_name(this.left,'active');this.move_selection(-1);return false;}
thumbnail_selector.prototype.right_arrow_press=function(){remove_css_class_name(this.right,'active');this.move_selection(1);return false;}
thumbnail_selector.prototype.move_selection=function(offset){var index=this.index+offset;if(index>=0&&index<this.images.length){var divs=this.obj.getElementsByTagName('div');var j=0;this.index=index;for(var i=0;i<divs.length;i++){var className=divs[i].className;if(className.indexOf('thumbnail ')==-1){continue;}
var selected=j==index;if(className.indexOf(selected?'_unselected':'_selected')!=-1){divs[i].className=className.replace(/thumbnail_(?:un)?selected/,selected?'thumbnail_selected':'thumbnail_unselected');}
j++;}
this.label.innerHTML=(index+1)+' of '+j;this.left.className=this.left.className.replace(/[^ ]+abled/,index==0?'disabled':'enabled');this.right.className=this.right.className.replace(/[^ ]+abled/,index==this.images.length-1?'disabled':'enabled');this.input.value=this.images[index].src;}}
function image_sandbox(){this.obj=document.createElement('div');this.obj.style.left=this.obj.style.top='-100px';this.obj.style.width=this.obj.style.height='1px';this.obj.style.overflow='hidden';this.images=0;this.done=0;document.body.appendChild(this.obj);this.load_images=function(imgs){this.images=imgs.length;for(var i=0;i<imgs.length;i++){new images_sandbox_loader(this,imgs[i]);}}
this.image_loaded=function(img){this.done++;this.state_change();}
this.image_failed=function(img){img.destroy();this.images--;this.state_change();}
this.get_imgs=function(){var imgs=new Array();var collection=this.obj.getElementsByTagName('img');for(var i=0;i<collection.length;i++){imgs.push(collection[i]);}
return imgs;}
this.state_change=function(){if(this.done==this.images){if(this.onfinish){this.onfinish();}}}}
function images_sandbox_loader(sandbox,img){this.timeout=4000;this.start=(new Date).getTime();this.sandbox=sandbox;if(typeof img!='object'){img={src:img};}
this.obj=document.createElement('img');this.obj.onload=function(){if(this.poll_image)this.poll_image(1)}.bind(this);this.obj.onerror=function(){if(this.poll_image)this.poll_image(2)}.bind(this);for(var key in img){this.obj[key]=img[key];}
this.sandbox.obj.appendChild(this.obj);if(this.poll_image!=null){this.poll_image();}}
images_sandbox_loader.prototype.poll_image=function(state){if(state==1){this.poll_image=null;this.sandbox.image_loaded(this);}else if(state==2){this.poll_image=null;this.sandbox.image_failed(this);}else{if(image_has_failed(this.obj)){this.poll_image(2);}else if(image_has_loaded(this.obj)){this.poll_image(1);}else if(this.start+this.timeout<(new Date).getTime()){this.poll_image(2);}else{setTimeout(function(){if(this.poll_image)this.poll_image()}.bind(this),20);}}}
images_sandbox_loader.prototype.destroy=function(){remove_node(this.obj);this.obj=null;}

function generic_dialog(className,modal){this.className=className;this.content=null;this.obj=null;this.popup=null;this.overlay=null;this.modal=null;this.iframe=null;this.hidden_objects=[];if(modal==true){this.modal=true;}}
generic_dialog.dialog_stack=null;generic_dialog.prototype.setClassName=function(className){this.className=className;};generic_dialog.hide_all=function(){if(generic_dialog.dialog_stack!==null){var stack=generic_dialog.dialog_stack.clone();generic_dialog.dialog_stack=null;for(var i=stack.length-1;i>=0;i--){stack[i].hide();}}};generic_dialog.prototype.should_hide_objects=!ua.windows();generic_dialog.prototype.should_use_iframe=ua.ie()<7||(ua.osx()&&ua.firefox());generic_dialog.prototype.show_dialog=function(html){if(generic_dialog.dialog_stack===null){onunloadRegister(generic_dialog.hide_all,true);}
if(!this.obj){this.build_dialog();}
set_inner_html(this.content,html);var imgs=this.content.getElementsByTagName('img');for(var i=0;i<imgs.length;i++){imgs[i].onload=chain(imgs[i].onload,this.hide_objects.bind(this));}
this.show();this.focus_first_textbox_or_button();this.on_show_callback&&this.on_show_callback();return this;}
generic_dialog.prototype.set_callback=function(callback){this.on_show_callback=callback;return this;}
generic_dialog.prototype.focus_first_textbox_or_button=function(){var INPUT_TYPES={'text':1,'button':1,'submit':1};function focus_textbox(node){var is_textbox=(node.tagName=="INPUT"&&INPUT_TYPES[node.type.toLowerCase()])||(node.tagName=="TEXTAREA");if(is_textbox){try{if(elementY(node)>0&&elementX(node)>0){node.focus();return false;}}catch(e){};}
return true;}
iterTraverseDom(this.content,focus_textbox)}
generic_dialog.prototype.set_top=function(top){return this;}
generic_dialog.prototype.make_modal=function(){if(this.modal){return;}
this.modal=true;if(ua.ie()==7){this.build_iframe();}
this.build_overlay();this.reset_iframe();}
generic_dialog.prototype.show_loading=function(loading_html){if(!loading_html){loading_html=tx('sh:loading');}
return this.show_dialog('<div class="dialog_loading">'+loading_html+'</div>');}
generic_dialog.prototype.show_ajax_dialog_custom_loader=function(html,src,post_vars,use_async_response){if(html){this.show_loading(html);}
var handler=function(use_async_response,response){var html=use_async_response?response.getPayload():response.getPayload().responseText;this.show_dialog(html);}.bind(this,use_async_response);var error_handler=function(response){ErrorDialog.showAsyncError(response);this.hide(false);}.bind(this);var async=new AsyncRequest().setOption('suppressEvaluation',!use_async_response).setURI(src).setData(post_vars||{}).setHandler(handler).setErrorHandler(error_handler).setTransportErrorHandler(error_handler);if(!post_vars){async.setMethod('GET').setReadOnly(true);}
async.send();return this;}
generic_dialog.prototype.show_ajax_dialog=function(src,post_vars,use_async_response){post_vars=post_vars||false;var load=tx('sh:loading');return this.show_ajax_dialog_custom_loader(load,src,post_vars,use_async_response);}
generic_dialog.prototype.show_prompt=function(title,content){return this.show_dialog('<h2><span>'+title+'</span></h2><div class="dialog_content">'+content+'</div>');}
generic_dialog.prototype.show_message=function(title,content,button){if(button==null){button=tx('sh:ok-button');}
return this.show_choice(title,content,button,function(){generic_dialog.get_dialog(this).fade_out(100)});}
generic_dialog.prototype.show_choice=function(title,content,button1,button1js,button2,button2js,buttons_msg,button3,button3js){var buttons='<div class="dialog_buttons" id="dialog_buttons">';if(typeof(buttons_msg)!='undefined'){buttons+='<div class="dialog_buttons_msg">';buttons+=buttons_msg;buttons+='</div>';}
buttons+='<input class="inputsubmit" type="button" value="'+button1+'" id="dialog_button1" />';if(button2){var button2_class='inputsubmit';if(button2==tx('sh:cancel-button')){button2_class+=' inputaux';}
buttons+='<input class="'+button2_class+'" type="button" value="'+button2+'" id="dialog_button2" />';}
if(button3){var button3_class='inputsubmit';if(button3==tx('sh:cancel-button')){button3_class+=' inputaux';}
buttons+='<input class="'+button3_class+'" type="button" value="'+button3+'" id="dialog_button3" />';}
this.show_prompt(title,this.content_to_markup(content)+buttons);var inputs=this.obj.getElementsByTagName('input');if(button3){button1obj=inputs[inputs.length-3];button2obj=inputs[inputs.length-2];button3obj=inputs[inputs.length-1];}else if(button2){button1obj=inputs[inputs.length-2];button2obj=inputs[inputs.length-1];}else{button1obj=inputs[inputs.length-1];}
if(button1js&&button1){if(typeof button1js=='string'){eval('button1js = function() {'+button1js+'}');}
button1obj.onclick=button1js;}
if(button2js&&button2){if(typeof button2js=='string'){eval('button2js = function() {'+button2js+'}');}
button2obj.onclick=button2js;}
if(button3js&&button3){if(typeof button3js=='string'){eval('button3js = function() {'+button3js+'}');}
button3obj.onclick=button3js;}
if(!this.modal){document.onkeyup=function(e){var keycode=(e&&e.which)?e.which:event.keyCode;var btn2_exists=(typeof button2obj!='undefined');var btn3_exists=(typeof button3obj!='undefined');var is_webkit=ua.safari();if(is_webkit&&keycode==13){button1obj.click();}
if(keycode==27){if(btn3_exists){button3obj.click();}else if(btn2_exists){button2obj.click();}else{button1obj.click();}}
document.onkeyup=function(){}}
this.button_to_focus=button1obj;button1obj.offsetWidth&&button1obj.focus();}
return this;}
generic_dialog.prototype.show_choice_ajax=function(title,content_src,button1,button1js,button2,button2js,buttons_msg,button3,button3js,readonly){this.show_loading(tx('sh:loading'));var handler=function(response){this.show_choice(title,response.getPayload(),button1,button1js,button2,button2js,buttons_msg,button3,button3js);}.bind(this);var error_handler=function(response){ErrorDialog.showAsyncError(response);this.hide(false);}.bind(this);var req=new AsyncRequest().setURI(content_src).setHandler(handler).setErrorHandler(error_handler).setTransportErrorHandler(error_handler);if(readonly==true){req.setReadOnly(true);}
req.send();return this;}
generic_dialog.prototype.show_form_ajax=function(title,src,button,reload_page_on_success){this.show_loading(tx('sh:loading'));var form_id='dialog_ajax_form__'+gen_unique();var preSubmitErrorHandler=function(dialog,response){if(response.getError()!=true){dialog.hide();ErrorDialog.showAsyncError(response);}else{dialog.show_choice(title,response.getPayload(),'Okay',function(){dialog.fade_out(200);});}}.bind(null,this);var preSubmitHandler=function(dialog,response){var contents='<form id="'+form_id+'" onsubmit="return false;">'+response.getPayload()+'</form>';dialog.show_choice(title,contents,button,submitHandler,tx('sh:cancel-button'),function(){dialog.fade_out(200);});}.bind(null,this);var submitHandler=function(){new AsyncRequest().setURI(src).setData(serialize_form(ge(form_id))).setHandler(postSubmitHandler).setErrorHandler(postSubmitErrorHandler).send();};var postSubmitHandler=function(dialog,response){dialog.show_choice(title,response.getPayload(),'Okay',function(){dialog.fade_out(200);});if(reload_page_on_success){window.location.reload();}else{setTimeout(function(){dialog.fade_out(500);},750);}}.bind(null,this);var postSubmitErrorHandler=function(dialog,response){if(response.getError()==1346001){preSubmitHandler(response);}else if(response.getError()!=true){ErrorDialog.showAsyncError(response);}else{preSubmitErrorHandler(response);}}.bind(null,this);new AsyncRequest().setURI(src).setReadOnly(true).setHandler(preSubmitHandler).setErrorHandler(preSubmitErrorHandler).send();return this;}
generic_dialog.prototype.show_form=function(title,content,button,target,submit_callback){content='<form action="'+target+'" method="post">'+this.content_to_markup(content);var post_form_id=ge('post_form_id');if(post_form_id){content+='<input type="hidden" name="post_form_id" value="'+post_form_id.value+'" />';}
content+='<div class="dialog_buttons" id="dialog_buttons"><input class="inputsubmit" id="dialog_confirm" name="dialog_confirm" type="submit" value="'+button+'" />';content+='<input type="hidden" name="next" value="'+htmlspecialchars(document.location.href)+'"/>';content+='<input class="inputsubmit inputaux" type="button" value="'+tx('sh:cancel-button')+'" onclick="generic_dialog.get_dialog(this).fade_out(100)" /></form>';this.show_prompt(title,content);var submitButton=ge('dialog_confirm');submitButton.onclick=function(){window[submit_callback]&&window[submit_callback]();}
return this;}
generic_dialog.prototype.content_to_markup=function(content){return(typeof content=='string')?'<div class="dialog_body">'+content+'</div>':'<div class="dialog_summary">'+content.summary+'</div><div class="dialog_body">'+content.body+'</div>';}
generic_dialog.prototype.hide=function(temporary){if(this.obj){this.obj.style.display='none';}
if(this.iframe){this.iframe.style.display='none';}
if(this.overlay){this.overlay.style.display='none';}
if(this.timeout){clearTimeout(this.timeout);this.timeout=null;return;}
if(this.hidden_objects.length){for(var i=0,il=this.hidden_objects.length;i<il;i++){this.hidden_objects[i].style.visibility='';}
this.hidden_objects=[];}
clearInterval(this.active_hiding);if(!temporary){if(generic_dialog.dialog_stack){var stack=generic_dialog.dialog_stack;for(var i=stack.length-1;i>=0;i--){if(stack[i]==this){stack.splice(i,1);}}
if(stack.length){stack[stack.length-1].show();}}
if(this.obj){this.obj.parentNode.removeChild(this.obj);this.obj=null;}
if(this.close_handler){this.close_handler();}}
return this;}
generic_dialog.prototype.fade_out=function(interval,timeout,callback){if(!this.popup){return this;}
try{animation(this.obj).duration(timeout||0).checkpoint().to('opacity',0).hide().duration(interval||350).ondone(function(){callback&&callback();this.hide();}.bind(this)).go();}catch(e){this.hide();}
return this;}
generic_dialog.prototype.show=function(){if(this.obj&&this.obj.style.display){this.obj.style.visibility='hidden';this.obj.style.display='';this.reset_dialog();this.obj.style.visibility='';this.obj.dialog=this;}else{this.reset_dialog();}
this.hide_objects();clearInterval(this.active_hiding);this.active_hiding=setInterval(this.active_resize.bind(this),500);var stack=generic_dialog.dialog_stack?generic_dialog.dialog_stack:generic_dialog.dialog_stack=[];if(stack.length){var current_dialog=stack[stack.length-1];if(current_dialog!=this&&!current_dialog.is_stackable){current_dialog.hide();}}
for(var i=stack.length-1;i>=0;i--){if(stack[i]==this){stack.splice(i,1);}else{stack[i].hide(true);}}
stack.push(this);return this;}
generic_dialog.prototype.enable_buttons=function(enable){var inputs=this.obj.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){if(inputs[i].type=='button'||inputs[i].type=='submit'){inputs[i].disabled=!enable;}}}
generic_dialog.prototype.active_resize=function(){if(this.last_offset_height!=this.content.offsetHeight){this.hide_objects();this.last_offset_height=this.content.offsetHeight;}}
generic_dialog.prototype.hide_objects=function(){var hide=[],objects=[];var ad_locs=['',0,1,2,4,5,9,3];for(var i=0;i<ad_locs.length;i++){var ad_div=ge('ad_'+ad_locs[i]);if(ad_div!=null){hide.push(ad_div);}}
var rect={x:elementX(this.content),y:elementY(this.content),w:this.content.offsetWidth,h:this.content.offsetHeight};if(this.should_hide_objects){var iframes=document.getElementsByTagName('iframe');for(var i=0;i<iframes.length;i++){if(iframes[i].className.indexOf('share_hide_on_dialog')!=-1){objects.push(iframes[i]);}}}
var swfs=getElementsByTagNames('embed,object');for(var i=0;i<swfs.length;i++){if((swfs[i].getAttribute('wmode')||'').toLowerCase()!='transparent'||this.should_hide_objects){objects.push(swfs[i]);}}
for(var i=0;i<objects.length;i++){var node=objects[i].offsetHeight?objects[i]:objects[i].parentNode;swf_rect={x:elementX(node),y:elementY(node),w:node.offsetWidth,h:node.offsetHeight};if(!is_descendent(objects[i],this.content)&&rect.y+rect.h>swf_rect.y&&swf_rect.y+swf_rect.h>rect.y&&rect.x+rect.w>swf_rect.x&&swf_rect.x+swf_rect.w>rect.w&&this.hidden_objects.indexOf(node)==-1){hide.push(node);}}
for(var i=0;i<hide.length;i++){this.hidden_objects.push(hide[i]);hide[i].style.visibility='hidden';}}
generic_dialog.prototype.build_dialog=function(){if(!this.obj){this.obj=document.createElement('div');}
this.obj.className='generic_dialog'+(this.className?' '+this.className:'');this.obj.style.display='none';onloadRegister(function(){document.body.appendChild(this.obj);}.bind(this));if(this.should_use_iframe||(this.modal&&ua.ie()==7)){this.build_iframe();}
if(!this.popup){this.popup=document.createElement('div');this.popup.className='generic_dialog_popup';}
this.popup.style.left=this.popup.style.top='';this.obj.appendChild(this.popup);if(this.modal){this.build_overlay();}}
generic_dialog.prototype.build_iframe=function(){if(!this.iframe&&!(this.iframe=ge('generic_dialog_iframe'))){this.iframe=document.createElement('iframe');this.iframe.id='generic_dialog_iframe';this.iframe.src="/common/blank.html";}
this.iframe.frameBorder='0';onloadRegister(function(){document.body.appendChild(this.iframe);}.bind(this));}
generic_dialog.prototype.build_overlay=function(){this.overlay=document.createElement('div');this.overlay.id='generic_dialog_overlay';if(document.body.clientHeight>document.documentElement.clientHeight){this.overlay.style.height=document.body.clientHeight+'px';}else{this.overlay.style.height=document.documentElement.clientHeight+'px';}
onloadRegister(function(){document.body.appendChild(this.overlay);}.bind(this));}
generic_dialog.prototype.reset_dialog=function(){if(!this.popup){return;}
onloadRegister(function(){this.reset_dialog_obj();this.reset_iframe();}.bind(this));}
generic_dialog.prototype.reset_iframe=function(){if(!this.should_use_iframe&&!(this.modal&&ua.ie()==7)){return;}
if(this.modal){this.iframe.style.left='0px';this.iframe.style.top='0px';this.iframe.style.width='100%';if((document.body.clientHeight>document.documentElement.clientHeight)&&(document.body.clientHeight<10000)){this.iframe.style.height=document.body.clientHeight+'px';}else if((document.body.clientHeight<document.documentElement.clientHeight)&&(document.documentElement.clientHeight<10000)){this.iframe.style.height=document.documentElement.clientHeight+'px';}else{this.iframe.style.height='10000px';}}else{this.iframe.style.left=elementX(this.frame)+'px';this.iframe.style.top=elementY(this.frame)+'px';this.iframe.style.width=this.frame.offsetWidth+'px';this.iframe.style.height=this.frame.offsetHeight+'px';}
this.iframe.style.display='';}
generic_dialog.prototype.reset_dialog_obj=function(){}
generic_dialog.get_dialog=function(obj){while(!obj.dialog&&obj.parentNode){obj=obj.parentNode;}
return obj.dialog?obj.dialog:false;}
function pop_dialog(className,callback_function,modal){this.top=125;this.parent.construct(this,className,modal);this.on_show_callback=callback_function;}
pop_dialog.extend(generic_dialog);pop_dialog.prototype.do_expand_animation=false;pop_dialog.prototype.kill_expand_animation=true;pop_dialog.prototype.show_ajax_dialog=function(src,post_vars,title,use_async_response){post_vars=post_vars||false;if(this.do_expand_animation&&!this.kill_expand_animation){var load=null;this.show_loading_title(title);}else{var load=tx('sh:loading');}
return this.show_ajax_dialog_custom_loader(load,src,post_vars,use_async_response);}
pop_dialog.prototype.show_message=function(title,content,button){if(this.do_expand_animation&&!this.kill_expand_animation){this.show_loading_title(title);}else{this.show_loading();}
return this.parent.show_message(title,content,button);}
pop_dialog.prototype.show_dialog=function(html,prevent_expand_animation){var new_dialog=this.parent.show_dialog(html);if(this.do_expand_animation&&!prevent_expand_animation&&!this.kill_expand_animation){function check_done_loading_title(callback,i){var i=(i?i:0);if(this.done_loading_title!=true&&i<10){i++;setTimeout(check_done_loading_title.bind(this,callback,i),50);}else{callback&&callback();}}
function check_for_complete_images(content,callback,attempt){var complete_images=0;var images=content.getElementsByTagName('img');var safari2=ua.safari()<3;for(var i=0;i<images.length;i++){var imageobj=images[i];if(image_has_loaded(imageobj)){complete_images++;}}
if(complete_images!=images.length){if(attempt<20){attempt++;setTimeout(function(){check_for_complete_images(content,callback,attempt);},100);}else{callback();}}else{callback();}}
var divs=this.content.getElementsByTagName('div');for(var i=0;i<divs.length;i++){if(divs[i].className=='dialog_content'){expand_animation_div=divs[i];break;}}
var container_div=document.createElement('div');container_div.style.padding='0px';container_div.style.margin='0px';container_div.style.overflow='visible';expand_animation_div.parentNode.insertBefore(container_div,expand_animation_div);container_div.appendChild(expand_animation_div);expand_animation_div.style.overflow='hidden';check_for_complete_images(expand_animation_div,function(){check_done_loading_title.bind(this,function(){this.content.getElementsByTagName('h2')[0].className='';animation(expand_animation_div).to('height','auto').from(0).from('opacity',0).to(1).ease(animation.ease.both).show().duration(200).ondone(function(){container_div.parentNode.insertBefore(expand_animation_div,container_div);container_div.parentNode.removeChild(container_div);if(!this.button_to_focus){var inputs=this.obj.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){if(inputs[i].type=='button'&&inputs[i].id=='dialog_button1'){this.button_to_focus=inputs[i];break;}}}
if(this.button_to_focus){setTimeout(function(){this.button_to_focus.focus();}.bind(this),50);}
expand_animation_div.style.overflow='visible'
this.do_expand_animation=false;this.show();}.bind(this,{expand_animation_div:expand_animation_div,container_div:container_div})).go();}.bind(this))();}.bind(this,{expand_animation_div:expand_animation_div}),0);}
return new_dialog;}
pop_dialog.prototype.build_dialog=function(){this.parent.build_dialog();this.obj.className+=' pop_dialog';this.popup.innerHTML='<table id="pop_dialog_table" class="pop_dialog_table">'+'<tr><td class="pop_topleft"></td><td class="pop_border"></td><td class="pop_topright"></td></tr>'+'<tr><td class="pop_border"></td><td class="pop_content" id="pop_content"></td><td class="pop_border"></td></tr>'+'<tr><td class="pop_bottomleft"></td><td class="pop_border"></td><td class="pop_bottomright"></td></tr>'+'</table>';this.frame=this.popup.getElementsByTagName('tbody')[0];this.content=this.popup.getElementsByTagName('td')[4];}
pop_dialog.prototype.reset_dialog_obj=function(){this.popup.style.top=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+this.top+'px';}
pop_dialog.prototype.set_top=function(top){this.top=top;}
pop_dialog.prototype.show_prompt=function(title,content){if(!this.do_expand_animation||this.kill_expand_animation){return this.show_dialog('<h2><span>'+title+'</span></h2><div class="dialog_content">'+content+'</div>');}
return this.show_dialog('<h2 class="dialog_loading"><span>'+title+'</span></h2><div class="dialog_content" style="display:none;">'+content+'</div>');}
pop_dialog.prototype.show_loading_title=function(title){if(!this.kill_expand_animation){this.do_expand_animation=true;this.show_dialog('<h2 class="dialog_loading"><span>'+title+'</span></h2>',true);setTimeout(function(){this.done_loading_title=true;}.bind(this),200);}else{this.show_loading();}}
function contextual_dialog(className){this.parent.construct(this,className);}
contextual_dialog.extend(generic_dialog);contextual_dialog.prototype.set_context=function(obj){this.context=obj;return this;}
contextual_dialog.prototype.build_dialog=function(){this.parent.build_dialog();this.obj.className+=' contextual_dialog';this.popup.innerHTML='<div class="contextual_arrow"><span>^_^keke1</span></div><div class="contextual_dialog_content"></div>';this.arrow=this.popup.getElementsByTagName('div')[0];this.content=this.frame=this.popup.getElementsByTagName('div')[1];}
contextual_dialog.prototype.reset_dialog_obj=function(){var x=elementX(this.context);var center=(document.body.offsetWidth-this.popup.offsetWidth)/2;if(x<document.body.offsetWidth/2){this.arrow.className='contextual_arrow_rev';var left=Math.min(center,x+this.context.offsetWidth-this.arrow_padding_x);var arrow=x-left+this.context.offsetWidth+this.arrow_padding_x;}else{this.arrow.className='contextual_arrow';var left=Math.max(center,x-this.popup.offsetWidth+this.arrow_padding_x);var arrow=x-left-this.arrow_padding_x-this.arrow_width;}
if(isNaN(left)){left=0;}
if(isNaN(arrow)){arrow=0;}
this.popup.style.top=(elementY(this.context)+this.context.offsetHeight-this.arrow.offsetHeight+this.arrow_padding_y)+'px';this.popup.style.left=left+'px';this.arrow.style.backgroundPosition=arrow+'px';}
contextual_dialog.prototype._remove_resize_events=function(){if(this._scroll_events){for(var i=0;i<this._scroll_events.length;i++){removeEventBase(this._scroll_events[i].obj,this._scroll_events[i].event,this._scroll_events[i].func);}}
this._scroll_events=[];}
contextual_dialog.prototype.show=function(){this._remove_resize_events();var obj=this.context;while(obj){if(obj.id!='content'&&(obj.scrollHeight&&obj.offsetHeight&&obj.scrollHeight!=obj.offsetHeight)||(obj.scrollWidth&&obj.offsetWidth&&obj.scrollWidth!=obj.offsetWidth)){var evt={obj:obj,event:'scroll',func:this.reset_dialog_obj.bind(this)};addEventBase(evt.obj,evt.event,evt.func);}
obj=obj.parentNode;}
var evt={obj:window,event:'resize',func:this.reset_dialog_obj.bind(this)};addEventBase(evt.obj,evt.event,evt.func);this.parent.show();}
contextual_dialog.prototype.hide=function(temp){this._remove_resize_events();this.parent.hide(temp);}
contextual_dialog.prototype.arrow_padding_x=5;contextual_dialog.prototype.arrow_padding_y=10;contextual_dialog.prototype.arrow_width=13;contextual_dialog.hide_all=function(callback){if(generic_dialog.dialog_stack){for(var i=0;i<generic_dialog.dialog_stack.length;i++){if(generic_dialog.dialog_stack[i].context&&generic_dialog.dialog_stack[i].arrow){generic_dialog.dialog_stack[i].hide();}}}
callback&&callback();}
function ErrorDialog(){this.parent.construct(this,'errorDialog',null,true);return this;};ErrorDialog.extend(pop_dialog);copy_properties(ErrorDialog.prototype,{showError:function(title,message){return this.show_message(title,message);}});copy_properties(ErrorDialog,{showAsyncError:function(response){try{return(new ErrorDialog()).showError(response.getErrorSummary(),response.getErrorDescription());}catch(ex){aiert(response);}}});

function _poll_make_ajax_request(poll_id,answer_id){var questions_name="questions_"+poll_id;hide(ge(questions_name));var status_name="status_"+poll_id;var status_obj=ge(status_name);show(status_obj);status_obj.innerHTML='<div class="waiting"><div class="spin"><p>'+tx('pls01')+'</p></div></div>';new AsyncRequest().setURI("ajax/polls/poll_vote.php").setMethod('POST').setData({poll_id:poll_id,vote:answer_id}).setHandler(_poll_ajax_vote_success_handler.bind(status_obj)).setErrorHandler(_poll_ajax_vote_failure_handler.bind(status_obj)).send();}
function _poll_ajax_vote_success_handler(resp){var payload=resp.getPayload();if(payload.error){this.innerHTML=_poll_ajax_error_message();}else{var see_more_name="Poll_"+payload.poll_id+"_see_more_div";if(ge(see_more_name)){show(ge(see_more_name));}
_draw_poll_chart_js(payload,1);}}
function _poll_ajax_error_message(){return'<div class="waiting"><p>'+tx('pls02')+'</p></div>';}
function _poll_ajax_vote_failure_handler(resp){this.innerHTML=_poll_ajax_error_message();}
function submit_poll_form(poll_id,vote_id){if(poll_id&&vote_id){return _poll_make_ajax_request(poll_id,vote_id);}
return false;}
function _draw_poll_chart_js(poll_data,animate){var poll_id=poll_data.poll_id;var status_name="status_"+poll_id;hide(ge(status_name));var answers_name="answers_"+poll_id;var answers_name_elt=ge(answers_name);show(answers_name_elt);var max_width=180;var max_pct=poll_data.max_pct;var width_per_pct;if(max_pct>0){width_per_pct=max_width/max_pct;}else{width_per_pct=0;}
var user_vote=poll_data.user_vote;var bars=[];start_offset=0;for(var key in poll_data.answers){var pct_votes=poll_data.answers[key].pct_votes;var width=Math.round(pct_votes*width_per_pct);var modifier=1.8;var bar_name="a"+key;var bar_obj=ge(bar_name);if(user_vote==key){bar_obj.className="scaled myvote";}else{bar_obj.className="scaled";}
if(pct_votes>0){_poll_slide_anim(ge(bar_name),width,modifier,start_offset);start_offset+=100;}
var pct_name="p"+key;$(pct_name).innerHTML=poll_data.answers[key].pct_votes+"%";}}
function _poll_slide_anim(elem,barwidth,modifier,start_offset){elem.style.width='0px';show(elem);barwidth=1*barwidth;for(var i=1;i<=100;i+=1){mod=modifier/__poll_slide_anim_velocity(i);(function(){var pos=i;setTimeout(function(){elem.style.width=((pos/100)*barwidth)+"px";},pos*mod+start_offset);})();}
start_offset=start_offset+100*mod;for(var i=1;i<=100;i+=1){mod=modifier;(function(){var pos=i;setTimeout(function(){elem.style.width=(barwidth+_poll_bounce_factor(pos)*0.1*barwidth)+"px";},pos*mod+start_offset);})();}}
function __poll_slide_anim_velocity(i){return 1;}
function _poll_bounce_factor(i){return Math.sin(Math.PI*2*i/100);}
function poll_update_results_chart(poll_id,chart_id){new AsyncRequest().setURI('ajax/polls/poll_results.php').setMethod('POST').setData({poll_id:poll_id,animate:0}).setHandler(_poll_update_results_success_handler).setErrorHandler(bagofholding).send();}
function _poll_update_results_success_handler(resp){var chart_obj=getChartFromId("overalldiv");var poll_data=resp.getPayload();if(!poll_data){return;}
if(poll_data.completed){window.location.reload();}
if(window.total_votes<poll_data.total_votes){window.total_votes=poll_data.total_votes;$("cost").innerHTML=poll_data.cost;$("responses").innerHTML=poll_data.total_votes;_poll_render_recent_responses(poll_data.recent_responses);chart_obj.setDataXML(poll_data.results_xml);}}
function _poll_render_recent_responses(recent_responses){var len=recent_responses.length;if(len>0){hide(ge("streamrows_noresponses"));}
for(var i=0;i<len;i++){var vote_name=recent_responses[i].vote_name;var vote_time_str=recent_responses[i].time_absolute_str;$("answernameblock_"+i).innerHTML=vote_name;$("timeblock_"+i).innerHTML=vote_time_str;show(ge("streamrow_"+i));}
return;}

var geo_countries_populated=false;var geo_country_name='';function select_geo_by_city(){showTableRow(getParentRow(ge('city_selector')));hide(getParentRow(ge('country')));if(ge('city_i8n')){hide(getParentRow(ge('city_i8n')));}
clear_values();if(ge('geo_selector')){hide(getParentRow(ge('geo_selector')));}}
function select_geo_by_country(){init_geo_by_country();showTableRow(getParentRow(ge('country')));if(ge('city_i8n')){showTableRow(getParentRow(ge('city_i8n')));}
hide(getParentRow(ge('city_selector')));clear_values();if(ge('geo_selector')){hide(getParentRow(ge('geo_selector')));}}
function init_geo_by_country(){if(!geo_countries_populated){get_country_geos();}}
function set_geo_by_country_name(name){country_select=ge('country');for(i=0;i<country_select.length;i++){if(country_select.options[i].innerHTML==name){country_select.options[i].selected=true;break;}}}
function clear_values(){$('zipcode_id').value='';if(ge('city_i8n')){$('city_i8n').value='';}
$('n').value='';$('country').value='';$('sq').value='';}
function on_city_selected(){selected_index=$('n').value;if(selected_index<=0){return;}
get_geos_by_city(selected_index);if(ge('geo_selector')){showTableRow(getParentRow(ge('geo_selector')));}}
function get_geos(data,success_fn){new AsyncRequest().setURI('/ajax/geo_selector_ajax.php').setData(data).setHandler(success_fn).setErrorHandler(get_geos_failure).send();}
function get_geos_by_city(city_id){var data={'network_key':city_id};get_geos(data,populate_div_with_geos);}
function get_country_geos(){var data={'country_geos':true};get_geos(data,populate_select_with_geos);}
function populate_div_with_geos(response){var content=response.getPayload();$('zipcode_id').value=content['zipcode_id'];var geo_array=content['geo_array'];if(ge('geo_selector')){var str='<table class="geo_options" border="0" cellpadding="0" cellspacing="0">';var checked='checked';var num_suggestions=0;for(var i in geo_array){str+='<tr><td><input type="radio" name="geo" value="'+i+'" '+checked+' id="'+i+'"></td><td> <label for="'+i+'">'+geo_array[i]+'</label></td></tr>';checked='';num_suggestions++;}
str+='</table>';if(num_suggestions==0){str='<div style="margin: 4px;">'+tx('gs:no-suggestions')+'</div>';}
$('geo_selector').innerHTML=str;}}
function populate_select_with_geos(response){var content=response.getPayload();var geo_array=content['geo_array'];country_select=ge('country');var select_i=1;for(var i=0,il=geo_array.length;i<il;i++){country_select.options[select_i]=new Option(geo_array[i]['name'],geo_array[i]['id']);if(typeof(geo_event)!="undefined"&&geo_event==true){if(country_select.options[select_i].value==geo_country){country_select.options[select_i].selected=true;}}
select_i++;}
if(select_i==1){country_select.options[select_i]=new Option(tx('gs:please-login'),0);}
geo_countries_populated=true;if(geo_country_name!=''){set_geo_by_country_name(geo_country_name);}}
function get_geos_failure(response){}

if(typeof deconcept=="undefined")var deconcept={};if(typeof deconcept.util=="undefined")deconcept.util={};if(typeof deconcept.SWFObjectUtil=="undefined")deconcept.SWFObjectUtil={};deconcept.SWFObject=function(swf,id,w,h,ver,c,quality,xiRedirectUrl,redirectUrl,detectKey){if(!document.getElementById){return;}
this.DETECT_KEY=detectKey?detectKey:'detectflash';this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params={};this.variables={};this.attributes=[];this.fallback_html='';this.fallback_js_fcn=function(){};if(swf){this.setAttribute('swf',swf);}
if(id){this.setAttribute('id',id);}
if(w){this.setAttribute('width',w);}
if(h){this.setAttribute('height',h);}
if(ver){this.setAttribute('version',new deconcept.PlayerVersion(ver.toString().split(".")));}
this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);}
window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}
if(c){this.addParam('bgcolor',c);}
var q=quality?quality:'high';this.addParam('quality',q);this.setAttribute('useExpressInstall',false);this.setAttribute('doExpressInstall',false);var xir=(xiRedirectUrl)?xiRedirectUrl:window.location;this.setAttribute('xiRedirectUrl',xir);this.setAttribute('redirectUrl','');if(redirectUrl){this.setAttribute('redirectUrl',redirectUrl);}}
deconcept.SWFObject.prototype={useExpressInstall:function(path){this.xiSWFPath=!path?"/swf/expressinstall.swf":path;this.setAttribute('useExpressInstall',true);},setAttribute:function(name,value){this.attributes[name]=value;},getAttribute:function(name){return this.attributes[name]||"";},addParam:function(name,value){this.params[name]=value;},getParams:function(){return this.params;},addVariable:function(name,value){this.variables[name]=value;},getVariable:function(name){return this.variables[name]||"";},getVariables:function(){return this.variables;},getVariablePairs:function(){var variablePairs=[];var key;var variables=this.getVariables();for(key in variables){variablePairs[variablePairs.length]=key+"="+variables[key];}
return variablePairs;},getSWFHTML:function(){var swfNode="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute('swf',this.xiSWFPath);}
swfNode='<embed type="application/x-shockwave-flash" src="'+htmlspecialchars(this.getAttribute('swf'))+'" width="'+htmlspecialchars(this.getAttribute('width'))+'" height="'+htmlspecialchars(this.getAttribute('height'))+'" style="'+htmlspecialchars(this.getAttribute('style')||"")+'"';swfNode+=' id="'+htmlspecialchars(this.getAttribute('id'))+'" name="'+htmlspecialchars(this.getAttribute('id'))+'" ';var params=this.getParams();for(var key in params){swfNode+=htmlspecialchars(key)+'="'+htmlspecialchars(params[key])+'" ';}
var pairs=this.getVariablePairs().join("&");if(pairs.length>0){swfNode+='flashvars="'+pairs+'"';}
swfNode+='/>';}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute('swf',this.xiSWFPath);}
swfNode='<object id="'+this.getAttribute('id')+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute('width')+'" height="'+this.getAttribute('height')+'" style="'+(this.getAttribute('style')||"")+'">';swfNode+='<param name="movie" value="'+this.getAttribute('swf')+'" />';var params=this.getParams();for(var key in params){swfNode+='<param name="'+key+'" value="'+params[key]+'" />';}
var pairs=this.getVariablePairs().join("&");if(pairs.length>0){swfNode+='<param name="flashvars" value="'+pairs+'" />';}
swfNode+="</object>";}
return swfNode;},write:function(elementId){if(this.getAttribute('useExpressInstall')){var expressInstallReqVer=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(expressInstallReqVer)&&!this.installedVer.versionIsValid(this.getAttribute('version'))){this.setAttribute('doExpressInstall',true);this.addVariable("MMredirectURL",escape(this.getAttribute('xiRedirectUrl')));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}
var n=(typeof elementId=='string')?document.getElementById(elementId):elementId;if(this.skipDetect||this.getAttribute('doExpressInstall')||this.installedVer.versionIsValid(this.getAttribute('version'))){n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute('redirectUrl')!=""){document.location.replace(this.getAttribute('redirectUrl'));}
need_version=this.getAttribute('version').major+'.'+this.getAttribute('version').minor+'.'+this.getAttribute('version').rev;have_version=this.installedVer.major+'.'+this.installedVer.minor+'.'+this.installedVer.rev;this.fallback_js_fcn(have_version,need_version);n.innerHTML=this.fallback_html;}
return false;}}
deconcept.SWFObjectUtil.getPlayerVersion=function(){var PlayerVersion=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){for(k=0;k<navigator.plugins.length;k++){try{x=navigator.plugins[k];if(x.name=='Shockwave Flash'){PlayerVersion_tmp=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));if(typeof PlayerVersion=='undefined'||PlayerVersion_tmp.major>PlayerVersion.major||(PlayerVersion_tmp.major==PlayerVersion.major&&(PlayerVersion_tmp.minor>PlayerVersion.minor||(PlayerVersion_tmp.minor==PlayerVersion.minor&&PlayerVersion_tmp.rev>PlayerVersion.rev)))){PlayerVersion=PlayerVersion_tmp;}}}catch(honk){}}}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var counter=3;while(axo){try{counter++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+counter);PlayerVersion=new deconcept.PlayerVersion([counter,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");PlayerVersion=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(PlayerVersion.major==6){return PlayerVersion;}}
try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}
if(axo!=null){PlayerVersion=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}
return PlayerVersion;}
deconcept.PlayerVersion=function(arrVersion){this.major=arrVersion[0]!=null?parseInt(arrVersion[0]):0;this.minor=arrVersion[1]!=null?parseInt(arrVersion[1]):0;this.rev=arrVersion[2]!=null?parseInt(arrVersion[2]):0;}
deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major)return false;if(this.major>fv.major)return true;if(this.minor<fv.minor)return false;if(this.minor>fv.minor)return true;if(this.rev<fv.rev)return false;return true;}
deconcept.util={getRequestParameter:function(param){var q=document.location.search||document.location.hash;if(param==null){return q;}
if(q){var pairs=q.substring(1).split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return pairs[i].substring((pairs[i].indexOf("=")+1));}}}
return"";}}
deconcept.SWFObjectUtil.cleanupSWFs=function(){var objects=document.getElementsByTagName("OBJECT");for(var i=objects.length-1;i>=0;i--){objects[i].style.display='none';for(var x in objects[i]){if(typeof objects[i][x]=='function'){objects[i][x]=function(){};}}}}
if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];}}
var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;var flash_update_dialog_shown=false;function spawn_flash_update_dialog(have_version,need_version){if(flash_update_dialog_shown)return;flash_update_dialog_shown=true;dialog=new pop_dialog('errorDialog');new AsyncRequest().setURI('/ajax/flash_update_dialog.php').setData({have_version:have_version,need_version:need_version}).setHandler(function(response){message_data=response.getPayload();dialog.show_message(message_data.title,message_data.body,'Close');}).send();}
function setFlashFallback(id,required_version){var fallback=ge(id);var version=deconcept.SWFObjectUtil.getPlayerVersion();if(fallback&&version['major']>0){var current_version=version['major']+'.'+version['minor']+'.'+version['rev'];fallback.innerHTML=tx('flash:upgrade-explanation',{'required-version':required_version,'current-version':current_version});}}
function getFlashPlayer(){goURI('http://adobe.com/go/getflashplayer');return false;}

var
kError_Global_ValidationError=1346001,kError_Login_GenericError=1348009,kError_Chat_NotAvailable=1356002,kError_Chat_SendOtherNotAvailable=1356003,kError_Async_NotLoggedIn=1357001,kError_Async_LoginChanged=1357003,kError_Async_CSRFCheckFailed=1357004,kError_Chat_TooManyMessages=1356008,kError_Platform_CallbackValidationFailure=1349007,kError_Platform_ApplicationResponseInvalid=1349008;

var status_editor={active:false,menu_active:false,status_text:'',status_blur:false,status_reblur:false,setup:function(initial_status){this.status_text=initial_status;},reset:function(){$('edit_status_text').value='';return false;},show:function(){if(!this.active){hide('profile_status');hide('profile_empty_status');this.hide_menu();show('status_editor');var prefix=$('edit_status_text').getAttribute('statusprefix');$('edit_status_text').value=this.status_text;if($('edit_status_text').value==''&&prefix){$('edit_status_text').value=prefix;}
if(prefix&&$('edit_status_text').value.substring(0,prefix.length)==prefix){set_caret_position($('edit_status_text'),prefix.length,$('edit_status_text').value.length);}else{$('edit_status_text').select();}
this.status_blur=true;this.active=true;}else{$('edit_status_text').focus();}
return false;},hide:function(){if(!this.active){return;}
this.active=false;this.status_blur=false;hide('status_editor');show((this.status_text!='')?'profile_status':'profile_empty_status');return false;},toggle_menu:function(event){if(ua.safari()||ua.ie()){this.status_reblur=true;}
if(this.menu_active){return this.hide_menu();}else{return this.show_menu();}},show_menu:function(event){this.menu_active=true;$('edit_status_toggle').style.backgroundImage='url(/images/status_on.gif)';$('edit_status_toggle').style.backgroundColor='#fff';$('edit_status_select').style.display='block';return false;},hide_menu:function(){this.menu_active=false;$('edit_status_toggle').style.backgroundImage='url(/images/status_off.gif)';$('edit_status_toggle').style.backgroundColor='#D8DFEA';hide('edit_status_select');return false;},status_select:function(text){if(ua.safari()||ua.ie()){this.status_reblur=true;}
this.hide_menu();$('edit_status_text').value=text;$('edit_status_text').focus();$('edit_status_text').select();},blur:function(){if(this.status_reblur){$('edit_status_text').focus();this.status_reblur=false;return false;}
if(this.status_blur){var obj=$('edit_status_text');if(obj.value!=this.status_text&&obj.getAttribute('statusprefix')!=obj.value){this.submit_status_set($('edit_status_text').value);}else{this.hide();}}
return true;},onfocus:function(obj){var prefix=obj.getAttribute('statusprefix')||'';if(obj.value==prefix||obj.value==''){obj.value=prefix;set_caret_position(obj,prefix.length);}},status_set:function(status,markup){this.status_text=status||'';this.reset();this.hide();if(status!=null&&status!=''){show('profile_status');hide('status_editor');hide('profile_empty_status');$('status_text').innerHTML=markup;$('status_time').innerHTML=tx('sp01');if(ge('status_name')){show($('status_name'));}}else{$('status_text').innerHTML=tx('sp09');}},submit_status_set:function(status){if(status==null||status==''){return;}
new AsyncRequest().setURI('/updatestatus.php').setMethod('POST').setData({'status':status}).setHandler(function(response){var payload=response.getPayload();this.status_set(payload.status,payload.markup);var feedwall=FeedWall.getInstance();if(feedwall){var div=document.createElement('div');set_inner_html(div,payload.story);feedwall.insertBefore(new FeedWallPost(feedwall,div.firstChild),feedwall.firstChild());}}.bind(this)).setErrorHandler(function(response){this.status_set(null);ErrorDialog.showAsyncError(response);}.bind(this)).send();return false;},status_cleared:function(){this.status_text='';$('status_text').innerHTML='';this.hide();$('status_blank_nag').innerHTML=tx('sp03');setTimeout(function(){$('status_blank_nag').innerHTML=tx('sp04');}.bind(this),2500);},submit_status_clear:function(){this.status_blur=false;new AsyncRequest().setHandler(function(response){this.status_cleared();}.bind(this)).setErrorHandler(function(response){this.status_cleared();this.status_set(null);ErrorDialog.showAsyncError(response);}.bind(this)).setURI('/updatestatus.php').setData({'clear':'1'}).send();return false;},handle_key_press:function(event){event=event||window.event;key_code=event.keyCode||event.which;if(key_code==KEYS.RETURN){if($('edit_status_text').value!='')
this.submit_status_set($('edit_status_text').value);return false;}
if(key_code==KEYS.ESC){this.hide();return false;}
return true;}}
function click_trampoline(){return status_editor.hide_menu();}
var status_page_editor=copy_properties({},status_editor);copy_properties(status_page_editor,{parent:status_editor,setup:function(initial_text){this.parent.setup.bind(this)(initial_text);if(this.status_text==''&&ge('friendspro_user_status')){add_css_class_name($('friendspro_user_status'),'user_status_editing');}},hide:function(){this.parent.hide.bind(this)();if((this.status_text!='')&&ge('friendspro_user_status')){remove_css_class_name($('friendspro_user_status'),'user_status_editing');}
$('friendspro_user_status').onclick=function(){status_page_editor.show();return false;};},show:function(){if(this.mouse_down==true){this.mouse_down=false;return false;}
this.parent.show.bind(this)();if(this.active){if(ge('friendspro_user_status')){add_css_class_name($('friendspro_user_status'),'user_status_editing');$('friendspro_user_status').onclick=null;}}
return false;},status_set:function(status,markup){this.parent.status_set.bind(this)(status,markup);remove_css_class_name($('friendspro_user_status'),'mobile_status');},blur:function(event){this.mouse_down=true;this.parent.blur.bind(this)();setTimeout(function(){this.mouse_down=false;}.bind(this),500);}})
var edit_status_visible=false;var edit_select_visible=false;var status_set=true;var status_cleared=true;var status_blur=false;var status_reblur=false;var status_init=false;var status_keepopen=false;var status_text='';var status_id_prefix='';function editStatus(prefix){status_id_prefix=prefix?prefix:'';if(!edit_status_visible){var obj=$(status_id_prefix+'edit_status_text');obj.value=status_text;hideEditStatusSelect();show(status_id_prefix+'status_editor');obj.focus();var prefix=obj.getAttribute('statusprefix')||'';if(prefix&&obj.value.substring(0,prefix.length)==prefix){set_caret_position(obj,prefix.length,obj.value.length);}else{obj.select();}
status_blur=true;edit_status_visible=true;}else{$(status_id_prefix+'edit_status_text').focus();}}
function hideEditStatus(){edit_status_visible=false;status_blur=false;status_init=false;status_keepopen=false;hideEditStatusSelect();hide(status_id_prefix+'status_editor');}
function editStatusBlur(){if(status_reblur){$(status_id_prefix+'edit_status_text').focus();status_reblur=false;return false;}
if(status_blur){if($(status_id_prefix+'edit_status_text').value&&$(status_id_prefix+'edit_status_text').value!=status_text&&$(status_id_prefix+'edit_status_text').value!=$(status_id_prefix+'edit_status_text').getAttribute('statusprefix')&&$(status_id_prefix+'edit_status_text').value!=status_text.replace(/^is /,'')){submitStatus($(status_id_prefix+'edit_status_text').value);}else{if(status_keepopen){status_init=true;$(status_id_prefix+'edit_status_text').value='';hideEditStatusSelect();}else{hideEditStatus();}}}
return true;}
function toggleEditStatusSelect(){if(status_init){if(ua.safari()){status_reblur=true;}
status_init=false;$(status_id_prefix+'edit_status_text').focus()}else if(ua.safari()||ua.ie()){status_reblur=true;}
edit_select_visible=!edit_select_visible;if(edit_select_visible){showEditStatusSelect();}else{hideEditStatusSelect();}}
function showEditStatusSelect(){edit_select_visible=true;$(status_id_prefix+'edit_status_select').style.display='block';$(status_id_prefix+'edit_status_toggle').style.backgroundImage='url(/images/status_on.gif)';$(status_id_prefix+'edit_status_toggle').style.backgroundColor='#fff';}
function hideEditStatusSelect(){edit_select_visible=false;hide(status_id_prefix+'edit_status_select');$(status_id_prefix+'edit_status_toggle').style.backgroundImage='url(/images/status_off.gif)';$(status_id_prefix+'edit_status_toggle').style.backgroundColor='#D8DFEA';}
function statusSelect(element){toggleEditStatusSelect();$(status_id_prefix+'edit_status_text').value=element.innerHTML;$(status_id_prefix+'edit_status_text').focus();$(status_id_prefix+'edit_status_text').select();}
function clearStatus(){status_cleared=false;status_keepopen=false;window.setTimeout('showClearingMessage()',200);hideEditStatus();new AsyncRequest().setHandler(function(response){statusCleared();}).setErrorHandler(function(response){statusCleared();statusUpdated(null,'');ErrorDialog.showAsyncError(response);}).setURI('/updatestatus.php').setData({'clear':'1'}).send();}
function showClearingMessage(){if(!status_cleared){hide(status_id_prefix+'su_name');$(status_id_prefix+'su_text').innerHTML='<span style="color:gray;">'+tx('sp05')+'</span>';}}
function statusCleared(){status_cleared=true;status_text='';hide(status_id_prefix+'su_name');$(status_id_prefix+'su_placeholder').innerHTML=tx('sp06');show(status_id_prefix+'su_placeholder');hide(status_id_prefix+'su_edit');$(status_id_prefix+'su_text').innerHTML='';$(status_id_prefix+'su_time').innerHTML='';}
function submitStatus(status){if(status==null||status==''){return;}
status_keepopen=false;status_set=false;window.setTimeout('showUpdatingMessage()',200);hideEditStatus();new AsyncRequest().setHandler(function(response){var payload=response.getPayload();statusUpdated(payload.status,payload.markup);}).setErrorHandler(function(response){statusUpdated(null,'');ErrorDialog.showAsyncError(response);}).setURI('/updatestatus.php').setData({'status':status}).send();}
function showUpdatingMessage(){if(!status_set){hide(status_id_prefix+'su_name');hide(status_id_prefix+'su_placeholder');$(status_id_prefix+'su_text').innerHTML='<span style="color:gray;">'+tx('sp07')+'</span>';}}
function statusUpdated(status,markup){status_set=true;if(status!=null&&status!=''){status_text=status;show(status_id_prefix+'su_name');show(status_id_prefix+'su_edit');hide(status_id_prefix+'su_placeholder');$(status_id_prefix+'su_text').innerHTML=markup;$(status_id_prefix+'su_time').innerHTML=tx('sp08');$(status_id_prefix+'edit_status_text').value='';}else if(status==null){status_text='';hide(status_id_prefix+'su_name');$(status_id_prefix+'su_placeholder').innerHTML=tx('sp09');show(status_id_prefix+'su_placeholder');hide(status_id_prefix+'su_edit');$(status_id_prefix+'su_text').innerHTML='';$(status_id_prefix+'su_time').innerHTML='';}}
function statusTextKeyPress(event){if(!event){event=window.event;}
if(event.keyCode){keyPressed=event.keyCode;}else if(event.which){keyPressed=event.which;}
if(keyPressed==9){return false;}
if(keyPressed==13){submitStatus($(status_id_prefix+'edit_status_text').value);return false;}
if(keyPressed==27){hideEditStatus();return false;}
return true;}
function preferences_statusupdates_onsubmit(person){if(person&&person.i){preferences_statusupdates_subscribe(person.i,person.t);}
this.clear();return false;}
function preferences_statusupdates_subscribe(id,name){preferences_subscribe(id,name,'statusupdates');}
function preferences_statusupdates_unsubscribe(id){preferences_unsubscribe(id,'statusupdates');}
function preferences_mobileuploads_onsubmit(person){if(person&&person.i){preferences_mobileuploads_subscribe(person.i,person.t);}
this.clear();return false;}
function preferences_mobileuploads_subscribe(id,name){preferences_subscribe(id,name,'mobileuploads');}
function preferences_mobileuploads_unsubscribe(id){preferences_unsubscribe(id,'mobileuploads');}
function preferences_unsubscribe(id,type){function onResponsePost(response){hide(type+'_subscription_'+id);}
if(type=='mobileuploads'){url='/ajax/mobileuploads.php';}else{url='/ajax/statusupdates.php';}
new AsyncRequest().setURI(url).setData({'unsubscribe':id}).setHandler(bind(this,onResponsePost)).setErrorHandler(bind(this,function(){})).send();return false;}
function preferences_subscribe(id,name,type){function onResponsePost(response){var elem=ge(type+'_subscription_'+id);if(elem){show(elem);}else{var elem=document.createElement('div');elem.id=type+'_subscription_'+id;elem.className='subscription';elem.innerHTML=name+' <small><a href="#" onclick="preferences_'+type+'_unsubscribe('+id+');return false">'+tx('sp10')+'</a></small>';$(type+'_subscriptions').appendChild(elem);}}
if(type=='mobileuploads'){url='/ajax/mobileuploads.php';}else{url='/ajax/statusupdates.php';}
var asyncRequestPost=new AsyncRequest().setURI(url).setData({'subscribe':id}).setHandler(bind(this,onResponsePost)).setErrorHandler(bind(this,function(){})).send();return false;}

function animation(obj){if(obj==undefined){Util.error("Creating animation on non-existant object");return;}
if(this==window){return new animation(obj);}else{this.obj=obj;this._reset_state();this.queue=[];this.last_attr=null;}}
animation.resolution=20;animation.offset=0;animation.prototype._reset_state=function(){this.state={attrs:{},duration:500}}
animation.prototype.stop=function(){this._reset_state();this.queue=[];return this;}
animation.prototype._build_container=function(){if(this.container_div){this._refresh_container();return;}
if(this.obj.firstChild&&this.obj.firstChild.__animation_refs){this.container_div=this.obj.firstChild;this.container_div.__animation_refs++;this._refresh_container();return;}
var container=document.createElement('div');container.style.padding='0px';container.style.margin='0px';container.style.border='0px';container.__animation_refs=1;var children=this.obj.childNodes;while(children.length){container.appendChild(children[0]);}
this.obj.appendChild(container);this.obj.style.overflow='hidden';this.container_div=container;this._refresh_container();}
animation.prototype._refresh_container=function(){this.container_div.style.height='auto';this.container_div.style.width='auto';this.container_div.style.height=this.container_div.offsetHeight+'px';this.container_div.style.width=this.container_div.offsetWidth+'px';}
animation.prototype._destroy_container=function(){if(!this.container_div){return;}
if(!--this.container_div.__animation_refs){var children=this.container_div.childNodes;while(children.length){this.obj.appendChild(children[0]);}
this.obj.removeChild(this.container_div);}
this.container_div=null;}
animation.ATTR_TO=1;animation.ATTR_BY=2;animation.ATTR_FROM=3;animation.prototype._attr=function(attr,value,mode){attr=attr.replace(/-[a-z]/gi,function(l){return l.substring(1).toUpperCase();});var auto=false;switch(attr){case'background':this._attr('backgroundColor',value,mode);return this;case'margin':value=animation.parse_group(value);this._attr('marginBottom',value[0],mode);this._attr('marginLeft',value[1],mode);this._attr('marginRight',value[2],mode);this._attr('marginTop',value[3],mode);return this;case'padding':value=animation.parse_group(value);this._attr('paddingBottom',value[0],mode);this._attr('paddingLeft',value[1],mode);this._attr('paddingRight',value[2],mode);this._attr('paddingTop',value[3],mode);return this;case'backgroundColor':case'borderColor':case'color':value=animation.parse_color(value);break;case'opacity':value=parseFloat(value,10);break;case'height':case'width':if(value=='auto'){auto=true;}else{value=parseInt(value,10);}
break;case'borderWidth':case'lineHeight':case'fontSize':case'marginBottom':case'marginLeft':case'marginRight':case'marginTop':case'paddingBottom':case'paddingLeft':case'paddingRight':case'paddingTop':case'bottom':case'left':case'right':case'top':case'scrollTop':case'scrollLeft':value=parseInt(value,10);break;default:throw new Error(attr+' is not a supported attribute!');}
if(this.state.attrs[attr]===undefined){this.state.attrs[attr]={};}
if(auto){this.state.attrs[attr].auto=true;}
switch(mode){case animation.ATTR_FROM:this.state.attrs[attr].start=value;break;case animation.ATTR_BY:this.state.attrs[attr].by=true;case animation.ATTR_TO:this.state.attrs[attr].value=value;break;}}
animation.prototype.to=function(attr,value){if(value===undefined){this._attr(this.last_attr,attr,animation.ATTR_TO);}else{this._attr(attr,value,animation.ATTR_TO);this.last_attr=attr;}
return this;}
animation.prototype.by=function(attr,value){if(value===undefined){this._attr(this.last_attr,attr,animation.ATTR_BY);}else{this._attr(attr,value,animation.ATTR_BY);this.last_attr=attr;}
return this;}
animation.prototype.from=function(attr,value){if(value===undefined){this._attr(this.last_attr,attr,animation.ATTR_FROM);}else{this._attr(attr,value,animation.ATTR_FROM);this.last_attr=attr;}
return this;}
animation.prototype.duration=function(duration){this.state.duration=duration?duration:0;return this;}
animation.prototype.checkpoint=function(distance,callback){if(distance===undefined){distance=1;}
this.state.checkpoint=distance;this.queue.push(this.state);this._reset_state();this.state.checkpointcb=callback;return this;}
animation.prototype.blind=function(){this.state.blind=true;return this;}
animation.prototype.hide=function(){this.state.hide=true;return this;}
animation.prototype.show=function(){this.state.show=true;return this;}
animation.prototype.ease=function(ease){this.state.ease=ease;return this;}
animation.prototype.go=function(){var time=(new Date()).getTime();this.queue.push(this.state);for(var i=0;i<this.queue.length;i++){this.queue[i].start=time-animation.offset;if(this.queue[i].checkpoint){time+=this.queue[i].checkpoint*this.queue[i].duration;}}
animation.push(this);return this;}
animation.prototype._frame=function(time){var done=true;var still_needs_container=false;var whacky_firefox=false;for(var i=0;i<this.queue.length;i++){var cur=this.queue[i];if(cur.start>time){done=false;continue;}
if(cur.checkpointcb){this._callback(cur.checkpointcb,time-cur.start);cur.checkpointcb=null;}
if(cur.started===undefined){if(cur.show){this.obj.style.display='block';}
for(var a in cur.attrs){if(cur.attrs[a].start!==undefined){continue;}
switch(a){case'backgroundColor':case'borderColor':case'color':var val=animation.parse_color(get_style(this.obj,a=='borderColor'?'borderLeftColor':a));if(cur.attrs[a].by){cur.attrs[a].value[0]=Math.min(255,Math.max(0,cur.attrs[a].value[0]+val[0]));cur.attrs[a].value[1]=Math.min(255,Math.max(0,cur.attrs[a].value[1]+val[1]));cur.attrs[a].value[2]=Math.min(255,Math.max(0,cur.attrs[a].value[2]+val[2]));}
break;case'opacity':var val=get_opacity(this.obj);if(cur.attrs[a].by){cur.attrs[a].value=Math.min(1,Math.max(0,cur.attrs[a].value+val));}
break;case'height':case'width':var val=animation['get_'+a](this.obj);if(cur.attrs[a].by){cur.attrs[a].value+=val;}
break;case'scrollLeft':case'scrollTop':var val=(this.obj==document.body)?(document.documentElement[a]||document.body[a]):this.obj[a];if(cur.attrs[a].by){cur.attrs[a].value+=val;}
cur['last'+a]=val;break;default:var val=parseInt(get_style(this.obj,a),10);if(cur.attrs[a].by){cur.attrs[a].value+=val;}
break;}
cur.attrs[a].start=val;}
if((cur.attrs.height&&cur.attrs.height.auto)||(cur.attrs.width&&cur.attrs.width.auto)){if(ua.firefox()<3){whacky_firefox=true;}
this._destroy_container();for(var a in{height:1,width:1,fontSize:1,borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,paddingLeft:1,paddingRight:1,paddingTop:1,paddingBottom:1}){if(cur.attrs[a]){this.obj.style[a]=cur.attrs[a].value+(typeof cur.attrs[a].value=='number'?'px':'');}}
if(cur.attrs.height&&cur.attrs.height.auto){cur.attrs.height.value=animation.get_height(this.obj);}
if(cur.attrs.width&&cur.attrs.width.auto){cur.attrs.width.value=animation.get_width(this.obj);}}
cur.started=true;if(cur.blind){this._build_container();}}
var p=(time-cur.start)/cur.duration;if(p>=1){p=1;if(cur.hide){this.obj.style.display='none';}}else{done=false;}
var pc=cur.ease?cur.ease(p):p;if(!still_needs_container&&p!=1&&cur.blind){still_needs_container=true;}
if(whacky_firefox&&this.obj.parentNode){var parentNode=this.obj.parentNode;var nextChild=this.obj.nextSibling;parentNode.removeChild(this.obj);}
for(var a in cur.attrs){switch(a){case'backgroundColor':case'borderColor':case'color':this.obj.style[a]='rgb('+
animation.calc_tween(pc,cur.attrs[a].start[0],cur.attrs[a].value[0],true)+','+
animation.calc_tween(pc,cur.attrs[a].start[1],cur.attrs[a].value[1],true)+','+
animation.calc_tween(pc,cur.attrs[a].start[2],cur.attrs[a].value[2],true)+')';break;case'opacity':set_opacity(this.obj,animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value));break;case'height':case'width':this.obj.style[a]=pc==1&&cur.attrs[a].auto?'auto':animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value,true)+'px';break;case'scrollLeft':case'scrollTop':var val=(this.obj==document.body)?(document.documentElement[a]||document.body[a]):this.obj[a];if(cur['last'+a]!=val){delete cur.attrs[a];}else{var diff=animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value,true)-val;if(a=='scrollLeft'){window.scrollBy(diff,0);}else{window.scrollBy(0,diff);}
cur['last'+a]=diff+val;}
break;default:this.obj.style[a]=animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value,true)+'px';break;}}
if(p==1){this.queue.splice(i--,1);this._callback(cur.ondone,time-cur.start-cur.duration);}}
if(whacky_firefox){parentNode[nextChild?'insertBefore':'appendChild'](this.obj,nextChild);}
if(!still_needs_container&&this.container_div){this._destroy_container();}
return!done;}
animation.prototype.ondone=function(fn){this.state.ondone=fn;return this;}
animation.prototype._callback=function(callback,offset){if(callback){animation.offset=offset;callback.call(this);animation.offset=0;}}
animation.calc_tween=function(p,v1,v2,whole){return(whole?parseInt:parseFloat)((v2-v1)*p+v1,10);}
animation.parse_color=function(color){var hex=/^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(color);if(hex){return[parseInt(hex[1].length==1?hex[1]+hex[1]:hex[1],16),parseInt(hex[2].length==1?hex[2]+hex[2]:hex[2],16),parseInt(hex[3].length==1?hex[3]+hex[3]:hex[3],16)];}else{var rgb=/^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9]+))?\)$/.exec(color);if(rgb){if(rgb[4]==='0'){return[255,255,255];}else{return[parseInt(rgb[1],10),parseInt(rgb[2],10),parseInt(rgb[3],10)];}}else if(color=='transparent'){return[255,255,255];}else{throw'Named color attributes are not supported.';}}}
animation.parse_group=function(value){var value=trim(value).split(/ +/);if(value.length==4){return value;}else if(value.length==3){return[value[0],value[1],value[2],value[1]];}else if(value.length==2){return[value[0],value[1],value[0],value[1]];}else{return[value[0],value[0],value[0],value[0]];}}
animation.get_height=function(obj){var pT=parseInt(get_style(obj,'paddingTop'),10),pB=parseInt(get_style(obj,'paddingBottom'),10),bT=parseInt(get_style(obj,'borderTopWidth'),10),bW=parseInt(get_style(obj,'borderBottomWidth'),10);return obj.offsetHeight-(pT?pT:0)-(pB?pB:0)-(bT?bT:0)-(bW?bW:0);}
animation.get_width=function(obj){var pL=parseInt(get_style(obj,'paddingLeft'),10),pR=parseInt(get_style(obj,'paddingRight'),10),bL=parseInt(get_style(obj,'borderLeftWidth'),10),bR=parseInt(get_style(obj,'borderRightWidth'),10);return obj.offsetWidth-(pL?pL:0)-(pR?pR:0)-(bL?bL:0)-(bR?bR:0);}
animation.push=function(instance){if(!animation.active){animation.active=[];}
animation.active.push(instance);if(!animation.timeout){animation.timeout=setInterval(animation.animate.bind(animation),animation.resolution);}
animation.animate(true);}
animation.animate=function(last){var done=true;var time=(new Date()).getTime();for(var i=last===true?animation.active.length-1:0;i<animation.active.length;i++){try{if(animation.active[i]._frame(time)){done=false;}else{animation.active.splice(i--,1);}}catch(e){animation.active.splice(i--,1);}}
if(done){clearInterval(animation.timeout);animation.timeout=null;}}
animation.ease={}
animation.ease.begin=function(p){return p*p;}
animation.ease.end=function(p){p-=1;return-(p*p)+1;}
animation.ease.both=function(p){if(p<=0.5){return(p*p)*2;}else{p-=1;return(p*p)*-2+1;}}

function Dialog(){Dialog._setup();this._pd=new pop_dialog();this._pd._dialog_object=this;this._show_loading=true;this._onload_handlers=[];}
Dialog.OK={name:'ok',label:tx('sh:ok-button')};Dialog.CANCEL={name:'cancel',label:tx('sh:cancel-button'),className:'inputaux'};Dialog.CLOSE={name:'close',label:tx('sh:close-button')};Dialog.SAVE={name:'save',label:tx('sh:save-button')};Dialog.OK_AND_CANCEL=[Dialog.OK,Dialog.CANCEL];Dialog._STANDARD_BUTTONS=[Dialog.OK,Dialog.CANCEL,Dialog.CLOSE,Dialog.SAVE];Dialog.getCurrent=function(){var stack=generic_dialog.dialog_stack;if(!stack||stack.length==0){return null;}
return stack[stack.length-1]._dialog_object||null;};Dialog._basicMutator=function(private_key){return function(value){this[private_key]=value;this._dirty();return this;};};copy_properties(Dialog.prototype,{show:function(){this._showing=true;this._dirty();return this;},hide:function(){this._showing=false;if(this._autohide_timeout){clearTimeout(this._autohide_timeout);this._autohide_timeout=null;}
if(generic_dialog.dialog_stack.length==1){this._pd.fade_out(250);}else{this._pd.hide();}
return this;},setTitle:Dialog._basicMutator('_title'),setBody:Dialog._basicMutator('_body'),setShowLoading:Dialog._basicMutator('_show_loading'),setUserData:Dialog._basicMutator('_user_data'),getUserData:function(){return this._user_data;},setAutohide:function(autohide){if(autohide){if(this._showing){this._autohide_timeout=setTimeout(bind(this,'hide'),autohide);}else{this._autohide=autohide;}}else{this._autohide=null;if(this._autohide_timeout){clearTimeout(this._autohide_timeout);this._autohide_timeout=null;}}
return this;},setSummary:Dialog._basicMutator('_summary'),setButtons:function(buttons){if(!(buttons instanceof Array)){buttons=[buttons];}
for(var i=0;i<buttons.length;++i){if(typeof(buttons[i])=='string'){var button=Dialog._findButton(Dialog._STANDARD_BUTTONS,buttons[i]);if(!button){Util.error('Unknown button: '+buttons[i]);}
buttons[i]=button;}}
this._buttons=buttons;this._dirty();return this;},setButtonsMessage:Dialog._basicMutator('_buttons_message'),setStackable:Dialog._basicMutator('_is_stackable'),setHandler:function(handler){this._handler=handler;return this;},clearHandler:function(){return this.setHandler(null);},setPostURI:function(post_uri){this.setHandler(this._submitForm.bind(this,'POST',post_uri));return this;},setGetURI:function(get_uri){this.setHandler(this._submitForm.bind(this,'GET',get_uri));return this;},setModal:function(modal){if(modal===undefined){modal=true;}
if(this._showing&&this._modal&&!modal){Util.error("At the moment we don't support un-modal-ing a modal dialog");}
this._modal=modal;return this;},setContentWidth:function(width){this._content_width=width;this._dirty();return this;},setClassName:Dialog._basicMutator('_class_name'),setCloseHandler:function(close_handler){this._close_handler=call_or_eval.bind(null,this,close_handler);return this;},setFooter:Dialog._basicMutator('_footer'),onloadRegister:function(handler){this._onload_handlers.push(handler.bind(this));return this;},setAsync:function(async_request){var handler=function(response){if(this._async_request!=async_request){return;}
this._async_request=null;var payload=response.getPayload();if(typeof(payload)=='string'){this.setBody(payload);}else{for(var propertyName in payload){var mutator=this['set'+propertyName.substr(0,1).toUpperCase()
+propertyName.substr(1)];if(!mutator){Util.error("Unknown Dialog property: "+propertyName);}
mutator.call(this,payload[propertyName]);}}
this._update(true);}.bind(this);var hide=bind(this,'hide');async_request.setHandler(chain(async_request.getHandler(),handler)).send();this._async_request=async_request;this._dirty();return this;},_dirty:function(){if(!this._is_dirty){this._is_dirty=true;bind(this,'_update').defer();}},_update:function(even_if_not_dirty){if(!this._is_dirty&&even_if_not_dirty!==true){return;}
this._is_dirty=false;if(!this._showing){return;}
if(this._autohide&&!this._async_request&&!this._autohide_timeout){this._autohide_timeout=setTimeout(bind(this,'hide'),this._autohide);}
if(this._class_name){this._pd.setClassName(this._class_name);}
if(!this._async_request||!this._show_loading){var html=[];if(this._title){html.push('<h2><span>'+this._title+'</span></h2>');}
html.push('<div class="dialog_content">');if(this._summary){html.push('<div class="dialog_summary">');html.push(this._summary);html.push('</div>');}
html.push('<div class="dialog_body">');html.push(this._body);html.push('</div>');if(this._buttons||this._buttons_message){html.push('<div class="dialog_buttons">');if(this._buttons_message){html.push('<div class="dialog_buttons_msg">');html.push(this._buttons_message);html.push('</div>');}
if(this._buttons){this._buttons.forEach(function(button){html.push('<input class="inputsubmit '+(button.className||'')+'"'
+' type="button"'
+(button.name?(' name="'+button.name+'"'):'')
+' value="'+htmlspecialchars(button.label)+'"'
+' onclick="Dialog.getCurrent().handleButton(this.name);" />');},this);}
html.push('</div>');}
if(this._footer){html.push('<div class="dialog_footer">');html.push(this._footer);html.push('</div>');}
html.push('</div>');this._pd.show_dialog(html.join(''));for(var i=0;i<this._onload_handlers.length;++i){try{this._onload_handlers[i]();}catch(ex){Util.error('Uncaught exception in dialog onload hook: %x',ex);}}
this._onload_handlers=[];}else{var title=this._title||tx('sh:loading');this._pd.show_loading_title(title);}
if(this._modal){this._pd.make_modal();}
if(this._content_width){this._pd.popup.childNodes[0].style.width=(this._content_width+42)+'px';}
this._pd.is_stackable=this._is_stackable;this._pd.close_handler=this._close_handler;},handleButton:function(button){if(typeof(button)=='string'){button=Dialog._findButton(this._buttons,button);}
if(!button){Util.error('Huh?  How did this button get here?');return;}
if(call_or_eval(button,button.handler)===false){return;}
if(button!=Dialog.CANCEL){if(call_or_eval(this,this._handler,{button:button})===false){return;}}
this.hide();},getButtonElement:function(button){if(typeof(button)=='string'){button=Dialog._findButton(this._buttons,button);}
if(!button||!button.name){return null;}
var inputs=to_array(DOM.scry(this._pd.popup,'input'));var name_filter=function(elem){return elem.name==button.name;};return inputs.filter(name_filter)[0]||null;},_submitForm:function(method,uri,button){var data=this._getFormData();data[button.name]=button.label;var async_request=new AsyncRequest().setURI(uri).setData(data).setMethod(method).setReadOnly(method=='GET');this.setAsync(async_request);return false;},_getFormData:function(){var dialog_content_divs=DOM.scry(this._pd.content,'div.dialog_content');if(dialog_content_divs.length!=1){Util.error(dialog_content_divs.length
+" dialog_content divs in this dialog?  Weird.");}
return serialize_form(dialog_content_divs[0]);}});Dialog._findButton=function(buttons,name){for(var i=0;i<buttons.length;++i){if(buttons[i].name==name){return buttons[i];}}
return null;};Dialog._setup=function(){if(Dialog._is_set_up){return;}
Dialog._is_set_up=true;var filter=function(event,type){return KeyEventController.filterEventTypes(event,type)&&KeyEventController.filterEventModifiers(event,type);};KeyEventController.registerKey('ESCAPE',Dialog._handleEscapeKey,filter);};Dialog._handleEscapeKey=function(event,type){var dialog=Dialog.getCurrent();if(!dialog){return true;}
var buttons=dialog._buttons;if(!buttons){return true;}
var cancel_button=Dialog._findButton(buttons,'cancel');if(cancel_button){var button_to_simulate=cancel_button;}else if(buttons.length==1){var button_to_simulate=buttons[0];}else{return true;}
dialog.handleButton(button_to_simulate);return false;}

if(!this.JSON){JSON=function(){function f(n){return n<10?'0'+n:n;}
Date.prototype.toJSON=function(){return this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z';};var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};function encode(value,whitelist){var a,i,k,l,v;switch(typeof value){case'string':return(new RegExp('[\x00-\x1f\\\\"]')).test(value)?'"'+value.replace(/[\x00-\x1f\\"]/g,function(a){var c=m[a];if(c){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+
(c%16).toString(16);})+'"':'"'+value+'"';case'number':return isFinite(value)?String(value):'null';case'boolean':return String(value);case'null':return'null';case'object':if(is_node(value)){return null;}
if(!value){return'null';}
if(typeof value.toJSON==='function'){return encode(value.toJSON());}
a=[];if(typeof value.length==='number'&&!(propertyIsEnumerable(value,'length'))){l=value.length;for(i=0;i<l;i+=1){a.push(encode(value[i],whitelist)||'null');}
return'['+a.join(',')+']';}
if(whitelist){l=whitelist.length;for(i=0;i<l;i+=1){k=whitelist[i];if(typeof k==='string'){v=encode(value[k],whitelist);if(v){a.push(encode(k)+':'+v);}}}}else{for(k in value){if(typeof k==='string'){v=encode(value[k],whitelist);if(v){a.push(encode(k)+':'+v);}}}}
return'{'+a.join(',')+'}';}}
return{encode:encode,decode:function(text,filter){var j;function walk(k,v){var i,n;if(v&&typeof v==='object'){for(i in v){if(Object.prototype.hasOwnProperty.apply(v,[i])){n=walk(i,v[i]);if(n!==undefined){v[i]=n;}}}}
return filter(k,v);}
if(/^[\],:{}\s]*$/.test(text.replace(/\\./g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(:?[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof filter==='function'?walk('',j):j;}
throw new SyntaxError('decodeJSON');}};}();}
function propertyIsEnumerable(o,p){if(o.propertyIsEnumerable){return o.propertyIsEnumerable(p);}
for(var prop in o){if(prop==p)return true;}
return false;}

var ChannelRebuildReasons={Unknown:0,AsyncError:1,TooLong:2,Refresh:3,RefreshDelay:4,UIRestart:5,NeedSeq:6,PrevFailed:7,IFrameLoadGiveUp:8,IFrameLoadRetry:9,IFrameLoadRetryWorked:10};function fbChannelUplink(){this.startDelay=1000;this.regularDelay=100;this.checkAliveInterval=80000;this.retryInterval=1000;this.maxRetries=0;this.reconnectInterval=1000;this.maxReconnects=5;this.targetOrigin=null;this._init();}
function handleChannelParentMessageEvent(ev){var domain=(ev.domain||ev.origin);if(domain.substring(domain.length-13)!='.facebook.com'&&domain.substring(domain.length-15)!='://facebook.com'&&domain!='facebook.com'){return;}
handleChannelParentMessage(ev.data);}
function handleChannelParentMessage(parentMsgStr){channelUplink.handleParentMessage(eval('('+parentMsgStr+')'));}
fbChannelUplink.prototype={_init:function(){this.debug('iframex: init');this.requestNum=0;this.request=null;this.reconnectNum=0;this.checkAliveTimer=null;this.isReconnecting=false;this.isActionRequest=false;this.parentAlive=false;this.channels={};this.managerIsReady=false;if(window.postMessage){var parentLoc=window.parent.location;var parentHost=parentLoc.hostname;if(parentHost=='facebook.com'||parentHost.substring(parentHost.length-13)=='.facebook.com'){this.targetOrigin=parentLoc.protocol+'//'+parentLoc.host;}
this.postMessage=window.parent.postMessage.bind(window.parent);window.addEventListener('message',handleChannelParentMessageEvent,false);}else if(document.postMessage){this.postMessage=window.parent.document.postMessage.bind(window.parent.document);document.addEventListener('message',handleChannelParentMessageEvent,false);}else{this.postMessage=window.parent.handleChanneliFrameMessage.bind(window.parent);}
setTimeout(function(){this.sendParentInit();}.bind(this),100);},sendParentInit:function(){this.sendParentMessage({'type':'init'});setTimeout(this.checkParentInit.bind(this),1000);},checkParentInit:function(){if(!this.parentAlive){this.sendParentInit();}},sendParentMessage:function(msg){if(this.targetOrigin){this.postMessage(JSON.encode(msg),this.targetOrigin);}else{this.postMessage(JSON.encode(msg));}},handleParentMessage:function(parentMsg){this.parentAlive=true;if(parentMsg.type=='isReady'){this.managerIsReady=parentMsg.isReady;this.isActionRequest=parentMsg.isActionRequest;if(this.managerIsReady){var channelsChanged=false;if(is_empty(parentMsg.channels)){this.channels={};this.warn('iframex: got no channels. not sending a request.');}else{var channelsChanged=false;for(var c in parentMsg.channels){if(!this.channels[c]||parentMsg.channels[c].currentSeq!=this.channels[c].currentSeq){channelsChanged=true;break;}}
this.channels=parentMsg.channels;if(!this.started){setTimeout(this.sendRequest.bind(this),this.startDelay);this.started=true;}else{if(this.isReconnecting||this.channelsChanged){this.debug('iframex: manager ready again. sending new request.');this.isReconnecting=false;this.sendRequest();}}}}}else if(parentMsg.type=='isActionRequest'){this.isActionRequest=parentMsg.isActionRequest;}},debug:function(msg){},warn:function(msg){if(window.console){if(window.console.error){window.console.error(msg);}else if(window.console.log){window.console.log(msg);}}},sendRequest:function(){var url='http://'+document.location.host+'/x/'+rand32()+'/';if(this.isActionRequest){url+='true/';this.isActionRequest=false;}else{url+='false/';}
for(var c in this.channels){url+=encodeURIComponent(c)+'='+this.channels[c].currentSeq+'&';}
clearTimeout(this.checkAliveTimer);this.requestNum++;this.checkAliveTimer=setTimeout(this.checkAlive.bind(this,this.requestNum),this.checkAliveInterval);this.request=new AsyncRequest().setHandler(this.onRequestSuccess.bind(this,this.requestNum)).setErrorHandler(this.onRequestError.bind(this,this.requestNum)).setTransportErrorHandler(this.onRequestError.bind(this,this.requestNum)).setMethod('GET').setReadOnly(true).setOption('retries',this.maxRetries).setOption('suppressErrorAlerts',true).setURI(url).send();},_requestIsValid:function(requestNum){if(this.isReconnecting||requestNum<this.requestNum){return false;}
if(!this.managerIsReady){this.debug("iframex: channel manager isn't ready, not sending another x request");this.isReconnecting=true;return false;}
return true;},checkAlive:function(requestNum){this.checkAliveTimer=null;if(!this._requestIsValid(requestNum)){return;}
this.warn('iframex: request took too long');this.reconnect(ChannelRebuildReasons.TooLong);},reconnect:function(reason){if(this.isReconnecting||!this.managerIsReady){return;}
this.isReconnecting=true;this.warn('iframex: forwarding a shutdown');var msg={type:'shutdown',reason:reason};this.sendParentMessage({'type':'channelMsg','channel':'all','seq':0,'msg':msg});},onRequestError:function(requestNum,response){if(!this._requestIsValid(requestNum)){return;}
this.warn('iframex: request error: '+response.getErrorDescription());this._onRequestError(ChannelRebuildReasons.AsyncError);},_onRequestError:function(reason){this.reconnectNum++;if(this.reconnectNum>=this.maxReconnects){this.warn('iframex: too many reconnects.  bailing for good.');var msg={type:'permaShutdown'};this.sendParentMessage({'type':'channelMsg','channel':'all','seq':0,'msg':msg});}else{this.reconnect(reason);}},onRequestSuccess:function(requestNum,response){if(!this._requestIsValid(requestNum)){return;}
var channelMsg=response.getPayload();if(channelMsg.t=='refresh'){this.warn('iframex: got refresh from channel');this._onRequestError(ChannelRebuildReasons.Refresh);return;}else if(channelMsg.t=='refreshDelay'){this.warn('iframex: got refreshDelay from channel');this._onRequestError(ChannelRebuildReasons.RefreshDelay);return;}else if(channelMsg.t=='continue'){}else if(channelMsg.t=='msg'){var channel=channelMsg.c;for(var i=0;i<channelMsg.ms.length;i++){var msg=channelMsg.ms[i];var seq=this.channels[channel].currentSeq;this.sendParentMessage({'type':'channelMsg','channel':channel,'seq':seq,'msg':msg});this.channels[channel].currentSeq++;}}else{this.warn('iframex: got invalid response from channel');this._onRequestError(ChannelRebuildReasons.AsyncError);return;}
this.reconnectNum=0;setTimeout(this.sendRequest.bind(this),this.regularDelay);}};function channelIFrameStartFn(){if(window.location.pathname.startsWith("/iframe/")){document.domain='facebook.com';window.channelUplink=new fbChannelUplink();}}
onloadRegister(channelIFrameStartFn);

function presence_simple_popout(popoutURL){window.open(popoutURL,"fbChatWindow","status=0,toolbar=0,location=0,menubar=0,"+"directories=0,resizable=1,scrollbars=0,"+"width="+fbPresence.prototype.defWidth+",height="+fbPresence.prototype.defHeight+",left="+fbPresence.prototype.defX+",top="+fbPresence.prototype.defY);}
function fbPresence(user,name,firstName,serverTime,inPopoutWindow,sitevars,popoutURL,loginURL){this.user=user;this.name=name;this.firstName=firstName;this.sitevars=sitevars;this.popoutURL=popoutURL;this.loginURL=loginURL;var viewportVector=Vector2.getViewportDimensions();this.maxTabOffset=66;if(ge('intern_bookmark_frame')){this.maxTabOffset+=25;}
this.maxTabHeight=viewportVector.y-this.maxTabOffset;this.updateServerTime(serverTime);this.pageLoadTime=this.getTime();this._init(inPopoutWindow);}
fbPresence.prototype={minWidth:100,minHeight:100,defWidth:600,defHeight:500,defX:30,defY:30,cookiePollTime:2000,popoutHeartbeatTime:1000,popoutHeartbeatAllowance:4000,popoutHeartbeatFirstAllowance:15000,resizeStopTime:500,shutdownDelay:5000,restartDelay:3000,_init:function(inPopoutWindow){this.resizeHandlers=[];this.stateStorers=[];this.stateLoaders=[];this.msgHandlers=[];this.shutdownHandlers=[];this.restartHandlers=[];this.startHandlers=[];this.tabCloseHandlers=[];this.tabOpenHandlers=[];this.contentPaddings={'buddy_list':54,'presence_notifications':23};this.contentResized={};this.holder=ge('presence');this.popoutSidebar=inPopoutWindow?ge('presence_popout_sidebar'):null;this.bar=ge('presence_bar');this.popinBar=ge('presence_popin_bar');this.errorBar=ge('presence_error_bar');this.popoutWidth=this.defWidth;this.popoutHeight=this.defHeight;this.cookiePoller=null;this.heartbeat=null;this.resizeTimeout=null;this.lastResized=0;this.stateUpdateTime=0;this.loaded=false;this.isShutdown=false;this.isShuttingDown=false;this.isRestarting=false;this.shutdownTime=0;this.popoutClicked=false;this.popinClicked=false;this.justPoppedOut=false;this.disableTabAutoClose=0;this.syncPaused=0;this.disableUnfocus=null;this.tempTabCloseHandler=null;this.inPopoutWindow=inPopoutWindow;this.poppedOut=this.inPopoutWindow;presenceCookieManager.register('state',this._getCookieData.bind(this));if(this.inPopoutWindow){Util.fallbackErrorHandler=null;this.bar.style.marginRight='200px';onbeforeunloadRegister(this.popin.bind(this,false));onunloadRegister(this.popin.bind(this,false));}
addEventBase(window,'resize',this._windowOnResize.bind(this),'Presence');addEventBase(window,'keypress',this._documentKeyPress.bind(this));addEventBase(window,'click',this._documentOnClick.bind(this));var ie=ua.ie();this.isIE=(ie>0);this.isIE6=(ie&&ie<7);this.isIE7=(ie&&!this.isIE6);var safari=ua.safari();this.isSafari2=(safari&&safari<500);this.isOpera=(ua.opera()>0);var ff=ua.firefox();this.isFF2=(ff&&ff<3);this.isWindows=ua.windows();this.load();if(this.inPopoutWindow){setTimeout(this._windowOnResize.bind(this),3000);}},updateServerTime:function(serverTime){this.timeSkew=(new Date()).getTime()-serverTime;},getTime:function(){return(new Date()).getTime()-this.timeSkew;},debug:function(msg){},warn:function(msg){Util.warn('chirp: '+msg);},error:function(msg){Util.error('chirp: '+msg);},load:function(){var presenceState=presenceCookieManager.getSubCookie('state');if(!presenceState){this.debug('presence: got null state cookie, loading with current state');this._load(this._getCookieData());return;}
try{this._load(presenceState);}catch(e){this.error('presence: got load exception: '+e.toString());this._load(this._getCookieData());}},_load:function(presenceState){this.syncPaused++;this.stateUpdateTime=verifyNumber(presenceState.ut);this.popoutTime=verifyNumber(presenceState.pt);this.popoutWidth=verifyNumber(presenceState.w);this.popoutHeight=verifyNumber(presenceState.h);if(!this.popoutWidth){this.popoutWidth=this.defWidth;}
if(!this.popoutWidth){this.popoutWidth=this.defHeight;}
this.popoutWidth=Math.max(this.popoutWidth,this.minWidth);this.popoutHeight=Math.max(this.popoutHeight,this.minHeight);this.poppedOut=verifyBool(presenceState.p);if(this.poppedOut){if(this.inPopoutWindow){if(!this.heartbeat){this.heartbeat=setInterval(this._popoutHeartbeat.bind(this),this.popoutHeartbeatTime);}}else{this.setHolderClass('popped_out');}}else{if(this.inPopoutWindow){if(!this.loaded){this.poppedOut=true;this.doSync();}else{if(!this.popinClicked){window.close();}else{}}}else{this.justPoppedOut=true;}}
if(!this.inPopoutWindow&&!this.cookiePoller){this.cookiePoller=setInterval(this._pollCookie.bind(this),this.cookiePollTime);}
this.virtPopoutWidth=this.popoutWidth;this.virtPopoutHeight=this.popoutHeight;this.state=presenceState;for(var i=0;i<this.stateLoaders.length;i++){this.stateLoaders[i](presenceState);}
this._loadHolderClass.bind(this).defer();this._handleResize.bind(this,0,0).defer();setTimeout(this._handleResize.bind(this,0,0),100);this.syncPaused--;this.loaded=true;},_pollCookie:function(){var presenceState=presenceCookieManager.getSubCookie('state');if(!presenceState){return;}
var myPopoutTime=this.popoutTime;if(presenceState.ut>this.stateUpdateTime){this.load(presenceState);return;}
if(this.poppedOut&&!this.inPopoutWindow){var cookiePopoutTime=verifyNumber(presenceState.pt);var diff=(new Date()).getTime()-cookiePopoutTime;var diffAllowance=this.popoutHeartbeatTime+this.popoutHeartbeatAllowance;if(this.justPoppedOut){if(cookiePopoutTime==myPopoutTime){diffAllowance+=this.popoutHeartbeatFirstAllowance;}else{this.justPoppedOut=false;}}
this.popoutTime=cookiePopoutTime;if(diff>diffAllowance){this.poppedOut=false;this.doSync();}}},_popoutHeartbeat:function(){this._pollCookie();if(this.poppedOut){presenceCookieManager.store();}},_getCookieData:function(){var presenceState={p:this.poppedOut?1:0,w:this.popoutWidth,h:this.popoutHeight,ut:this.stateUpdateTime,pt:this.inPopoutWindow?(new Date()).getTime():this.popoutTime};for(var i=0;i<this.stateStorers.length;i++){presenceState=this.stateStorers[i](presenceState);}
this.state=presenceState;return this.state;},doSync:function(immediate){if(this.syncPaused){return;}
if(immediate)
this._doSync();else{this._doSync.bind(this).defer();}},_doSync:function(){this.stateUpdateTime=(new Date()).getTime();presenceCookieManager.store();this._load(this.state);},pauseSync:function(){this.syncPaused++;},resumeSync:function(){this.syncPaused--;this.doSync();},handleMsg:function(channel,obj){this._handleMsg.bind(this,channel,obj).defer();},_handleMsg:function(channel,obj){if(typeof obj=='string'){if(obj=='shutdown'){this.connectionShutdown();}else if(obj=='restart'){if(this.isShutdown){this.restart();}}
return;}
if(this.isShutdown){return false;}
var handled=false;for(var i=0;i<this.msgHandlers.length;i++){handled=this.msgHandlers[i](channel,obj);if(handled){break;}}},popout:function(){if(this.inPopoutWindow||this.poppedOut){this.popin(true);return;}
if(this.popoutClicked){return;}
this.popoutClicked=true;var width=this.popoutWidth;var height=this.popoutHeight;if(this.isSafari2){width=this.minWidth;height=this.minHeight;}
var w=window.open(this.popoutURL,"fbChatWindow","status=0,toolbar=0,location=0,menubar=0,"+"directories=0,resizable=1,scrollbars=0,"+"width="+width+",height="+height+","+"left="+this.defX+",top="+this.defY);if(width!=this.popoutWidth||height!=this.popoutHeight){w.resizeBy(this.popoutWidth-width,this.popoutHeight-height);}
this.setHolderClass('');this.poppedOut=true;this.justPoppedOut=true;this.popoutTime=(new Date()).getTime();this.doSync();this.popoutClicked=false;},popin:function(shouldClose){if(typeof shouldClose=='undefined'){shouldClose=true;}
if(this.inPopoutWindow){if(this.popinClicked){return;}
this.popinClicked=true;}
this.poppedOut=false;this.doSync();if(this.inPopoutWindow&&shouldClose){window.close();}},_windowOnResize:function(){this.contentResized={};var viewportVector=Vector2.getViewportDimensions();this._handleResize(viewportVector.x-this.virtPopoutWidth,viewportVector.y-this.virtPopoutHeight);this.maxTabHeight=viewportVector.y-this.maxTabOffset;if(buddyList.buddyListOpen){buddyList.resizeTab();}else if(this.focusedWrapper){this.tabContentResize(this.focusedWrapper,this.focusedContent);}
clearTimeout(this.resizeTimeout);this.lastResized=(new Date()).getTime();this.resizeTimeout=setTimeout(function(){this.resizeTimeout=null;if((new Date()).getTime()>=this.lastResized+this.resizeStopTime){this._stopResize();}}.bind(this),this.resizeStopTime);if(viewportVector.x<this.popoutWidth||viewportVector.y<this.popoutHeight){try{window.resizeTo(this.popoutWidth,this.popoutHeight);this._stopResize();}catch(e){}}},_handleResize:function(dx,dy){this.virtPopoutWidth+=dx;this.virtPopoutHeight+=dy;this.popoutWidth=Math.max(this.virtPopoutWidth,this.minWidth);this.popoutHeight=Math.max(this.virtPopoutHeight,this.minHeight);for(var i=0;i<this.resizeHandlers.length;i++){this.resizeHandlers[i]();}},_stopResize:function(){if(this.virtPopoutWidth!=this.popoutWidth||this.virtPopoutHeight!=this.popoutHeight){this.virtPopoutWidth=this.popoutWidth;this.virtPopoutHeight=this.popoutHeight;this.doSync();}},_documentKeyPress:function(e){e=event_get(e);var keycode=e?e.keyCode:-1;if(keycode==KEYS.ESC){event_prevent(e);}},_documentOnClick:function(){if(this.disableTabAutoClose){return;}
if(buddyList.buddyListOpen){if(!buddyList.isSticky()){buddyList.closeTab();}}else{this.closeTab();}},allowAutoClose:function(){this.disableTabAutoClose--;},disallowAutoClose:function(){this.disableTabAutoClose++;},tabHandleMouseOver:function(tab){this.disallowAutoClose();CSS.addClass(tab,'hover');},tabHandleMouseOut:function(tab){this.allowAutoClose();CSS.removeClass(tab,'hover');},tabContentMouseOver:function(){this.disallowAutoClose();},tabContentMouseOut:function(){this.allowAutoClose();},_unfocus:function(){if(this.focusedWrapper){hide(this.focusedWrapper);}
if(this.focusedTab){remove_css_class_name(ge(this.focusedTab),'focused');if(this.tempTabCloseHandler){this.tempTabCloseHandler();this.tempTabCloseHandler=null;}}
var wasFocused=this.focusedTab;this.focusedTab=this.focusedWrapper=null;return wasFocused;},unfocus:function(){var wasFocused=this._unfocus();if(wasFocused){this.disableUnfocus=wasFocused;setTimeout(function(){this.disableUnfocus=null;}.bind(this),50);}},toggleTab:function(wrapperID,tabID,scrollContentID){var wrapper=ge(wrapperID);var tab=ge(tabID);if(!wrapper||!tab||tabID==this.disableUnfocus){return;}
if(wrapper.style.display=='none'){this.openTab(wrapperID,tabID,scrollContentID);}else{this.closeTab();}},closeTab:function(){var tab=this.focusedTab;if(!tab){return;}
this.unfocus();remove_css_class_name(tab,'focused');remove_css_class_name(this.holder,'tab_open');for(var i=0;i<this.tabCloseHandlers.length;i++){this.tabCloseHandlers[i]();}},openTabDelayed:function(wrapperID,tabID,scrollContentID){this.openTab.bind(this,wrapperID,tabID,scrollContentID).defer();},openTab:function(wrapperID,tabID,scrollContentID){if(this.focusedTab==tabID){return;}
this._unfocus();this.focusedWrapper=wrapperID;this.focusedContent=scrollContentID;this.focusedTab=tabID;this.disableUnfocus=this.focusedTab;setTimeout(function(){this.disableUnfocus=null;}.bind(this),50);if(scrollContentID&&!this.contentResized[scrollContentID]){ge(wrapperID).style.visibility='hidden';show(wrapperID);this.tabContentResize(wrapperID,scrollContentID);ge(wrapperID).style.visibility='';}else{show(wrapperID);}
add_css_class_name(ge(tabID),'focused');add_css_class_name(this.holder,'tab_open');for(var i=0;i<this.tabOpenHandlers.length;i++){this.tabOpenHandlers[i]();}},contentChanged:function(contentID){delete this.contentResized[contentID];},tabContentResize:function(wrapperID,contentID,forceLockHeight){if(this.poppedOut){return;}
var content=ge(contentID);var wrapper=ge(wrapperID);var contentWrapper=content.parentNode;if(!content||!wrapper){return;}
if(this.focusedWrapper==wrapperID){this.contentResized[contentID]=true;}
if(!this.contentPaddings[wrapperID]){var dimWrapper=getDimensions(wrapper);var dimContentWrapper=getDimensions(contentWrapper);this.contentPaddings[wrapperID]=dimWrapper.height-dimContentWrapper.height;}
if(this.isIE){contentWrapper.style.height='auto';dimContent=getDimensions(contentWrapper);}else{dimContent=getDimensions(content);}
var maxContentHeight=this.maxTabHeight-this.contentPaddings[wrapperID];if(dimContent.height<maxContentHeight){CSS.removeClass(contentWrapper,'scroll');contentWrapper.style.height=forceLockHeight?(dimContent.height+'px'):'auto';}else{CSS.addClass(contentWrapper,'scroll');contentWrapper.style.height=maxContentHeight+'px';}},pauseOffClick:function(tabID){this.disableUnfocus=tabID;},resumeOffClick:function(){this.disableUnfocus=null;},renderLink:function(href,text,extra){return'<a href="'+href+'"'+
(this.inPopoutWindow?' target="_blank"':'')+
(extra?extra:'')+'>'+text+'</a>';},setHolderClass:function(className){if(className=='popped_out'){remove_css_class_name(this.holder,'full');}else if(className=='full'){remove_css_class_name(this.holder,'popped_out');}else{remove_css_class_name(this.holder,'popped_out');remove_css_class_name(this.holder,'full');}
add_css_class_name(this.holder,className);},_loadHolderClass:function(){if(!this.poppedOut&&!this.inPopoutWindow&&this.holder.className!=''){this.setHolderClass(statusControl.visibility||chatDisplay.numTabs>0?'full':'');}},renderLoginLink:function(){return this.renderLink(this.loginURL,'log in');},getErrorDescription:function(asyncResponse){var error=asyncResponse.getError();var desc=asyncResponse.getErrorDescription();if(!desc){desc=tx('sh:error-occurred');}
if(error==kError_Async_NotLoggedIn){desc=tx('pr02',{'login':this.renderLoginLink()});}
return desc;},showAsyncError:function(asyncResponse,title){if(typeof title=='undefined'||!title){var chat=tx('chd01');title=tx('pr03');}
var desc=this.getErrorDescription(asyncResponse);new ErrorDialog().showError(title,desc);},showTransportError:function(asyncResponse,title){if(typeof title=='undefined'||!title){var chat=tx('chd01');title=tx('pr03');}
var desc=tx('pr04',{'Chat':tx('chd01')});new ErrorDialog().showError(title,desc);this.warn("presence: got async transport error: "+asyncResponse.getErrorDescription());},checkLoginError:function(asyncResponse){var error=asyncResponse.getError();if(error==kError_Async_NotLoggedIn||error==kError_Async_LoginChanged||error==kError_Async_CSRFCheckFailed||error==kError_Login_GenericError){this.loginShutdown();return true;}
return false;},checkMaintenanceError:function(asyncResponse){if(asyncResponse.getError()==1356007){this.maintenanceShutdown();return true;}
return false;},loginShutdown:function(){var reason=tx('pr02',{'login':this.renderLoginLink()});this.shutdown(false,reason,true);},connectionShutdown:function(shouldDelay){var reason=tx('pr04',{'Chat':tx('chd01')});this.shutdown(shouldDelay,reason);},maintenanceShutdown:function(){var reason=tx('pr10',{'Chat':tx('chd01')});this.shutdown(false,reason);channelManager.stop();},versionShutdown:function(){var reason=tx('pr08',{'Chat':tx('chd01')});this.shutdown(false,reason);channelManager.stop();},shutdown:function(shouldDelay,reason,isAlert){this.isRestarting=false;this.isShuttingDown=true;var now=(new Date()).getTime();this.shutdownTime=now;if(!shouldDelay){this._shutdown(reason,isAlert,0);}else{setTimeout(this._shutdown.bind(this,reason,isAlert,now),this.shutdownDelay);}},_shutdown:function(reason,isAlert,shutdownTime){if(!this.isShuttingDown&&shutdownTime==this.shutdownTime){return;}
if(shutdownTime&&this.isShutdown){return;}
if(typeof reason!='string'||!reason){reason=tx('pr05',{'Chat':tx('chd01')});}
if(!this.inPopoutWindow){CSS.addClass(this.holder,'error');if(isAlert){CSS.addClass(this.errorBar,'alert');set_inner_html($('presence_error_alert_reason'),reason);}else{CSS.removeClass(this.errorBar,'alert');set_inner_html($('presence_error_reason'),reason);}}else{if(this.shutdownErrorDialog){this.shutdownErrorDialog.hide();}
this.shutdownErrorDialog=new ErrorDialog().show_prompt(tx('pr03'),'<div class="dialog_body">'+
reason+'</div>');}
if(this.isShutdown){return;}
this.warn("presence: shutting down");this.isShutdown=true;for(var i=0;i<this.shutdownHandlers.length;i++){this.shutdownHandlers[i]();}},restart:function(shouldDelay){this.isShuttingDown=false;this.isRestarting=true;if(!shouldDelay){this._restart(0);}else{setTimeout(this._restart.bind(this,this.shutdownTime),this.restartDelay);}},_restart:function(shutdownTime){if(!this.isRestarting||(shutdownTime&&shutdownTime!=this.shutdownTime)){return;}
this.debug("presence: restarting");this.isShutdown=false;this.load();for(var i=0;i<this.restartHandlers.length;i++){this.restartHandlers[i]();}
if(!this.inPopoutWindow){remove_css_class_name(this.holder,'error');}else{if(this.shutdownErrorDialog){this.shutdownErrorDialog.hide();}}},start:function(){for(var i=0;i<this.startHandlers.length;i++){this.startHandlers[i]();}},registerResizeHandler:function(fn){this.resizeHandlers.push(fn);},registerStateStorer:function(fn){this.stateStorers.push(fn);},registerStateLoader:function(fn){this.stateLoaders.push(fn);},registerMsgHandler:function(fn){this.msgHandlers.push(fn);},registerShutdownHandler:function(fn){this.shutdownHandlers.push(fn);},registerRestartHandler:function(fn){this.restartHandlers.push(fn);},registerStartHandler:function(fn){this.startHandlers.push(fn);},registerTabOpenHandler:function(fn){this.tabOpenHandlers.push(fn);},registerTabCloseHandler:function(fn){this.tabCloseHandlers.push(fn);},registerTempTabCloseHandler:function(handler){this.tempTabCloseHandler=handler;}};function getDimensions(id){var element=ge(id);var els=element.style;var originalVisibility=els.visibility;var originalPosition=els.position;var originalDisplay=els.display;if(originalDisplay=='none'){els.visibility='hidden';els.position='absolute';els.display='block';}
var originalWidth=element.clientWidth;var originalHeight=element.clientHeight;els.display=originalDisplay;els.position=originalPosition;els.visibility=originalVisibility;return{width:originalWidth,height:originalHeight};}
function getFirstName(name){var words=name.split(" ");var fname=words[0];var flen=fname.length;if(typeof words[1]!='undefined'&&(flen==1||(flen==2&&fname.indexOf('.')!=-1)||(flen==3&&fname.toLowerCase()=='the'))){fname+=' '+words[1];}
return fname;}
function verifyNumber(num){if(typeof num=='undefined'||isNaN(num)||num==Number.POSITIVE_INFINITY||num==Number.NEGATIVE_INFINITY){num=0;}
return num;}
function verifyBool(bool){if(typeof bool=='undefined'){bool=false;}
return bool==0?false:true;}

var ChannelRebuildReasons={Unknown:0,AsyncError:1,TooLong:2,Refresh:3,RefreshDelay:4,UIRestart:5,NeedSeq:6,PrevFailed:7,IFrameLoadGiveUp:8,IFrameLoadRetry:9,IFrameLoadRetryWorked:10};function fbChannelManager(user){this.user=user;this.iframeCheckTime=16000;this.iframeCheckRetryTime=16000;this.defaultRetryInterval=3000;this.maxRetryInterval=60000;this.iframeLoadMaxRetries=1;this._init();}
function handleChanneliFrameMessageEvent(event){var domain=(event.domain||event.origin);if(domain.substring(domain.length-13)!='.facebook.com'&&domain.substring(domain.length-15)!='://facebook.com'&&domain!='facebook.com'){return;}
handleChanneliFrameMessage(event.data);}
function handleChanneliFrameMessage(iframeMsgStr){channelManager.handleiFrameMessage(eval('('+iframeMsgStr+')'));}
fbChannelManager.prototype={_init:function(){this.channels={};this.iframeURL=this.iframeHost=this.iframePort=null;this.isActionRequest=true;this.isReady=false;this.isRebuilding=false;this.iframeIsLoaded=false;this.iframeEverLoaded=false;this.iframeCheckFailedCount=0;this.permaShutdown=false;this.shouldClearSubdomain=false;this.retryInterval=0;this.subframe=ge('channel_iframe');this.postMessage=null;var channelData=presenceCookieManager.getSubCookie('ch');this.iframeSubdomain=0;if(channelData&&channelData.sub){for(var i=0;i<channelData.sub.length;i++){if(!channelData.sub[i]){this.iframeSubdomain=i;break;}}
if(i==channelData.sub.length){this.iframeSubdomain=channelData.sub.length;}}
var safari=ua.safari();this.pollForMessages=(safari>523&&safari<525);this.useRandomSubdomain=(ua.ie()>0);if(document.postMessage){document.addEventListener('message',handleChanneliFrameMessageEvent,false);}else if(window.postMessage){window.addEventListener('message',handleChanneliFrameMessageEvent,false);}
presenceCookieManager.register('ch',this._getCookieInfo.bind(this));if(ua.firefox()){onbeforeunloadRegister(this._onUnload.bind(this));}else{onunloadRegister(this._onUnload.bind(this));}},sendiFrameMessage:function(msg){if(!this.postMessage){return;}
var msgStr=JSON.encode(msg);try{this.postMessage(msgStr,"*");}catch(e){presence.error('channel: error sending message "'+msgStr+'" to iframe: '+e.toString());}},handleiFrameMessage:function(iframeMsg){if(iframeMsg.type=='init'){this.iframeLoaded();}else if(iframeMsg.type=='channelMsg'){this.handleChannelMsg(iframeMsg.channel,iframeMsg.seq,iframeMsg.msg);}},_onUnload:function(){this.shouldClearSubdomain=true;presence.doSync(true);},addChannel:function(channel,seq,msgHandler,startHandler,shutdownHandler,restartHandler){this.channels[channel]={'currentSeq':seq,'nextSeq':0,'msgHandler':msgHandler,'startHandler':startHandler,'shutdownHandler':shutdownHandler,'restartHandler':restartHandler};},isLowestSubdomain:function(){var channelData=presenceCookieManager.getSubCookie('ch');if(!channelData||!channelData.sub){return true;}
for(var i=0;i<channelData.sub.length;i++){if(channelData.sub[i]){return(i==this.iframeSubdomain);}}},_getCookieInfo:function(){var data={};if(this.iframeHost&&this.iframePort){data.h=this.iframeHost;data.p=this.iframePort;var channelData=presenceCookieManager.getSubCookie('ch');var subdomains=(channelData&&channelData.sub)?channelData.sub:[];var oldLength=subdomains.length;if(this.shouldClearSubdomain){subdomains[this.iframeSubdomain]=0;}else{subdomains[this.iframeSubdomain]=1;for(var i=oldLength;i<=this.iframeSubdomain;i++){if(!subdomains[i]){subdomains[i]=0;}}}
data.sub=subdomains;for(var channel in this.channels){data[channel]=this.channels[channel].currentSeq;}}
return data;},stop:function(){this.stopped=true;this.setReady(false);},setReady:function(isReady){this.isReady=isReady;var msg={'type':'isReady','isReady':isReady,'isActionRequest':this.isActionRequest};if(isReady&&this.isActionRequest){this.isActionRequest=false;}
if(isReady){msg['channels']=this.channels;}
this.sendiFrameMessage(msg);},setActionRequest:function(isActionRequest){this.sendiFrameMessage({'type':'isActionRequest','isActionRequest':isActionRequest});},iframeLoad:function(path,host,port,isReady){this.isReady=isReady;this.iframeIsLoaded=false;this.iframePath=path;this.iframeHost=host;this.iframePort=port;var subdomain=this.iframeSubdomain;if(this.useRandomSubdomain){subdomain+=''+rand32();}
var url='http://'+subdomain+'.'+this.iframeHost+'.facebook.com:'+this.iframePort+this.iframePath;setTimeout(this._iframeCheck.bind(this),this.iframeCheckTime);if(this.subframe.contentDocument){try{this.subframe.contentDocument.location.replace(url);}catch(e){presence.error('channel: error setting location: '+e.toString());}}else if(this.subframe.contentWindow){this.subframe.src=url;}else if(this.subframe.document){this.subframe.src=url;}else{presence.error('channel: error setting subframe url');}
presence.debug('channel: done with iframeLoad, subframe sent to '+url);},iframeLoaded:function(){if(!this.iframeIsLoaded){this.iframeIsLoaded=true;if(window.postMessage){this.postMessage=this.subframe.contentWindow.postMessage.bind(this.subframe.contentWindow);}else if(document.postMessage){this.postMessage=window.parent.document.postMessage.bind(window.parent.document);this.postMessage=this.subframe.contentDocument.postMessage.bind(this.subframe.contentDocument);}else{this.postMessage=this.subframe.contentWindow.handleChannelParentMessage.bind(this.subframe.contentWindow);}
this.setReady(this.isReady);if(this.pollForMessages){this.msgCheckInterval=setInterval(this.handleChannelMsgCheck.bind(this),100);}
if(this.iframeCheckFailedCount){for(var c in this.channels){this.channels[c].restartHandler(false);}
this._sendDummyReconnect(ChannelRebuildReasons.IFrameLoadRetryWorked);}else{for(var c in this.channels){this.channels[c].startHandler();}}
this.iframeCheckFailedCount=0;this.iframeEverLoaded=true;}},_iframeCheck:function(){if(!this.iframeIsLoaded){presence.error("channel: uplink iframe never loaded; shutting down");this.iframeCheckFailedCount++;this.iframeHost=this.iframePort=0;presenceCookieManager.store();if(this.iframeCheckFailedCount<=this.iframeLoadMaxRetries){this.iframeCheckTime=this.iframeCheckRetryTime;this.iframePath=null;this.rebuild(ChannelRebuildReasons.IFrameLoadRetry);}else{for(var c in this.channels){this.channels[c].shutdownHandler();}
this._sendDummyReconnect(ChannelRebuildReasons.IFrameLoadGiveUp);}}else{presence.debug('channel: uplink iframe loaded fine');}},_sendDummyReconnect:function(reason){var areq=new AsyncRequest().setURI('/ajax/presence/reconnect.php').setData({reason:reason,iframe_loaded:this.iframeEverLoaded}).setOption('suppressErrorHandlerWarning',true).setMethod('GET').setReadOnly(true);areq.specifiesWriteRequiredParams()&&areq.send();},_rebuildResponse:function(response){var rebuildInfo=response.getPayload();var channel=rebuildInfo.user_channel;presence.debug('got rebuild response with channel '+channel+', seq '+rebuildInfo.seq+', host '+rebuildInfo.host+', port '+rebuildInfo.port);this.channels[channel].currentSeq=rebuildInfo.seq;this.channels[channel].nextSeq=0;this.isRebuilding=false;if(rebuildInfo.path!=this.iframePath||rebuildInfo.host!=this.iframeHost||rebuildInfo.port!=this.iframePort){this.iframeLoad(rebuildInfo.path,rebuildInfo.host,rebuildInfo.port,true);}else{this.setReady(true);}
presenceCookieManager.store();presenceUpdater.pauseUpdate();if(typeof statusControl!='undefined'){statusControl.setVisibility(rebuildInfo.visibility);}
for(var c in this.channels){this.channels[c].restartHandler(true);}
presenceUpdater.resumeUpdate();},_retryRebuild:function(reason){if(this.retryInterval==0){this.retryInterval=this.defaultRetryInterval;}else{this.retryInterval*=2;if(this.retryInterval>=this.maxRetryInterval){this.retryInterval=this.maxRetryInterval;}}
presence.warn('manager trying again in '+(this.retryInterval*0.001)+' secs');setTimeout(this._rebuildSend.bind(this,reason),this.retryInterval);},_rebuildError:function(reason,response){presence.error('got rebuild error: '+response.getErrorDescription());if(presence.checkLoginError(response)||presence.checkMaintenanceError(response)){presence.warn('manager not trying again');}else{this._retryRebuild(ChannelRebuildReasons.PrevFailed);}},_rebuildTransportError:function(reason,response){presence.error('got rebuild transport error: '+response.getErrorDescription());this._retryRebuild(reason);},_rebuildSend:function(reason){if(typeof reason!='number'){reason=ChannelRebuildReasons.Unknown;}
presence.debug('channel: sending rebuild');var areq=new AsyncRequest().setURI('/ajax/presence/reconnect.php').setData({reason:reason,iframe_loaded:this.iframeEverLoaded}).setHandler(this._rebuildResponse.bind(this)).setErrorHandler(this._rebuildError.bind(this,reason)).setTransportErrorHandler(this._rebuildTransportError.bind(this,reason)).setOption('suppressErrorAlerts',true).setMethod('GET').setReadOnly(true);return areq.specifiesWriteRequiredParams()&&areq.send();},rebuild:function(reason){if(this.stopped){return;}
if(this.isRebuilding){presence.debug('channel: rebuild called, but already rebuilding');return;}
this.setReady(false);this.isRebuilding=true;presence.debug('channel: rebuilding');if(reason==ChannelRebuildReasons.RefreshDelay){this.retryInterval=this.maxRetryInterval;}else{this.retryInterval=0;}
setTimeout(this._rebuildSend.bind(this,reason),this.retryInterval);},handleChannelMsgCheck:function(){if(this.pendingMsg){this._handleChannelMsg(this.pendingMsg.channel,this.pendingMsg.seq,this.pendingMsg.msg);this.pendingMsg=null;}},handleChannelMsg:function(channel,seq,msg){if(this.pollForMessages){this.pendingMsg={channel:channel,seq:seq,msg:msg};}else{this._handleChannelMsg(channel,seq,msg);}},_handleChannelMsg:function(channel,seq,msg){if(msg.type=='shutdown'||msg.type=='permaShutdown'){if(!window.loaded||this.permaShutdown){return;}
if(msg.type=='permaShutdown'){presence.warn('channel: got permaShutdown for all channels');this.permaShutdown=true;}else{presence.warn('channel: got shutdown for all channels');this.rebuild(msg.reason);}
for(var c in this.channels){this.channels[c].shutdownHandler(true);}}else{this.channels[channel].currentSeq++;var nextSeq;if((nextSeq=this.channels[channel].nextSeq)&&seq<nextSeq){presence.warn('ignoring a duplicate message ('+seq+')<('+nextSeq+') on '+channel);return;}
this.channels[channel].nextSeq=parseInt(seq)+1;presence.pauseSync();try{this.channels[channel].msgHandler(channel,msg);}catch(e){presence.error('error in channel handlers: '+e.toString()+', msg: '+msg);}
presence.resumeSync();}}};

function fbCookieManager(version){this.version=version;this.cookieName='presence';this._init();}
fbCookieManager.prototype={_init:function(){this.storers={};},register:function(subname,fn){this.storers[subname]=fn;},store:function(){var cookie=this._getCookie();if(cookie&&cookie.v&&this.version<cookie.v){presence.versionShutdown();return;}
var data={'v':this.version,'time':parseInt(presence.getTime()*0.001)};for(var subname in this.storers){data[subname]=this.storers[subname]();}
var serialized=JSON.encode(data);setCookie(this.cookieName,serialized,null);},_getCookie:function(){try{var data=JSON.decode(getCookie(this.cookieName));return data;}catch(e){return null;}},getSubCookie:function(subname){var cookie=this._getCookie();if(!cookie){return null;}
return cookie[subname];}};

function fbPresenceUpdater(){this.timerGranularity=presence.sitevars.UPDATE_GRANULARITY?presence.sitevars.UPDATE_GRANULARITY*1000:60000;this._init();}
fbPresenceUpdater.prototype={_init:function(){this.handlers=[];this.updatePaused=0;this.updateNumber=0;this._runTimer();},register:function(asyncParam,checkCB,responseCB,errorCB,transportErrorCB){this.handlers.push({'asyncParam':asyncParam,'checkCB':checkCB,'responseCB':responseCB,'errorCB':errorCB,'transportErrorCB':transportErrorCB});},_runTimer:function(){clearTimeout(this.timer);this.timer=setTimeout(this.checkForUpdate.bind(this,false,[],false),this.timerGranularity);},forceUpdate:function(){if(this.updatePaused){return;}
this.checkForUpdate(true,[],false);},pauseUpdate:function(){this.updatePaused++;},resumeUpdate:function(){this.updatePaused--;this.forceUpdate();},checkForUpdate:function(forceAll,forceHandlers,bypassTimer){if(!bypassTimer){clearTimeout(this.timer);}
if(presence.isShutdown){if(!bypassTimer){this._runTimer();}
return;}
var time=presence.getTime();var asyncHandlers=[];var asyncData={user:presence.user};for(var i=0;i<this.handlers.length;i++){var handlerInfo=this.handlers[i];var forceUpdate=forceAll||(forceHandlers.indexOf(handlerInfo.asyncParam)!=-1);var shouldUpdate=handlerInfo.checkCB(time,asyncData,forceUpdate);if(shouldUpdate){asyncData[handlerInfo.asyncParam]=1;asyncHandlers.push(handlerInfo);}}
if(asyncHandlers.length>0){this._sendUpdate(asyncData,asyncHandlers,bypassTimer);}else{if(!bypassTimer){this._runTimer();}}},runHandler:function(asyncHandler){this.checkForUpdate(false,[asyncHandler],true);},_initialHandler:function(updateNumber,response){if(updateNumber!=this.updateNumber){return false;}},_onResponse:function(asyncHandlers,bypassTimer,response){var updateInfo=response.getPayload();presence.updateServerTime(updateInfo.time);var updateTime=presence.getTime();for(var i=0;i<asyncHandlers.length;i++){var handler=asyncHandlers[i];var paramResult=updateInfo[handler.asyncParam];if(typeof paramResult=='undefined'||!paramResult){handler.errorCB(response);}else{handler.responseCB(paramResult,updateTime);}}
presenceCookieManager.store();if(!bypassTimer){this._runTimer();}},_onError:function(asyncHandlers,response){for(var i=0;i<asyncHandlers.length;i++){asyncHandlers[i].errorCB(response);}
this._runTimer();},_onTransportError:function(asyncHandlers,response){for(var i=0;i<asyncHandlers.length;i++){asyncHandlers[i].transportErrorCB(response);}
this._runTimer();},_sendUpdate:function(asyncData,asyncHandlers,bypassTimer){this.updateNumber++;var uri=asyncData['notifications']?'/ajax/presence/update.php':'/ajax/chat/buddy_list.php';this.async=new AsyncRequest().setInitialHandler(this._initialHandler.bind(this,this.updateNumber)).setHandler(this._onResponse.bind(this,asyncHandlers,bypassTimer)).setErrorHandler(this._onError.bind(this,asyncHandlers)).setTransportErrorHandler(this._onTransportError.bind(this,asyncHandlers)).setOption('suppressErrorAlerts',true).setData(asyncData).setURI(uri).send();}};

function fbNotifications(count,countNew,updateTime,app_names,latest_notif,latest_read_notif){this.count=count;this.countNew=countNew;this.updateTime=updateTime;this.user=presence.user;this.app_names=app_names;this.latest_notif_time=latest_notif;this.latest_read_notif_time=latest_read_notif;this._init();}
fbNotifications.prototype={_init:function(){this.cookieName='notifications_'+this.user;this.markReadAsync=null;this.markupCached=null;this.appHideCache=[];this.updateCheckCount=0;this.contentID='presence_notifications_content';this.content=ge(this.contentID);this.countSpan=ge('presence_notifications_count');this.navInbox=ge('nav_inbox');this._updateCount();presenceUpdater.register('notifications',this._checkUpdater.bind(this),this._onUpdaterResponse.bind(this),this._onUpdaterError.bind(this),this._onUpdaterError.bind(this));presenceCookieManager.register('ntf',this._getCookieData.bind(this));},markRead:function(){if(this.countNew==0){return;}
this.countNew=0;this._updateCount();AsyncRequest.pingURI('/ajax/presence/notifications_read.php');unreads=DOM.scry(this.content,'div.notif_unread');for(var i=0;i<unreads.length;i++){animation(unreads[i]).duration(1250).checkpoint().to('backgroundColor','#FFFFF').duration(2250).ondone(remove_css_class_name.bind(null,unreads[i],'notif_unread')).go();}},_getCookieData:function(){return this.countNew;},_checkUpdater:function(time,asyncData,forceUpdate){if(!buddyList._checkUpdater(time,{},forceUpdate)){return false;}
this.updateCheckCount++;if(forceUpdate||(100/this.updateCheckCount)<=presence.sitevars.NOTIFICATIONS_PIGGYBACK_PERCENTAGE){this.updateCheckCount=0;asyncData['notif_latest']=this.latest_notif_time;asyncData['notif_latest_read']=this.latest_read_notif_time;return true;}
return false;},_onUpdaterResponse:function(notificationResponse,time){var inboxCount=notificationResponse.inboxCount;if(this.navInbox&&inboxCount!=null){var inboxMarkup=(inboxCount>0)?tx('pr06',{'=Inbox':tx('pr07'),'unread_count':inboxCount}):tx('pr07');set_inner_html(this.navInbox,inboxMarkup);}
if(!notificationResponse.no_change){if(this.count!=notificationResponse.count){this.count=notificationResponse.count;presence.contentChanged(this.contentID);}
this.countNew=notificationResponse.countNew;this.updateTime=time;this.latest_notif_time=notificationResponse.latest_notif;this.latest_read_notif_time=notificationResponse.latest_read_notif;for(var k in notificationResponse.app_names){this.app_names[k]=notificationResponse.app_names[k];}
var multiple_updates=(null!=this.markupCached);this.markupCached=notificationResponse.markup;if(presence.focusedTab=='presence_notifications_tab'){multiple_updates||presence.registerTempTabCloseHandler(this._updateDisplay.bind(this));}else{this._updateDisplay();}}},_updateDisplay:function(){if(!this.content||!this.markupCached){return;}
set_inner_html(this.content,this.markupCached);for(var i=0;i<this.appHideCache.length;i++){this.hideNotifications(this.appHideCache[i],true);}
this.markupCached=null;this.appHideCache=[];this._updateCount();},_onUpdaterError:function(response){},_updateCount:function(){if(this.countSpan){this.countSpan.innerHTML=this.countNew?'<strong>'+this.countNew+'</strong>':'';}},hideNotifications:function(app_id,cached){var notifs=DOM.scry(this.content,'div.notif_'+app_id);for(var i=0;i<notifs.length;i++){if(cached){hide(notifs[i]);}else{animation(notifs[i]).to('opacity',0).to('height',0).blind().duration(1000).hide().go();}}
this.count-=notifs.length;presence.contentChanged(this.contentID);if(this.count<=0){var nothing_new=ge("presence_no_notifications");nothing_new&&show(nothing_new);}
cached||this.appHideCache.push(app_id);},showHideDialog:function(clickedElement,app_id,platform_type){var hide_handler=function(button_name){this.hideNotifications(app_id);setTimeout(presence.allowAutoClose.bind(presence),1100);var params={'app_id':app_id,'collapse':1};if('report'==button_name){params['spam']=1;}
new AsyncRequest().setURI('/ajax/notifications.php').setData(params).send();(typeof(toggleType)=='function')&&(typeof(hidden)!='undefined')&&(!hidden[app_id])&&toggleType(app_id,true,null,false,true,presence.user,false,platform_type);};var canceler={};copy_properties(canceler,Dialog.CANCEL);canceler.handler=function(){presence.allowAutoClose();};presence.disallowAutoClose();var app_name=this.app_names[app_id];var dialog_handle=new Dialog().setTitle(tx('notif:hide-title',{'application-name':app_name})).setBody(tx('notif:hide-desc-short')).setButtons([{name:'hide',label:tx('notif:hide-button'),handler:bind(this,hide_handler,'hide')},{name:'report',label:tx('notif:report-button'),handler:bind(this,hide_handler,'report')},canceler]).setModal().show();return false;}};

function simple_dismiss_welcome(storyType){hide('chat_welcome');AsyncRequest.pingURI('/ajax/rooster_ajax.php',{'storytype':storyType});}
function fbChatDisplay(userInfos,histories,everSentMessage,profileURL,messageURL,gatedFeatures){this.userInfos=userInfos;this.histories=histories;this.everSentMessage=everSentMessage;this.user=presence.user;this.profileURL=profileURL;this.messageURL=messageURL;this.settingsURL='/ajax/chat/settings.php';this.gatedFeatures=gatedFeatures;this._init();}
fbChatDisplay.prototype={blinkTime:1500,initialBlinkDelay:3000,_init:function(){this.loaded=false;this.tabs={};this.numTabs=0;this.focused=null;this.lastFocused=null;this.newMsgNames=[];this.newMsgNamesIndex=0;this.blinkingTimer=null;this.welcomeDismissed=false;this.isSoundWindow=false;this.windowIsFocused=true;this.chatActivityTime=0;this.favIcon=null;this.altFavIcon=null;presence.registerResizeHandler(this.handleResize.bind(this));presence.registerStateStorer(this._store.bind(this));presence.registerStateLoader(this._load.bind(this));presence.registerMsgHandler(this._handleMsg.bind(this));presence.registerStartHandler(this.start.bind(this));presence.registerShutdownHandler(this.shutdown.bind(this));presence.registerRestartHandler(this.restart.bind(this));statusControl.registerVisibilityHandler(this.handleVisibility.bind(this));buddyList.registerAvailabilityHandler(this.handleBuddyAvailability.bind(this));addEventBase(window,'focus',this.onWindowFocus.bind(this),'Chat');addEventBase(window,'blur',this.onWindowBlur.bind(this),'Chat');},onWindowFocus:function(){this.isWindowFocused=true;this.doStopBlinking();},onWindowBlur:function(){this.isWindowFocused=false;},start:function(){for(var id in this.tabs){this.tabs[id].start();}},shutdown:function(){this._stopBlinking();},restart:function(){for(var id in this.tabs){this.tabs[id].restart();}},load:function(){this._load(presence.state);},_load:function(presenceState){if(presenceState){var useNumMissed=false;var now=presence.getTime();if(now-presenceState.ut<60*60*1000){useNumMissed=true;}
this.isSoundWindow=channelManager.isLowestSubdomain();if(this.blinkingTimer&&presenceState.sb){this._stopBlinking();}
try{this.chatActivityTime=verifyNumber(presenceState.ct)*1000;this.welcomeDismissed=verifyBool(presenceState.wd);var firstTab=null;if(!this.loaded&&presence.isIE6){presenceState.t={};presenceState.f=null;}
for(var id in presenceState.t){if(!firstTab){firstTab=id;}
if(!this.tabs[id]){var tabInfo=presenceState.t[id];var name=tabInfo.n;var firstName=tabInfo.fn?tabInfo.fn:getFirstName(name);var numMissed=useNumMissed?verifyNumber(tabInfo.m):0;this.tabs[id]=new fbChatTab(this,id,name,firstName,numMissed);this.numTabs++;}}
if(!presence.poppedOut&&this.numTabs>0){presence.setHolderClass('full');}
if(!this.loaded&&presence.inPopoutWindow&&!presenceState.f&&firstTab){presenceState.f=firstTab;}
if(presenceState.f!=this.focused){if(presenceState.f){this._focusTab(presenceState.f);if(presence.inPopoutWindow){window.focus();}}else{this._unfocus();}}
for(var id in this.tabs){if(!presenceState.t[id]){this._closeTab(id);}}}catch(e){presence.error('chat: error loading state: '+e.toString());}}
this.loaded=true;},_store:function(presenceState){presenceState.ct=parseInt(this.chatActivityTime*0.001);presenceState.t={};presenceState.f=this.focused;presenceState.wd=this.welcomeDismissed?1:0;for(var id in this.tabs){var tab=this.tabs[id];presenceState.t[id]={n:tab.name,m:tab.numMissed};if(tab.firstName!=getFirstName(tab.name)){presenceState.t[id].fn=tab.firstName;}}
presenceState.sb=(this.blinkingTimer==null)?1:0;return presenceState;},handleResize:function(){if(!this.focused){return;}
var tab=this.tabs[this.focused];tab.handleResize();},reloadTabs:function(){for(var id in this.tabs){this.tabs[id].loadData();}},_closeTab:function(id){if(this.focused==id){if(presence.inPopoutWindow){var toFocus=null;var breakNext=false;for(var otherId in this.tabs){if(otherId!=id){toFocus=otherId;if(breakNext){break;}}else if(toFocus){break;}else{breakNext=true;}}
if(toFocus){var tabToFocus=this.tabs[toFocus];this._focusTab(toFocus);}else{this.focused=null;}}else{this.focused=null;}}
this.tabs[id].close();delete this.tabs[id];this.numTabs--;if(!statusControl.visibility&&this.numTabs<=0){presence.setHolderClass('');}
chatTabSlider.close(id);},closeTab:function(id){this._closeTab(id);presence.doSync();},_unfocus:function(){if(!this.focused){return false;}
if(presence.poppedOut)this.tabs[this.focused].deselectPopoutChat();this.tabs[this.focused].unfocus();this.focused=null;return true;},unfocus:function(){var changed=this._unfocus();if(changed){presence.doSync();}
this.lastFocused=null;},unfocusNoSync:function(){this._unfocus();},refocus:function(){if(!this.lastFocused||!this.tabs[this.lastFocused]){return null;}
this._focusTab(this.lastFocused);},_focusTab:function(id,name,firstName){if(id==this.focused){return;}
if(!this.tabs[id]){if(typeof name=='undefined'){if(!this.userInfos[id]||!this.userInfos[id].name){presence.warn("chat: couldn't create tab since no name is specified");return;}
name=this.userInfos[id].name;firstName=this.userInfos[id].firstName;}
this.tabs[id]=new fbChatTab(this,id,name,firstName,0);this.numTabs++;chatTabSlider.addTab(id);}
chatTabSlider.gotoTab(id);if(this.focused){this.tabs[this.focused].unfocus();if(presence.poppedOut)this.tabs[this.focused].deselectPopoutChat();}
this.focused=id;this.lastFocused=id;if(this.focused){var loaded=this.loaded;(function(){var hidden=!presence.inPopoutWindow&&presence.poppedOut;this.tabs[this.focused].focus(hidden,loaded);if(presence.poppedOut)this.tabs[id].selectPopoutChat();}).bind(this).defer();}},focusTab:function(id,name,firstName){this._focusTab(id,name,firstName);this.doStopBlinking();this.chatActivityTime=(new Date()).getTime();presence.doSync();},toggleTab:function(id,name,firstName){if(this.focused==id){this.unfocus();}else{this.focusTab(id,name,firstName);}},doBlink:function(){if(!this.favIcon){var links=document.getElementsByTagName('link');for(var i=0;i<links.length;i++){if(links[i].rel=='shortcut icon'){this.favIcon=links[i];this.altFavIcon=document.createElement('link');this.altFavIcon.rel='shortcut icon';this.realTitle=document.title;break;}}}
if(this.favIcon.parentNode){if(this.newMsgNames&&this.newMsgNames.length>0){if(this.newMsgNamesIndex>=this.newMsgNames.length){this.newMsgNamesIndex=0;}
var name=this.newMsgNames[this.newMsgNamesIndex++];document.title=tx('chd05',{'name':name});}else{document.title=tx('chd06');}
var p=this.favIcon.parentNode;p.removeChild(this.favIcon);p.appendChild(this.altFavIcon);}else{document.title=this.realTitle;var p=this.altFavIcon.parentNode;p.removeChild(this.altFavIcon);p.appendChild(this.favIcon);}},doStopBlinking:function(force){if(this.blinkingTimer||force){this._stopBlinking();presence.doSync();}},_stopBlinking:function(){if(this.blinkingTimer){if(this.favIcon&&!this.favIcon.parentNode){this.doBlink();}
clearInterval(this.blinkingTimer);this.blinkingTimer=null;this.newMsgNames=[];this.newMsgNamesIndex=0;}},focusTextBox:function(){if(this.focused&&!(document.getSelection?document.getSelection():document.selection.createRange().text))
{this.tabs[this.focused].textBox.focus();}},handleBuddyAvailability:function(justCameOnline){for(var id in this.tabs){this.tabs[id].handleBuddyAvailability(justCameOnline);}},_handleMsg:function(channel,obj){if(obj.from){if(obj.from==this.user){var id=obj.to;}else{var id=obj.from;}
var tab=this.tabs[id];}
if(obj.type=='msg'){if(!tab){if(obj.from==this.user){var name=obj.to_name;var firstName=obj.to_first_name?obj.to_first_name:getFirstName(name);}else{var name=obj.from_name;var firstName=obj.from_first_name?obj.from_first_name:getFirstName(name);}
tab=this.tabs[id]=new fbChatTab(this,id,name,firstName,0);this.numTabs++;chatTabSlider.addTab(id);if(!this.focused){this.focusTab(id);}else{tab.getHistory();}}
if(presence.inPopoutWindow||!presence.poppedOut){if(obj.from==this.user){this.doStopBlinking(true);}else if(this.isWindowFocused){setTimeout(this.doStopBlinking.bind(this,true),500);}else if(!presence.isOpera){this.newMsgNames.push(tab.firstName);if(!this.blinkingTimer){this.blinkingTimer=setTimeout(function(){this.blinkingTimer=setInterval(this.doBlink.bind(this),this.blinkTime);}.bind(this),this.initialBlinkDelay);}}}
obj.time=obj.msg.time;tab.newMsg(obj);return true;}
else if(obj.type=='mf'){if(!tab){return false;}
tab.newMinifeed(obj);return true;}
else if(obj.type=='status'){if(!tab){return false;}
tab.updateStatus(obj.status,obj.time,obj.statusTimeRel);return true;}
else if(obj.type=='typ'){if(tab){tab.newTyping(obj);}else{presence.debug('typing message ignored');}
return true;}
else if(obj.type=='notification'){presenceUpdater.runHandler('notifications');return true;}
return false;},handleVisibility:function(){for(var id in this.tabs){this.tabs[id].handleVisibility();}},getHistory:function(id,create){create=create||false;if(!this.histories[id]&&create){this.histories[id]=[];}
return this.histories[id];},dismissWelcome:function(){hide('chat_welcome');this.welcomeDismissed=true;presence.doSync();AsyncRequest.pingURI(this.settingsURL,{'dismiss_welcome':true});}};

function fbChatTab(chatDisplay,id,name,firstName,numMissed){this.chatDisplay=chatDisplay;this.id=id;this.name=name;this.tabRef='chatDisplay.tabs['+this.id+']';this.firstName=firstName;this.tabDisabled=false;this.numMissed=numMissed;this.focused=false;this.lastLogItem=null;this.historyLoaded=false;this.pendingSentMsgs=[];this.failedSentMsgs=[];this.sendingDisplayMsgID=null;this.historyRequestID=0;this.bounceAnimation=null;this.convTextProcessor=this._processConvText.bind(this);this.convTextEmoteProcessor=this._processConvTextEmote.bind(this);this.statusTextProcessor=this._processStatusText.bind(this);this.minTextHeight=presence.inPopoutWindow?this.minTextHeightPopout:this.minTextHeightPopin;this.typingState=this.INACTIVE;this.typingRemoteState=this.INACTIVE;this.typingLastKeystrokeAt=null;this.typingNotifyTimer=null;this.typingCheckTimer=null;this.lastMessageAt=null;this.lastMessageHadOfflineResponse=false;this._buildUI();this.addPopoutChat(id);this.loadData();this.handleVisibility(true);}
fbChatTab.prototype={pendingToLogCompareWindow:60000,sendingCheckDelay:55000,sendingDisplayDelay:4000,convWrapLimit:30,statusWrapLimit:22,handleWidth:136,popinWidth:226,popinHeight:250,popoutWidthOffset:182,minTextHeightPopin:13,minTextHeightPopout:26,maxTextHeight:77,msgBunchTime:60000,maxHandleLen:16,maxTitleLen:20,maxStatusLen:90,bounceDuration:50,bounceOrgPosition:-3,typingNotifyDelay:1000,typingKeystrokeExpiry:7000,INACTIVE:0,TYPING:1,isTabVisible:function(){return this.focused&&(presence.inPopoutWindow||!presence.poppedOut)&&(this.chatInfo.clientWidth>20);},start:function(){this._popSendQueue();},restart:function(){this.getHistory(true);this.handleResize.bind(this).defer();},loadData:function(){if(this.chatDisplay.histories[this.id]){this._setHistory(this.chatDisplay.histories[this.id]);}
if(this.chatDisplay.userInfos[this.id]){this.updateUserInfo(false);}else{this.chatDisplay.userInfos[this.id]={'name':this.name,'firstName':this.firstName,'thumbSrc':'','status':''};}},_onHistoryInitialHandler:function(requestID,response){if(requestID!=this.historyRequestID){presence.debug("tabs: got old history async, ignoring");return false;}},_onHistoryResponse:function(fromRestart,response){var historyPayload=response.getPayload();var userInfo=historyPayload.userInfo;var logItems=historyPayload.history;this.chatDisplay.userInfos[this.id]=userInfo;buddyList.updateItemDisplay(this.id);this.updateUserInfo(false);if(historyPayload.fls){buddyList.setFlids(this.id,historyPayload.fls);}
if(!logItems){this._showHistoryError();return;}
var poppedSendQueue=false;if(this.pendingSentMsgs.length>0&&logItems.length>0){var pendingSendMsg=this.pendingSentMsgs[0];for(var i=logItems.length-1;i>=0;i--){var logItem=logItems[i];if(logItem.to==this.id){var timeDiff=Math.abs(pendingSendMsg.time-logItem.time);if(timeDiff<this.pendingToLogCompareWindow&&pendingSendMsg.text==logItem.msg.text){this._setMsgInfoMarkup(pendingSendMsg.msgID,'');this.pendingSentMsgs.shift();this._popSendQueue();this.poppedSendQueue=true;break;}}}
var lastLogTime=logItems[logItems.length-1].time;for(var i=0;i<this.pendingSentMsgs.length;i++){var pendingSendMsg=this.pendingSentMsgs[i];if(pendingSendMsg.time<lastLogTime){pendingSendMsg.time=(++lastLogTime);}}}
var pendingLogMsgs=this.chatDisplay.histories[this.id];if(pendingLogMsgs){if(logItems.length>0){var lastLogItem=logItems[logItems.length-1];var lastTime=lastLogItem.time;for(var i=0;i<pendingLogMsgs.length;i++){var logItem=pendingLogMsgs[i];if(logItem.time>lastTime){logItems.push(logItem);}}}else{logItems=pendingLogMsgs;}}
this._setHistory(logItems);this.chatDisplay.histories[this.id]=logItems;if(fromRestart){if(!poppedSendQueue){this._popSendQueue();}}},_onHistoryError:function(response){this._showHistoryError();},_showHistoryError:function(){show(this.chatHistoryError);this.scrollToBottom();},getHistory:function(fromRestart){var requestID=++(this.historyRequestID);new AsyncRequest().setInitialHandler(this._onHistoryInitialHandler.bind(this,requestID)).setHandler(this._onHistoryResponse.bind(this,fromRestart)).setErrorHandler(this._onHistoryError.bind(this)).setTransportErrorHandler(this._onHistoryError.bind(this)).setOption('suppressErrorAlerts',true).setData({'id':this.id}).setURI('/ajax/chat/history.php').send();},_setHistory:function(logItems){this.lastLogItem=null;var markup='';var sentIndex=0;var sentMsgs=[];Array.prototype.push.apply(sentMsgs,this.failedSentMsgs);Array.prototype.push.apply(sentMsgs,this.pendingSentMsgs);var prevItemTime=0;for(var i=0;i<logItems.length;i++){var logItem=logItems[i];if(logItem.type!='msg'&&logItem.type!='mf'&&logItem.type!='online'){continue;}
for(;sentIndex<sentMsgs.length;sentIndex++){var sentMsg=sentMsgs[sentIndex];if(sentMsg.time>prevItemTime&&sentMsg.time<=logItem.time){markup+=this._renderMsg(presence.user,this.id,sentMsg.time,sentMsg,sentMsg.msgID,sentMsg.isError,sentMsg.infoMarkup);}else{break;}}
if(logItem.type=='msg'){markup+=this._renderMsg(logItem.from,logItem.to,logItem.time,logItem.msg);}else if(logItem.type=='mf'&&statusControl.getSetting('minifeed')){markup+=this._renderMinifeed(logItem.from,logItem.time,logItem.markup);}else if(logItem.type=='online'){markup+=this._renderVisibilityChange(logItem.time,logItem.text);}
this.lastLogItem=logItem;prevItemTime=logItem.time;}
for(;sentIndex<sentMsgs.length;sentIndex++){var sentMsg=sentMsgs[sentIndex];markup+=this._renderMsg(presence.user,this.id,sentMsg.time,sentMsg,sentMsg.msgID,sentMsg.isError,sentMsg.infoMarkup);this.lastLogItem={'type':'msg','from':presence.user,'to':this.id,'time':sentMsg.time,'msg':sentMsg};}
hide(this.chatHistoryError);this.chatConvContent.innerHTML=markup;this.scrollToBottom();this.historyLoaded=true;},_onClearHistoryError:function(response){var chat=tx('chd01');presence.showAsyncError(response,tx('cht09',{'Chat':chat}));CSS.removeClass(this.tabHandle,'history_clearing');},_onClearHistoryResponse:function(response){CSS.removeClass(this.tabHandle,'history_clearing');var newHistory=[];for(var i=0;i<this.chatDisplay.histories[this.id].length;i++){var item=this.chatDisplay.histories[this.id][i];if(item.type!='msg'){newHistory.push(item);}}
this._setHistory(this.chatDisplay.histories[this.id]=newHistory);},clearHistory:function(){CSS.addClass(this.tabHandle,'history_clearing');new AsyncRequest().setHandler(this._onClearHistoryResponse.bind(this)).setErrorHandler(this._onClearHistoryError.bind(this)).setTransportErrorHandler(this._onClearHistoryError.bind(this)).setData({'clear_history_id':this.id}).setURI(this.chatDisplay.settingsURL).send();},_isCurrentPendingSend:function(msgID){return(this.pendingSentMsgs.length>0&&msgID==this.pendingSentMsgs[0].msgID);},_onSendInitialHandler:function(response){this.lastMessageHadOfflineResponse=false;},_onSendResponse:function(msgID,response){var payload=response.getPayload();if(this._isCurrentPendingSend(msgID)){var pendingMsg=this.pendingSentMsgs[0];pendingMsg.asyncSuccess=true;}
if(payload&&payload.warning){var warningMarkup=this._renderMsgWarningMarkup(payload.warning.title+'<br />'+payload.warning.body);this._setMsgInfoMarkup(msgID,warningMarkup,'msg_warning');}},_onSendTransportError:function(msgID,response){if(!this._isCurrentPendingSend(msgID)){return;}},_onSendError:function(msgID,response){if(!this._isCurrentPendingSend(msgID)){return;}
var payload=response.getPayload();var error=response.getError();var desc=presence.getErrorDescription(response);if(error==kError_Chat_SendOtherNotAvailable){this.lastMessageHadOfflineResponse=true;buddyList.setUnavailable(this.id);var pendingMsg=this.pendingSentMsgs[0];var pendingMsgID=pendingMsg.msgID;var msgElement=ge('msg_'+this.id+'_'+pendingMsgID);if(msgElement){var mesg;if(this.pendingSentMsgs.length>1){var texts=[];for(var i=0;i<this.pendingSentMsgs.length;i++){texts.push(this.pendingSentMsgs[i].text);}
mesg=texts.join('\n');desc=tx('cht14',{'name':this.firstName});}else{mesg=pendingMsg.text;}
var onclick=sprintf('onclick="message_dialog.show(%d, %e, %e); return false;"',this.id,'',mesg);var link=presence.renderLink(this.chatDisplay.messageURL+'&id='+this.id,tx('cht12'),onclick);var text=tx('cht11',{'send-as-a-message':link});if(this.pendingSentMsgs.length>1){desc+=text;}else{msgElement.innerHTML+=text;}}}
else if(error==kError_Chat_NotAvailable){this.lastMessageHadOfflineResponse=true;statusControl.setVisibility(false);presence.doSync();}
else if(error==kError_Chat_TooManyMessages){desc=payload.error.title;new ErrorDialog().showError(payload.error.title,payload.error.body);}
this._sendErrorAll(desc);},_renderMsgWarningMarkup:function(desc){return'<p class="chat_notice chat_msg_warning">'+
desc+'</p>';},_renderMsgErrorMarkup:function(desc){return'<p class="chat_notice chat_msg_not_sent">'+
desc+'</p>';},_sendErrorAll:function(desc){var errorMarkup=this._renderMsgErrorMarkup(desc);var isFirst=true;while(this.pendingSentMsgs.length){var pendingMsg=this.pendingSentMsgs.shift();pendingMsg.isError=true;if(isFirst){pendingMsg.infoMarkup=errorMarkup;}
this._setMsgInfoMarkup(pendingMsg.msgID,errorMarkup,'msg_error');this.failedSentMsgs.push(pendingMsg);isFirst=false;errorMarkup='';}},_sendError:function(msgID,desc){var errorMarkup=this._renderMsgErrorMarkup(desc);var pendingMsg=this.pendingSentMsgs.shift();pendingMsg.isError=true;pendingMsg.infoMarkup=errorMarkup;this._setMsgInfoMarkup(msgID,errorMarkup,'msg_error');this.failedSentMsgs.push(pendingMsg);this._popSendQueue();this._bumpSendingMessageDisplay(msgID);},sendInput:function(){var text=this.chatInput.value;if(!text||!text.match(/[^\s]/)){return;}
this.chatInput.value='';var msgID=rand32()+1;var time=presence.getTime();if(this.lastLogItem&&time<this.lastLogItem.time){time=this.lastLogItem.time+1;}
var pendingMsg={text:text,msgID:msgID,time:time,asyncSuccess:false,isError:false,errorMarkup:''};this.pendingSentMsgs.push(pendingMsg);if(this.pendingSentMsgs.length==1){this._sendMessage(pendingMsg,!channelManager.iframeEverLoaded);}
var msg={'text':text};var sendMarkup=this._renderMsg(presence.user,this.id,time,msg,msgID);this._addConvMarkup(sendMarkup);this.lastLogItem={'type':'msg','from':presence.user,'to':this.id,'time':time,'msg':msg};this.chatDisplay.chatActivityTime=(new Date()).getTime();presence.doSync();this._resetTypingState();},notifyTypingState:function(state){if(state!=this.typingRemoteState){this.typingRemoteState=state;presence.debug('tabs: notifyTyping('+state+')');if(!channelManager.iframeEverLoaded){return;}
var data={'typ':state,'to':this.id};new AsyncRequest().setHandler(bagofholding).setErrorHandler(bagofholding).setTransportErrorHandler(bagofholding).setData(data).setURI('/ajax/chat/typ.php').send();}},_sendMessage:function(pendingMsg,timeoutOnly){pendingMsg.time=presence.getTime();if(this.lastLogItem&&pendingMsg.time<this.lastLogItem.time){pendingMsg.time=this.lastLogItem.time+1;}
clearTimeout(this.sendingDisplayTimeout);clearTimeout(this.checkMessageSentTimeout);this.sendingDisplayTimeout=setTimeout(this._checkMessageSentShort.bind(this,pendingMsg.msgID),this.sendingDisplayDelay);this.checkMessageSentTimeout=setTimeout(this._checkMessageSentLong.bind(this,pendingMsg.msgID),this.sendingCheckDelay);if(timeoutOnly){return;}
var msgID=pendingMsg.msgID;var history=this.chatDisplay.histories[this.id];var lastConvoTime=null;if(history){for(var i=history.length-1;i>0;i--){if(history[i].type=='msg'){lastConvoTime=history[i].time;break;}}}
var sendData={'msg_text':pendingMsg.text,'msg_id':msgID,'client_time':pendingMsg.time,'to':this.id,'popped_out':presence.poppedOut,'num_tabs':this.chatDisplay.numTabs,'pvs_time':lastConvoTime};new AsyncRequest().setInitialHandler(this._onSendInitialHandler.bind(this)).setHandler(this._onSendResponse.bind(this,msgID)).setErrorHandler(this._onSendError.bind(this,msgID)).setTransportErrorHandler(this._onSendTransportError.bind(this,msgID)).setData(sendData).setURI('/ajax/chat/send.php').send();},_popSendQueue:function(){if(this.pendingSentMsgs.length==0){return;}
var pendingMsg=this.pendingSentMsgs[0];this._sendMessage(pendingMsg);},_checkMessageSentShort:function(msgID){if(this._isCurrentPendingSend(msgID)){this._setSendingDisplay(this.pendingSentMsgs[0]);}},_checkMessageSentLong:function(msgID){if(this._isCurrentPendingSend(msgID)){if(this.pendingSentMsgs[0].asyncSuccess){this._sendErrorAll(tx('pr04',{'Chat':tx('chd01')}));}else if(channelManager.iframeIsLoaded){presence.error('tabs: send took too long; resending and invalidating old one');this._sendMessage(this.pendingSentMsgs[0]);}else{presence.error("tabs: send took too long, but iframe isn't yet loaded.  will check again later.");setTimeout(this._checkMessageSentLong.bind(this,pendingMsg.msgID),this.sendingCheckDelay);}}},_bumpSendingMessageDisplay:function(msgID){if(msgID==this.sendingDisplayMsgID){this._setMsgInfoMarkup(msgID,'');if(this.pendingSentMsgs.length>0){this._setSendingDisplay(this.pendingSentMsgs[0]);}}},_setSendingDisplay:function(pendingMsg){this.sendingDisplayMsgID=pendingMsg.msgID;pendingMsg.infoMarkup='<p class="chat_notice sending">'+
tx('cht03')+'</p>';this._setMsgInfoMarkup(pendingMsg.msgID,pendingMsg.infoMarkup);},_setMsgInfoMarkup:function(pendingMsgID,markup,msgClass){var msgElement=ge('msg_'+this.id+'_'+pendingMsgID);if(!msgElement){return;}
var infoElement=ge('pending_'+this.id+'_'+pendingMsgID);if(infoElement){infoElement.innerHTML=markup;}
if(msgClass){CSS.addClass(msgElement,msgClass);}
this.scrollToBottom();},updateUserInfo:function(){var userInfo=this.chatDisplay.userInfos[this.id];this.chatInfoPic.src=userInfo.thumbSrc;var statusMarkup='&nbsp';var dateMarkup='&nbsp';var status;if(status=userInfo.status){if(status.length>this.maxStatusLen){status=status.substring(0,this.maxStatusLen-2)+'...';}
var time=userInfo.statusTimeRel;statusMarkup=html_hyperlink(status,this.statusTextProcessor,this.statusTextProcessor);dateMarkup=time;}
if(presence.isIE6){dateMarkup+='<br />&nbsp<br />&nbsp';}
this.chatInfoStatusTime.innerHTML=dateMarkup;this.chatInfoStatus.innerHTML=statusMarkup;CSS.removeClass(this.chatInfo,'hidden');},updateStatus:function(status,time,timeRel){var userInfo=this.chatDisplay.userInfos[this.id];userInfo.status=status;userInfo.statusTime=time;userInfo.statusTimeRel=timeRel;this.chatDisplay.userInfos[this.id]=userInfo;buddyList.updateItemDisplay(this.id);this.updateUserInfo(true);},tabHitAreaOnClick:function(){if(this.suppressHeaderCollapse){return;}
if(presence.inPopoutWindow){this.chatDisplay.focusTab(this.id,this.name,this.firstName);}else{this.chatDisplay.toggleTab(this.id,this.name,this.firstName);}
this.chatDisplay.doStopBlinking();},tabXOnClick:function(){this.chatDisplay.closeTab(this.id)
this.chatDisplay.doStopBlinking();},headerPicMouseOver:function(){CSS.addClass(this.chatHeader,'suppress_hover');this.suppressHeaderCollapse=true;},headerPicMouseOut:function(){CSS.removeClass(this.chatHeader,'suppress_hover');this.suppressHeaderCollapse=false;},chatConvOnMouseDown:function(event){event=event_get(event);if(event.button!=0){return;}
this.chatDisplay.doStopBlinking();this.convMouseMoved=false;},chatConvOnMouseMove:function(){this.convMouseMoved=true;},chatConvOnMouseUp:function(){if(!this.convMouseMoved){this.focusChatInput();}
this.convMouseMoved=false;},focusChatInput:function(){if(!this.tabDisabled&&this.isTabVisible()){this.chatInput.focus();}},_buildUI:function(){var tabCountID='this_count_'+this.id;var chatWindowWrapperID='chat_window_wrapper_'+this.id;var chatConvID='chat_conv_'+this.id;var chatHistoryErrorID='chat_history_error_'+this.id;var chatHeaderID='chat_header_'+this.id;var chatInfoID='chat_info_'+this.id;var chatInfoLinkID='chat_info_link_'+this.id;var chatInfoPicID='chat_info_pic_'+this.id;var chatInfoStatusID='chat_info_status_'+this.id;var chatInfoStatusTimeID='chat_info_status_time_'+this.id;var chatConvContentID='chat_conv_content_'+this.id;var chatInputID='chat_input_'+this.id;var chatShadowInputID='chat_shadow_input_'+this.id;var chatHeaderPicLinkMouseOver=' onmouseover="'+this.tabRef+'.headerPicMouseOver()" onmouseout="'+this.tabRef+'.headerPicMouseOut()"';var chatHeaderPicLink=presence.renderLink(this.chatDisplay.profileURL+'?id='+this.id,'<img class="chat_info_pic" id="'+chatInfoPicID+'" title="View Profile" style="display:block;">',chatHeaderPicLinkMouseOver);var chat=tx('chd01');var handleName=htmlize(this.trimName(this.maxHandleLen));var titleName=htmlize(this.trimName(this.maxTitleLen));var tabMarkupArr=['<div class="tab_button_div" ','onmouseover="CSS.addClass(this, \'hover\')" ','onmouseout="CSS.removeClass(this, \'hover\')">','<div title="',tx('chd02',{'Chat':chat}),'" ','class="tab_hit_area" ','onclick="',this.tabRef,'.tabHitAreaOnClick()">','<div class="tab_name">',handleName,'</div>','</div>','<div class="tab_count" id="',tabCountID,'"></div>','<div title="',tx('chd03',{'Chat':chat}),'" ','class="tab_x" ','onclick="',this.tabRef,'.tabXOnClick()" ','onmouseover="CSS.addClass(this, \'hover\')" ','onmouseout="CSS.removeClass(this, \'hover\')">','</div>','<div class="chat_window_wrapper" id="',chatWindowWrapperID,'">','<div class="chat_window">','<div class="chat_header" id="',chatHeaderID,'" onclick="',this.tabRef,'.tabHitAreaOnClick()">','<div class="header_buttons">','<a title="',tx('chd03',{'Chat':chat}),'" ','class="close" ','onmouseover="CSS.addClass($(\'',chatHeaderID,'\'), \'suppress_hover\')" ','onmouseout="CSS.removeClass($(\'',chatHeaderID,'\'), \'suppress_hover\')" ','onclick="',this.tabRef,'.tabXOnClick()">','</a>','<a title="',tx('chd04',{'Chat':chat}),'" ','class="minimize">','</a>','</div>',chatHeaderPicLink,'<div class="chat_header_name">',titleName,'</div>','</div>','<div class="chat_info" id="',chatInfoID,'">','<span class="chat_info_status" id="',chatInfoStatusID,'"></span><wbr />','<span class="chat_info_status_time" id="',chatInfoStatusTimeID,'"></span>','</div>','<div class="chat_conv" id="',chatConvID,'" ','onmousedown="',this.tabRef,'.chatConvOnMouseDown(event)" ','onmouseup="',this.tabRef,'.chatConvOnMouseUp()" ','onmousemove="',this.tabRef,'.chatConvOnMouseMove()">','<div class="chat_info_clear_history">','<span onclick="',this.tabRef,'.clearHistory();">',tx('cht08',{'Chat':chat}),'</span>','</div>','<div class="chat_notice" id="',chatHistoryErrorID,'" style="display:none">',tx('cht01'),'</div>','<div class="chat_conv_content" id="',chatConvContentID,'"></div>','</div>','<div class="chat_input_div">','<textarea class="chat_shadow_input" id="',chatShadowInputID,'"></textarea>','<div class="chat_input_icon"></div>','<textarea class="chat_input" id="',chatInputID,'" ','onclick="chatDisplay.doStopBlinking()" ','onkeydown="return ',this.tabRef,'.inputKeyDown(event)" ','onkeypress="return ',this.tabRef,'.inputKeyPress(event)" ','></textarea>','</div>','</div>','</div>','</div>'];this.tabHandle=document.createElement('div');var chatTabBar=ge('chat_tab_bar');var otherTab=null;for(var id in this.chatDisplay.tabs){otherTab=this.chatDisplay.tabs[id];}
if(otherTab){chatTabBar.insertBefore(this.tabHandle,otherTab.tabHandle);}else{chatTabBar.appendChild(this.tabHandle);}
this.tabHandle.id='tab_handle_'+this.id;this.tabHandle.className='tab_handle';this.tabHandle.style.width=this.handleWidth+'px';this.tabHandle.style.display='block';this.tabHandle.innerHTML=tabMarkupArr.join('');this.tabCount=ge(tabCountID);this.chatWrapper=ge(chatWindowWrapperID);this.chatConv=ge(chatConvID);this.chatHistoryError=ge(chatHistoryErrorID);this.chatHeader=ge(chatHeaderID);this.chatInfo=ge(chatInfoID);this.chatInfoLink=ge(chatInfoLinkID);this.chatInfoPic=ge(chatInfoPicID);this.chatInfoStatus=ge(chatInfoStatusID);this.chatInfoStatusTime=ge(chatInfoStatusTimeID);this.chatConvContent=ge(chatConvContentID);this.chatInput=ge(chatInputID);this.chatShadowInput=ge(chatShadowInputID);this.popoutChatTabs=presence.inPopoutWindow?ge('open_chats'):null;this._updateTabCount();},show:function(){this.tabHandle.style.display='block';},hide:function(){this.tabHandle.style.display='none';},inputKeyDown:function(event){event=event_get(event);this.chatDisplay.doStopBlinking();if(this.chatDisplay.gatedFeatures.typ_send){this._updateTyping.bind(this).defer();}
if(event.keyCode==KEYS.RETURN&&!event.shiftKey){if(this.chatInput.value){this.sendInput();}}
if(event.keyCode==KEYS.DELETE||event.keyCode==KEYS.BACKSPACE){this.handleResize.bind(this).defer();}},inputKeyPress:function(event){event=event_get(event);this.handleResize.bind(this).defer();if(event.keyCode==KEYS.RETURN&&!event.shiftKey){event.returnValue=false;return false;}},_updateTyping:function(){var state=this.typingState;if(this.chatInput.value.length==0){if(state==this.INACTIVE){}else{this._typingTransition(this.INACTIVE);}}
else if(state==this.TYPING){this._recordKeystroke();}
else if(state==this.INACTIVE){this._typingTransition(this.TYPING);this._recordKeystroke();}},_recordKeystroke:function(){this.typingLastKeystrokeAt=new Date();if(!this.typingCheckTimer){this.typingCheckTimer=setTimeout(this._checkTyping.bind(this),this.typingKeystrokeExpiry);}},_checkTyping:function(){var expiresAt=this.typingLastKeystrokeAt.valueOf()+this.typingKeystrokeExpiry;var now=new Date().valueOf();if(now>expiresAt){this._typingTransition(this.INACTIVE);}else{clearTimeout(this.typingCheckTimer);this.typingCheckTimer=setTimeout(this._checkTyping.bind(this),expiresAt-now+10);}},_typingTransition:function(newState){clearTimeout(this.typingCheckTimer);this.typingCheckTimer=null;typingLastKeystrokeAt=null;presence.debug('typing:'+this.typingState+' -> '+newState);this.typingState=newState;clearTimeout(this.typingNotifyTimer);this.typingNotifyTimer=setTimeout(this.notifyTypingState.bind(this,newState),this.typingNotifyDelay);},_resetTypingState:function(){presence.debug('typing: ** RESET **');this.typingState=this.INACTIVE;this.typingRemoteState=this.INACTIVE;this.typingLastKeystrokeAt=null;clearTimeout(this.typingNotifyTimer);this.typingNotifyTimer=null;clearTimeout(this.typingCheckTimer);this.typingCheckTimer=null;},trimName:function(maxLength){var name=this.name;if(name.length>maxLength){name=name.substring(0,maxLength-2)+'...';}
return name;},handleVisibility:function(onload){var justCameOnline=statusControl.visibility;if(statusControl.visibility){this._enableTab(true,false,justCameOnline,onload);}else{this._disableTab(true,justCameOnline,onload);}
this.handleBuddyAvailability(!onload&&justCameOnline,onload);},handleBuddyAvailability:function(justCameOnline,onload){if(!statusControl.visibility){return;}
var availability=buddyList.getAvailability(this.id);if(availability){this._enableTab(false,availability.i,justCameOnline,onload);}else{this._disableTab(false,justCameOnline,onload);}},_enableTab:function(isYou,isIdle,justCameOnline,onload){onload=onload||false;var wasDisabled=this.tabDisabled;this.tabDisabled=false;if(presence.inPopoutWindow){CSS.removeClass(this.popoutTab,'disabled');CSS.conditionClass(this.popoutTab,'idle',isIdle);}
CSS.removeClass(this.tabHandle,'disabled');CSS.conditionClass(this.tabHandle,'idle',isIdle);if((isYou&&!onload)||(!isYou&&wasDisabled&&!justCameOnline)){this._newVisibilityChange(isYou,onload,true);}},_disableTab:function(isYou,justCameOnline,onload){onload=onload||false;var wasDisabled=this.tabDisabled;this.tabDisabled=true;if(presence.inPopoutWindow){CSS.addClass(this.popoutTab,'disabled');CSS.removeClass(this.popoutTab,'idle');}
CSS.addClass(this.tabHandle,'disabled');CSS.removeClass(this.tabHandle,'idle');if((isYou||onload||!wasDisabled)&&!this.lastMessageHadOfflineResponse&&!justCameOnline){this._newVisibilityChange(isYou,onload,false);}},handleResize:function(){var newConvWidth;var newTextWidth;var newNotAvailWidth;var newTabHeight;var heightExtra=31;if(presence.inPopoutWindow){var popoutWidth=(presence.popoutWidth>330)?presence.popoutWidth:330;newConvWidth=popoutWidth-this.popoutWidthOffset;newTextWidth=popoutWidth-this.popoutWidthOffset-28;newNotAvailWidth=popoutWidth-this.popoutWidthOffset-16;newTabHeight=presence.popoutHeight-82;}else{newConvWidth=this.popinWidth;newTextWidth=this.popinWidth-28;newNotAvailWidth=this.popinWidth-8;newTabHeight=this.popinHeight;}
this.chatShadowInput.style.width=this.chatInput.style.width=newTextWidth+'px';this.chatShadowInput.value=this.chatInput.value;var textHeight=this.chatShadowInput.scrollHeight;if(!textHeight||presence.isOpera){textHeight=this.minTextHeight;if(this.chatInput.value){var re=new RegExp('([\n]|[^\n]{'+parseInt(newTextWidth/8)+'})','g');var matches=this.chatInput.value.match(re);if(matches){textHeight=(matches.length+1)*this.minTextHeight;}}
if(presence.isSafari2){textHeight+=8;}}
if(presence.isIE){textHeight-=6;}
if(textHeight>this.maxTextHeight){textHeight=this.maxTextHeight;}else if(textHeight<this.minTextHeight){textHeight=this.minTextHeight;}
if(this.tabDisabled){heightExtra+=15;}
if(presence.isSafari2){heightExtra-=7;}else if(presence.isIE6){if(this.tabDisabled){heightExtra+=4;}}
this.chatHeader.style.width=newConvWidth+'px';this.chatInfo.style.width=(newConvWidth-55)+'px';this.chatInput.style.height=textHeight+'px';this.chatConv.style.width=newConvWidth+'px';this.chatConv.style.height=(newTabHeight-heightExtra-textHeight)+'px';this.scrollToBottom();},isUserScrolled:function(){return(this.chatConv.scrollHeight>this.chatConv.scrollTop+this.chatConv.clientHeight);},scrollToBottom:function(){this.chatConv.scrollTop=this.chatConv.scrollHeight;},unfocus:function(){this.focused=false;CSS.removeClass(this.tabHandle,'focused');},focus:function(hidden,chatDisplayLoaded){if(this.focused){return;}
CSS.addClass(this.tabHandle,'focused');this.focused=true;if(!hidden){this._onFocusUIActions();setTimeout(this._onFocusUIActions.bind(this),100);}
if(!this.historyLoaded){this.getHistory(false);}
this._setNumMissed(0);this._stopBounce();},_onFocusUIActions:function(){this.focusChatInput();this.handleResize();if(presence.isIE6&&presence.inPopoutWindow){this.chatWrapper.style.top='72px';}},_startBounce:function(){if(presence.isFF2&&presence.isWindows){return;}
this.bounceAnimation=animation(this.tabCount).to('top',-11).duration(this.bounceDuration+40).checkpoint().to('top',this.bounceOrgPosition).duration(this.bounceDuration).checkpoint().to('top',-11).duration(this.bounceDuration+40).checkpoint().to('top',this.bounceOrgPosition).duration(this.bounceDuration).checkpoint().to('top',-7).duration(this.bounceDuration).checkpoint().to('top',-5).duration(this.bounceDuration).checkpoint().to('top',this.bounceOrgPosition).duration(this.bounceDuration).checkpoint().go();},_stopBounce:function(){if(this.bounceAnimation){this.bounceAnimation.stop();this.bounceAnimation=null;}},close:function(){this.tabHandle.parentNode.removeChild(this.tabHandle);this.closePopoutChat();},addPopoutChat:function(id){if(this.popoutChatTabs){this.popoutTab=document.createElement('div');this.popoutTab.id='popout_tab_'+this.id;this.popoutTab.className='popout_tab_button'
+(this.chatDisplay.gatedFeatures.typ_show?'':' vanilla')
+((id==this.chatDisplay.focused)?' highlight':'');var popoutCountID='popout_tab_count_'+this.id;this.popoutTab.innerHTML='<div class="popout_tab_hit_area" onClick="'+this.tabRef+'.tabHitAreaOnClick();">'+'<div id="'+popoutCountID+'" class="popout_tab_count"></div>'+'<div class="popout_tab_name">'+this.name+'</div>'+'</div>'+'<div class="popout_tab_x" onClick="'+this.tabRef+'.tabXOnClick()"></div>';this.popoutChatTabs.appendChild(this.popoutTab);this.popoutTabCount=ge(popoutCountID);show(ge('popout_chat_tabs'));}},closePopoutChat:function(){if(this.popoutChatTabs){this.popoutChatTabs.removeChild(this.popoutTab);if(this.popoutChatTabs.childNodes.length<=0){hide(ge('popout_chat_tabs'));}}},selectPopoutChat:function(){CSS.addClass(this.popoutTab,'highlight');},deselectPopoutChat:function(){CSS.removeClass(this.popoutTab,'highlight');},_newVisibilityChange:function(isYou,onload,online){var time=presence.getTime();var text;if(isYou){if(online){text=tx('cht13',{'name':this.firstName});}else{text=tx('cht06',{'name':this.firstName});}}else{if(online){text=tx('cht10',{'name':this.firstName});}else{text=tx('cht07',{'name':this.firstName});}}
var item={'type':'online','time':time,'text':text};var history=this.chatDisplay.getHistory(this.id,true);history.push(item);var markup=this._renderVisibilityChange(time,text);this._addConvMarkup(markup);this.lastLogItem=item;},newMinifeed:function(mfItem){if(mfItem.status){this.updateStatus(mfItem.status,mfItem.time,mfItem.statusTimeRel);}
if(this.lastLogItem&&this.lastLogItem.type=='mf'){return;}
var history=this.chatDisplay.getHistory(this.id,true);history.push(mfItem);var markup=this._renderMinifeed(mfItem.from,mfItem.time,mfItem.markup);this._addConvMarkup(markup);this.lastLogItem=mfItem;},newTyping:function(msgItem){var from=msgItem.from;var to=msgItem.to;var typ=msgItem.st;if(!this.chatDisplay.gatedFeatures.typ_show){return;}
else if((new Date()-this.lastMessageAt)<this.typingNotifyDelay){return;}
presence.debug('typing from '+from+': '+typ);var show_typing=(typ==this.TYPING)&&(this.numMissed==0);if(to!=this.id){if(presence.inPopoutWindow){CSS.conditionClass(this.popoutTab,'typing',show_typing);}
CSS.conditionClass(this.tabHandle,'typing',show_typing);buddyList.setAvailable(this.id);}},newMsg:function(msgItem){var from=msgItem.from;var to=msgItem.to;var msg=msgItem.msg;var time=msg.time;var clientTime=msg.clientTime;var msgID=msg.msgID;var shouldRender=true;this.lastMessageAt=new Date();var history=this.chatDisplay.getHistory(this.id,true);var lastMsg=null;for(var i=history.length-1;i>=0;i--){if(history[i].type=='msg'){lastMsg=history[i];break;}}
if(lastMsg&&time<=lastMsg.time){var found=false;for(var i=0;i<history.length;i++){if(history[i].type=='msg'&&time==history[i].time){found=true;break;}}
if(found){presence.warn('tabs: already had this msg');return;}
for(var i=history.length-1;i>=0;i--){var historyItem=history[i];if(historyItem.type=='msg'&&(historyItem.to!=to||(!historyItem.msg.clientTime||historyItem.msg.clientTime<clientTime))){break;}}
presence.warn('tabs: merging new msg due to out-of-order server timestamp');if(i==history.length-1){this.chatDisplay.histories[this.id].push(msgItem);}else{history.splice(i+1,0,msgItem);this._setHistory(history);shouldRender=false;}}else{this.chatDisplay.histories[this.id].push(msgItem);}
if(to!=this.id){if(this.chatDisplay.gatedFeatures.sound&&this.chatDisplay.isSoundWindow&&statusControl.getSetting('sound')){Sound.play('/sound/pop.mp3');}
buddyList.setAvailable(this.id);if(!this.focused){this._setNumMissed(this.numMissed+1);this._startBounce();}
if(presence.inPopoutWindow){CSS.removeClass(this.popoutTab,'typing');}
CSS.removeClass(this.tabHandle,'typing');}else{this._setNumMissed(0);for(var i=0;i<this.pendingSentMsgs.length;i++){if(msgID==this.pendingSentMsgs[i].msgID){var pendingMsg=this.pendingSentMsgs.splice(i,1);this._bumpSendingMessageDisplay(msgID);this._popSendQueue();shouldRender=false;break;}}}
if(shouldRender){var msgMarkup=this._renderMsg(from,to,time,msg);this._addConvMarkup(msgMarkup);this.lastLogItem=msgItem;}},_setNumMissed:function(numMissed){if(numMissed==this.numMissed){return;}
if(numMissed>99){numMissed=99;}
this.numMissed=numMissed;this._updateTabCount();},_updateTabCount:function(){this.tabCount.innerHTML=this.numMissed;if(this.numMissed>0){if(this.popoutTabCount){this.popoutTabCount.style.display='block';this.popoutTabCount.innerHTML=this.numMissed;}else{chatTabSlider.updateMissedCount();}
CSS.addClass(this.tabHandle,'highlight');this.tabCount.style.display='block';}else{if(this.popoutTabCount){this.popoutTabCount.style.display='none';}else{chatTabSlider.updateMissedCount();}
CSS.removeClass(this.tabHandle,'highlight');this.tabCount.style.display='none';}},_addConvMarkup:function(markup){var isUserScrolled=this.isUserScrolled();this.chatConvContent.innerHTML+=markup;if(!isUserScrolled){this.scrollToBottom();}},_renderDateBreak:function(time){var newDate=new Date();newDate.setTime(time);var shouldRender=false;var lastDate=new Date();if(this.lastLogItem){lastDate.setTime(this.lastLogItem.time);}
if(newDate.getDate()!=lastDate.getDate()||newDate.getMonth()!=lastDate.getMonth()){shouldRender=true;}
var markup='';if(shouldRender){var classname='date_divider';if(!this.lastLogItem){classname+=' first';}
markup='<div class="'+classname+'">'+
renderDate(newDate,!presence.inPopoutWindow)+'</div>';}
return markup;},_renderVisibilityChange:function(time,visibilityMarkup){var markup=this._renderDateBreak(time);markup+='<div class="visibility_change">'+'<span class="time_stamp">'+
this._renderServerTime(time)+'</span>'+
visibilityMarkup+'</div>';return markup;},_renderMinifeed:function(from,time,storyMarkup){var markup=this._renderDateBreak(time);markup+='<div class="minifeed">'+
storyMarkup+'</div>';return markup;},_renderMsg:function(from,to,time,msg,pendingMsgID,isError,errorMarkup){if(!CSS.hasClass(this.tabHandle,'history_loaded')){CSS.addClass(this.tabHandle,'history_loaded');}
var fromSelf=from!=this.id;var fromToSelf=fromSelf&&from==to;var msgClass=fromSelf&&!fromToSelf?'self':'other';var textProcessor=statusControl.showEmoticons?this.convTextEmoteProcessor:this.convTextProcessor;var htmlizedText=html_hyperlink(msg.text,textProcessor,this.convTextProcessor);var markup=this._renderDateBreak(time);if(!markup&&this.lastLogItem&&this.lastLogItem.type=='msg'&&this.lastLogItem.from==from&&time-this.lastLogItem.time<this.msgBunchTime){}else{var pic=this.chatDisplay.userInfos[from]&&presence.inPopoutWindow?'<img src="'+this.chatDisplay.userInfos[from].thumbSrc+'" class="pic" />':'';var name=fromSelf?htmlize(presence.firstName):presence.renderLink(this.chatDisplay.profileURL+'?id='+this.id,htmlize(this.firstName));var timeStr=this._renderServerTime(time);markup+='<h5 class="'+msgClass+'">'+
pic+' <span class="time_stamp ts_'+msgClass+'">'+timeStr+'</span>'+
name+'</h5>';}
if(pendingMsgID||errorMarkup){var pendingElementID=pendingMsgID?' id="pending_'+this.id+'_'+pendingMsgID+'"':'';markup+='<div'+pendingElementID+' class="pic_padding">'+
(errorMarkup?errorMarkup:'')+'</div>';}
var msgElementID=pendingMsgID?' id="msg_'+this.id+'_'+pendingMsgID+'"':'';msgClasses='p_'+msgClass+' pic_padding'+
(isError?' msg_error':'');markup+='<p'+msgElementID+' class="'+msgClasses+'">'+
htmlizedText+'</p>';return markup;},_processConvText:function(str){return html_wordwrap(str,this.convWrapLimit);},_processConvTextEmote:function(str){return Emote.htmlEmote(str,this.convTextProcessor);},_processStatusText:function(str){return html_wordwrap(str,this.statusWrapLimit);},_renderServerTime:function(serverTimeMS){var time=new Date();time.setTime(serverTimeMS+presence.timeSkew);var hours=time.getHours();var ampm='am';if(hours>=12){ampm='pm';}
if(hours==0){hours=12;}else if(hours>12){hours-=12;}
var minutes=time.getMinutes();if(minutes<10){minutes='0'+minutes;}
var timeStr=hours+':'+minutes+ampm;return timeStr;}};function renderDate(date,showRelative){if(showRelative){var today=new Date();today.setHours(0);today.setMinutes(0);today.setSeconds(0);today.setMilliseconds(0);var dayMilliseconds=24*60*60*1000;var diff=today.getTime()-date.getTime();if(diff<=0){return tx('dt:today');}else if(diff<dayMilliseconds){return tx('dt:yesterday');}}
var month='';switch(date.getMonth()){case 0:month=tx('dt:january');break;case 1:month=tx('dt:february');break;case 2:month=tx('dt:march');break;case 3:month=tx('dt:april');break;case 4:month=tx('dt:may');break;case 5:month=tx('dt:june');break;case 6:month=tx('dt:july');break;case 7:month=tx('dt:august');break;case 8:month=tx('dt:september');break;case 9:month=tx('dt:october');break;case 10:month=tx('dt:november');break;case 11:month=tx('dt:december');break;}
return tx('dt:monthdate',{'month':month,'date':date.getDate()});}

function fbChatTabSlider(){this.handleWidth=141;this.animationTime=210;this._init();}
fbChatTabSlider.prototype={_init:function(){this.org_s=0;this.numToShow=0;this.numShift=1;this.shiftByNumTabs=false;this.timer=null;this.skipAnimation=false;this.chatWidth=null;this.tabPos={};this.chat=ge('chat');this.chatTabBar=ge('chat_tab_bar');this.nextTab=ge('chat_next_tab');this.prevTab=ge('chat_previous_tab');this.nextCounter=ge('next_count');this.prevCounter=ge('prev_count');this.numNext=0;this.numPrev=0;this.prevTabs={};this.nextTabs={};this.numMissedNextCounter=ge('next_num_missed');this.numMissedPrevCounter=ge('prev_num_missed');presence.registerStateLoader(this._load.bind(this));presence.registerStateStorer(this._store.bind(this));presence.registerResizeHandler(this._resize.bind(this));},load:function(){this._load(presence.state);this._resize(true);},_load:function(presenceState){var s=0;if(presenceState){s=(presenceState.s?presenceState.s:s);}
this._setPos(s);},_store:function(presenceState){presenceState.s=this._s;return presenceState;},_calculate:function(onload){this._setMaxWidth();if(onload)this.maxWidth-=16;if(presence.poppedOut){this.numToShow=chatDisplay.numTabs;}else{this.numToShow=parseInt(this.maxWidth/this.handleWidth);this.numToShow=this.numToShow>0?this.numToShow:1;}
if(this.shiftByNumTabs)this.numShift=this.numToShow;if(this._s!=null)this._setPos(this._s);},_setMaxWidth:function(){var w=document.body.offsetWidth;var divs=['buddy_list_tab','status_control_tab','presence_notifications_tab'];for(var i=0;i<divs.length;i++){w-=(ge(divs[i])&&$(divs[i]).clientWidth!=undefined)?ge(divs[i]).clientWidth:0;}
this.maxWidth=(presence.poppedOut?w-254:w-138);},_setPos:function(val){if(val<0){val=0;}
this._s=val;this._e=this._s+this.numToShow;},_doSync:function(){var changed=(this.org_s!=this._s);this.org_s=0;if(changed){presence.doSync();}},_build:function(){if(presence.poppedOut){return;}
var all=(this.numToShow>=chatDisplay.numTabs)?true:false;this.setVisibleTabs(all);if(all){this.resetCounters();}else{this.updateCounters();}
this.updateMissedCount();},_resize:function(onload){this.org_s=this._s;this._calculate(onload);this._build();this._doSync();if(chatDisplay.lastFocused!=null){this.gotoTab(chatDisplay.lastFocused);}},addTab:function(id){this._build();},gotoTab:function(id){if(this.tabPos[id]!=0&&!this.tabPos[id])return;var n=parseInt(this.tabPos[id]);if(!this._inRange(n)){var p=(n-this.numToShow)+1;this._setPos(p);this._build();}},close:function(id){if(this.tabPos[id]!=0&&!this.tabPos[id])return;delete this.tabPos[id];this._setPos(((this.numPrev>0||this.numNext>0)&&this._s>0)?this._s-1:0);this._calculate();this._build();},setVisibleTabs:function(all){var c=0;for(var id in chatDisplay.tabs){this.tabPos[id]=c;if(this._inRange(c,id)||all==true){chatDisplay.tabs[id].show();}else{chatDisplay.tabs[id].hide();}
c++;}},_inRange:function(n,id){var s,e=false;if(n>=this._s){s=true;delete this.prevTabs[id];}else{this.prevTabs[id]=id;}
if(n<this._e){e=true;delete this.nextTabs[id];}else{this.nextTabs[id]=id;}
return(s&&e);},updateMissedCount:function(){var prev=0;var next=0;for(var id in this.prevTabs){prev+=chatDisplay.tabs[id]?chatDisplay.tabs[id].numMissed:0;}
this.numMissedPrevCounter.innerHTML=prev;this.numMissedPrevCounter.style.display=prev>0?'block':'none';for(var id in this.nextTabs){next+=chatDisplay.tabs[id]?chatDisplay.tabs[id].numMissed:0;}
this.numMissedNextCounter.innerHTML=next;this.numMissedNextCounter.style.display=next>0?'block':'none';},updateCounters:function(){this.numNext=chatDisplay.numTabs-this._e;this.numPrev=this._s;if(this.numNext<=0){this.numNext=0;add_css_class_name(this.nextTab,'disabled');}else{remove_css_class_name(this.nextTab,'disabled');}
if(this.numPrev<=0){this.numPrev=0;add_css_class_name(this.prevTab,'disabled');}else{remove_css_class_name(this.prevTab,'disabled');}
if(this.numPrev>0||this.numNext>0){show('chat_next_tab');show('chat_previous_tab');}else{hide('chat_next_tab');hide('chat_previous_tab');}
this.nextCounter.innerHTML=this.numNext;this.prevCounter.innerHTML=this.numPrev;},resetCounters:function(){this._setPos(0);this.updateCounters();},shift:function(num){this.org_s=this._s;chatDisplay.unfocusNoSync();this._shift.bind(this,num).defer();},_shift:function(num){this._setPos(this._s<0?0:this._s+num);this._slide(num);if(this.timer||this.skipAnimation){this._slideReset();this.skipAnimation=true;var t=setTimeout(function(){this.skipAnimation=false;}.bind(this),500);}else{this.timer=setTimeout(function(){this._slideReset();}.bind(this),this.animationTime);}},_slide:function(num){this._slideSetup(false);this.setVisibleTabs(true);this.slideInc=(num*(this.handleWidth));this.leftPos=-(num)*(this.numNext*(this.slideInc));this.chatTabBar.style.left=this.leftPos+'px';animation(this.chatTabBar).by('left',this.slideInc).duration(this.animationTime-10).go();},_slideSetup:function(reset){this.chat.style.position=reset?'':'relative';this.chat.style.overflow=reset?'visible':'hidden';if(!this.chatWidth){this.chatWidth=this.chatTabBar.clientWidth;}
if(reset){this.chatWidth=null;}
this.chat.style.width=reset?'':this.chatWidth+'px';this.chatTabBar.style.width=reset?'':chatDisplay.numTabs*this.handleWidth+'px';this.chatTabBar.style.position=reset?'':'absolute';},_slideReset:function(){clearTimeout(this.timer);this.timer=null;this._slideSetup(true);this._build();if(chatDisplay.lastFocused){if(this._inRange(this.tabPos[chatDisplay.lastFocused])){chatDisplay.refocus();}else{chatDisplay.lastFocused=null;}}
this._doSync();},next:function(){if(this.numNext<=0){return;}
this.shift(this.numShift);},prev:function(){if(this.numPrev<=0){return;}
this.shift(-this.numShift);}};

function fbStatusControl(visibility){this.user=presence.user;this.visibility=visibility;this.poppedOut=presence.poppedOut;this._init();}
fbStatusControl.prototype={_init:function(){this.visibilityHandlers=[];this.visibilityAsync=null;this.statusControlTab=ge('chat_status_control_tab');this.availabilityToggle=ge('chat_availability_toggle');this.availabilityToggleImage=ge('chat_availability_toggle_image');this.showEmoticons=true;presence.registerStateStorer(this._storeState.bind(this));presence.registerStateLoader(this._loadState.bind(this));},registerVisibilityHandler:function(fn){this.visibilityHandlers.push(fn);},_storeState:function(presenceState){presenceState.vis=this.visibility;presenceState.smf=this.getSetting('minifeed');presenceState.bls=this.getSetting('sticky_buddylist');presenceState.blc=this.getSetting('compact_buddylist');presenceState.snd=this.getSetting('sound');return presenceState;},_loadState:function(presenceState){if(presenceState.vis!=this.visibility){this.setVisibility(presenceState.vis);}
this.setSetting('minifeed',presenceState.smf);this.setSetting('sticky_buddylist',presenceState.bls);this.setSetting('compact_buddylist',presenceState.blc);this.setSetting('sound',presenceState.snd);},_updateAvailabilityUI:function(availability){if(availability==2){availability=1;}
if(!presence.poppedOut){if(availability==0&&chatDisplay.numTabs<=0){presence.setHolderClass('');}else{presence.setHolderClass('full');}}
var classes=new Array('unavailable','available','idle');for(var i=0;i<=classes.length;i++){if(i==availability){add_css_class_name(this.availabilityToggle,classes[i]);if(this.statusControlTab){add_css_class_name(this.statusControlTab,classes[i]);}}else{remove_css_class_name(this.availabilityToggle,classes[i]);if(this.statusControlTab){remove_css_class_name(this.statusControlTab,classes[i]);}}}},_setIdle:function(){this._updateAvailabilityUI(2);},setVisibility:function(visibility){if(visibility==this.visibility){return;}
this.visibility=visibility;if(visibility){this._updateAvailabilityUI(1);channelManager.isActionRequest=true;channelManager.rebuild(ChannelRebuildReasons.UIRestart);}else{this._updateAvailabilityUI(0);channelManager.setReady(false);}
for(var i=0;i<this.visibilityHandlers.length;i++){this.visibilityHandlers[i]();}},_onVisibilityResponse:function(newVisibility,response){presence.pauseSync();this.setVisibility(newVisibility);remove_css_class_name(this.availabilityToggleImage,'availability_loading');if(!presence.inPopoutWindow&&!newVisibility){chatDisplay.unfocus();}
presence.resumeSync();},_onVisibilityError:function(response){var chat=tx('chd01');presence.showAsyncError(response,tx('chs01',{'Chat':chat}));remove_css_class_name(this.availabilityToggleImage,'availability_loading');},sendVisibility:function(visibility){if(this.visibility==visibility){return;}
add_css_class_name(this.availabilityToggleImage,'availability_loading');this.visibilityAsync=new AsyncRequest().setHandler(this._onVisibilityResponse.bind(this,visibility)).setErrorHandler(this._onVisibilityError.bind(this)).setTransportErrorHandler(this._onVisibilityError.bind(this)).setData({'visibility':visibility}).setURI(chatDisplay.settingsURL).send();},getSetting:function(name){return $('chat_setting_checkbox_'+name).checked?1:0;},setSetting:function(name,value){if(this.getSetting(name)==value){return;}
$('chat_setting_checkbox_'+name).checked=value;if(name=='minifeed'){chatDisplay.reloadTabs();}
if(name=='compact_buddylist'){buddyList.setCompactDisplay(value);}},_onSettingChangeResponse:function(name,value,response){this.setSetting(name,value);CSS.removeClass($('chat_setting_'+name),'chat_setting_loading');presence.doSync();},_onSettingChangeError:function(name,response){presence.showAsyncError(response,tx('chs02'));CSS.removeClass($('chat_setting_'+name),'chat_setting_loading');},sendSettingChange:function(name,value){CSS.addClass($('chat_setting_'+name),'chat_setting_loading');var data={};data[name]=value;new AsyncRequest().setHandler(this._onSettingChangeResponse.bind(this,name,value)).setErrorHandler(this._onSettingChangeError.bind(this,name)).setTransportErrorHandler(this._onSettingChangeError.bind(this,name)).setData(data).setURI(chatDisplay.settingsURL).send();}};

function fbBuddyList(){this.user=presence.user;this.shouldRender=true;this.haveFullList=false;this.errorMode=false;this.shouldShowLoading=false;this.availableCount=0;this.availableList={};this.sortedList=[];this.listChanged=false;this.updateTime=0;this.flMode=false;this.flData={};this.otherFriendsFlid=-1;this.justCameOnline=false;this.maxNameLen=20;this.maxStatusLen=presence.inPopoutWindow?22:28;this.backgroundColor=presence.inPopoutWindow?'#f7f7f7':'#fff';}
fbBuddyList.prototype={uiUpdateListMaxTime:30000,maxItemsToAnimate:10,highlightColor:'#fffbe2',expandAnimDuration:400,compactItemHeight:18,fullItemHeight:31,initError:function(){this.errorMode=true;this._init();},initNoRender:function(availableCount,availableList,updateTime,listChanged){this.shouldRender=false;this.shouldShowLoading=true;this.availableCount=availableCount;this.availableList=availableList;this.updateTime=updateTime;this.listChanged=listChanged;this._init();if(presence.inPopoutWindow){this._forceUpdate.bind(this).defer();}},initFullList:function(availableList,updateTime,listChanged,flMode,flData){this.availableList=availableList;this.updateTime=updateTime;this.listChanged=listChanged;this.haveFullList=true;this.flMode=flMode;this.flData=flData;this.availableCount=object_key_count(this.availableList);this._init();},_init:function(){this.availabilityHandlers=[];this.loaded=false;this.poppedOut=presence.poppedOut;this.buddyListOpen=false;this.updateDiff=0;this.rendered=false;this.showingError=false;this.numRequestFailures=0;this.uiUpdateList={};for(var id in this.availableList){this.availableList[id].i=this.availableList[id].i?1:0;}
this.tabID='buddy_list_tab';this.wrapperID='buddy_list';this.contentID='buddy_list_content';this.tabDiv=ge(this.tabID);this.wrapperDiv=ge(this.wrapperID);this.contentDiv=ge(this.contentID);this.buddyListError=ge('buddy_list_error');this.buddyCountSpan=ge('buddy_count');presenceUpdater.register('buddy_list',this._checkUpdater.bind(this),this._onUpdaterResponse.bind(this),this._onUpdaterError.bind(this),this._onUpdaterError.bind(this));presenceCookieManager.register('bl',this._getCookieData.bind(this));presence.registerStateStorer(this._storeState.bind(this));presence.registerStateLoader(this._loadState.bind(this));presence.registerTabOpenHandler(this._tabOpened.bind(this));presence.registerMsgHandler(this._handleMsg.bind(this));statusControl.registerVisibilityHandler(this._handleVisibility.bind(this));this.setCompactDisplay(statusControl.getSetting('compact_buddylist'));this._loadState(presence.state);(function(){if(presence.inPopoutWindow){this._firstRender();}
this._updateCount();this.updateDiff=this._computeUpdateTimeDiff();}).bind(this).defer();},registerAvailabilityHandler:function(fn){this.availabilityHandlers.push(fn);},_storeState:function(presenceState){presenceState.blo=this.buddyListOpen?1:0;presenceState.bvt=parseInt(this.buddyViewTime*0.001);return presenceState;},_loadState:function(presenceState){this.buddyViewTime=verifyNumber(presenceState.bvt)*1000;var openBuddyList=verifyBool(presenceState.blo);if(!presence.poppedOut&&this.poppedOut){this._showLoading();this._forceUpdate();}
this.poppedOut=presence.poppedOut;var fn=null;if(!this.poppedOut){if(openBuddyList){fn=this.openTab.bind(this);}else{fn=this.closeTab.bind(this);}}
if(fn){if(this.loaded){fn();}else{fn.defer();}}
this.loaded=true;},setCompactDisplay:function(isCompact){this.isCompactDisplay=isCompact;if(this.isCompactDisplay){this.itemHeight=this.compactItemHeight;}else{this.itemHeight=this.fullItemHeight;}
if(this.rendered){this._render();}},_handleVisibility:function(){if(statusControl.visibility){this._showLoading();this.show();this._forceUpdate();this.justCameOnline=true;}else{this.hide();}},_handleMsg:function(channel,obj){if(obj.type=='fl_settings'){if(!this._flChanged(obj.fl_mode,obj.fl_data)){return true;}
this._onFlChange(obj.fl_mode,obj.fl_data);return true;}
return false;},_flChanged:function(newFlMode,newFlData){return(newFlMode!=this.flMode||!are_equal(newFlData,this.flData));},_massageNowAvailableList:function(nowAvailableList,newFlMode,newFlData){for(var id in nowAvailableList){var buddyInfo=nowAvailableList[id];if(newFlMode!=this.flMode){if(newFlMode){delete buddyInfo.fl;}else{buddyInfo['fl']=[this.otherFriendsFlid];}}else{var flids=buddyInfo.fl||[];for(var i=0;i<flids.length;i++){var flid=flids[i];if(typeof this.flData[flid]=='undefined'){buddyInfo.fl.remove(flid);}}
if(buddyInfo.fl.length==0){buddyInfo.fl=[this.otherFriendsFlid];}}
nowAvailableList[id]=buddyInfo;}
return nowAvailableList;},_onFlChange:function(newFlMode,newFlData){var toAddFlids=[];var toRemoveFlids=[];var onlineFlids=[];var offlineFlids=[];var allFlids=[];if(this.flMode&&this.flMode==newFlMode){var groupedList=this._groupAvailableListByFl(true);for(var flid in newFlData){flid=parseInt(flid,10);if(typeof this.flData[flid]=='undefined'){toAddFlids.push(flid);onlineFlids.push(flid);}else{if(this.flData[flid].o!=newFlData[flid].o){if(newFlData[flid].o){onlineFlids.push(flid);}else{offlineFlids.push(flid);}}}
allFlids.push(flid);}
for(var flid in this.flData){flid=parseInt(flid,10);if(typeof newFlData[flid]=='undefined'){toRemoveFlids.push(flid);}}
this.flMode=newFlMode;if(toRemoveFlids.length!=0){this._removeFlidsFromBuddyList(toRemoveFlids,groupedList);this._removeFlidsFromDOM(toRemoveFlids);}
if(offlineFlids.length!=0){this._goOfflineToLists(offlineFlids,true);}
this.flData=newFlData;if(toAddFlids.length!=0){this._addFlidsToDOM(toAddFlids,allFlids,groupedList);}
if(onlineFlids.length!=0){this._goOnlineToLists(onlineFlids,true);}}else if(this.flMode&&this.flMode!=newFlMode){var groupedList=this._groupAvailableListByFl(true);for(var flid in this.flData){flid=parseInt(flid,10);toRemoveFlids.push(flid);allFlids.push(flid);}
this._addFlidsToDOM([null],allFlids);this.flMode=newFlMode;this.flData=newFlData;this._removeFlidsFromBuddyList(toRemoveFlids,groupedList);this._removeFlidsFromDOM(toRemoveFlids);}else{for(var flid in newFlData){flid=parseInt(flid,10);toAddFlids.push(flid);if(newFlData[flid].o){onlineFlids.push(flid);}
allFlids.push(flid);}
this._removeFlidsFromDOM([null]);this.flMode=newFlMode;this.flData=newFlData;this._addFlidsToDOM(toAddFlids,allFlids,this._groupAvailableListByFl(true,true));if(onlineFlids.length>0){this._goOnlineToLists(onlineFlids,true);}}},_addFlidsToDOM:function(flids,allFlids,groupedList){groupedList=groupedList||this._groupAvailableListByFl(true);var prevIndex=allFlids.indexOf(flids[0]);var prevFlid=allFlids[prevIndex-1];var firstFlid=allFlids.shift();var lastFlid=allFlids.pop();var parentOfThemAll=$('buddy_list_parent');for(var i=0;i<flids.length;i++){var flid=flids[i];var elem;var emptyText=tx('chb03');if(this.flMode&&flid){var online=this.flData[flid].o;var prevElem;elem=document.createElement('li');elem.id=this._getFriendListId(flid);elem.className=online?'friend_list online':'friend_list offline';elem.innerHTML=this._renderFriendListItem(flid);if(firstFlid==flid){prependChild(parentOfThemAll,elem);}else{var ids=groupedList[prevFlid]||[];if(ids.length!=0){prevElem=ge(this._getBuddyListItemId(ids.pop(),prevFlid));}else{prevElem=ge(this._getIdleMarkerId(prevFlid));}
insertAfter(parentOfThemAll,prevElem,elem);}
if(!online){emptyText=tx('chb09',{'friend-list-name':this.flData[flid].n});}}
var emptyItem=document.createElement('li');emptyItem.id=this._getBuddyListEmptyItemId(flid);emptyItem.className='info_text';emptyItem.innerHTML=emptyText;if(this.flMode&&flid){insertAfter(parentOfThemAll,elem,emptyItem);}else{prependChild(parentOfThemAll,emptyItem);}
var availMarker=document.createElement('li');availMarker.id=this._getAvailableMarkerId(flid);insertAfter(parentOfThemAll,emptyItem,availMarker);var idleMarker=document.createElement('li');idleMarker.id=this._getIdleMarkerId(flid);idleMarker.className='subheader hide_idle_marker';insertAfter(parentOfThemAll,availMarker,idleMarker);prevFlid=flid;}},_removeFlidsFromDOM:function(flids){for(var i=0;i<flids.length;i++){var flid=flids[i];DOM.remove($(this._getBuddyListEmptyItemId(flid)));DOM.remove($(this._getAvailableMarkerId(flid)));DOM.remove($(this._getIdleMarkerId(flid)));if(flid){DOM.remove($(this._getFriendListId(flid)));}}},loadTypeahead:function(){this.typeahead=new fbBuddyListTypeahead($("buddy_list_typeahead_input"));},resizeTab:function(force){if(this.resizeFrozen){if(force){this.resizeFrozen=false;}else{return;}}
presence.tabContentResize(this.wrapperID,this.contentID);},freezeTabSize:function(){if(this.resizeFrozen||this.showingError){return;}
this.resizeFrozen=true;presence.tabContentResize(this.wrapperID,this.contentID,true);},unfreezeTabSize:function(){if(!this.resizeFrozen){return;}
this.resizeFrozen=false;this.resizeTab();presence.contentChanged(this.contentID);},hide:function(){if(presence.inPopoutWindow){CSS.addClass(presence.popoutSidebar,'buddy_list_hidden');}else{CSS.addClass(presence.holder,'buddy_list_hidden');}},show:function(){if(presence.inPopoutWindow){CSS.removeClass(presence.popoutSidebar,'buddy_list_hidden');}else{CSS.removeClass(presence.holder,'buddy_list_hidden');}},toggleTab:function(){if(CSS.hasClass(presence.holder,'buddy_list_hidden')){return;}
if(!this.buddyListOpen){this.openTab(true);}else{this.closeTab();}},openTab:function(focusTypeahead){if(this.buddyListOpen){return;}
if(CSS.hasClass(presence.holder,'buddy_list_hidden')){this.buddyListOpen=false;return;}
if(!this.rendered){var availableList=this.availableList;this.availableList={};this.shouldShowLoading=true;this._firstRender();presence.openTab(this.wrapperID,this.tabID);this.availableList=availableList;if(this.haveFullList){this._render.bind(this).defer();setTimeout(this._availableListChanged.bind(this,true),10);}}else{presence.openTab(this.wrapperID,this.tabID,this.contentID);}
this.buddyListOpen=true;setTimeout(this._openTabPostProcess.bind(this,focusTypeahead),50);},_openTabPostProcess:function(focusTypeahead){this.buddyViewTime=(new Date()).getTime();var sinceLastUpdate=(presence.getTime()-this.updateTime)*0.001;if(this.showingError||sinceLastUpdate>presence.sitevars.BUDDY_VIEW_FETCH_WINDOW){this._forceUpdate();}
presence.doSync();if(focusTypeahead){this.typeahead.focusInput();}},closeTab:function(){if(!this.buddyListOpen){return;}
this.buddyListOpen=false;presence.toggleTab(this.wrapperID,this.tabID,this.contentID);setTimeout(this._closeTabPostProcess.bind(this),50);},_closeTabPostProcess:function(){this.typeahead.resetSearch(true);this.buddyViewTime=(new Date()).getTime();presence.doSync();},_tabOpened:function(){if(!this.buddyListOpen){return;}
this.buddyListOpen=false;this.buddyViewTime=(new Date()).getTime();presence.doSync();},getAvailability:function(id){if(id==this.user){return statusControl.visibility;}
if(typeof this.availableList[id]!='undefined'){return this.availableList[id];}else{return null;}},setAvailable:function(id){var availability=this.getAvailability(id);if(availability&&availability.i==0){return;}
var availDiff={};availDiff[id]={i:0};if(this.flMode){availDiff[id]['fl']=[this.otherFriendsFlid];}
var wasAvail=[];if(availability&&availability.i==1){wasAvail.push(id);}
this._updateAvailableListWithDiff(availDiff,wasAvail);this.uiUpdateList[id]=presence.getTime();},setFlids:function(id,flids){if(!this.getAvailability(id)){return;}
if(this.availableList[id].fl[0]==this.otherFriendsFlid){var nowAvail={};nowAvail[id]=this.availableList[id];nowAvail[id]['fl']=flids;this._updateAvailableListWithDiff(nowAvail,[],this.otherFriendsFlid);}},setUnavailable:function(id){this._removeFromBuddyList([id],true);},_removeFromBuddyList:function(ids,updateUiList,flid){var toRemove=[];for(var i=0;i<ids.length;i++){var id=ids[i];if(!this.getAvailability(id)){continue;}
if(updateUiList){this.uiUpdateList[id]=presence.getTime();}
toRemove.push(id);}
if(toRemove.length>0){this._updateAvailableListWithDiff({},toRemove,flid);}},hideBuddy:function(id){this._toggleBuddy(id,false);},_toggleBuddy:function(id,show,flids){flids=flids||this._getUserFlids(id);var newDisplay=show?'block':'none';for(var i=0;i<flids.length;i++){var flid=flids[i];var listItem=ge(this._getBuddyListItemId(id,flid));if(listItem){listItem.style.display=newDisplay;}}},showBuddyItem:function(id,showAll){showAll=showAll||false;var flids=this._getUserFlids(id);if(flids.length>1&&!showAll){var hideFlids=flids.slice(1);this._toggleBuddy(id,false,hideFlids);flids=flids.splice(1);}
this._toggleBuddy(id,true,flids);},getBuddyItem:function(id){var flids=this._getUserFlids(id);return ge(this._getBuddyListItemId(id,flids[0]));},getBuddyItemName:function(id){var flids=this._getUserFlids(id);return ge(this._getBuddyListItemNameId(id,flids[0]));},updateBuddyItemName:function(id){var userInfo=chatDisplay.userInfos[id];var name=userInfo.name;var nameCapped;if(name.length>this.maxNameLen){nameCapped=name.substring(0,this.maxNameLen-2)+'...';}else{nameCapped=name;}
this.getBuddyItemName(id).innerHTML=nameCapped;},showEmptySearch:function(){show('buddy_list_empty_search');},hideEmptySearch:function(){hide('buddy_list_empty_search');},getSortedList:function(){if(this.sortedList.length==0&&object_key_count(this.availableList)==this.availableCount){this.sortedList=this._sort(object_keys(this.availableList));}
return this.sortedList;},suppressNonFriendInfoInBuddyList:function(){var globalFlids=this._getGlobalFlids();for(var i=0;i<globalFlids.length;i++){var flid=globalFlids[i];var idleMarker=ge(this._getIdleMarkerId(flid));if(idleMarker){CSS.addClass(idleMarker,'suppress');}
if(this.flMode&&flid){CSS.addClass($(this._getFriendListId(flid)),'suppress');CSS.addClass($(this._getBuddyListEmptyItemId(flid)),'suppress');}}},unsuppressNonFriendInfoInBuddyList:function(){var globalFlids=this._getGlobalFlids();for(var i=0;i<globalFlids.length;i++){var flid=globalFlids[i];var idleMarker=ge(this._getIdleMarkerId(flid));if(idleMarker){CSS.removeClass(idleMarker,'suppress');}
if(this.flMode&&flid){CSS.removeClass($(this._getFriendListId(flid)),'suppress');CSS.removeClass($(this._getBuddyListEmptyItemId(flid)),'suppress');}}},_updateCount:function(){if(this.buddyCountSpan){this.buddyCountSpan.innerHTML=tx('chb02',{'number-available':'<span class="buddy_count_num">(<strong>'+this.availableCount+'</strong>)</span>'});}},_getCookieData:function(){var availableListCache={};for(var id in chatDisplay.tabs){if(this.availableList[id]){availableListCache[id]=this.availableList[id];}}
var buddyState={'ac':this.availableCount,'al':availableListCache,'ut':parseInt(this.updateTime*0.001),'ud':parseInt(this.updateDiff),'lc':this.listChanged?1:0};return buddyState;},_computeUpdateTimeDiff:function(){if(!statusControl.visibility||(presence.poppedOut&&!presence.inPopoutWindow)){return Math.round(presence.sitevars.BUDDY_MAX_TIME);}
var newUpdateTime=presence.sitevars.BUDDY_BASE_TIME;var now=presence.getTime();if(!chatDisplay.everSentMessage){newUpdateTime+=presence.sitevars.BUDDY_COST_NEVER_SENT_MESSAGE;}
if(!this.listChanged){newUpdateTime+=presence.sitevars.BUDDY_COST_NO_LIST_CHANGE;}
if(chatTabSlider.numTabs==0){newUpdateTime+=presence.sitevars.BUDDY_COST_NO_CHAT_TABS;}
var chatActivityMins=(now-chatDisplay.chatActivityTime)/60000;if(chatActivityMins>presence.sitevars.BUDDY_MAX_ACTIVITY_MINS){chatActivityMins=presence.sitevars.BUDDY_MAX_ACTIVITY_MINS;}
newUpdateTime+=(presence.sitevars.BUDDY_COST_CHAT_ACTIVITY/presence.sitevars.BUDDY_MAX_ACTIVITY_MINS)*chatActivityMins;if(!presence.poppedOut){var pageLoadMins=(now-presence.pageLoadTime)/60000;if(pageLoadMins<chatActivityMins){if(pageLoadMins>presence.BUDDY_MAX_ACTIVITY_MINS){pageLoadMins=presence.BUDDY_MAX_ACTIVITY_MINS;}
newUpdateTime+=(presence.sitevars.BUDDY_COST_PAGE_ACTIVITY/presence.sitevars.BUDDY_MAX_ACTIVITY_MINS)*pageLoadMins;}
if(!this.buddyListOpen){var buddyViewMins=(now-this.buddyViewTime)/60000;if(buddyViewMins>presence.sitevars.BUDDY_MAX_ACTIVITY_MINS){buddyViewMins=presence.sitevars.BUDDY_MAX_ACTIVITY_MINS;}
newUpdateTime+=(presence.sitevars.BUDDY_COST_VIEW_ACTIVITY/presence.sitevars.BUDDY_MAX_ACTIVITY_MINS)*buddyViewMins;}}
if(!newUpdateTime||newUpdateTime>presence.sitevars.BUDDY_MAX_TIME){newUpdateTime=presence.sitevars.BUDDY_MAX_TIME;}
return Math.round(newUpdateTime);},_checkUpdater:function(time,asyncData,forceUpdate){this.updateDiff=this._computeUpdateTimeDiff();if(forceUpdate||(time-this.updateTime)>this.updateDiff*1000){asyncData.popped_out=presence.poppedOut;asyncData.available_list=this.haveFullList?this.availableList:{};asyncData.force_render=this.shouldRender;return true;}},_forceUpdate:function(){this.shouldRender=true;presenceUpdater.forceUpdate();},_updateUserInfos:function(userInfos){for(var id in userInfos){var userInfo=userInfos[id];if(id==presence.user&&(!chatDisplay.userInfos[id]||userInfo.status!=chatDisplay.userInfos[id].status||userInfo.statusTimeRel!=chatDisplay.userInfos[id].statusTimeRel)){$('chat_su_text').innerHTML=userInfo.status;$('chat_su_time').innerHTML=userInfo.statusTimeRel+' ';}
var statusChanged=(!chatDisplay.userInfos[id]||userInfo.status!=chatDisplay.userInfos[id].status);var shouldUpdate=(statusChanged||userInfo.statusTimeRel!=chatDisplay.userInfos[id].statusTimeRel);chatDisplay.userInfos[id]=userInfos[id];if(shouldUpdate){this.updateItemDisplay(id);if(chatDisplay.tabs[id]){chatDisplay.tabs[id].updateUserInfo(statusChanged);}}}},_collapseItem:function(id,buddyInfo,shouldAnimate,flid){if(this.flMode&&flid){var flids=[flid];}else{var flids=this._getUserFlids(id,buddyInfo);}
for(var i=0;i<flids.length;i++){var flid=flids[i];var elem=ge(this._getBuddyListItemId(id,flid));if(elem){elem.id=this._getBuddyListWasItemId(id,flid);if(shouldAnimate){animation(elem).to('height','0px').duration(this.expandAnimDuration).go();}}}},_expandItem:function(id,flid,prevElem,isIdle,shouldAnimate,shouldDelayExpand){var elem=document.createElement('li');elem.id=this._getBuddyListItemId(id,flid);if(isIdle){elem.className='idle';}
elem.innerHTML=this._renderItem(id,flid,isIdle);elem.style.height='0px';insertAfter(prevElem.parentNode,prevElem,elem);var itemHeight=isIdle?this.compactItemHeight:this.itemHeight;if(shouldAnimate){var anim=animation(elem);if(shouldDelayExpand){anim.duration(this.expandAnimDuration+500).checkpoint();}
anim.to('height',itemHeight+'px').duration(this.expandAnimDuration);if(!isIdle){elem.style.backgroundColor=this.highlightColor;anim.checkpoint().duration(3000).checkpoint().to('backgroundColor',this.backgroundColor).duration(500);}
anim.go();}else{elem.style.height=itemHeight+'px';}},_clearWasAvailableItems:function(wasAvailableIDs,wasAvailableList,flid){if(!this.rendered){return;}
for(var i=0;i<wasAvailableIDs.length;i++){var id=wasAvailableIDs[i];if(wasAvailableList[id]){if(this.flMode&&flid){var flids=[flid];}else{var flids=this._getUserFlids(id,wasAvailableList[id]);}
for(var j=0;j<flids.length;j++){var flid=flids[j];var elem=ge(this._getBuddyListWasItemId(id,flid));if(elem&&elem.parentNode){elem.parentNode.removeChild(elem);delete elem;}}}}
this._showBuddyListEmptyItems();},_showBuddyListEmptyItems:function(){var groupedLists=this._groupAvailableListByFl();var globalFlids=this._getGlobalFlids();for(var i=0;i<globalFlids.length;i++){var flid=globalFlids[i];var emptyItem=ge(this._getBuddyListEmptyItemId(flid));if(emptyItem){var condition=(this.flMode&&flid)?(groupedLists[flid].length!=0):(this.availableCount!=0);CSS.conditionClass(emptyItem,'hide_empty_item',condition);}}},_hideBuddyListEmptyItems:function(){var globalFlids=this._getGlobalFlids();for(var i=0;i<globalFlids.length;i++){var flid=globalFlids[i];var emptyItem=ge(this._getBuddyListEmptyItemId(flid));if(emptyItem){CSS.addClass(emptyItem,'hide_empty_item');}}},_updateAvailableListWithDiff:function(nowAvailableList,wasAvailableIDs,flid){var id,isIdle;var shouldDelayExpand=false;var wasAvailableList={};var wasAvailableMultipleLists={};for(var i=0;i<wasAvailableIDs.length;i++){var uid=wasAvailableIDs[i];if(this.availableList[uid]){shouldDelayExpand=true;wasAvailableList[wasAvailableIDs[i]]=this.availableList[uid];if(flid&&this.flMode&&this.availableList[uid].fl.length>1){this.availableList[uid].fl.remove(flid);wasAvailableMultipleLists[uid]=1;continue;}
delete this.availableList[uid];}}
this._hideBuddyListEmptyItems();var nowAvailableIDs=object_keys(nowAvailableList);var shouldAnimate=!this.showingError&&!presence.isSafari2&&(wasAvailableIDs.length+nowAvailableIDs.length<this.maxItemsToAnimate);if(this.rendered){for(var i=0;i<wasAvailableIDs.length;i++){if(wasAvailableList[wasAvailableIDs[i]]){this._collapseItem(wasAvailableIDs[i],wasAvailableList[wasAvailableIDs[i]],shouldAnimate,flid);}}
var clearDelay=shouldAnimate?this.expandAnimDuration:0;setTimeout(this._clearWasAvailableItems.bind(this,wasAvailableIDs,wasAvailableList,flid),clearDelay);}
var availableIDs=this.sortedList;this.sortedList=[];this._sort(nowAvailableIDs,nowAvailableList);var nowAvailableID=nowAvailableIDs.shift();var availableID=availableIDs.shift();var compareFunction=this._compareFunction.bind(this,null);var defaultPrevAvailElemIds={},prevIdleElemIds={},prevAvailElemIds={},hasIdle={},hasNotIdle={};var globalFlids=[];if(this.shouldRender){globalFlids=this._getGlobalFlids();for(var i=0;i<globalFlids.length;i++){var flid=globalFlids[i];defaultPrevAvailElemIds[flid]=prevAvailElemIds[flid]=this._getAvailableMarkerId(flid);prevIdleElemIds[flid]=this._getIdleMarkerId(flid);hasIdle[flid]=hasNotIdle[flid]=false;}}
var noResize=false;var flidTracking=function(id,flid,isIdle){var itemID=this._getBuddyListItemId(id,flid);if(isIdle){prevIdleElemIds[flid]=itemID;}else{prevAvailElemIds[flid]=itemID;}
hasIdle[flid]=hasIdle[flid]||isIdle;hasNotIdle[flid]=hasNotIdle[flid]||!isIdle;};var flidTrackingFunc=flidTracking.bind(this);while(true){if(availableID&&wasAvailableList[availableID]&&!wasAvailableMultipleLists[availableID]){availableID=availableIDs.shift();continue;}
if(availableID&&nowAvailableID){if(availableID==nowAvailableID){availableID=availableIDs.shift();continue;}
if(compareFunction(availableID,nowAvailableID,this.availableList[availableID].i,nowAvailableList[nowAvailableID].i)<0){id=availableID;}else{id=nowAvailableID;}}else if(availableID){id=availableID;}else if(nowAvailableID){id=nowAvailableID;}else{break;}
if(id==availableID){availableID=availableIDs.shift();isIdle=this.availableList[id].i;if(this.shouldRender){var flids=this._getUserFlids(id);for(var i=0;i<flids.length;i++){flidTrackingFunc(id,flids[i],isIdle);}}}else{nowAvailableID=nowAvailableIDs.shift();if(this.shouldRender&&this.availableList[id]){var toRemoveFlids=this._getUserFlids(id,this.availableList[id]);for(var i=0;i<toRemoveFlids.length;i++){var flid=toRemoveFlids[i];var elem=ge(this._getBuddyListItemId(id,flid));if(elem){DOM.remove(elem);}}}
this.availableList[id]=nowAvailableList[id];if(this.shouldRender){isIdle=nowAvailableList[id].i;var flids=this._getUserFlids(id);for(var i=0;i<flids.length;i++){var flid=flids[i];var prevElem=isIdle?ge(prevIdleElemIds[flid]):ge(prevAvailElemIds[flid]);if(!prevElem){prevElem=ge(defaultPrevAvailElemIds[flid]);}
this._expandItem(id,flid,prevElem,isIdle,shouldAnimate,shouldDelayExpand);noResize=true;flidTrackingFunc(id,flid,isIdle);}}}
this.sortedList.push(id);}
if(this.shouldRender){for(var i=0;i<globalFlids.length;i++){var flid=globalFlids[i];if(hasIdle[flid]&&hasNotIdle[flid]){CSS.removeClass($(this._getIdleMarkerId(flid)),'hide_idle_marker');}else{CSS.addClass($(this._getIdleMarkerId(flid)),'hide_idle_marker');}}
var delay=0;if(shouldAnimate){var didExpand=noResize;if(didExpand){delay+=this.expandAnimDuration;}
if(shouldDelayExpand){delay+=this.expandAnimDuration;if(didExpand){delay+=500;}}}
setTimeout(this.resizeTab.bind(this),delay);}
this._availableListChanged(noResize);},_sort:function(ids,availableList){availableList=availableList||this.availableList;var compareFunction=this._compareFunction.bind(this,availableList);ids.sort(compareFunction);return ids;},_compareFunction:function(availableList,id1,id2,id1Idle,id2Idle){if(typeof id1Idle=='undefined'){id1Idle=availableList[id1].i;}
if(typeof id2Idle=='undefined'){id2Idle=availableList[id2].i;}
if(id1Idle^id2Idle){return id1Idle?1:-1;}
var id1Name=chatDisplay.userInfos[id1].name.toLowerCase();var id2Name=chatDisplay.userInfos[id2].name.toLowerCase();return(id1Name<id2Name)?-1:1;},_availableListChanged:function(noResize){if(this.haveFullList){this.availableCount=object_key_count(this.availableList);}
for(var id in this.availableList){this.availableList[id].i=this.availableList[id].i?1:0;}
presenceCookieManager.store();presence.contentChanged(this.contentID);if(!noResize){this.resizeTab();}
this._updateCount();for(var i=0;i<this.availabilityHandlers.length;i++){this.availabilityHandlers[i](this.justCameOnline);}
this.justCameOnline=false;},_onUpdaterResponse:function(buddyListResponse,time){if(this.shouldRender&&!buddyListResponse.forcedRender){return;}
var hadFullList=this.haveFullList;var flChanged=this._flChanged(buddyListResponse.flMode,buddyListResponse.flData);var nowAvailableListEmpty=is_empty(buddyListResponse.nowAvailableList);this.numRequestFailures=0;this.errorMode=false;this._hideError();this.listChanged=buddyListResponse.listChanged;this.updateTime=time;this._updateUserInfos(buddyListResponse.userInfos);if((hadFullList&&flChanged)||nowAvailableListEmpty){}else{this.flMode=buddyListResponse.flMode;this.flData=buddyListResponse.flData;}
if(this.shouldRender){this.haveFullList=true;if(!this.rendered){this._firstRender();}}else{this.availableCount=buddyListResponse.availableCount;this._updateCount();}
if(!hadFullList||buddyListResponse.wasAvailableIDs.length||!nowAvailableListEmpty){for(var id in this.uiUpdateList){if(time-this.uiUpdateList[id]<this.uiUpdateListMaxTime){if(hadFullList||!this.availableList[id]){delete buddyListResponse.nowAvailableList[id];}else{buddyListResponse.nowAvailableList[id]=this.availableList[id];}
for(var i=0;i<buddyListResponse.wasAvailableIDs.length;i++){if(id==buddyListResponse.wasAvailableIDs[i]){buddyListResponse.wasAvailableIDs.splice(i,1);break;}}}else{delete this.uiUpdateList[id];}}
if(hadFullList){if(flChanged&&!nowAvailableListEmpty){buddyListResponse.nowAvailableList=this._massageNowAvailableList(buddyListResponse.nowAvailableList,buddyListResponse.flMode,buddyListResponse.flData);}
this._updateAvailableListWithDiff(buddyListResponse.nowAvailableList,buddyListResponse.wasAvailableIDs);if(flChanged){this._onFlChange(buddyListResponse.flMode,buddyListResponse.flData);}}else{this.availableList=buddyListResponse.nowAvailableList;this._availableListChanged(true);this._render();}}else{this._availableListChanged.bind(this).defer();if(flChanged&&nowAvailableListEmpty){this._onFlChange(buddyListResponse.flMode,buddyListResponse.flData);}}},_onUpdaterError:function(response){this.numRequestFailures++;if(this.numRequestFailures>1){this.updateTime=presence.getTime();this.availableCount=0;this._updateCount();this._updateAvailableListWithDiff({},object_keys(this.availableList));this._showLoadError();}},itemOnClick:function(id){presence.pauseSync();chatDisplay.focusTab(id);if(!this.isSticky()){this.closeTab();}
this.typeahead.resetSearch(true);presence.resumeSync();},_renderItem:function(id,flid,isIdle){var userInfo=chatDisplay.userInfos[id];var name=userInfo.name;var picSrc=userInfo.thumbSrc;var nameCapped;if(name.length>this.maxNameLen){nameCapped=name.substring(0,this.maxNameLen-2)+'...';}else{nameCapped=name;}
var status,anchorTitle='',statusCapped='';if(status=userInfo.status){if(status.length>this.maxStatusLen){statusCapped=status.substring(0,this.maxStatusLen-2)+'...';}else{statusCapped=status;}
anchorTitle=isIdle?tx('chb05',{'name':htmlize(name),'Idle':tx('chb07'),'status':htmlize(status),'time':userInfo.statusTimeRel}):tx('chb04',{'name':htmlize(name),'status':htmlize(status),'time':userInfo.statusTimeRel});}else if(isIdle){anchorTitle=tx('chb07');}
var onclick=sprintf('buddyList.itemOnClick(%d)',id);var markupArr=['<a href="#" class="clearfix" title="',anchorTitle,'" ','onclick="',onclick,';return false;">'];if(!isIdle&&!this.isCompactDisplay){markupArr=markupArr.concat('<img src="',picSrc,'" width="25px" />');}
markupArr=markupArr.concat('<div class="friend_status">','<strong id="',this._getBuddyListItemNameId(id,flid),'">',htmlize(nameCapped),'</strong>');if(!isIdle&&!this.isCompactDisplay){markupArr=markupArr.concat('<span>',htmlize(statusCapped),'</span>');}
markupArr=markupArr.concat('</div>','<div class="available_dot"></div>','</a>');return markupArr.join('');},_groupAvailableListByFl:function(groupSorted,emptyGroups){if(!this.flMode||!this.flData){return null;}
groupSorted=groupSorted||false;emptyGroups=emptyGroups||false;var result={};for(var flid in this.flData){result[flid]=[];}
if(emptyGroups){return result;}
var groupId=function(id){var flids=this.availableList[id].fl;if(flids){for(var j=0;j<flids.length;++j){var flid=flids[j];result[flid].push(id);}}};var groupIdFunc=groupId.bind(this);if(groupSorted){for(var i=0;i<this.sortedList.length;i++){groupIdFunc(this.sortedList[i]);}}else{for(var id in this.availableList){groupIdFunc(id);}}
return result;},_friendListHandleMouseOver:function(flid){CSS.addClass($(this._getFriendListId(flid)),'hover');},_friendListHandleMouseOut:function(flid){CSS.removeClass($(this._getFriendListId(flid)),'hover');},_friendListHandleOnClick:function(flid){var online=$(this._getFriendListOnlineCheckboxId(flid)).checked
CSS.addClass($(this._getFriendListId(flid)),'chat_setting_loading');if(online){this._goOnlineToLists([flid]);}else{this._goOfflineToLists([flid]);}},_goOnlineToLists:function(flids,readOnly){readOnly=readOnly||false;var data={'online_to_list':1,'flids':flids,'user':this.user,'read_only':readOnly};new AsyncRequest().setData(data).setURI('/ajax/chat/buddy_list_settings.php').setHandler(this._onChangeVisibilityResponse.bind(this,flids,true)).setFinallyHandler(this._clearSpinningIndicator.bind(this,flids)).send();for(var i=0;i<flids.length;++i){var flid=flids[i];this.flData[flid].o=1;var checkbox=ge(this._getFriendListOnlineCheckboxId(flid));if(checkbox){checkbox.checked=1;}}},_goOfflineToLists:function(flids,uiOnly){uiOnly=uiOnly||false;var groupedLists=this._groupAvailableListByFl();for(var i=0;i<flids.length;++i){var flid=flids[i];var idsToRemove=groupedLists[flid];this._removeFromBuddyList(idsToRemove,false,flid);CSS.addClass($(this._getIdleMarkerId(flid)),'hide_idle_marker');var checkbox=ge(this._getFriendListOnlineCheckboxId(flid));if(checkbox){checkbox.checked=0;}
this.flData[flid].o=0;}
if(uiOnly){this._onChangeVisibilityResponse(flids,false);}else{var data={'offline_to_list':1,'flids':flids,'user':this.user};new AsyncRequest().setData(data).setURI('/ajax/chat/buddy_list_settings.php').setHandler(this._onChangeVisibilityResponse.bind(this,flids,false)).setFinallyHandler(this._clearSpinningIndicator.bind(this,flids)).send();}},_removeFlidsFromBuddyList:function(flids,groupedList){var nowAvailList={};for(var i=0;i<flids.length;i++){var flid=flids[i];var ids=groupedList[flid];for(var j=0;j<ids.length;j++){var id=ids[j];var buddyInfo={};buddyInfo['i']=this.availableList[id].i;buddyInfo['fl']=this.availableList[id].fl.clone();if(this.flMode){buddyInfo.fl.remove(flid);if(buddyInfo.fl.length==0){buddyInfo.fl.push(this.otherFriendsFlid);}}else{delete buddyInfo.fl;}
nowAvailList[id]=buddyInfo;}}
if(!is_empty(nowAvailList)){this._updateAvailableListWithDiff(nowAvailList,[]);}},_onChangeVisibilityResponse:function(flids,online,asyncResponse){if(asyncResponse){var payload=asyncResponse.getPayload();if(payload&&payload.availableList){this._updateUserInfos(payload.userInfos);this._updateAvailableListWithDiff(payload.availableList,[]);}}
var emptyText;for(var i=0;i<flids.length;i++){var flid=flids[i];var emptyItem=ge(this._getBuddyListEmptyItemId(flid));if(emptyItem){if(online){emptyText=tx('chb03');}else{emptyText=tx('chb09',{'friend-list-name':this.flData[flid].n});}
set_inner_html(emptyItem,emptyText);}}},_clearSpinningIndicator:function(flids){for(var i=0;i<flids.length;i++){var flid=flids[i];CSS.removeClass($(this._getFriendListId(flid)),'chat_setting_loading');}},_renderFriendListItem:function(flid){var fl_name=this.flData[flid].n;var online=this.flData[flid].o;var markupArr=['<div class="friendlist_status">','<strong>',htmlize(fl_name),'</strong>','</div>'];if(typeof this.flData[flid].s=='undefined'){var onmouseover=sprintf('buddyList._friendListHandleMouseOver(%d);',flid);var onmouseout=sprintf('buddyList._friendListHandleMouseOut(%d);',flid);var onclick=sprintf('buddyList._friendListHandleOnClick(%d);',flid);markupArr.push('<div class="online_checkbox">','<span class="show_loading">','<img src="/images/indicator.gif" />','</span>','<span class="hide_loading">','<input type="checkbox" ',(online?'checked="checked" ':''),'id="',this._getFriendListOnlineCheckboxId(flid),'" ','onmouseover="',onmouseover,'"','onmouseout="',onmouseout,'"','onclick="',onclick,'"',' />','</span>','<div class="titletip">',tx('chb08'),'</div>','</div>');}
return markupArr.join('');},_renderBuddyContent:function(){var markupArr=['<div id="buddy_list_all" class="subgroup">','<div id="buddy_list_empty_search" class="info_text" style="display:none">',tx('chb06'),'</div>','<ul id="buddy_list_parent" class="list_select">'];var flids=[];var groupedLists={};if(this.flMode){flids=object_keys(this.flData);groupedLists=this._groupAvailableListByFl(true);}else{flids=[null];}
for(var i=0;i<flids.length;++i){var flid=flids[i];var ids=[];var emptyItemClass='';var emptyText=tx('chb03');if(this.flMode&&flid){var online=this.flData[flid].o;markupArr.push('<li id="',this._getFriendListId(flid),'"',(online?' class="friend_list online"':'class="friend_list online"'),'>',this._renderFriendListItem(flid),'</li>');ids=groupedLists[flid];emptyItemClass=(ids.length!=0?'hide_empty_item':'');if(!this.flData[flid].o){emptyText=tx('chb09',{'friend-list-name':this.flData[flid].n});}}else{emptyItemClass=(this.availableCount?'hide_empty_item':'');ids=this.sortedList;}
markupArr.push('<li id="',this._getBuddyListEmptyItemId(flid),'" class="info_text ',emptyItemClass,'">',emptyText,'</li>','<li id="',this._getAvailableMarkerId(flid),'" style="display:none"></li>');var idleArr=[];var hasIdle=false,hasNotIdle=false;for(var j=0;j<ids.length;j++){var id=ids[j];var idle=this.availableList[id].i;var itemMarkupArr=['<li id="',this._getBuddyListItemId(id,flid),'"',(idle?' class="idle"':''),'>',this._renderItem(id,flid,idle),'</li>'];if(idle){hasIdle=true;idleArr=idleArr.concat(itemMarkupArr);}else{hasNotIdle=true;markupArr=markupArr.concat(itemMarkupArr);}}
var idleMarkerClass=(hasIdle&&hasNotIdle)?'':' hide_idle_marker';markupArr.push('<li id="',this._getIdleMarkerId(flid),'" class="subheader',idleMarkerClass,'"></li>');markupArr=markupArr.concat(idleArr);}
markupArr.concat(['</ul>','</div>']);return markupArr.join('');},_render:function(){if(this.sortedList.length==0&&object_key_count(this.availableList)==this.availableCount){this.sortedList=this._sort(object_keys(this.availableList));}
CSS.conditionClass(this.contentDiv,'compact',this.isCompactDisplay);var content=this._renderBuddyContent();if(this.rendered){CSS.addClass(this.contentDiv,'hidden');}
this.contentDiv.innerHTML=content;presence.contentChanged(this.contentID);if(this.rendered){this.wrapperDiv.style.left='-10000px';this._hideError();CSS.removeClass(this.contentDiv,'hidden');this.resizeTab();this.wrapperDiv.style.left='auto';}
if(this.errorMode){this._showLoadError();}
if(this.shouldShowLoading){this._showLoading();this.shouldShowLoading=false;}},_firstRender:function(){this._render();this.rendered=true;this.loadTypeahead();},updateItemDisplay:function(id){var buddyInfo=this.availableList[id];if(!buddyInfo){return;}
var userFlids=this._getUserFlids(id);for(var i=0;i<userFlids.length;i++){var flid=userFlids[i];var item=ge(this._getBuddyListItemId(id,flid));if(!item){return;}
item.innerHTML=this._renderItem(id,flid,buddyInfo.i);}},_showLoadError:function(){this._showError(tx('chb01'));},_showLoading:function(){this._showError(tx('sh:loading'));},_hideError:function(){this.showingError=false;remove_css_class_name(this.wrapperDiv,'error');},_showError:function(error){this.showingError=true;set_inner_html(this.buddyListError,error);add_css_class_name(this.wrapperDiv,'error');},isSticky:function(){return statusControl.getSetting('sticky_buddylist');},_getGlobalFlids:function(){return this.flMode&&this.flData?object_keys(this.flData):[null];},_getUserFlids:function(id,buddyInfo){buddyInfo=buddyInfo||this.availableList[id];return buddyInfo.fl?buddyInfo.fl:[null];},_getAvailableMarkerId:function(flid){var prefix=(flid)?(flid+'_'):'';return prefix+'buddy_list_avail_marker';},_getIdleMarkerId:function(flid){var prefix=(flid)?(flid+'_'):'';return prefix+'buddy_list_idle_marker';},_getBuddyListItemId:function(id,flid){var prefix=(flid)?(flid+'_'):'';return prefix+'buddy_list_item_'+id;},_getBuddyListItemNameId:function(id,flid){var prefix=(flid)?(flid+'_'):'';return prefix+'buddy_list_item_name_'+id;},_getBuddyListWasItemId:function(id,flid){var prefix=(flid)?(flid+'_'):'';return prefix+'buddy_list_was_item_'+id;},_getBuddyListEmptyItemId:function(flid){var prefix=(flid)?(flid+'_'):'';return prefix+'buddy_list_empty_item';},_getFriendListId:function(flid){return flid+'_friend_list_item';},_getFriendListOnlineCheckboxId:function(flid){return flid+'_online_checkbox';}};

function fbBuddyListTypeahead(obj){this.curStr='';this.clearDiv=null;this.focused=false;this.selected=null;this.selectedIndex=0;this.selectableCount=0;this.minBuddyCount=10;this.obj=obj;this.obj.typeahead=this;this.placeholderText=obj.value;this.inputDiv=ge('buddy_list_typeahead');this.shouldShowClear=!presence.isSafari2;if(!this.shouldShowClear){obj.onmousedown=this._onmousedown.bind(this);}
buddyList.registerAvailabilityHandler(this.buildIndex.bind(this));addEventBase(this.obj,'focus',this._onfocus.bind(this));addEventBase(this.obj,'blur',this._onblur.bind(this));addEventBase(this.obj,'keyup',function(e){e=event_get(e);var keycode=e?e.keyCode:-1;this._onkeyup.bind(this,keycode).defer();}.bind(this));this.captureSubmit();this.buildIndex();}
fbBuddyListTypeahead.prototype={_onfocus:function(e){this.focused=true;this.captureSubmit();},_onblur:function(e){this.focused=false;if(this.curStr==''){this.hideClear();}},_onmousedown:function(){setTimeout(function(){this._onkeyup(0);}.bind(this),100);},_onkeyup:function(keycode){switch(keycode){case KEYS.ESC:this.resetSearch(true);break;case undefined:case KEYS.LEFT:case KEYS.RIGHT:return false;break;case KEYS.UP:this.upArrowPress();break;case KEYS.DOWN:this.downArrowPress();break;case KEYS.RETURN:this.select();break;case KEYS.BACKSPACE:case 0:default:if(this.search()){this.resetSearch(true);}
break;}},focusInput:function(){if(buddyList.availableCount&&buddyList.availableCount>this.minBuddyCount){this.obj.focus();}
this.resetSearch();},captureSubmit:function(){if((!this.capturedForm||this.capturedSubstitute!=this.capturedForm.onsubmit)&&this.obj.form){this.capturedForm=this.obj.form;this.captured_event=this.obj.form.onsubmit;this.capturedSubstitute=this.obj.form.onsubmit=function(){return false;}.bind(this.obj.form);}},buildIndex:function(justCameOnline){this.availableListIDs=buddyList.getSortedList();this.firstLetterIndex={};for(var i=0;i<this.availableListIDs.length;i++){var id=this.availableListIDs[i];var name=typeahead_source.tokenize(chatDisplay.userInfos[id].name);for(var token=0;token<name.length;token++){if(!this.firstLetterIndex[name[token][0]]){this.firstLetterIndex[name[token][0]]={};}
this.firstLetterIndex[name[token][0]][id]=true;}}
if(buddyList.availableCount<this.minBuddyCount){hide(this.inputDiv);this.resetSearch(true);}else{show(this.inputDiv);this.search.bind(this,true).defer();}},resetSearch:function(clear){if(!this.obj){return false;}
if(!this.obj.value||clear){this.curStr='';this.obj.value='';this.hideClear();}
this.selected=null;this.selectedIndex=-1;this.showAll();this.hideClear();buddyList.unfreezeTabSize();},search:function(force){var value=this.obj.value;if(value==this.placeholderText){return true;}
var str=typeahead_source.flatten_string(value);if(!force&&str==this.curStr){return false;}
this.curStr=str;var tokenizedStr=typeahead_source.tokenize(str).sort(typeahead_source._sort);if(!tokenizedStr[0]){return true;}
var quickIndex=this.firstLetterIndex[tokenizedStr[0][0]];buddyList.freezeTabSize();this.showClear();buddyList.suppressNonFriendInfoInBuddyList();this.getMatchingFriends(quickIndex,tokenizedStr);this.selected=null;this.selectMatchingFriends();return false;},getMatchingFriends:function(quickIndex,tokenizedStr){var matches=0;var showingSomething=false;for(var i=0;i<this.availableListIDs.length;i++){var id=this.availableListIDs[i];var fullName=chatDisplay.userInfos[id].name;if(quickIndex!=undefined&&quickIndex[id]&&typeahead_source.check_match(tokenizedStr,fullName)){var name=typeahead_source.highlight_found(fullName,this.curStr);buddyList.getBuddyItemName(id).innerHTML=name;buddyList.showBuddyItem(id);showingSomething=true;matches++;}else{remove_css_class_name(buddyList.getBuddyItem(id),'selected');buddyList.hideBuddy(id);}}
if(showingSomething){buddyList.hideEmptySearch();if(matches==1){this.selected=id;this.selectedIndex=0;add_css_class_name(buddyList.getBuddyItem(id),'selected');}}else{buddyList.showEmptySearch();}},selectMatchingFriends:function(){this.selectableCount=0;for(var i=0;i<this.availableListIDs.length;i++){var id=this.availableListIDs[i];var buddy=buddyList.getBuddyItem(id);if(buddy&&get_style(buddy,'display')!='none'){if(this.selectedIndex==this.selectableCount){this.selected=id;add_css_class_name(buddy,'selected');}else{remove_css_class_name(buddy,'selected');}
this.selectableCount++;}}},downArrowPress:function(){this.selectedIndex++;var max=this.selectableCount-1;if(this.selectedIndex>=max){this.selectedIndex=max;}
this.selectMatchingFriends();},upArrowPress:function(){this.selectedIndex--;if(this.selectedIndex<0){this.resetSearch();}
this.selectMatchingFriends();},showAll:function(){this.obj.value='';buddyList.hideEmptySearch();for(var i=0;i<this.availableListIDs.length;i++){var id=this.availableListIDs[i];var buddy=buddyList.getBuddyItem(id);if(buddy){buddyList.updateBuddyItemName(id);remove_css_class_name(buddyList.getBuddyItem(id),'selected');buddyList.showBuddyItem(id,true);}}
buddyList.unsuppressNonFriendInfoInBuddyList();},showClear:function(){if(this.clearDiv==null&&this.shouldShowClear){this.clearDiv=document.createElement('div');this.clearDiv.setAttribute('id','clear_search');this.clearDiv.innerHTML='<a href="#" onClick="buddyList.typeahead.resetSearch(true);return false;" class="hide"></a>';this.inputDiv.appendChild(this.clearDiv);}},hideClear:function(){if(ge('clear_search')){this.clearDiv=null;this.inputDiv.removeChild(ge('clear_search'));}},select:function(){if(this.selected!=null){remove_css_class_name(buddyList.getBuddyItemName(this.selected),'selected');buddyList.itemOnClick(this.selected);this.resetSearch(true);}}};

function Sound(){Sound.play('/sound/quack.mp3');}
copy_properties(Sound,{play:function(path){uri=URI(path);if(!uri.getDomain()){path=(env_get('static_base')+uri.getPath()).replace(/\/\//g,'/');}
var player;var embed;if(/\.mp3$/.test(path)){player=document['so_sound_player']||window['so_sound_player'];if(player){if(!player.playSound&&player.length){player=player[0];}
if(player.playSound){player.playSound(path);return;}}}
embed=ge('sound');if(!embed){embed=document.createElement('span');embed.setAttribute('id','sound');document.body.appendChild(embed);}
embed.innerHTML='<embed src="'+path+'" autostart="true" hidden="true" />';}});
if(window.Bootloader){Bootloader.done(1);}