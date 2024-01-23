goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41622 = arguments.length;
var i__5770__auto___41623 = (0);
while(true){
if((i__5770__auto___41623 < len__5769__auto___41622)){
args__5775__auto__.push((arguments[i__5770__auto___41623]));

var G__41624 = (i__5770__auto___41623 + (1));
i__5770__auto___41623 = G__41624;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41245){
var G__41246 = cljs.core.first(seq41245);
var seq41245__$1 = cljs.core.next(seq41245);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41246,seq41245__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41249 = cljs.core.seq(sources);
var chunk__41250 = null;
var count__41251 = (0);
var i__41252 = (0);
while(true){
if((i__41252 < count__41251)){
var map__41262 = chunk__41250.cljs$core$IIndexed$_nth$arity$2(null,i__41252);
var map__41262__$1 = cljs.core.__destructure_map(map__41262);
var src = map__41262__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41262__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41262__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41262__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41262__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41263){var e_41625 = e41263;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41625);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41625.message)].join('')));
}

var G__41626 = seq__41249;
var G__41627 = chunk__41250;
var G__41628 = count__41251;
var G__41629 = (i__41252 + (1));
seq__41249 = G__41626;
chunk__41250 = G__41627;
count__41251 = G__41628;
i__41252 = G__41629;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41249);
if(temp__5804__auto__){
var seq__41249__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41249__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41249__$1);
var G__41630 = cljs.core.chunk_rest(seq__41249__$1);
var G__41631 = c__5568__auto__;
var G__41632 = cljs.core.count(c__5568__auto__);
var G__41633 = (0);
seq__41249 = G__41630;
chunk__41250 = G__41631;
count__41251 = G__41632;
i__41252 = G__41633;
continue;
} else {
var map__41264 = cljs.core.first(seq__41249__$1);
var map__41264__$1 = cljs.core.__destructure_map(map__41264);
var src = map__41264__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41264__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41264__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41264__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41264__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41265){var e_41634 = e41265;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41634);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41634.message)].join('')));
}

var G__41635 = cljs.core.next(seq__41249__$1);
var G__41636 = null;
var G__41637 = (0);
var G__41638 = (0);
seq__41249 = G__41635;
chunk__41250 = G__41636;
count__41251 = G__41637;
i__41252 = G__41638;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__41266 = cljs.core.seq(js_requires);
var chunk__41267 = null;
var count__41268 = (0);
var i__41269 = (0);
while(true){
if((i__41269 < count__41268)){
var js_ns = chunk__41267.cljs$core$IIndexed$_nth$arity$2(null,i__41269);
var require_str_41639 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41639);


var G__41640 = seq__41266;
var G__41641 = chunk__41267;
var G__41642 = count__41268;
var G__41643 = (i__41269 + (1));
seq__41266 = G__41640;
chunk__41267 = G__41641;
count__41268 = G__41642;
i__41269 = G__41643;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41266);
if(temp__5804__auto__){
var seq__41266__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41266__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41266__$1);
var G__41644 = cljs.core.chunk_rest(seq__41266__$1);
var G__41645 = c__5568__auto__;
var G__41646 = cljs.core.count(c__5568__auto__);
var G__41647 = (0);
seq__41266 = G__41644;
chunk__41267 = G__41645;
count__41268 = G__41646;
i__41269 = G__41647;
continue;
} else {
var js_ns = cljs.core.first(seq__41266__$1);
var require_str_41648 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41648);


var G__41649 = cljs.core.next(seq__41266__$1);
var G__41650 = null;
var G__41651 = (0);
var G__41652 = (0);
seq__41266 = G__41649;
chunk__41267 = G__41650;
count__41268 = G__41651;
i__41269 = G__41652;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41273){
var map__41274 = p__41273;
var map__41274__$1 = cljs.core.__destructure_map(map__41274);
var msg = map__41274__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41274__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41274__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41275(s__41276){
return (new cljs.core.LazySeq(null,(function (){
var s__41276__$1 = s__41276;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41276__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__41281 = cljs.core.first(xs__6360__auto__);
var map__41281__$1 = cljs.core.__destructure_map(map__41281);
var src = map__41281__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41281__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41281__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__41276__$1,map__41281,map__41281__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41274,map__41274__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41275_$_iter__41277(s__41278){
return (new cljs.core.LazySeq(null,((function (s__41276__$1,map__41281,map__41281__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41274,map__41274__$1,msg,info,reload_info){
return (function (){
var s__41278__$1 = s__41278;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__41278__$1);
if(temp__5804__auto____$1){
var s__41278__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41278__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41278__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41280 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41279 = (0);
while(true){
if((i__41279 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__41279);
cljs.core.chunk_append(b__41280,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41653 = (i__41279 + (1));
i__41279 = G__41653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41280),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41275_$_iter__41277(cljs.core.chunk_rest(s__41278__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41280),null);
}
} else {
var warning = cljs.core.first(s__41278__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41275_$_iter__41277(cljs.core.rest(s__41278__$2)));
}
} else {
return null;
}
break;
}
});})(s__41276__$1,map__41281,map__41281__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41274,map__41274__$1,msg,info,reload_info))
,null,null));
});})(s__41276__$1,map__41281,map__41281__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41274,map__41274__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41275(cljs.core.rest(s__41276__$1)));
} else {
var G__41654 = cljs.core.rest(s__41276__$1);
s__41276__$1 = G__41654;
continue;
}
} else {
var G__41655 = cljs.core.rest(s__41276__$1);
s__41276__$1 = G__41655;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__41282_41656 = cljs.core.seq(warnings);
var chunk__41283_41657 = null;
var count__41284_41658 = (0);
var i__41285_41659 = (0);
while(true){
if((i__41285_41659 < count__41284_41658)){
var map__41288_41660 = chunk__41283_41657.cljs$core$IIndexed$_nth$arity$2(null,i__41285_41659);
var map__41288_41661__$1 = cljs.core.__destructure_map(map__41288_41660);
var w_41662 = map__41288_41661__$1;
var msg_41663__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41288_41661__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41288_41661__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41288_41661__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41288_41661__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41666)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41664),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41665),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41663__$1)].join(''));


var G__41667 = seq__41282_41656;
var G__41668 = chunk__41283_41657;
var G__41669 = count__41284_41658;
var G__41670 = (i__41285_41659 + (1));
seq__41282_41656 = G__41667;
chunk__41283_41657 = G__41668;
count__41284_41658 = G__41669;
i__41285_41659 = G__41670;
continue;
} else {
var temp__5804__auto___41671 = cljs.core.seq(seq__41282_41656);
if(temp__5804__auto___41671){
var seq__41282_41672__$1 = temp__5804__auto___41671;
if(cljs.core.chunked_seq_QMARK_(seq__41282_41672__$1)){
var c__5568__auto___41673 = cljs.core.chunk_first(seq__41282_41672__$1);
var G__41674 = cljs.core.chunk_rest(seq__41282_41672__$1);
var G__41675 = c__5568__auto___41673;
var G__41676 = cljs.core.count(c__5568__auto___41673);
var G__41677 = (0);
seq__41282_41656 = G__41674;
chunk__41283_41657 = G__41675;
count__41284_41658 = G__41676;
i__41285_41659 = G__41677;
continue;
} else {
var map__41289_41678 = cljs.core.first(seq__41282_41672__$1);
var map__41289_41679__$1 = cljs.core.__destructure_map(map__41289_41678);
var w_41680 = map__41289_41679__$1;
var msg_41681__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41289_41679__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41289_41679__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41289_41679__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41289_41679__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41684)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41682),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41683),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41681__$1)].join(''));


var G__41685 = cljs.core.next(seq__41282_41672__$1);
var G__41686 = null;
var G__41687 = (0);
var G__41688 = (0);
seq__41282_41656 = G__41685;
chunk__41283_41657 = G__41686;
count__41284_41658 = G__41687;
i__41285_41659 = G__41688;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41272_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41272_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41290){
var map__41291 = p__41290;
var map__41291__$1 = cljs.core.__destructure_map(map__41291);
var msg = map__41291__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41291__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41291__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__41292 = cljs.core.seq(updates);
var chunk__41294 = null;
var count__41295 = (0);
var i__41296 = (0);
while(true){
if((i__41296 < count__41295)){
var path = chunk__41294.cljs$core$IIndexed$_nth$arity$2(null,i__41296);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41431_41689 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41435_41690 = null;
var count__41436_41691 = (0);
var i__41437_41692 = (0);
while(true){
if((i__41437_41692 < count__41436_41691)){
var node_41693 = chunk__41435_41690.cljs$core$IIndexed$_nth$arity$2(null,i__41437_41692);
if(cljs.core.not(node_41693.shadow$old)){
var path_match_41694 = shadow.cljs.devtools.client.browser.match_paths(node_41693.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41694)){
var new_link_41695 = (function (){var G__41502 = node_41693.cloneNode(true);
G__41502.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41694),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41502;
})();
(node_41693.shadow$old = true);

(new_link_41695.onload = ((function (seq__41431_41689,chunk__41435_41690,count__41436_41691,i__41437_41692,seq__41292,chunk__41294,count__41295,i__41296,new_link_41695,path_match_41694,node_41693,path,map__41291,map__41291__$1,msg,updates,reload_info){
return (function (e){
var seq__41504_41696 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41510_41697 = null;
var count__41511_41698 = (0);
var i__41512_41699 = (0);
while(true){
if((i__41512_41699 < count__41511_41698)){
var map__41517_41700 = chunk__41510_41697.cljs$core$IIndexed$_nth$arity$2(null,i__41512_41699);
var map__41517_41701__$1 = cljs.core.__destructure_map(map__41517_41700);
var task_41702 = map__41517_41701__$1;
var fn_str_41703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517_41701__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517_41701__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41705 = goog.getObjectByName(fn_str_41703,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41704)].join(''));

(fn_obj_41705.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41705.cljs$core$IFn$_invoke$arity$2(path,new_link_41695) : fn_obj_41705.call(null,path,new_link_41695));


var G__41706 = seq__41504_41696;
var G__41707 = chunk__41510_41697;
var G__41708 = count__41511_41698;
var G__41709 = (i__41512_41699 + (1));
seq__41504_41696 = G__41706;
chunk__41510_41697 = G__41707;
count__41511_41698 = G__41708;
i__41512_41699 = G__41709;
continue;
} else {
var temp__5804__auto___41710 = cljs.core.seq(seq__41504_41696);
if(temp__5804__auto___41710){
var seq__41504_41711__$1 = temp__5804__auto___41710;
if(cljs.core.chunked_seq_QMARK_(seq__41504_41711__$1)){
var c__5568__auto___41712 = cljs.core.chunk_first(seq__41504_41711__$1);
var G__41713 = cljs.core.chunk_rest(seq__41504_41711__$1);
var G__41714 = c__5568__auto___41712;
var G__41715 = cljs.core.count(c__5568__auto___41712);
var G__41716 = (0);
seq__41504_41696 = G__41713;
chunk__41510_41697 = G__41714;
count__41511_41698 = G__41715;
i__41512_41699 = G__41716;
continue;
} else {
var map__41518_41717 = cljs.core.first(seq__41504_41711__$1);
var map__41518_41718__$1 = cljs.core.__destructure_map(map__41518_41717);
var task_41719 = map__41518_41718__$1;
var fn_str_41720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41518_41718__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41518_41718__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41722 = goog.getObjectByName(fn_str_41720,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41721)].join(''));

(fn_obj_41722.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41722.cljs$core$IFn$_invoke$arity$2(path,new_link_41695) : fn_obj_41722.call(null,path,new_link_41695));


var G__41723 = cljs.core.next(seq__41504_41711__$1);
var G__41724 = null;
var G__41725 = (0);
var G__41726 = (0);
seq__41504_41696 = G__41723;
chunk__41510_41697 = G__41724;
count__41511_41698 = G__41725;
i__41512_41699 = G__41726;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41693);
});})(seq__41431_41689,chunk__41435_41690,count__41436_41691,i__41437_41692,seq__41292,chunk__41294,count__41295,i__41296,new_link_41695,path_match_41694,node_41693,path,map__41291,map__41291__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41694], 0));

goog.dom.insertSiblingAfter(new_link_41695,node_41693);


var G__41727 = seq__41431_41689;
var G__41728 = chunk__41435_41690;
var G__41729 = count__41436_41691;
var G__41730 = (i__41437_41692 + (1));
seq__41431_41689 = G__41727;
chunk__41435_41690 = G__41728;
count__41436_41691 = G__41729;
i__41437_41692 = G__41730;
continue;
} else {
var G__41731 = seq__41431_41689;
var G__41732 = chunk__41435_41690;
var G__41733 = count__41436_41691;
var G__41734 = (i__41437_41692 + (1));
seq__41431_41689 = G__41731;
chunk__41435_41690 = G__41732;
count__41436_41691 = G__41733;
i__41437_41692 = G__41734;
continue;
}
} else {
var G__41735 = seq__41431_41689;
var G__41736 = chunk__41435_41690;
var G__41737 = count__41436_41691;
var G__41738 = (i__41437_41692 + (1));
seq__41431_41689 = G__41735;
chunk__41435_41690 = G__41736;
count__41436_41691 = G__41737;
i__41437_41692 = G__41738;
continue;
}
} else {
var temp__5804__auto___41739 = cljs.core.seq(seq__41431_41689);
if(temp__5804__auto___41739){
var seq__41431_41740__$1 = temp__5804__auto___41739;
if(cljs.core.chunked_seq_QMARK_(seq__41431_41740__$1)){
var c__5568__auto___41741 = cljs.core.chunk_first(seq__41431_41740__$1);
var G__41742 = cljs.core.chunk_rest(seq__41431_41740__$1);
var G__41743 = c__5568__auto___41741;
var G__41744 = cljs.core.count(c__5568__auto___41741);
var G__41745 = (0);
seq__41431_41689 = G__41742;
chunk__41435_41690 = G__41743;
count__41436_41691 = G__41744;
i__41437_41692 = G__41745;
continue;
} else {
var node_41746 = cljs.core.first(seq__41431_41740__$1);
if(cljs.core.not(node_41746.shadow$old)){
var path_match_41747 = shadow.cljs.devtools.client.browser.match_paths(node_41746.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41747)){
var new_link_41748 = (function (){var G__41522 = node_41746.cloneNode(true);
G__41522.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41747),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41522;
})();
(node_41746.shadow$old = true);

(new_link_41748.onload = ((function (seq__41431_41689,chunk__41435_41690,count__41436_41691,i__41437_41692,seq__41292,chunk__41294,count__41295,i__41296,new_link_41748,path_match_41747,node_41746,seq__41431_41740__$1,temp__5804__auto___41739,path,map__41291,map__41291__$1,msg,updates,reload_info){
return (function (e){
var seq__41523_41749 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41525_41750 = null;
var count__41526_41751 = (0);
var i__41527_41752 = (0);
while(true){
if((i__41527_41752 < count__41526_41751)){
var map__41531_41753 = chunk__41525_41750.cljs$core$IIndexed$_nth$arity$2(null,i__41527_41752);
var map__41531_41754__$1 = cljs.core.__destructure_map(map__41531_41753);
var task_41755 = map__41531_41754__$1;
var fn_str_41756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41531_41754__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41531_41754__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41758 = goog.getObjectByName(fn_str_41756,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41757)].join(''));

(fn_obj_41758.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41758.cljs$core$IFn$_invoke$arity$2(path,new_link_41748) : fn_obj_41758.call(null,path,new_link_41748));


var G__41759 = seq__41523_41749;
var G__41760 = chunk__41525_41750;
var G__41761 = count__41526_41751;
var G__41762 = (i__41527_41752 + (1));
seq__41523_41749 = G__41759;
chunk__41525_41750 = G__41760;
count__41526_41751 = G__41761;
i__41527_41752 = G__41762;
continue;
} else {
var temp__5804__auto___41763__$1 = cljs.core.seq(seq__41523_41749);
if(temp__5804__auto___41763__$1){
var seq__41523_41764__$1 = temp__5804__auto___41763__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41523_41764__$1)){
var c__5568__auto___41765 = cljs.core.chunk_first(seq__41523_41764__$1);
var G__41766 = cljs.core.chunk_rest(seq__41523_41764__$1);
var G__41767 = c__5568__auto___41765;
var G__41768 = cljs.core.count(c__5568__auto___41765);
var G__41769 = (0);
seq__41523_41749 = G__41766;
chunk__41525_41750 = G__41767;
count__41526_41751 = G__41768;
i__41527_41752 = G__41769;
continue;
} else {
var map__41532_41770 = cljs.core.first(seq__41523_41764__$1);
var map__41532_41771__$1 = cljs.core.__destructure_map(map__41532_41770);
var task_41772 = map__41532_41771__$1;
var fn_str_41773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41532_41771__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41532_41771__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41775 = goog.getObjectByName(fn_str_41773,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41774)].join(''));

(fn_obj_41775.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41775.cljs$core$IFn$_invoke$arity$2(path,new_link_41748) : fn_obj_41775.call(null,path,new_link_41748));


var G__41776 = cljs.core.next(seq__41523_41764__$1);
var G__41777 = null;
var G__41778 = (0);
var G__41779 = (0);
seq__41523_41749 = G__41776;
chunk__41525_41750 = G__41777;
count__41526_41751 = G__41778;
i__41527_41752 = G__41779;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41746);
});})(seq__41431_41689,chunk__41435_41690,count__41436_41691,i__41437_41692,seq__41292,chunk__41294,count__41295,i__41296,new_link_41748,path_match_41747,node_41746,seq__41431_41740__$1,temp__5804__auto___41739,path,map__41291,map__41291__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41747], 0));

goog.dom.insertSiblingAfter(new_link_41748,node_41746);


var G__41780 = cljs.core.next(seq__41431_41740__$1);
var G__41781 = null;
var G__41782 = (0);
var G__41783 = (0);
seq__41431_41689 = G__41780;
chunk__41435_41690 = G__41781;
count__41436_41691 = G__41782;
i__41437_41692 = G__41783;
continue;
} else {
var G__41784 = cljs.core.next(seq__41431_41740__$1);
var G__41785 = null;
var G__41786 = (0);
var G__41787 = (0);
seq__41431_41689 = G__41784;
chunk__41435_41690 = G__41785;
count__41436_41691 = G__41786;
i__41437_41692 = G__41787;
continue;
}
} else {
var G__41788 = cljs.core.next(seq__41431_41740__$1);
var G__41789 = null;
var G__41790 = (0);
var G__41791 = (0);
seq__41431_41689 = G__41788;
chunk__41435_41690 = G__41789;
count__41436_41691 = G__41790;
i__41437_41692 = G__41791;
continue;
}
}
} else {
}
}
break;
}


var G__41792 = seq__41292;
var G__41793 = chunk__41294;
var G__41794 = count__41295;
var G__41795 = (i__41296 + (1));
seq__41292 = G__41792;
chunk__41294 = G__41793;
count__41295 = G__41794;
i__41296 = G__41795;
continue;
} else {
var G__41796 = seq__41292;
var G__41797 = chunk__41294;
var G__41798 = count__41295;
var G__41799 = (i__41296 + (1));
seq__41292 = G__41796;
chunk__41294 = G__41797;
count__41295 = G__41798;
i__41296 = G__41799;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41292);
if(temp__5804__auto__){
var seq__41292__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41292__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41292__$1);
var G__41800 = cljs.core.chunk_rest(seq__41292__$1);
var G__41801 = c__5568__auto__;
var G__41802 = cljs.core.count(c__5568__auto__);
var G__41803 = (0);
seq__41292 = G__41800;
chunk__41294 = G__41801;
count__41295 = G__41802;
i__41296 = G__41803;
continue;
} else {
var path = cljs.core.first(seq__41292__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41534_41804 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41538_41805 = null;
var count__41539_41806 = (0);
var i__41540_41807 = (0);
while(true){
if((i__41540_41807 < count__41539_41806)){
var node_41808 = chunk__41538_41805.cljs$core$IIndexed$_nth$arity$2(null,i__41540_41807);
if(cljs.core.not(node_41808.shadow$old)){
var path_match_41809 = shadow.cljs.devtools.client.browser.match_paths(node_41808.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41809)){
var new_link_41810 = (function (){var G__41579 = node_41808.cloneNode(true);
G__41579.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41809),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41579;
})();
(node_41808.shadow$old = true);

(new_link_41810.onload = ((function (seq__41534_41804,chunk__41538_41805,count__41539_41806,i__41540_41807,seq__41292,chunk__41294,count__41295,i__41296,new_link_41810,path_match_41809,node_41808,path,seq__41292__$1,temp__5804__auto__,map__41291,map__41291__$1,msg,updates,reload_info){
return (function (e){
var seq__41580_41811 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41582_41812 = null;
var count__41583_41813 = (0);
var i__41584_41814 = (0);
while(true){
if((i__41584_41814 < count__41583_41813)){
var map__41589_41815 = chunk__41582_41812.cljs$core$IIndexed$_nth$arity$2(null,i__41584_41814);
var map__41589_41816__$1 = cljs.core.__destructure_map(map__41589_41815);
var task_41817 = map__41589_41816__$1;
var fn_str_41818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41589_41816__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41589_41816__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41820 = goog.getObjectByName(fn_str_41818,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41819)].join(''));

(fn_obj_41820.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41820.cljs$core$IFn$_invoke$arity$2(path,new_link_41810) : fn_obj_41820.call(null,path,new_link_41810));


var G__41821 = seq__41580_41811;
var G__41822 = chunk__41582_41812;
var G__41823 = count__41583_41813;
var G__41824 = (i__41584_41814 + (1));
seq__41580_41811 = G__41821;
chunk__41582_41812 = G__41822;
count__41583_41813 = G__41823;
i__41584_41814 = G__41824;
continue;
} else {
var temp__5804__auto___41825__$1 = cljs.core.seq(seq__41580_41811);
if(temp__5804__auto___41825__$1){
var seq__41580_41826__$1 = temp__5804__auto___41825__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41580_41826__$1)){
var c__5568__auto___41827 = cljs.core.chunk_first(seq__41580_41826__$1);
var G__41828 = cljs.core.chunk_rest(seq__41580_41826__$1);
var G__41829 = c__5568__auto___41827;
var G__41830 = cljs.core.count(c__5568__auto___41827);
var G__41831 = (0);
seq__41580_41811 = G__41828;
chunk__41582_41812 = G__41829;
count__41583_41813 = G__41830;
i__41584_41814 = G__41831;
continue;
} else {
var map__41590_41832 = cljs.core.first(seq__41580_41826__$1);
var map__41590_41833__$1 = cljs.core.__destructure_map(map__41590_41832);
var task_41834 = map__41590_41833__$1;
var fn_str_41835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590_41833__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590_41833__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41837 = goog.getObjectByName(fn_str_41835,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41836)].join(''));

(fn_obj_41837.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41837.cljs$core$IFn$_invoke$arity$2(path,new_link_41810) : fn_obj_41837.call(null,path,new_link_41810));


var G__41838 = cljs.core.next(seq__41580_41826__$1);
var G__41839 = null;
var G__41840 = (0);
var G__41841 = (0);
seq__41580_41811 = G__41838;
chunk__41582_41812 = G__41839;
count__41583_41813 = G__41840;
i__41584_41814 = G__41841;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41808);
});})(seq__41534_41804,chunk__41538_41805,count__41539_41806,i__41540_41807,seq__41292,chunk__41294,count__41295,i__41296,new_link_41810,path_match_41809,node_41808,path,seq__41292__$1,temp__5804__auto__,map__41291,map__41291__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41809], 0));

goog.dom.insertSiblingAfter(new_link_41810,node_41808);


var G__41842 = seq__41534_41804;
var G__41843 = chunk__41538_41805;
var G__41844 = count__41539_41806;
var G__41845 = (i__41540_41807 + (1));
seq__41534_41804 = G__41842;
chunk__41538_41805 = G__41843;
count__41539_41806 = G__41844;
i__41540_41807 = G__41845;
continue;
} else {
var G__41846 = seq__41534_41804;
var G__41847 = chunk__41538_41805;
var G__41848 = count__41539_41806;
var G__41849 = (i__41540_41807 + (1));
seq__41534_41804 = G__41846;
chunk__41538_41805 = G__41847;
count__41539_41806 = G__41848;
i__41540_41807 = G__41849;
continue;
}
} else {
var G__41850 = seq__41534_41804;
var G__41851 = chunk__41538_41805;
var G__41852 = count__41539_41806;
var G__41853 = (i__41540_41807 + (1));
seq__41534_41804 = G__41850;
chunk__41538_41805 = G__41851;
count__41539_41806 = G__41852;
i__41540_41807 = G__41853;
continue;
}
} else {
var temp__5804__auto___41854__$1 = cljs.core.seq(seq__41534_41804);
if(temp__5804__auto___41854__$1){
var seq__41534_41855__$1 = temp__5804__auto___41854__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41534_41855__$1)){
var c__5568__auto___41856 = cljs.core.chunk_first(seq__41534_41855__$1);
var G__41857 = cljs.core.chunk_rest(seq__41534_41855__$1);
var G__41858 = c__5568__auto___41856;
var G__41859 = cljs.core.count(c__5568__auto___41856);
var G__41860 = (0);
seq__41534_41804 = G__41857;
chunk__41538_41805 = G__41858;
count__41539_41806 = G__41859;
i__41540_41807 = G__41860;
continue;
} else {
var node_41861 = cljs.core.first(seq__41534_41855__$1);
if(cljs.core.not(node_41861.shadow$old)){
var path_match_41862 = shadow.cljs.devtools.client.browser.match_paths(node_41861.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41862)){
var new_link_41863 = (function (){var G__41592 = node_41861.cloneNode(true);
G__41592.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41862),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41592;
})();
(node_41861.shadow$old = true);

(new_link_41863.onload = ((function (seq__41534_41804,chunk__41538_41805,count__41539_41806,i__41540_41807,seq__41292,chunk__41294,count__41295,i__41296,new_link_41863,path_match_41862,node_41861,seq__41534_41855__$1,temp__5804__auto___41854__$1,path,seq__41292__$1,temp__5804__auto__,map__41291,map__41291__$1,msg,updates,reload_info){
return (function (e){
var seq__41593_41864 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41595_41865 = null;
var count__41596_41866 = (0);
var i__41597_41867 = (0);
while(true){
if((i__41597_41867 < count__41596_41866)){
var map__41601_41868 = chunk__41595_41865.cljs$core$IIndexed$_nth$arity$2(null,i__41597_41867);
var map__41601_41869__$1 = cljs.core.__destructure_map(map__41601_41868);
var task_41870 = map__41601_41869__$1;
var fn_str_41871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41601_41869__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41601_41869__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41873 = goog.getObjectByName(fn_str_41871,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41872)].join(''));

(fn_obj_41873.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41873.cljs$core$IFn$_invoke$arity$2(path,new_link_41863) : fn_obj_41873.call(null,path,new_link_41863));


var G__41874 = seq__41593_41864;
var G__41875 = chunk__41595_41865;
var G__41876 = count__41596_41866;
var G__41877 = (i__41597_41867 + (1));
seq__41593_41864 = G__41874;
chunk__41595_41865 = G__41875;
count__41596_41866 = G__41876;
i__41597_41867 = G__41877;
continue;
} else {
var temp__5804__auto___41878__$2 = cljs.core.seq(seq__41593_41864);
if(temp__5804__auto___41878__$2){
var seq__41593_41879__$1 = temp__5804__auto___41878__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41593_41879__$1)){
var c__5568__auto___41880 = cljs.core.chunk_first(seq__41593_41879__$1);
var G__41881 = cljs.core.chunk_rest(seq__41593_41879__$1);
var G__41882 = c__5568__auto___41880;
var G__41883 = cljs.core.count(c__5568__auto___41880);
var G__41884 = (0);
seq__41593_41864 = G__41881;
chunk__41595_41865 = G__41882;
count__41596_41866 = G__41883;
i__41597_41867 = G__41884;
continue;
} else {
var map__41602_41885 = cljs.core.first(seq__41593_41879__$1);
var map__41602_41886__$1 = cljs.core.__destructure_map(map__41602_41885);
var task_41887 = map__41602_41886__$1;
var fn_str_41888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41602_41886__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41602_41886__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41890 = goog.getObjectByName(fn_str_41888,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41889)].join(''));

(fn_obj_41890.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41890.cljs$core$IFn$_invoke$arity$2(path,new_link_41863) : fn_obj_41890.call(null,path,new_link_41863));


var G__41891 = cljs.core.next(seq__41593_41879__$1);
var G__41892 = null;
var G__41893 = (0);
var G__41894 = (0);
seq__41593_41864 = G__41891;
chunk__41595_41865 = G__41892;
count__41596_41866 = G__41893;
i__41597_41867 = G__41894;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41861);
});})(seq__41534_41804,chunk__41538_41805,count__41539_41806,i__41540_41807,seq__41292,chunk__41294,count__41295,i__41296,new_link_41863,path_match_41862,node_41861,seq__41534_41855__$1,temp__5804__auto___41854__$1,path,seq__41292__$1,temp__5804__auto__,map__41291,map__41291__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41862], 0));

goog.dom.insertSiblingAfter(new_link_41863,node_41861);


var G__41895 = cljs.core.next(seq__41534_41855__$1);
var G__41896 = null;
var G__41897 = (0);
var G__41898 = (0);
seq__41534_41804 = G__41895;
chunk__41538_41805 = G__41896;
count__41539_41806 = G__41897;
i__41540_41807 = G__41898;
continue;
} else {
var G__41899 = cljs.core.next(seq__41534_41855__$1);
var G__41900 = null;
var G__41901 = (0);
var G__41902 = (0);
seq__41534_41804 = G__41899;
chunk__41538_41805 = G__41900;
count__41539_41806 = G__41901;
i__41540_41807 = G__41902;
continue;
}
} else {
var G__41903 = cljs.core.next(seq__41534_41855__$1);
var G__41904 = null;
var G__41905 = (0);
var G__41906 = (0);
seq__41534_41804 = G__41903;
chunk__41538_41805 = G__41904;
count__41539_41806 = G__41905;
i__41540_41807 = G__41906;
continue;
}
}
} else {
}
}
break;
}


var G__41907 = cljs.core.next(seq__41292__$1);
var G__41908 = null;
var G__41909 = (0);
var G__41910 = (0);
seq__41292 = G__41907;
chunk__41294 = G__41908;
count__41295 = G__41909;
i__41296 = G__41910;
continue;
} else {
var G__41911 = cljs.core.next(seq__41292__$1);
var G__41912 = null;
var G__41913 = (0);
var G__41914 = (0);
seq__41292 = G__41911;
chunk__41294 = G__41912;
count__41295 = G__41913;
i__41296 = G__41914;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__41603){
var map__41604 = p__41603;
var map__41604__$1 = cljs.core.__destructure_map(map__41604);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41604__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41605,done,error){
var map__41606 = p__41605;
var map__41606__$1 = cljs.core.__destructure_map(map__41606);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41606__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41607,done,error){
var map__41608 = p__41607;
var map__41608__$1 = cljs.core.__destructure_map(map__41608);
var msg = map__41608__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41608__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41608__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41608__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41609){
var map__41610 = p__41609;
var map__41610__$1 = cljs.core.__destructure_map(map__41610);
var src = map__41610__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41610__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41611 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41611) : done.call(null,G__41611));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41612){
var map__41613 = p__41612;
var map__41613__$1 = cljs.core.__destructure_map(map__41613);
var msg__$1 = map__41613__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41613__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e41614){var ex = e41614;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41615){
var map__41616 = p__41615;
var map__41616__$1 = cljs.core.__destructure_map(map__41616);
var env = map__41616__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41616__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41617){
var map__41618 = p__41617;
var map__41618__$1 = cljs.core.__destructure_map(map__41618);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41618__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41618__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__41619){
var map__41620 = p__41619;
var map__41620__$1 = cljs.core.__destructure_map(map__41620);
var svc = map__41620__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41620__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
