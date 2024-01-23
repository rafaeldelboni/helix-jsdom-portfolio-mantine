goog.provide('helix.core');
goog.scope(function(){
  helix.core.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react$jsx_runtime=shadow.js.require("module$node_modules$react$jsx_runtime", {});
if((typeof Symbol !== 'undefined')){
(Symbol.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (sym,writer,_){
var sym__$1 = this;
return cljs.core._write(writer,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1.toString()),"\""].join(''));
}));
} else {
}
/**
 * React.Fragment. See `helix.core/<>` for macro version.
 */
helix.core.Fragment = module$node_modules$react$index.Fragment;
/**
 * React.Suspense. See `helix.core/suspense` for macro version.
 */
helix.core.Suspense = module$node_modules$react$index.Suspense;
helix.core.create_element = module$node_modules$react$index.createElement;
/**
 * React.createContext
 */
helix.core.create_context = module$node_modules$react$index.createContext;
helix.core.get_react = (function helix$core$get_react(){
return module$node_modules$react$index;
});
helix.core.jsx = module$node_modules$react$jsx_runtime.jsx;
helix.core.jsxs = module$node_modules$react$jsx_runtime.jsxs;
/**
 * Create a new React element from a valid React type.
 * 
 *   Example:
 *   ```
 *   ($ MyComponent
 * "child1"
 * ($ "span"
 *   {:style {:color "green"}}
 *   "child2" ))
 *   ```
 */
helix.core.$ = (function helix$core$$(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32089 = arguments.length;
var i__5770__auto___32090 = (0);
while(true){
if((i__5770__auto___32090 < len__5769__auto___32089)){
args__5775__auto__.push((arguments[i__5770__auto___32090]));

var G__32091 = (i__5770__auto___32090 + (1));
i__5770__auto___32090 = G__32091;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return helix.core.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(helix.core.$.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
var _QMARK_p = cljs.core.first(args);
var _QMARK_c = cljs.core.rest(args);
var native_QMARK_ = (function (){var or__5045__auto__ = (type instanceof cljs.core.Keyword);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = typeof type === 'string';
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type));
}
}
})();
var has_props_QMARK_ = ((cljs.core.map_QMARK_(_QMARK_p)) || ((_QMARK_p == null)));
var children_STAR_ = ((has_props_QMARK_)?_QMARK_c:args);
var children = ((cljs.core.next(children_STAR_))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(children_STAR_):cljs.core.first(children_STAR_));
var props_STAR_ = (function (){var G__32069 = cljs.core.PersistentArrayMap.EMPTY;
var G__32069__$1 = ((has_props_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__32069,_QMARK_p):G__32069);
if((!((children == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32069__$1,new cljs.core.Keyword(null,"children","children",-940561982),children);
} else {
return G__32069__$1;
}
})();
var props = (cljs.core.truth_(native_QMARK_)?helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(props_STAR_):helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(props_STAR_));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props_STAR_);
var emit_fn = ((cljs.core.next(children_STAR_))?helix.core.jsxs:helix.core.jsx);
var type_SINGLEQUOTE_ = (((type instanceof cljs.core.Keyword))?cljs.core.name(type):type);
if((!((key == null)))){
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(type_SINGLEQUOTE_,props,key) : emit_fn.call(null,type_SINGLEQUOTE_,props,key));
} else {
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(type_SINGLEQUOTE_,props) : emit_fn.call(null,type_SINGLEQUOTE_,props));
}
}));

(helix.core.$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(helix.core.$.cljs$lang$applyTo = (function (seq32062){
var G__32063 = cljs.core.first(seq32062);
var seq32062__$1 = cljs.core.next(seq32062);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32063,seq32062__$1);
}));

/**
 * Dynamically create a new React element from a valid React type.
 * 
 *   `$` can typically be faster, because it will statically process the arguments
 *   at macro-time if possible.
 * 
 *   Example:
 *   ```
 *   ($$ MyComponent
 * "child1"
 * ($$ "span"
 *   {:style {:color "green"}}
 *   "child2" ))
 *   ```
 */
helix.core.$$ = helix.core.$;

/**
 * @interface
 */
helix.core.IExtractType = function(){};

var helix$core$IExtractType$_type$dyn_32093 = (function (factory){
var x__5393__auto__ = (((factory == null))?null:factory);
var m__5394__auto__ = (helix.core._type[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(factory) : m__5394__auto__.call(null,factory));
} else {
var m__5392__auto__ = (helix.core._type["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(factory) : m__5392__auto__.call(null,factory));
} else {
throw cljs.core.missing_protocol("IExtractType.-type",factory);
}
}
});
/**
 * Extracts the underlying type from the factory function.
 */
helix.core._type = (function helix$core$_type(factory){
if((((!((factory == null)))) && ((!((factory.helix$core$IExtractType$_type$arity$1 == null)))))){
return factory.helix$core$IExtractType$_type$arity$1(factory);
} else {
return helix$core$IExtractType$_type$dyn_32093(factory);
}
});

/**
 * Geven a factory function created by `helix.core/factory` or `cljs-factory`,
 *   returns the original component that the factory creates elements of.
 */
helix.core.type = (function helix$core$type(f){
return helix.core._type(f);
});
/**
 * Creates a factory function for a React component, that when called returns an
 *   element with the props and children passed to the factory.
 * 
 *   Use `helix.core/type` to extract the original React component.
 */
helix.core.factory = (function helix$core$factory(type){
var x32070 = (function() { 
var helix$core$factory_$_factory__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(helix.core.$,type,args);
};
var helix$core$factory_$_factory = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32094__i = 0, G__32094__a = new Array(arguments.length -  0);
while (G__32094__i < G__32094__a.length) {G__32094__a[G__32094__i] = arguments[G__32094__i + 0]; ++G__32094__i;}
  args = new cljs.core.IndexedSeq(G__32094__a,0,null);
} 
return helix$core$factory_$_factory__delegate.call(this,args);};
helix$core$factory_$_factory.cljs$lang$maxFixedArity = 0;
helix$core$factory_$_factory.cljs$lang$applyTo = (function (arglist__32095){
var args = cljs.core.seq(arglist__32095);
return helix$core$factory_$_factory__delegate(args);
});
helix$core$factory_$_factory.cljs$core$IFn$_invoke$arity$variadic = helix$core$factory_$_factory__delegate;
return helix$core$factory_$_factory;
})()
;
(x32070.helix$core$IExtractType$ = cljs.core.PROTOCOL_SENTINEL);

(x32070.helix$core$IExtractType$_type$arity$1 = (function (_){
var ___$1 = this;
return type;
}));

return x32070;
});
/**
 * Creates a factory function for a component defined via `defnc`, that when
 *   called returns an element with the props and children passed to the factory.
 *   Slightly more performant than `factory` when used with a helix component.
 * 
 *   Use `helix.core/type` to extract the original component this was called with.
 */
helix.core.cljs_factory = (function helix$core$cljs_factory(type){
var x32071 = (function() { 
var helix$core$cljs_factory_$_factory__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var props = cljs.core.first(args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,type,({"helix/props": cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref","ref",1289896967)], 0)), "key": cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"key","key",-1516042587),undefined), "ref": cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),undefined)}),cljs.core.rest(args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,type,({}),args);
}
};
var helix$core$cljs_factory_$_factory = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32101__i = 0, G__32101__a = new Array(arguments.length -  0);
while (G__32101__i < G__32101__a.length) {G__32101__a[G__32101__i] = arguments[G__32101__i + 0]; ++G__32101__i;}
  args = new cljs.core.IndexedSeq(G__32101__a,0,null);
} 
return helix$core$cljs_factory_$_factory__delegate.call(this,args);};
helix$core$cljs_factory_$_factory.cljs$lang$maxFixedArity = 0;
helix$core$cljs_factory_$_factory.cljs$lang$applyTo = (function (arglist__32102){
var args = cljs.core.seq(arglist__32102);
return helix$core$cljs_factory_$_factory__delegate(args);
});
helix$core$cljs_factory_$_factory.cljs$core$IFn$_invoke$arity$variadic = helix$core$cljs_factory_$_factory__delegate;
return helix$core$cljs_factory_$_factory;
})()
;
(x32071.helix$core$IExtractType$ = cljs.core.PROTOCOL_SENTINEL);

(x32071.helix$core$IExtractType$_type$arity$1 = (function (_){
var ___$1 = this;
return type;
}));

return x32071;
});
helix.core.assoc_some = (function helix$core$assoc_some(m,k,x){
if((!((x == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,x);
} else {
return m;
}
});
/**
 * A helper function for turning a props object into a CLJS map. Works with both
 *   factory functions (which stores a map in a single key, "helix/props") and
 *   normal JS objects.
 *   Mostly used internally by helix, but can be useful when writing HOC.
 */
helix.core.extract_cljs_props = (function helix$core$extract_cljs_props(o){
if(((goog.DEBUG) && (((cljs.core.map_QMARK_(o)) || ((o == null)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Props received were a map. This probably means you're calling your component as a function.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),o], null));
} else {
}

var temp__5802__auto__ = helix.core.goog$module$goog$object.get(o,"helix/props");
if(cljs.core.truth_(temp__5802__auto__)){
var props = temp__5802__auto__;
return helix.core.assoc_some(props,new cljs.core.Keyword(null,"children","children",-940561982),helix.core.goog$module$goog$object.get(o,"children"));
} else {
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1(o);
}
});
helix.core.props_kvs_identical_QMARK_ = (function helix$core$props_kvs_identical_QMARK_(prev,cur){
var prev_props = helix.core.extract_cljs_props(prev);
var cur_props = helix.core.extract_cljs_props(cur);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(prev_props),cljs.core.count(cur_props))) && (cljs.core.every_QMARK_((function (p1__32072_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_props,p1__32072_SHARP_) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(cur_props,p1__32072_SHARP_));
}),cljs.core.keys(cur_props))));
});
/**
 * Like React.memo, but passes props to `compare` as CLJS map-likes instead of
 *   JS objects.
 *   `compare` should return true if props are equal, and false if not.
 */
helix.core.memo = (function helix$core$memo(var_args){
var G__32074 = arguments.length;
switch (G__32074) {
case 1:
return helix.core.memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.core.memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.core.memo.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react$index.memo(component,helix.core.props_kvs_identical_QMARK_);
}));

(helix.core.memo.cljs$core$IFn$_invoke$arity$2 = (function (component,compare){
return module$node_modules$react$index.memo(component,(function helix$core$memo_compare(o,o_SINGLEQUOTE_){
var G__32075 = helix.core.extract_cljs_props(o);
var G__32076 = helix.core.extract_cljs_props(o_SINGLEQUOTE_);
return (compare.cljs$core$IFn$_invoke$arity$2 ? compare.cljs$core$IFn$_invoke$arity$2(G__32075,G__32076) : compare.call(null,G__32075,G__32076));
}));
}));

(helix.core.memo.cljs$lang$maxFixedArity = 2);

/**
 * Helper function for creating a class component. See `defcomponent`.
 */
helix.core.create_component = (function helix$core$create_component(spec,statics){
var render = spec.render;
var render_SINGLEQUOTE_ = (function (this$){
var G__32077 = this$;
var G__32078 = helix.core.extract_cljs_props(this$.props);
var G__32079 = this$.state;
return (render.cljs$core$IFn$_invoke$arity$3 ? render.cljs$core$IFn$_invoke$arity$3(G__32077,G__32078,G__32079) : render.call(null,G__32077,G__32078,G__32079));
});
helix.core.goog$module$goog$object.set(spec,"render",render_SINGLEQUOTE_);

return helix.impl.classes.createComponent(module$node_modules$react$index.Component,spec,statics);
});
/**
 * Like react/createRef, but the ref can be swapped, reset, and dereferenced
 *   like an atom.
 * 
 *   Note: `helix.core/create-ref` is mostly used for class components. Function
 *   components typically rely on `helix.hooks/use-ref` instead.
 */
helix.core.create_ref = (function helix$core$create_ref(var_args){
var G__32081 = arguments.length;
switch (G__32081) {
case 0:
return helix.core.create_ref.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return helix.core.create_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.core.create_ref.cljs$core$IFn$_invoke$arity$0 = (function (){
return helix.core.create_ref.cljs$core$IFn$_invoke$arity$1(null);
}));

(helix.core.create_ref.cljs$core$IFn$_invoke$arity$1 = (function (initial_value){
var ref = module$node_modules$react$index.createRef();
(ref.current = (function (){var x32082 = ({"current": initial_value});
(x32082.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(x32082.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.current;
}));

(x32082.cljs$core$IReset$ = cljs.core.PROTOCOL_SENTINEL);

(x32082.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var this$__$1 = this;
return (this$__$1.current = x);
}));

(x32082.cljs$core$ISwap$ = cljs.core.PROTOCOL_SENTINEL);

(x32082.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var this$__$1 = this;
return (this$__$1.current = (function (){var G__32083 = this$__$1.current;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32083) : f.call(null,G__32083));
})());
}));

(x32082.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var this$__$1 = this;
return (this$__$1.current = (function (){var G__32084 = this$__$1.current;
var G__32085 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32084,G__32085) : f.call(null,G__32084,G__32085));
})());
}));

(x32082.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var this$__$1 = this;
return (this$__$1.current = (function (){var G__32086 = this$__$1.current;
var G__32087 = a;
var G__32088 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__32086,G__32087,G__32088) : f.call(null,G__32086,G__32087,G__32088));
})());
}));

(x32082.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var this$__$1 = this;
return (this$__$1.current = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.current,a,b,xs));
}));

return x32082;
})());

return ref.current;
}));

(helix.core.create_ref.cljs$lang$maxFixedArity = 1);

/**
 * Registers a component with the React Fresh runtime.
 *   `type` is the component function, and `id` is the unique ID assigned to it
 *   (e.g. component name) for cache invalidation.
 */
helix.core.register_BANG_ = (function helix$core$register_BANG_(type,id){
if((typeof window !== 'undefined') && (typeof window.$$Register$$ !== 'undefined')){
return window.$$Register$$(type,id);
} else {
return null;
}
});
helix.core.signature_BANG_ = (function helix$core$signature_BANG_(){
var and__5043__auto__ = (typeof window !== 'undefined') && (typeof window.$$Register$$ !== 'undefined');
if(and__5043__auto__){
return window.$$Signature$$();
} else {
return and__5043__auto__;
}
});

//# sourceMappingURL=helix.core.js.map
