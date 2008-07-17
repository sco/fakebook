/*       Source:  Local Cache                                                                 */
/*     Location:  rsrc:104972:/html/js/friend_suggester.js                                    */
/*      Machine:  10.16.140.109                                                               */
/*    Generated:  July 9th 2008 3:45:08 PM PDT                                                */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


function FriendSuggesterDialog(){}
copy_properties(FriendSuggesterDialog,{_userid:null,_popup:null,show:function(userid,friend_added){if(this._userid==userid){return;}
if(friend_added===undefined){friend_added=false;}
if(this._popup){this.destroy();}
this._userid=userid;this._popup=new pop_dialog('friend_suggester_dialog');this.showLoading();new AsyncRequest().setURI('/ajax/friend_suggester.php').setData({newcomer:userid,friend_added:friend_added}).setHandler(bind(this,function(response){this.showDialog(response.getPayload());})).send();},destroy:function(){this._userid=null;this._popup=null;},showDialog:function(content){this._popup.show_dialog(content);},showLoading:function(){this.showDialog('<div class="loading"><img src="/images/ajaxloading.gif" /></div>');},cancelMultiselect:function(){this._popup.fade_out(200);this.destroy();},submitMultiselect:function(){var data=serialize_form($('friend_suggester_popup_form'));if(!data['ids']){try{fs.notice_show(tx('fs:none-selected'),true);}catch(ex){Util.error('SUGGEST: could not warn user submitting an empty selection: %x',ex);this._popup.hide();this.destroy();}}else{this.showLoading();data['suggest']=1;new AsyncRequest().setURI('/ajax/friend_suggester.php').setData(data).setHandler(bind(this,function(response){this.showDialog(response.getPayload());this._popup.fade_out(600,1200);this.destroy();})).setErrorHandler(bind(this,function(response){Util.error('SUGGEST: submitMultiselectError: '+response.getErrorSummary());this._popup.hide();this.destroy();})).send();}}});
if(window.Bootloader){Bootloader.done(1);}