/*       Source:  Global Cache                                                                */
/*     Location:  js/canvas.js r105208                                                        */
/*      Machine:  10.16.139.109                                                               */
/*    Generated:  July 9th 2008 3:47:33 PM PDT                                                */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


function PlatformCanvasController(app_id){this.app_id=app_id;setTimeout(this.refreshAppSession.bind(this),PlatformCanvasController.SESSION_REFRESH);}
PlatformCanvasController.SESSION_REFRESH=3300000;PlatformCanvasController.prototype.refreshAppSession=function(){new AsyncRequest().setURI('/ajax/session.php').setData({'app_id':this.app_id}).setReadOnly(true).setHandler(function(response){var payload=response.getPayload();if(payload['session_end']>0){setTimeout(this.refreshAppSession.bind(this),PlatformCanvasController.SESSION_REFRESH);}}.bind(this)).send();}
var smartIframes=[];function smartSizingFrameAdded(){window.onresize=_resizeSmartFrames;smartIframes=[];var allIframes=document.getElementsByTagName('iframe');for(var i=0;i<allIframes.length;i++){var frame=allIframes[i];if(frame.className=='smart_sizing_iframe'){smartIframes.push(frame);frame.style.width=frame.parentNode.scrollWidth-2+"px";}}
_resizeSmartFrames();}
if(window.innerHeight){var windowHeight=function(){return window.innerHeight;};}else if(document.documentElement&&document.documentElement.clientHeight){var windowHeight=function(){return document.documentElement.clientHeight;};}else{var windowHeight=function(){return document.body.clientHeight;};}
function _resizeSmartFrames(){var height=windowHeight();for(var i=0;i<smartIframes.length;i++){var frame=smartIframes[i];var spaceLeft=height-elementY(frame)-61;frame.style.height=spaceLeft/(smartIframes.length-i)+'px';}}
if(window.Bootloader){Bootloader.done(1);}