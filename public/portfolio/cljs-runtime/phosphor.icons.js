goog.provide('phosphor.icons');
phosphor.icons.icons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
phosphor.icons.load_icon_BANG_ = (function phosphor$icons$load_icon_BANG_(id,hiccup){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phosphor.icons.icons,cljs.core.assoc,id,hiccup);
});
phosphor.icons.get_loaded_icons = (function phosphor$icons$get_loaded_icons(){
return cljs.core.keys(cljs.core.deref(phosphor.icons.icons));
});
phosphor.icons.render = (function phosphor$icons$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41519 = arguments.length;
var i__5770__auto___41520 = (0);
while(true){
if((i__5770__auto___41520 < len__5769__auto___41519)){
args__5775__auto__.push((arguments[i__5770__auto___41520]));

var G__41521 = (i__5770__auto___41520 + (1));
i__5770__auto___41520 = G__41521;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__41503){
var vec__41505 = p__41503;
var map__41508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41505,(0),null);
var map__41508__$1 = cljs.core.__destructure_map(map__41508);
var attrs = map__41508__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41508__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41508__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41508__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(phosphor.icons.icons),id);
if(cljs.core.truth_(temp__5802__auto__)){
var svg = temp__5802__auto__;
var color__$1 = (function (){var or__5045__auto__ = color;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "currentColor";
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"style","style",-496642736)], null),(function (){var G__41515 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1",new cljs.core.Keyword(null,"color","color",1011675173),color__$1,new cljs.core.Keyword(null,"fill","fill",883462889),color__$1], null);
var G__41515__$1 = (cljs.core.truth_(size)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41515,new cljs.core.Keyword(null,"height","height",1025178622),size):G__41515);
var G__41515__$2 = (cljs.core.truth_(size)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41515__$1,new cljs.core.Keyword(null,"width","width",-384071477),size):G__41515__$1);
if(cljs.core.truth_(style)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__41515__$2,style);
} else {
return G__41515__$2;
}
})()),(1),cljs.core.merge,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"style","style",-496642736)], 0)));
} else {
throw (new Error(["Icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," is not loaded. Try loading it with `load-icon!`, or check that it exists."].join('')));
}
}));

(phosphor.icons.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(phosphor.icons.render.cljs$lang$applyTo = (function (seq41499){
var G__41500 = cljs.core.first(seq41499);
var seq41499__$1 = cljs.core.next(seq41499);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41500,seq41499__$1);
}));


//# sourceMappingURL=phosphor.icons.js.map
