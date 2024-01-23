goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__34553){
var map__34554 = p__34553;
var map__34554__$1 = cljs.core.__destructure_map(map__34554);
var runtime = map__34554__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34554__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_34978 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_34978)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__34575 = runtime;
var G__34576 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_34978);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__34575,G__34576) : shadow.remote.runtime.shared.process.call(null,G__34575,G__34576));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34582,res){
var map__34584 = p__34582;
var map__34584__$1 = cljs.core.__destructure_map(map__34584);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34584__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34584__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34585 = res;
var G__34585__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34585,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34585);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34585__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34585__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34598 = arguments.length;
switch (G__34598) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__34601,msg,handlers,timeout_after_ms){
var map__34603 = p__34601;
var map__34603__$1 = cljs.core.__destructure_map(map__34603);
var runtime = map__34603__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34603__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34986 = arguments.length;
var i__5770__auto___34987 = (0);
while(true){
if((i__5770__auto___34987 < len__5769__auto___34986)){
args__5775__auto__.push((arguments[i__5770__auto___34987]));

var G__34989 = (i__5770__auto___34987 + (1));
i__5770__auto___34987 = G__34989;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__34643,ev,args){
var map__34644 = p__34643;
var map__34644__$1 = cljs.core.__destructure_map(map__34644);
var runtime = map__34644__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34644__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__34647 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34650 = null;
var count__34651 = (0);
var i__34652 = (0);
while(true){
if((i__34652 < count__34651)){
var ext = chunk__34650.cljs$core$IIndexed$_nth$arity$2(null,i__34652);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34994 = seq__34647;
var G__34995 = chunk__34650;
var G__34996 = count__34651;
var G__34997 = (i__34652 + (1));
seq__34647 = G__34994;
chunk__34650 = G__34995;
count__34651 = G__34996;
i__34652 = G__34997;
continue;
} else {
var G__34998 = seq__34647;
var G__34999 = chunk__34650;
var G__35000 = count__34651;
var G__35001 = (i__34652 + (1));
seq__34647 = G__34998;
chunk__34650 = G__34999;
count__34651 = G__35000;
i__34652 = G__35001;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34647);
if(temp__5804__auto__){
var seq__34647__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34647__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34647__$1);
var G__35003 = cljs.core.chunk_rest(seq__34647__$1);
var G__35004 = c__5568__auto__;
var G__35005 = cljs.core.count(c__5568__auto__);
var G__35006 = (0);
seq__34647 = G__35003;
chunk__34650 = G__35004;
count__34651 = G__35005;
i__34652 = G__35006;
continue;
} else {
var ext = cljs.core.first(seq__34647__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35007 = cljs.core.next(seq__34647__$1);
var G__35008 = null;
var G__35009 = (0);
var G__35010 = (0);
seq__34647 = G__35007;
chunk__34650 = G__35008;
count__34651 = G__35009;
i__34652 = G__35010;
continue;
} else {
var G__35011 = cljs.core.next(seq__34647__$1);
var G__35012 = null;
var G__35013 = (0);
var G__35014 = (0);
seq__34647 = G__35011;
chunk__34650 = G__35012;
count__34651 = G__35013;
i__34652 = G__35014;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq34611){
var G__34612 = cljs.core.first(seq34611);
var seq34611__$1 = cljs.core.next(seq34611);
var G__34613 = cljs.core.first(seq34611__$1);
var seq34611__$2 = cljs.core.next(seq34611__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34612,G__34613,seq34611__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__34711,p__34712){
var map__34714 = p__34711;
var map__34714__$1 = cljs.core.__destructure_map(map__34714);
var runtime = map__34714__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34714__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34716 = p__34712;
var map__34716__$1 = cljs.core.__destructure_map(map__34716);
var msg = map__34716__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34716__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__34718 = cljs.core.deref(state_ref);
var map__34718__$1 = cljs.core.__destructure_map(map__34718);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34718__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34718__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__34733,msg){
var map__34734 = p__34733;
var map__34734__$1 = cljs.core.__destructure_map(map__34734);
var runtime = map__34734__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34734__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__34756,key,p__34757){
var map__34761 = p__34756;
var map__34761__$1 = cljs.core.__destructure_map(map__34761);
var state = map__34761__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34761__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__34762 = p__34757;
var map__34762__$1 = cljs.core.__destructure_map(map__34762);
var spec = map__34762__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34762__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__34776,key,spec){
var map__34777 = p__34776;
var map__34777__$1 = cljs.core.__destructure_map(map__34777);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34777__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__34781_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__34781_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__34782_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__34782_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__34783_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__34783_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__34784_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__34784_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__34785_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__34785_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34789,key){
var map__34790 = p__34789;
var map__34790__$1 = cljs.core.__destructure_map(map__34790);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34790__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__34873,msg){
var map__34877 = p__34873;
var map__34877__$1 = cljs.core.__destructure_map(map__34877);
var runtime = map__34877__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34877__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34930,p__34931){
var map__34932 = p__34930;
var map__34932__$1 = cljs.core.__destructure_map(map__34932);
var runtime = map__34932__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34932__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34933 = p__34931;
var map__34933__$1 = cljs.core.__destructure_map(map__34933);
var msg = map__34933__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34933__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34933__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__34941 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34943 = null;
var count__34944 = (0);
var i__34945 = (0);
while(true){
if((i__34945 < count__34944)){
var map__34955 = chunk__34943.cljs$core$IIndexed$_nth$arity$2(null,i__34945);
var map__34955__$1 = cljs.core.__destructure_map(map__34955);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34955__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35072 = seq__34941;
var G__35073 = chunk__34943;
var G__35074 = count__34944;
var G__35075 = (i__34945 + (1));
seq__34941 = G__35072;
chunk__34943 = G__35073;
count__34944 = G__35074;
i__34945 = G__35075;
continue;
} else {
var G__35077 = seq__34941;
var G__35078 = chunk__34943;
var G__35079 = count__34944;
var G__35080 = (i__34945 + (1));
seq__34941 = G__35077;
chunk__34943 = G__35078;
count__34944 = G__35079;
i__34945 = G__35080;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34941);
if(temp__5804__auto__){
var seq__34941__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34941__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34941__$1);
var G__35081 = cljs.core.chunk_rest(seq__34941__$1);
var G__35082 = c__5568__auto__;
var G__35083 = cljs.core.count(c__5568__auto__);
var G__35084 = (0);
seq__34941 = G__35081;
chunk__34943 = G__35082;
count__34944 = G__35083;
i__34945 = G__35084;
continue;
} else {
var map__34963 = cljs.core.first(seq__34941__$1);
var map__34963__$1 = cljs.core.__destructure_map(map__34963);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34963__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35090 = cljs.core.next(seq__34941__$1);
var G__35091 = null;
var G__35092 = (0);
var G__35093 = (0);
seq__34941 = G__35090;
chunk__34943 = G__35091;
count__34944 = G__35092;
i__34945 = G__35093;
continue;
} else {
var G__35094 = cljs.core.next(seq__34941__$1);
var G__35095 = null;
var G__35096 = (0);
var G__35097 = (0);
seq__34941 = G__35094;
chunk__34943 = G__35095;
count__34944 = G__35096;
i__34945 = G__35097;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
