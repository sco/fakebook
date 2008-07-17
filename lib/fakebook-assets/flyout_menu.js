/*       Source:  Backing Store                                                               */
/*     Location:  js/flyout_menu.js r110506                                                   */
/*      Machine:  10.16.139.101                                                               */
/*    Generated:  July 17th 2008 4:09:47 AM PDT                                               */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


function dropmenu(clickTarget){if(this==window){return new dropmenu(clickTarget);}else{this.className=null;this.menu=null;this.menuClickArea=null;this.showHandler=null;this.hideHandler=null;this.alignment=null;this.isShown=false;this.show_hooks=[];this.hide_hooks=[];this.clickTarget=clickTarget;this.id=null;clickTarget.onclick=this.toggle.bind(this);this.container=$('fb_dropmenu_container');return this;}}
dropmenu.ALIGN_RIGHT=1;dropmenu.ALIGN_LEFT=2;dropmenu.prototype.setPosition=function(alignment){this.alignment=alignment;return this;}
dropmenu.prototype.setMenuClickArea=function(id){this.menuClickArea=$(id);return this;}
dropmenu.prototype.setMarkupContent=function(id,className,markup){this.menuContent=markup;this.className=className;this.id=id;return this;}
dropmenu.prototype.registerHTMLMenu=function(menu_id){this.registered_menu_id=menu_id;return this;}
dropmenu.prototype.addHook=function(type,fn){this[type+'_hooks'].push(fn);return this;}
dropmenu.prototype.removeHook=function(type,fn){for(var i=0;i<this[type+'_hooks'].length;i++){if(fn==this[type+'_hooks'][i]){this[type+'_hooks'].splice(i,1);return true;}}
return this;}
dropmenu.prototype.toggle=function(e){if(!this.menu){this._buildMenu();}
this._positionMenu();if(!this.isShown){this.justClicked=true;this._show();}else{this._hide();}
return false;}
dropmenu.prototype.destroy=function(){if(this.menu.parentNode){this.menu.parentNode.removeChild(this.menu);}}
dropmenu.prototype._buildMenu=function(){if(this.registered_menu_id){this.menu=$(this.registered_menu_id);if(this.alignment){this.container.appendChild(this.menu);}}else{this._buildDynamicMenu();}
this.menuClickArea=this.menuClickArea||DOM.scry(this.menu,'div.menu_content');this.menuClickArea.onclick=chain(stopPropagation,this.menuClickArea.onclick);var menu_links=DOM.scry(this.menu,'a');for(var i=0;i<menu_links.length;i++){addEventBase(menu_links[i],'click',function(){this._hide();}.bind(this),this.menu_id+'_link_'+i);}}
dropmenu.prototype._buildDynamicMenu=function(){this.menu=document.createElement('div');this.menu.className='dropdown_menu elem_hidden '+(this.className?' '+this.className:'');this.menu.id='dropdown_menu_'+this.id;if(!is_scalar(this.menuContent)){DOM.setContent(this.menu,this.menuContent);}else{set_inner_html(this.menu,this.menuContent);}
this.container.appendChild(this.menu);}
dropmenu.prototype._positionMenu=function(){if(this.alignment||(!this.alignment&&!this.registered_menu_id)){if(this.menu.parentNode!=this.container){this.container.appendChild(this.menu);}
var x=elementX(this.clickTarget)-elementX(this.container);var y=elementY(this.clickTarget)-elementY(this.container)+this.clickTarget.offsetHeight;if(this.alignment==dropmenu.ALIGN_RIGHT){this.menu.style.left='-9999px';this.menu.style.top='-9999px';CSS.removeClass(this.menu,'hidden_elem');var menu_width=this.menu.offsetWidth;x=x+this.clickTarget.offsetWidth-menu_width;CSS.addClass(this.menu,'hidden_elem');;}
this.menu.style.left=x+'px';this.menu.style.top=y+'px';}}
dropmenu.prototype._onclick=function(event){this._hide();return false;}
dropmenu.prototype._show=function(){CSS.removeClass(this.menu,'hidden_elem');var hide=this._hide.bind(this,this.menu.id);this.click_event=addEventBase(document.body,'click',hide,this.menu.id);onunloadRegister(hide,true);this.isShown=true;for(var i=0;i<this.show_hooks.length;i++){this.show_hooks[i]();}}
dropmenu.prototype._hide=function(){if(this.justClicked){this.justClicked=false;return false;}
CSS.addClass(this.menu,'hidden_elem');removeEventBase(document.body,'click',this.click_event,this.menu.id);this.click_event=null;this.isShown=false;for(var i=0;i<this.hide_hooks.length;i++){this.hide_hooks[i]();}}
dropmenu.prototype._build_menu_shim=function(){this.shim=null;if(ua.ie()){this.shim=document.createElement('iframe');shim.className='iframe_shim';this.container.appendChild(this.shim);}}
function flyout_menu(clickTarget){if(this==window){return new flyout_menu(clickTarget);}else{this.title='';this.parent.construct(this,clickTarget);}
this.menuWidth=0;this.maskWidth=0;}
flyout_menu.extend(dropmenu);flyout_menu.prototype.setMarkupContent=function(id,className,title,markup){this.parent.setMarkupContent(id,className,markup);this.title=title;return this;}
flyout_menu.prototype._buildDynamicMenu=function(){this.menu=document.createElement('div');CSS.addClass(this.menu,(this.className?' '+this.className:'')+' flyout_menu elem_hidden');if(this.alignment==dropmenu.ALIGN_RIGHT){CSS.addClass(this.menu,'flyout_menu_left');}
this.menu.id='flyout_menu_'+this.id;var menuContentId='content_'+this.id;this.mask_id='flyout_menu_mask_'+this.id;var html=[];html.push('<div class="flyout_menu_header_shadow">');html.push('<div class="flyout_menu_header">');html.push('<div class="flyout_menu_mask" id="'+this.mask_id+'"></div>');html.push('<div class="flyout_menu_title">'+this.title+'</div>');html.push('</div></div>');html.push('<div class="flyout_menu_content_shadow">');html.push('<div class="menu_content" id="content_'+this.id+'">');html.push('</div></div>');set_inner_html(this.menu,html.join(''));this.container.appendChild(this.menu);if(!is_scalar(this.menuContent)){DOM.setContent($(menuContentId),this.menuContent);}else{set_inner_html($(menuContentId),this.menuContent);}
this.menuClickArea=$(menuContentId);this.menuWidth=Vector2.getElementDimensions(this.menu).x;this.maskWidth=Vector2.getElementDimensions($(this.mask_id)).x;}
flyout_menu.prototype._positionMenu=function(){if(this.alignment||(!this.alignment&&!this.registered_menu_id)){var x;switch(this.alignment){case dropmenu.ALIGN_LEFT:case null:x=elementX(this.clickTarget)-elementX(this.container);break;case dropmenu.ALIGN_RIGHT:var right_anchor_pos=Rect.getElementBounds(this.clickTarget).r-elementX(this.container);var padding=4;x=right_anchor_pos-this.menuWidth-this.maskWidth+padding;break;}
var y=elementY(this.clickTarget)-elementY(this.container);this.menu.style.left=x+'px';this.menu.style.top=y+'px';}}
function hover_menu(clickTarget){if(this==window){return new hover_menu(clickTarget);}else{this.parent.construct(this,clickTarget);this.timeOut=0;this.clickTarget.onclick=null;this.enterTimer=null;this.exitTimer=null;}}
hover_menu.extend(dropmenu);hover_menu.prototype.setTimeoutInterval=function(time){this.timeOut=time;return this;}
hover_menu.prototype._clickTarget_onmouseover=function(target,e){this.enterTimer=setTimeout(function(){this._show();}.bind(this),this.timeOut);clearTimeout(this.exitTimer);}
hover_menu.prototype._clickTarget_onmouseout=function(target,e){e=e||window.event;var relatedTarget=(e.relatedTarget)?e.relatedTarget:e.toElement;if(is_descendent(relatedTarget,target)){return;}
if(!is_descendent(relatedTarget,this.menu)){this.exitTimer=setTimeout(function(){this._hide();}.bind(this),this.timeOut);}
clearTimeout(this.enterTimer);}
hover_menu.prototype._menu_onmouseover=function(target,e){clearTimeout(this.exitTimer);}
hover_menu.prototype._menu_onmouseout=function(target,e){e=e||window.event;var relatedTarget=(e.relatedTarget)?e.relatedTarget:e.toElement;if(is_descendent(relatedTarget,target)){return;}
this.exitTimer=setTimeout(function(){this._hide();}.bind(this),this.timeOut);clearTimeout(this.enterTimer);}
hover_menu.prototype.initialize=function(){if(!this.menu){this._buildMenu();}
this.clickTarget.onmouseover=this._clickTarget_onmouseover.bind(this,this.clickTarget);this.clickTarget.onmouseout=this._clickTarget_onmouseout.bind(this,this.clickTarget);this.menu.onmouseout=this._menu_onmouseout.bind(this,this.menu);this.menu.onmouseover=this._menu_onmouseover.bind(this,this.menu);}
if(window.Bootloader){Bootloader.done(1);}