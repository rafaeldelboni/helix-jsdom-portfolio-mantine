goog.provide('dumdom.core');
goog.scope(function(){
  dumdom.core.goog$module$dumdom$snabbdom = goog.module.get('dumdom.snabbdom');
});
/**
 * A mapping from root DOM nodes to currently rendered virtual DOM trees. Used to
 *   reconcile (render component dom-node) to (patch old-vdom new-vdom)
 */
dumdom.core.current_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * A counter used to assign unique ids to root elements
 */
dumdom.core.element_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
/**
 * The snabbdom patch function used by render
 */
dumdom.core.patch = dumdom.core.goog$module$dumdom$snabbdom.init([dumdom.core.goog$module$dumdom$snabbdom.eventListenersModule,dumdom.core.goog$module$dumdom$snabbdom.attributesModule,dumdom.core.goog$module$dumdom$snabbdom.propsModule,dumdom.core.goog$module$dumdom$snabbdom.styleModule,dumdom.core.goog$module$dumdom$snabbdom.datasetModule]);
dumdom.core.set_root_id = (function dumdom$core$set_root_id(element){
return (element.dataset.dumdomId = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dumdom.core.element_id,cljs.core.inc));
});
dumdom.core.root_node = (function dumdom$core$root_node(element){
var G__43580 = element.dataset.dumdomId;
var fexpr__43579 = cljs.core.deref(dumdom.core.current_nodes);
return (fexpr__43579.cljs$core$IFn$_invoke$arity$1 ? fexpr__43579.cljs$core$IFn$_invoke$arity$1(G__43580) : fexpr__43579.call(null,G__43580));
});
dumdom.core.register_vnode = (function dumdom$core$register_vnode(element_id,vnode){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dumdom.core.current_nodes,cljs.core.assoc,element_id,vnode);
});
dumdom.core.unregister_vnode = (function dumdom$core$unregister_vnode(element_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dumdom.core.current_nodes,cljs.core.dissoc,element_id);
});
/**
 * Snabbdom will replace the element provided as the original target for patch.
 *   When rendering into a new DOM node, we therefore create an intermediate in it
 *   and use that as Snabbdom's root, to avoid destroying the provided root node.
 */
dumdom.core.init_node_BANG_ = (function dumdom$core$init_node_BANG_(element){
(element.innerHTML = "<div></div>");

dumdom.core.set_root_id(element);

return element.firstElementChild;
});
dumdom.core.purge_BANG_ = (function dumdom$core$purge_BANG_(){
return cljs.core.reset_BANG_(dumdom.core.current_nodes,cljs.core.PersistentArrayMap.EMPTY);
});
dumdom.core.create_vdom = (function dumdom$core$create_vdom(component,element_id,p__43581){
var map__43582 = p__43581;
var map__43582__$1 = cljs.core.__destructure_map(map__43582);
var handle_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43582__$1,new cljs.core.Keyword(null,"handle-event","handle-event",2098778308));
var temp__5804__auto__ = dumdom.element.inflate_hiccup(component);
if(cljs.core.truth_(temp__5804__auto__)){
var component__$1 = temp__5804__auto__;
var _STAR_handle_event_STAR__orig_val__43583 = dumdom.element._STAR_handle_event_STAR_;
var _STAR_handle_event_STAR__temp_val__43584 = (function (){var or__5045__auto__ = handle_event;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return dumdom.element._STAR_handle_event_STAR_;
}
})();
(dumdom.element._STAR_handle_event_STAR_ = _STAR_handle_event_STAR__temp_val__43584);

try{var G__43585 = (function (){var G__43586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element_id], null);
var G__43587 = cljs.core.PersistentArrayMap.EMPTY;
return (component__$1.cljs$core$IFn$_invoke$arity$2 ? component__$1.cljs$core$IFn$_invoke$arity$2(G__43586,G__43587) : component__$1.call(null,G__43586,G__43587));
})();
if((G__43585 == null)){
return null;
} else {
return cljs.core.clj__GT_js(G__43585);
}
}finally {(dumdom.element._STAR_handle_event_STAR_ = _STAR_handle_event_STAR__orig_val__43583);
}} else {
return null;
}
});
dumdom.core.set_event_handler_BANG_ = (function dumdom$core$set_event_handler_BANG_(f){
if(cljs.core.truth_((function (){var and__5043__auto__ = f;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.ifn_QMARK_(f)));
} else {
return and__5043__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Event handler must be a function",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f], null));
} else {
}

return (dumdom.element._STAR_handle_event_STAR_ = f);
});
/**
 * Dispatch
 */
dumdom.core.dispatch_event_data = (function dumdom$core$dispatch_event_data(e,data){
if(cljs.core.truth_(dumdom.element._STAR_handle_event_STAR_)){
return dumdom.element._STAR_handle_event_STAR_.call(null,e,data);
} else {
throw (new Error("Cannot dispatch custom event data without a global event handler. Call dumdom.core/set-event-handler!"));
}
});
/**
 * Render the virtual DOM node created by the component into the specified DOM
 *   element, and mount it for fast future re-renders.
 */
dumdom.core.render = (function dumdom$core$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43605 = arguments.length;
var i__5770__auto___43606 = (0);
while(true){
if((i__5770__auto___43606 < len__5769__auto___43605)){
args__5775__auto__.push((arguments[i__5770__auto___43606]));

var G__43607 = (i__5770__auto___43606 + (1));
i__5770__auto___43606 = G__43607;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return dumdom.core.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(dumdom.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (component,element,p__43593){
var vec__43594 = p__43593;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43594,(0),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"handle-event","handle-event",2098778308).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.ifn_QMARK_(new cljs.core.Keyword(null,"handle-event","handle-event",2098778308).cljs$core$IFn$_invoke$arity$1(opt))));
} else {
return and__5043__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Called dumdom.core/render with a handle-event that is not a function",opt);
} else {
}

var current_node = (function (){var or__5045__auto__ = dumdom.core.root_node(element);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return dumdom.core.init_node_BANG_(element);
}
})();
var element_id = element.dataset.dumdomId;
var temp__5802__auto___43608 = dumdom.core.create_vdom(component,element_id,opt);
if(cljs.core.truth_(temp__5802__auto___43608)){
var vnode_43609 = temp__5802__auto___43608;
if(cljs.core.truth_(vnode_43609.key)){
} else {
(vnode_43609.key = "root-node");
}

(dumdom.core.patch.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.patch.cljs$core$IFn$_invoke$arity$2(current_node,vnode_43609) : dumdom.core.patch.call(null,current_node,vnode_43609));

dumdom.core.register_vnode(element_id,vnode_43609);
} else {
(element.innerHTML = "");

dumdom.core.unregister_vnode(element_id);
}

if(cljs.core.truth_(dumdom.component._STAR_render_eagerly_QMARK__STAR_)){
return cljs.core.reset_BANG_(dumdom.component.eager_render_required_QMARK_,false);
} else {
return null;
}
}));

(dumdom.core.render.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dumdom.core.render.cljs$lang$applyTo = (function (seq43590){
var G__43591 = cljs.core.first(seq43590);
var seq43590__$1 = cljs.core.next(seq43590);
var G__43592 = cljs.core.first(seq43590__$1);
var seq43590__$2 = cljs.core.next(seq43590__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43591,G__43592,seq43590__$2);
}));

/**
 * Like render, but without mounting the element for future updates. This should
 *   only be used when you don't expect to re-render the component into the same
 *   element. Subsequent calls to render into the same element will always cause a
 *   full rebuild of the DOM. This function does not acumulate state.
 */
dumdom.core.render_once = (function dumdom$core$render_once(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43610 = arguments.length;
var i__5770__auto___43611 = (0);
while(true){
if((i__5770__auto___43611 < len__5769__auto___43610)){
args__5775__auto__.push((arguments[i__5770__auto___43611]));

var G__43612 = (i__5770__auto___43611 + (1));
i__5770__auto___43611 = G__43612;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return dumdom.core.render_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(dumdom.core.render_once.cljs$core$IFn$_invoke$arity$variadic = (function (component,element,p__43601){
var vec__43602 = p__43601;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43602,(0),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"handle-event","handle-event",2098778308).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.ifn_QMARK_(new cljs.core.Keyword(null,"handle-event","handle-event",2098778308).cljs$core$IFn$_invoke$arity$1(opt))));
} else {
return and__5043__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Called dumdom.core/render-once with a handle-event that is not a function",opt);
} else {
}

var current_node = dumdom.core.init_node_BANG_(element);
var element_id = element.dataset.dumdomId;
var temp__5804__auto___43613 = dumdom.core.create_vdom(component,element_id,opt);
if(cljs.core.truth_(temp__5804__auto___43613)){
var vnode_43614 = temp__5804__auto___43613;
(dumdom.core.patch.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.patch.cljs$core$IFn$_invoke$arity$2(current_node,vnode_43614) : dumdom.core.patch.call(null,current_node,vnode_43614));
} else {
}

if(cljs.core.truth_(dumdom.component._STAR_render_eagerly_QMARK__STAR_)){
return cljs.core.reset_BANG_(dumdom.component.eager_render_required_QMARK_,false);
} else {
return null;
}
}));

(dumdom.core.render_once.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dumdom.core.render_once.cljs$lang$applyTo = (function (seq43598){
var G__43599 = cljs.core.first(seq43598);
var seq43598__$1 = cljs.core.next(seq43598);
var G__43600 = cljs.core.first(seq43598__$1);
var seq43598__$2 = cljs.core.next(seq43598__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43599,G__43600,seq43598__$2);
}));

/**
 * Unmount an element previously mounted by dumdom.core/render
 */
dumdom.core.unmount = (function dumdom$core$unmount(element){
return dumdom.core.unregister_vnode(element.dataset.dumdomId);
});
dumdom.core.component = dumdom.component.component;
dumdom.core.component_QMARK_ = dumdom.component.component_QMARK_;
dumdom.core.render_string = dumdom.string.render;
dumdom.core.TransitionGroup = (function dumdom$core$TransitionGroup(opt,children){
return dumdom.component.TransitionGroup(dumdom.dom.el,opt,children);
});
dumdom.core.CSSTransitionGroup = (function dumdom$core$CSSTransitionGroup(opt,children){
return dumdom.component.CSSTransitionGroup(dumdom.dom.el,opt,children);
});

//# sourceMappingURL=dumdom.core.js.map
