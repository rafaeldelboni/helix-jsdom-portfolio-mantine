goog.provide('dumdom.dom');
/**
 * Creates a virtual DOM element component of the specified type with attributes
 *   and optional children. Returns a function that renders the virtual DOM. This
 *   function expects a vector path and a key that addresses the component.
 */
dumdom.dom.el = (function dumdom$dom$el(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42808 = arguments.length;
var i__5770__auto___42810 = (0);
while(true){
if((i__5770__auto___42810 < len__5769__auto___42808)){
args__5775__auto__.push((arguments[i__5770__auto___42810]));

var G__42811 = (i__5770__auto___42810 + (1));
i__5770__auto___42810 = G__42811;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return dumdom.dom.el.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(dumdom.dom.el.cljs$core$IFn$_invoke$arity$variadic = (function (type,attrs,children){
var el_fn = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(dumdom.element.create,type,attrs,dumdom.element.flatten_seqs(children));
(el_fn.dumdom = true);

return el_fn;
}));

(dumdom.dom.el.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dumdom.dom.el.cljs$lang$applyTo = (function (seq42423){
var G__42424 = cljs.core.first(seq42423);
var seq42423__$1 = cljs.core.next(seq42423);
var G__42425 = cljs.core.first(seq42423__$1);
var seq42423__$2 = cljs.core.next(seq42423__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42424,G__42425,seq42423__$2);
}));

dumdom.dom.a = (function dumdom$dom$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42815 = arguments.length;
var i__5770__auto___42816 = (0);
while(true){
if((i__5770__auto___42816 < len__5769__auto___42815)){
args__5775__auto__.push((arguments[i__5770__auto___42816]));

var G__42817 = (i__5770__auto___42816 + (1));
i__5770__auto___42816 = G__42817;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"a",args__42416__auto__);
}));

(dumdom.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.a.cljs$lang$applyTo = (function (seq42426){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42426));
}));


dumdom.dom.abbr = (function dumdom$dom$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42818 = arguments.length;
var i__5770__auto___42819 = (0);
while(true){
if((i__5770__auto___42819 < len__5769__auto___42818)){
args__5775__auto__.push((arguments[i__5770__auto___42819]));

var G__42821 = (i__5770__auto___42819 + (1));
i__5770__auto___42819 = G__42821;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"abbr",args__42416__auto__);
}));

(dumdom.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.abbr.cljs$lang$applyTo = (function (seq42427){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42427));
}));


dumdom.dom.address = (function dumdom$dom$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42825 = arguments.length;
var i__5770__auto___42826 = (0);
while(true){
if((i__5770__auto___42826 < len__5769__auto___42825)){
args__5775__auto__.push((arguments[i__5770__auto___42826]));

var G__42827 = (i__5770__auto___42826 + (1));
i__5770__auto___42826 = G__42827;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"address",args__42416__auto__);
}));

(dumdom.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.address.cljs$lang$applyTo = (function (seq42428){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42428));
}));


dumdom.dom.area = (function dumdom$dom$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42830 = arguments.length;
var i__5770__auto___42831 = (0);
while(true){
if((i__5770__auto___42831 < len__5769__auto___42830)){
args__5775__auto__.push((arguments[i__5770__auto___42831]));

var G__42834 = (i__5770__auto___42831 + (1));
i__5770__auto___42831 = G__42834;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"area",args__42416__auto__);
}));

(dumdom.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.area.cljs$lang$applyTo = (function (seq42429){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42429));
}));


dumdom.dom.article = (function dumdom$dom$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42836 = arguments.length;
var i__5770__auto___42837 = (0);
while(true){
if((i__5770__auto___42837 < len__5769__auto___42836)){
args__5775__auto__.push((arguments[i__5770__auto___42837]));

var G__42838 = (i__5770__auto___42837 + (1));
i__5770__auto___42837 = G__42838;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"article",args__42416__auto__);
}));

(dumdom.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.article.cljs$lang$applyTo = (function (seq42430){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42430));
}));


dumdom.dom.aside = (function dumdom$dom$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42843 = arguments.length;
var i__5770__auto___42844 = (0);
while(true){
if((i__5770__auto___42844 < len__5769__auto___42843)){
args__5775__auto__.push((arguments[i__5770__auto___42844]));

var G__42845 = (i__5770__auto___42844 + (1));
i__5770__auto___42844 = G__42845;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"aside",args__42416__auto__);
}));

(dumdom.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.aside.cljs$lang$applyTo = (function (seq42431){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42431));
}));


dumdom.dom.audio = (function dumdom$dom$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42849 = arguments.length;
var i__5770__auto___42850 = (0);
while(true){
if((i__5770__auto___42850 < len__5769__auto___42849)){
args__5775__auto__.push((arguments[i__5770__auto___42850]));

var G__42851 = (i__5770__auto___42850 + (1));
i__5770__auto___42850 = G__42851;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"audio",args__42416__auto__);
}));

(dumdom.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.audio.cljs$lang$applyTo = (function (seq42432){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42432));
}));


dumdom.dom.b = (function dumdom$dom$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42859 = arguments.length;
var i__5770__auto___42860 = (0);
while(true){
if((i__5770__auto___42860 < len__5769__auto___42859)){
args__5775__auto__.push((arguments[i__5770__auto___42860]));

var G__42861 = (i__5770__auto___42860 + (1));
i__5770__auto___42860 = G__42861;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"b",args__42416__auto__);
}));

(dumdom.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.b.cljs$lang$applyTo = (function (seq42433){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42433));
}));


dumdom.dom.base = (function dumdom$dom$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42862 = arguments.length;
var i__5770__auto___42863 = (0);
while(true){
if((i__5770__auto___42863 < len__5769__auto___42862)){
args__5775__auto__.push((arguments[i__5770__auto___42863]));

var G__42864 = (i__5770__auto___42863 + (1));
i__5770__auto___42863 = G__42864;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"base",args__42416__auto__);
}));

(dumdom.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.base.cljs$lang$applyTo = (function (seq42434){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42434));
}));


dumdom.dom.bdi = (function dumdom$dom$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42869 = arguments.length;
var i__5770__auto___42870 = (0);
while(true){
if((i__5770__auto___42870 < len__5769__auto___42869)){
args__5775__auto__.push((arguments[i__5770__auto___42870]));

var G__42871 = (i__5770__auto___42870 + (1));
i__5770__auto___42870 = G__42871;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"bdi",args__42416__auto__);
}));

(dumdom.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.bdi.cljs$lang$applyTo = (function (seq42435){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42435));
}));


dumdom.dom.bdo = (function dumdom$dom$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42873 = arguments.length;
var i__5770__auto___42874 = (0);
while(true){
if((i__5770__auto___42874 < len__5769__auto___42873)){
args__5775__auto__.push((arguments[i__5770__auto___42874]));

var G__42875 = (i__5770__auto___42874 + (1));
i__5770__auto___42874 = G__42875;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"bdo",args__42416__auto__);
}));

(dumdom.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.bdo.cljs$lang$applyTo = (function (seq42436){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42436));
}));


dumdom.dom.big = (function dumdom$dom$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42877 = arguments.length;
var i__5770__auto___42878 = (0);
while(true){
if((i__5770__auto___42878 < len__5769__auto___42877)){
args__5775__auto__.push((arguments[i__5770__auto___42878]));

var G__42879 = (i__5770__auto___42878 + (1));
i__5770__auto___42878 = G__42879;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"big",args__42416__auto__);
}));

(dumdom.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.big.cljs$lang$applyTo = (function (seq42437){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42437));
}));


dumdom.dom.blockquote = (function dumdom$dom$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42880 = arguments.length;
var i__5770__auto___42881 = (0);
while(true){
if((i__5770__auto___42881 < len__5769__auto___42880)){
args__5775__auto__.push((arguments[i__5770__auto___42881]));

var G__42882 = (i__5770__auto___42881 + (1));
i__5770__auto___42881 = G__42882;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"blockquote",args__42416__auto__);
}));

(dumdom.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.blockquote.cljs$lang$applyTo = (function (seq42438){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42438));
}));


dumdom.dom.body = (function dumdom$dom$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42884 = arguments.length;
var i__5770__auto___42885 = (0);
while(true){
if((i__5770__auto___42885 < len__5769__auto___42884)){
args__5775__auto__.push((arguments[i__5770__auto___42885]));

var G__42886 = (i__5770__auto___42885 + (1));
i__5770__auto___42885 = G__42886;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"body",args__42416__auto__);
}));

(dumdom.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.body.cljs$lang$applyTo = (function (seq42439){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42439));
}));


dumdom.dom.br = (function dumdom$dom$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42888 = arguments.length;
var i__5770__auto___42889 = (0);
while(true){
if((i__5770__auto___42889 < len__5769__auto___42888)){
args__5775__auto__.push((arguments[i__5770__auto___42889]));

var G__42891 = (i__5770__auto___42889 + (1));
i__5770__auto___42889 = G__42891;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"br",args__42416__auto__);
}));

(dumdom.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.br.cljs$lang$applyTo = (function (seq42440){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42440));
}));


dumdom.dom.button = (function dumdom$dom$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42892 = arguments.length;
var i__5770__auto___42893 = (0);
while(true){
if((i__5770__auto___42893 < len__5769__auto___42892)){
args__5775__auto__.push((arguments[i__5770__auto___42893]));

var G__42894 = (i__5770__auto___42893 + (1));
i__5770__auto___42893 = G__42894;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"button",args__42416__auto__);
}));

(dumdom.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.button.cljs$lang$applyTo = (function (seq42441){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42441));
}));


dumdom.dom.canvas = (function dumdom$dom$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42895 = arguments.length;
var i__5770__auto___42898 = (0);
while(true){
if((i__5770__auto___42898 < len__5769__auto___42895)){
args__5775__auto__.push((arguments[i__5770__auto___42898]));

var G__42899 = (i__5770__auto___42898 + (1));
i__5770__auto___42898 = G__42899;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"canvas",args__42416__auto__);
}));

(dumdom.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.canvas.cljs$lang$applyTo = (function (seq42442){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42442));
}));


dumdom.dom.caption = (function dumdom$dom$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42904 = arguments.length;
var i__5770__auto___42905 = (0);
while(true){
if((i__5770__auto___42905 < len__5769__auto___42904)){
args__5775__auto__.push((arguments[i__5770__auto___42905]));

var G__42906 = (i__5770__auto___42905 + (1));
i__5770__auto___42905 = G__42906;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"caption",args__42416__auto__);
}));

(dumdom.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.caption.cljs$lang$applyTo = (function (seq42443){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42443));
}));


dumdom.dom.cite = (function dumdom$dom$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42907 = arguments.length;
var i__5770__auto___42908 = (0);
while(true){
if((i__5770__auto___42908 < len__5769__auto___42907)){
args__5775__auto__.push((arguments[i__5770__auto___42908]));

var G__42909 = (i__5770__auto___42908 + (1));
i__5770__auto___42908 = G__42909;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"cite",args__42416__auto__);
}));

(dumdom.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.cite.cljs$lang$applyTo = (function (seq42444){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42444));
}));


dumdom.dom.code = (function dumdom$dom$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42910 = arguments.length;
var i__5770__auto___42911 = (0);
while(true){
if((i__5770__auto___42911 < len__5769__auto___42910)){
args__5775__auto__.push((arguments[i__5770__auto___42911]));

var G__42914 = (i__5770__auto___42911 + (1));
i__5770__auto___42911 = G__42914;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"code",args__42416__auto__);
}));

(dumdom.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.code.cljs$lang$applyTo = (function (seq42445){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42445));
}));


dumdom.dom.col = (function dumdom$dom$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42918 = arguments.length;
var i__5770__auto___42919 = (0);
while(true){
if((i__5770__auto___42919 < len__5769__auto___42918)){
args__5775__auto__.push((arguments[i__5770__auto___42919]));

var G__42920 = (i__5770__auto___42919 + (1));
i__5770__auto___42919 = G__42920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"col",args__42416__auto__);
}));

(dumdom.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.col.cljs$lang$applyTo = (function (seq42446){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42446));
}));


dumdom.dom.colgroup = (function dumdom$dom$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42922 = arguments.length;
var i__5770__auto___42923 = (0);
while(true){
if((i__5770__auto___42923 < len__5769__auto___42922)){
args__5775__auto__.push((arguments[i__5770__auto___42923]));

var G__42924 = (i__5770__auto___42923 + (1));
i__5770__auto___42923 = G__42924;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"colgroup",args__42416__auto__);
}));

(dumdom.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.colgroup.cljs$lang$applyTo = (function (seq42447){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42447));
}));


dumdom.dom.data = (function dumdom$dom$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42925 = arguments.length;
var i__5770__auto___42926 = (0);
while(true){
if((i__5770__auto___42926 < len__5769__auto___42925)){
args__5775__auto__.push((arguments[i__5770__auto___42926]));

var G__42927 = (i__5770__auto___42926 + (1));
i__5770__auto___42926 = G__42927;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"data",args__42416__auto__);
}));

(dumdom.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.data.cljs$lang$applyTo = (function (seq42448){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42448));
}));


dumdom.dom.datalist = (function dumdom$dom$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42928 = arguments.length;
var i__5770__auto___42929 = (0);
while(true){
if((i__5770__auto___42929 < len__5769__auto___42928)){
args__5775__auto__.push((arguments[i__5770__auto___42929]));

var G__42932 = (i__5770__auto___42929 + (1));
i__5770__auto___42929 = G__42932;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"datalist",args__42416__auto__);
}));

(dumdom.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.datalist.cljs$lang$applyTo = (function (seq42449){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42449));
}));


dumdom.dom.dd = (function dumdom$dom$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42937 = arguments.length;
var i__5770__auto___42938 = (0);
while(true){
if((i__5770__auto___42938 < len__5769__auto___42937)){
args__5775__auto__.push((arguments[i__5770__auto___42938]));

var G__42939 = (i__5770__auto___42938 + (1));
i__5770__auto___42938 = G__42939;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"dd",args__42416__auto__);
}));

(dumdom.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dd.cljs$lang$applyTo = (function (seq42450){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42450));
}));


dumdom.dom.del = (function dumdom$dom$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42940 = arguments.length;
var i__5770__auto___42941 = (0);
while(true){
if((i__5770__auto___42941 < len__5769__auto___42940)){
args__5775__auto__.push((arguments[i__5770__auto___42941]));

var G__42942 = (i__5770__auto___42941 + (1));
i__5770__auto___42941 = G__42942;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"del",args__42416__auto__);
}));

(dumdom.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.del.cljs$lang$applyTo = (function (seq42451){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42451));
}));


dumdom.dom.details = (function dumdom$dom$details(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42943 = arguments.length;
var i__5770__auto___42944 = (0);
while(true){
if((i__5770__auto___42944 < len__5769__auto___42943)){
args__5775__auto__.push((arguments[i__5770__auto___42944]));

var G__42945 = (i__5770__auto___42944 + (1));
i__5770__auto___42944 = G__42945;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"details",args__42416__auto__);
}));

(dumdom.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.details.cljs$lang$applyTo = (function (seq42452){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42452));
}));


dumdom.dom.dfn = (function dumdom$dom$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42947 = arguments.length;
var i__5770__auto___42948 = (0);
while(true){
if((i__5770__auto___42948 < len__5769__auto___42947)){
args__5775__auto__.push((arguments[i__5770__auto___42948]));

var G__42950 = (i__5770__auto___42948 + (1));
i__5770__auto___42948 = G__42950;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"dfn",args__42416__auto__);
}));

(dumdom.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dfn.cljs$lang$applyTo = (function (seq42453){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42453));
}));


dumdom.dom.div = (function dumdom$dom$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42951 = arguments.length;
var i__5770__auto___42952 = (0);
while(true){
if((i__5770__auto___42952 < len__5769__auto___42951)){
args__5775__auto__.push((arguments[i__5770__auto___42952]));

var G__42953 = (i__5770__auto___42952 + (1));
i__5770__auto___42952 = G__42953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"div",args__42416__auto__);
}));

(dumdom.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.div.cljs$lang$applyTo = (function (seq42454){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42454));
}));


dumdom.dom.dl = (function dumdom$dom$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42956 = arguments.length;
var i__5770__auto___42957 = (0);
while(true){
if((i__5770__auto___42957 < len__5769__auto___42956)){
args__5775__auto__.push((arguments[i__5770__auto___42957]));

var G__42959 = (i__5770__auto___42957 + (1));
i__5770__auto___42957 = G__42959;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"dl",args__42416__auto__);
}));

(dumdom.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dl.cljs$lang$applyTo = (function (seq42455){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42455));
}));


dumdom.dom.dt = (function dumdom$dom$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42964 = arguments.length;
var i__5770__auto___42966 = (0);
while(true){
if((i__5770__auto___42966 < len__5769__auto___42964)){
args__5775__auto__.push((arguments[i__5770__auto___42966]));

var G__42968 = (i__5770__auto___42966 + (1));
i__5770__auto___42966 = G__42968;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"dt",args__42416__auto__);
}));

(dumdom.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dt.cljs$lang$applyTo = (function (seq42456){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42456));
}));


dumdom.dom.em = (function dumdom$dom$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42972 = arguments.length;
var i__5770__auto___42973 = (0);
while(true){
if((i__5770__auto___42973 < len__5769__auto___42972)){
args__5775__auto__.push((arguments[i__5770__auto___42973]));

var G__42974 = (i__5770__auto___42973 + (1));
i__5770__auto___42973 = G__42974;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"em",args__42416__auto__);
}));

(dumdom.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.em.cljs$lang$applyTo = (function (seq42457){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42457));
}));


dumdom.dom.embed = (function dumdom$dom$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42975 = arguments.length;
var i__5770__auto___42976 = (0);
while(true){
if((i__5770__auto___42976 < len__5769__auto___42975)){
args__5775__auto__.push((arguments[i__5770__auto___42976]));

var G__42977 = (i__5770__auto___42976 + (1));
i__5770__auto___42976 = G__42977;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"embed",args__42416__auto__);
}));

(dumdom.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.embed.cljs$lang$applyTo = (function (seq42458){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42458));
}));


dumdom.dom.fieldset = (function dumdom$dom$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42978 = arguments.length;
var i__5770__auto___42979 = (0);
while(true){
if((i__5770__auto___42979 < len__5769__auto___42978)){
args__5775__auto__.push((arguments[i__5770__auto___42979]));

var G__42980 = (i__5770__auto___42979 + (1));
i__5770__auto___42979 = G__42980;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"fieldset",args__42416__auto__);
}));

(dumdom.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.fieldset.cljs$lang$applyTo = (function (seq42459){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42459));
}));


dumdom.dom.figcaption = (function dumdom$dom$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42981 = arguments.length;
var i__5770__auto___42982 = (0);
while(true){
if((i__5770__auto___42982 < len__5769__auto___42981)){
args__5775__auto__.push((arguments[i__5770__auto___42982]));

var G__42983 = (i__5770__auto___42982 + (1));
i__5770__auto___42982 = G__42983;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"figcaption",args__42416__auto__);
}));

(dumdom.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.figcaption.cljs$lang$applyTo = (function (seq42460){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42460));
}));


dumdom.dom.figure = (function dumdom$dom$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42984 = arguments.length;
var i__5770__auto___42985 = (0);
while(true){
if((i__5770__auto___42985 < len__5769__auto___42984)){
args__5775__auto__.push((arguments[i__5770__auto___42985]));

var G__42986 = (i__5770__auto___42985 + (1));
i__5770__auto___42985 = G__42986;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"figure",args__42416__auto__);
}));

(dumdom.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.figure.cljs$lang$applyTo = (function (seq42473){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42473));
}));


dumdom.dom.footer = (function dumdom$dom$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42987 = arguments.length;
var i__5770__auto___42988 = (0);
while(true){
if((i__5770__auto___42988 < len__5769__auto___42987)){
args__5775__auto__.push((arguments[i__5770__auto___42988]));

var G__42989 = (i__5770__auto___42988 + (1));
i__5770__auto___42988 = G__42989;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"footer",args__42416__auto__);
}));

(dumdom.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.footer.cljs$lang$applyTo = (function (seq42474){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42474));
}));


dumdom.dom.form = (function dumdom$dom$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42994 = arguments.length;
var i__5770__auto___42995 = (0);
while(true){
if((i__5770__auto___42995 < len__5769__auto___42994)){
args__5775__auto__.push((arguments[i__5770__auto___42995]));

var G__42996 = (i__5770__auto___42995 + (1));
i__5770__auto___42995 = G__42996;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"form",args__42416__auto__);
}));

(dumdom.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.form.cljs$lang$applyTo = (function (seq42484){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42484));
}));


dumdom.dom.h1 = (function dumdom$dom$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42998 = arguments.length;
var i__5770__auto___42999 = (0);
while(true){
if((i__5770__auto___42999 < len__5769__auto___42998)){
args__5775__auto__.push((arguments[i__5770__auto___42999]));

var G__43000 = (i__5770__auto___42999 + (1));
i__5770__auto___42999 = G__43000;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h1",args__42416__auto__);
}));

(dumdom.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h1.cljs$lang$applyTo = (function (seq42486){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42486));
}));


dumdom.dom.h2 = (function dumdom$dom$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43004 = arguments.length;
var i__5770__auto___43005 = (0);
while(true){
if((i__5770__auto___43005 < len__5769__auto___43004)){
args__5775__auto__.push((arguments[i__5770__auto___43005]));

var G__43006 = (i__5770__auto___43005 + (1));
i__5770__auto___43005 = G__43006;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h2",args__42416__auto__);
}));

(dumdom.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h2.cljs$lang$applyTo = (function (seq42487){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42487));
}));


dumdom.dom.h3 = (function dumdom$dom$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43007 = arguments.length;
var i__5770__auto___43008 = (0);
while(true){
if((i__5770__auto___43008 < len__5769__auto___43007)){
args__5775__auto__.push((arguments[i__5770__auto___43008]));

var G__43009 = (i__5770__auto___43008 + (1));
i__5770__auto___43008 = G__43009;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h3",args__42416__auto__);
}));

(dumdom.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h3.cljs$lang$applyTo = (function (seq42490){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42490));
}));


dumdom.dom.h4 = (function dumdom$dom$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43011 = arguments.length;
var i__5770__auto___43015 = (0);
while(true){
if((i__5770__auto___43015 < len__5769__auto___43011)){
args__5775__auto__.push((arguments[i__5770__auto___43015]));

var G__43019 = (i__5770__auto___43015 + (1));
i__5770__auto___43015 = G__43019;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h4",args__42416__auto__);
}));

(dumdom.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h4.cljs$lang$applyTo = (function (seq42543){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42543));
}));


dumdom.dom.h5 = (function dumdom$dom$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43023 = arguments.length;
var i__5770__auto___43024 = (0);
while(true){
if((i__5770__auto___43024 < len__5769__auto___43023)){
args__5775__auto__.push((arguments[i__5770__auto___43024]));

var G__43026 = (i__5770__auto___43024 + (1));
i__5770__auto___43024 = G__43026;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h5",args__42416__auto__);
}));

(dumdom.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h5.cljs$lang$applyTo = (function (seq42613){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42613));
}));


dumdom.dom.h6 = (function dumdom$dom$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43027 = arguments.length;
var i__5770__auto___43028 = (0);
while(true){
if((i__5770__auto___43028 < len__5769__auto___43027)){
args__5775__auto__.push((arguments[i__5770__auto___43028]));

var G__43029 = (i__5770__auto___43028 + (1));
i__5770__auto___43028 = G__43029;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h6",args__42416__auto__);
}));

(dumdom.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h6.cljs$lang$applyTo = (function (seq42637){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42637));
}));


dumdom.dom.head = (function dumdom$dom$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43031 = arguments.length;
var i__5770__auto___43032 = (0);
while(true){
if((i__5770__auto___43032 < len__5769__auto___43031)){
args__5775__auto__.push((arguments[i__5770__auto___43032]));

var G__43034 = (i__5770__auto___43032 + (1));
i__5770__auto___43032 = G__43034;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"head",args__42416__auto__);
}));

(dumdom.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.head.cljs$lang$applyTo = (function (seq42643){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42643));
}));


dumdom.dom.header = (function dumdom$dom$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43040 = arguments.length;
var i__5770__auto___43041 = (0);
while(true){
if((i__5770__auto___43041 < len__5769__auto___43040)){
args__5775__auto__.push((arguments[i__5770__auto___43041]));

var G__43042 = (i__5770__auto___43041 + (1));
i__5770__auto___43041 = G__43042;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"header",args__42416__auto__);
}));

(dumdom.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.header.cljs$lang$applyTo = (function (seq42645){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42645));
}));


dumdom.dom.hr = (function dumdom$dom$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43045 = arguments.length;
var i__5770__auto___43046 = (0);
while(true){
if((i__5770__auto___43046 < len__5769__auto___43045)){
args__5775__auto__.push((arguments[i__5770__auto___43046]));

var G__43047 = (i__5770__auto___43046 + (1));
i__5770__auto___43046 = G__43047;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"hr",args__42416__auto__);
}));

(dumdom.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.hr.cljs$lang$applyTo = (function (seq42646){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42646));
}));


dumdom.dom.html = (function dumdom$dom$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43048 = arguments.length;
var i__5770__auto___43050 = (0);
while(true){
if((i__5770__auto___43050 < len__5769__auto___43048)){
args__5775__auto__.push((arguments[i__5770__auto___43050]));

var G__43054 = (i__5770__auto___43050 + (1));
i__5770__auto___43050 = G__43054;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"html",args__42416__auto__);
}));

(dumdom.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.html.cljs$lang$applyTo = (function (seq42647){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42647));
}));


dumdom.dom.i = (function dumdom$dom$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43055 = arguments.length;
var i__5770__auto___43056 = (0);
while(true){
if((i__5770__auto___43056 < len__5769__auto___43055)){
args__5775__auto__.push((arguments[i__5770__auto___43056]));

var G__43060 = (i__5770__auto___43056 + (1));
i__5770__auto___43056 = G__43060;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"i",args__42416__auto__);
}));

(dumdom.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.i.cljs$lang$applyTo = (function (seq42648){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42648));
}));


dumdom.dom.iframe = (function dumdom$dom$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43066 = arguments.length;
var i__5770__auto___43067 = (0);
while(true){
if((i__5770__auto___43067 < len__5769__auto___43066)){
args__5775__auto__.push((arguments[i__5770__auto___43067]));

var G__43068 = (i__5770__auto___43067 + (1));
i__5770__auto___43067 = G__43068;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"iframe",args__42416__auto__);
}));

(dumdom.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.iframe.cljs$lang$applyTo = (function (seq42651){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42651));
}));


dumdom.dom.img = (function dumdom$dom$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43070 = arguments.length;
var i__5770__auto___43071 = (0);
while(true){
if((i__5770__auto___43071 < len__5769__auto___43070)){
args__5775__auto__.push((arguments[i__5770__auto___43071]));

var G__43073 = (i__5770__auto___43071 + (1));
i__5770__auto___43071 = G__43073;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"img",args__42416__auto__);
}));

(dumdom.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.img.cljs$lang$applyTo = (function (seq42657){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42657));
}));


dumdom.dom.input = (function dumdom$dom$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43077 = arguments.length;
var i__5770__auto___43078 = (0);
while(true){
if((i__5770__auto___43078 < len__5769__auto___43077)){
args__5775__auto__.push((arguments[i__5770__auto___43078]));

var G__43079 = (i__5770__auto___43078 + (1));
i__5770__auto___43078 = G__43079;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"input",args__42416__auto__);
}));

(dumdom.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.input.cljs$lang$applyTo = (function (seq42660){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42660));
}));


dumdom.dom.ins = (function dumdom$dom$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43080 = arguments.length;
var i__5770__auto___43081 = (0);
while(true){
if((i__5770__auto___43081 < len__5769__auto___43080)){
args__5775__auto__.push((arguments[i__5770__auto___43081]));

var G__43082 = (i__5770__auto___43081 + (1));
i__5770__auto___43081 = G__43082;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ins",args__42416__auto__);
}));

(dumdom.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ins.cljs$lang$applyTo = (function (seq42664){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42664));
}));


dumdom.dom.kbd = (function dumdom$dom$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43089 = arguments.length;
var i__5770__auto___43090 = (0);
while(true){
if((i__5770__auto___43090 < len__5769__auto___43089)){
args__5775__auto__.push((arguments[i__5770__auto___43090]));

var G__43091 = (i__5770__auto___43090 + (1));
i__5770__auto___43090 = G__43091;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"kbd",args__42416__auto__);
}));

(dumdom.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.kbd.cljs$lang$applyTo = (function (seq42668){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42668));
}));


dumdom.dom.keygen = (function dumdom$dom$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43094 = arguments.length;
var i__5770__auto___43095 = (0);
while(true){
if((i__5770__auto___43095 < len__5769__auto___43094)){
args__5775__auto__.push((arguments[i__5770__auto___43095]));

var G__43096 = (i__5770__auto___43095 + (1));
i__5770__auto___43095 = G__43096;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"keygen",args__42416__auto__);
}));

(dumdom.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.keygen.cljs$lang$applyTo = (function (seq42669){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42669));
}));


dumdom.dom.label = (function dumdom$dom$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43103 = arguments.length;
var i__5770__auto___43104 = (0);
while(true){
if((i__5770__auto___43104 < len__5769__auto___43103)){
args__5775__auto__.push((arguments[i__5770__auto___43104]));

var G__43105 = (i__5770__auto___43104 + (1));
i__5770__auto___43104 = G__43105;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"label",args__42416__auto__);
}));

(dumdom.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.label.cljs$lang$applyTo = (function (seq42673){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42673));
}));


dumdom.dom.legend = (function dumdom$dom$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43108 = arguments.length;
var i__5770__auto___43109 = (0);
while(true){
if((i__5770__auto___43109 < len__5769__auto___43108)){
args__5775__auto__.push((arguments[i__5770__auto___43109]));

var G__43110 = (i__5770__auto___43109 + (1));
i__5770__auto___43109 = G__43110;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"legend",args__42416__auto__);
}));

(dumdom.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.legend.cljs$lang$applyTo = (function (seq42674){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42674));
}));


dumdom.dom.li = (function dumdom$dom$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43115 = arguments.length;
var i__5770__auto___43116 = (0);
while(true){
if((i__5770__auto___43116 < len__5769__auto___43115)){
args__5775__auto__.push((arguments[i__5770__auto___43116]));

var G__43117 = (i__5770__auto___43116 + (1));
i__5770__auto___43116 = G__43117;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"li",args__42416__auto__);
}));

(dumdom.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.li.cljs$lang$applyTo = (function (seq42675){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42675));
}));


dumdom.dom.link = (function dumdom$dom$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43119 = arguments.length;
var i__5770__auto___43120 = (0);
while(true){
if((i__5770__auto___43120 < len__5769__auto___43119)){
args__5775__auto__.push((arguments[i__5770__auto___43120]));

var G__43123 = (i__5770__auto___43120 + (1));
i__5770__auto___43120 = G__43123;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"link",args__42416__auto__);
}));

(dumdom.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.link.cljs$lang$applyTo = (function (seq42679){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42679));
}));


dumdom.dom.main = (function dumdom$dom$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43124 = arguments.length;
var i__5770__auto___43125 = (0);
while(true){
if((i__5770__auto___43125 < len__5769__auto___43124)){
args__5775__auto__.push((arguments[i__5770__auto___43125]));

var G__43126 = (i__5770__auto___43125 + (1));
i__5770__auto___43125 = G__43126;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"main",args__42416__auto__);
}));

(dumdom.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.main.cljs$lang$applyTo = (function (seq42689){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42689));
}));


dumdom.dom.map = (function dumdom$dom$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43129 = arguments.length;
var i__5770__auto___43130 = (0);
while(true){
if((i__5770__auto___43130 < len__5769__auto___43129)){
args__5775__auto__.push((arguments[i__5770__auto___43130]));

var G__43132 = (i__5770__auto___43130 + (1));
i__5770__auto___43130 = G__43132;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"map",args__42416__auto__);
}));

(dumdom.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.map.cljs$lang$applyTo = (function (seq42690){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42690));
}));


dumdom.dom.mark = (function dumdom$dom$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43133 = arguments.length;
var i__5770__auto___43134 = (0);
while(true){
if((i__5770__auto___43134 < len__5769__auto___43133)){
args__5775__auto__.push((arguments[i__5770__auto___43134]));

var G__43135 = (i__5770__auto___43134 + (1));
i__5770__auto___43134 = G__43135;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"mark",args__42416__auto__);
}));

(dumdom.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.mark.cljs$lang$applyTo = (function (seq42691){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42691));
}));


dumdom.dom.menu = (function dumdom$dom$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43136 = arguments.length;
var i__5770__auto___43137 = (0);
while(true){
if((i__5770__auto___43137 < len__5769__auto___43136)){
args__5775__auto__.push((arguments[i__5770__auto___43137]));

var G__43138 = (i__5770__auto___43137 + (1));
i__5770__auto___43137 = G__43138;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"menu",args__42416__auto__);
}));

(dumdom.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.menu.cljs$lang$applyTo = (function (seq42692){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42692));
}));


dumdom.dom.menuitem = (function dumdom$dom$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43143 = arguments.length;
var i__5770__auto___43144 = (0);
while(true){
if((i__5770__auto___43144 < len__5769__auto___43143)){
args__5775__auto__.push((arguments[i__5770__auto___43144]));

var G__43145 = (i__5770__auto___43144 + (1));
i__5770__auto___43144 = G__43145;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"menuitem",args__42416__auto__);
}));

(dumdom.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.menuitem.cljs$lang$applyTo = (function (seq42695){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42695));
}));


dumdom.dom.meta = (function dumdom$dom$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43146 = arguments.length;
var i__5770__auto___43147 = (0);
while(true){
if((i__5770__auto___43147 < len__5769__auto___43146)){
args__5775__auto__.push((arguments[i__5770__auto___43147]));

var G__43149 = (i__5770__auto___43147 + (1));
i__5770__auto___43147 = G__43149;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"meta",args__42416__auto__);
}));

(dumdom.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.meta.cljs$lang$applyTo = (function (seq42698){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42698));
}));


dumdom.dom.meter = (function dumdom$dom$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43150 = arguments.length;
var i__5770__auto___43151 = (0);
while(true){
if((i__5770__auto___43151 < len__5769__auto___43150)){
args__5775__auto__.push((arguments[i__5770__auto___43151]));

var G__43152 = (i__5770__auto___43151 + (1));
i__5770__auto___43151 = G__43152;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"meter",args__42416__auto__);
}));

(dumdom.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.meter.cljs$lang$applyTo = (function (seq42699){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42699));
}));


dumdom.dom.nav = (function dumdom$dom$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43160 = arguments.length;
var i__5770__auto___43161 = (0);
while(true){
if((i__5770__auto___43161 < len__5769__auto___43160)){
args__5775__auto__.push((arguments[i__5770__auto___43161]));

var G__43163 = (i__5770__auto___43161 + (1));
i__5770__auto___43161 = G__43163;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"nav",args__42416__auto__);
}));

(dumdom.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.nav.cljs$lang$applyTo = (function (seq42700){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42700));
}));


dumdom.dom.noscript = (function dumdom$dom$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43168 = arguments.length;
var i__5770__auto___43169 = (0);
while(true){
if((i__5770__auto___43169 < len__5769__auto___43168)){
args__5775__auto__.push((arguments[i__5770__auto___43169]));

var G__43170 = (i__5770__auto___43169 + (1));
i__5770__auto___43169 = G__43170;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"noscript",args__42416__auto__);
}));

(dumdom.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.noscript.cljs$lang$applyTo = (function (seq42701){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42701));
}));


dumdom.dom.object = (function dumdom$dom$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43171 = arguments.length;
var i__5770__auto___43172 = (0);
while(true){
if((i__5770__auto___43172 < len__5769__auto___43171)){
args__5775__auto__.push((arguments[i__5770__auto___43172]));

var G__43173 = (i__5770__auto___43172 + (1));
i__5770__auto___43172 = G__43173;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"object",args__42416__auto__);
}));

(dumdom.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.object.cljs$lang$applyTo = (function (seq42702){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42702));
}));


dumdom.dom.ol = (function dumdom$dom$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43176 = arguments.length;
var i__5770__auto___43177 = (0);
while(true){
if((i__5770__auto___43177 < len__5769__auto___43176)){
args__5775__auto__.push((arguments[i__5770__auto___43177]));

var G__43178 = (i__5770__auto___43177 + (1));
i__5770__auto___43177 = G__43178;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ol",args__42416__auto__);
}));

(dumdom.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ol.cljs$lang$applyTo = (function (seq42703){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42703));
}));


dumdom.dom.optgroup = (function dumdom$dom$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43182 = arguments.length;
var i__5770__auto___43183 = (0);
while(true){
if((i__5770__auto___43183 < len__5769__auto___43182)){
args__5775__auto__.push((arguments[i__5770__auto___43183]));

var G__43184 = (i__5770__auto___43183 + (1));
i__5770__auto___43183 = G__43184;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"optgroup",args__42416__auto__);
}));

(dumdom.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.optgroup.cljs$lang$applyTo = (function (seq42704){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42704));
}));


dumdom.dom.option = (function dumdom$dom$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43188 = arguments.length;
var i__5770__auto___43189 = (0);
while(true){
if((i__5770__auto___43189 < len__5769__auto___43188)){
args__5775__auto__.push((arguments[i__5770__auto___43189]));

var G__43190 = (i__5770__auto___43189 + (1));
i__5770__auto___43189 = G__43190;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"option",args__42416__auto__);
}));

(dumdom.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.option.cljs$lang$applyTo = (function (seq42705){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42705));
}));


dumdom.dom.output = (function dumdom$dom$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43193 = arguments.length;
var i__5770__auto___43194 = (0);
while(true){
if((i__5770__auto___43194 < len__5769__auto___43193)){
args__5775__auto__.push((arguments[i__5770__auto___43194]));

var G__43200 = (i__5770__auto___43194 + (1));
i__5770__auto___43194 = G__43200;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"output",args__42416__auto__);
}));

(dumdom.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.output.cljs$lang$applyTo = (function (seq42706){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42706));
}));


dumdom.dom.p = (function dumdom$dom$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43201 = arguments.length;
var i__5770__auto___43202 = (0);
while(true){
if((i__5770__auto___43202 < len__5769__auto___43201)){
args__5775__auto__.push((arguments[i__5770__auto___43202]));

var G__43203 = (i__5770__auto___43202 + (1));
i__5770__auto___43202 = G__43203;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"p",args__42416__auto__);
}));

(dumdom.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.p.cljs$lang$applyTo = (function (seq42707){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42707));
}));


dumdom.dom.param = (function dumdom$dom$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43207 = arguments.length;
var i__5770__auto___43208 = (0);
while(true){
if((i__5770__auto___43208 < len__5769__auto___43207)){
args__5775__auto__.push((arguments[i__5770__auto___43208]));

var G__43209 = (i__5770__auto___43208 + (1));
i__5770__auto___43208 = G__43209;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"param",args__42416__auto__);
}));

(dumdom.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.param.cljs$lang$applyTo = (function (seq42708){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42708));
}));


dumdom.dom.pre = (function dumdom$dom$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43214 = arguments.length;
var i__5770__auto___43215 = (0);
while(true){
if((i__5770__auto___43215 < len__5769__auto___43214)){
args__5775__auto__.push((arguments[i__5770__auto___43215]));

var G__43218 = (i__5770__auto___43215 + (1));
i__5770__auto___43215 = G__43218;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"pre",args__42416__auto__);
}));

(dumdom.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.pre.cljs$lang$applyTo = (function (seq42709){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42709));
}));


dumdom.dom.progress = (function dumdom$dom$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43220 = arguments.length;
var i__5770__auto___43221 = (0);
while(true){
if((i__5770__auto___43221 < len__5769__auto___43220)){
args__5775__auto__.push((arguments[i__5770__auto___43221]));

var G__43222 = (i__5770__auto___43221 + (1));
i__5770__auto___43221 = G__43222;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"progress",args__42416__auto__);
}));

(dumdom.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.progress.cljs$lang$applyTo = (function (seq42710){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42710));
}));


dumdom.dom.q = (function dumdom$dom$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43228 = arguments.length;
var i__5770__auto___43229 = (0);
while(true){
if((i__5770__auto___43229 < len__5769__auto___43228)){
args__5775__auto__.push((arguments[i__5770__auto___43229]));

var G__43232 = (i__5770__auto___43229 + (1));
i__5770__auto___43229 = G__43232;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"q",args__42416__auto__);
}));

(dumdom.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.q.cljs$lang$applyTo = (function (seq42711){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42711));
}));


dumdom.dom.rp = (function dumdom$dom$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43234 = arguments.length;
var i__5770__auto___43236 = (0);
while(true){
if((i__5770__auto___43236 < len__5769__auto___43234)){
args__5775__auto__.push((arguments[i__5770__auto___43236]));

var G__43237 = (i__5770__auto___43236 + (1));
i__5770__auto___43236 = G__43237;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"rp",args__42416__auto__);
}));

(dumdom.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rp.cljs$lang$applyTo = (function (seq42712){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42712));
}));


dumdom.dom.rt = (function dumdom$dom$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43238 = arguments.length;
var i__5770__auto___43239 = (0);
while(true){
if((i__5770__auto___43239 < len__5769__auto___43238)){
args__5775__auto__.push((arguments[i__5770__auto___43239]));

var G__43241 = (i__5770__auto___43239 + (1));
i__5770__auto___43239 = G__43241;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"rt",args__42416__auto__);
}));

(dumdom.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rt.cljs$lang$applyTo = (function (seq42713){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42713));
}));


dumdom.dom.ruby = (function dumdom$dom$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43245 = arguments.length;
var i__5770__auto___43246 = (0);
while(true){
if((i__5770__auto___43246 < len__5769__auto___43245)){
args__5775__auto__.push((arguments[i__5770__auto___43246]));

var G__43247 = (i__5770__auto___43246 + (1));
i__5770__auto___43246 = G__43247;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ruby",args__42416__auto__);
}));

(dumdom.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ruby.cljs$lang$applyTo = (function (seq42714){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42714));
}));


dumdom.dom.s = (function dumdom$dom$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43248 = arguments.length;
var i__5770__auto___43249 = (0);
while(true){
if((i__5770__auto___43249 < len__5769__auto___43248)){
args__5775__auto__.push((arguments[i__5770__auto___43249]));

var G__43250 = (i__5770__auto___43249 + (1));
i__5770__auto___43249 = G__43250;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"s",args__42416__auto__);
}));

(dumdom.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.s.cljs$lang$applyTo = (function (seq42715){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42715));
}));


dumdom.dom.samp = (function dumdom$dom$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43252 = arguments.length;
var i__5770__auto___43256 = (0);
while(true){
if((i__5770__auto___43256 < len__5769__auto___43252)){
args__5775__auto__.push((arguments[i__5770__auto___43256]));

var G__43257 = (i__5770__auto___43256 + (1));
i__5770__auto___43256 = G__43257;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"samp",args__42416__auto__);
}));

(dumdom.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.samp.cljs$lang$applyTo = (function (seq42716){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42716));
}));


dumdom.dom.script = (function dumdom$dom$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43258 = arguments.length;
var i__5770__auto___43259 = (0);
while(true){
if((i__5770__auto___43259 < len__5769__auto___43258)){
args__5775__auto__.push((arguments[i__5770__auto___43259]));

var G__43260 = (i__5770__auto___43259 + (1));
i__5770__auto___43259 = G__43260;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"script",args__42416__auto__);
}));

(dumdom.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.script.cljs$lang$applyTo = (function (seq42717){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42717));
}));


dumdom.dom.section = (function dumdom$dom$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43263 = arguments.length;
var i__5770__auto___43264 = (0);
while(true){
if((i__5770__auto___43264 < len__5769__auto___43263)){
args__5775__auto__.push((arguments[i__5770__auto___43264]));

var G__43265 = (i__5770__auto___43264 + (1));
i__5770__auto___43264 = G__43265;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"section",args__42416__auto__);
}));

(dumdom.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.section.cljs$lang$applyTo = (function (seq42718){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42718));
}));


dumdom.dom.select = (function dumdom$dom$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43271 = arguments.length;
var i__5770__auto___43273 = (0);
while(true){
if((i__5770__auto___43273 < len__5769__auto___43271)){
args__5775__auto__.push((arguments[i__5770__auto___43273]));

var G__43274 = (i__5770__auto___43273 + (1));
i__5770__auto___43273 = G__43274;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"select",args__42416__auto__);
}));

(dumdom.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.select.cljs$lang$applyTo = (function (seq42719){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42719));
}));


dumdom.dom.small = (function dumdom$dom$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43275 = arguments.length;
var i__5770__auto___43276 = (0);
while(true){
if((i__5770__auto___43276 < len__5769__auto___43275)){
args__5775__auto__.push((arguments[i__5770__auto___43276]));

var G__43277 = (i__5770__auto___43276 + (1));
i__5770__auto___43276 = G__43277;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"small",args__42416__auto__);
}));

(dumdom.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.small.cljs$lang$applyTo = (function (seq42720){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42720));
}));


dumdom.dom.source = (function dumdom$dom$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43278 = arguments.length;
var i__5770__auto___43279 = (0);
while(true){
if((i__5770__auto___43279 < len__5769__auto___43278)){
args__5775__auto__.push((arguments[i__5770__auto___43279]));

var G__43280 = (i__5770__auto___43279 + (1));
i__5770__auto___43279 = G__43280;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"source",args__42416__auto__);
}));

(dumdom.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.source.cljs$lang$applyTo = (function (seq42721){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42721));
}));


dumdom.dom.span = (function dumdom$dom$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43281 = arguments.length;
var i__5770__auto___43282 = (0);
while(true){
if((i__5770__auto___43282 < len__5769__auto___43281)){
args__5775__auto__.push((arguments[i__5770__auto___43282]));

var G__43283 = (i__5770__auto___43282 + (1));
i__5770__auto___43282 = G__43283;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"span",args__42416__auto__);
}));

(dumdom.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.span.cljs$lang$applyTo = (function (seq42722){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42722));
}));


dumdom.dom.strong = (function dumdom$dom$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43286 = arguments.length;
var i__5770__auto___43287 = (0);
while(true){
if((i__5770__auto___43287 < len__5769__auto___43286)){
args__5775__auto__.push((arguments[i__5770__auto___43287]));

var G__43288 = (i__5770__auto___43287 + (1));
i__5770__auto___43287 = G__43288;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"strong",args__42416__auto__);
}));

(dumdom.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.strong.cljs$lang$applyTo = (function (seq42723){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42723));
}));


dumdom.dom.style = (function dumdom$dom$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43291 = arguments.length;
var i__5770__auto___43292 = (0);
while(true){
if((i__5770__auto___43292 < len__5769__auto___43291)){
args__5775__auto__.push((arguments[i__5770__auto___43292]));

var G__43294 = (i__5770__auto___43292 + (1));
i__5770__auto___43292 = G__43294;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"style",args__42416__auto__);
}));

(dumdom.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.style.cljs$lang$applyTo = (function (seq42724){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42724));
}));


dumdom.dom.sub = (function dumdom$dom$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43296 = arguments.length;
var i__5770__auto___43297 = (0);
while(true){
if((i__5770__auto___43297 < len__5769__auto___43296)){
args__5775__auto__.push((arguments[i__5770__auto___43297]));

var G__43299 = (i__5770__auto___43297 + (1));
i__5770__auto___43297 = G__43299;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"sub",args__42416__auto__);
}));

(dumdom.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.sub.cljs$lang$applyTo = (function (seq42725){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42725));
}));


dumdom.dom.summary = (function dumdom$dom$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43310 = arguments.length;
var i__5770__auto___43311 = (0);
while(true){
if((i__5770__auto___43311 < len__5769__auto___43310)){
args__5775__auto__.push((arguments[i__5770__auto___43311]));

var G__43312 = (i__5770__auto___43311 + (1));
i__5770__auto___43311 = G__43312;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"summary",args__42416__auto__);
}));

(dumdom.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.summary.cljs$lang$applyTo = (function (seq42726){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42726));
}));


dumdom.dom.sup = (function dumdom$dom$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43313 = arguments.length;
var i__5770__auto___43314 = (0);
while(true){
if((i__5770__auto___43314 < len__5769__auto___43313)){
args__5775__auto__.push((arguments[i__5770__auto___43314]));

var G__43315 = (i__5770__auto___43314 + (1));
i__5770__auto___43314 = G__43315;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"sup",args__42416__auto__);
}));

(dumdom.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.sup.cljs$lang$applyTo = (function (seq42727){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42727));
}));


dumdom.dom.table = (function dumdom$dom$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43319 = arguments.length;
var i__5770__auto___43320 = (0);
while(true){
if((i__5770__auto___43320 < len__5769__auto___43319)){
args__5775__auto__.push((arguments[i__5770__auto___43320]));

var G__43321 = (i__5770__auto___43320 + (1));
i__5770__auto___43320 = G__43321;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"table",args__42416__auto__);
}));

(dumdom.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.table.cljs$lang$applyTo = (function (seq42728){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42728));
}));


dumdom.dom.tbody = (function dumdom$dom$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43326 = arguments.length;
var i__5770__auto___43327 = (0);
while(true){
if((i__5770__auto___43327 < len__5769__auto___43326)){
args__5775__auto__.push((arguments[i__5770__auto___43327]));

var G__43328 = (i__5770__auto___43327 + (1));
i__5770__auto___43327 = G__43328;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"tbody",args__42416__auto__);
}));

(dumdom.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tbody.cljs$lang$applyTo = (function (seq42729){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42729));
}));


dumdom.dom.td = (function dumdom$dom$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43329 = arguments.length;
var i__5770__auto___43330 = (0);
while(true){
if((i__5770__auto___43330 < len__5769__auto___43329)){
args__5775__auto__.push((arguments[i__5770__auto___43330]));

var G__43331 = (i__5770__auto___43330 + (1));
i__5770__auto___43330 = G__43331;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"td",args__42416__auto__);
}));

(dumdom.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.td.cljs$lang$applyTo = (function (seq42730){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42730));
}));


dumdom.dom.textarea = (function dumdom$dom$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43332 = arguments.length;
var i__5770__auto___43334 = (0);
while(true){
if((i__5770__auto___43334 < len__5769__auto___43332)){
args__5775__auto__.push((arguments[i__5770__auto___43334]));

var G__43335 = (i__5770__auto___43334 + (1));
i__5770__auto___43334 = G__43335;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"textarea",args__42416__auto__);
}));

(dumdom.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.textarea.cljs$lang$applyTo = (function (seq42731){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42731));
}));


dumdom.dom.tfoot = (function dumdom$dom$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43340 = arguments.length;
var i__5770__auto___43341 = (0);
while(true){
if((i__5770__auto___43341 < len__5769__auto___43340)){
args__5775__auto__.push((arguments[i__5770__auto___43341]));

var G__43342 = (i__5770__auto___43341 + (1));
i__5770__auto___43341 = G__43342;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"tfoot",args__42416__auto__);
}));

(dumdom.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tfoot.cljs$lang$applyTo = (function (seq42732){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42732));
}));


dumdom.dom.th = (function dumdom$dom$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43346 = arguments.length;
var i__5770__auto___43348 = (0);
while(true){
if((i__5770__auto___43348 < len__5769__auto___43346)){
args__5775__auto__.push((arguments[i__5770__auto___43348]));

var G__43350 = (i__5770__auto___43348 + (1));
i__5770__auto___43348 = G__43350;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"th",args__42416__auto__);
}));

(dumdom.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.th.cljs$lang$applyTo = (function (seq42733){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42733));
}));


dumdom.dom.thead = (function dumdom$dom$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43353 = arguments.length;
var i__5770__auto___43355 = (0);
while(true){
if((i__5770__auto___43355 < len__5769__auto___43353)){
args__5775__auto__.push((arguments[i__5770__auto___43355]));

var G__43356 = (i__5770__auto___43355 + (1));
i__5770__auto___43355 = G__43356;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"thead",args__42416__auto__);
}));

(dumdom.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.thead.cljs$lang$applyTo = (function (seq42734){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42734));
}));


dumdom.dom.time = (function dumdom$dom$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43358 = arguments.length;
var i__5770__auto___43359 = (0);
while(true){
if((i__5770__auto___43359 < len__5769__auto___43358)){
args__5775__auto__.push((arguments[i__5770__auto___43359]));

var G__43360 = (i__5770__auto___43359 + (1));
i__5770__auto___43359 = G__43360;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"time",args__42416__auto__);
}));

(dumdom.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.time.cljs$lang$applyTo = (function (seq42735){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42735));
}));


dumdom.dom.title = (function dumdom$dom$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43361 = arguments.length;
var i__5770__auto___43362 = (0);
while(true){
if((i__5770__auto___43362 < len__5769__auto___43361)){
args__5775__auto__.push((arguments[i__5770__auto___43362]));

var G__43363 = (i__5770__auto___43362 + (1));
i__5770__auto___43362 = G__43363;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"title",args__42416__auto__);
}));

(dumdom.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.title.cljs$lang$applyTo = (function (seq42736){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42736));
}));


dumdom.dom.tr = (function dumdom$dom$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43366 = arguments.length;
var i__5770__auto___43367 = (0);
while(true){
if((i__5770__auto___43367 < len__5769__auto___43366)){
args__5775__auto__.push((arguments[i__5770__auto___43367]));

var G__43368 = (i__5770__auto___43367 + (1));
i__5770__auto___43367 = G__43368;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"tr",args__42416__auto__);
}));

(dumdom.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tr.cljs$lang$applyTo = (function (seq42737){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42737));
}));


dumdom.dom.track = (function dumdom$dom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43369 = arguments.length;
var i__5770__auto___43370 = (0);
while(true){
if((i__5770__auto___43370 < len__5769__auto___43369)){
args__5775__auto__.push((arguments[i__5770__auto___43370]));

var G__43371 = (i__5770__auto___43370 + (1));
i__5770__auto___43370 = G__43371;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"track",args__42416__auto__);
}));

(dumdom.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.track.cljs$lang$applyTo = (function (seq42738){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42738));
}));


dumdom.dom.u = (function dumdom$dom$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43372 = arguments.length;
var i__5770__auto___43373 = (0);
while(true){
if((i__5770__auto___43373 < len__5769__auto___43372)){
args__5775__auto__.push((arguments[i__5770__auto___43373]));

var G__43374 = (i__5770__auto___43373 + (1));
i__5770__auto___43373 = G__43374;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"u",args__42416__auto__);
}));

(dumdom.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.u.cljs$lang$applyTo = (function (seq42739){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42739));
}));


dumdom.dom.ul = (function dumdom$dom$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43377 = arguments.length;
var i__5770__auto___43378 = (0);
while(true){
if((i__5770__auto___43378 < len__5769__auto___43377)){
args__5775__auto__.push((arguments[i__5770__auto___43378]));

var G__43380 = (i__5770__auto___43378 + (1));
i__5770__auto___43378 = G__43380;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ul",args__42416__auto__);
}));

(dumdom.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ul.cljs$lang$applyTo = (function (seq42740){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42740));
}));


dumdom.dom.var$ = (function dumdom$dom$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43383 = arguments.length;
var i__5770__auto___43384 = (0);
while(true){
if((i__5770__auto___43384 < len__5769__auto___43383)){
args__5775__auto__.push((arguments[i__5770__auto___43384]));

var G__43385 = (i__5770__auto___43384 + (1));
i__5770__auto___43384 = G__43385;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"var",args__42416__auto__);
}));

(dumdom.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.var$.cljs$lang$applyTo = (function (seq42741){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42741));
}));


dumdom.dom.video = (function dumdom$dom$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43389 = arguments.length;
var i__5770__auto___43390 = (0);
while(true){
if((i__5770__auto___43390 < len__5769__auto___43389)){
args__5775__auto__.push((arguments[i__5770__auto___43390]));

var G__43391 = (i__5770__auto___43390 + (1));
i__5770__auto___43390 = G__43391;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"video",args__42416__auto__);
}));

(dumdom.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.video.cljs$lang$applyTo = (function (seq42742){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42742));
}));


dumdom.dom.wbr = (function dumdom$dom$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43393 = arguments.length;
var i__5770__auto___43394 = (0);
while(true){
if((i__5770__auto___43394 < len__5769__auto___43393)){
args__5775__auto__.push((arguments[i__5770__auto___43394]));

var G__43395 = (i__5770__auto___43394 + (1));
i__5770__auto___43394 = G__43395;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"wbr",args__42416__auto__);
}));

(dumdom.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.wbr.cljs$lang$applyTo = (function (seq42743){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42743));
}));


dumdom.dom.circle = (function dumdom$dom$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43396 = arguments.length;
var i__5770__auto___43397 = (0);
while(true){
if((i__5770__auto___43397 < len__5769__auto___43396)){
args__5775__auto__.push((arguments[i__5770__auto___43397]));

var G__43398 = (i__5770__auto___43397 + (1));
i__5770__auto___43397 = G__43398;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"circle",args__42416__auto__);
}));

(dumdom.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.circle.cljs$lang$applyTo = (function (seq42744){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42744));
}));


dumdom.dom.clipPath = (function dumdom$dom$clipPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43399 = arguments.length;
var i__5770__auto___43400 = (0);
while(true){
if((i__5770__auto___43400 < len__5769__auto___43399)){
args__5775__auto__.push((arguments[i__5770__auto___43400]));

var G__43402 = (i__5770__auto___43400 + (1));
i__5770__auto___43400 = G__43402;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"clipPath",args__42416__auto__);
}));

(dumdom.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.clipPath.cljs$lang$applyTo = (function (seq42749){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42749));
}));


dumdom.dom.defs = (function dumdom$dom$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43404 = arguments.length;
var i__5770__auto___43405 = (0);
while(true){
if((i__5770__auto___43405 < len__5769__auto___43404)){
args__5775__auto__.push((arguments[i__5770__auto___43405]));

var G__43406 = (i__5770__auto___43405 + (1));
i__5770__auto___43405 = G__43406;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"defs",args__42416__auto__);
}));

(dumdom.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.defs.cljs$lang$applyTo = (function (seq42750){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42750));
}));


dumdom.dom.ellipse = (function dumdom$dom$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43407 = arguments.length;
var i__5770__auto___43408 = (0);
while(true){
if((i__5770__auto___43408 < len__5769__auto___43407)){
args__5775__auto__.push((arguments[i__5770__auto___43408]));

var G__43409 = (i__5770__auto___43408 + (1));
i__5770__auto___43408 = G__43409;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ellipse",args__42416__auto__);
}));

(dumdom.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ellipse.cljs$lang$applyTo = (function (seq42752){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42752));
}));


dumdom.dom.g = (function dumdom$dom$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43413 = arguments.length;
var i__5770__auto___43414 = (0);
while(true){
if((i__5770__auto___43414 < len__5769__auto___43413)){
args__5775__auto__.push((arguments[i__5770__auto___43414]));

var G__43415 = (i__5770__auto___43414 + (1));
i__5770__auto___43414 = G__43415;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"g",args__42416__auto__);
}));

(dumdom.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.g.cljs$lang$applyTo = (function (seq42754){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42754));
}));


dumdom.dom.image = (function dumdom$dom$image(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43416 = arguments.length;
var i__5770__auto___43418 = (0);
while(true){
if((i__5770__auto___43418 < len__5769__auto___43416)){
args__5775__auto__.push((arguments[i__5770__auto___43418]));

var G__43420 = (i__5770__auto___43418 + (1));
i__5770__auto___43418 = G__43420;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"image",args__42416__auto__);
}));

(dumdom.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.image.cljs$lang$applyTo = (function (seq42759){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42759));
}));


dumdom.dom.line = (function dumdom$dom$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43421 = arguments.length;
var i__5770__auto___43422 = (0);
while(true){
if((i__5770__auto___43422 < len__5769__auto___43421)){
args__5775__auto__.push((arguments[i__5770__auto___43422]));

var G__43423 = (i__5770__auto___43422 + (1));
i__5770__auto___43422 = G__43423;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"line",args__42416__auto__);
}));

(dumdom.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.line.cljs$lang$applyTo = (function (seq42760){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42760));
}));


dumdom.dom.linearGradient = (function dumdom$dom$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43424 = arguments.length;
var i__5770__auto___43425 = (0);
while(true){
if((i__5770__auto___43425 < len__5769__auto___43424)){
args__5775__auto__.push((arguments[i__5770__auto___43425]));

var G__43427 = (i__5770__auto___43425 + (1));
i__5770__auto___43425 = G__43427;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"linearGradient",args__42416__auto__);
}));

(dumdom.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.linearGradient.cljs$lang$applyTo = (function (seq42761){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42761));
}));


dumdom.dom.mask = (function dumdom$dom$mask(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43430 = arguments.length;
var i__5770__auto___43431 = (0);
while(true){
if((i__5770__auto___43431 < len__5769__auto___43430)){
args__5775__auto__.push((arguments[i__5770__auto___43431]));

var G__43432 = (i__5770__auto___43431 + (1));
i__5770__auto___43431 = G__43432;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"mask",args__42416__auto__);
}));

(dumdom.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.mask.cljs$lang$applyTo = (function (seq42762){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42762));
}));


dumdom.dom.path = (function dumdom$dom$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43433 = arguments.length;
var i__5770__auto___43434 = (0);
while(true){
if((i__5770__auto___43434 < len__5769__auto___43433)){
args__5775__auto__.push((arguments[i__5770__auto___43434]));

var G__43436 = (i__5770__auto___43434 + (1));
i__5770__auto___43434 = G__43436;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"path",args__42416__auto__);
}));

(dumdom.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.path.cljs$lang$applyTo = (function (seq42767){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42767));
}));


dumdom.dom.pattern = (function dumdom$dom$pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43437 = arguments.length;
var i__5770__auto___43438 = (0);
while(true){
if((i__5770__auto___43438 < len__5769__auto___43437)){
args__5775__auto__.push((arguments[i__5770__auto___43438]));

var G__43439 = (i__5770__auto___43438 + (1));
i__5770__auto___43438 = G__43439;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"pattern",args__42416__auto__);
}));

(dumdom.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.pattern.cljs$lang$applyTo = (function (seq42768){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42768));
}));


dumdom.dom.polygon = (function dumdom$dom$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43440 = arguments.length;
var i__5770__auto___43441 = (0);
while(true){
if((i__5770__auto___43441 < len__5769__auto___43440)){
args__5775__auto__.push((arguments[i__5770__auto___43441]));

var G__43442 = (i__5770__auto___43441 + (1));
i__5770__auto___43441 = G__43442;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"polygon",args__42416__auto__);
}));

(dumdom.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.polygon.cljs$lang$applyTo = (function (seq42769){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42769));
}));


dumdom.dom.polyline = (function dumdom$dom$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43443 = arguments.length;
var i__5770__auto___43444 = (0);
while(true){
if((i__5770__auto___43444 < len__5769__auto___43443)){
args__5775__auto__.push((arguments[i__5770__auto___43444]));

var G__43446 = (i__5770__auto___43444 + (1));
i__5770__auto___43444 = G__43446;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"polyline",args__42416__auto__);
}));

(dumdom.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.polyline.cljs$lang$applyTo = (function (seq42770){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42770));
}));


dumdom.dom.radialGradient = (function dumdom$dom$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43450 = arguments.length;
var i__5770__auto___43451 = (0);
while(true){
if((i__5770__auto___43451 < len__5769__auto___43450)){
args__5775__auto__.push((arguments[i__5770__auto___43451]));

var G__43453 = (i__5770__auto___43451 + (1));
i__5770__auto___43451 = G__43453;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"radialGradient",args__42416__auto__);
}));

(dumdom.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.radialGradient.cljs$lang$applyTo = (function (seq42772){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42772));
}));


dumdom.dom.rect = (function dumdom$dom$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43458 = arguments.length;
var i__5770__auto___43459 = (0);
while(true){
if((i__5770__auto___43459 < len__5769__auto___43458)){
args__5775__auto__.push((arguments[i__5770__auto___43459]));

var G__43460 = (i__5770__auto___43459 + (1));
i__5770__auto___43459 = G__43460;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"rect",args__42416__auto__);
}));

(dumdom.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rect.cljs$lang$applyTo = (function (seq42773){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42773));
}));


dumdom.dom.stop = (function dumdom$dom$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43462 = arguments.length;
var i__5770__auto___43463 = (0);
while(true){
if((i__5770__auto___43463 < len__5769__auto___43462)){
args__5775__auto__.push((arguments[i__5770__auto___43463]));

var G__43464 = (i__5770__auto___43463 + (1));
i__5770__auto___43463 = G__43464;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"stop",args__42416__auto__);
}));

(dumdom.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.stop.cljs$lang$applyTo = (function (seq42774){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42774));
}));


dumdom.dom.svg = (function dumdom$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43465 = arguments.length;
var i__5770__auto___43466 = (0);
while(true){
if((i__5770__auto___43466 < len__5769__auto___43465)){
args__5775__auto__.push((arguments[i__5770__auto___43466]));

var G__43467 = (i__5770__auto___43466 + (1));
i__5770__auto___43466 = G__43467;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"svg",args__42416__auto__);
}));

(dumdom.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.svg.cljs$lang$applyTo = (function (seq42775){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42775));
}));


dumdom.dom.text = (function dumdom$dom$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43472 = arguments.length;
var i__5770__auto___43473 = (0);
while(true){
if((i__5770__auto___43473 < len__5769__auto___43472)){
args__5775__auto__.push((arguments[i__5770__auto___43473]));

var G__43475 = (i__5770__auto___43473 + (1));
i__5770__auto___43473 = G__43475;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"text",args__42416__auto__);
}));

(dumdom.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.text.cljs$lang$applyTo = (function (seq42776){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42776));
}));


dumdom.dom.tspan = (function dumdom$dom$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43480 = arguments.length;
var i__5770__auto___43481 = (0);
while(true){
if((i__5770__auto___43481 < len__5769__auto___43480)){
args__5775__auto__.push((arguments[i__5770__auto___43481]));

var G__43482 = (i__5770__auto___43481 + (1));
i__5770__auto___43481 = G__43482;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args__42416__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"tspan",args__42416__auto__);
}));

(dumdom.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tspan.cljs$lang$applyTo = (function (seq42777){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42777));
}));


dumdom.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([dumdom.dom.form,dumdom.dom.audio,dumdom.dom.input,dumdom.dom.menuitem,dumdom.dom.radialGradient,dumdom.dom.base,dumdom.dom.h1,dumdom.dom.embed,dumdom.dom.h3,dumdom.dom.body,dumdom.dom.keygen,dumdom.dom.progress,dumdom.dom.main,dumdom.dom.cite,dumdom.dom.rect,dumdom.dom.polyline,dumdom.dom.map,dumdom.dom.object,dumdom.dom.i,dumdom.dom.p,dumdom.dom.nav,dumdom.dom.ruby,dumdom.dom.a,dumdom.dom.menu,dumdom.dom.blockquote,dumdom.dom.img,dumdom.dom.text,dumdom.dom.span,dumdom.dom.track,dumdom.dom.data,dumdom.dom.u,dumdom.dom.dl,dumdom.dom.select,dumdom.dom.polygon,dumdom.dom.pattern,dumdom.dom.html,dumdom.dom.thead,dumdom.dom.path,dumdom.dom.del,dumdom.dom.fieldset,dumdom.dom.aside,dumdom.dom.figure,dumdom.dom.figcaption,dumdom.dom.mask,dumdom.dom.q,dumdom.dom.bdi,dumdom.dom.video,dumdom.dom.address,dumdom.dom.caption,dumdom.dom.dd,dumdom.dom.rp,dumdom.dom.hr,dumdom.dom.meta,dumdom.dom.tbody,dumdom.dom.table,dumdom.dom.pre,dumdom.dom.ul,dumdom.dom.sup,dumdom.dom.dfn,dumdom.dom.sub,dumdom.dom.mark,dumdom.dom.script,dumdom.dom.big,dumdom.dom.button,dumdom.dom.wbr,dumdom.dom.strong,dumdom.dom.li,dumdom.dom.dt,dumdom.dom.td,dumdom.dom.tr,dumdom.dom.circle,dumdom.dom.section,dumdom.dom.th,dumdom.dom.time,dumdom.dom.optgroup,dumdom.dom.iframe,dumdom.dom.legend,dumdom.dom.em,dumdom.dom.kbd,dumdom.dom.article,dumdom.dom.clipPath,dumdom.dom.abbr,dumdom.dom.source,dumdom.dom.output,dumdom.dom.header,dumdom.dom.datalist,dumdom.dom.tfoot,dumdom.dom.s,dumdom.dom.ins,dumdom.dom.footer,dumdom.dom.title,dumdom.dom.h5,dumdom.dom.canvas,dumdom.dom.param,dumdom.dom.div,dumdom.dom.option,dumdom.dom.summary,dumdom.dom.samp,dumdom.dom.small,dumdom.dom.style,dumdom.dom.textarea,dumdom.dom.h4,dumdom.dom.head,dumdom.dom.g,dumdom.dom.stop,dumdom.dom.var$,dumdom.dom.tspan,dumdom.dom.ol,dumdom.dom.details,dumdom.dom.line,dumdom.dom.col,dumdom.dom.label,dumdom.dom.rt,dumdom.dom.h6,dumdom.dom.link,dumdom.dom.defs,dumdom.dom.colgroup,dumdom.dom.meter,dumdom.dom.bdo,dumdom.dom.b,dumdom.dom.svg,dumdom.dom.ellipse,dumdom.dom.code,dumdom.dom.linearGradient,dumdom.dom.noscript,dumdom.dom.h2,dumdom.dom.area,dumdom.dom.br,dumdom.dom.image],[dumdom.dom.form,dumdom.dom.audio,dumdom.dom.input,dumdom.dom.menuitem,dumdom.dom.radialGradient,dumdom.dom.base,dumdom.dom.h1,dumdom.dom.embed,dumdom.dom.h3,dumdom.dom.body,dumdom.dom.keygen,dumdom.dom.progress,dumdom.dom.main,dumdom.dom.cite,dumdom.dom.rect,dumdom.dom.polyline,dumdom.dom.map,dumdom.dom.object,dumdom.dom.i,dumdom.dom.p,dumdom.dom.nav,dumdom.dom.ruby,dumdom.dom.a,dumdom.dom.menu,dumdom.dom.blockquote,dumdom.dom.img,dumdom.dom.text,dumdom.dom.span,dumdom.dom.track,dumdom.dom.data,dumdom.dom.u,dumdom.dom.dl,dumdom.dom.select,dumdom.dom.polygon,dumdom.dom.pattern,dumdom.dom.html,dumdom.dom.thead,dumdom.dom.path,dumdom.dom.del,dumdom.dom.fieldset,dumdom.dom.aside,dumdom.dom.figure,dumdom.dom.figcaption,dumdom.dom.mask,dumdom.dom.q,dumdom.dom.bdi,dumdom.dom.video,dumdom.dom.address,dumdom.dom.caption,dumdom.dom.dd,dumdom.dom.rp,dumdom.dom.hr,dumdom.dom.meta,dumdom.dom.tbody,dumdom.dom.table,dumdom.dom.pre,dumdom.dom.ul,dumdom.dom.sup,dumdom.dom.dfn,dumdom.dom.sub,dumdom.dom.mark,dumdom.dom.script,dumdom.dom.big,dumdom.dom.button,dumdom.dom.wbr,dumdom.dom.strong,dumdom.dom.li,dumdom.dom.dt,dumdom.dom.td,dumdom.dom.tr,dumdom.dom.circle,dumdom.dom.section,dumdom.dom.th,dumdom.dom.time,dumdom.dom.optgroup,dumdom.dom.iframe,dumdom.dom.legend,dumdom.dom.em,dumdom.dom.kbd,dumdom.dom.article,dumdom.dom.clipPath,dumdom.dom.abbr,dumdom.dom.source,dumdom.dom.output,dumdom.dom.header,dumdom.dom.datalist,dumdom.dom.tfoot,dumdom.dom.s,dumdom.dom.ins,dumdom.dom.footer,dumdom.dom.title,dumdom.dom.h5,dumdom.dom.canvas,dumdom.dom.param,dumdom.dom.div,dumdom.dom.option,dumdom.dom.summary,dumdom.dom.samp,dumdom.dom.small,dumdom.dom.style,dumdom.dom.textarea,dumdom.dom.h4,dumdom.dom.head,dumdom.dom.g,dumdom.dom.stop,dumdom.dom.var$,dumdom.dom.tspan,dumdom.dom.ol,dumdom.dom.details,dumdom.dom.line,dumdom.dom.col,dumdom.dom.label,dumdom.dom.rt,dumdom.dom.h6,dumdom.dom.link,dumdom.dom.defs,dumdom.dom.colgroup,dumdom.dom.meter,dumdom.dom.bdo,dumdom.dom.b,dumdom.dom.svg,dumdom.dom.ellipse,dumdom.dom.code,dumdom.dom.linearGradient,dumdom.dom.noscript,dumdom.dom.h2,dumdom.dom.area,dumdom.dom.br,dumdom.dom.image]);

//# sourceMappingURL=dumdom.dom.js.map
