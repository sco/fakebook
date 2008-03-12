/*       Source:  Backing Store                                                               */
/*     Location:  js/extended.js r78843                                                       */
/*      Machine:  10.1.0.28                                                                   */
/*    Generated:  March 5th 2008 2:09:46 AM PST                                               */


function bind(obj,method){var args=[];for(var ii=2;ii<arguments.length;ii++){args.push(arguments[ii]);}
return function(){var _obj=obj||this;var _args=args.slice();for(var jj=0;jj<arguments.length;jj++){_args.push(arguments[jj]);}
if(typeof(method)=="string"){if(_obj[method]){return _obj[method].apply(_obj,_args);}}else{return method.apply(_obj,_args);}}}
Function.prototype.bind=function(context){var argv=[arguments[0],this]
var argc=arguments.length;for(var ii=1;ii<argc;ii++){argv.push(arguments[ii]);}
return bind.apply(null,argv);}
function copy_properties(u,v){for(var k in v){u[k]=v[k];}
if(ua.ie()&&(v.toString!==undefined)&&(u.toString!==v.toString)){u.toString=v.toString;}
return u;}
function HTML(content){if(this===window){return new HTML(content);}
this.content=content;return this;}
copy_properties(HTML.prototype,{toString:function(){return this.content;}});var Try={these:function(){var len=arguments.length;var res;for(var ii=0;ii<len;ii++){try{res=arguments[ii]();return res;}catch(anIgnoredException){}}
return res;}};var Util={fallbackErrorHandler:function(msg){aiert(msg);},isDevelopmentEnvironment:function(){return env_get('dev');},warn:function(){Util.log(sprintf.apply(null,arguments),'warn');},error:function(){Util.log(sprintf.apply(null,arguments),'error');},log:function(msg,type){if(Util.isDevelopmentEnvironment()){var written=false;if(typeof(window['TabConsole'])!='undefined'){var con=TabConsole.getInstance();if(con){con.log(msg,type);written=true;}}
if(typeof(console)!="undefined"&&console.error){console.error(msg);written=true;}
if(!written&&type!='deprecated'&&Util.fallbackErrorHandler){Util.fallbackErrorHandler(msg);}}else{if(type=='error'){msg+='\n\n'+Util.stack();(typeof(window['debug_rlog'])=='function')&&debug_rlog(msg);}}},deprecated:function(what){if(!Util._deprecatedThings[what]){Util._deprecatedThings[what]=true;var msg=sprintf('Deprecated: %q is deprecated.\n\n%s',what,Util.whyIsThisDeprecated(what));Util.log(msg,'deprecated');}},stack:function(){try{try{({}).llama();}catch(e){if(e.stack){var stack=[];var trace=[];var regex=/^([^@]+)@(.+)$/mg;var line=regex.exec(e.stack);do{stack.push([line[1],line[2]]);}while(line=regex.exec());for(var i=0;i<stack.length;i++){trace.push('#'+i+' '+stack[i][0]+' @ '+(stack[i+1]?stack[i+1][1]:'?'));}
return trace.join('\n');}else{var trace=[];var pos=arguments.callee;var stale=[];while(pos){for(var i=0;i<stale.length;i++){if(stale[i]==pos){trace.push('#'+trace.length+' ** recursion ** @ ?');return trace.join('\n');}}
stale.push(pos);var args=[];for(var i=0;i<pos.arguments.length;i++){if(pos.arguments[i]instanceof Function){var func=/function ?([^(]*)/.exec(pos.arguments[i].toString()).pop();args.push(func?func:'anonymous');}else if(pos.arguments[i]instanceof Array){args.push('Array');}else if(pos.arguments[i]instanceof Object){args.push('Object');}else if(typeof pos.arguments[i]=='string'){args.push('"'+pos.arguments[i].replace(/("|\\)/g,'\\$1')+'"');}else{args.push(pos.arguments[i]);}}
trace.push('#'+trace.length+' '+/function?([^(]*)/.exec(pos).pop()+'('+args.join(', ')+') @ ?');if(trace.length>100)break;pos=pos.caller;}
return trace.join('\n');}}}catch(e){return'No stack trace available';}},whyIsThisDeprecated:function(what){return Util._deprecatedBecause[what.toLowerCase()]||'No additional information is available about this deprecation.';},_deprecatedBecause:{},_deprecatedThings:{}};var Configurable={getOption:function(opt){if(typeof(this.option[opt])=='undefined'){Util.warn('Failed to get option %q; it does not exist.',opt);return null;}
return this.option[opt];},setOption:function(opt,v){if(typeof(this.option[opt])=='undefined'){Util.warn('Failed to set option %q; it does not exist.',opt);}else{this.option[opt]=v;}
return this;},getOptions:function(){return this.option;}};function Ad(){}
copy_properties(Ad,{refreshRate:10000,lastRefreshTime:new Date(),refresh:function(){var delta=(new Date().getTime()-Ad.lastRefreshTime.getTime());if(delta>Ad.refreshRate){var f=Ad.getFrame();if(f){if(!f.osrc){f.osrc=f.src;}
f.src=f.osrc+'?'+Math.random();Ad.lastRefreshTime=new Date();}}},getFrame:function(){return ge('ssponsor')&&$('ssponsor').getElementsByTagName('iframe')[0];}});function URI(uri){if(uri===window){Util.error('what the hell are you doing');return;}
if(this===window){return new URI(uri||window.location.href);}
this.parse(uri||'');}
copy_properties(URI,{expression:/(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,explodeQuery:function(q){if(!q){return{};}
var ii,t,r={};q=q.split('&');for(ii=0,l=q.length;ii<l;ii++){t=q[ii].split('=');r[decodeURIComponent(t[0])]=(typeof(t[1])=='undefined')?'':decodeURIComponent(t[1]);}
return r;},implodeQuery:function(obj,name){name=name||'';var r=[];if(obj instanceof Array){for(var ii=0;ii<obj.length;ii++){try{r.push(URI.implodeQuery(obj[ii],name?name+'['+ii+']':ii));}catch(ignored){}}}else if(typeof(obj)=='object'){if(is_node(obj)){r.push('{node}');}else{for(var k in obj){try{r.push(URI.implodeQuery(obj[k],name?name+'['+k+']':k));}catch(ignored){}}}}else if(name&&name.length){r.push(encodeURIComponent(name)+'='+encodeURIComponent(obj));}else{r.push(encodeURIComponent(obj));}
return r.join('&');}});copy_properties(URI.prototype,{parse:function(uri){var m=uri.toString().match(URI.expression);copy_properties(this,{protocol:m[3]||'',domain:m[4]||'',port:m[6]||'',path:m[7]||'',query:URI.explodeQuery(m[9]||''),fragment:m[11]||''});return this;},setProtocol:function(p){this.protocol=p;return this;},getProtocol:function(){return this.protocol;},setQueryData:function(o){this.query=o;return this;},addQueryData:function(o){return this.setQueryData(copy_properties(this.query,o));},getQueryData:function(){return this.query;},setFragment:function(f){this.fragment=f;return this;},getFragment:function(){return this.fragment;},setDomain:function(d){this.domain=d;return this;},getDomain:function(){return this.domain;},setPort:function(p){this.port=p;return this;},getPort:function(){return this.port;},setPath:function(p){this.path=p;return this;},getPath:function(){return this.path;},toStringValue:function(){var r='';var q=URI.implodeQuery(this.query);this.protocol&&(r+=this.protocol+'://');this.domain&&(r+=this.domain);this.port&&(r+=':'+this.port);if(this.domain&&!this.path){r+='/';}
this.path&&(r+=this.path);q&&(r+='?'+q);this.fragment&&(r+='#'+this.fragment);return r;},toString:function(){return this.toStringValue();},isSameOrigin:function(asThisURI){var uri=asThisURI||window.location.href;if(!(uri instanceof URI)){uri=new URI(uri.toString());}
if(this.getProtocol()&&this.getProtocol()!=uri.getProtocol()){return false;}
if(this.getDomain()&&this.getDomain()!=uri.getDomain()){return false;}
return true;},coerceToSameOrigin:function(targetURI){var uri=targetURI||window.location.href;if(!(uri instanceof URI)){uri=new URI(uri.toString());}
if(this.isSameOrigin(uri)){return true;}
if(this.getProtocol()!=uri.getProtocol()){return false;}
var dst=uri.getDomain().split('.');var src=this.getDomain().split('.');if(dst.pop()=='com'&&src.pop()=='com'){if(dst.pop()=='facebook'&&src.pop()=='facebook'){this.setDomain(uri.getDomain());return true;}}
return false;}});function EventController(eventResponderObject){copy_properties(this,{queue:[],ready:false,responder:eventResponderObject});};copy_properties(EventController.prototype,{startQueue:function(){this.ready=true;this.dispatchEvents();return this;},pauseQueue:function(){this.ready=false;return this;},addEvent:function(event){if(event.toLowerCase()!==event){Util.warn('Event name %q contains uppercase letters; events should be lowercase.',event);}
var args=[];for(var ii=1;ii<arguments.length;ii++){args.push(arguments[ii]);}
this.queue.push({type:event,args:args});if(this.ready){this.dispatchEvents();}
return false;},dispatchEvents:function(){if(!this.responder){Util.error('Event controller attempting to dispatch events with no responder! '+'Provide a responder when constructing the controller.');}
for(var ii=0;ii<this.queue.length;ii++){var evtName='on'+this.queue[ii].type;if(typeof(this.responder[evtName])!='function'&&typeof(this.responder[evtName])!='null'){Util.warn('Event responder is unable to respond to %q event! Implement a %q '+'method. Note that method names are case sensitive; use lower case '+'when defining events and event handlers.',this.queue[ii].type,evtName);}else{if(this.responder[evtName]){this.responder[evtName].apply(this.responder,this.queue[ii].args);}}}
this.queue=[];}});
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript("\/var\/releases\/thefacebook-r78923-01222008\/www\/html\/js\/extended.js", "78843", 1201048725);}