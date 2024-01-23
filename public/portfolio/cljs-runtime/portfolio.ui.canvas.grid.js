goog.provide('portfolio.ui.canvas.grid');
portfolio.ui.canvas.grid.prepare_canvas = (function portfolio$ui$canvas$grid$prepare_canvas(_data,el,p__45010){
var map__45011 = p__45010;
var map__45011__$1 = cljs.core.__destructure_map(map__45011);
var opt = map__45011__$1;
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45011__$1,new cljs.core.Keyword("grid","offset","grid/offset",289189693));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45011__$1,new cljs.core.Keyword("grid","size","grid/size",1053670865));
var group_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45011__$1,new cljs.core.Keyword("grid","group-size","grid/group-size",-624518492));
var body_style = portfolio.ui.components.canvas.get_iframe(el).style;
var zoom = (function (){var or__5045__auto__ = new cljs.core.Keyword("zoom","level","zoom/level",1294076441).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})();
if(((typeof size === 'number') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),size)))){
var real_size = (zoom * size);
var vec__45014 = new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021).cljs$core$IFn$_invoke$arity$1(opt);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45014,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45014,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45014,(2),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45014,(3),null);
(body_style.backgroundSize = (function (){var big = ((function (){var or__5045__auto__ = group_size;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (5);
}
})() * real_size);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(big),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(big),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(big),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(big),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(real_size),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(real_size),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(real_size),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(real_size),"px"].join('');
})());

(body_style.backgroundPosition = (function (){var offset__$1 = (function (){var or__5045__auto__ = offset;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((4),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((l + (offset__$1 * zoom))),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom * (t + offset__$1))),"px"].join('')));
})());

(body_style.backgroundBlendMode = "difference");

return (body_style.backgroundImage = "linear-gradient(rgba(130, 130, 130, 0.5) 1px, transparent 1px),\n                  linear-gradient(90deg, rgba(130, 130, 130, 0.5) 1px, transparent 1px),\n                  linear-gradient(rgba(130, 130, 130, 0.25) 1px, transparent 1px),\n                  linear-gradient(90deg, rgba(130, 130, 130, 0.25) 1px, transparent 1px)");
} else {
return (body_style.backgroundImage = "none");
}
});
portfolio.ui.canvas.grid.create_grid_tool = (function portfolio$ui$canvas$grid$create_grid_tool(config){
return portfolio.ui.canvas.addons.create_toolbar_menu_button(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","grid","canvas/grid",645886336),new cljs.core.Keyword(null,"title","title",636505583),"Grid",new cljs.core.Keyword(null,"persist?","persist?",-1772568760),true,new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","grid-four","phosphor.regular/grid-four",718198927),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],["48","8","currentColor","none","round","160","round","16","48","160"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["currentColor","none","round","48","round","16","128","208","128"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["currentColor","none","round","128","round","16","48","128","208"])], null)], null));

return new cljs.core.Keyword("phosphor.regular","grid-four","phosphor.regular/grid-four",718198927);
})()
,new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("grid","size","grid/size",1053670865),(0)], null),new cljs.core.Keyword(null,"options","options",99638489),(function (){var or__5045__auto__ = new cljs.core.Keyword("grid","options","grid/options",96459187).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"5 x 20px",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("grid","offset","grid/offset",289189693),(0),new cljs.core.Keyword("grid","size","grid/size",1053670865),(20),new cljs.core.Keyword("grid","group-size","grid/group-size",-624518492),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"No grid",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("grid","size","grid/size",1053670865),(0)], null)], null)], null);
}
})(),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.ui.canvas.grid.prepare_canvas;},new cljs.core.Symbol("portfolio.ui.canvas.grid","prepare-canvas","portfolio.ui.canvas.grid/prepare-canvas",-994829156,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.grid","portfolio.ui.canvas.grid",-1004982230,null),new cljs.core.Symbol(null,"prepare-canvas","prepare-canvas",-1313844156,null),"portfolio/ui/canvas/grid.cljs",21,1,7,7,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_data","_data",246266088,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("grid","keys","grid/keys",1065119436),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"group-size","group-size",996060049,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.grid.prepare_canvas)?portfolio.ui.canvas.grid.prepare_canvas.cljs$lang$test:null)]))], null));
});

//# sourceMappingURL=portfolio.ui.canvas.grid.js.map
