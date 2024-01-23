goog.provide('portfolio.ui.components.markdown');
portfolio.ui.components.markdown.langs = new cljs.core.PersistentArrayMap(null, 2, ["clj","clojure","cljs","clojure"], null);
portfolio.ui.components.markdown.autolink = (function portfolio$ui$components$markdown$autolink(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var iter__5523__auto__ = (function portfolio$ui$components$markdown$autolink_$_iter__44223(s__44224){
return (new cljs.core.LazySeq(null,(function (){
var s__44224__$1 = s__44224;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44224__$1);
if(temp__5804__auto__){
var s__44224__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44224__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44224__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44226 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44225 = (0);
while(true){
if((i__44225 < size__5522__auto__)){
var w = cljs.core._nth(c__5521__auto__,i__44225);
cljs.core.chunk_append(b__44226,(cljs.core.truth_(cljs.core.re_find(/^https?:\/\/[^\s]+$/,w))?["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"](",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),")"].join(''):w));

var G__44262 = (i__44225 + (1));
i__44225 = G__44262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44226),portfolio$ui$components$markdown$autolink_$_iter__44223(cljs.core.chunk_rest(s__44224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44226),null);
}
} else {
var w = cljs.core.first(s__44224__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.re_find(/^https?:\/\/[^\s]+$/,w))?["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"](",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),")"].join(''):w),portfolio$ui$components$markdown$autolink_$_iter__44223(cljs.core.rest(s__44224__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/ /));
})());
});
portfolio.ui.components.markdown.space_lists = (function portfolio$ui$components$markdown$space_lists(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44231_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",p1__44231_SHARP_);
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__44230_SHARP_){
return cljs.core.boolean$(cljs.core.re_find(/^(-|\d+\.) /,p1__44230_SHARP_));
}),clojure.string.split_lines(s))));
});
/**
 * Removes line breaks in brackets, which causes markdown-clj to not recognize
 *   them as links.
 */
portfolio.ui.components.markdown.unbreak_links = (function portfolio$ui$components$markdown$unbreak_links(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function portfolio$ui$components$markdown$unbreak_links_$_iter__44232(s__44233){
return (new cljs.core.LazySeq(null,(function (){
var s__44233__$1 = s__44233;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44233__$1);
if(temp__5804__auto__){
var s__44233__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44233__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44233__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44235 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44234 = (0);
while(true){
if((i__44234 < size__5522__auto__)){
var vec__44236 = cljs.core._nth(c__5521__auto__,i__44234);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44236,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44236,(1),null);
cljs.core.chunk_append(b__44235,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),(function (){var G__44240 = link;
if((G__44240 == null)){
return null;
} else {
return clojure.string.replace(G__44240,/\n/," ");
}
})()].join(''));

var G__44263 = (i__44234 + (1));
i__44234 = G__44263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44235),portfolio$ui$components$markdown$unbreak_links_$_iter__44232(cljs.core.chunk_rest(s__44233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44235),null);
}
} else {
var vec__44241 = cljs.core.first(s__44233__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44241,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44241,(1),null);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),(function (){var G__44245 = link;
if((G__44245 == null)){
return null;
} else {
return clojure.string.replace(G__44245,/\n/," ");
}
})()].join(''),portfolio$ui$components$markdown$unbreak_links_$_iter__44232(cljs.core.rest(s__44233__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/(\[[^\]]+\]\([^\)]+\))/)));
})());
});
portfolio.ui.components.markdown.render_markdown = (function portfolio$ui$components$markdown$render_markdown(s){
return markdown.core.md__GT_html(portfolio.ui.components.markdown.unbreak_links(portfolio.ui.components.markdown.autolink(portfolio.ui.components.markdown.space_lists(s))));
});
/**
 * 
 */
portfolio.ui.components.markdown.Markdown = (function (){var G__44246 = (function (p__44248){
var map__44249 = p__44248;
var map__44249__$1 = cljs.core.__destructure_map(map__44249);
var markdown__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44249__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.md","div.md",1540365753),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),portfolio.ui.components.markdown.render_markdown(markdown__$1)], null)], null)], null);
});
var G__44247 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.markdown/Markdown",new cljs.core.Keyword(null,"on-render","on-render",2096729391),(function (el,props){
var seq__44250 = cljs.core.seq(el.querySelectorAll("pre"));
var chunk__44251 = null;
var count__44252 = (0);
var i__44253 = (0);
while(true){
if((i__44253 < count__44252)){
var pre = chunk__44251.cljs$core$IIndexed$_nth$arity$2(null,i__44253);
var code_44264 = pre.firstElementChild;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("CODE",code_44264.tagName)){
(pre.className = ["language-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = (function (){var G__44259 = code_44264.className;
return (portfolio.ui.components.markdown.langs.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.langs.cljs$core$IFn$_invoke$arity$1(G__44259) : portfolio.ui.components.markdown.langs.call(null,G__44259));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return code_44264.className;
}
})())].join(''));

Prism.highlightElement(pre);
} else {
}


var G__44265 = seq__44250;
var G__44266 = chunk__44251;
var G__44267 = count__44252;
var G__44268 = (i__44253 + (1));
seq__44250 = G__44265;
chunk__44251 = G__44266;
count__44252 = G__44267;
i__44253 = G__44268;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44250);
if(temp__5804__auto__){
var seq__44250__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44250__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44250__$1);
var G__44271 = cljs.core.chunk_rest(seq__44250__$1);
var G__44272 = c__5568__auto__;
var G__44273 = cljs.core.count(c__5568__auto__);
var G__44274 = (0);
seq__44250 = G__44271;
chunk__44251 = G__44272;
count__44252 = G__44273;
i__44253 = G__44274;
continue;
} else {
var pre = cljs.core.first(seq__44250__$1);
var code_44276 = pre.firstElementChild;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("CODE",code_44276.tagName)){
(pre.className = ["language-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = (function (){var G__44261 = code_44276.className;
return (portfolio.ui.components.markdown.langs.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.langs.cljs$core$IFn$_invoke$arity$1(G__44261) : portfolio.ui.components.markdown.langs.call(null,G__44261));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return code_44276.className;
}
})())].join(''));

Prism.highlightElement(pre);
} else {
}


var G__44278 = cljs.core.next(seq__44250__$1);
var G__44279 = null;
var G__44280 = (0);
var G__44281 = (0);
seq__44250 = G__44278;
chunk__44251 = G__44279;
count__44252 = G__44280;
i__44253 = G__44281;
continue;
}
} else {
return null;
}
}
break;
}
})], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44246,G__44247) : dumdom.core.component.call(null,G__44246,G__44247));
})();

//# sourceMappingURL=portfolio.ui.components.markdown.js.map
