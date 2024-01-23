goog.provide('main.app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
if(goog.DEBUG){
main.app.sig32046 = helix.core.signature_BANG_();
} else {
}

main.app.app = (function (){var G__32047 = (function main$app$app_render(props__29606__auto__,maybe_ref__29607__auto__){
var vec__32048 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__29606__auto__),maybe_ref__29607__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(main.app.sig32046)){
(main.app.sig32046.cljs$core$IFn$_invoke$arity$0 ? main.app.sig32046.cljs$core$IFn$_invoke$arity$0() : main.app.sig32046.call(null));
} else {
}
} else {
}

var G__32051 = "div";
var G__32052 = (function (){var obj32054 = ({"children":[(function (){var G__32055 = "h1";
var G__32056 = (function (){var obj32058 = ({"children":"helix-jsdom"});
return obj32058;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32055,G__32056) : helix.core.jsx.call(null,G__32055,G__32056));
})(),(function (){var G__32065 = main.component.component_boolean;
var G__32066 = (function (){var obj32068 = ({"value":true});
return obj32068;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32065,G__32066) : helix.core.jsx.call(null,G__32065,G__32066));
})()]});
return obj32054;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32051,G__32052) : helix.core.jsxs.call(null,G__32051,G__32052));
});
if(goog.DEBUG === true){
var G__32073 = G__32047;
(G__32073.displayName = "main.app/app");

return G__32073;
} else {
return G__32047;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(main.app.sig32046)){
(main.app.sig32046.cljs$core$IFn$_invoke$arity$4 ? main.app.sig32046.cljs$core$IFn$_invoke$arity$4(main.app.app,"",null,null) : main.app.sig32046.call(null,main.app.app,"",null,null));
} else {
}

helix.core.register_BANG_(main.app.app,"main.app/app");
} else {
}

if((typeof main !== 'undefined') && (typeof main.app !== 'undefined') && (typeof main.app.root !== 'undefined')){
} else {
main.app.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
main.app.render = (function main$app$render(){
return main.app.root.render((function (){var G__32113 = main.app.app;
var G__32114 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32113,G__32114) : helix.core.jsx.call(null,G__32113,G__32114));
})());
});
main.app.init = (function main$app$init(){
return main.app.render();
});
goog.exportSymbol('main.app.init', main.app.init);

//# sourceMappingURL=main.app.js.map
