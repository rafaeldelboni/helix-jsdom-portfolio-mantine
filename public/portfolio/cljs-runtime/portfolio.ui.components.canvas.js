goog.provide('portfolio.ui.components.canvas');
portfolio.ui.components.canvas.get_iframe = (function portfolio$ui$components$canvas$get_iframe(canvas_el){
var G__44909 = canvas_el;
if((G__44909 == null)){
return null;
} else {
return G__44909.querySelector(".canvas");
}
});
portfolio.ui.components.canvas.get_iframe_document = (function portfolio$ui$components$canvas$get_iframe_document(canvas_el){
var G__44910 = canvas_el;
var G__44910__$1 = (((G__44910 == null))?null:portfolio.ui.components.canvas.get_iframe(G__44910));
var G__44910__$2 = (((G__44910__$1 == null))?null:G__44910__$1.contentWindow);
if((G__44910__$2 == null)){
return null;
} else {
return G__44910__$2.document;
}
});
portfolio.ui.components.canvas.get_iframe_body = (function portfolio$ui$components$canvas$get_iframe_body(canvas_el){
var G__44911 = canvas_el;
var G__44911__$1 = (((G__44911 == null))?null:portfolio.ui.components.canvas.get_iframe_document(G__44911));
if((G__44911__$1 == null)){
return null;
} else {
return G__44911__$1.body;
}
});
portfolio.ui.components.canvas.report_error = (function portfolio$ui$components$canvas$report_error(cause,e,scene){
return portfolio.ui.actions.dispatch.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"report-render-error","report-render-error",-2098634445).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(scene)),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("action","exception","action/exception",-1254845906),e,new cljs.core.Keyword("action","cause","action/cause",1369441962),cause], null)], 0));
});
portfolio.ui.components.canvas.render_scene = (function portfolio$ui$components$canvas$render_scene(el,p__44912){
var map__44913 = p__44912;
var map__44913__$1 = cljs.core.__destructure_map(map__44913);
var scene = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44913__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));
var tools = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44913__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44913__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var iframe = portfolio.ui.components.canvas.get_iframe(el);
var canvas = (function (){var G__44914 = iframe;
var G__44914__$1 = (((G__44914 == null))?null:G__44914.contentDocument);
if((G__44914__$1 == null)){
return null;
} else {
return G__44914__$1.getElementById("canvas");
}
})();
var error = el.querySelector(".error-container");
if(cljs.core.truth_(error)){
error.parentNode.removeChild(error);

(iframe.style.display = "block");
} else {
}

var seq__44915_45023 = cljs.core.seq(tools);
var chunk__44916_45024 = null;
var count__44917_45025 = (0);
var i__44918_45026 = (0);
while(true){
if((i__44918_45026 < count__44917_45025)){
var tool_45027 = chunk__44916_45024.cljs$core$IIndexed$_nth$arity$2(null,i__44918_45026);
try{portfolio.ui.canvas.protocols.prepare_canvas(tool_45027,el,opt);
}catch (e44921){var e_45028 = e44921;
portfolio.ui.components.canvas.report_error(["Failed to prepare canvas with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool_45027))].join(''),e_45028,scene);
}

var G__45029 = seq__44915_45023;
var G__45030 = chunk__44916_45024;
var G__45031 = count__44917_45025;
var G__45032 = (i__44918_45026 + (1));
seq__44915_45023 = G__45029;
chunk__44916_45024 = G__45030;
count__44917_45025 = G__45031;
i__44918_45026 = G__45032;
continue;
} else {
var temp__5804__auto___45033 = cljs.core.seq(seq__44915_45023);
if(temp__5804__auto___45033){
var seq__44915_45034__$1 = temp__5804__auto___45033;
if(cljs.core.chunked_seq_QMARK_(seq__44915_45034__$1)){
var c__5568__auto___45035 = cljs.core.chunk_first(seq__44915_45034__$1);
var G__45036 = cljs.core.chunk_rest(seq__44915_45034__$1);
var G__45037 = c__5568__auto___45035;
var G__45038 = cljs.core.count(c__5568__auto___45035);
var G__45039 = (0);
seq__44915_45023 = G__45036;
chunk__44916_45024 = G__45037;
count__44917_45025 = G__45038;
i__44918_45026 = G__45039;
continue;
} else {
var tool_45040 = cljs.core.first(seq__44915_45034__$1);
try{portfolio.ui.canvas.protocols.prepare_canvas(tool_45040,el,opt);
}catch (e44922){var e_45041 = e44922;
portfolio.ui.components.canvas.report_error(["Failed to prepare canvas with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool_45040))].join(''),e_45041,scene);
}

var G__45042 = cljs.core.next(seq__44915_45034__$1);
var G__45043 = null;
var G__45044 = (0);
var G__45045 = (0);
seq__44915_45023 = G__45042;
chunk__44916_45024 = G__45043;
count__44917_45025 = G__45044;
i__44918_45026 = G__45045;
continue;
}
} else {
}
}
break;
}

try{portfolio.adapter.render_component(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scene,new cljs.core.Keyword(null,"component","component",1555936782),(function (){var fexpr__44924 = new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene);
return (fexpr__44924.cljs$core$IFn$_invoke$arity$0 ? fexpr__44924.cljs$core$IFn$_invoke$arity$0() : fexpr__44924.call(null));
})()),canvas);

return setTimeout((function (){
var seq__44925_45046 = cljs.core.seq(tools);
var chunk__44926_45047 = null;
var count__44927_45048 = (0);
var i__44928_45049 = (0);
while(true){
if((i__44928_45049 < count__44927_45048)){
var tool_45050 = chunk__44926_45047.cljs$core$IIndexed$_nth$arity$2(null,i__44928_45049);
try{portfolio.ui.canvas.protocols.finalize_canvas(tool_45050,el,opt);
}catch (e44931){var e_45051 = e44931;
portfolio.ui.components.canvas.report_error(["Failed to finalize canvas with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool_45050))].join(''),e_45051,scene);
}

var G__45053 = seq__44925_45046;
var G__45054 = chunk__44926_45047;
var G__45055 = count__44927_45048;
var G__45056 = (i__44928_45049 + (1));
seq__44925_45046 = G__45053;
chunk__44926_45047 = G__45054;
count__44927_45048 = G__45055;
i__44928_45049 = G__45056;
continue;
} else {
var temp__5804__auto___45057 = cljs.core.seq(seq__44925_45046);
if(temp__5804__auto___45057){
var seq__44925_45058__$1 = temp__5804__auto___45057;
if(cljs.core.chunked_seq_QMARK_(seq__44925_45058__$1)){
var c__5568__auto___45059 = cljs.core.chunk_first(seq__44925_45058__$1);
var G__45060 = cljs.core.chunk_rest(seq__44925_45058__$1);
var G__45061 = c__5568__auto___45059;
var G__45062 = cljs.core.count(c__5568__auto___45059);
var G__45063 = (0);
seq__44925_45046 = G__45060;
chunk__44926_45047 = G__45061;
count__44927_45048 = G__45062;
i__44928_45049 = G__45063;
continue;
} else {
var tool_45064 = cljs.core.first(seq__44925_45058__$1);
try{portfolio.ui.canvas.protocols.finalize_canvas(tool_45064,el,opt);
}catch (e44932){var e_45065 = e44932;
portfolio.ui.components.canvas.report_error(["Failed to finalize canvas with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool_45064))].join(''),e_45065,scene);
}

var G__45066 = cljs.core.next(seq__44925_45058__$1);
var G__45067 = null;
var G__45068 = (0);
var G__45069 = (0);
seq__44925_45046 = G__45066;
chunk__44926_45047 = G__45067;
count__44927_45048 = G__45068;
i__44928_45049 = G__45069;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto__ = iframe.contentWindow;
if(cljs.core.truth_(temp__5804__auto__)){
var win = temp__5804__auto__;
return win.postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),"scene-rendered",new cljs.core.Keyword(null,"scene-id","scene-id",2130439689),clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene))], null)))], null)),"*");
} else {
return null;
}
}),(50));
}catch (e44923){var e = e44923;
return portfolio.ui.components.canvas.report_error(["Failed to render ",["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene)),"'"].join('')].join(''),e,scene);
}});
portfolio.ui.components.canvas.on_mounted = (function portfolio$ui$components$canvas$on_mounted(el,f){
if(cljs.core.truth_((function (){var G__44933 = el;
var G__44933__$1 = (((G__44933 == null))?null:G__44933.contentDocument);
if((G__44933__$1 == null)){
return null;
} else {
return G__44933__$1.getElementById("canvas");
}
})())){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return el.addEventListener("load",(function (_){
var doc = el.contentDocument;
(doc.documentElement.style.height = "auto");

if(cljs.core.truth_(doc.getElementById("canvas"))){
} else {
var el_45093__$1 = doc.createElement("div");
(el_45093__$1.id = "canvas");

doc.body.appendChild(el_45093__$1);
}

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}));
}
});
portfolio.ui.components.canvas.init_canvas = (function portfolio$ui$components$canvas$init_canvas(el,data,f){
var iframe = portfolio.ui.components.canvas.get_iframe(el);
var document__$1 = portfolio.ui.components.canvas.get_iframe_document(el);
var head = document__$1.head;
var loaded = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var target_n = (cljs.core.count(new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(data)) + cljs.core.count(new cljs.core.Keyword(null,"script-paths","script-paths",1124171898).cljs$core$IFn$_invoke$arity$1(data)));
var try_complete = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_n,cljs.core.deref(loaded))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
(document__$1.title = "Component scene");

iframe.contentWindow.addEventListener("message",(function (e){
return window.postMessage(e.data);
}));

try_complete();

var seq__44934_45114 = cljs.core.seq(new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(data));
var chunk__44935_45115 = null;
var count__44936_45116 = (0);
var i__44937_45117 = (0);
while(true){
if((i__44937_45117 < count__44936_45116)){
var path_45118 = chunk__44935_45115.cljs$core$IIndexed$_nth$arity$2(null,i__44937_45117);
var link_45119 = document.createElement("link");
(link_45119.rel = "stylesheet");

(link_45119.type = "text/css");

(link_45119.href = path_45118);

link_45119.addEventListener("load",((function (seq__44934_45114,chunk__44935_45115,count__44936_45116,i__44937_45117,link_45119,path_45118,iframe,document__$1,head,loaded,target_n,try_complete){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.inc);

return try_complete();
});})(seq__44934_45114,chunk__44935_45115,count__44936_45116,i__44937_45117,link_45119,path_45118,iframe,document__$1,head,loaded,target_n,try_complete))
);

head.appendChild(link_45119);


var G__45120 = seq__44934_45114;
var G__45121 = chunk__44935_45115;
var G__45122 = count__44936_45116;
var G__45123 = (i__44937_45117 + (1));
seq__44934_45114 = G__45120;
chunk__44935_45115 = G__45121;
count__44936_45116 = G__45122;
i__44937_45117 = G__45123;
continue;
} else {
var temp__5804__auto___45124 = cljs.core.seq(seq__44934_45114);
if(temp__5804__auto___45124){
var seq__44934_45125__$1 = temp__5804__auto___45124;
if(cljs.core.chunked_seq_QMARK_(seq__44934_45125__$1)){
var c__5568__auto___45126 = cljs.core.chunk_first(seq__44934_45125__$1);
var G__45128 = cljs.core.chunk_rest(seq__44934_45125__$1);
var G__45129 = c__5568__auto___45126;
var G__45130 = cljs.core.count(c__5568__auto___45126);
var G__45131 = (0);
seq__44934_45114 = G__45128;
chunk__44935_45115 = G__45129;
count__44936_45116 = G__45130;
i__44937_45117 = G__45131;
continue;
} else {
var path_45132 = cljs.core.first(seq__44934_45125__$1);
var link_45133 = document.createElement("link");
(link_45133.rel = "stylesheet");

(link_45133.type = "text/css");

(link_45133.href = path_45132);

link_45133.addEventListener("load",((function (seq__44934_45114,chunk__44935_45115,count__44936_45116,i__44937_45117,link_45133,path_45132,seq__44934_45125__$1,temp__5804__auto___45124,iframe,document__$1,head,loaded,target_n,try_complete){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.inc);

return try_complete();
});})(seq__44934_45114,chunk__44935_45115,count__44936_45116,i__44937_45117,link_45133,path_45132,seq__44934_45125__$1,temp__5804__auto___45124,iframe,document__$1,head,loaded,target_n,try_complete))
);

head.appendChild(link_45133);


var G__45134 = cljs.core.next(seq__44934_45125__$1);
var G__45135 = null;
var G__45136 = (0);
var G__45137 = (0);
seq__44934_45114 = G__45134;
chunk__44935_45115 = G__45135;
count__44936_45116 = G__45136;
i__44937_45117 = G__45137;
continue;
}
} else {
}
}
break;
}

var seq__44938_45138 = cljs.core.seq(new cljs.core.Keyword(null,"script-paths","script-paths",1124171898).cljs$core$IFn$_invoke$arity$1(data));
var chunk__44939_45139 = null;
var count__44940_45140 = (0);
var i__44941_45141 = (0);
while(true){
if((i__44941_45141 < count__44940_45140)){
var path_45142 = chunk__44939_45139.cljs$core$IIndexed$_nth$arity$2(null,i__44941_45141);
var link_45143 = document.createElement("script");
(link_45143.type = "text/javascript");

(link_45143.src = path_45142);

link_45143.addEventListener("load",((function (seq__44938_45138,chunk__44939_45139,count__44940_45140,i__44941_45141,link_45143,path_45142,iframe,document__$1,head,loaded,target_n,try_complete){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.inc);

return try_complete();
});})(seq__44938_45138,chunk__44939_45139,count__44940_45140,i__44941_45141,link_45143,path_45142,iframe,document__$1,head,loaded,target_n,try_complete))
);

head.appendChild(link_45143);


var G__45145 = seq__44938_45138;
var G__45147 = chunk__44939_45139;
var G__45148 = count__44940_45140;
var G__45149 = (i__44941_45141 + (1));
seq__44938_45138 = G__45145;
chunk__44939_45139 = G__45147;
count__44940_45140 = G__45148;
i__44941_45141 = G__45149;
continue;
} else {
var temp__5804__auto___45152 = cljs.core.seq(seq__44938_45138);
if(temp__5804__auto___45152){
var seq__44938_45153__$1 = temp__5804__auto___45152;
if(cljs.core.chunked_seq_QMARK_(seq__44938_45153__$1)){
var c__5568__auto___45154 = cljs.core.chunk_first(seq__44938_45153__$1);
var G__45155 = cljs.core.chunk_rest(seq__44938_45153__$1);
var G__45156 = c__5568__auto___45154;
var G__45157 = cljs.core.count(c__5568__auto___45154);
var G__45158 = (0);
seq__44938_45138 = G__45155;
chunk__44939_45139 = G__45156;
count__44940_45140 = G__45157;
i__44941_45141 = G__45158;
continue;
} else {
var path_45159 = cljs.core.first(seq__44938_45153__$1);
var link_45160 = document.createElement("script");
(link_45160.type = "text/javascript");

(link_45160.src = path_45159);

link_45160.addEventListener("load",((function (seq__44938_45138,chunk__44939_45139,count__44940_45140,i__44941_45141,link_45160,path_45159,seq__44938_45153__$1,temp__5804__auto___45152,iframe,document__$1,head,loaded,target_n,try_complete){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.inc);

return try_complete();
});})(seq__44938_45138,chunk__44939_45139,count__44940_45140,i__44941_45141,link_45160,path_45159,seq__44938_45153__$1,temp__5804__auto___45152,iframe,document__$1,head,loaded,target_n,try_complete))
);

head.appendChild(link_45160);


var G__45161 = cljs.core.next(seq__44938_45153__$1);
var G__45162 = null;
var G__45163 = (0);
var G__45164 = (0);
seq__44938_45138 = G__45161;
chunk__44939_45139 = G__45162;
count__44940_45140 = G__45163;
i__44941_45141 = G__45164;
continue;
}
} else {
}
}
break;
}

var vec__44942 = new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data));
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44942,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44942,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44942,(2),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44942,(3),null);
if(cljs.core.truth_(t)){
(document__$1.body.style.paddingTop = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"px"].join(''));
} else {
}

if(cljs.core.truth_(r)){
(document__$1.body.style.paddingBottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),"px"].join(''));
} else {
}

if(cljs.core.truth_(b)){
(document__$1.documentElement.style.paddingLeft = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),"px"].join(''));
} else {
}

if(cljs.core.truth_(l)){
return (document__$1.documentElement.style.paddingRight = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),"px"].join(''));
} else {
return null;
}
});
portfolio.ui.components.canvas.get_rendered_data = (function portfolio$ui$components$canvas$get_rendered_data(p__44945){
var map__44946 = p__44945;
var map__44946__$1 = cljs.core.__destructure_map(map__44946);
var scene = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44946__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44946__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rendered","rendered",-1352292910),new cljs.core.Keyword(null,"rendered-data","rendered-data",1076820229).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"portfolio-options","portfolio-options",1713910798),opt], null);
});
portfolio.ui.components.canvas.process_render_queue = (function portfolio$ui$components$canvas$process_render_queue(el){
if(cljs.core.truth_(el.renderFromQueue)){
return portfolio.ui.components.canvas.on_mounted(portfolio.ui.components.canvas.get_iframe(el),(function (){
var temp__5804__auto__ = el.renderQueue;
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
(el.renderQueue = null);

(el.renderedData = portfolio.ui.components.canvas.get_rendered_data(data));

return portfolio.ui.components.canvas.render_scene(el,data);
} else {
return null;
}
}));
} else {
return null;
}
});
portfolio.ui.components.canvas.novel_render_QMARK_ = (function portfolio$ui$components$canvas$novel_render_QMARK_(el,data){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(el.renderedData,portfolio.ui.components.canvas.get_rendered_data(data));
});
portfolio.ui.components.canvas.enqueue_render_data = (function portfolio$ui$components$canvas$enqueue_render_data(el,data){
if(portfolio.ui.components.canvas.novel_render_QMARK_(el,data)){
(el.renderQueue = data);

return portfolio.ui.components.canvas.process_render_queue(el);
} else {
return null;
}
});
/**
 * 
 */
portfolio.ui.components.canvas.Canvas = (function (){var G__44947 = (function (data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var or__5045__auto__ = new cljs.core.Keyword("background","background-color","background/background-color",1902638780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "var(--canvas-bg)";
}
})(),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.25s, height 0.25s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe.canvas","iframe.canvas",2014956060),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "/portfolio/canvas.html";
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Component scene",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__5045__auto__ = ((typeof new cljs.core.Keyword("viewport","width","viewport/width",809992237).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)) === 'number')?new cljs.core.Keyword("viewport","width","viewport/width",809992237).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),((typeof new cljs.core.Keyword("viewport","height","viewport/height",1951335772).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)) === 'number')?new cljs.core.Keyword("viewport","height","viewport/height",1951335772).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)):null)], null)], null)], null)], null);
});
var G__44948 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Canvas",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p__44949){
var map__44950 = p__44949;
var map__44950__$1 = cljs.core.__destructure_map(map__44950);
var css_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44950__$1,new cljs.core.Keyword(null,"css-paths","css-paths",582305563));
var script_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44950__$1,new cljs.core.Keyword(null,"script-paths","script-paths",1124171898));
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(css_paths,script_paths)));
}),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (el,data){
(el.renderQueue = data);

return portfolio.ui.components.canvas.on_mounted(portfolio.ui.components.canvas.get_iframe(el),(function (){
return portfolio.ui.components.canvas.init_canvas(el,data,(function (){
(el.renderFromQueue = true);

return portfolio.ui.components.canvas.process_render_queue(el);
}));
}));
}),new cljs.core.Keyword(null,"on-update","on-update",1680216496),(function (el,data){
return portfolio.ui.components.canvas.enqueue_render_data(el,data);
})], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44947,G__44948) : dumdom.core.component.call(null,G__44947,G__44948));
})();
/**
 * 
 */
portfolio.ui.components.canvas.Toolbar = (function (){var G__44951 = (function (p__44953){
var map__44954 = p__44953;
var map__44954__$1 = cljs.core.__destructure_map(map__44954);
var buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44954__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)],["var(--fg)",(48),"var(--bg)",(20),(20),"space-between",(10),"flex","1px solid var(--separator)"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$canvas$iter__44955(s__44956){
return (new cljs.core.LazySeq(null,(function (){
var s__44956__$1 = s__44956;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44956__$1);
if(temp__5804__auto__){
var s__44956__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44956__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44956__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44958 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44957 = (0);
while(true){
if((i__44957 < size__5522__auto__)){
var tool = cljs.core._nth(c__5521__auto__,i__44957);
cljs.core.chunk_append(b__44958,portfolio.ui.canvas.protocols.render_toolbar_button(tool));

var G__45169 = (i__44957 + (1));
i__44957 = G__45169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44958),portfolio$ui$components$canvas$iter__44955(cljs.core.chunk_rest(s__44956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44958),null);
}
} else {
var tool = cljs.core.first(s__44956__$2);
return cljs.core.cons(portfolio.ui.canvas.protocols.render_toolbar_button(tool),portfolio$ui$components$canvas$iter__44955(cljs.core.rest(s__44956__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),null], null), null),new cljs.core.Keyword(null,"align","align",1964212802)),buttons));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$canvas$iter__44959(s__44960){
return (new cljs.core.LazySeq(null,(function (){
var s__44960__$1 = s__44960;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44960__$1);
if(temp__5804__auto__){
var s__44960__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44960__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44960__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44962 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44961 = (0);
while(true){
if((i__44961 < size__5522__auto__)){
var tool = cljs.core._nth(c__5521__auto__,i__44961);
cljs.core.chunk_append(b__44962,portfolio.ui.canvas.protocols.render_toolbar_button(tool));

var G__45177 = (i__44961 + (1));
i__44961 = G__45177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44962),portfolio$ui$components$canvas$iter__44959(cljs.core.chunk_rest(s__44960__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44962),null);
}
} else {
var tool = cljs.core.first(s__44960__$2);
return cljs.core.cons(portfolio.ui.canvas.protocols.render_toolbar_button(tool),portfolio$ui$components$canvas$iter__44959(cljs.core.rest(s__44960__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),null], null), null),new cljs.core.Keyword(null,"align","align",1964212802)),buttons));
})()], null)], null);
});
var G__44952 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Toolbar"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44951,G__44952) : dumdom.core.component.call(null,G__44951,G__44952));
})();
/**
 * 
 */
portfolio.ui.components.canvas.CanvasPanel = (function (){var G__44963 = (function (data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #ccc",new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff",new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(new cljs.core.Keyword(null,"minimized?","minimized?",1807883709).cljs$core$IFn$_invoke$arity$1(data))?"40px":"30%"),new cljs.core.Keyword(null,"transition","transition",765692007),"height 0.25s",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5804__auto__)){
var button = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(20),new cljs.core.Keyword(null,"top","top",-1856271961),(10)], null)], null),(portfolio.ui.components.triangle.TriangleButton.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.triangle.TriangleButton.cljs$core$IFn$_invoke$arity$1(button) : portfolio.ui.components.triangle.TriangleButton.call(null,button))], null);
} else {
return null;
}
})(),(portfolio.ui.components.tab_bar.TabBar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.tab_bar.TabBar.cljs$core$IFn$_invoke$arity$1(data) : portfolio.ui.components.tab_bar.TabBar.call(null,data)),(function (){var G__44965 = data;
var G__44965__$1 = (((G__44965 == null))?null:new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__44965));
if((G__44965__$1 == null)){
return null;
} else {
return portfolio.ui.view.render_view(G__44965__$1);
}
})()], null);
});
var G__44964 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/CanvasPanel"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44963,G__44964) : dumdom.core.component.call(null,G__44963,G__44964));
})();
/**
 * 
 */
portfolio.ui.components.canvas.CanvasHeader = (function (){var G__44966 = (function (p__44968){
var map__44969 = p__44968;
var map__44969__$1 = cljs.core.__destructure_map(map__44969);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969__$1,new cljs.core.Keyword(null,"url","url",276297046));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969__$1,new cljs.core.Keyword(null,"code","code",1586293142));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h3","h2.h3",132008135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.empty_QMARK_(description))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 10px"], null))], null),(cljs.core.truth_(url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null):title)], null),((cljs.core.empty_QMARK_(description))?null:(function (){var G__44971 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),description,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309)], null);
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(G__44971) : portfolio.ui.components.markdown.Markdown.call(null,G__44971));
})()),((cljs.core.empty_QMARK_(code))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.h4","h3.h4",122011178),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),"Scene code"], null),(function (){var G__44976 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),code], null);
return (portfolio.ui.components.code.Code.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.code.Code.cljs$core$IFn$_invoke$arity$1(G__44976) : portfolio.ui.components.code.Code.call(null,G__44976));
})()], null))], null);
});
var G__44967 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/CanvasHeader",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"title","title",636505583)], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44966,G__44967) : dumdom.core.component.call(null,G__44966,G__44967));
})();
portfolio.ui.components.canvas.render_canvas = (function portfolio$ui$components$canvas$render_canvas(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.canvas-wrapper","div.canvas-wrapper",77954480),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(cljs.core.select_keys(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"code","code",1586293142)], null))))?(portfolio.ui.components.canvas.CanvasHeader.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.CanvasHeader.cljs$core$IFn$_invoke$arity$1(data) : portfolio.ui.components.canvas.CanvasHeader.call(null,data)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data))?(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.not(new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data));
}
})())?(function (){var G__44978 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data));
return (portfolio.ui.components.error.Error.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.error.Error.cljs$core$IFn$_invoke$arity$1(G__44978) : portfolio.ui.components.error.Error.call(null,G__44978));
})():(portfolio.ui.components.canvas.Canvas.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Canvas.cljs$core$IFn$_invoke$arity$1(data) : portfolio.ui.components.canvas.Canvas.call(null,data))):null)], null))], null);
});
portfolio.ui.components.canvas.direction = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),"column",new cljs.core.Keyword(null,"cols","cols",-1914801295),"row"], null);
/**
 * 
 */
portfolio.ui.components.canvas.WrappedMenuBar = (function (){var G__44979 = (function (menu_bar){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--bg)",new cljs.core.Keyword(null,"color","color",1011675173),"var(--fg)",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px"], null)], null),(function (){var G__44981 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(menu_bar,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704));
return (portfolio.ui.components.menu_bar.MenuBar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.menu_bar.MenuBar.cljs$core$IFn$_invoke$arity$1(G__44981) : portfolio.ui.components.menu_bar.MenuBar.call(null,G__44981));
})()], null);
});
var G__44980 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/WrappedMenuBar"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44979,G__44980) : dumdom.core.component.call(null,G__44979,G__44980));
})();
portfolio.ui.components.canvas.get_grid_styles = (function portfolio$ui$components$canvas$get_grid_styles(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(data))?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(data)], null):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(data)], null)));
});
portfolio.ui.components.canvas.touch_x = (function portfolio$ui$components$canvas$touch_x(e){
var or__5045__auto__ = (function (){var G__44982 = e;
var G__44982__$1 = (((G__44982 == null))?null:G__44982.changedTouches);
var G__44982__$2 = (((G__44982__$1 == null))?null:(G__44982__$1[(0)]));
if((G__44982__$2 == null)){
return null;
} else {
return G__44982__$2.screenX;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e.screenX;
}
});
portfolio.ui.components.canvas.touch_y = (function portfolio$ui$components$canvas$touch_y(e){
var or__5045__auto__ = (function (){var G__44983 = e;
var G__44983__$1 = (((G__44983 == null))?null:G__44983.changedTouches);
var G__44983__$2 = (((G__44983__$1 == null))?null:(G__44983__$1[(0)]));
if((G__44983__$2 == null)){
return null;
} else {
return G__44983__$2.screenY;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e.screenY;
}
});
portfolio.ui.components.canvas.get_style_n = (function portfolio$ui$components$canvas$get_style_n(style,prop){
return parseInt(style.getPropertyValue(prop),(10));
});
portfolio.ui.components.canvas.get_dim = (function portfolio$ui$components$canvas$get_dim(props,el){
var style = window.getComputedStyle(el);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),portfolio.ui.components.canvas.get_style_n(style,"height"),new cljs.core.Keyword(null,"offset","offset",296498311),portfolio.ui.components.canvas.get_style_n(style,"top")], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),portfolio.ui.components.canvas.get_style_n(style,"width"),new cljs.core.Keyword(null,"offset","offset",296498311),portfolio.ui.components.canvas.get_style_n(style,"left")], null);
}
});
portfolio.ui.components.canvas.set_size = (function portfolio$ui$components$canvas$set_size(props,el,size){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props))){
return (el.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''));
} else {
return (el.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''));
}
});
portfolio.ui.components.canvas.set_offset = (function portfolio$ui$components$canvas$set_offset(props,el,offset){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props))){
return (el.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join(''));
} else {
return (el.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join(''));
}
});
portfolio.ui.components.canvas.get_neighbour = (function portfolio$ui$components$canvas$get_neighbour(el){
return el.nextSibling;
});
/**
 * 
 */
portfolio.ui.components.canvas.Handle = (function (){var G__44984 = (function (p__44986){
var map__44987 = p__44986;
var map__44987__$1 = cljs.core.__destructure_map(map__44987);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44987__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable","div.draggable",-249226727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),kind))?new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"3px solid var(--hard-separator)",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(30),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null):new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"3px solid var(--hard-separator)",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null))], null)], null);
});
var G__44985 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Handle",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (el,props){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var f = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props)))?portfolio.ui.components.canvas.touch_y:portfolio.ui.components.canvas.touch_x);
var container = el.parentNode;
el.addEventListener("mousedown",(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e)),new cljs.core.Keyword(null,"dim","dim",-497244536),portfolio.ui.components.canvas.get_dim(props,container),new cljs.core.Keyword(null,"neighbour-dim","neighbour-dim",33598256),portfolio.ui.components.canvas.get_dim(props,portfolio.ui.components.canvas.get_neighbour(container))], 0));

e.preventDefault();

return el.classList.add("dragging");
}));

document.body.addEventListener("mousemove",(function (e){
var map__44994 = cljs.core.deref(state);
var map__44994__$1 = cljs.core.__destructure_map(map__44994);
var dragging_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44994__$1,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44994__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var dim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44994__$1,new cljs.core.Keyword(null,"dim","dim",-497244536));
var neighbour_dim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44994__$1,new cljs.core.Keyword(null,"neighbour-dim","neighbour-dim",33598256));
if(cljs.core.truth_(dragging_QMARK_)){
var offset = ((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e)) - start);
var neighbour = portfolio.ui.components.canvas.get_neighbour(container);
portfolio.ui.components.canvas.set_size(props,container,(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(dim) + offset));

portfolio.ui.components.canvas.set_offset(props,neighbour,(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(neighbour_dim) + offset));

return portfolio.ui.components.canvas.set_size(props,neighbour,(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(neighbour_dim) - offset));
} else {
return null;
}
}));

return document.body.addEventListener("mouseup",(function (_e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));

return el.classList.remove("dragging");
} else {
return null;
}
}));
})], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44984,G__44985) : dumdom.core.component.call(null,G__44984,G__44985));
})();
portfolio.ui.components.canvas.render_hud = (function portfolio$ui$components$canvas$render_hud(hud){
return portfolio.ui.components.hud.render_hud.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(hud),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(20),new cljs.core.Keyword(null,"left","left",-399115937),(20),new cljs.core.Keyword(null,"right","right",-452581833),(20)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(hud);
if(cljs.core.truth_(temp__5804__auto__)){
var error = temp__5804__auto__;
return (portfolio.ui.components.error.Error.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.error.Error.cljs$core$IFn$_invoke$arity$1(error) : portfolio.ui.components.error.Error.call(null,error));
} else {
return null;
}
})()], 0));
});
/**
 * 
 */
portfolio.ui.components.canvas.Pane = (function (){var G__44995 = (function (p__44997){
var map__44998 = p__44997;
var map__44998__$1 = cljs.core.__destructure_map(map__44998);
var data = map__44998__$1;
var canvases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44998__$1,new cljs.core.Keyword(null,"canvases","canvases",-441653731));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44998__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var browser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44998__$1,new cljs.core.Keyword(null,"browser","browser",828191719));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44998__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var menu_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44998__$1,new cljs.core.Keyword(null,"menu-bar","menu-bar",-1688157683));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44998__$1,new cljs.core.Keyword(null,"title","title",636505583));
var handle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44998__$1,new cljs.core.Keyword(null,"handle","handle",1538948854));
var toolbar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44998__$1,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44998__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane","div.pane",24297878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.into.cljs$core$IFn$_invoke$arity$2(portfolio.ui.components.canvas.get_grid_styles(data),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null))], null),(function (){var G__44999 = toolbar;
if((G__44999 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.Toolbar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Toolbar.cljs$core$IFn$_invoke$arity$1(G__44999) : portfolio.ui.components.canvas.Toolbar.call(null,G__44999));
}
})(),(function (){var G__45000 = menu_bar;
if((G__45000 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.WrappedMenuBar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.WrappedMenuBar.cljs$core$IFn$_invoke$arity$1(G__45000) : portfolio.ui.components.canvas.WrappedMenuBar.call(null,G__45000));
}
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.15s",new cljs.core.Keyword(null,"background","background",-863952629),background], null)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(browser))?new cljs.core.Keyword(null,"dark","dark",1818973999):class_name)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(browser))?(portfolio.ui.components.browser.Browser.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.browser.Browser.cljs$core$IFn$_invoke$arity$1(browser) : portfolio.ui.components.browser.Browser.call(null,browser)):null),(cljs.core.truth_((function (){var or__5045__auto__ = title;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return description;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px"], null)], null),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1","h1.h1",-1010377955),title], null):null),(cljs.core.truth_(description)?(function (){var G__45001 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),description], null);
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(G__45001) : portfolio.ui.components.markdown.Markdown.call(null,G__45001));
})():null)], null):null),((cljs.core.seq(canvases))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.components.canvas.render_canvas,canvases):null)], null),(function (){var G__45002 = handle;
if((G__45002 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.Handle.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Handle.cljs$core$IFn$_invoke$arity$1(G__45002) : portfolio.ui.components.canvas.Handle.call(null,G__45002));
}
})()], null);
});
var G__44996 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Pane",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44995,G__44996) : dumdom.core.component.call(null,G__44995,G__44996));
})();
portfolio.ui.components.canvas.render_layout = (function portfolio$ui$components$canvas$render_layout(data){
if(cljs.core.truth_((function (){var G__45004 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data);
var fexpr__45003 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null);
return (fexpr__45003.cljs$core$IFn$_invoke$arity$1 ? fexpr__45003.cljs$core$IFn$_invoke$arity$1(G__45004) : fexpr__45003.call(null,G__45004));
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),portfolio.ui.components.canvas.get_grid_styles(data),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.components.canvas.render_layout,new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(data)),(function (){var G__45005 = new cljs.core.Keyword(null,"handle","handle",1538948854).cljs$core$IFn$_invoke$arity$1(data);
if((G__45005 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.Handle.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Handle.cljs$core$IFn$_invoke$arity$1(G__45005) : portfolio.ui.components.canvas.Handle.call(null,G__45005));
}
})()], null);
} else {
return (portfolio.ui.components.canvas.Pane.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Pane.cljs$core$IFn$_invoke$arity$1(data) : portfolio.ui.components.canvas.Pane.call(null,data));
}
});
/**
 * 
 */
portfolio.ui.components.canvas.CanvasView = (function (){var G__45006 = (function (data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),portfolio.ui.components.canvas.render_layout(data)], null),(function (){var G__45008 = data;
var G__45008__$1 = (((G__45008 == null))?null:new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(G__45008));
if((G__45008__$1 == null)){
return null;
} else {
return portfolio.ui.components.canvas.render_hud(G__45008__$1);
}
})(),(function (){var G__45009 = data;
var G__45009__$1 = (((G__45009 == null))?null:new cljs.core.Keyword(null,"panel","panel",-558637456).cljs$core$IFn$_invoke$arity$1(G__45009));
if((G__45009__$1 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.CanvasPanel.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.CanvasPanel.cljs$core$IFn$_invoke$arity$1(G__45009__$1) : portfolio.ui.components.canvas.CanvasPanel.call(null,G__45009__$1));
}
})()], null);
});
var G__45007 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/CanvasView",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__45006,G__45007) : dumdom.core.component.call(null,G__45006,G__45007));
})();

//# sourceMappingURL=portfolio.ui.components.canvas.js.map
