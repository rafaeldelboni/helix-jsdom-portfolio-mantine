goog.provide('portfolio.scenes.component_scene');
if(goog.DEBUG){
portfolio.scenes.component_scene.sig32660 = helix.core.signature_BANG_();
} else {
}

portfolio.scenes.component_scene.counter = (function (){var G__32661 = (function portfolio$scenes$component_scene$counter_render(props__29606__auto__,maybe_ref__29607__auto__){
var vec__32662 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29606__auto__),maybe_ref__29607__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(portfolio.scenes.component_scene.sig32660)){
(portfolio.scenes.component_scene.sig32660.cljs$core$IFn$_invoke$arity$0 ? portfolio.scenes.component_scene.sig32660.cljs$core$IFn$_invoke$arity$0() : portfolio.scenes.component_scene.sig32660.call(null));
} else {
}
} else {
}

var vec__32665 = helix.hooks.use_state((0));
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32665,(0),null);
var set_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32665,(1),null);
var G__32668 = "div";
var G__32669 = (function (){var obj32671 = ({"children":[(function (){var G__32672 = "p";
var G__32673 = (function (){var obj32675 = ({"children":["Count: ",count]});
return obj32675;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32672,G__32673) : helix.core.jsxs.call(null,G__32672,G__32673));
})(),(function (){var G__32676 = "button";
var G__32677 = (function (){var obj32679 = ({"onClick":(function (){
return (set_count.cljs$core$IFn$_invoke$arity$1 ? set_count.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : set_count.call(null,cljs.core.inc));
}),"children":"Increase"});
return obj32679;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32676,G__32677) : helix.core.jsx.call(null,G__32676,G__32677));
})()]});
return obj32671;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32668,G__32669) : helix.core.jsxs.call(null,G__32668,G__32669));
});
if(goog.DEBUG === true){
var G__32680 = G__32661;
(G__32680.displayName = "portfolio.scenes.component-scene/counter");

return G__32680;
} else {
return G__32661;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(portfolio.scenes.component_scene.sig32660)){
(portfolio.scenes.component_scene.sig32660.cljs$core$IFn$_invoke$arity$4 ? portfolio.scenes.component_scene.sig32660.cljs$core$IFn$_invoke$arity$4(portfolio.scenes.component_scene.counter,"(hooks/use-state 0)",null,null) : portfolio.scenes.component_scene.sig32660.call(null,portfolio.scenes.component_scene.counter,"(hooks/use-state 0)",null,null));
} else {
}

helix.core.register_BANG_(portfolio.scenes.component_scene.counter,"portfolio.scenes.component-scene/counter");
} else {
}

portfolio.data.register_scene_BANG_(portfolio.react_18.create_scene(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("portfolio.scenes.component-scene","helix-counter","portfolio.scenes.component-scene/helix-counter",1225112326),new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__32699__delegate = function (___32639__auto__){
var G__32681 = portfolio.scenes.component_scene.counter;
var G__32682 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32681,G__32682) : helix.core.jsx.call(null,G__32681,G__32682));
};
var G__32699 = function (var_args){
var ___32639__auto__ = null;
if (arguments.length > 0) {
var G__32700__i = 0, G__32700__a = new Array(arguments.length -  0);
while (G__32700__i < G__32700__a.length) {G__32700__a[G__32700__i] = arguments[G__32700__i + 0]; ++G__32700__i;}
  ___32639__auto__ = new cljs.core.IndexedSeq(G__32700__a,0,null);
} 
return G__32699__delegate.call(this,___32639__auto__);};
G__32699.cljs$lang$maxFixedArity = 0;
G__32699.cljs$lang$applyTo = (function (arglist__32701){
var ___32639__auto__ = cljs.core.seq(arglist__32701);
return G__32699__delegate(___32639__auto__);
});
G__32699.cljs$core$IFn$_invoke$arity$variadic = G__32699__delegate;
return G__32699;
})()
,new cljs.core.Keyword(null,"code","code",1586293142),"($ counter)",new cljs.core.Keyword(null,"title","title",636505583),"Counter with React Hooks"], null)));
portfolio.data.register_scene_BANG_(portfolio.react_18.create_scene(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("portfolio.scenes.component-scene","component-boolean-true","portfolio.scenes.component-scene/component-boolean-true",129185511),new cljs.core.Keyword(null,"line","line",212345235),20,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__32702__delegate = function (___32639__auto__){
var G__32683 = "div";
var G__32684 = (function (){var obj32686 = ({"children":[(function (){var G__32687 = "h1";
var G__32688 = (function (){var obj32690 = ({"children":"helix-jsdom"});
return obj32690;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32687,G__32688) : helix.core.jsx.call(null,G__32687,G__32688));
})(),(function (){var G__32691 = main.component.component_boolean;
var G__32692 = (function (){var obj32694 = ({"value":true});
return obj32694;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32691,G__32692) : helix.core.jsx.call(null,G__32691,G__32692));
})()]});
return obj32686;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32683,G__32684) : helix.core.jsxs.call(null,G__32683,G__32684));
};
var G__32702 = function (var_args){
var ___32639__auto__ = null;
if (arguments.length > 0) {
var G__32703__i = 0, G__32703__a = new Array(arguments.length -  0);
while (G__32703__i < G__32703__a.length) {G__32703__a[G__32703__i] = arguments[G__32703__i + 0]; ++G__32703__i;}
  ___32639__auto__ = new cljs.core.IndexedSeq(G__32703__a,0,null);
} 
return G__32702__delegate.call(this,___32639__auto__);};
G__32702.cljs$lang$maxFixedArity = 0;
G__32702.cljs$lang$applyTo = (function (arglist__32704){
var ___32639__auto__ = cljs.core.seq(arglist__32704);
return G__32702__delegate(___32639__auto__);
});
G__32702.cljs$core$IFn$_invoke$arity$variadic = G__32702__delegate;
return G__32702;
})()
,new cljs.core.Keyword(null,"code","code",1586293142),"(d/div (d/h1 \"helix-jsdom\") ($ c/component-boolean {:value true}))"], null)));
portfolio.data.register_scene_BANG_(portfolio.react_18.create_scene(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("portfolio.scenes.component-scene","component-boolean-false","portfolio.scenes.component-scene/component-boolean-false",-683918112),new cljs.core.Keyword(null,"line","line",212345235),24,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__32705__delegate = function (___32639__auto__){
var G__32695 = main.component.component_boolean;
var G__32696 = (function (){var obj32698 = ({"value":false});
return obj32698;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32695,G__32696) : helix.core.jsx.call(null,G__32695,G__32696));
};
var G__32705 = function (var_args){
var ___32639__auto__ = null;
if (arguments.length > 0) {
var G__32706__i = 0, G__32706__a = new Array(arguments.length -  0);
while (G__32706__i < G__32706__a.length) {G__32706__a[G__32706__i] = arguments[G__32706__i + 0]; ++G__32706__i;}
  ___32639__auto__ = new cljs.core.IndexedSeq(G__32706__a,0,null);
} 
return G__32705__delegate.call(this,___32639__auto__);};
G__32705.cljs$lang$maxFixedArity = 0;
G__32705.cljs$lang$applyTo = (function (arglist__32707){
var ___32639__auto__ = cljs.core.seq(arglist__32707);
return G__32705__delegate(___32639__auto__);
});
G__32705.cljs$core$IFn$_invoke$arity$variadic = G__32705__delegate;
return G__32705;
})()
,new cljs.core.Keyword(null,"code","code",1586293142),"($ c/component-boolean {:value false})"], null)));

//# sourceMappingURL=portfolio.scenes.component_scene.js.map
