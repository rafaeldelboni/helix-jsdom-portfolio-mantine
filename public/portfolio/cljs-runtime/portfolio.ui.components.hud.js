goog.provide('portfolio.ui.components.hud');
portfolio.ui.components.hud.render_hud = (function portfolio$ui$components$hud$render_hud(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44874 = arguments.length;
var i__5770__auto___44875 = (0);
while(true){
if((i__5770__auto___44875 < len__5769__auto___44874)){
args__5775__auto__.push((arguments[i__5770__auto___44875]));

var G__44876 = (i__5770__auto___44875 + (1));
i__5770__auto___44875 = G__44876;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.components.hud.render_hud.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.components.hud.render_hud.cljs$core$IFn$_invoke$arity$variadic = (function (p__44872,children){
var map__44873 = p__44872;
var map__44873__$1 = cljs.core.__destructure_map(map__44873);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44873__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44873__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hud.light","div.hud.light",1294929388),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null),new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid var(--soft-separator)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(8),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"rgb(170, 170, 170) 0 0 1px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"transition","transition",765692007),"opacity 0.25s"], null),style], 0))], null),(cljs.core.truth_(action)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"margin","margin",-995903681),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.clickable","button.clickable",2112460976),cljs.core.PersistentArrayMap.EMPTY,phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"color","color",1011675173),"var(--fg)"], null)], 0))], null)], null):null)], null),children);
}));

(portfolio.ui.components.hud.render_hud.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.components.hud.render_hud.cljs$lang$applyTo = (function (seq44870){
var G__44871 = cljs.core.first(seq44870);
var seq44870__$1 = cljs.core.next(seq44870);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44871,seq44870__$1);
}));


//# sourceMappingURL=portfolio.ui.components.hud.js.map
