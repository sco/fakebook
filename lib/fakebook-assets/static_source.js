/*       Source:  Local Cache                                                                 */
/*     Location:  rsrc:102180:/html/js/lib/ui/typeaheadpro/sources/static_source.js           */
/*      Machine:  10.16.140.110                                                               */
/*    Generated:  July 9th 2008 3:45:11 PM PDT                                                */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


function static_source(){this.values=null;this.index=null;this.index_includes_hints=false;this.exclude_ids={};this.parent.construct(this);}
static_source.extend(typeahead_source);static_source.prototype.enumerable=true;static_source.prototype.build_index=function(){var index=[];var values=this.values;var gen_id=values.length&&typeof values[0].i=='undefined';for(var i=0,il=values.length;i<il;i++){var tokens=typeahead_source.tokenize(values[i].t);for(var j=0,jl=tokens.length;j<jl;j++){index.push({t:tokens[j],o:values[i]});}
if(this.index_includes_hints&&values[i].s){var tokens=typeahead_source.tokenize(values[i].s);for(var j=0,jl=tokens.length;j<jl;j++){index.push({t:tokens[j],o:values[i]});}}
if(gen_id){values[i].i=i;}}
index.sort(function(a,b){return(a.t==b.t)?0:(a.t<b.t?-1:1)});this.index=index;this.ready();}
static_source.prototype._sort_text_obj=function(a,b){if(a.e&&!b.e){return 1;}
if(!a.e&&b.e){return-1;}
if(a.t==b.t){return 0;}
return a.t<b.t?-1:1}
static_source.prototype.search_value=function(text){if(!this.is_ready){return;}
var results;if(text==''){results=this.values;}else{var ttext=typeahead_source.tokenize(text).sort(typeahead_source._sort);var index=this.index;var lo=0;var hi=this.index.length-1;var p=Math.floor(hi/2);while(lo<=hi){if(index[p].t>=ttext[0]){hi=p-1;}else{lo=p+1;}
p=Math.floor(lo+((hi-lo)/2));}
var results=[];var stale_keys={};var check_ignore=typeof _ignoreList!='undefined';for(var i=lo;i<index.length&&index[i].t.lastIndexOf(ttext[0],0)!=-1;i++){var elem_id=index[i].o.flid?index[i].o.flid:index[i].o.i;if(typeof stale_keys[elem_id]!='undefined'){continue;}else{stale_keys[elem_id]=true;}
if((!check_ignore||!_ignoreList[elem_id])&&!this.exclude_ids[elem_id]&&(ttext.length==1||typeahead_source.check_match(ttext,index[i].o.t))){results.push(index[i].o);}}}
results.sort(this._sort_text_obj);if(this.owner.max_results){results=results.slice(0,this.owner.max_results);}
return results;}
static_source.prototype.set_exclude_ids=function(ids){this.exclude_ids=ids;}
if(window.Bootloader){Bootloader.done(1);}