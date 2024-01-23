goog.provide('portfolio.ui.components.elastic_container');
portfolio.ui.components.elastic_container.clean_up_after_transition = (function portfolio$ui$components$elastic_container$clean_up_after_transition(node,callback,ms){
return setTimeout((function (_){
(node.style.overflow = "auto");

(node.style.height = "auto");

node.setAttribute("data-ec-anim","done");

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
}),ms);
});
portfolio.ui.components.elastic_container.enter = (function portfolio$ui$components$elastic_container$enter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44819 = arguments.length;
var i__5770__auto___44820 = (0);
while(true){
if((i__5770__auto___44820 < len__5769__auto___44819)){
args__5775__auto__.push((arguments[i__5770__auto___44820]));

var G__44821 = (i__5770__auto___44820 + (1));
i__5770__auto___44820 = G__44821;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return portfolio.ui.components.elastic_container.enter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(portfolio.ui.components.elastic_container.enter.cljs$core$IFn$_invoke$arity$variadic = (function (p__44810){
var vec__44811 = p__44810;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44811,(0),null);
return (function (node,callback,val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("animating",node.getAttribute("data-ec-anim"))){
node.setAttribute("data-ec-anim","cancelled");

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
node.setAttribute("data-ec-anim","animating");

(node.style.overflow = "hidden");

var target = node.getBoundingClientRect().height;
portfolio.ui.components.elastic_container.clean_up_after_transition(node,callback,(250));

(node.style.height = (0));

(node.style.transition = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "height 0.25s ease-in";
}
})());

return window.requestAnimationFrame((function (){
return (node.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"px"].join(''));
}));
}
});
}));

(portfolio.ui.components.elastic_container.enter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(portfolio.ui.components.elastic_container.enter.cljs$lang$applyTo = (function (seq44809){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44809));
}));

portfolio.ui.components.elastic_container.leave = (function portfolio$ui$components$elastic_container$leave(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44822 = arguments.length;
var i__5770__auto___44823 = (0);
while(true){
if((i__5770__auto___44823 < len__5769__auto___44822)){
args__5775__auto__.push((arguments[i__5770__auto___44823]));

var G__44824 = (i__5770__auto___44823 + (1));
i__5770__auto___44823 = G__44824;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return portfolio.ui.components.elastic_container.leave.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(portfolio.ui.components.elastic_container.leave.cljs$core$IFn$_invoke$arity$variadic = (function (p__44815){
var vec__44816 = p__44815;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44816,(0),null);
return (function (node,callback){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("animating",node.getAttribute("data-ec-anim"))){
node.setAttribute("data-ec-anim","cancelled");

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
(node.style.transition = "none");

(node.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.getBoundingClientRect().height),"px"].join(''));

(node.style.overflow = "hidden");

portfolio.ui.components.elastic_container.clean_up_after_transition(node,callback,(150));

(node.style.transition = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "height 0.15s ease-out";
}
})());

return window.requestAnimationFrame((function (){
return (node.style.height = (0));
}));
}
});
}));

(portfolio.ui.components.elastic_container.leave.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(portfolio.ui.components.elastic_container.leave.cljs$lang$applyTo = (function (seq44814){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44814));
}));


//# sourceMappingURL=portfolio.ui.components.elastic_container.js.map
