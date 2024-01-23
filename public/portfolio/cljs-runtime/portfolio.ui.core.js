goog.provide('portfolio.ui.core');
portfolio.ui.core.sidebar_QMARK_ = (function portfolio$ui$core$sidebar_QMARK_(p__45434){
var map__45435 = p__45434;
var map__45435__$1 = cljs.core.__destructure_map(map__45435);
var state = map__45435__$1;
var sidebar_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45435__$1,new cljs.core.Keyword(null,"sidebar-status","sidebar-status",922425311));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sidebar_status,new cljs.core.Keyword(null,"hidden","hidden",-312506092))){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sidebar_status,new cljs.core.Keyword(null,"visible","visible",-1024216805))){
return true;
} else {
return (!(portfolio.ui.screen.small_screen_QMARK_(state)));

}
}
});
portfolio.ui.core.prepare_scene_browser = (function portfolio$ui$core$prepare_scene_browser(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45448 = arguments.length;
var i__5770__auto___45449 = (0);
while(true){
if((i__5770__auto___45449 < len__5769__auto___45448)){
args__5775__auto__.push((arguments[i__5770__auto___45449]));

var G__45450 = (i__5770__auto___45449 + (1));
i__5770__auto___45449 = G__45450;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return portfolio.ui.core.prepare_scene_browser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(portfolio.ui.core.prepare_scene_browser.cljs$core$IFn$_invoke$arity$variadic = (function (state,location,p__45440){
var vec__45441 = p__45440;
var map__45444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45441,(0),null);
var map__45444__$1 = cljs.core.__destructure_map(map__45444);
var select_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45444__$1,new cljs.core.Keyword(null,"select-actions","select-actions",-859150860));
return clojure.walk.postwalk((function (x){
if(((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio.ui.core","navigate-to","portfolio.ui.core/navigate-to",266108851),cljs.core.first(x))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),portfolio.ui.routes.get_location(location,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.second(x)], null))], null);
} else {
return x;
}
}),portfolio.ui.scene_browser.prepare_browser(state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path-ctx","path-ctx",326904938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"location","location",1815599388),location,new cljs.core.Keyword(null,"select-actions","select-actions",-859150860),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio.ui.core","navigate-to","portfolio.ui.core/navigate-to",266108851),new cljs.core.Keyword("portfolio.ui.scene-browser","target-id","portfolio.ui.scene-browser/target-id",-1487055392)], null)], null),select_actions),new cljs.core.Keyword(null,"current-id","current-id",210783650),portfolio.ui.routes.get_id(location)], null)));
}));

(portfolio.ui.core.prepare_scene_browser.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(portfolio.ui.core.prepare_scene_browser.cljs$lang$applyTo = (function (seq45437){
var G__45438 = cljs.core.first(seq45437);
var seq45437__$1 = cljs.core.next(seq45437);
var G__45439 = cljs.core.first(seq45437__$1);
var seq45437__$2 = cljs.core.next(seq45437__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45438,G__45439,seq45437__$2);
}));

portfolio.ui.core.prepare_sidebar = (function portfolio$ui$core$prepare_sidebar(state,location){
if(portfolio.ui.core.sidebar_QMARK_(state)){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(360),new cljs.core.Keyword(null,"slide?","slide?",1648217264),cljs.core.boolean$(new cljs.core.Keyword(null,"sidebar-status","sidebar-status",922425311).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.not_empty(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","caret-double-left","phosphor.regular/caret-double-left",-2015845538),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"200 208 120 128 200 48",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"120 208 40 128 120 48",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","caret-double-left","phosphor.regular/caret-double-left",-2015845538);
})()
,new cljs.core.Keyword(null,"text","text",-1790561697),"Hide sidebar",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar-status","sidebar-status",922425311)], null),((portfolio.ui.screen.small_screen_QMARK_(state))?new cljs.core.Keyword(null,"auto","auto",-566279492):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Portfolio documentation",new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","book","phosphor.regular/book",-999592305),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"48 216 48 224 192 224",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","book","phosphor.regular/book",-999592305);
})()
,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"index"], null)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"items","items",1031954938),portfolio.ui.core.prepare_scene_browser(state,location),new cljs.core.Keyword(null,"search","search",1564939822),(cljs.core.truth_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state))?portfolio.ui.search.prepare_search(state,location):null)], null);
} else {
return null;
}
});
portfolio.ui.core.prepare_header = (function portfolio$ui$core$prepare_header(state,location){
if(portfolio.ui.core.sidebar_QMARK_(state)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((portfolio.ui.screen.small_screen_QMARK_(state))?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","caret-double-right","phosphor.regular/caret-double-right",-125331978),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"56 48 136 128 56 208",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"136 48 216 128 136 208",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","caret-double-right","phosphor.regular/caret-double-right",-125331978);
})()
,new cljs.core.Keyword(null,"text","text",-1790561697),"Show sidebar",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar-status","sidebar-status",922425311)], null),((portfolio.ui.screen.small_screen_QMARK_(state))?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"auto","auto",-566279492))], null)], null)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Portfolio documentation",new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","book","phosphor.regular/book",-999592305),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"48 216 48 224 192 224",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","book","phosphor.regular/book",-999592305);
})()
,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"index"], null)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"menu-bar","menu-bar",-1688157683),portfolio.ui.collection.prepare_selection_menu_bar(state,new cljs.core.Keyword(null,"current-selection","current-selection",-812715814).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expand-path","expand-path",-436455836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-menu-expanded?","header-menu-expanded?",1750347566)], null),new cljs.core.Keyword(null,"location","location",1815599388),location,new cljs.core.Keyword(null,"tight?","tight?",1625746895),portfolio.ui.screen.small_screen_QMARK_(state)], null)),new cljs.core.Keyword(null,"menu","menu",352255198),(cljs.core.truth_(new cljs.core.Keyword(null,"header-menu-expanded?","header-menu-expanded?",1750347566).cljs$core$IFn$_invoke$arity$1(state))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),portfolio.ui.core.prepare_scene_browser.cljs$core$IFn$_invoke$arity$variadic(state,location,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select-actions","select-actions",-859150860),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-menu-expanded?","header-menu-expanded?",1750347566)], null),false], null)], null)], null)], 0))], null):null)], null);
}
});
portfolio.ui.core.get_current_view = (function portfolio$ui$core$get_current_view(state,_location){
return cljs.core.first(new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(state));
});
portfolio.ui.core.prepare_view_option = (function portfolio$ui$core$prepare_view_option(current_view,view){
var G__45445 = view;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_view),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(view))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45445,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
} else {
return G__45445;
}
});
portfolio.ui.core.prepare_data = (function portfolio$ui$core$prepare_data(state,location){
var scenes_QMARK_ = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state)));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-selection","current-selection",-812715814),portfolio.ui.collection.get_selection(state,portfolio.ui.routes.get_id(location)));
var current_view = portfolio.ui.core.get_current_view(state__$1,location);
var document__$1 = portfolio.ui.document.get_document(portfolio.ui.routes.get_document_id(location));
var G__45447 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"small?","small?",95242445),portfolio.ui.screen.small_screen_QMARK_(state__$1),new cljs.core.Keyword(null,"tab-bar","tab-bar",-787971209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45446_SHARP_){
return portfolio.ui.core.prepare_view_option(current_view,p1__45446_SHARP_);
}),new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(state__$1))], null),new cljs.core.Keyword(null,"view","view",1247994814),(cljs.core.truth_(document__$1)?portfolio.ui.document.prepare_view(state__$1,location,document__$1):((scenes_QMARK_)?portfolio.ui.view.prepare_data(current_view,state__$1,location):portfolio.ui.document.prepare_view(state__$1,location,portfolio.ui.document.get_document(new cljs.core.Keyword("document","up-and-running","document/up-and-running",854215557)))
))], null);
if(scenes_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__45447,new cljs.core.Keyword(null,"header","header",119441134),portfolio.ui.core.prepare_header(state__$1,location),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sidebar","sidebar",35784458),portfolio.ui.core.prepare_sidebar(state__$1,location)], 0));
} else {
return G__45447;
}
});

//# sourceMappingURL=portfolio.ui.core.js.map
