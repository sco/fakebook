/*       Source:  Global Cache                                                                */
/*     Location:  js/lib/ui/typeaheadpro/search_typeaheadpro.js r109415                       */
/*      Machine:  10.16.140.107                                                               */
/*    Generated:  July 15th 2008 12:34:53 AM PDT                                              */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


function search_typeaheadpro(obj,source,properties){this.should_use_absolute=true;this.parent.construct(this,obj,source,properties);this._onunload_registered=false;}
search_typeaheadpro.extend(typeaheadpro);search_typeaheadpro.prototype.auto_select=false;search_typeaheadpro.prototype.less_than_n_chars=false;search_typeaheadpro.prototype.dirty_results=function(){this.parent.dirty_results();if(!this._onunload_registered){this._onunload_registered=true;onunloadRegister(bind(this,function(){this.clear();this.blur();search_friend_source.hasSubmitted=false;search_friend_source.already_logged=false;this._onunload_registered=false;}));}}
search_typeaheadpro.prototype.show=function(){if(!this.less_than_n_chars){CSS.addClass(this.dropdown,'typeahead_search');this.parent.show();this.dropdown.style.width='161px';}else{this.hide();}}
search_typeaheadpro.prototype.hide=function(){this.parent.hide();}
search_typeaheadpro.prototype.found_suggestions=function(suggestions,text,fake_data){var auto_select=ADVANCED_SEARCH_TYPEAHEAD&&suggestions&&suggestions.length==1;if(auto_select){suggestions.push({t:text,i:text.trim().replace(/ /g,'+'),ty:'search'});}
this.parent.found_suggestions(suggestions,text,fake_data);if(this.suggestion_count>0){add_css_class_name(this.list.firstChild.firstChild,'blue_top_border');remove_css_class_name(this.list,'no_border_list');add_css_class_name(this.list.lastChild.lastChild,'blue_bottom_border');}else{add_css_class_name(this.list,'no_border_list');}
if(auto_select){this.set_suggestion(0);}}
function search_typeahead_onselect(friend){if(friend&&!search_friend_source.hasSubmitted){search_friend_source.hasSubmitted=true;}else{return false;}
var url=friend.u;if(!url){var type_info=search_friend_source.url_templates[friend.ty];if(type_info){url=sprintf(type_info.default_url,friend.i);}}
if(!url){return undefined;}else if(url.indexOf('?')!=-1){goURI(url+'&ref=ts');}else{goURI(url+'?ref=ts');}
bind(this,this.blur).defer();return false;};function search_typeahead_onsubmit(friend){return!search_friend_source.hasSubmitted;}
window.ADVANCED_SEARCH_TYPEAHEAD=false;
if(window.Bootloader){Bootloader.done(1);}