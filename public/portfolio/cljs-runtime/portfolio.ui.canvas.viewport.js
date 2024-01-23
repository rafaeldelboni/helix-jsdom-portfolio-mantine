goog.provide('portfolio.ui.canvas.viewport');
portfolio.ui.canvas.viewport.get_width = (function portfolio$ui$canvas$viewport$get_width(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45264 = arguments.length;
var i__5770__auto___45265 = (0);
while(true){
if((i__5770__auto___45265 < len__5769__auto___45264)){
args__5775__auto__.push((arguments[i__5770__auto___45265]));

var G__45266 = (i__5770__auto___45265 + (1));
i__5770__auto___45265 = G__45266;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return portfolio.ui.canvas.viewport.get_width.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(portfolio.ui.canvas.viewport.get_width.cljs$core$IFn$_invoke$arity$variadic = (function (frame,frame_body,width,p__45234){
var vec__45235 = p__45234;
var map__45238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45235,(0),null);
var map__45238__$1 = cljs.core.__destructure_map(map__45238);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45238__$1,new cljs.core.Keyword("zoom","level","zoom/level",1294076441));
var level__$1 = (function (){var or__5045__auto__ = level;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),width)){
var style = window.getComputedStyle(frame);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((parseInt(style.getPropertyValue("padding-left"),(10)) + parseInt(style.getPropertyValue("padding-right"),(10))) + frame_body.scrollWidth) * level__$1)),"px"].join('');
} else {
if(typeof width === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((width * level__$1)),"px"].join('');
} else {
if((width == null)){
return "100%";
} else {
return width;

}
}
}
}));

(portfolio.ui.canvas.viewport.get_width.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(portfolio.ui.canvas.viewport.get_width.cljs$lang$applyTo = (function (seq45230){
var G__45231 = cljs.core.first(seq45230);
var seq45230__$1 = cljs.core.next(seq45230);
var G__45232 = cljs.core.first(seq45230__$1);
var seq45230__$2 = cljs.core.next(seq45230__$1);
var G__45233 = cljs.core.first(seq45230__$2);
var seq45230__$3 = cljs.core.next(seq45230__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45231,G__45232,G__45233,seq45230__$3);
}));

portfolio.ui.canvas.viewport.get_style_px = (function portfolio$ui$canvas$viewport$get_style_px(style,prop){
var temp__5802__auto__ = (function (){var G__45239 = style;
var G__45239__$1 = (((G__45239 == null))?null:G__45239.getPropertyValue(prop));
if((G__45239__$1 == null)){
return null;
} else {
return cljs.core.not_empty(G__45239__$1);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return parseInt(v,(10));
} else {
return (0);
}
});
portfolio.ui.canvas.viewport.get_height = (function portfolio$ui$canvas$viewport$get_height(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45267 = arguments.length;
var i__5770__auto___45268 = (0);
while(true){
if((i__5770__auto___45268 < len__5769__auto___45267)){
args__5775__auto__.push((arguments[i__5770__auto___45268]));

var G__45269 = (i__5770__auto___45268 + (1));
i__5770__auto___45268 = G__45269;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return portfolio.ui.canvas.viewport.get_height.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(portfolio.ui.canvas.viewport.get_height.cljs$core$IFn$_invoke$arity$variadic = (function (_frame,frame_body,height,p__45244){
var vec__45245 = p__45244;
var map__45248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45245,(0),null);
var map__45248__$1 = cljs.core.__destructure_map(map__45248);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45248__$1,new cljs.core.Keyword("zoom","level","zoom/level",1294076441));
var level__$1 = (function (){var or__5045__auto__ = level;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})();
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,"100%",null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),height)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame_body.parentNode.getBoundingClientRect().height),"px"].join('');
} else {
if(typeof height === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((height * level__$1)),"px"].join('');
} else {
return height;

}
}
}));

(portfolio.ui.canvas.viewport.get_height.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(portfolio.ui.canvas.viewport.get_height.cljs$lang$applyTo = (function (seq45240){
var G__45241 = cljs.core.first(seq45240);
var seq45240__$1 = cljs.core.next(seq45240);
var G__45242 = cljs.core.first(seq45240__$1);
var seq45240__$2 = cljs.core.next(seq45240__$1);
var G__45243 = cljs.core.first(seq45240__$2);
var seq45240__$3 = cljs.core.next(seq45240__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45241,G__45242,G__45243,seq45240__$3);
}));

portfolio.ui.canvas.viewport.get_available_width = (function portfolio$ui$canvas$viewport$get_available_width(el){
return el.parentNode.getBoundingClientRect().width;
});
portfolio.ui.canvas.viewport.prepare_canvas = (function portfolio$ui$canvas$viewport$prepare_canvas(_,el,p__45249){
var map__45250 = p__45249;
var map__45250__$1 = cljs.core.__destructure_map(map__45250);
var opt = map__45250__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45250__$1,new cljs.core.Keyword("viewport","width","viewport/width",809992237));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45250__$1,new cljs.core.Keyword("viewport","height","viewport/height",1951335772));
var frame = portfolio.ui.components.canvas.get_iframe(el);
var frame_body = portfolio.ui.components.canvas.get_iframe_body(el);
var w = portfolio.ui.canvas.viewport.get_width.cljs$core$IFn$_invoke$arity$variadic(frame,frame_body,width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt], 0));
return (el.style.width = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("100%",w)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("100%",(function (){var or__5045__auto__ = height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})()))))?"calc(100% - 40px)":(cljs.core.truth_(((typeof w === 'number')?(portfolio.ui.canvas.viewport.get_available_width(el) <= w):null))?"100%":w
)));
});
portfolio.ui.canvas.viewport.finalize_canvas = (function portfolio$ui$canvas$viewport$finalize_canvas(_,el,p__45251){
var map__45252 = p__45251;
var map__45252__$1 = cljs.core.__destructure_map(map__45252);
var opt = map__45252__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45252__$1,new cljs.core.Keyword("viewport","width","viewport/width",809992237));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45252__$1,new cljs.core.Keyword("viewport","height","viewport/height",1951335772));
var temp__5804__auto__ = portfolio.ui.components.canvas.get_iframe_body(el);
if(cljs.core.truth_(temp__5804__auto__)){
var frame_body = temp__5804__auto__;
var frame = portfolio.ui.components.canvas.get_iframe(el);
var w = portfolio.ui.canvas.viewport.get_width.cljs$core$IFn$_invoke$arity$variadic(frame,frame_body,width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt], 0));
var h = portfolio.ui.canvas.viewport.get_height.cljs$core$IFn$_invoke$arity$variadic(frame,frame_body,height,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt], 0));
var vec__45253 = ((((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("100%",w)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("100%",height)))) && ((((!(typeof width === 'number'))) || ((((40) + width) < portfolio.ui.canvas.viewport.get_available_width(el)))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["20px","rgba(0, 0, 0, 0.1) 0px 1px 5px 0px"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","none"], null));
var margin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45253,(0),null);
var shadow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45253,(1),null);
(el.style.height = h);

(el.style.margin = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(margin)," auto"].join(''));

return (el.style.boxShadow = shadow__$1);
} else {
return null;
}
});
portfolio.ui.canvas.viewport.get_padding = (function portfolio$ui$canvas$viewport$get_padding(var_args){
var G__45257 = arguments.length;
switch (G__45257) {
case 1:
return portfolio.ui.canvas.viewport.get_padding.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portfolio.ui.canvas.viewport.get_padding.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.canvas.viewport.get_padding.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return portfolio.ui.canvas.viewport.get_padding.cljs$core$IFn$_invoke$arity$2(null,xs);
}));

(portfolio.ui.canvas.viewport.get_padding.cljs$core$IFn$_invoke$arity$2 = (function (defaults,xs){
var xs__$1 = ((cljs.core.empty_QMARK_(xs))?new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021).cljs$core$IFn$_invoke$arity$1(defaults):xs);
if(cljs.core.empty_QMARK_(xs__$1)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(20),(20),(20)], null);
} else {
if(typeof xs__$1 === 'number'){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs__$1,xs__$1,xs__$1,xs__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(xs__$1))){
var x = cljs.core.first(xs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x,x], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(xs__$1))){
var vec__45258 = xs__$1;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,h,v,h], null);
} else {
return xs__$1;

}
}
}
}
}));

(portfolio.ui.canvas.viewport.get_padding.cljs$lang$maxFixedArity = 2);

portfolio.ui.canvas.viewport.create_viewport_tool = (function portfolio$ui$canvas$viewport$create_viewport_tool(config){
var default_value = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("viewport","defaults","viewport/defaults",2054751788).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword("viewport","width","viewport/width",809992237),(function (p1__45261_SHARP_){
var or__5045__auto__ = p1__45261_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})),new cljs.core.Keyword("viewport","height","viewport/height",1951335772),(function (p1__45262_SHARP_){
var or__5045__auto__ = p1__45262_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})),new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021),portfolio.ui.canvas.viewport.get_padding);
return portfolio.ui.canvas.addons.create_toolbar_menu_button(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","viewport","canvas/viewport",1810532963),new cljs.core.Keyword(null,"title","title",636505583),"Viewport",new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","browsers","phosphor.regular/browsers",1912891256),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],["80","8","currentColor","none","round","160","round","16","32","128"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M64,80V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8H192",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["currentColor","none","round","112","round","16","32","112","192"])], null)], null));

return new cljs.core.Keyword("phosphor.regular","browsers","phosphor.regular/browsers",1912891256);
})()
,new cljs.core.Keyword(null,"default-value","default-value",232220170),default_value,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45263_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__45263_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(portfolio.ui.canvas.viewport.get_padding,default_value));
}),(function (){var or__5045__auto__ = new cljs.core.Keyword("viewport","options","viewport/options",-576953325).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Auto",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","width","viewport/width",809992237),"100%",new cljs.core.Keyword("viewport","height","viewport/height",1951335772),"100%"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"desktop","desktop",1494219798)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"iPhone 12 / 13 Pro",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","width","viewport/width",809992237),(390),new cljs.core.Keyword("viewport","height","viewport/height",1951335772),(844)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mobile","mobile",1403078170)], null)], null);
}
})()),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.ui.canvas.viewport.prepare_canvas;},new cljs.core.Symbol("portfolio.ui.canvas.viewport","prepare-canvas","portfolio.ui.canvas.viewport/prepare-canvas",2054635772,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.viewport","portfolio.ui.canvas.viewport",1403140653,null),new cljs.core.Symbol(null,"prepare-canvas","prepare-canvas",-1313844156,null),"portfolio/ui/canvas/viewport.cljs",21,1,42,42,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","keys","viewport/keys",-161294996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.viewport.prepare_canvas)?portfolio.ui.canvas.viewport.prepare_canvas.cljs$lang$test:null)])),new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852),new cljs.core.Var(function(){return portfolio.ui.canvas.viewport.finalize_canvas;},new cljs.core.Symbol("portfolio.ui.canvas.viewport","finalize-canvas","portfolio.ui.canvas.viewport/finalize-canvas",1877118547,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.viewport","portfolio.ui.canvas.viewport",1403140653,null),new cljs.core.Symbol(null,"finalize-canvas","finalize-canvas",-735738917,null),"portfolio/ui/canvas/viewport.cljs",22,1,57,57,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","keys","viewport/keys",-161294996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.viewport.finalize_canvas)?portfolio.ui.canvas.viewport.finalize_canvas.cljs$lang$test:null)]))], null));
});
portfolio.ui.canvas.viewport.create_viewport_extension = (function portfolio$ui$canvas$viewport$create_viewport_extension(config){
return portfolio.ui.canvas.addons.create_canvas_extension(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","viewport","canvas/viewport",1810532963),new cljs.core.Keyword(null,"title","title",636505583),"Viewport",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword("viewport","defaults","viewport/defaults",2054751788).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.ui.canvas.viewport.prepare_canvas;},new cljs.core.Symbol("portfolio.ui.canvas.viewport","prepare-canvas","portfolio.ui.canvas.viewport/prepare-canvas",2054635772,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.viewport","portfolio.ui.canvas.viewport",1403140653,null),new cljs.core.Symbol(null,"prepare-canvas","prepare-canvas",-1313844156,null),"portfolio/ui/canvas/viewport.cljs",21,1,42,42,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","keys","viewport/keys",-161294996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.viewport.prepare_canvas)?portfolio.ui.canvas.viewport.prepare_canvas.cljs$lang$test:null)])),new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852),new cljs.core.Var(function(){return portfolio.ui.canvas.viewport.finalize_canvas;},new cljs.core.Symbol("portfolio.ui.canvas.viewport","finalize-canvas","portfolio.ui.canvas.viewport/finalize-canvas",1877118547,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.viewport","portfolio.ui.canvas.viewport",1403140653,null),new cljs.core.Symbol(null,"finalize-canvas","finalize-canvas",-735738917,null),"portfolio/ui/canvas/viewport.cljs",22,1,57,57,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","keys","viewport/keys",-161294996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.viewport.finalize_canvas)?portfolio.ui.canvas.viewport.finalize_canvas.cljs$lang$test:null)]))], null));
});

//# sourceMappingURL=portfolio.ui.canvas.viewport.js.map
