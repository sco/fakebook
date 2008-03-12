/*       Source:  Backing Store                                                               */
/*     Location:  js/string.js r76744                                                         */
/*      Machine:  10.1.0.62                                                                   */
/*    Generated:  March 5th 2008 2:09:46 AM PST                                               */


function htmlspecialchars(text){if(typeof(text)=='undefined'||!text.toString){return'';}
if(text===false){return'0';}else if(text===true){return'1';}
return text.toString().replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#039;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
var htmlize=htmlspecialchars;function html_wordwrap(str,wrap_limit,txt_fn){if(typeof wrap_limit=='undefined'){wrap_limit=60;}
if(typeof txt_fn!='function'){txt_fn=htmlize;}
var regex=new RegExp("\\S{"+(wrap_limit+1)+"}",'g');var start=0;var str_remaining=str;var ret_arr=[];var matches=str.match(regex);if(matches){for(var i=0;i<matches.length;i++){var match=matches[i];var match_index=start+str_remaining.indexOf(match);var chunk=str.substring(start,match_index);if(chunk){ret_arr.push(txt_fn(chunk));}
ret_arr.push(txt_fn(match)+'<wbr/>');start=match_index+match.length;str_remaining=str.substring(start);}}
if(str_remaining){ret_arr.push(txt_fn(str_remaining));}
return ret_arr.join('');}
function text_get_hyperlinks(str){if(typeof(str)!='string'){return[];}
return str.match(/(?:(?:ht|f)tps?):\/\/[^\s<]*[^\s<\.)]/ig);}
function html_hyperlink(str,txt_fn,url_fn){var accepted_delims={'<':'>','*':'*','{':'}','[':']',"'":"'",'"':'"','#':'#','+':'+','-':'-','(':')'};if(typeof(str)=='undefined'||!str.toString){return'';}
if(typeof txt_fn!='function'){txt_fn=htmlize;}
if(typeof url_fn!='function'){url_fn=htmlize;}
var str=str.toString();var http_matches=text_get_hyperlinks(str);var start=0;var str_remaining=str;var ret_arr=[];var str_remaining=str;if(http_matches){for(var i=0;i<http_matches.length;i++){var http_url=http_matches[i];var http_index=start+str_remaining.indexOf(http_url);var str_len=http_url.length;var non_url=str.substring(start,http_index);if(non_url){ret_arr.push(txt_fn(non_url));}
var trailing='';if(http_index>0){var delim=str[http_index-1];if(typeof accepted_delims[delim]!='undefined'){var end_delim=accepted_delims[delim];var end_delim_index=http_url.indexOf(end_delim);if(end_delim_index!=-1){trailing=txt_fn(http_url.substring(end_delim_index));http_url=http_url.substring(0,end_delim_index);}}}
http_str=url_fn(http_url);http_url_quote_escape=http_url.replace(/"/g,'%22');ret_arr.push('<a href="'+http_url_quote_escape+'" target="_blank" rel="nofollow">'+
http_str+'</a>'+trailing);start=http_index+str_len;str_remaining=str.substring(start);}}
if(str_remaining){ret_arr.push(txt_fn(str_remaining));}
return ret_arr.join('');}
function escape_js_quotes(text){if(typeof(text)=='undefined'||!text.toString){return'';}
return text.toString().replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/"/g,'\\x22').replace(/'/g,'\\\'').replace(/</g,'\\x3c').replace(/>/g,'\\x3e').replace(/&/g,'\\x26');}
function trim(text){if(typeof(text)=='undefined'||!text.toString){return'';}
return text.toString().replace(/^\s*|\s*$/g,'');}
function nl2br(text){if(typeof(text)=='undefined'||!text.toString){return'';}
return text.toString().replace(/\n/g,'<br />');}
function sprintf(){if(arguments.length==0){Util.warn('sprintf() was called with no arguments; it should be called with at '+'least one argument.');return'';}
var args=['This is an argument vector.'];for(var ii=arguments.length-1;ii>0;ii--){if(typeof(arguments[ii])=="undefined"){Util.log('You passed an undefined argument (argument '+ii+' to sprintf(). '+'Pattern was: `'+(arguments[0])+'\'.','error');args.push('');}else if(arguments[ii]===null){args.push('');}else if(arguments[ii]===true){args.push('true');}else if(arguments[ii]===false){args.push('false');}else{if(!arguments[ii].toString){Util.log('Argument '+(ii+1)+' to sprintf() does not have a toString() '+'method. The pattern was: `'+(arguments[0])+'\'.','error');return'';}
args.push(arguments[ii]);}}
var pattern=arguments[0];pattern=pattern.toString().split('%');var patlen=pattern.length;var result=pattern[0];for(var ii=1;ii<patlen;ii++){if(args.length==0){Util.log('Not enough arguments were provide to sprintf(). The pattern was: '+'`'+(arguments[0])+'\'.','error');return'';}
if(!pattern[ii].length){result+="%";continue;}
var p=0;var m=0;var r='';var padChar=' ';var padSize=null;var maxSize=null;var rawPad='';var pos=0;if(m=pattern[ii].match(/^('.)?(?:(-?\d+\.)?(-?\d+)?)/)){if(m[2]!==undefined&&m[2].length){padSize=parseInt(rawPad=m[2]);}
if(m[3]!==undefined&&m[3].length){if(padSize!==null){maxSize=parseInt(m[3]);}else{padSize=parseInt(rawPad=m[3]);}}
pos=m[0].length;if(m[1]!==undefined&&m[1].length){padChar=m[1].charAt(1);}else{if(rawPad.charAt(0)==0){padChar='0';}}}
switch(pattern[ii].charAt(pos)){case's':raw=htmlspecialchars(args.pop().toString());break;case'h':raw=args.pop().toString();break;case'd':raw=parseInt(args.pop()).toString();break;case'f':raw=parseFloat(args.pop()).toString();break;case'q':raw="`"+htmlspecialchars(args.pop().toString())+"'";break;case'e':raw="'"+escape_js_quotes(args.pop().toString())+"'";break;case'L':var list=args.pop();for(var ii=0;ii<list.length;ii++){list[ii]="`"+htmlspecialchars(args.pop().toString())+"'";}
if(list.length>1){list[list.length-1]='and '+list[list.length-1];}
raw=list.join(', ');break;case'x':x=args.pop();var line='?';var src='?';try{if(typeof(x['line'])!='undefined'){line=x.line;}else if(typeof(x['lineNumber'])!='undefined'){line=x.lineNumber;}
if(typeof(x['sourceURL'])!='undefined'){src=x['sourceURL'];}else if(typeof(x['fileName'])!='undefined'){src=s['fileName'];}}catch(exception){}
var s='[An Exception]';try{s=x.message||x.toString();}catch(exception){}
raw=s+' [at line '+line+' in '+src+']';break;default:raw="%"+pattern[ii].charAt(pos+1);break;}
if(padSize!==null){if(raw.length<Math.abs(padSize)){var padding='';var padlen=(Math.abs(padSize)-raw.length);for(var ll=0;ll<padlen;ll++){padding+=padChar;}
if(padSize<0){raw+=padding;}else{raw=padding+raw;}}}
if(maxSize!==null){if(raw.length>maxSize){raw=raw.substr(0,maxSize);}}
result+=raw+pattern[ii].substring(pos+1);}
if(args.length>1){Util.log('Too many arguments ('+(args.length-1)+' extras) were passed to '+'sprintf(). Pattern was: `'+(arguments[0])+'\'.','error');}
return result;}
String.prototype.startsWith=function(substr){if(this==window){return null;}
return this.substring(0,substr.length)==substr;};String.prototype.split=(function(split){return function(separator,limit){var flags="";if(separator===null||limit===null){return[];}else if(typeof separator=='string'){return split.call(this,separator,limit);}else if(separator===undefined){return[this.toString()];}else if(separator instanceof RegExp){if(!separator._2||!separator._1){flags=separator.toString().replace(/^[\S\s]+\//,"");if(!separator._1){if(!separator.global){separator._1=new RegExp(separator.source,"g"+flags);}else{separator._1=1;}}}
separator1=separator._1==1?separator:separator._1;var separator2=(separator._2?separator._2:separator._2=new RegExp("^"+separator1.source+"$",flags));if(limit===undefined||limit<0){limit=false;}else{limit=Math.floor(limit);if(!limit)return[];}
var match,output=[],lastLastIndex=0,i=0;while((limit?i++<=limit:true)&&(match=separator1.exec(this))){if((match[0].length===0)&&(separator1.lastIndex>match.index)){separator1.lastIndex--;}
if(separator1.lastIndex>lastLastIndex){if(match.length>1){match[0].replace(separator2,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined)match[j]=undefined;}});}
output=output.concat(this.substring(lastLastIndex,match.index),(match.index===this.length?[]:match.slice(1)));lastLastIndex=separator1.lastIndex;}
if(match[0].length===0){separator1.lastIndex++;}}
return(lastLastIndex===this.length)?(separator1.test("")?output:output.concat("")):(limit?output:output.concat(this.substring(lastLastIndex)));}else{return split.call(this,separator,limit);}}})(String.prototype.split);
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript("\/var\/releases\/thefacebook-r77778-01152008\/www\/html\/js\/string.js", "76744", 1200708682);}