goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__44096){
var map__44097 = p__44096;
var map__44097__$1 = cljs.core.__destructure_map(map__44097);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44097__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44097__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44097__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__44098 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__44099 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__44099);

try{var vec__44100 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__44103,transformer){
var vec__44104 = p__44103;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44104,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44104,(1),null);
var G__44107 = text;
var G__44108 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__44107,G__44108) : transformer.call(null,G__44107,G__44108));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44100,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44100,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__44098);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44148 = arguments.length;
var i__5770__auto___44149 = (0);
while(true){
if((i__5770__auto___44149 < len__5769__auto___44148)){
args__5775__auto__.push((arguments[i__5770__auto___44149]));

var G__44150 = (i__5770__auto___44149 + (1));
i__5770__auto___44149 = G__44150;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq44109){
var G__44110 = cljs.core.first(seq44109);
var seq44109__$1 = cljs.core.next(seq44109);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44110,seq44109__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__44111_44151 = cljs.core.seq(lines);
var chunk__44112_44152 = null;
var count__44113_44153 = (0);
var i__44114_44154 = (0);
while(true){
if((i__44114_44154 < count__44113_44153)){
var line_44155 = chunk__44112_44152.cljs$core$IIndexed$_nth$arity$2(null,i__44114_44154);
markdown.links.parse_reference_link(line_44155,references);


var G__44156 = seq__44111_44151;
var G__44157 = chunk__44112_44152;
var G__44158 = count__44113_44153;
var G__44159 = (i__44114_44154 + (1));
seq__44111_44151 = G__44156;
chunk__44112_44152 = G__44157;
count__44113_44153 = G__44158;
i__44114_44154 = G__44159;
continue;
} else {
var temp__5804__auto___44160 = cljs.core.seq(seq__44111_44151);
if(temp__5804__auto___44160){
var seq__44111_44161__$1 = temp__5804__auto___44160;
if(cljs.core.chunked_seq_QMARK_(seq__44111_44161__$1)){
var c__5568__auto___44162 = cljs.core.chunk_first(seq__44111_44161__$1);
var G__44163 = cljs.core.chunk_rest(seq__44111_44161__$1);
var G__44164 = c__5568__auto___44162;
var G__44165 = cljs.core.count(c__5568__auto___44162);
var G__44166 = (0);
seq__44111_44151 = G__44163;
chunk__44112_44152 = G__44164;
count__44113_44153 = G__44165;
i__44114_44154 = G__44166;
continue;
} else {
var line_44167 = cljs.core.first(seq__44111_44161__$1);
markdown.links.parse_reference_link(line_44167,references);


var G__44168 = cljs.core.next(seq__44111_44161__$1);
var G__44169 = null;
var G__44170 = (0);
var G__44171 = (0);
seq__44111_44151 = G__44168;
chunk__44112_44152 = G__44169;
count__44113_44153 = G__44170;
i__44114_44154 = G__44171;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__44115_44172 = cljs.core.seq(lines);
var chunk__44116_44173 = null;
var count__44117_44174 = (0);
var i__44118_44175 = (0);
while(true){
if((i__44118_44175 < count__44117_44174)){
var line_44176 = chunk__44116_44173.cljs$core$IIndexed$_nth$arity$2(null,i__44118_44175);
markdown.links.parse_footnote_link(line_44176,footnotes);


var G__44177 = seq__44115_44172;
var G__44178 = chunk__44116_44173;
var G__44179 = count__44117_44174;
var G__44180 = (i__44118_44175 + (1));
seq__44115_44172 = G__44177;
chunk__44116_44173 = G__44178;
count__44117_44174 = G__44179;
i__44118_44175 = G__44180;
continue;
} else {
var temp__5804__auto___44181 = cljs.core.seq(seq__44115_44172);
if(temp__5804__auto___44181){
var seq__44115_44182__$1 = temp__5804__auto___44181;
if(cljs.core.chunked_seq_QMARK_(seq__44115_44182__$1)){
var c__5568__auto___44183 = cljs.core.chunk_first(seq__44115_44182__$1);
var G__44184 = cljs.core.chunk_rest(seq__44115_44182__$1);
var G__44185 = c__5568__auto___44183;
var G__44186 = cljs.core.count(c__5568__auto___44183);
var G__44187 = (0);
seq__44115_44172 = G__44184;
chunk__44116_44173 = G__44185;
count__44117_44174 = G__44186;
i__44118_44175 = G__44187;
continue;
} else {
var line_44188 = cljs.core.first(seq__44115_44182__$1);
markdown.links.parse_footnote_link(line_44188,footnotes);


var G__44189 = cljs.core.next(seq__44115_44182__$1);
var G__44190 = null;
var G__44191 = (0);
var G__44192 = (0);
seq__44115_44172 = G__44189;
chunk__44116_44173 = G__44190;
count__44117_44174 = G__44191;
i__44118_44175 = G__44192;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__44119 = markdown.transformers.parse_metadata_headers(lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44119,(0),null);
var num_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44119,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__44122 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__44123 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__44124 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__44125 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__44124);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__44125);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__44126 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44126,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44126,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__44132_44193 = lines__$1;
var vec__44133_44194 = G__44132_44193;
var seq__44134_44195 = cljs.core.seq(vec__44133_44194);
var first__44135_44196 = cljs.core.first(seq__44134_44195);
var seq__44134_44197__$1 = cljs.core.next(seq__44134_44195);
var line_44198 = first__44135_44196;
var more_44199 = seq__44134_44197__$1;
var state_44200 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__44132_44201__$1 = G__44132_44193;
var state_44202__$1 = state_44200;
while(true){
var vec__44139_44203 = G__44132_44201__$1;
var seq__44140_44204 = cljs.core.seq(vec__44139_44203);
var first__44141_44205 = cljs.core.first(seq__44140_44204);
var seq__44140_44206__$1 = cljs.core.next(seq__44140_44204);
var line_44207__$1 = first__44141_44205;
var more_44208__$1 = seq__44140_44206__$1;
var state_44209__$2 = state_44202__$1;
var line_44210__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_44209__$2))?"":line_44207__$1);
var state_44211__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_44209__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_44209__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_44209__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_44209__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_44209__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_44208__$1))){
var G__44212 = more_44208__$1;
var G__44213 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_44210__$2,cljs.core.first(more_44208__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_44211__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_44210__$2.trim()));
G__44132_44201__$1 = G__44212;
state_44202__$1 = G__44213;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_44211__$3))),line_44210__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_44211__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__44123);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__44122);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44214 = arguments.length;
var i__5770__auto___44215 = (0);
while(true){
if((i__5770__auto___44215 < len__5769__auto___44214)){
args__5775__auto__.push((arguments[i__5770__auto___44215]));

var G__44216 = (i__5770__auto___44215 + (1));
i__5770__auto___44215 = G__44216;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq44142){
var G__44143 = cljs.core.first(seq44142);
var seq44142__$1 = cljs.core.next(seq44142);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44143,seq44142__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44217 = arguments.length;
var i__5770__auto___44218 = (0);
while(true){
if((i__5770__auto___44218 < len__5769__auto___44217)){
args__5775__auto__.push((arguments[i__5770__auto___44218]));

var G__44219 = (i__5770__auto___44218 + (1));
i__5770__auto___44218 = G__44219;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq44144){
var G__44145 = cljs.core.first(seq44144);
var seq44144__$1 = cljs.core.next(seq44144);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44145,seq44144__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44220 = arguments.length;
var i__5770__auto___44221 = (0);
while(true){
if((i__5770__auto___44221 < len__5769__auto___44220)){
args__5775__auto__.push((arguments[i__5770__auto___44221]));

var G__44222 = (i__5770__auto___44221 + (1));
i__5770__auto___44221 = G__44222;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq44146){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44146));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44227 = arguments.length;
var i__5770__auto___44228 = (0);
while(true){
if((i__5770__auto___44228 < len__5769__auto___44227)){
args__5775__auto__.push((arguments[i__5770__auto___44228]));

var G__44229 = (i__5770__auto___44228 + (1));
i__5770__auto___44228 = G__44229;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq44147){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44147));
}));


//# sourceMappingURL=markdown.core.js.map
