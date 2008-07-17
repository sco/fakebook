/*       Source:  Global Cache                                                                */
/*     Location:  js/lib/ui/sort.js r110180                                                   */
/*      Machine:  10.16.139.103                                                               */
/*    Generated:  July 16th 2008 1:55:17 PM PDT                                               */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


function SortableGroup(){this.namespace='sortable'+(++SortableGroup.instanceCount);this.draggables={};this.droppables={};this.sortables={};this.linkedGroups=[];this.linkedGroups.onlinkjump=bagofholding;this.rootNode=null;}
SortableGroup.instanceCount=0;SortableGroup.prototype.gutter=15;SortableGroup.prototype.addSortable=function(key,obj,handle){if(this.rootNode===null){this.rootNode=obj.parentNode;if(!this.linkedGroups.placeholder){this.linkedGroups.placeholder=this.placeholder=$N(obj.tagName,{className:'dragPlaceholder',style:{padding:'0px'}});}else{this.placeholder=this.linkedGroups.placeholder;}}else if(this.rootNode!=obj.parentNode){throw new Error('All sortables of a collection must share the same parentNode');}
if(key in this.draggables){throw new Error('All sortables must have a unique key');}
this.sortables[key]=obj;this.draggables[key]=(new Draggable(obj)).setNamespace(this.namespace).setGutter(this.gutter).setUseAbsolute(true).setGrabHandler(this.grabHandler.bind(this,key)).setDropHandler(this.dropHandler.bind(this,key)).setKey('key',key);if(handle){this.draggables[key].addHandle(handle);}
this.droppables[key]=(new Droppable(obj)).setNamespace(this.namespace).setDragOverHandler(this._dragOverHandlerShim.bind(null,this,key));return this;}
SortableGroup.prototype.link=function(sortgroup){sortgroup.linkedGroups=this.linkedGroups;if(!this.linkedGroups.length){this.linkedGroups.push(this);}
this.linkedGroups.push(sortgroup);for(var i=0;i<this.linkedGroups.length;i++){if(this.linkedGroups[i].namespace!=this.namespace){this.linkedGroups[i].namespace=this.namespace;for(var j in this.linkedGroups[i].droppables){this.linkedGroups[i].droppables[j].setNamespace(this.namespace);this.linkedGroups[i].draggables[j].setNamespace(this.namespace);}}}
return this;}
SortableGroup.prototype.getOrder=function(){if(!this.rootNode){return[];}
var ret=[],childNodes=this.rootNode.childNodes;for(var i=0;i<childNodes.length;i++){for(var k in this.sortables){if(this.sortables[k]==childNodes[i]){ret.push(k);break;}}}
return ret;}
SortableGroup.prototype.migrateLinkedSortable=function(key){for(var i=0;i<this.linkedGroups.length;i++){if(key in this.linkedGroups[i].draggables){this.sortables[key]=this.linkedGroups[i].sortables[key];this.draggables[key]=this.linkedGroups[i].draggables[key];this.draggables[key].setGrabHandler(this.grabHandler.bind(this,key)).setDropHandler(this.dropHandler.bind(this,key));this.droppables[key]=this.linkedGroups[i].droppables[key];this.droppables[key].setDragOverHandler(this._dragOverHandlerShim.bind(null,this,key));delete this.linkedGroups[i].sortables[key];delete this.linkedGroups[i].draggables[key];delete this.linkedGroups[i].droppables[key];return true;}}
return false;}
SortableGroup.prototype.setLinkJumpHandler=function(func){this.linkedGroups.onlinkjump=func;}
SortableGroup.prototype.onorderchange=bagofholding;SortableGroup.prototype.setOrderChangeHandler=function(func){this.onorderchange=func;}
SortableGroup.prototype.grabHandler=function(draggableKey){this.placeholder.className=this.sortables[draggableKey].className;CSS.addClass(this.sortables[draggableKey],'drag');Vector2.getElementDimensions(this.sortables[draggableKey]).setElementDimensions(this.placeholder);this.rootNode.insertBefore(this.placeholder,this.sortables[draggableKey]);}
SortableGroup.prototype.dropHandler=function(draggableKey){CSS.removeClass(this.sortables[draggableKey],'drag');this.draggables[draggableKey].resetPosition();this.rootNode.insertBefore(this.sortables[draggableKey],this.placeholder);this.rootNode.removeChild(this.placeholder);this.onorderchange();}
SortableGroup.prototype._dragOverHandlerShim=function(that,droppableKey,draggable){that.dragOverHandler(droppableKey,draggable.getKey('key'));};SortableGroup.prototype.dragOverHandler=function(droppableKey,draggableKey){var jumped=false;if(!(draggableKey in this.draggables)){if(!this.migrateLinkedSortable(draggableKey)){throw new Error('Draggable dropped onto a foreign droppable!');}
jumped=true;}
var before=true,childNodes=this.rootNode.childNodes,droppable=this.sortables[droppableKey],draggable=this.sortables[draggableKey];for(var i=0;i<childNodes.length;i++){if(childNodes[i]==droppable){break;}else if(childNodes[i]==draggable){before=false;break;}}
if(before){this.rootNode.insertBefore(draggable,droppable);}else{this.rootNode.insertBefore(droppable,draggable);}
this.rootNode.insertBefore(this.placeholder,draggable);if(jumped){this.linkedGroups.onlinkjump.call(this,draggableKey);}}
if(window.Bootloader){Bootloader.done(1);}