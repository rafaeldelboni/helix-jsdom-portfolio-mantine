goog.provide('dumdom.component');
/**
 * When this var is set to `true`, every existing component will re-render on the
 *   next call after a new component has been created, even if the input data has
 *   not changed. This can be useful in development - if you have any level of
 *   indirection in your rendering code (e.g. passing a component function as the
 *   "static arg" to another component, multi-methods, etc), you are not
 *   guaranteed to have all changed components re-render after a compile and hot
 *   swap. With this var set to `true`, changing any code that defines a dumdom
 *   component will cause all components to re-render.
 */
dumdom.component._STAR_render_eagerly_QMARK__STAR_ = false;
/**
 * When this var is set to `true`, an HTML comment block containing the
 *   component's name will be emitted for every named component. Useful
 *   during development to get an overview of which component is responsible
 *   for rendering a given fragment of the DOM.
 */
dumdom.component._STAR_render_comments_QMARK__STAR_ = false;
dumdom.component.eager_render_required_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
dumdom.component.should_component_update_QMARK_ = (function dumdom$component$should_component_update_QMARK_(component_state,data){
var or__5045__auto__ = (!(cljs.core.contains_QMARK_(component_state,new cljs.core.Keyword(null,"data","data",-232669377))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(component_state),data);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var and__5043__auto__ = dumdom.component._STAR_render_eagerly_QMARK__STAR_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(dumdom.component.eager_render_required_QMARK_);
} else {
return and__5043__auto__;
}
}
}
});
dumdom.component.setup_animation_hooks = (function dumdom$component$setup_animation_hooks(rendered,animation,p__42321){
var map__42322 = p__42321;
var map__42322__$1 = cljs.core.__destructure_map(map__42322);
var will_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42322__$1,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624));
var will_appear = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42322__$1,new cljs.core.Keyword(null,"will-appear","will-appear",579342096));
if(cljs.core.truth_(will_appear)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(animation,cljs.core.assoc,new cljs.core.Keyword(null,"will-appear","will-appear",579342096),will_appear);
} else {
}

var G__42323 = rendered;
var G__42323__$1 = (cljs.core.truth_(will_enter)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42323,new cljs.core.Keyword(null,"willEnter","willEnter",-70990441),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(animation,cljs.core.assoc,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),will_enter);
})):G__42323);
if(cljs.core.truth_(will_appear)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42323__$1,new cljs.core.Keyword(null,"willAppear","willAppear",-1052339861),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(animation,cljs.core.dissoc,new cljs.core.Keyword(null,"will-appear","will-appear",579342096));
}));
} else {
return G__42323__$1;
}
});
dumdom.component.setup_mount_hook = (function dumdom$component$setup_mount_hook(rendered,p__42325,data,args,animation){
var map__42326 = p__42325;
var map__42326__$1 = cljs.core.__destructure_map(map__42326);
var on_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42326__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var on_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42326__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
var will_appear = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42326__$1,new cljs.core.Keyword(null,"will-appear","will-appear",579342096));
var did_appear = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42326__$1,new cljs.core.Keyword(null,"did-appear","did-appear",2048737572));
var will_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42326__$1,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624));
var did_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42326__$1,new cljs.core.Keyword(null,"did-enter","did-enter",-1814731189));
var G__42327 = rendered;
if(cljs.core.truth_((function (){var or__5045__auto__ = on_mount;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = on_render;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = will_enter;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return will_appear;
}
}
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__42327,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hook","hook",750265408),new cljs.core.Keyword(null,"insert","insert",1286475395)], null),(function (insert_hook){
return (function (vnode){
if(cljs.core.truth_(insert_hook)){
(insert_hook.cljs$core$IFn$_invoke$arity$1 ? insert_hook.cljs$core$IFn$_invoke$arity$1(vnode) : insert_hook.call(null,vnode));
} else {
}

if(cljs.core.truth_(on_mount)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(on_mount,vnode.elm,data,args);
} else {
}

if(cljs.core.truth_(on_render)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$5(on_render,vnode.elm,data,null,args);
} else {
}

var map__42328 = cljs.core.deref(animation);
var map__42328__$1 = cljs.core.__destructure_map(map__42328);
var will_enter__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42328__$1,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624));
var will_appear__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42328__$1,new cljs.core.Keyword(null,"will-appear","will-appear",579342096));
var temp__5804__auto__ = (function (){var or__5045__auto__ = will_enter__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return will_appear__$1;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var callback = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(animation,cljs.core.assoc,new cljs.core.Keyword(null,"ready?","ready?",-105765697),false);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(callback,vnode.elm,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(animation,cljs.core.assoc,new cljs.core.Keyword(null,"ready?","ready?",-105765697),true);

var temp__5804__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(callback,will_enter__$1))?did_enter:did_appear);
if(cljs.core.truth_(temp__5804__auto____$1)){
var completion = temp__5804__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(completion,vnode.elm,data,args);
} else {
return null;
}
}),data,args);
} else {
return null;
}
});
}));
} else {
return G__42327;
}
});
dumdom.component.setup_update_hook = (function dumdom$component$setup_update_hook(rendered,p__42332,data,old_data,args){
var map__42335 = p__42332;
var map__42335__$1 = cljs.core.__destructure_map(map__42335);
var on_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42335__$1,new cljs.core.Keyword(null,"on-update","on-update",1680216496));
var on_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42335__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
var G__42337 = rendered;
if(cljs.core.truth_((function (){var or__5045__auto__ = on_update;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return on_render;
}
})())){
return cljs.core.assoc_in(G__42337,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hook","hook",750265408),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function dumdom$component$setup_update_hook_$_hook(old_vnode,vnode){
if(cljs.core.truth_(dumdom$component$setup_update_hook_$_hook.called)){
return null;
} else {
(dumdom$component$setup_update_hook_$_hook.called = true);

if(cljs.core.truth_(on_update)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$5(on_update,vnode.elm,data,old_data,args);
} else {
}

if(cljs.core.truth_(on_render)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(on_render,vnode.elm,data,old_data,args);
} else {
return null;
}
}
}));
} else {
return G__42337;
}
});
dumdom.component.setup_unmount_hook = (function dumdom$component$setup_unmount_hook(rendered,component,data,args,animation,on_destroy){
var G__42361 = rendered;
var G__42361__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__42361,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hook","hook",750265408),new cljs.core.Keyword(null,"destroy","destroy",-843660405)], null),(function (destroy_hook){
return (function (vnode){
var temp__5804__auto___42398 = new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(temp__5804__auto___42398)){
var on_unmount_42399 = temp__5804__auto___42398;
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(on_unmount_42399,vnode.elm,data,args);
} else {
}

if(cljs.core.truth_(destroy_hook)){
(destroy_hook.cljs$core$IFn$_invoke$arity$1 ? destroy_hook.cljs$core$IFn$_invoke$arity$1(vnode) : destroy_hook.call(null,vnode));
} else {
}

return (on_destroy.cljs$core$IFn$_invoke$arity$0 ? on_destroy.cljs$core$IFn$_invoke$arity$0() : on_destroy.call(null));
});
}))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517).cljs$core$IFn$_invoke$arity$1(component))){
return cljs.core.assoc_in(G__42361__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hook","hook",750265408),new cljs.core.Keyword(null,"remove","remove",-131428414)], null),(function (vnode,snabbdom_callback){
var callback = (function (){
var temp__5804__auto___42400 = new cljs.core.Keyword(null,"did-leave","did-leave",1577156642).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(temp__5804__auto___42400)){
var did_leave_42401 = temp__5804__auto___42400;
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(did_leave_42401,vnode.elm,data,args);
} else {
}

return (snabbdom_callback.cljs$core$IFn$_invoke$arity$0 ? snabbdom_callback.cljs$core$IFn$_invoke$arity$0() : snabbdom_callback.call(null));
});
if(cljs.core.truth_(new cljs.core.Keyword(null,"ready?","ready?",-105765697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(animation)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517).cljs$core$IFn$_invoke$arity$1(component),vnode.elm,callback,data,args);
} else {
return cljs.core.add_watch(animation,new cljs.core.Keyword(null,"leave","leave",1022579443),(function (k,r,o,n){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ready?","ready?",-105765697).cljs$core$IFn$_invoke$arity$1(n))){
cljs.core.remove_watch(animation,new cljs.core.Keyword(null,"leave","leave",1022579443));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517).cljs$core$IFn$_invoke$arity$1(component),vnode.elm,callback,data,args);
} else {
return null;
}
}));
}
}));
} else {
return G__42361__$1;
}
});
dumdom.component.resolve_key = (function dumdom$component$resolve_key(rendered,component_name,keyfn_key,kmap){
var k = dumdom.element.enumerate_key(kmap,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyfn_key),(function (){var G__42376 = new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376).cljs$core$IFn$_invoke$arity$1(rendered);
if((G__42376 == null)){
return null;
} else {
return cljs.core.first(G__42376);
}
})()], null))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rendered,new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376),k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",k)], 0));
});
/**
 * Returns a component function that uses the provided function for rendering. The
 *   resulting component will only call through to its rendering function when
 *   called with data that is different from the data that produced the currently
 *   rendered version of the component.
 * 
 *   The rendering function can be called with any number of arguments, but only
 *   the first one will influence rendering decisions. You should call the
 *   component with a single immutable value, followed by any number of other
 *   arguments, as desired. These additional constant arguments are suitable for
 *   passing messaging channels, configuration maps, and other utilities that are
 *   constant for the lifetime of the rendered element.
 * 
 *   The optional opts argument is a map with additional properties:
 * 
 *   :on-mount - A function invoked once, immediately after initial rendering. It
 *   is passed the rendered DOM node, and all arguments passed to the render
 *   function.
 * 
 *   :on-update - A function invoked immediately after an updated is flushed to the
 *   DOM, but not on the initial render. It is passed the underlying DOM node, the
 *   value, and any constant arguments passed to the render function.
 * 
 *   :on-render - A function invoked immediately after the DOM is updated, both on
 *   the initial render and subsequent updates. It is passed the underlying DOM
 *   node, the value, the old value, and any constant arguments passed to the
 *   render function.
 * 
 *   :on-unmount - A function invoked immediately before the component is unmounted
 *   from the DOM. It is passed the underlying DOM node, the most recent value and
 *   the most recent constant args passed to the render fn.
 * 
 *   :will-appear - A function invoked when this component is added to a mounting
 *   container component. Invoked at the same time as :on-mount. It is passed the
 *   underlying DOM node, a callback function, the most recent value and the most
 *   recent constant args passed to the render fn. The callback should be called to
 *   indicate that the element is done "appearing".
 * 
 *   :did-appear - A function invoked immediately after the callback passed
 *   to :will-appear is called. It is passed the underlying DOM node, the most
 *   recent value, and the most recent constant args passed to the render fn.
 * 
 *   :will-enter - A function invoked when this component is added to an already
 *   mounted container component. Invoked at the same time as :on.mount. It is
 *   passed the underlying DOM node, a callback function, the value and any
 *   constant args passed to the render fn. The callback function should be called
 *   to indicate that the element is done entering.
 * 
 *   :did-enter - A function invoked after the callback passed to :will-enter is
 *   called. It is passed the underlying DOM node, the value and any constant args
 *   passed to the render fn.
 * 
 *   :will-leave - A function invoked when this component is removed from its
 *   containing component. Is passed the underlying DOM node, a callback function,
 *   the most recent value and the most recent constant args passed to the render
 *   fn. The DOM node will not be removed until the callback is called.
 * 
 *   :did-leave - A function invoked after the callback passed to :will-leave is
 *   called (at the same time as :on-unmount). Is passed the underlying DOM node,
 *   the most recent value and the most recent constant args passed to the render
 *   fn.
 */
dumdom.component.component = (function dumdom$component$component(var_args){
var G__42378 = arguments.length;
switch (G__42378) {
case 1:
return dumdom.component.component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dumdom.component.component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dumdom.component.component.cljs$core$IFn$_invoke$arity$1 = (function (render){
return dumdom.component.component.cljs$core$IFn$_invoke$arity$2(render,cljs.core.PersistentArrayMap.EMPTY);
}));

(dumdom.component.component.cljs$core$IFn$_invoke$arity$2 = (function (render,opt){
if(cljs.core.truth_(dumdom.component._STAR_render_eagerly_QMARK__STAR_)){
cljs.core.reset_BANG_(dumdom.component.eager_render_required_QMARK_,true);
} else {
}

var instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var component_name = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.not_empty(render.name);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
}
}
})();
return (function() { 
var G__42403__delegate = function (data,args){
var comp_fn = (function (path,kmap){
var key = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(temp__5804__auto__)){
var keyfn = temp__5804__auto__;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(data) : keyfn.call(null,data));
} else {
return null;
}
})();
var lookup_key = dumdom.element.enumerate_key(kmap,key);
var fullpath = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,lookup_key);
var instance = (function (){var fexpr__42379 = cljs.core.deref(instances);
return (fexpr__42379.cljs$core$IFn$_invoke$arity$1 ? fexpr__42379.cljs$core$IFn$_invoke$arity$1(fullpath) : fexpr__42379.call(null,fullpath));
})();
var animation = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ready?","ready?",-105765697),true], null));
if(cljs.core.truth_(dumdom.component.should_component_update_QMARK_(instance,data))){
var rendered = (function (){var G__42380 = (function (){var temp__5804__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render,data,args);
if(cljs.core.truth_(temp__5804__auto__)){
var vdom = temp__5804__auto__;
var G__42382 = fullpath;
var G__42383 = cljs.core.PersistentArrayMap.EMPTY;
var fexpr__42381 = dumdom.element.inflate_hiccup(vdom);
return (fexpr__42381.cljs$core$IFn$_invoke$arity$2 ? fexpr__42381.cljs$core$IFn$_invoke$arity$2(G__42382,G__42383) : fexpr__42381.call(null,G__42382,G__42383));
} else {
return null;
}
})();
var G__42380__$1 = (((G__42380 == null))?null:dumdom.component.resolve_key(G__42380,component_name,key,kmap));
var G__42380__$2 = (((G__42380__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__42380__$1,new cljs.core.Keyword("dumdom","render-comments?","dumdom/render-comments?",877432722),dumdom.component._STAR_render_comments_QMARK__STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("dumdom","lookup-key","dumdom/lookup-key",234912017),lookup_key], 0)));
var G__42380__$3 = (((G__42380__$2 == null))?null:cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__42380__$2,new cljs.core.Keyword("dumdom","component-name","dumdom/component-name",19850734),(function (s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_name),(cljs.core.truth_(s)?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''):null)].join('');
})));
var G__42380__$4 = (((G__42380__$3 == null))?null:dumdom.component.setup_animation_hooks(G__42380__$3,animation,opt));
if((G__42380__$4 == null)){
return null;
} else {
return dumdom.component.setup_unmount_hook(G__42380__$4,opt,data,args,animation,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(instances,cljs.core.dissoc,fullpath);
}));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(instances,cljs.core.assoc,fullpath,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vdom","vdom",953162958),rendered,new cljs.core.Keyword(null,"data","data",-232669377),data], null));

var G__42384 = rendered;
var G__42384__$1 = (cljs.core.truth_(rendered)?dumdom.component.setup_mount_hook(G__42384,opt,data,args,animation):G__42384);
if(cljs.core.truth_((function (){var and__5043__auto__ = rendered;
if(cljs.core.truth_(and__5043__auto__)){
return instance;
} else {
return and__5043__auto__;
}
})())){
return dumdom.component.setup_update_hook(G__42384__$1,opt,data,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(instance),args);
} else {
return G__42384__$1;
}
} else {
return new cljs.core.Keyword(null,"vdom","vdom",953162958).cljs$core$IFn$_invoke$arity$1(instance);
}
});
(comp_fn.dumdom = true);

return comp_fn;
};
var G__42403 = function (data,var_args){
var args = null;
if (arguments.length > 1) {
var G__42404__i = 0, G__42404__a = new Array(arguments.length -  1);
while (G__42404__i < G__42404__a.length) {G__42404__a[G__42404__i] = arguments[G__42404__i + 1]; ++G__42404__i;}
  args = new cljs.core.IndexedSeq(G__42404__a,0,null);
} 
return G__42403__delegate.call(this,data,args);};
G__42403.cljs$lang$maxFixedArity = 1;
G__42403.cljs$lang$applyTo = (function (arglist__42405){
var data = cljs.core.first(arglist__42405);
var args = cljs.core.rest(arglist__42405);
return G__42403__delegate(data,args);
});
G__42403.cljs$core$IFn$_invoke$arity$variadic = G__42403__delegate;
return G__42403;
})()
;
}));

(dumdom.component.component.cljs$lang$maxFixedArity = 2);

dumdom.component.single_child_QMARK_ = (function dumdom$component$single_child_QMARK_(x){
return ((cljs.core.fn_QMARK_(x)) || (((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)))));
});
dumdom.component.TransitionGroup = (function dumdom$component$TransitionGroup(el_fn,opt,children){
var children__$1 = ((dumdom.component.single_child_QMARK_(children))?(new cljs.core.List(null,children,null,(1),null)):cljs.core.seq(children));
if(cljs.core.ifn_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(opt))){
var fexpr__42385 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(opt);
return (fexpr__42385.cljs$core$IFn$_invoke$arity$1 ? fexpr__42385.cljs$core$IFn$_invoke$arity$1(children__$1) : fexpr__42385.call(null,children__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(el_fn,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "span";
}
})(),opt,children__$1);
}
});
dumdom.component.complete_transition = (function dumdom$component$complete_transition(node,timeout,callback){
if(cljs.core.truth_(timeout)){
return setTimeout(callback,timeout);
} else {
var callback_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var f = (function (){
(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));

return node.removeEventListener("transitionend",cljs.core.deref(callback_fn));
});
cljs.core.reset_BANG_(callback_fn,f);

return node.addEventListener("transitionend",f);
}
});
dumdom.component.transition_classes = (function dumdom$component$transition_classes(transitionName,transition){
if(typeof transitionName === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[transitionName,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition)].join(''),[transitionName,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition),"-active"].join('')], null);
} else {
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(transition);
var k_active = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition),"Active"].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(transitionName) : k.call(null,transitionName)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(transitionName,k_active,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(transitionName) : k.call(null,transitionName))),"-active"].join(''))], null);
}
});
dumdom.component.animate = (function dumdom$component$animate(transition,p__42386){
var map__42387 = p__42386;
var map__42387__$1 = cljs.core.__destructure_map(map__42387);
var enabled_by_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42387__$1,new cljs.core.Keyword(null,"enabled-by-default?","enabled-by-default?",-973479851));
var timeout = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["transition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition),"Timeout"].join(''));
return (function (node,callback,p__42388){
var map__42389 = p__42388;
var map__42389__$1 = cljs.core.__destructure_map(map__42389);
var props = map__42389__$1;
var transitionName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42389__$1,new cljs.core.Keyword(null,"transitionName","transitionName",-654288740));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["transition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition)].join('')),enabled_by_default_QMARK_))){
var vec__42390 = dumdom.component.transition_classes(transitionName,transition.toLowerCase());
var init_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42390,(0),null);
var active_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42390,(1),null);
node.classList.add(init_class);

dumdom.component.complete_transition(node,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,timeout),callback);

return setTimeout((function (){
return node.classList.add(active_class);
}),(0));
} else {
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
}
});
});
dumdom.component.cleanup_animation = (function dumdom$component$cleanup_animation(transition){
return (function (node,p__42393){
var map__42394 = p__42393;
var map__42394__$1 = cljs.core.__destructure_map(map__42394);
var transitionName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42394__$1,new cljs.core.Keyword(null,"transitionName","transitionName",-654288740));
node.classList.remove([cljs.core.str.cljs$core$IFn$_invoke$arity$1(transitionName),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition)].join(''));

return node.classList.remove([cljs.core.str.cljs$core$IFn$_invoke$arity$1(transitionName),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition),"-active"].join(''));
});
});
dumdom.component.TransitioningElement = dumdom.component.component.cljs$core$IFn$_invoke$arity$2((function (p__42395){
var map__42396 = p__42395;
var map__42396__$1 = cljs.core.__destructure_map(map__42396);
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42396__$1,new cljs.core.Keyword(null,"child","child",623967545));
return child;
}),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"will-appear","will-appear",579342096),dumdom.component.animate("Appear",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled-by-default?","enabled-by-default?",-973479851),false], null)),new cljs.core.Keyword(null,"did-appear","did-appear",2048737572),dumdom.component.cleanup_animation("appear"),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),dumdom.component.animate("Enter",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled-by-default?","enabled-by-default?",-973479851),true], null)),new cljs.core.Keyword(null,"did-enter","did-enter",-1814731189),dumdom.component.cleanup_animation("enter"),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),dumdom.component.animate("Leave",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled-by-default?","enabled-by-default?",-973479851),true], null))], null));
dumdom.component.CSSTransitionGroup = (function dumdom$component$CSSTransitionGroup(el_fn,opt,children){
var children__$1 = ((dumdom.component.single_child_QMARK_(children))?(new cljs.core.List(null,children,null,(1),null)):cljs.core.seq(children));
return dumdom.component.TransitionGroup(el_fn,opt,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42397_SHARP_){
return dumdom.component.TransitioningElement(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opt,new cljs.core.Keyword(null,"child","child",623967545),p1__42397_SHARP_));
}),children__$1));
});
dumdom.component.component_QMARK_ = (function dumdom$component$component_QMARK_(x){
var and__5043__auto__ = x;
if(cljs.core.truth_(and__5043__auto__)){
return x.dumdom;
} else {
return and__5043__auto__;
}
});

//# sourceMappingURL=dumdom.component.js.map
