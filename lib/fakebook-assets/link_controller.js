/*       Source:  Local Cache                                                                 */
/*     Location:  rsrc:102585:/html/js/lib/event/link_controller.js                           */
/*      Machine:  10.16.140.106                                                               */
/*    Generated:  July 9th 2008 3:45:16 PM PDT                                                */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


function _ElementController(tag_name,event_name){copy_properties(this,{_controlled_tag_name:tag_name,_controlled_event_name:event_name,_handlers:[],_fallback_handlers:[]});var controller=this;this._onevent=function(e){return controller._handle.bind(controller)(this,event_get(e));};}
copy_properties(_ElementController.prototype,{ALL:1,ALL_TARGETS:2,ALL_KEY_MODIFIERS:4,registerHandler:function(callback,filters){this._registerHandler(this._handlers,callback,filters);},registerFallbackHandler:function(callback,filters){this._registerHandler(this._fallback_handlers,callback,filters);},assignHandler:function(element,handler){if(element.tagName.toLowerCase()!=this._controlled_tag_name){Util.error('Calling assignHandler on a "%s" tag ("%s" tag expected)',element.tagName.toLowerCase(),this._controlled_tag_name);return;}
if(element[this._controlled_event_name]!==this._onevent){element[this._controlled_event_name]=this._onevent;}
element[this._controlled_event_name+'__precontroller']=handler;},bindAll:function(root_element){if(!this._binding_enabled){return;}
var tabconsole=ge('tabconsole');if(tabconsole){if((root_element.id&&root_element.id.substring(0,8)=='cacheobs')||is_descendent(root_element,tabconsole)){return;}}
var should_insert=ua.firefox()&&!is_descendent(root_element,document.body);if(should_insert){var invisible_div=ge('an_invisible_div');if(!invisible_div){invisible_div=DOM.create('div',{id:'an_invisible_div'});invisible_div.style.display='none';document.body.appendChild(invisible_div);}
invisible_div.appendChild(root_element);}
var elements=root_element.getElementsByTagName(this._controlled_tag_name);var event_name=this._controlled_event_name;var onevent=this._onevent;try{for(var i=0;i<elements.length;++i){var element=elements[i];if(element[event_name]&&element[event_name]!==onevent){element[event_name+'__precontroller']=element[event_name];}
element[event_name]=onevent;}}catch(ex){Util.error('Uncaught exception while reading %s handler for element with contents %h: %s',event_name,element.innerHTML,ex);}
if(should_insert){invisible_div.removeChild(root_element);}},_handle:function(element,event){var precontroller_handler=element[this._controlled_event_name+'__precontroller'];if(precontroller_handler&&precontroller_handler.apply(element,[event])===false){return false;}
var handlers=this.getHandlers();for(var i=0;i<handlers.length;++i){var callback=handlers[i].callback;var filters=handlers[i].filters;try{if(this._filter(filters,element,event)){var abort=callback(element,event);if(abort===false){return event_abort(event);}}}catch(exception){Util.error('Uncaught exception in %s handler: %x',this._controlled_event_name,exception);}}},getHandlers:function(){return this._handlers.concat(this._fallback_handlers);},_init:function(){if(this._initialized){return;}
this._initialized=true;onloadRegister(function(){this._binding_enabled=true;set_inner_html.registerHandler(bind(this,'bindAll'),true);}.bind(this));},_registerHandler:function(handler_array,callback,filters){this._init();handler_array.push({callback:callback,filters:filters||0});},_filter:function(filters,element,event){if(filters&this.ALL){return true;}
if(!(filters&this.ALL_TARGETS)){if(element.target){return false;}}
if(!(filters&this.ALL_KEY_MODIFIERS)){if(event_has_key_modifiers(event)){return false;}}
return true;}});var LinkController=new _ElementController('a','onclick');copy_properties(LinkController,{ALL_PROTOCOLS:8,_filter:function(filters,element,event){if(!_ElementController.prototype._filter.apply(this,arguments)){return false;}
if(!element.getAttribute('href')){return false;}
if(!(filters&this.ALL_PROTOCOLS)){if(!LinkController.usesWebProtocol(element)){return false;}}
return true;},getProtocol:function(link){var href,protocol;return(href=link.getAttribute('href'))&&(protocol=href.match(/^(\w+):/))&&protocol[1].toLowerCase();},usesWebProtocol:function(link){var protocol=LinkController.getProtocol(link);return!protocol||protocol=='http'||protocol=='https';}});var FormController=new _ElementController('form','onsubmit');
if(window.Bootloader){Bootloader.done(1);}