goog.provide('portfolio.ui.css');
portfolio.ui.css.find_link_by_href = (function portfolio$ui$css$find_link_by_href(el,path){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41973_SHARP_){
return clojure.string.includes_QMARK_(p1__41973_SHARP_.href,path);
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(el.querySelectorAll("link"))));
});
portfolio.ui.css.create_css_link = (function portfolio$ui$css$create_css_link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42060 = arguments.length;
var i__5770__auto___42061 = (0);
while(true){
if((i__5770__auto___42061 < len__5769__auto___42060)){
args__5775__auto__.push((arguments[i__5770__auto___42061]));

var G__42062 = (i__5770__auto___42061 + (1));
i__5770__auto___42061 = G__42062;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.css.create_css_link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.css.create_css_link.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__41979){
var vec__41980 = p__41979;
var map__41983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41980,(0),null);
var map__41983__$1 = cljs.core.__destructure_map(map__41983);
var media = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41983__$1,new cljs.core.Keyword(null,"media","media",-1066138403));
var link = document.createElement("link");
(link.href = path);

(link.rel = "stylesheet");

(link.type = "text/css");

(link.portfolio = "portfolio");

if(cljs.core.truth_(media)){
(link.media = media);
} else {
}

return link;
}));

(portfolio.ui.css.create_css_link.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.css.create_css_link.cljs$lang$applyTo = (function (seq41974){
var G__41975 = cljs.core.first(seq41974);
var seq41974__$1 = cljs.core.next(seq41974);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41975,seq41974__$1);
}));

portfolio.ui.css.reload_css_file = (function portfolio$ui$css$reload_css_file(file){
var seq__41985 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.body.querySelectorAll("iframe")));
var chunk__41986 = null;
var count__41987 = (0);
var i__41988 = (0);
while(true){
if((i__41988 < count__41987)){
var iframe = chunk__41986.cljs$core$IIndexed$_nth$arity$2(null,i__41988);
var iframe_head_42067 = (function (){var G__41998 = iframe;
var G__41998__$1 = (((G__41998 == null))?null:G__41998.contentWindow);
var G__41998__$2 = (((G__41998__$1 == null))?null:G__41998__$1.document);
if((G__41998__$2 == null)){
return null;
} else {
return G__41998__$2.head;
}
})();
var original_42068 = portfolio.ui.css.find_link_by_href(iframe_head_42067,file);
var reloaded_42069 = portfolio.ui.css.create_css_link([cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime())].join(''));
reloaded_42069.addEventListener("load",((function (seq__41985,chunk__41986,count__41987,i__41988,iframe_head_42067,original_42068,reloaded_42069,iframe){
return (function portfolio$ui$css$reload_css_file_$_done(_){
var temp__5804__auto___42074 = (function (){var G__41999 = original_42068;
if((G__41999 == null)){
return null;
} else {
return G__41999.parentNode;
}
})();
if(cljs.core.truth_(temp__5804__auto___42074)){
var parent_42075 = temp__5804__auto___42074;
parent_42075.removeChild(original_42068);
} else {
}

return reloaded_42069.removeEventListener("load",portfolio$ui$css$reload_css_file_$_done);
});})(seq__41985,chunk__41986,count__41987,i__41988,iframe_head_42067,original_42068,reloaded_42069,iframe))
);

iframe_head_42067.appendChild(reloaded_42069);


var G__42076 = seq__41985;
var G__42077 = chunk__41986;
var G__42078 = count__41987;
var G__42079 = (i__41988 + (1));
seq__41985 = G__42076;
chunk__41986 = G__42077;
count__41987 = G__42078;
i__41988 = G__42079;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41985);
if(temp__5804__auto__){
var seq__41985__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41985__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41985__$1);
var G__42080 = cljs.core.chunk_rest(seq__41985__$1);
var G__42081 = c__5568__auto__;
var G__42082 = cljs.core.count(c__5568__auto__);
var G__42083 = (0);
seq__41985 = G__42080;
chunk__41986 = G__42081;
count__41987 = G__42082;
i__41988 = G__42083;
continue;
} else {
var iframe = cljs.core.first(seq__41985__$1);
var iframe_head_42086 = (function (){var G__42000 = iframe;
var G__42000__$1 = (((G__42000 == null))?null:G__42000.contentWindow);
var G__42000__$2 = (((G__42000__$1 == null))?null:G__42000__$1.document);
if((G__42000__$2 == null)){
return null;
} else {
return G__42000__$2.head;
}
})();
var original_42087 = portfolio.ui.css.find_link_by_href(iframe_head_42086,file);
var reloaded_42088 = portfolio.ui.css.create_css_link([cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime())].join(''));
reloaded_42088.addEventListener("load",((function (seq__41985,chunk__41986,count__41987,i__41988,iframe_head_42086,original_42087,reloaded_42088,iframe,seq__41985__$1,temp__5804__auto__){
return (function portfolio$ui$css$reload_css_file_$_done(_){
var temp__5804__auto___42097__$1 = (function (){var G__42001 = original_42087;
if((G__42001 == null)){
return null;
} else {
return G__42001.parentNode;
}
})();
if(cljs.core.truth_(temp__5804__auto___42097__$1)){
var parent_42102 = temp__5804__auto___42097__$1;
parent_42102.removeChild(original_42087);
} else {
}

return reloaded_42088.removeEventListener("load",portfolio$ui$css$reload_css_file_$_done);
});})(seq__41985,chunk__41986,count__41987,i__41988,iframe_head_42086,original_42087,reloaded_42088,iframe,seq__41985__$1,temp__5804__auto__))
);

iframe_head_42086.appendChild(reloaded_42088);


var G__42103 = cljs.core.next(seq__41985__$1);
var G__42104 = null;
var G__42105 = (0);
var G__42106 = (0);
seq__41985 = G__42103;
chunk__41986 = G__42104;
count__41987 = G__42105;
i__41988 = G__42106;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.ui.css.load_css_files = (function portfolio$ui$css$load_css_files(paths){
var seq__42002 = cljs.core.seq(paths);
var chunk__42003 = null;
var count__42004 = (0);
var i__42005 = (0);
while(true){
if((i__42005 < count__42004)){
var path = chunk__42003.cljs$core$IIndexed$_nth$arity$2(null,i__42005);
if(cljs.core.truth_(portfolio.ui.css.find_link_by_href(document.head,path))){
} else {
document.head.appendChild(portfolio.ui.css.create_css_link.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"media","media",-1066138403),"portfolio"], null)], 0)));
}


var G__42111 = seq__42002;
var G__42112 = chunk__42003;
var G__42113 = count__42004;
var G__42114 = (i__42005 + (1));
seq__42002 = G__42111;
chunk__42003 = G__42112;
count__42004 = G__42113;
i__42005 = G__42114;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42002);
if(temp__5804__auto__){
var seq__42002__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42002__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42002__$1);
var G__42115 = cljs.core.chunk_rest(seq__42002__$1);
var G__42116 = c__5568__auto__;
var G__42117 = cljs.core.count(c__5568__auto__);
var G__42118 = (0);
seq__42002 = G__42115;
chunk__42003 = G__42116;
count__42004 = G__42117;
i__42005 = G__42118;
continue;
} else {
var path = cljs.core.first(seq__42002__$1);
if(cljs.core.truth_(portfolio.ui.css.find_link_by_href(document.head,path))){
} else {
document.head.appendChild(portfolio.ui.css.create_css_link.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"media","media",-1066138403),"portfolio"], null)], 0)));
}


var G__42120 = cljs.core.next(seq__42002__$1);
var G__42121 = null;
var G__42122 = (0);
var G__42123 = (0);
seq__42002 = G__42120;
chunk__42003 = G__42121;
count__42004 = G__42122;
i__42005 = G__42123;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.ui.css.on_head_mutation = (function portfolio$ui$css$on_head_mutation(mutations,paths){
var paths__$1 = cljs.core.set(paths);
var seq__42010 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(paths__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths__$1){
return (function (p1__42009_SHARP_){
return cljs.core.second(cljs.core.re_find(/(?:https?:\/\/[^\/]+)?([^\?]+)/,p1__42009_SHARP_));
});})(paths__$1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths__$1){
return (function (p1__42008_SHARP_){
return p1__42008_SHARP_.href;
});})(paths__$1))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["LINK",null], null), null),((function (paths__$1){
return (function (p1__42007_SHARP_){
return p1__42007_SHARP_.tagName;
});})(paths__$1))
),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (paths__$1){
return (function (p1__42006_SHARP_){
return p1__42006_SHARP_.addedNodes;
});})(paths__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mutations], 0)))))));
var chunk__42011 = null;
var count__42012 = (0);
var i__42013 = (0);
while(true){
if((i__42013 < count__42012)){
var path = chunk__42011.cljs$core$IIndexed$_nth$arity$2(null,i__42013);
portfolio.ui.css.reload_css_file(path);


var G__42135 = seq__42010;
var G__42136 = chunk__42011;
var G__42137 = count__42012;
var G__42138 = (i__42013 + (1));
seq__42010 = G__42135;
chunk__42011 = G__42136;
count__42012 = G__42137;
i__42013 = G__42138;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42010);
if(temp__5804__auto__){
var seq__42010__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42010__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42010__$1);
var G__42139 = cljs.core.chunk_rest(seq__42010__$1);
var G__42140 = c__5568__auto__;
var G__42141 = cljs.core.count(c__5568__auto__);
var G__42142 = (0);
seq__42010 = G__42139;
chunk__42011 = G__42140;
count__42012 = G__42141;
i__42013 = G__42142;
continue;
} else {
var path = cljs.core.first(seq__42010__$1);
portfolio.ui.css.reload_css_file(path);


var G__42143 = cljs.core.next(seq__42010__$1);
var G__42144 = null;
var G__42145 = (0);
var G__42146 = (0);
seq__42010 = G__42143;
chunk__42011 = G__42144;
count__42012 = G__42145;
i__42013 = G__42146;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.ui.css.watch_css_reloads = (function portfolio$ui$css$watch_css_reloads(paths){
var observer = (new MutationObserver((function (ms){
return portfolio.ui.css.on_head_mutation(ms,paths);
})));
observer.observe(document.head,({"attributes": true, "subtree": true, "childList": true}));

return observer;
});
portfolio.ui.css.replace_loaded_css_files = (function portfolio$ui$css$replace_loaded_css_files(paths){
var seq__42015 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.body.querySelectorAll("iframe")));
var chunk__42016 = null;
var count__42017 = (0);
var i__42018 = (0);
while(true){
if((i__42018 < count__42017)){
var iframe = chunk__42016.cljs$core$IIndexed$_nth$arity$2(null,i__42018);
var head_42148 = (function (){var G__42039 = iframe;
var G__42039__$1 = (((G__42039 == null))?null:G__42039.contentWindow);
var G__42039__$2 = (((G__42039__$1 == null))?null:G__42039__$1.document);
if((G__42039__$2 == null)){
return null;
} else {
return G__42039__$2.head;
}
})();
var seq__42040_42156 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__42015,chunk__42016,count__42017,i__42018,head_42148,iframe){
return (function (p1__42014_SHARP_){
return p1__42014_SHARP_.portfolio;
});})(seq__42015,chunk__42016,count__42017,i__42018,head_42148,iframe))
,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(head_42148.querySelectorAll("link"))));
var chunk__42041_42157 = null;
var count__42042_42158 = (0);
var i__42043_42159 = (0);
while(true){
if((i__42043_42159 < count__42042_42158)){
var link_42163 = chunk__42041_42157.cljs$core$IIndexed$_nth$arity$2(null,i__42043_42159);
link_42163.parentNode.removeChild(link_42163);


var G__42164 = seq__42040_42156;
var G__42165 = chunk__42041_42157;
var G__42166 = count__42042_42158;
var G__42167 = (i__42043_42159 + (1));
seq__42040_42156 = G__42164;
chunk__42041_42157 = G__42165;
count__42042_42158 = G__42166;
i__42043_42159 = G__42167;
continue;
} else {
var temp__5804__auto___42168 = cljs.core.seq(seq__42040_42156);
if(temp__5804__auto___42168){
var seq__42040_42169__$1 = temp__5804__auto___42168;
if(cljs.core.chunked_seq_QMARK_(seq__42040_42169__$1)){
var c__5568__auto___42170 = cljs.core.chunk_first(seq__42040_42169__$1);
var G__42171 = cljs.core.chunk_rest(seq__42040_42169__$1);
var G__42172 = c__5568__auto___42170;
var G__42173 = cljs.core.count(c__5568__auto___42170);
var G__42174 = (0);
seq__42040_42156 = G__42171;
chunk__42041_42157 = G__42172;
count__42042_42158 = G__42173;
i__42043_42159 = G__42174;
continue;
} else {
var link_42175 = cljs.core.first(seq__42040_42169__$1);
link_42175.parentNode.removeChild(link_42175);


var G__42176 = cljs.core.next(seq__42040_42169__$1);
var G__42177 = null;
var G__42178 = (0);
var G__42179 = (0);
seq__42040_42156 = G__42176;
chunk__42041_42157 = G__42177;
count__42042_42158 = G__42178;
i__42043_42159 = G__42179;
continue;
}
} else {
}
}
break;
}

var seq__42044_42180 = cljs.core.seq(paths);
var chunk__42045_42181 = null;
var count__42046_42182 = (0);
var i__42047_42183 = (0);
while(true){
if((i__42047_42183 < count__42046_42182)){
var path_42184 = chunk__42045_42181.cljs$core$IIndexed$_nth$arity$2(null,i__42047_42183);
head_42148.appendChild(portfolio.ui.css.create_css_link(path_42184));


var G__42188 = seq__42044_42180;
var G__42189 = chunk__42045_42181;
var G__42190 = count__42046_42182;
var G__42191 = (i__42047_42183 + (1));
seq__42044_42180 = G__42188;
chunk__42045_42181 = G__42189;
count__42046_42182 = G__42190;
i__42047_42183 = G__42191;
continue;
} else {
var temp__5804__auto___42192 = cljs.core.seq(seq__42044_42180);
if(temp__5804__auto___42192){
var seq__42044_42193__$1 = temp__5804__auto___42192;
if(cljs.core.chunked_seq_QMARK_(seq__42044_42193__$1)){
var c__5568__auto___42194 = cljs.core.chunk_first(seq__42044_42193__$1);
var G__42195 = cljs.core.chunk_rest(seq__42044_42193__$1);
var G__42196 = c__5568__auto___42194;
var G__42197 = cljs.core.count(c__5568__auto___42194);
var G__42198 = (0);
seq__42044_42180 = G__42195;
chunk__42045_42181 = G__42196;
count__42046_42182 = G__42197;
i__42047_42183 = G__42198;
continue;
} else {
var path_42199 = cljs.core.first(seq__42044_42193__$1);
head_42148.appendChild(portfolio.ui.css.create_css_link(path_42199));


var G__42200 = cljs.core.next(seq__42044_42193__$1);
var G__42201 = null;
var G__42202 = (0);
var G__42203 = (0);
seq__42044_42180 = G__42200;
chunk__42045_42181 = G__42201;
count__42046_42182 = G__42202;
i__42047_42183 = G__42203;
continue;
}
} else {
}
}
break;
}


var G__42204 = seq__42015;
var G__42205 = chunk__42016;
var G__42206 = count__42017;
var G__42207 = (i__42018 + (1));
seq__42015 = G__42204;
chunk__42016 = G__42205;
count__42017 = G__42206;
i__42018 = G__42207;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42015);
if(temp__5804__auto__){
var seq__42015__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42015__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42015__$1);
var G__42209 = cljs.core.chunk_rest(seq__42015__$1);
var G__42210 = c__5568__auto__;
var G__42211 = cljs.core.count(c__5568__auto__);
var G__42212 = (0);
seq__42015 = G__42209;
chunk__42016 = G__42210;
count__42017 = G__42211;
i__42018 = G__42212;
continue;
} else {
var iframe = cljs.core.first(seq__42015__$1);
var head_42213 = (function (){var G__42048 = iframe;
var G__42048__$1 = (((G__42048 == null))?null:G__42048.contentWindow);
var G__42048__$2 = (((G__42048__$1 == null))?null:G__42048__$1.document);
if((G__42048__$2 == null)){
return null;
} else {
return G__42048__$2.head;
}
})();
var seq__42049_42215 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__42015,chunk__42016,count__42017,i__42018,head_42213,iframe,seq__42015__$1,temp__5804__auto__){
return (function (p1__42014_SHARP_){
return p1__42014_SHARP_.portfolio;
});})(seq__42015,chunk__42016,count__42017,i__42018,head_42213,iframe,seq__42015__$1,temp__5804__auto__))
,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(head_42213.querySelectorAll("link"))));
var chunk__42050_42216 = null;
var count__42051_42217 = (0);
var i__42052_42218 = (0);
while(true){
if((i__42052_42218 < count__42051_42217)){
var link_42219 = chunk__42050_42216.cljs$core$IIndexed$_nth$arity$2(null,i__42052_42218);
link_42219.parentNode.removeChild(link_42219);


var G__42220 = seq__42049_42215;
var G__42221 = chunk__42050_42216;
var G__42222 = count__42051_42217;
var G__42223 = (i__42052_42218 + (1));
seq__42049_42215 = G__42220;
chunk__42050_42216 = G__42221;
count__42051_42217 = G__42222;
i__42052_42218 = G__42223;
continue;
} else {
var temp__5804__auto___42224__$1 = cljs.core.seq(seq__42049_42215);
if(temp__5804__auto___42224__$1){
var seq__42049_42225__$1 = temp__5804__auto___42224__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42049_42225__$1)){
var c__5568__auto___42226 = cljs.core.chunk_first(seq__42049_42225__$1);
var G__42227 = cljs.core.chunk_rest(seq__42049_42225__$1);
var G__42228 = c__5568__auto___42226;
var G__42229 = cljs.core.count(c__5568__auto___42226);
var G__42230 = (0);
seq__42049_42215 = G__42227;
chunk__42050_42216 = G__42228;
count__42051_42217 = G__42229;
i__42052_42218 = G__42230;
continue;
} else {
var link_42231 = cljs.core.first(seq__42049_42225__$1);
link_42231.parentNode.removeChild(link_42231);


var G__42232 = cljs.core.next(seq__42049_42225__$1);
var G__42233 = null;
var G__42234 = (0);
var G__42235 = (0);
seq__42049_42215 = G__42232;
chunk__42050_42216 = G__42233;
count__42051_42217 = G__42234;
i__42052_42218 = G__42235;
continue;
}
} else {
}
}
break;
}

var seq__42053_42236 = cljs.core.seq(paths);
var chunk__42054_42237 = null;
var count__42055_42238 = (0);
var i__42056_42239 = (0);
while(true){
if((i__42056_42239 < count__42055_42238)){
var path_42240 = chunk__42054_42237.cljs$core$IIndexed$_nth$arity$2(null,i__42056_42239);
head_42213.appendChild(portfolio.ui.css.create_css_link(path_42240));


var G__42241 = seq__42053_42236;
var G__42242 = chunk__42054_42237;
var G__42243 = count__42055_42238;
var G__42244 = (i__42056_42239 + (1));
seq__42053_42236 = G__42241;
chunk__42054_42237 = G__42242;
count__42055_42238 = G__42243;
i__42056_42239 = G__42244;
continue;
} else {
var temp__5804__auto___42245__$1 = cljs.core.seq(seq__42053_42236);
if(temp__5804__auto___42245__$1){
var seq__42053_42246__$1 = temp__5804__auto___42245__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42053_42246__$1)){
var c__5568__auto___42247 = cljs.core.chunk_first(seq__42053_42246__$1);
var G__42248 = cljs.core.chunk_rest(seq__42053_42246__$1);
var G__42249 = c__5568__auto___42247;
var G__42250 = cljs.core.count(c__5568__auto___42247);
var G__42251 = (0);
seq__42053_42236 = G__42248;
chunk__42054_42237 = G__42249;
count__42055_42238 = G__42250;
i__42056_42239 = G__42251;
continue;
} else {
var path_42252 = cljs.core.first(seq__42053_42246__$1);
head_42213.appendChild(portfolio.ui.css.create_css_link(path_42252));


var G__42253 = cljs.core.next(seq__42053_42246__$1);
var G__42254 = null;
var G__42255 = (0);
var G__42256 = (0);
seq__42053_42236 = G__42253;
chunk__42054_42237 = G__42254;
count__42055_42238 = G__42255;
i__42056_42239 = G__42256;
continue;
}
} else {
}
}
break;
}


var G__42257 = cljs.core.next(seq__42015__$1);
var G__42258 = null;
var G__42259 = (0);
var G__42260 = (0);
seq__42015 = G__42257;
chunk__42016 = G__42258;
count__42017 = G__42259;
i__42018 = G__42260;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=portfolio.ui.css.js.map
