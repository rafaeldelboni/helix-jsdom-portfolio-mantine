goog.provide('portfolio.ui.components.error');
/**
 * 
 */
portfolio.ui.components.error.Error = (function (){var G__44856 = (function (p__44858){
var map__44859 = p__44858;
var map__44859__$1 = cljs.core.__destructure_map(map__44859);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44859__$1,new cljs.core.Keyword(null,"title","title",636505583));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44859__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44859__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44859__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1.error","h1.h1.error",-1200773667),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mod","div.mod",1944996142),(function (){var G__44860 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),message], null);
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(G__44860) : portfolio.ui.components.markdown.Markdown.call(null,G__44860));
})()], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$error$iter__44861(s__44862){
return (new cljs.core.LazySeq(null,(function (){
var s__44862__$1 = s__44862;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44862__$1);
if(temp__5804__auto__){
var s__44862__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44862__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44862__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44864 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44863 = (0);
while(true){
if((i__44863 < size__5522__auto__)){
var map__44865 = cljs.core._nth(c__5521__auto__,i__44863);
var map__44865__$1 = cljs.core.__destructure_map(map__44865);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44865__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44865__$1,new cljs.core.Keyword(null,"data","data",-232669377));
cljs.core.chunk_append(b__44864,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vs-s.mod","div.vs-s.mod",-2084413467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h3.mod","h2.h3.mod",-1804883470),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mod","p.mod",441848325),(function (){var G__44866 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),data__$1], null);
return (portfolio.ui.components.code.Code.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.code.Code.cljs$core$IFn$_invoke$arity$1(G__44866) : portfolio.ui.components.code.Code.call(null,G__44866));
})()], null)], null));

var G__44869 = (i__44863 + (1));
i__44863 = G__44869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44864),portfolio$ui$components$error$iter__44861(cljs.core.chunk_rest(s__44862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44864),null);
}
} else {
var map__44867 = cljs.core.first(s__44862__$2);
var map__44867__$1 = cljs.core.__destructure_map(map__44867);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44867__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44867__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vs-s.mod","div.vs-s.mod",-2084413467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h3.mod","h2.h3.mod",-1804883470),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mod","p.mod",441848325),(function (){var G__44868 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),data__$1], null);
return (portfolio.ui.components.code.Code.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.code.Code.cljs$core$IFn$_invoke$arity$1(G__44868) : portfolio.ui.components.code.Code.call(null,G__44868));
})()], null)], null),portfolio$ui$components$error$iter__44861(cljs.core.rest(s__44862__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,data));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),stack], null)], null)], null);
});
var G__44857 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.error/Error"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44856,G__44857) : dumdom.core.component.call(null,G__44856,G__44857));
})();

//# sourceMappingURL=portfolio.ui.components.error.js.map
