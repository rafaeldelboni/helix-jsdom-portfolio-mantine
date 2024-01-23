goog.provide('portfolio.ui.search');
portfolio.ui.search.get_diff_keys = (function portfolio$ui$search$get_diff_keys(m1,m2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__45415){
var vec__45416 = p__45415;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45416,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45416,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((m2.cljs$core$IFn$_invoke$arity$1 ? m2.cljs$core$IFn$_invoke$arity$1(k) : m2.call(null,k)),v);
}),m1));
});
portfolio.ui.search.get_diffables = (function portfolio$ui$search$get_diffables(f,xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45419){
var vec__45420 = p__45419;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45420,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45420,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.ifn_QMARK_(f))?(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)):v)], null);
}),xs));
});
portfolio.ui.search.indexable_QMARK_ = (function portfolio$ui$search$indexable_QMARK_(x){
return (((!(cljs.core.fn_QMARK_(x)))) && ((!((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x))))));
});
portfolio.ui.search.__GT_indexable = (function portfolio$ui$search$__GT_indexable(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(portfolio.ui.search.indexable_QMARK_,cljs.core.second),x));
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(portfolio.ui.search.indexable_QMARK_,x);
} else {
if(portfolio.ui.search.indexable_QMARK_(x)){
return x;
} else {
return null;
}

}
}
});
portfolio.ui.search.get_indexable_data = (function portfolio$ui$search$get_indexable_data(x){
var res = portfolio.ui.search.__GT_indexable(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)], 0)));
if(cljs.core.map_QMARK_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword(null,"params","params",710516235),portfolio.ui.search.__GT_indexable);
} else {
if(cljs.core.coll_QMARK_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword(null,"params","params",710516235),portfolio.ui.search.__GT_indexable);
} else {
return res;

}
}
});
portfolio.ui.search.get_params_data = (function portfolio$ui$search$get_params_data(scene){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45424_SHARP_){
return ((typeof p1__45424_SHARP_ === 'string') || ((p1__45424_SHARP_ instanceof cljs.core.Keyword)));
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.identity,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene)));
});
portfolio.ui.search.ngram_tokenizers = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.search.pliable_index.stringify_keyword,portfolio.ui.search.pliable_index.remove_diacritics,portfolio.ui.search.pliable_index.tokenize_words,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(portfolio.ui.search.pliable_index.tokenize_ngrams,(2),(3))], null);
portfolio.ui.search.prefix_tokenizers = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.search.pliable_index.stringify_keyword,portfolio.ui.search.pliable_index.remove_diacritics,portfolio.ui.search.pliable_index.tokenize_words,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(portfolio.ui.search.pliable_index.tokenize_edge_ngrams,(2),(10))], null);
portfolio.ui.search.index_scene = (function portfolio$ui$search$index_scene(index,scene){
return portfolio.ui.search.pliable_index.index_document(index,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"title.ngram","title.ngram",2111064370),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526),portfolio.ui.search.ngram_tokenizers], null),new cljs.core.Keyword(null,"title.prefix","title.prefix",-78490959),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526),portfolio.ui.search.prefix_tokenizers], null),new cljs.core.Keyword(null,"docs","docs",-1974280502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"docs.ngram","docs.ngram",-1250889003),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"docs","docs",-1974280502),new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526),portfolio.ui.search.ngram_tokenizers], null),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params-data","params-data",350240670),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),portfolio.ui.search.get_params_data], null)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene),scene);
});
portfolio.ui.search.search = (function portfolio$ui$search$search(index,q){
return portfolio.ui.search.pliable_index.query(index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"q","q",689001697),q,new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"boost","boost",-673419773),(3)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"q","q",689001697),q,new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526),portfolio.ui.search.prefix_tokenizers,new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title.prefix","title.prefix",-78490959),null], null), null),new cljs.core.Keyword(null,"boost","boost",-673419773),(2)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"q","q",689001697),q,new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526),portfolio.ui.search.ngram_tokenizers,new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title.ngram","title.ngram",2111064370),null,new cljs.core.Keyword(null,"docs.ngram","docs.ngram",-1250889003),null], null), null),new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"min-accuracy","min-accuracy",-324212083),0.5], null)], null)], null));
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {portfolio.ui.search.protocols.Index}
 * @implements {cljs.core.IWithMeta}
*/
portfolio.ui.search.t_portfolio$ui$search45425 = (function (index,meta45426){
this.index = index;
this.meta45426 = meta45426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(portfolio.ui.search.t_portfolio$ui$search45425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45427,meta45426__$1){
var self__ = this;
var _45427__$1 = this;
return (new portfolio.ui.search.t_portfolio$ui$search45425(self__.index,meta45426__$1));
}));

(portfolio.ui.search.t_portfolio$ui$search45425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45427){
var self__ = this;
var _45427__$1 = this;
return self__.meta45426;
}));

(portfolio.ui.search.t_portfolio$ui$search45425.prototype.portfolio$ui$search$protocols$Index$ = cljs.core.PROTOCOL_SENTINEL);

(portfolio.ui.search.t_portfolio$ui$search45425.prototype.portfolio$ui$search$protocols$Index$index$arity$2 = (function (_,doc){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.index,portfolio.ui.search.index_scene,doc);
}));

(portfolio.ui.search.t_portfolio$ui$search45425.prototype.portfolio$ui$search$protocols$Index$query$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
return portfolio.ui.search.search(cljs.core.deref(self__.index),q);
}));

(portfolio.ui.search.t_portfolio$ui$search45425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta45426","meta45426",2121217556,null)], null);
}));

(portfolio.ui.search.t_portfolio$ui$search45425.cljs$lang$type = true);

(portfolio.ui.search.t_portfolio$ui$search45425.cljs$lang$ctorStr = "portfolio.ui.search/t_portfolio$ui$search45425");

(portfolio.ui.search.t_portfolio$ui$search45425.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"portfolio.ui.search/t_portfolio$ui$search45425");
}));

/**
 * Positional factory function for portfolio.ui.search/t_portfolio$ui$search45425.
 */
portfolio.ui.search.__GT_t_portfolio$ui$search45425 = (function portfolio$ui$search$__GT_t_portfolio$ui$search45425(index,meta45426){
return (new portfolio.ui.search.t_portfolio$ui$search45425(index,meta45426));
});


portfolio.ui.search.create_index = (function portfolio$ui$search$create_index(){
var index = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (new portfolio.ui.search.t_portfolio$ui$search45425(index,cljs.core.PersistentArrayMap.EMPTY));
});
portfolio.ui.search.prepare_result = (function portfolio$ui$search$prepare_result(state,location,result){
var doc = portfolio.ui.collection.by_id(state,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(result));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(doc),new cljs.core.Keyword(null,"illustration","illustration",-48860973),portfolio.ui.collection.get_illustration(doc,state),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),portfolio.ui.routes.get_location(location,doc)], null)], null)], null);
});
portfolio.ui.search.prepare_search = (function portfolio$ui$search$prepare_search(state,location){
var q = cljs.core.not_empty(new cljs.core.Keyword("search","query","search/query",1830322034).cljs$core$IFn$_invoke$arity$1(state));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","magnifying-glass","phosphor.regular/magnifying-glass",674482561),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cx","cx",1272694324),"112",new cljs.core.Keyword(null,"cy","cy",755331060),"112",new cljs.core.Keyword(null,"r","r",-471384190),"80",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["currentColor","none","round","168.57","round","16","168.57","224","224"])], null)], null));

return new cljs.core.Keyword("phosphor.regular","magnifying-glass","phosphor.regular/magnifying-glass",674482561);
})()
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search",new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword("search","query","search/query",1830322034).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"on-input","on-input",-267523366),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","query","search/query",1830322034)], null),new cljs.core.Keyword("event.target","value","event.target/value",857030372)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword("event.target","value","event.target/value",857030372)], null)], null)),new cljs.core.Keyword(null,"action","action",-811238024),(cljs.core.truth_(q)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","x","phosphor.regular/x",1900447382),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"200",new cljs.core.Keyword(null,"y1","y1",589123466),"56",new cljs.core.Keyword(null,"x2","x2",-1362513475),"56",new cljs.core.Keyword(null,"y2","y2",-718691301),"200",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"200",new cljs.core.Keyword(null,"y1","y1",589123466),"200",new cljs.core.Keyword(null,"x2","x2",-1362513475),"56",new cljs.core.Keyword(null,"y2","y2",-718691301),"56",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","x","phosphor.regular/x",1900447382);
})()
,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","query","search/query",1830322034)], null),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","suggestions","search/suggestions",-1296554258)], null),null], null)], null)], null):null),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),(function (){var iter__5523__auto__ = (function portfolio$ui$search$prepare_search_$_iter__45428(s__45429){
return (new cljs.core.LazySeq(null,(function (){
var s__45429__$1 = s__45429;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45429__$1);
if(temp__5804__auto__){
var s__45429__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45429__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45429__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45431 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45430 = (0);
while(true){
if((i__45430 < size__5522__auto__)){
var result = cljs.core._nth(c__5521__auto__,i__45430);
cljs.core.chunk_append(b__45431,(((function (){var G__45432 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state);
if((!((G__45432 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__45432.portfolio$ui$search$protocols$SearchResult$)))){
return true;
} else {
if((!G__45432.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(portfolio.ui.search.protocols.SearchResult,G__45432);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(portfolio.ui.search.protocols.SearchResult,G__45432);
}
})())?portfolio.ui.search.protocols.prepare_result(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state),state,location,result):portfolio.ui.search.prepare_result(state,location,result)));

var G__45436 = (i__45430 + (1));
i__45430 = G__45436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45431),portfolio$ui$search$prepare_search_$_iter__45428(cljs.core.chunk_rest(s__45429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45431),null);
}
} else {
var result = cljs.core.first(s__45429__$2);
return cljs.core.cons((((function (){var G__45433 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state);
if((!((G__45433 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__45433.portfolio$ui$search$protocols$SearchResult$)))){
return true;
} else {
if((!G__45433.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(portfolio.ui.search.protocols.SearchResult,G__45433);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(portfolio.ui.search.protocols.SearchResult,G__45433);
}
})())?portfolio.ui.search.protocols.prepare_result(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state),state,location,result):portfolio.ui.search.prepare_result(state,location,result)),portfolio$ui$search$prepare_search_$_iter__45428(cljs.core.rest(s__45429__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((6),new cljs.core.Keyword("search","suggestions","search/suggestions",-1296554258).cljs$core$IFn$_invoke$arity$1(state)));
})()], null);
});

//# sourceMappingURL=portfolio.ui.search.js.map
