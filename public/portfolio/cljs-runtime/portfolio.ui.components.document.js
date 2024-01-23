goog.provide('portfolio.ui.components.document');
/**
 * 
 */
portfolio.ui.components.document.Document = (function (){var G__44269 = (function (p__44275){
var map__44277 = p__44275;
var map__44277__$1 = cljs.core.__destructure_map(map__44277);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44277__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44277__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.document.dark.contrast","div.document.dark.contrast",-1889138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1","h1.h1",-1010377955),title], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$document$iter__44282(s__44283){
return (new cljs.core.LazySeq(null,(function (){
var s__44283__$1 = s__44283;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44283__$1);
if(temp__5804__auto__){
var s__44283__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44283__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44283__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44285 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44284 = (0);
while(true){
if((i__44284 < size__5522__auto__)){
var section = cljs.core._nth(c__5521__auto__,i__44284);
cljs.core.chunk_append(b__44285,(function (){var G__44286 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(section);
var G__44286__$1 = (((G__44286 instanceof cljs.core.Keyword))?G__44286.fqn:null);
switch (G__44286__$1) {
case "markdown":
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(section) : portfolio.ui.components.markdown.Markdown.call(null,section));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44286__$1)].join('')));

}
})());

var G__44289 = (i__44284 + (1));
i__44284 = G__44289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44285),portfolio$ui$components$document$iter__44282(cljs.core.chunk_rest(s__44283__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44285),null);
}
} else {
var section = cljs.core.first(s__44283__$2);
return cljs.core.cons((function (){var G__44287 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(section);
var G__44287__$1 = (((G__44287 instanceof cljs.core.Keyword))?G__44287.fqn:null);
switch (G__44287__$1) {
case "markdown":
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(section) : portfolio.ui.components.markdown.Markdown.call(null,section));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44287__$1)].join('')));

}
})(),portfolio$ui$components$document$iter__44282(cljs.core.rest(s__44283__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(sections);
})()], null);
});
var G__44270 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.document/Document"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44269,G__44270) : dumdom.core.component.call(null,G__44269,G__44270));
})();

//# sourceMappingURL=portfolio.ui.components.document.js.map
