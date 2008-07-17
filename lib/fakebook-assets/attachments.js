/*       Source:  Global Cache                                                                */
/*     Location:  js/attachments.js r109415                                                   */
/*      Machine:  10.16.139.102                                                               */
/*    Generated:  July 15th 2008 12:34:53 AM PDT                                              */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


function fix_attachment_more_menu_alignment(more_link){var attachment_buttons_list=ge('attachment_buttons_list');var total_width=attachment_buttons_list.offsetWidth;if(more_link){var more_offset=Vector2.getElementPosition(more_link).x;var attachments_offset=Vector2.getElementPosition(attachment_buttons_list).x;var offset=more_offset-attachments_offset;var icon_width=more_link.offsetWidth;var space_left=total_width-offset;if(space_left>=icon_width&&space_left<126){var more_menu=ge('wall_more_menu');var right_margin=0;more_menu.style.left='auto';more_menu.style.right=right_margin+'px';}}}
function wall_video_thumb_adjust(play_img_div,thumb_img){if(parseInt(ua.ie())==6){play_img_div.style.marginTop=(-1*thumb_img.height-3)+'px';play_img_div.style.paddingTop=(thumb_img.height-19)+'px';}
play_img_div.style.display='block';}
function attachments(context_id){this.attachment_added=false;this.attachment_oid=null;this.attachment_app_id=null;this.is_share=false;this.attached_share=false;this.scrape_last_count=0;this.dialog=null;this.wall_attachments={};this.last_url_scraped=null;this.context=context_id;this.edit_container_id='attachment_edit_container_'+context_id;this.edit_loading_id='attachment_edit_loading_'+context_id;this.edit_id='attachment_edit_'+context_id;this.view_container_id='attachment_view_container_'+context_id;this.view_wrapper_id='attachment_view_wrapper_'+context_id;this.view_id='attachment_view_'+context_id;this.remove_id='attachment_remove_'+context_id;this.view_loading_id='attachment_view_loading_'+context_id;this.is_active=false;}
attachments.prototype.show_edit_loading=function(){show(this.edit_loading_id);}
attachments.prototype.hide_edit_loading=function(){hide(this.edit_loading_id);}
attachments.prototype.show_attachment_edit=function(title,html,share_type,ajax_params){this.is_active=true;if(this.dialog){return;}
var is_app=(share_type==14);this.is_share=(share_type==100);var wrapper='<div id="'+this.edit_container_id+'">'+'<div id="'+this.edit_loading_id+'">&nbsp</div>'+'</div>';this.dialog=new pop_dialog('attachment_dialog');this.dialog.is_stackable=true;this.dialog.show_choice(title,wrapper,tx('at01'),function(){if(this.is_share){this._share_attach();}else{this._attach(is_app,ajax_params,true);}
this.dialog.hide();this.dialog=null;this.is_active=false;}.bind(this),tx('sh:cancel-button'),function(){this.dialog.fade_out(100);this.remove_attachment_view();this.dialog=null;this.is_active=false;}.bind(this));var container=ge(this.edit_container_id);var div=document.createElement('div');div.className='share_stage';add_css_class_name(div,'attachment_edit');div.id=this.edit_id;div.is_app=is_app;container.appendChild(div);set_inner_html(div,html);if(this.is_share){placeholderSetup('share_link');var ie=ua.ie();if(!ie||ie>6){$('share_link').focus();}}
return div;}
attachments.prototype._show_attachment_view=function(html,is_app){var container=ge(this.view_container_id);var div=document.createElement('div');div.className='share_stage';add_css_class_name(div,'attachment_view');div.id=this.view_id;div.is_app=is_app;container.appendChild(div);set_inner_html(div,html);hide('attachment_buttons_list');var wrapper=ge(this.view_wrapper_id);wrapper.style.display='block';this.attachment_added=true;return div;}
attachments.prototype.remove_attachment_view=function(){var container=ge(this.view_container_id);var attachment=ge(this.view_id);if(this.attachment_added&&attachment){this.removed=true;container.removeChild(attachment);hide(this.view_wrapper_id);if(ge('attachment_buttons_list')){show('attachment_buttons_list');}
var attachment_remove=ge(this.remove_id);attachment_remove.className=attachment_remove.className.replace(' edit','');}
this.attachment_added=false;this.attachment_oid=null;this.attachment_app_id=null;this.is_share=false;this.attached_share=false;}
attachments.prototype.get_all_form_elements=function(attachment){var inputs=[];if(attachment){var html_input=attachment.getElementsByTagName('input');for(var i=0;i<html_input.length;i++){inputs.push(html_input[i]);}
var html_select=attachment.getElementsByTagName('select');for(var i=0;i<html_select.length;i++){inputs.push(html_select[i]);}
var html_textarea=attachment.getElementsByTagName('textarea');for(var i=0;i<html_textarea.length;i++){inputs.push(html_textarea[i]);}}
return inputs;}
attachments.prototype._add_attachment_input_data=function(data,attachment){if(!attachment){return false;}
var inputs=this.get_all_form_elements(attachment);if(attachment.is_app){data['attachment']={'app':{},'type':14};for(var i=0;i<inputs.length;i++){if(!(inputs[i].type=="radio"||inputs[i].type=="checkbox")||inputs[i].checked){data['attachment']['app'][inputs[i].name]=inputs[i].value;}}}else{var has_type=false;for(var i=0;i<inputs.length;i++){if(inputs[i].name=='attachment[type]'){has_type=true;}
if(inputs[i].name=='attachment[params][url]'){if(!inputs[i].value||inputs[i].value=='http://'){return false;}}
data[inputs[i].name]=inputs[i].value;}
if(!has_type){return false;}}
data['context']=this.context;return true;}
attachments.prototype._attach=function(is_app,ajax_params,has_form_data){var asyncData={};if(has_form_data){var attachment=ge(this.edit_id);var added=this._add_attachment_input_data(asyncData,attachment);if(!added){return;}}
if(ajax_params){for(var param in ajax_params){asyncData[param]=ajax_params[param];}}
var loading=ge(this.view_loading_id);loading.style.display='block';var view_container=this._show_attachment_view('',is_app);var onDone=function(response){var responseObj=response.getPayload();if(!view_container.removed){hide(this.view_loading_id);set_inner_html(view_container,responseObj['html']);this.attachment_oid=responseObj['oid'];this.attachment_app_id=responseObj['app_id'];}}.bind(this);new AsyncRequest().setHandler(onDone).setURI('/ajax/attachments.php').setErrorHandler(this.remove_attachment_view).setTransportErrorHandler(this.remove_attachment_view).setData(asyncData).send();}
attachments.prototype.add_post_data=function(post_data){if(this.attachment_added){if(this.attached_share){this._add_attachment_input_data(post_data,ge(this.view_id));}else{post_data['attachment']={'oid':this.attachment_oid,'app_id':this.attachment_app_id};}}}
attachments.prototype.prepare_wall_post=function(){var attachment=ge(this.view_id);if(attachment){var inputs=this.get_all_form_elements(attachment);for(var i=0;i<inputs.length;i++){inputs[i].disabled=true;}}}
attachments.prototype.show_full_attachment=function(post_id){if(typeof this.wall_attachments[post_id]!='string'){return;}
hide('attachment_compact_'+post_id);hide('attached_item_info_'+post_id);hide('attachment_compact_td_'+post_id);attachment_div=ge('wall_attachment_'+post_id);set_inner_html(attachment_div,this.wall_attachments[post_id]);}
attachments.prototype.fix_app_inputs_on_send=function(){var attachment=ge(this.view_id);if(!this.attachment_added||!attachment){return;}
if(!this.attached_share){new_inputs=[];new_inputs.push(create_hidden_input('attachment[oid]',this.attachment_oid));new_inputs.push(create_hidden_input('attachment[app_id]',this.attachment_app_id));if(attachment.is_app){new_inputs.push(create_hidden_input('attachment[type]',14));new_inputs.push(create_hidden_input('attachment[app][message_sent]',true));}
for(var i=0,il=new_inputs.length;i<il;i++){attachment.appendChild(new_inputs[i]);}}}
attachments.prototype.share_attach_from_dialog=function(){this._share_attach();generic_dialog.get_dialog(ge(this.edit_container_id)).hide();this.dialog=null;}
attachments.prototype._share_attach=function(){var share_link=ge('share_link');var url=share_link.value;if(url&&url!='http://'){this._share_submit_url(url);}}
attachments.prototype._share_submit_url=function(url){this._show_attachment_view(this.share_html_block,false);var view_container=ge(this.view_container_id);var stage_area=view_container.childNodes[0].childNodes[0].childNodes[0];this._attach_link_url(stage_area,url,true);var attachment_remove=ge(this.remove_id);attachment_remove.className+=' edit';this.attached_share=true;}
attachments.prototype._attach_link_url=function(obj,url,show_loading){var attachment=composer_attachment.from_url(url);if(!attachment){return;}
attachment.container_ready(obj,show_loading);}
attachments.prototype._is_fb_code_url=function(url){return url.search('fb:')==0;}
attachments.prototype._detect_url=function(obj,force){var url='';var start_position=-1;var end_position=-1;if(force==true){if(url=obj.value.match(/www\.\S*/i)){start_position=obj.value.indexOf(url[0]);end_position=start_position+url[0].length;url="http://"+url[0];}else{var match='';if(match=obj.value.match(/(http|fb):\/\/\S*/i)){url=match[0];start_position=obj.value.indexOf(match[0]);end_position=start_position+match[0].length;}}}else{if(url=obj.value.match(/www\.\S*[\s|\)|\!]/i)){start_position=obj.value.indexOf(url[0]);end_position=start_position+url[0].length;url="http://"+url[0];}else{var match='';if(match=obj.value.match(/(http|fb):\/\/\S*[\s|\)|\!]/i)){url=match[0];start_position=obj.value.indexOf(match[0]);end_position=start_position+match[0].length;}}}
if(url){url=url.replace(/[\s|\)|\!]/g,'');var last_char=url.charAt(url.length-1);if(last_char.match(/[,|.]/)){url=url.substr(0,url.length-1);}
var cursor_position=get_caret_position(obj).start;if(url!=this.last_url_scraped&&cursor_position&&start_position>=0&&end_position>=0&&(cursor_position<start_position||cursor_position>=end_position)){this.last_url_scraped=url;if(this._is_fb_code_url(url)){obj.value=obj.value.substr(0,start_position)+obj.value.substr(end_position);}}else{url='';}}
return url;}
attachments.prototype._auto_scrape_url=function(obj){if(this.attachment_added){return false;}
if(!this.scrape_last_count){this.scrape_last_count=0;}
if((obj.value.length-this.scrape_last_count)>5||(this.scrape_last_count==0&&obj.value.length>1)){var force=true;}
var url=this._detect_url(obj,force);if(url){if(this._is_fb_code_url(url)){var data={'code':url,'context':this.context};this._attach(true,data,false);}else{this._share_submit_url(url);}}
this.scrape_last_count=obj.value.length;return false;}
attachments.prototype.start_textarea_interval=function(obj){this.textarea_obj=obj;this.textarea_interval=setInterval(this._textarea_interval_function.bind(this),50);}
attachments.prototype._textarea_interval_function=function(){if(typeof this!='undefined'&&this.textarea_obj&&(!this.attachment_added&&ge(this.view_wrapper_id))){this._auto_scrape_url(this.textarea_obj);}else{this.stop_textarea_interval();}}
attachments.prototype.stop_textarea_interval=function(){clearInterval(this.textarea_interval);}
if(window.Bootloader){Bootloader.done(1);}