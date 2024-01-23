goog.provide('portfolio.react_utils');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
portfolio.react_utils.create_scene = (function portfolio$react_utils$create_scene(scene,impl){
return portfolio.adapter.prepare_scene(cljs.core.update.cljs$core$IFn$_invoke$arity$3(scene,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function (f){
return (function() { 
var G__32827__delegate = function (args){
return module$node_modules$react$index.createElement((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),({}));
};
var G__32827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32828__i = 0, G__32828__a = new Array(arguments.length -  0);
while (G__32828__i < G__32828__a.length) {G__32828__a[G__32828__i] = arguments[G__32828__i + 0]; ++G__32828__i;}
  args = new cljs.core.IndexedSeq(G__32828__a,0,null);
} 
return G__32827__delegate.call(this,args);};
G__32827.cljs$lang$maxFixedArity = 0;
G__32827.cljs$lang$applyTo = (function (arglist__32829){
var args = cljs.core.seq(arglist__32829);
return G__32827__delegate(args);
});
G__32827.cljs$core$IFn$_invoke$arity$variadic = G__32827__delegate;
return G__32827;
})()
;
})),impl);
});
portfolio.react_utils.get_scene = (function portfolio$react_utils$get_scene(this$){
return this$.props.scene;
});
portfolio.react_utils.create_safe_wrapper = (function portfolio$react_utils$create_safe_wrapper(){
var ctor = (function (){
return null;
});
goog.inherits(ctor,module$node_modules$react$index.Component);

(ctor.getDerivedStateFromError = (function (error){
return ({"error": error});
}));

var x32825_32830 = ctor.prototype;
(x32825_32830.componentDidCatch = (function (error,info){
var this$ = this;
var temp__5804__auto__ = new cljs.core.Keyword(null,"report-render-error","report-render-error",-2098634445).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(portfolio.react_utils.get_scene(this$)));
if(cljs.core.truth_(temp__5804__auto__)){
var actions = temp__5804__auto__;
return portfolio.ui.actions.dispatch.cljs$core$IFn$_invoke$arity$variadic(actions,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("action","exception","action/exception",-1254845906),error,new cljs.core.Keyword("action","info","action/info",-664115456),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword("action","cause","action/cause",1369441962),"React error boundary caught error"], null)], 0));
} else {
return null;
}
}));

(x32825_32830.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement("div",({}),(cljs.core.truth_((function (){var G__32826 = this$;
var G__32826__$1 = (((G__32826 == null))?null:G__32826.state);
if((G__32826__$1 == null)){
return null;
} else {
return G__32826__$1.error;
}
})())?"":new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(portfolio.react_utils.get_scene(this$))));
}));


return ctor;
});

//# sourceMappingURL=portfolio.react_utils.js.map
