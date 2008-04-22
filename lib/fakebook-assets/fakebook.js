get_obj=function(id){return document.getElementById(id);}
set_style=function(obj,style,value){
  if(typeof style=='string'){
    if(style=='opacity'){
      set_opacity(obj,parseFloat(value,10));
    }else{
      obj.style[style]=value;
    }
  }else{
    for(var i in style){
      set_style(obj,i,style[i]);
    }
  }
}

Element.prototype.setStyle=function(style,value){set_style(this,style,value);return this;}
Element.prototype.setClassName=function(classname){this.className=classname;return this;}
Element.prototype.getClassName=function(){return this.className;}
Element.prototype.hasClassName=function(classname){return has_css_class_name(this,classname);}
Element.prototype.addClassName=function(classname){add_css_class_name(this,classname);return this;}
Element.prototype.removeClassName=function(classname){remove_css_class_name(this,classname);return this;}
Element.prototype.toggleClassName=function(classname){this.hasClassName(classname)?this.removeClassName(classname):this.addClassName(classname);return this;}
Element.prototype.getId=function(){var id=this.id;if(id){return id.replace(/^app\d+_/,'');}else{return id;}}
Element.prototype.setId=function(id){var data=fbjs_dom.get_data(this);data.obj.id=['app',data.appid,'_',id].join('');return this;}
Element.prototype.setTextValue=function(text){var obj=this;fbjs_dom.clear_instances(obj,false);obj.innerHTML=htmlspecialchars(fbjs_sandbox.safe_string(text));return this;}
Element.prototype.setValue=function(value){this.value=value;return this;}
Element.prototype.getValue=function(){var obj=this;if(obj.tagName=='SELECT'){var si=obj.selectedIndex;if(si==-1){return null;}else{if(obj.options[si].getAttribute('value')==null){return undefined;}else{return obj.value;}}}else{return this.value;}}
Element.prototype.getStyle=function(style_str){return this.style[idx(style_str)];}
Element.prototype.setSrc=function(src){ this.src=src; return this; }

/*
Element.prototype.appendChild=function(child){this.appendChild((child));fbjs_dom.render(child);return child;}
Element.prototype.insertBefore=function(child,caret){if(caret){this.insertBefore((child),(caret));}else{this.appendChild((child));}
Element.prototype.removeChild=function(child){var child=(child);fbjs_dom.clear_instances(child,true);this.removeChild(child);return this;}
Element.prototype.replaceChild=function(newchild,oldchild){fbjs_dom.clear_instances(oldchild,true);this.replaceChild((newchild),(oldchild));return this;}
Element.prototype.cloneNode=function(tree){var data=fbjs_dom.get_data(this);return fbjs_dom.get_instance(data.obj.cloneNode(tree),data.appid);}
Element.prototype.getParentNode=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_first_valid_instance(data.obj.parentNode,'parentNode',data.appid);}
Element.prototype.getNextSibling=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_first_valid_instance(data.obj.nextSibling,'nextSibling',data.appid);}
Element.prototype.getPreviousSibling=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_first_valid_instance(data.obj.previousSibling,'previousSibling',data.appid);}
Element.prototype.getFirstChild=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_first_valid_instance(data.obj.firstChild,'nextSibling',data.appid);}
Element.prototype.getLastChild=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_first_valid_instance(data.obj.lastChild,'previousSibling',data.appid);}
Element.prototype.getChildNodes=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_instance_list(data.obj.childNodes,data.appid);}
Element.prototype.getElementsByTagName=function(tag){var data=fbjs_dom.get_data(this);return fbjs_dom.get_instance_list(data.obj.getElementsByTagName(tag),data.appid);}
Element.prototype.getOptions=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_instance_list(data.obj.options,data.appid);}
Element.prototype.getForm=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_instance(data.obj.form,data.appid);}
Element.prototype.serialize=function(){var elements=fbjs_dom.get_data(this).obj.elements;var data={};for(var i=elements.length-1;i>=0;i--){if(elements[i].name&&elements[i].name.substring(0,2)!='fb'&&elements[i].name!='post_form_id'&&!elements[i].disabled){if(elements[i].tagName=='SELECT'){var name=elements[i].multiple?elements[i].name+'[]':elements[i].name;for(var j=0,jl=elements[i].options.length;j<jl;j++){if(elements[i].options[j].selected){serialize_form_helper(data,name,(elements[i].options[j].getAttribute('value')==null)?undefined:elements[i].options[j].value);}}}else if(!(elements[i].type=='radio'||elements[i].type=='checkbox')||elements[i].checked||(!elements[i].type||elements[i].type=='text'||elements[i].type=='password'||elements[i].type=='hidden'||elements[i].tagName=='TEXTAREA')){serialize_form_helper(data,elements[i].name,elements[i].value);}}} return data;}
Element.prototype.setInnerXHTML=function(html){var data=fbjs_dom.get_data(this);var sanitizer=new fbjs_fbml_sanitize(data.appid);var htmlElem=sanitizer.parseFBML(html);if(!htmlElem)return this;var obj=this;switch(obj.tagName){case'TEXTAREA':fbjs_console.error('setInnerXHTML is not supported on textareas. Please use .value instead.');break;case'COL':case'COLGROUP':case'TABLE':case'TBODY':case'TFOOT':case'THEAD':case'TR':fbjs_console.error('setInnerXHTML is not supported on this node.');break;default:fbjs_dom.clear_instances(obj,false);obj.innerHTML='';this.appendChild(htmlElem);break;} return this;}
Element.prototype.setInnerFBML=function(fbml_ref){var html=fbjs_private.get(fbml_ref).htmlstring;var obj=this;switch(obj.tagName){case'TEXTAREA':fbjs_console.error('setInnerFBML is not supported on textareas. Please use .value instead.');break;case'COL':case'COLGROUP':case'TABLE':case'TBODY':case'TFOOT':case'THEAD':case'TR':fbjs_console.error('setInnerFBML is not supported on this node.');break;default:set_inner_html(obj,html);break;} return this;}
Element.prototype.setTextValue=function(text){var obj=this;fbjs_dom.clear_instances(obj,false);obj.innerHTML=htmlspecialchars(fbjs_sandbox.safe_string(text));return this;}
Element.prototype.setValue=function(value){this.value=value;return this;}
Element.prototype.getValue=function(){var obj=this;if(obj.tagName=='SELECT'){var si=obj.selectedIndex;if(si==-1){return null;}else{if(obj.options[si].getAttribute('value')==null){return undefined;}else{return obj.value;}}}else{return this.value;}}
Element.prototype.getSelectedIndex=function(){return this.selectedIndex;}
Element.prototype.setSelectedIndex=function(si){this.selectedIndex=si;return this;}
Element.prototype.getChecked=function(){return this.checked;}
Element.prototype.setChecked=function(c){this.checked=c;return this;}
Element.prototype.getSelected=function(){return this.selected;}
Element.prototype.setSelected=function(s){this.selected=s;return this;}
Element.prototype.setStyle=function(style,value){set_style(this,style,value);return this;}
Element.prototype.getStyle=function(style_str){return this.style[idx(style_str)];}
Element.prototype.setHref=function(href){href=fbjs_sandbox.safe_string(href);if(fbjs_dom.href_regex.test(href)){this.href=href;return this;}else{fbjs_console.error(href+' is not a valid hyperlink');}}
Element.prototype.setAction=function(a){a=fbjs_sandbox.safe_string(a);if(fbjs_dom.href_regex.test(a)){this.action=a;return this;}else{fbjs_console.error(a+' is not a valid hyperlink');}}
Element.prototype.getAction=function(){return this.action;}
Element.prototype.setMethod=function(m){m=fbjs_sandbox.safe_string(m);this.method=m.toLowerCase()=='get'?'get':'post';return this;}
Element.prototype.getMethod=function(){return this.method;}
Element.prototype.setSrc=function(src){src=fbjs_sandbox.safe_string(src);if(fbjs_dom.href_regex.test(src)){this.src=src;return this;}else{fbjs_console.error(src+' is not a valid hyperlink');}}
Element.prototype.getSrc=function(){return this.src;}
Element.prototype.setTarget=function(target){this.target=target;return this;}
Element.prototype.getTarget=function(){return this.target;}
Element.prototype.setClassName=function(classname){this.className=classname;return this;}
Element.prototype.getClassName=function(){return this.className;}
Element.prototype.hasClassName=function(classname){return has_css_class_name(this,classname);}
Element.prototype.addClassName=function(classname){add_css_class_name(this,classname);return this;}
Element.prototype.removeClassName=function(classname){remove_css_class_name(this,classname);return this;}
Element.prototype.toggleClassName=function(classname){this.hasClassName(classname)?this.removeClassName(classname):this.addClassName(classname);return this;}
Element.prototype.getTagName=function(){return this.tagName;}
Element.prototype.getNodeType=function(){return this.nodeType;}
Element.prototype.getId=function(){var id=this.id;if(id){return id.replace(/^app\d+_/,'');}else{return id;}}
Element.prototype.setId=function(id){var data=fbjs_dom.get_data(this);data.obj.id=['app',data.appid,'_',id].join('');return this;}
Element.prototype.setDir=function(dir){this.dir=dir;return this;}
Element.prototype.getdir=function(dir){return this.dir;}
Element.prototype.getClientWidth=function(){return this.clientWidth;}
Element.prototype.getClientHeight=function(){return this.clientHeight;}
Element.prototype.getOffsetWidth=function(){return this.offsetWidth;}
Element.prototype.getOffsetHeight=function(){return this.offsetHeight;}
Element.prototype.getAbsoluteLeft=function(){return elementX(this);}
Element.prototype.getAbsoluteTop=function(){return elementY(this);}
Element.prototype.getScrollHeight=function(){return this.scrollHeight;}
Element.prototype.getScrollWidth=function(val){return this.scrollWidth;}
Element.prototype.getScrollTop=function(){return this.scrollTop;}
Element.prototype.setScrollTop=function(val){this.scrollTop=val;return this;}
Element.prototype.getScrollLeft=function(){return this.scrollLeft;}
Element.prototype.setScrollLeft=function(val){this.scrollLeft=val;return this;}
Element.prototype.getTabIndex=function(){return this.tabIndex;}
Element.prototype.setTabIndex=function(tabindex){this.tabIndex=tabindex;return this;}
Element.prototype.getTitle=function(){return this.title;}
Element.prototype.setTitle=function(title){this.title=title;return this;}
Element.prototype.getRowSpan=function(){return this.rowSpan;}
Element.prototype.setRowSpan=function(rowSpan){this.rowSpan=rowSpan;return this;}
Element.prototype.getColSpan=function(){return this.colSpan;}
Element.prototype.setColSpan=function(colSpan){this.colSpan=colSpan;return this;}
Element.prototype.getName=function(){return this.name;}
Element.prototype.setName=function(name){this.name=name;return this;}
Element.prototype.getCols=function(){return this.cols;}
Element.prototype.setCols=function(cols){this.cols=cols;return this;}
Element.prototype.getRows=function(){return this.rows;}
Element.prototype.setRows=function(rows){this.rows=rows;return this;}
Element.prototype.getAccessKey=function(){return this.accessKey;}
Element.prototype.setAccessKey=function(accesskey){this.accessKey=accesskey;return this;}
Element.prototype.setDisabled=function(disabled){this.disabled=disabled;return this;}
Element.prototype.getDisabled=function(){return this.disabled;}
Element.prototype.setMaxLength=function(length){this.maxLength=length;return this;}
Element.prototype.getMaxLength=function(){return this.maxLength;}
Element.prototype.setReadOnly=function(readonly){this.readOnly=readonly;return this;}
Element.prototype.getReadOnly=function(){return this.readOnly;}
Element.prototype.setType=function(type){type=fbjs_sandbox.safe_string(type);this.type=type;return this;}
Element.prototype.getType=function(){return this.type;}
Element.prototype.getSelection=function(){var obj=this;return get_caret_position(obj);}
Element.prototype.setSelection=function(start,end){var obj=this;set_caret_position(obj,start,end);return this;}
Element.prototype.submit=function(){this.submit();return this;}
Element.prototype.focus=function(){this.focus();return this;}
Element.prototype.select=function(){this.select();return this;}
*/
