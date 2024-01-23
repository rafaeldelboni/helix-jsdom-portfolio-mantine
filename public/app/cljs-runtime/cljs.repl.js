goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40157){
var map__40163 = p__40157;
var map__40163__$1 = cljs.core.__destructure_map(map__40163);
var m = map__40163__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40163__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40163__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40167_40484 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40168_40485 = null;
var count__40169_40486 = (0);
var i__40170_40487 = (0);
while(true){
if((i__40170_40487 < count__40169_40486)){
var f_40488 = chunk__40168_40485.cljs$core$IIndexed$_nth$arity$2(null,i__40170_40487);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40488], 0));


var G__40489 = seq__40167_40484;
var G__40490 = chunk__40168_40485;
var G__40491 = count__40169_40486;
var G__40492 = (i__40170_40487 + (1));
seq__40167_40484 = G__40489;
chunk__40168_40485 = G__40490;
count__40169_40486 = G__40491;
i__40170_40487 = G__40492;
continue;
} else {
var temp__5804__auto___40493 = cljs.core.seq(seq__40167_40484);
if(temp__5804__auto___40493){
var seq__40167_40494__$1 = temp__5804__auto___40493;
if(cljs.core.chunked_seq_QMARK_(seq__40167_40494__$1)){
var c__5568__auto___40495 = cljs.core.chunk_first(seq__40167_40494__$1);
var G__40496 = cljs.core.chunk_rest(seq__40167_40494__$1);
var G__40497 = c__5568__auto___40495;
var G__40498 = cljs.core.count(c__5568__auto___40495);
var G__40499 = (0);
seq__40167_40484 = G__40496;
chunk__40168_40485 = G__40497;
count__40169_40486 = G__40498;
i__40170_40487 = G__40499;
continue;
} else {
var f_40504 = cljs.core.first(seq__40167_40494__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40504], 0));


var G__40505 = cljs.core.next(seq__40167_40494__$1);
var G__40506 = null;
var G__40507 = (0);
var G__40508 = (0);
seq__40167_40484 = G__40505;
chunk__40168_40485 = G__40506;
count__40169_40486 = G__40507;
i__40170_40487 = G__40508;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40509 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40509], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40509)))?cljs.core.second(arglists_40509):arglists_40509)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40191_40515 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40192_40516 = null;
var count__40193_40517 = (0);
var i__40194_40518 = (0);
while(true){
if((i__40194_40518 < count__40193_40517)){
var vec__40206_40519 = chunk__40192_40516.cljs$core$IIndexed$_nth$arity$2(null,i__40194_40518);
var name_40520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40519,(0),null);
var map__40209_40521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40519,(1),null);
var map__40209_40522__$1 = cljs.core.__destructure_map(map__40209_40521);
var doc_40523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40209_40522__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40209_40522__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40520], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40524], 0));

if(cljs.core.truth_(doc_40523)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40523], 0));
} else {
}


var G__40526 = seq__40191_40515;
var G__40527 = chunk__40192_40516;
var G__40528 = count__40193_40517;
var G__40529 = (i__40194_40518 + (1));
seq__40191_40515 = G__40526;
chunk__40192_40516 = G__40527;
count__40193_40517 = G__40528;
i__40194_40518 = G__40529;
continue;
} else {
var temp__5804__auto___40530 = cljs.core.seq(seq__40191_40515);
if(temp__5804__auto___40530){
var seq__40191_40531__$1 = temp__5804__auto___40530;
if(cljs.core.chunked_seq_QMARK_(seq__40191_40531__$1)){
var c__5568__auto___40532 = cljs.core.chunk_first(seq__40191_40531__$1);
var G__40533 = cljs.core.chunk_rest(seq__40191_40531__$1);
var G__40534 = c__5568__auto___40532;
var G__40535 = cljs.core.count(c__5568__auto___40532);
var G__40536 = (0);
seq__40191_40515 = G__40533;
chunk__40192_40516 = G__40534;
count__40193_40517 = G__40535;
i__40194_40518 = G__40536;
continue;
} else {
var vec__40231_40537 = cljs.core.first(seq__40191_40531__$1);
var name_40538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40231_40537,(0),null);
var map__40234_40539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40231_40537,(1),null);
var map__40234_40540__$1 = cljs.core.__destructure_map(map__40234_40539);
var doc_40541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40234_40540__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40234_40540__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40538], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40542], 0));

if(cljs.core.truth_(doc_40541)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40541], 0));
} else {
}


var G__40543 = cljs.core.next(seq__40191_40531__$1);
var G__40544 = null;
var G__40545 = (0);
var G__40546 = (0);
seq__40191_40515 = G__40543;
chunk__40192_40516 = G__40544;
count__40193_40517 = G__40545;
i__40194_40518 = G__40546;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40256 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40257 = null;
var count__40258 = (0);
var i__40259 = (0);
while(true){
if((i__40259 < count__40258)){
var role = chunk__40257.cljs$core$IIndexed$_nth$arity$2(null,i__40259);
var temp__5804__auto___40547__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___40547__$1)){
var spec_40548 = temp__5804__auto___40547__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40548)], 0));
} else {
}


var G__40551 = seq__40256;
var G__40552 = chunk__40257;
var G__40553 = count__40258;
var G__40554 = (i__40259 + (1));
seq__40256 = G__40551;
chunk__40257 = G__40552;
count__40258 = G__40553;
i__40259 = G__40554;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__40256);
if(temp__5804__auto____$1){
var seq__40256__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40256__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40256__$1);
var G__40560 = cljs.core.chunk_rest(seq__40256__$1);
var G__40561 = c__5568__auto__;
var G__40562 = cljs.core.count(c__5568__auto__);
var G__40563 = (0);
seq__40256 = G__40560;
chunk__40257 = G__40561;
count__40258 = G__40562;
i__40259 = G__40563;
continue;
} else {
var role = cljs.core.first(seq__40256__$1);
var temp__5804__auto___40564__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___40564__$2)){
var spec_40565 = temp__5804__auto___40564__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40565)], 0));
} else {
}


var G__40566 = cljs.core.next(seq__40256__$1);
var G__40567 = null;
var G__40568 = (0);
var G__40569 = (0);
seq__40256 = G__40566;
chunk__40257 = G__40567;
count__40258 = G__40568;
i__40259 = G__40569;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40570 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40571 = cljs.core.ex_cause(t);
via = G__40570;
t = G__40571;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40375 = datafied_throwable;
var map__40375__$1 = cljs.core.__destructure_map(map__40375);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40375__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40375__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40375__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40376 = cljs.core.last(via);
var map__40376__$1 = cljs.core.__destructure_map(map__40376);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40377 = data;
var map__40377__$1 = cljs.core.__destructure_map(map__40377);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40377__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40377__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40377__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40378 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40378__$1 = cljs.core.__destructure_map(map__40378);
var top_data = map__40378__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40378__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40388 = phase;
var G__40388__$1 = (((G__40388 instanceof cljs.core.Keyword))?G__40388.fqn:null);
switch (G__40388__$1) {
case "read-source":
var map__40389 = data;
var map__40389__$1 = cljs.core.__destructure_map(map__40389);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40389__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40389__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40390 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40390__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40390,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40390);
var G__40390__$2 = (cljs.core.truth_((function (){var fexpr__40395 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40395.cljs$core$IFn$_invoke$arity$1 ? fexpr__40395.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40395.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40390__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40390__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40390__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40390__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40396 = top_data;
var G__40396__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40396,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40396);
var G__40396__$2 = (cljs.core.truth_((function (){var fexpr__40397 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40397.cljs$core$IFn$_invoke$arity$1 ? fexpr__40397.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40397.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40396__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40396__$1);
var G__40396__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40396__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40396__$2);
var G__40396__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40396__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40396__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40396__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40396__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40398 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40398,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40398,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40398,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40398,(3),null);
var G__40401 = top_data;
var G__40401__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40401,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40401);
var G__40401__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40401__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40401__$1);
var G__40401__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40401__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40401__$2);
var G__40401__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40401__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40401__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40401__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40401__$4;
}

break;
case "execution":
var vec__40406 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40406,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40406,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40406,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40406,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40372_SHARP_){
var or__5045__auto__ = (p1__40372_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__40410 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40410.cljs$core$IFn$_invoke$arity$1 ? fexpr__40410.cljs$core$IFn$_invoke$arity$1(p1__40372_SHARP_) : fexpr__40410.call(null,p1__40372_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__40411 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40411__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40411,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40411);
var G__40411__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40411__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40411__$1);
var G__40411__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40411__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40411__$2);
var G__40411__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40411__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40411__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40411__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40411__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40388__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40422){
var map__40423 = p__40422;
var map__40423__$1 = cljs.core.__destructure_map(map__40423);
var triage_data = map__40423__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40424 = phase;
var G__40424__$1 = (((G__40424 instanceof cljs.core.Keyword))?G__40424.fqn:null);
switch (G__40424__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40425 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40426 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40427 = loc;
var G__40428 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40429_40611 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40430_40612 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40431_40613 = true;
var _STAR_print_fn_STAR__temp_val__40432_40614 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40431_40613);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40432_40614);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40415_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40415_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40430_40612);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40429_40611);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40425,G__40426,G__40427,G__40428) : format.call(null,G__40425,G__40426,G__40427,G__40428));

break;
case "macroexpansion":
var G__40433 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40434 = cause_type;
var G__40435 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40436 = loc;
var G__40437 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40433,G__40434,G__40435,G__40436,G__40437) : format.call(null,G__40433,G__40434,G__40435,G__40436,G__40437));

break;
case "compile-syntax-check":
var G__40447 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40448 = cause_type;
var G__40449 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40450 = loc;
var G__40451 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40447,G__40448,G__40449,G__40450,G__40451) : format.call(null,G__40447,G__40448,G__40449,G__40450,G__40451));

break;
case "compilation":
var G__40452 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40453 = cause_type;
var G__40454 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40455 = loc;
var G__40456 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40452,G__40453,G__40454,G__40455,G__40456) : format.call(null,G__40452,G__40453,G__40454,G__40455,G__40456));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40459 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40460 = symbol;
var G__40461 = loc;
var G__40462 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40463_40622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40464_40623 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40465_40624 = true;
var _STAR_print_fn_STAR__temp_val__40466_40625 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40465_40624);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40466_40625);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40421_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40421_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40464_40623);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40463_40622);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40459,G__40460,G__40461,G__40462) : format.call(null,G__40459,G__40460,G__40461,G__40462));
} else {
var G__40472 = "Execution error%s at %s(%s).\n%s\n";
var G__40473 = cause_type;
var G__40474 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40475 = loc;
var G__40476 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40472,G__40473,G__40474,G__40475,G__40476) : format.call(null,G__40472,G__40473,G__40474,G__40475,G__40476));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40424__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
