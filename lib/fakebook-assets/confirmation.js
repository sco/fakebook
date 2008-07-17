/*       Source:  Global Cache                                                                */
/*     Location:  js/api/confirmation.js r109470                                              */
/*      Machine:  10.16.139.110                                                               */
/*    Generated:  July 15th 2008 12:34:54 AM PDT                                              */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


function confirmation_access_option_click(checkbox)
{if(checkbox.checked){hide('access_requirement');remove_css_class_name(ge('confirm_button'),'disabled');}else{$('access_requirement_message').style.width=(ge('confirm_options').offsetWidth-50)+'px';show('access_requirement');add_css_class_name(ge('confirm_button'),'disabled');}}
function confirmation_validate_add()
{var access_checkbox=ge('access_checkbox');if(!access_checkbox.checked){aiert(tx('ac01'));return false;}
return true;}
function confirmation_authorize_option_click(checkbox)
{if(checkbox.checked){CSS.addClass($('authorize_main'),'enabled');CSS.removeClass($('authorize_main'),'disabled');}else{CSS.addClass($('authorize_main'),'disabled');CSS.removeClass($('authorize_main'),'enabled');}}
function confirmation_validate_authorize()
{var authorize_checkbox=ge('enable');if(!authorize_checkbox.checked){aiert(tx('ac02'));return false;}
return true;}
if(window.Bootloader){Bootloader.done(1);}