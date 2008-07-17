/*       Source:  Local Cache                                                                 */
/*     Location:  rsrc:103413:/html/js/lib/net/livemessage.js                                 */
/*      Machine:  10.16.140.102                                                               */
/*    Generated:  July 9th 2008 3:45:31 PM PDT                                                */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


function LiveMessageDispatcher(){this.listeners=null;this.shutdownListeners=null;this.restartListeners=null;if(window.pendingLiveMessageCallbackRegistrations){for(var i=0;i<window.pendingLiveMessageCallbackRegistrations.length;i++){var info=window.pendingLiveMessageCallbackRegistrations[i];this.registerHandler(info.app_id,info.event_name,info.callback_fn);}}
if(window.pendingLiveMessageShutdownRegistrations){for(var i=0;i<window.pendingLiveMessageShutdownRegistrations.length;i++){var info=window.pendingLiveMessageShutdownRegistrations[i];this.registerShutdownHandler(info.app_id,info.callback_fn);}}
if(window.pendingLiveMessageRestartRegistrations){for(var i=0;i<window.pendingLiveMessageRestartRegistrations.length;i++){var info=window.pendingLiveMessageRestartRegistrations[i];this.registerRestartHandler(info.app_id,info.callback_fn);}}}
LiveMessageDispatcher.prototype.registerHandler=function(app_id,event_name,callback_fn){if(!this.listeners){this.listeners={};window.presence.registerMsgHandler(this.dispatcher.bind(this));}
if(!this.listeners[app_id]){this.listeners[app_id]={};}
this.listeners[app_id][event_name]=callback_fn;}
LiveMessageDispatcher.prototype.dispatcher=function(channel,obj){if(obj.type==LiveMessageDispatcher.MSG_TYPE){app_listeners=this.listeners[obj.app_id];if(app_listeners){var callback_fn=app_listeners[obj.event_name];if(callback_fn){callback_fn(obj.message);return true;}}}
return false;}
LiveMessageDispatcher.prototype.shutdownDispatcher=function(channel){if(this.shutdownListeners){for(var app_id in this.shutdownListeners){this.shutdownListeners[app_id]();}}}
LiveMessageDispatcher.prototype.registerShutdownHandler=function(app_id,callback_fn){if(!this.shutdownListeners){this.shutdownListeners={};window.presence.registerShutdownHandler(this.shutdownDispatcher.bind(this));}
this.shutdownListeners[app_id]=callback_fn;}
LiveMessageDispatcher.prototype.restartDispatcher=function(channel){if(this.restartListeners){for(var app_id in this.restartListeners){this.restartListeners[app_id]();}}}
LiveMessageDispatcher.prototype.registerRestartHandler=function(app_id,callback_fn){if(!this.restartListeners){this.restartListeners={};window.presence.registerRestartHandler(this.restartDispatcher.bind(this));}
this.restartListeners[app_id]=callback_fn;}
if(window.Bootloader){Bootloader.done(1);}