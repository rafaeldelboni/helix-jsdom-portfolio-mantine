goog.provide('main.app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
if(goog.DEBUG){
main.app.sig35552 = helix.core.signature_BANG_();
} else {
}

main.app.app = (function (){var G__35553 = (function main$app$app_render(props__31823__auto__,maybe_ref__31824__auto__){
var vec__35554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__31823__auto__),maybe_ref__31824__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(main.app.sig35552)){
(main.app.sig35552.cljs$core$IFn$_invoke$arity$0 ? main.app.sig35552.cljs$core$IFn$_invoke$arity$0() : main.app.sig35552.call(null));
} else {
}
} else {
}

var G__35557 = "div";
var G__35558 = (function (){var obj35563 = ({"children":[(function (){var G__35564 = "h1";
var G__35565 = (function (){var obj35567 = ({"children":"helix-jsdom"});
return obj35567;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35564,G__35565) : helix.core.jsx.call(null,G__35564,G__35565));
})(),(function (){var G__35568 = main.component.component_boolean;
var G__35569 = (function (){var obj35571 = ({"value":true});
return obj35571;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35568,G__35569) : helix.core.jsx.call(null,G__35568,G__35569));
})()]});
return obj35563;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__35557,G__35558) : helix.core.jsxs.call(null,G__35557,G__35558));
});
if(goog.DEBUG === true){
var G__35572 = G__35553;
(G__35572.displayName = "main.app/app");

return G__35572;
} else {
return G__35553;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(main.app.sig35552)){
(main.app.sig35552.cljs$core$IFn$_invoke$arity$4 ? main.app.sig35552.cljs$core$IFn$_invoke$arity$4(main.app.app,"",null,null) : main.app.sig35552.call(null,main.app.app,"",null,null));
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
return main.app.root.render((function (){var G__35573 = main.app.app;
var G__35574 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35573,G__35574) : helix.core.jsx.call(null,G__35573,G__35574));
})());
});
main.app.init = (function main$app$init(){
return main.app.render();
});
goog.exportSymbol('main.app.init', main.app.init);

//# sourceMappingURL=main.app.js.map
