/*       Source:  Backing Store                                                               */
/*     Location:  js/lib/ui/drag.js r108775                                                   */
/*      Machine:  10.16.140.107                                                               */
/*    Generated:  July 15th 2008 12:34:49 AM PDT                                              */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


var Drag={};Drag.currentDraggable=null;Drag.grab=function(draggable){if(Drag.currentDraggable){Drag._onmouseup();}
draggable.lastDragOver=null;Drag.attachDragEvents();Drag.currentDraggable=draggable;}
Drag.attachDragEvents=function(){document.onselectstart=function(){document.onselectstart=null;return false;}
if(Drag.dragEventsAttached){return;}
Drag.dragEventsAttached=true;addEventBase(window,'mousemove',Drag._onmousemove);addEventBase(window,'mouseup',Drag._onmouseup);}
Drag.droppables={};Drag.addDroppable=function(namespace,droppable){(Drag.droppables[namespace]=Drag.droppables[namespace]||[]).push(droppable);}
Drag.removeDroppable=function(namespace,droppable){Drag.droppables[namespace].filter(function(a){a!=droppable;});}
Drag._onmousemove=function(event){if(!Drag.currentDraggable){return;}
var cursorPosition=Vector2.getEventPosition(event),currentDraggable=Drag.currentDraggable,droppables=Drag.droppables[currentDraggable.namespace];if(currentDraggable.namespace&&currentDraggable.active&&droppables){var zIndexesDict={};droppables.each(function(droppable){zIndexesDict[droppable.zIndex]=droppable.zIndex;});var zIndexes=[];for(var i in zIndexesDict){zIndexes.push(zIndexesDict[i]);}
zIndexes.sort();var lastDragOver=currentDraggable.lastDragOver,currentDragOver=null;for(var z=zIndexes.length;z>=0;z--){if(lastDragOver&&lastDragOver.zIndex==zIndexes[z]&&lastDragOver.pointInside(cursorPosition)){currentDragOver=lastDragOver;break;}else{for(var i=0;i<droppables.length;i++){if(zIndexes[z]!=droppables[i].zIndex){continue;}
if(lastDragOver!=droppables[i]&&currentDraggable.dom!=droppables[i].dom&&droppables[i].pointInside(cursorPosition)){currentDragOver=droppables[i];z=-1;break;}}}}
if(currentDragOver&&currentDragOver!=lastDragOver){currentDragOver.ondragover(currentDraggable);}
if(currentDragOver){currentDragOver.ondragmove(currentDraggable,cursorPosition.sub(Vector2.getElementPosition(currentDragOver.dom)));}
currentDraggable.lastDragOver=currentDragOver;}
Drag.currentDraggable._onmousemove(cursorPosition);}
Drag._onmouseup=function(){document.onselectstart=null;if(Drag.currentDraggable){Drag.currentDraggable._ondrop();Drag.currentDraggable=null;}}
function Draggable(element){if(this==window){if(element instanceof Array){var collection=[];element.each(function(instance){collection.push(new Draggable(instance));});return new Collection(Draggable,collection);}else{return new Draggable(element);}}else{this.data={};this.dom=element;this._onmousedown=this._onmousedown.bind(this);this._onclick=this._onclick.bind(this);addEventBase(this.dom,'mousedown',this._onmousedown);addEventBase(this.dom,'click',this._onclick);}}
Draggable.prototype.destroy=function(){if(this.handles!==null){for(var i=0;i<this.handles.length;i++){removeEventBase(this.handles[i],'mousedown',this._onmousedown);removeEventBase(this.handles[i],'click',this._onclick);}}else{removeEventBase(this.dom,'mousedown',this._onmousedown);removeEventBase(this.handles[i],'click',this._onclick);}
this.data=this.dom=null;}
Draggable.prototype._onclick=function(event){if(this.active){return event_kill(event);}}
Draggable.prototype._ongrab=function(){this.ongrab();if(!this.oldPosition){this.oldPosition=this.dom.style.position;}
this.dom.style.position=this.absolute?'absolute':'relative';}
Draggable.prototype._onmousedown=function(event){var target=event_get_target(event);if(is_node(target,['input','select','textarea','object','embed'])){return false;}
var vector=Vector2.getEventPosition(event);this.cursorPositionVector=vector.sub(Vector2.getElementPosition(this.dom));Drag.grab(this,event);if(this.gutter){this.cursorInitialVector=vector;}else{this._setActive(true);this._ongrab();}
return event_prevent(event);}
Draggable.prototype._onmousemove=function(vector){if(!this.active){if(vector.distanceTo(this.cursorInitialVector)>=this.gutter){this._setActive(true);this._ongrab();}}
if(this.active){vector.sub(Vector2.getElementPosition(this.dom).sub(new Vector2(parseInt(this.dom.style.left?this.dom.style.left:get_style(this.dom,'left'),10)||0,parseInt(this.dom.style.top?this.dom.style.top:get_style(this.dom,'top'),10)||0))).sub(this.cursorPositionVector).setElementPosition(this.dom);this.ondrag(vector);}}
Draggable.prototype._ondrop=function(){if(this.active){(function(){this._setActive(false);}).bind(this).defer();this.ondrop();if(this.lastDragOver){this.lastDragOver.ondrop(this);}}}
Draggable.prototype.resetPosition=function(){this.dom.style.position=this.oldPosition;this.oldPosition=null;this.dom.style.left=null;this.dom.style.top=null;return this;}
Draggable.prototype.setUseAbsolute=function(absolute){this.absolute=absolute;return this;}
Draggable.prototype.ondrag=bagofholding;Draggable.prototype.setDragHandler=function(func){this.ondrag=func;return this;}
Draggable.prototype.ongrab=bagofholding;Draggable.prototype.setGrabHandler=function(func){this.ongrab=func;return this;}
Draggable.prototype.ondrop=bagofholding;Draggable.prototype.setDropHandler=function(func){this.ondrop=func;return this;}
Draggable.prototype.gutter=0;Draggable.prototype.setGutter=function(gutter){this.gutter=gutter;return this;}
Draggable.prototype.setNamespace=function(namespace){this.namespace=namespace;return this;}
Draggable.prototype.handles=null;Draggable.prototype.addHandle=function(handle){if(this.handles===null){this.handles=[];removeEventBase(this.dom,'mousedown',this._onmousedown);removeEventBase(this.dom,'click',this._onclick);}
this.handles.push(handle);addEventBase(handle,'mousedown',this._onmousedown);addEventBase(handle,'click',this._onclick);return this;}
Draggable.prototype.getDOM=function(){return this.dom;}
Draggable.prototype.setKey=function(key,value){this.data[key]=value;return this;}
Draggable.prototype.getKey=function(key){return this.data[key];}
Draggable.prototype._setActive=function(state){this.dom.activeDrag=this.active=state;if(this.handles!==null){for(var i=0;i<this.handles.length;i++){this.handles[i].activeDrag=state;}}}
function Droppable(element){if(this==window){if(element instanceof Array){var collection=[];element.each(function(instance){collection.push(new Droppable(instance));});return new Collection(Droppable,collection);}else{return new Droppable(element);}}else{this.data={};this.dom=element;this.namespace=null;}}
Droppable.prototype.destroy=function(){if(this.namespace){Drag.removeDroppable(this.namespace,this);}
this.data=this.dom=null;}
Droppable.prototype.setNamespace=function(namespace){if(this.namespace){Drag.removeDroppable(namespace,this);}
Drag.addDroppable(namespace,this);return this;}
Droppable.prototype.zIndex=0;Droppable.prototype.setZIndex=function(index){this.zIndex=index;return this;}
Droppable.prototype.pointInside=function(vector){var position=Vector2.getElementPosition(this.dom);return position.x<=vector.x&&this.dom.offsetWidth+position.x>vector.x&&position.y<=vector.y&&this.dom.offsetHeight+position.y>vector.y;}
Droppable.prototype.ondragover=bagofholding;Droppable.prototype.setDragOverHandler=function(func){this.ondragover=func;return this;}
Droppable.prototype.ondragmove=bagofholding;Droppable.prototype.setDragMoveHandler=function(func){this.ondragmove=func;return this;}
Droppable.prototype.ondrop=bagofholding;Droppable.prototype.setDropHandler=function(func){this.ondrop=func;return this;}
Droppable.prototype.getDOM=Draggable.prototype.getDOM;Droppable.prototype.setKey=Draggable.prototype.setKey;Droppable.prototype.getKey=Draggable.prototype.getKey;
if(window.Bootloader){Bootloader.done(1);}