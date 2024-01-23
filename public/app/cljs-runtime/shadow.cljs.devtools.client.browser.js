goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42305 = arguments.length;
var i__5770__auto___42306 = (0);
while(true){
if((i__5770__auto___42306 < len__5769__auto___42305)){
args__5775__auto__.push((arguments[i__5770__auto___42306]));

var G__42307 = (i__5770__auto___42306 + (1));
i__5770__auto___42306 = G__42307;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41953){
var G__41954 = cljs.core.first(seq41953);
var seq41953__$1 = cljs.core.next(seq41953);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41954,seq41953__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41955 = cljs.core.seq(sources);
var chunk__41956 = null;
var count__41957 = (0);
var i__41958 = (0);
while(true){
if((i__41958 < count__41957)){
var map__41963 = chunk__41956.cljs$core$IIndexed$_nth$arity$2(null,i__41958);
var map__41963__$1 = cljs.core.__destructure_map(map__41963);
var src = map__41963__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41963__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41963__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41963__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41963__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41964){var e_42308 = e41964;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42308);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42308.message)].join('')));
}

var G__42309 = seq__41955;
var G__42310 = chunk__41956;
var G__42311 = count__41957;
var G__42312 = (i__41958 + (1));
seq__41955 = G__42309;
chunk__41956 = G__42310;
count__41957 = G__42311;
i__41958 = G__42312;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41955);
if(temp__5804__auto__){
var seq__41955__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41955__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41955__$1);
var G__42314 = cljs.core.chunk_rest(seq__41955__$1);
var G__42315 = c__5568__auto__;
var G__42316 = cljs.core.count(c__5568__auto__);
var G__42317 = (0);
seq__41955 = G__42314;
chunk__41956 = G__42315;
count__41957 = G__42316;
i__41958 = G__42317;
continue;
} else {
var map__41965 = cljs.core.first(seq__41955__$1);
var map__41965__$1 = cljs.core.__destructure_map(map__41965);
var src = map__41965__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41965__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41965__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41965__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41965__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41966){var e_42319 = e41966;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42319);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42319.message)].join('')));
}

var G__42320 = cljs.core.next(seq__41955__$1);
var G__42321 = null;
var G__42322 = (0);
var G__42323 = (0);
seq__41955 = G__42320;
chunk__41956 = G__42321;
count__41957 = G__42322;
i__41958 = G__42323;
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
var seq__41967 = cljs.core.seq(js_requires);
var chunk__41968 = null;
var count__41969 = (0);
var i__41970 = (0);
while(true){
if((i__41970 < count__41969)){
var js_ns = chunk__41968.cljs$core$IIndexed$_nth$arity$2(null,i__41970);
var require_str_42324 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42324);


var G__42325 = seq__41967;
var G__42326 = chunk__41968;
var G__42327 = count__41969;
var G__42328 = (i__41970 + (1));
seq__41967 = G__42325;
chunk__41968 = G__42326;
count__41969 = G__42327;
i__41970 = G__42328;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41967);
if(temp__5804__auto__){
var seq__41967__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41967__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41967__$1);
var G__42329 = cljs.core.chunk_rest(seq__41967__$1);
var G__42330 = c__5568__auto__;
var G__42331 = cljs.core.count(c__5568__auto__);
var G__42332 = (0);
seq__41967 = G__42329;
chunk__41968 = G__42330;
count__41969 = G__42331;
i__41970 = G__42332;
continue;
} else {
var js_ns = cljs.core.first(seq__41967__$1);
var require_str_42333 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42333);


var G__42334 = cljs.core.next(seq__41967__$1);
var G__42335 = null;
var G__42336 = (0);
var G__42337 = (0);
seq__41967 = G__42334;
chunk__41968 = G__42335;
count__41969 = G__42336;
i__41970 = G__42337;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41972){
var map__41973 = p__41972;
var map__41973__$1 = cljs.core.__destructure_map(map__41973);
var msg = map__41973__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41973__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41973__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41974(s__41975){
return (new cljs.core.LazySeq(null,(function (){
var s__41975__$1 = s__41975;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41975__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__41980 = cljs.core.first(xs__6360__auto__);
var map__41980__$1 = cljs.core.__destructure_map(map__41980);
var src = map__41980__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41980__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41980__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__41975__$1,map__41980,map__41980__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41973,map__41973__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41974_$_iter__41976(s__41977){
return (new cljs.core.LazySeq(null,((function (s__41975__$1,map__41980,map__41980__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41973,map__41973__$1,msg,info,reload_info){
return (function (){
var s__41977__$1 = s__41977;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__41977__$1);
if(temp__5804__auto____$1){
var s__41977__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41977__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41977__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41979 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41978 = (0);
while(true){
if((i__41978 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__41978);
cljs.core.chunk_append(b__41979,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42338 = (i__41978 + (1));
i__41978 = G__42338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41979),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41974_$_iter__41976(cljs.core.chunk_rest(s__41977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41979),null);
}
} else {
var warning = cljs.core.first(s__41977__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41974_$_iter__41976(cljs.core.rest(s__41977__$2)));
}
} else {
return null;
}
break;
}
});})(s__41975__$1,map__41980,map__41980__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41973,map__41973__$1,msg,info,reload_info))
,null,null));
});})(s__41975__$1,map__41980,map__41980__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41973,map__41973__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41974(cljs.core.rest(s__41975__$1)));
} else {
var G__42339 = cljs.core.rest(s__41975__$1);
s__41975__$1 = G__42339;
continue;
}
} else {
var G__42340 = cljs.core.rest(s__41975__$1);
s__41975__$1 = G__42340;
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
var seq__41981_42341 = cljs.core.seq(warnings);
var chunk__41982_42342 = null;
var count__41983_42343 = (0);
var i__41984_42344 = (0);
while(true){
if((i__41984_42344 < count__41983_42343)){
var map__41987_42345 = chunk__41982_42342.cljs$core$IIndexed$_nth$arity$2(null,i__41984_42344);
var map__41987_42346__$1 = cljs.core.__destructure_map(map__41987_42345);
var w_42347 = map__41987_42346__$1;
var msg_42348__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41987_42346__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41987_42346__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41987_42346__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41987_42346__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42351)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42349),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42350),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42348__$1)].join(''));


var G__42352 = seq__41981_42341;
var G__42353 = chunk__41982_42342;
var G__42354 = count__41983_42343;
var G__42355 = (i__41984_42344 + (1));
seq__41981_42341 = G__42352;
chunk__41982_42342 = G__42353;
count__41983_42343 = G__42354;
i__41984_42344 = G__42355;
continue;
} else {
var temp__5804__auto___42356 = cljs.core.seq(seq__41981_42341);
if(temp__5804__auto___42356){
var seq__41981_42357__$1 = temp__5804__auto___42356;
if(cljs.core.chunked_seq_QMARK_(seq__41981_42357__$1)){
var c__5568__auto___42358 = cljs.core.chunk_first(seq__41981_42357__$1);
var G__42359 = cljs.core.chunk_rest(seq__41981_42357__$1);
var G__42360 = c__5568__auto___42358;
var G__42361 = cljs.core.count(c__5568__auto___42358);
var G__42362 = (0);
seq__41981_42341 = G__42359;
chunk__41982_42342 = G__42360;
count__41983_42343 = G__42361;
i__41984_42344 = G__42362;
continue;
} else {
var map__41988_42363 = cljs.core.first(seq__41981_42357__$1);
var map__41988_42364__$1 = cljs.core.__destructure_map(map__41988_42363);
var w_42365 = map__41988_42364__$1;
var msg_42366__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41988_42364__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41988_42364__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41988_42364__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41988_42364__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42369)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42367),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42368),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42366__$1)].join(''));


var G__42370 = cljs.core.next(seq__41981_42357__$1);
var G__42371 = null;
var G__42372 = (0);
var G__42373 = (0);
seq__41981_42341 = G__42370;
chunk__41982_42342 = G__42371;
count__41983_42343 = G__42372;
i__41984_42344 = G__42373;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41971_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41971_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41990){
var map__41991 = p__41990;
var map__41991__$1 = cljs.core.__destructure_map(map__41991);
var msg = map__41991__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41991__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41991__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__41992 = cljs.core.seq(updates);
var chunk__41994 = null;
var count__41995 = (0);
var i__41996 = (0);
while(true){
if((i__41996 < count__41995)){
var path = chunk__41994.cljs$core$IIndexed$_nth$arity$2(null,i__41996);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42175_42374 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42179_42375 = null;
var count__42180_42376 = (0);
var i__42181_42377 = (0);
while(true){
if((i__42181_42377 < count__42180_42376)){
var node_42378 = chunk__42179_42375.cljs$core$IIndexed$_nth$arity$2(null,i__42181_42377);
if(cljs.core.not(node_42378.shadow$old)){
var path_match_42379 = shadow.cljs.devtools.client.browser.match_paths(node_42378.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42379)){
var new_link_42380 = (function (){var G__42207 = node_42378.cloneNode(true);
G__42207.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42379),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42207;
})();
(node_42378.shadow$old = true);

(new_link_42380.onload = ((function (seq__42175_42374,chunk__42179_42375,count__42180_42376,i__42181_42377,seq__41992,chunk__41994,count__41995,i__41996,new_link_42380,path_match_42379,node_42378,path,map__41991,map__41991__$1,msg,updates,reload_info){
return (function (e){
var seq__42208_42381 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42210_42382 = null;
var count__42211_42383 = (0);
var i__42212_42384 = (0);
while(true){
if((i__42212_42384 < count__42211_42383)){
var map__42216_42385 = chunk__42210_42382.cljs$core$IIndexed$_nth$arity$2(null,i__42212_42384);
var map__42216_42386__$1 = cljs.core.__destructure_map(map__42216_42385);
var task_42387 = map__42216_42386__$1;
var fn_str_42388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42216_42386__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42216_42386__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42390 = goog.getObjectByName(fn_str_42388,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42389)].join(''));

(fn_obj_42390.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42390.cljs$core$IFn$_invoke$arity$2(path,new_link_42380) : fn_obj_42390.call(null,path,new_link_42380));


var G__42391 = seq__42208_42381;
var G__42392 = chunk__42210_42382;
var G__42393 = count__42211_42383;
var G__42394 = (i__42212_42384 + (1));
seq__42208_42381 = G__42391;
chunk__42210_42382 = G__42392;
count__42211_42383 = G__42393;
i__42212_42384 = G__42394;
continue;
} else {
var temp__5804__auto___42395 = cljs.core.seq(seq__42208_42381);
if(temp__5804__auto___42395){
var seq__42208_42396__$1 = temp__5804__auto___42395;
if(cljs.core.chunked_seq_QMARK_(seq__42208_42396__$1)){
var c__5568__auto___42397 = cljs.core.chunk_first(seq__42208_42396__$1);
var G__42398 = cljs.core.chunk_rest(seq__42208_42396__$1);
var G__42399 = c__5568__auto___42397;
var G__42400 = cljs.core.count(c__5568__auto___42397);
var G__42401 = (0);
seq__42208_42381 = G__42398;
chunk__42210_42382 = G__42399;
count__42211_42383 = G__42400;
i__42212_42384 = G__42401;
continue;
} else {
var map__42217_42402 = cljs.core.first(seq__42208_42396__$1);
var map__42217_42403__$1 = cljs.core.__destructure_map(map__42217_42402);
var task_42404 = map__42217_42403__$1;
var fn_str_42405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42217_42403__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42217_42403__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42407 = goog.getObjectByName(fn_str_42405,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42406)].join(''));

(fn_obj_42407.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42407.cljs$core$IFn$_invoke$arity$2(path,new_link_42380) : fn_obj_42407.call(null,path,new_link_42380));


var G__42408 = cljs.core.next(seq__42208_42396__$1);
var G__42409 = null;
var G__42410 = (0);
var G__42411 = (0);
seq__42208_42381 = G__42408;
chunk__42210_42382 = G__42409;
count__42211_42383 = G__42410;
i__42212_42384 = G__42411;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42378);
});})(seq__42175_42374,chunk__42179_42375,count__42180_42376,i__42181_42377,seq__41992,chunk__41994,count__41995,i__41996,new_link_42380,path_match_42379,node_42378,path,map__41991,map__41991__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42379], 0));

goog.dom.insertSiblingAfter(new_link_42380,node_42378);


var G__42412 = seq__42175_42374;
var G__42413 = chunk__42179_42375;
var G__42414 = count__42180_42376;
var G__42415 = (i__42181_42377 + (1));
seq__42175_42374 = G__42412;
chunk__42179_42375 = G__42413;
count__42180_42376 = G__42414;
i__42181_42377 = G__42415;
continue;
} else {
var G__42416 = seq__42175_42374;
var G__42417 = chunk__42179_42375;
var G__42418 = count__42180_42376;
var G__42419 = (i__42181_42377 + (1));
seq__42175_42374 = G__42416;
chunk__42179_42375 = G__42417;
count__42180_42376 = G__42418;
i__42181_42377 = G__42419;
continue;
}
} else {
var G__42420 = seq__42175_42374;
var G__42421 = chunk__42179_42375;
var G__42422 = count__42180_42376;
var G__42423 = (i__42181_42377 + (1));
seq__42175_42374 = G__42420;
chunk__42179_42375 = G__42421;
count__42180_42376 = G__42422;
i__42181_42377 = G__42423;
continue;
}
} else {
var temp__5804__auto___42424 = cljs.core.seq(seq__42175_42374);
if(temp__5804__auto___42424){
var seq__42175_42425__$1 = temp__5804__auto___42424;
if(cljs.core.chunked_seq_QMARK_(seq__42175_42425__$1)){
var c__5568__auto___42426 = cljs.core.chunk_first(seq__42175_42425__$1);
var G__42427 = cljs.core.chunk_rest(seq__42175_42425__$1);
var G__42428 = c__5568__auto___42426;
var G__42429 = cljs.core.count(c__5568__auto___42426);
var G__42430 = (0);
seq__42175_42374 = G__42427;
chunk__42179_42375 = G__42428;
count__42180_42376 = G__42429;
i__42181_42377 = G__42430;
continue;
} else {
var node_42431 = cljs.core.first(seq__42175_42425__$1);
if(cljs.core.not(node_42431.shadow$old)){
var path_match_42432 = shadow.cljs.devtools.client.browser.match_paths(node_42431.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42432)){
var new_link_42433 = (function (){var G__42218 = node_42431.cloneNode(true);
G__42218.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42432),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42218;
})();
(node_42431.shadow$old = true);

(new_link_42433.onload = ((function (seq__42175_42374,chunk__42179_42375,count__42180_42376,i__42181_42377,seq__41992,chunk__41994,count__41995,i__41996,new_link_42433,path_match_42432,node_42431,seq__42175_42425__$1,temp__5804__auto___42424,path,map__41991,map__41991__$1,msg,updates,reload_info){
return (function (e){
var seq__42219_42434 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42221_42435 = null;
var count__42222_42436 = (0);
var i__42223_42437 = (0);
while(true){
if((i__42223_42437 < count__42222_42436)){
var map__42227_42438 = chunk__42221_42435.cljs$core$IIndexed$_nth$arity$2(null,i__42223_42437);
var map__42227_42439__$1 = cljs.core.__destructure_map(map__42227_42438);
var task_42440 = map__42227_42439__$1;
var fn_str_42441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42227_42439__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42227_42439__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42443 = goog.getObjectByName(fn_str_42441,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42442)].join(''));

(fn_obj_42443.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42443.cljs$core$IFn$_invoke$arity$2(path,new_link_42433) : fn_obj_42443.call(null,path,new_link_42433));


var G__42444 = seq__42219_42434;
var G__42445 = chunk__42221_42435;
var G__42446 = count__42222_42436;
var G__42447 = (i__42223_42437 + (1));
seq__42219_42434 = G__42444;
chunk__42221_42435 = G__42445;
count__42222_42436 = G__42446;
i__42223_42437 = G__42447;
continue;
} else {
var temp__5804__auto___42448__$1 = cljs.core.seq(seq__42219_42434);
if(temp__5804__auto___42448__$1){
var seq__42219_42449__$1 = temp__5804__auto___42448__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42219_42449__$1)){
var c__5568__auto___42450 = cljs.core.chunk_first(seq__42219_42449__$1);
var G__42451 = cljs.core.chunk_rest(seq__42219_42449__$1);
var G__42452 = c__5568__auto___42450;
var G__42453 = cljs.core.count(c__5568__auto___42450);
var G__42454 = (0);
seq__42219_42434 = G__42451;
chunk__42221_42435 = G__42452;
count__42222_42436 = G__42453;
i__42223_42437 = G__42454;
continue;
} else {
var map__42228_42455 = cljs.core.first(seq__42219_42449__$1);
var map__42228_42456__$1 = cljs.core.__destructure_map(map__42228_42455);
var task_42457 = map__42228_42456__$1;
var fn_str_42458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42228_42456__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42228_42456__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42460 = goog.getObjectByName(fn_str_42458,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42459)].join(''));

(fn_obj_42460.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42460.cljs$core$IFn$_invoke$arity$2(path,new_link_42433) : fn_obj_42460.call(null,path,new_link_42433));


var G__42461 = cljs.core.next(seq__42219_42449__$1);
var G__42462 = null;
var G__42463 = (0);
var G__42464 = (0);
seq__42219_42434 = G__42461;
chunk__42221_42435 = G__42462;
count__42222_42436 = G__42463;
i__42223_42437 = G__42464;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42431);
});})(seq__42175_42374,chunk__42179_42375,count__42180_42376,i__42181_42377,seq__41992,chunk__41994,count__41995,i__41996,new_link_42433,path_match_42432,node_42431,seq__42175_42425__$1,temp__5804__auto___42424,path,map__41991,map__41991__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42432], 0));

goog.dom.insertSiblingAfter(new_link_42433,node_42431);


var G__42465 = cljs.core.next(seq__42175_42425__$1);
var G__42466 = null;
var G__42467 = (0);
var G__42468 = (0);
seq__42175_42374 = G__42465;
chunk__42179_42375 = G__42466;
count__42180_42376 = G__42467;
i__42181_42377 = G__42468;
continue;
} else {
var G__42469 = cljs.core.next(seq__42175_42425__$1);
var G__42470 = null;
var G__42471 = (0);
var G__42472 = (0);
seq__42175_42374 = G__42469;
chunk__42179_42375 = G__42470;
count__42180_42376 = G__42471;
i__42181_42377 = G__42472;
continue;
}
} else {
var G__42473 = cljs.core.next(seq__42175_42425__$1);
var G__42474 = null;
var G__42475 = (0);
var G__42476 = (0);
seq__42175_42374 = G__42473;
chunk__42179_42375 = G__42474;
count__42180_42376 = G__42475;
i__42181_42377 = G__42476;
continue;
}
}
} else {
}
}
break;
}


var G__42477 = seq__41992;
var G__42478 = chunk__41994;
var G__42479 = count__41995;
var G__42480 = (i__41996 + (1));
seq__41992 = G__42477;
chunk__41994 = G__42478;
count__41995 = G__42479;
i__41996 = G__42480;
continue;
} else {
var G__42481 = seq__41992;
var G__42482 = chunk__41994;
var G__42483 = count__41995;
var G__42484 = (i__41996 + (1));
seq__41992 = G__42481;
chunk__41994 = G__42482;
count__41995 = G__42483;
i__41996 = G__42484;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41992);
if(temp__5804__auto__){
var seq__41992__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41992__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41992__$1);
var G__42485 = cljs.core.chunk_rest(seq__41992__$1);
var G__42486 = c__5568__auto__;
var G__42487 = cljs.core.count(c__5568__auto__);
var G__42488 = (0);
seq__41992 = G__42485;
chunk__41994 = G__42486;
count__41995 = G__42487;
i__41996 = G__42488;
continue;
} else {
var path = cljs.core.first(seq__41992__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42229_42489 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42233_42490 = null;
var count__42234_42491 = (0);
var i__42235_42492 = (0);
while(true){
if((i__42235_42492 < count__42234_42491)){
var node_42493 = chunk__42233_42490.cljs$core$IIndexed$_nth$arity$2(null,i__42235_42492);
if(cljs.core.not(node_42493.shadow$old)){
var path_match_42494 = shadow.cljs.devtools.client.browser.match_paths(node_42493.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42494)){
var new_link_42495 = (function (){var G__42263 = node_42493.cloneNode(true);
G__42263.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42494),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42263;
})();
(node_42493.shadow$old = true);

(new_link_42495.onload = ((function (seq__42229_42489,chunk__42233_42490,count__42234_42491,i__42235_42492,seq__41992,chunk__41994,count__41995,i__41996,new_link_42495,path_match_42494,node_42493,path,seq__41992__$1,temp__5804__auto__,map__41991,map__41991__$1,msg,updates,reload_info){
return (function (e){
var seq__42264_42496 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42266_42497 = null;
var count__42267_42498 = (0);
var i__42268_42499 = (0);
while(true){
if((i__42268_42499 < count__42267_42498)){
var map__42272_42500 = chunk__42266_42497.cljs$core$IIndexed$_nth$arity$2(null,i__42268_42499);
var map__42272_42501__$1 = cljs.core.__destructure_map(map__42272_42500);
var task_42502 = map__42272_42501__$1;
var fn_str_42503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42272_42501__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42272_42501__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42505 = goog.getObjectByName(fn_str_42503,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42504)].join(''));

(fn_obj_42505.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42505.cljs$core$IFn$_invoke$arity$2(path,new_link_42495) : fn_obj_42505.call(null,path,new_link_42495));


var G__42506 = seq__42264_42496;
var G__42507 = chunk__42266_42497;
var G__42508 = count__42267_42498;
var G__42509 = (i__42268_42499 + (1));
seq__42264_42496 = G__42506;
chunk__42266_42497 = G__42507;
count__42267_42498 = G__42508;
i__42268_42499 = G__42509;
continue;
} else {
var temp__5804__auto___42510__$1 = cljs.core.seq(seq__42264_42496);
if(temp__5804__auto___42510__$1){
var seq__42264_42511__$1 = temp__5804__auto___42510__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42264_42511__$1)){
var c__5568__auto___42512 = cljs.core.chunk_first(seq__42264_42511__$1);
var G__42513 = cljs.core.chunk_rest(seq__42264_42511__$1);
var G__42514 = c__5568__auto___42512;
var G__42515 = cljs.core.count(c__5568__auto___42512);
var G__42516 = (0);
seq__42264_42496 = G__42513;
chunk__42266_42497 = G__42514;
count__42267_42498 = G__42515;
i__42268_42499 = G__42516;
continue;
} else {
var map__42273_42517 = cljs.core.first(seq__42264_42511__$1);
var map__42273_42518__$1 = cljs.core.__destructure_map(map__42273_42517);
var task_42519 = map__42273_42518__$1;
var fn_str_42520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42273_42518__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42273_42518__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42522 = goog.getObjectByName(fn_str_42520,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42521)].join(''));

(fn_obj_42522.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42522.cljs$core$IFn$_invoke$arity$2(path,new_link_42495) : fn_obj_42522.call(null,path,new_link_42495));


var G__42523 = cljs.core.next(seq__42264_42511__$1);
var G__42524 = null;
var G__42525 = (0);
var G__42526 = (0);
seq__42264_42496 = G__42523;
chunk__42266_42497 = G__42524;
count__42267_42498 = G__42525;
i__42268_42499 = G__42526;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42493);
});})(seq__42229_42489,chunk__42233_42490,count__42234_42491,i__42235_42492,seq__41992,chunk__41994,count__41995,i__41996,new_link_42495,path_match_42494,node_42493,path,seq__41992__$1,temp__5804__auto__,map__41991,map__41991__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42494], 0));

goog.dom.insertSiblingAfter(new_link_42495,node_42493);


var G__42527 = seq__42229_42489;
var G__42528 = chunk__42233_42490;
var G__42529 = count__42234_42491;
var G__42530 = (i__42235_42492 + (1));
seq__42229_42489 = G__42527;
chunk__42233_42490 = G__42528;
count__42234_42491 = G__42529;
i__42235_42492 = G__42530;
continue;
} else {
var G__42531 = seq__42229_42489;
var G__42532 = chunk__42233_42490;
var G__42533 = count__42234_42491;
var G__42534 = (i__42235_42492 + (1));
seq__42229_42489 = G__42531;
chunk__42233_42490 = G__42532;
count__42234_42491 = G__42533;
i__42235_42492 = G__42534;
continue;
}
} else {
var G__42535 = seq__42229_42489;
var G__42536 = chunk__42233_42490;
var G__42537 = count__42234_42491;
var G__42538 = (i__42235_42492 + (1));
seq__42229_42489 = G__42535;
chunk__42233_42490 = G__42536;
count__42234_42491 = G__42537;
i__42235_42492 = G__42538;
continue;
}
} else {
var temp__5804__auto___42539__$1 = cljs.core.seq(seq__42229_42489);
if(temp__5804__auto___42539__$1){
var seq__42229_42540__$1 = temp__5804__auto___42539__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42229_42540__$1)){
var c__5568__auto___42541 = cljs.core.chunk_first(seq__42229_42540__$1);
var G__42542 = cljs.core.chunk_rest(seq__42229_42540__$1);
var G__42543 = c__5568__auto___42541;
var G__42544 = cljs.core.count(c__5568__auto___42541);
var G__42545 = (0);
seq__42229_42489 = G__42542;
chunk__42233_42490 = G__42543;
count__42234_42491 = G__42544;
i__42235_42492 = G__42545;
continue;
} else {
var node_42546 = cljs.core.first(seq__42229_42540__$1);
if(cljs.core.not(node_42546.shadow$old)){
var path_match_42547 = shadow.cljs.devtools.client.browser.match_paths(node_42546.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42547)){
var new_link_42548 = (function (){var G__42274 = node_42546.cloneNode(true);
G__42274.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42547),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42274;
})();
(node_42546.shadow$old = true);

(new_link_42548.onload = ((function (seq__42229_42489,chunk__42233_42490,count__42234_42491,i__42235_42492,seq__41992,chunk__41994,count__41995,i__41996,new_link_42548,path_match_42547,node_42546,seq__42229_42540__$1,temp__5804__auto___42539__$1,path,seq__41992__$1,temp__5804__auto__,map__41991,map__41991__$1,msg,updates,reload_info){
return (function (e){
var seq__42275_42549 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42277_42550 = null;
var count__42278_42551 = (0);
var i__42279_42552 = (0);
while(true){
if((i__42279_42552 < count__42278_42551)){
var map__42283_42553 = chunk__42277_42550.cljs$core$IIndexed$_nth$arity$2(null,i__42279_42552);
var map__42283_42554__$1 = cljs.core.__destructure_map(map__42283_42553);
var task_42555 = map__42283_42554__$1;
var fn_str_42556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42283_42554__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42283_42554__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42558 = goog.getObjectByName(fn_str_42556,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42557)].join(''));

(fn_obj_42558.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42558.cljs$core$IFn$_invoke$arity$2(path,new_link_42548) : fn_obj_42558.call(null,path,new_link_42548));


var G__42559 = seq__42275_42549;
var G__42560 = chunk__42277_42550;
var G__42561 = count__42278_42551;
var G__42562 = (i__42279_42552 + (1));
seq__42275_42549 = G__42559;
chunk__42277_42550 = G__42560;
count__42278_42551 = G__42561;
i__42279_42552 = G__42562;
continue;
} else {
var temp__5804__auto___42563__$2 = cljs.core.seq(seq__42275_42549);
if(temp__5804__auto___42563__$2){
var seq__42275_42564__$1 = temp__5804__auto___42563__$2;
if(cljs.core.chunked_seq_QMARK_(seq__42275_42564__$1)){
var c__5568__auto___42565 = cljs.core.chunk_first(seq__42275_42564__$1);
var G__42566 = cljs.core.chunk_rest(seq__42275_42564__$1);
var G__42567 = c__5568__auto___42565;
var G__42568 = cljs.core.count(c__5568__auto___42565);
var G__42569 = (0);
seq__42275_42549 = G__42566;
chunk__42277_42550 = G__42567;
count__42278_42551 = G__42568;
i__42279_42552 = G__42569;
continue;
} else {
var map__42284_42570 = cljs.core.first(seq__42275_42564__$1);
var map__42284_42571__$1 = cljs.core.__destructure_map(map__42284_42570);
var task_42572 = map__42284_42571__$1;
var fn_str_42573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42284_42571__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42284_42571__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42575 = goog.getObjectByName(fn_str_42573,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42574)].join(''));

(fn_obj_42575.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42575.cljs$core$IFn$_invoke$arity$2(path,new_link_42548) : fn_obj_42575.call(null,path,new_link_42548));


var G__42576 = cljs.core.next(seq__42275_42564__$1);
var G__42577 = null;
var G__42578 = (0);
var G__42579 = (0);
seq__42275_42549 = G__42576;
chunk__42277_42550 = G__42577;
count__42278_42551 = G__42578;
i__42279_42552 = G__42579;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42546);
});})(seq__42229_42489,chunk__42233_42490,count__42234_42491,i__42235_42492,seq__41992,chunk__41994,count__41995,i__41996,new_link_42548,path_match_42547,node_42546,seq__42229_42540__$1,temp__5804__auto___42539__$1,path,seq__41992__$1,temp__5804__auto__,map__41991,map__41991__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42547], 0));

goog.dom.insertSiblingAfter(new_link_42548,node_42546);


var G__42580 = cljs.core.next(seq__42229_42540__$1);
var G__42581 = null;
var G__42582 = (0);
var G__42583 = (0);
seq__42229_42489 = G__42580;
chunk__42233_42490 = G__42581;
count__42234_42491 = G__42582;
i__42235_42492 = G__42583;
continue;
} else {
var G__42584 = cljs.core.next(seq__42229_42540__$1);
var G__42585 = null;
var G__42586 = (0);
var G__42587 = (0);
seq__42229_42489 = G__42584;
chunk__42233_42490 = G__42585;
count__42234_42491 = G__42586;
i__42235_42492 = G__42587;
continue;
}
} else {
var G__42588 = cljs.core.next(seq__42229_42540__$1);
var G__42589 = null;
var G__42590 = (0);
var G__42591 = (0);
seq__42229_42489 = G__42588;
chunk__42233_42490 = G__42589;
count__42234_42491 = G__42590;
i__42235_42492 = G__42591;
continue;
}
}
} else {
}
}
break;
}


var G__42592 = cljs.core.next(seq__41992__$1);
var G__42593 = null;
var G__42594 = (0);
var G__42595 = (0);
seq__41992 = G__42592;
chunk__41994 = G__42593;
count__41995 = G__42594;
i__41996 = G__42595;
continue;
} else {
var G__42596 = cljs.core.next(seq__41992__$1);
var G__42597 = null;
var G__42598 = (0);
var G__42599 = (0);
seq__41992 = G__42596;
chunk__41994 = G__42597;
count__41995 = G__42598;
i__41996 = G__42599;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__42285){
var map__42286 = p__42285;
var map__42286__$1 = cljs.core.__destructure_map(map__42286);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42286__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__42287,done,error){
var map__42288 = p__42287;
var map__42288__$1 = cljs.core.__destructure_map(map__42288);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42288__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__42289,done,error){
var map__42290 = p__42289;
var map__42290__$1 = cljs.core.__destructure_map(map__42290);
var msg = map__42290__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42290__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42290__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42290__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42291){
var map__42292 = p__42291;
var map__42292__$1 = cljs.core.__destructure_map(map__42292);
var src = map__42292__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42292__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__42293 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42293) : done.call(null,G__42293));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__42294){
var map__42295 = p__42294;
var map__42295__$1 = cljs.core.__destructure_map(map__42295);
var msg__$1 = map__42295__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42295__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e42296){var ex = e42296;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__42297){
var map__42298 = p__42297;
var map__42298__$1 = cljs.core.__destructure_map(map__42298);
var env = map__42298__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42298__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__42301){
var map__42302 = p__42301;
var map__42302__$1 = cljs.core.__destructure_map(map__42302);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42302__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42302__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__42303){
var map__42304 = p__42303;
var map__42304__$1 = cljs.core.__destructure_map(map__42304);
var svc = map__42304__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42304__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
