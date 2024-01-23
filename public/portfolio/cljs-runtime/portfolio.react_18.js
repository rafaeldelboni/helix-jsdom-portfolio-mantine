goog.provide('portfolio.react_18');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
portfolio.react_18.get_root = (function portfolio$react_18$get_root(el){
if(cljs.core.truth_(el.reactRoot)){
} else {
(el.reactRoot = module$node_modules$react_dom$client.createRoot(el));
}

return el.reactRoot;
});
portfolio.react_18.Wrapper = portfolio.react_utils.create_safe_wrapper();
portfolio.react_18.component_impl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.adapter","render-component","portfolio.adapter/render-component",-433053335,null),(function (scene,el){
if((!((el == null)))){
} else {
throw (new Error(["Assert failed: ","Asked to render component into null container.","\n","(some? el)"].join('')));
}

var temp__5804__auto___32852 = (function (){var G__32851 = el;
if((G__32851 == null)){
return null;
} else {
return G__32851.unmount;
}
})();
if(cljs.core.truth_(temp__5804__auto___32852)){
var f_32853 = temp__5804__auto___32852;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("react18",el.unmountLib)){
} else {
(f_32853.cljs$core$IFn$_invoke$arity$0 ? f_32853.cljs$core$IFn$_invoke$arity$0() : f_32853.call(null));
}
} else {
}

var root = portfolio.react_18.get_root(el);
(el.unmount = (function (){
root.unmount();

(el.reactRoot = null);

(el.innerHTML = "");

return (el.unmount = null);
}));

(el.unmountLib = "react18");

return root.render(module$node_modules$react$index.createElement(portfolio.react_18.Wrapper,({"scene": scene})));
})], null);
portfolio.react_18.create_scene = (function portfolio$react_18$create_scene(scene){
return portfolio.react_utils.create_scene(scene,portfolio.react_18.component_impl);
});
portfolio.data.register_scene_renderer_BANG_((function (x){
var temp__5804__auto__ = (cljs.core.truth_(module$node_modules$react$index.isValidElement(x))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null):(cljs.core.truth_(module$node_modules$react$index.isValidElement(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(x)))?x:null));
if(cljs.core.truth_(temp__5804__auto__)){
var scene = temp__5804__auto__;
return portfolio.react_18.create_scene(scene);
} else {
return null;
}
}));

//# sourceMappingURL=portfolio.react_18.js.map
