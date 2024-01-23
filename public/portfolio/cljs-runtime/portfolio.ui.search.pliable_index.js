goog.provide('portfolio.ui.search.pliable_index');
portfolio.ui.search.pliable_index.sep_re = /[\/\.,_\-\?!\s\n\r\(\)\[\]:]+/;
/**
 * Converts a string to a single lower case token
 */
portfolio.ui.search.pliable_index.tokenize_lower_case = (function portfolio$ui$search$pliable_index$tokenize_lower_case(s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(clojure.string.trim(s))], null);
});
/**
 * Converts a string to a single token with all combining diacritis removed: é
 *   becomes e, å becomes a, etc.
 */
portfolio.ui.search.pliable_index.remove_diacritics = (function portfolio$ui$search$pliable_index$remove_diacritics(s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(clojure.string.replace(clojure.string.trim(s).normalize("NFD"),/[\u0300-\u036f]/,""))], null);
});
/**
 * Turns strings with combining diacritics into two separate tokens: one with
 *   diacritics removed, and the original string. Strings without combining
 *   diacritics are returned as a single normalized token.
 */
portfolio.ui.search.pliable_index.duplicate_diacritics = (function portfolio$ui$search$pliable_index$duplicate_diacritics(s){
var normalized = s.normalize("NFD");
var stripped = clojure.string.replace(normalized,/[\u0300-\u036f]/,"");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stripped,normalized)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stripped,normalized], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normalized], null);
}
});
/**
 * Converts a string to a sequence of word tokens, removing punctuation.
 */
portfolio.ui.search.pliable_index.tokenize_words = (function portfolio$ui$search$pliable_index$tokenize_words(s){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,portfolio.ui.search.pliable_index.sep_re));
});
/**
 * Converts a keyword to tokens with and without keyword punctuation. Passes
 *   strings through as a single token.
 */
portfolio.ui.search.pliable_index.tokenize_keyword = (function portfolio$ui$search$pliable_index$tokenize_keyword(x){
if((x instanceof cljs.core.Keyword)){
var temp__5802__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(temp__5802__auto__)){
var ns = temp__5802__auto__;
var s = [ns,"/",cljs.core.name(x)].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.name(x),s,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.name(x)], null);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
/**
 * Converts keywords to a string token, punctuation intact. Passes strings through
 *   as a single token.
 */
portfolio.ui.search.pliable_index.stringify_keyword = (function portfolio$ui$search$pliable_index$stringify_keyword(x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45324 = x;
if((x instanceof cljs.core.Keyword)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45324);
} else {
return G__45324;
}
})()], null);
});
/**
 * Converts a string to ngram tokens. When only one number is passed, only that
 *   sized ngrams are produced, otherwise, every length ngram from `min-n` to
 *   `max-n` is produced.
 * 
 *   ```clj
 *   (tokenize-ngrams 1 2 "Hello") ;;=> ("H" "e" "l" "l" "o"
 *                                ;;    "He" "el" "ll" "lo")
 *   ```
 */
portfolio.ui.search.pliable_index.tokenize_ngrams = (function portfolio$ui$search$pliable_index$tokenize_ngrams(var_args){
var G__45326 = arguments.length;
switch (G__45326) {
case 2:
return portfolio.ui.search.pliable_index.tokenize_ngrams.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return portfolio.ui.search.pliable_index.tokenize_ngrams.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.search.pliable_index.tokenize_ngrams.cljs$core$IFn$_invoke$arity$2 = (function (n,word){
return portfolio.ui.search.pliable_index.tokenize_ngrams.cljs$core$IFn$_invoke$arity$3(n,n,word);
}));

(portfolio.ui.search.pliable_index.tokenize_ngrams.cljs$core$IFn$_invoke$arity$3 = (function (min_n,max_n,word){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function portfolio$ui$search$pliable_index$iter__45327(s__45328){
return (new cljs.core.LazySeq(null,(function (){
var s__45328__$1 = s__45328;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45328__$1);
if(temp__5804__auto__){
var s__45328__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45328__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45328__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45330 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45329 = (0);
while(true){
if((i__45329 < size__5522__auto__)){
var n = cljs.core._nth(c__5521__auto__,i__45329);
cljs.core.chunk_append(b__45330,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.partition.cljs$core$IFn$_invoke$arity$3(n,(1),word)));

var G__45406 = (i__45329 + (1));
i__45329 = G__45406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45330),portfolio$ui$search$pliable_index$iter__45327(cljs.core.chunk_rest(s__45328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45330),null);
}
} else {
var n = cljs.core.first(s__45328__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.partition.cljs$core$IFn$_invoke$arity$3(n,(1),word)),portfolio$ui$search$pliable_index$iter__45327(cljs.core.rest(s__45328__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min_n,(max_n + (1))));
})());
}));

(portfolio.ui.search.pliable_index.tokenize_ngrams.cljs$lang$maxFixedArity = 3);

/**
 * Converts a string to ngram tokens from the beginning of the string.
 *   When only one number is passed, only that sized ngrams are produced,
 *   otherwise, every length ngram from `min-n` to `max-n` is produced.
 * 
 *   ```clj
 *   (tokenize-edge-ngrams 1 5 "Hello") ;;=> ("H" "He" "Hel" "Hell" "Hello")
 *   ```
 */
portfolio.ui.search.pliable_index.tokenize_edge_ngrams = (function portfolio$ui$search$pliable_index$tokenize_edge_ngrams(var_args){
var G__45332 = arguments.length;
switch (G__45332) {
case 2:
return portfolio.ui.search.pliable_index.tokenize_edge_ngrams.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return portfolio.ui.search.pliable_index.tokenize_edge_ngrams.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.search.pliable_index.tokenize_edge_ngrams.cljs$core$IFn$_invoke$arity$2 = (function (n,word){
return portfolio.ui.search.pliable_index.tokenize_edge_ngrams.cljs$core$IFn$_invoke$arity$3(n,n,word);
}));

(portfolio.ui.search.pliable_index.tokenize_edge_ngrams.cljs$core$IFn$_invoke$arity$3 = (function (min_n,max_n,word){
var iter__5523__auto__ = (function portfolio$ui$search$pliable_index$iter__45333(s__45334){
return (new cljs.core.LazySeq(null,(function (){
var s__45334__$1 = s__45334;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45334__$1);
if(temp__5804__auto__){
var s__45334__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45334__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45334__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45336 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45335 = (0);
while(true){
if((i__45335 < size__5522__auto__)){
var n = cljs.core._nth(c__5521__auto__,i__45335);
cljs.core.chunk_append(b__45336,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,word)));

var G__45408 = (i__45335 + (1));
i__45335 = G__45408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45336),portfolio$ui$search$pliable_index$iter__45333(cljs.core.chunk_rest(s__45334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45336),null);
}
} else {
var n = cljs.core.first(s__45334__$2);
return cljs.core.cons(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,word)),portfolio$ui$search$pliable_index$iter__45333(cljs.core.rest(s__45334__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min_n,((function (){var x__5133__auto__ = max_n;
var y__5134__auto__ = cljs.core.count(word);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})() + (1))));
}));

(portfolio.ui.search.pliable_index.tokenize_edge_ngrams.cljs$lang$maxFixedArity = 3);

/**
 * Converts value `x` to tokens with the provided `tokenizers`. `tokenizers` is a
 *   seq of functions that take a single value and return a seq of tokens. The type
 *   of value `x` and the produced tokens are arbitrary and up to the user, but
 *   tokenizers must compose. Built-in tokenizers mostly only work with strings for
 *   `x` (some accept keywords) and all produce a sequence of strings.
 */
portfolio.ui.search.pliable_index.tokenize = (function portfolio$ui$search$pliable_index$tokenize(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45409 = arguments.length;
var i__5770__auto___45410 = (0);
while(true){
if((i__5770__auto___45410 < len__5769__auto___45409)){
args__5775__auto__.push((arguments[i__5770__auto___45410]));

var G__45411 = (i__5770__auto___45410 + (1));
i__5770__auto___45410 = G__45411;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.search.pliable_index.tokenize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.search.pliable_index.tokenize.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__45339){
var vec__45340 = p__45339;
var tokenizers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45340,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tokens,f){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tokens], 0));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.coll_QMARK_(x))?x:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null))),(function (){var or__5045__auto__ = tokenizers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector], null);
}
})());
}));

(portfolio.ui.search.pliable_index.tokenize.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.search.pliable_index.tokenize.cljs$lang$applyTo = (function (seq45337){
var G__45338 = cljs.core.first(seq45337);
var seq45337__$1 = cljs.core.next(seq45337);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45338,seq45337__$1);
}));

portfolio.ui.search.pliable_index.default_tokenizers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.search.pliable_index.stringify_keyword,portfolio.ui.search.pliable_index.remove_diacritics,portfolio.ui.search.pliable_index.tokenize_words], null);
portfolio.ui.search.pliable_index.get_field_syms = (function portfolio$ui$search$pliable_index$get_field_syms(field,xs){
var iter__5523__auto__ = (function portfolio$ui$search$pliable_index$get_field_syms_$_iter__45343(s__45344){
return (new cljs.core.LazySeq(null,(function (){
var s__45344__$1 = s__45344;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45344__$1);
if(temp__5804__auto__){
var s__45344__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45344__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45344__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45346 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45345 = (0);
while(true){
if((i__45345 < size__5522__auto__)){
var vec__45347 = cljs.core._nth(c__5521__auto__,i__45345);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45347,(0),null);
var weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45347,(1),null);
cljs.core.chunk_append(b__45346,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"sym","sym",-1444860305),word,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null));

var G__45412 = (i__45345 + (1));
i__45345 = G__45412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45346),portfolio$ui$search$pliable_index$get_field_syms_$_iter__45343(cljs.core.chunk_rest(s__45344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45346),null);
}
} else {
var vec__45350 = cljs.core.first(s__45344__$2);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45350,(0),null);
var weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45350,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"sym","sym",-1444860305),word,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null),portfolio$ui$search$pliable_index$get_field_syms_$_iter__45343(cljs.core.rest(s__45344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.frequencies(xs)));
});
/**
 * Index data in `doc` according to `schema` under `id` in `index`. Returns the
 *   updated index. At its simplest, the schema only specifies which keys in `doc`
 *   to include in the index:
 * 
 *   ```clj
 *   {:title {}
 * :description {}}
 *   ```
 * 
 *   This schema will use the `default-tokenizers` to index `:title` and
 *   `:description` in `:doc`. The following schema is the explicit equivalent. It
 *   names what function `:f` to apply to `doc` to extract the data to index, and
 *   what `:tokenizers` to use. The keys of the schema name the resulting field
 *   indexes - when querying you can choose to query across all fields, or name
 *   individual fields to query:
 * 
 *   ```clj
 *   {:title
 * {:f :title
 *  :tokenizers [stringify-keyword
 *               remove-diacritics
 *               tokenize-words]}
 * 
 * :description
 * {:f :description
 *  :tokenizers [stringify-keyword
 *               remove-diacritics
 *               tokenize-words]}}
 *   ```
 * 
 *   You can use schemas to index the same fields multiple times with different
 *   tokenizers:
 * 
 *   ```clj
 *   {:title
 * {:f :title
 *  :tokenizers [remove-diacritics
 *               tokenize-words]}
 * 
 * :title.ngrams
 * {:f :title
 *  :tokenizers [remove-diacritics
 *               tokenize-words
 *               (partial tokenize-ngrams 3)]}}
 *   ```
 */
portfolio.ui.search.pliable_index.index_document = (function portfolio$ui$search$pliable_index$index_document(index,schema,id,doc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (index__$1,p__45353){
var map__45354 = p__45353;
var map__45354__$1 = cljs.core.__destructure_map(map__45354);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45354__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45354__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45354__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
return cljs.core.assoc_in(index__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,sym,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null));
}),index,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__45355){
var vec__45356 = p__45355;
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45356,(0),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45356,(1),null);
var f = new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$2(config,field);
return portfolio.ui.search.pliable_index.get_field_syms(field,portfolio.ui.search.pliable_index.tokenize.cljs$core$IFn$_invoke$arity$variadic((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(doc) : f.call(null,doc)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return portfolio.ui.search.pliable_index.default_tokenizers;
}
})()], 0)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema], 0)));
});
portfolio.ui.search.pliable_index.score_term = (function portfolio$ui$search$pliable_index$score_term(index,fields,term){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45359){
var vec__45360 = p__45359;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45360,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45360,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"score","score",-1963588780),xs)),new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"score","score",-1963588780)),xs)),new cljs.core.Keyword(null,"term","term",-1817390416),term], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (field){
var iter__5523__auto__ = (function portfolio$ui$search$pliable_index$score_term_$_iter__45363(s__45364){
return (new cljs.core.LazySeq(null,(function (){
var s__45364__$1 = s__45364;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45364__$1);
if(temp__5804__auto__){
var s__45364__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45364__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45364__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45366 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45365 = (0);
while(true){
if((i__45365 < size__5522__auto__)){
var vec__45367 = cljs.core._nth(c__5521__auto__,i__45365);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45367,(0),null);
var map__45370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45367,(1),null);
var map__45370__$1 = cljs.core.__destructure_map(map__45370);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45370__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
cljs.core.chunk_append(b__45366,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"score","score",-1963588780),weight,new cljs.core.Keyword(null,"field","field",-1302436500),field], null));

var G__45413 = (i__45365 + (1));
i__45365 = G__45413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45366),portfolio$ui$search$pliable_index$score_term_$_iter__45363(cljs.core.chunk_rest(s__45364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45366),null);
}
} else {
var vec__45371 = cljs.core.first(s__45364__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45371,(0),null);
var map__45374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45371,(1),null);
var map__45374__$1 = cljs.core.__destructure_map(map__45374);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45374__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"score","score",-1963588780),weight,new cljs.core.Keyword(null,"field","field",-1302436500),field], null),portfolio$ui$search$pliable_index$score_term_$_iter__45363(cljs.core.rest(s__45364__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,term], null)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fields], 0))));
});
portfolio.ui.search.pliable_index.qualified_match_QMARK_ = (function portfolio$ui$search$pliable_index$qualified_match_QMARK_(terms,res,p__45375){
var map__45376 = p__45375;
var map__45376__$1 = cljs.core.__destructure_map(map__45376);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45376__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var min_accuracy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45376__$1,new cljs.core.Keyword(null,"min-accuracy","min-accuracy",-324212083));
return ((cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"or","or",235744169),operator);
if(and__5043__auto__){
return min_accuracy;
} else {
return and__5043__auto__;
}
})())?(min_accuracy * cljs.core.count(terms)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"or","or",235744169),operator))?(1):cljs.core.count(terms)
)) <= cljs.core.count(res));
});
portfolio.ui.search.pliable_index.match_query = (function portfolio$ui$search$pliable_index$match_query(index,p__45379){
var map__45380 = p__45379;
var map__45380__$1 = cljs.core.__destructure_map(map__45380);
var query = map__45380__$1;
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45380__$1,new cljs.core.Keyword(null,"q","q",689001697));
var boost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45380__$1,new cljs.core.Keyword(null,"boost","boost",-673419773));
var tokenizers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45380__$1,new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45380__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var fields__$1 = (function (){var or__5045__auto__ = fields;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.keys(index);
}
})();
var boost__$1 = (function (){var or__5045__auto__ = boost;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})();
var terms = portfolio.ui.search.pliable_index.tokenize.cljs$core$IFn$_invoke$arity$variadic(q,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = tokenizers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return portfolio.ui.search.pliable_index.default_tokenizers;
}
})()], 0));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45381){
var vec__45382 = p__45381;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45382,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45382,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"score","score",-1963588780),(boost__$1 * cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"score","score",-1963588780),xs))),new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function portfolio$ui$search$pliable_index$match_query_$_iter__45385(s__45386){
return (new cljs.core.LazySeq(null,(function (){
var s__45386__$1 = s__45386;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45386__$1);
if(temp__5804__auto__){
var s__45386__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45386__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45386__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45388 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45387 = (0);
while(true){
if((i__45387 < size__5522__auto__)){
var vec__45389 = cljs.core._nth(c__5521__auto__,i__45387);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45389,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45389,(1),null);
cljs.core.chunk_append(b__45388,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(boost__$1 * score)], null));

var G__45414 = (i__45387 + (1));
i__45387 = G__45414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45388),portfolio$ui$search$pliable_index$match_query_$_iter__45385(cljs.core.chunk_rest(s__45386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45388),null);
}
} else {
var vec__45392 = cljs.core.first(s__45386__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45392,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45392,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(boost__$1 * score)], null),portfolio$ui$search$pliable_index$match_query_$_iter__45385(cljs.core.rest(s__45386__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fields","fields",-1932066230),xs)));
})()),new cljs.core.Keyword(null,"terms","terms",-1556977978),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"term","term",-1817390416),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__45378_SHARP_){
return (boost__$1 * p1__45378_SHARP_);
}),new cljs.core.Keyword(null,"score","score",-1963588780))),xs))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__45395){
var vec__45396 = p__45395;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45396,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45396,(1),null);
return portfolio.ui.search.pliable_index.qualified_match_QMARK_(terms,xs,query);
}),cljs.core.group_by(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__45377_SHARP_){
return portfolio.ui.search.pliable_index.score_term(index,fields__$1,p1__45377_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([terms], 0)))));
});
/**
 * Query the index created by `index-document` with `q`. `q` is a map with two
 *   keys:
 * 
 *   - `:queries` A seq of maps defining a query (see below)
 *   - `:operator` Either `:or` or `:and` (default)
 * 
 *   Each query in `:queries` is a map of the following keys:
 * 
 *   - `:q` The query string
 *   - `:tokenizers` How to tokenize the query string before matching against
 *                indexes. Defaults to `default-tokenizers`.
 *   - `:fields` What field indexes to match against. Defaults to all fields.
 *   - `:boost` A score boost for this query.
 *   - `:operator` Either `:or` or `:and` (default). Determines whether a
 *              single token match is good enough (`:or`), or if all tokens must
 *              match (`:and`).
 *   - `:min-accuracy` When `:operator` is `:or`, this can be a number between `0`
 *                  and `1` determining the lowest acceptable success rate. `0.5`
 *                  means that at least half the tokens from `q` must match tokens
 *                  in the queried indexes
 * 
 *   Each query will possibly find some results. Results scored based on the number
 *   of matching tokens. These scores are then boosted for each individual query.
 *   The final result will be either the intersection of all sub-results (`:and`),
 *   or the union (`:or`). The final score for each document id will be calculated
 *   by summarizing individual query scores, and `query` returns a sorted seq of
 *   results, with the best scoring result first.
 * 
 *   Results are maps of:
 * 
 *   - `:id` The id of the document
 *   - `:score` The calculated total score
 *   - `:fields` A map of `{field score}` - e.g. what fields contributed to the
 *            result, and their individual scores.
 *   - `:terms` A map of `{term score}` - e.g. what terms contributed to the result,
 *           and their individual scores.
 */
portfolio.ui.search.pliable_index.query = (function portfolio$ui$search$pliable_index$query(index,q){
var res = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45399_SHARP_){
return portfolio.ui.search.pliable_index.match_query(index,p1__45399_SHARP_);
}),new cljs.core.Keyword(null,"queries","queries",1446291995).cljs$core$IFn$_invoke$arity$1(q));
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45400_SHARP_){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),p1__45400_SHARP_));
}),res);
var res_ids = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(q)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,ids):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,ids));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45401){
var vec__45402 = p__45401;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45402,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45402,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"score","score",-1963588780),xs)),new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fields","fields",-1932066230),xs)),new cljs.core.Keyword(null,"terms","terms",-1556977978),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"terms","terms",-1556977978),xs))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(res_ids,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,res))));
});

//# sourceMappingURL=portfolio.ui.search.pliable_index.js.map
