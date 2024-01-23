goog.provide('portfolio.ui.canvas.code');
portfolio.ui.canvas.code.show_code_QMARK_ = (function portfolio$ui$canvas$code$show_code_QMARK_(state,tool,opts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(portfolio.ui.canvas.addons.get_current_value(state,tool,opts),new cljs.core.Keyword("code","show?","code/show?",1542910810),false);
});
portfolio.ui.canvas.code.create_code_tool = (function portfolio$ui$canvas$code$create_code_tool(config){
var tool = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","code","canvas/code",-1341957138),new cljs.core.Keyword(null,"global?","global?",-2022837689),new cljs.core.Keyword("docs","global-toggle?","docs/global-toggle?",1173853289).cljs$core$IFn$_invoke$arity$2(config,true),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),new cljs.core.Keyword("docs","global-toggle?","docs/global-toggle?",1173853289).cljs$core$IFn$_invoke$arity$2(config,true)], null);
return cljs.core.with_meta(tool,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-toolbar-button","portfolio.ui.canvas.protocols/prepare-toolbar-button",-1774370808,null),(function (_tool,state,options){
var code_QMARK_ = portfolio.ui.canvas.code.show_code_QMARK_(state,tool,options);
if(cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.vals(new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state)))))){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle code",new cljs.core.Keyword(null,"button-group","button-group",-1532145548),new cljs.core.Keyword("canvas","docs","canvas/docs",1557489714),new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","brackets-square","phosphor.regular/brackets-square",839454498),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"80 40 40 40 40 216 80 216",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"176 40 216 40 216 216 176 216",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","brackets-square","phosphor.regular/brackets-square",839454498);
})()
,new cljs.core.Keyword(null,"selected?","selected?",-742502788),code_QMARK_,new cljs.core.Keyword(null,"actions","actions",-812656882),portfolio.ui.canvas.addons.get_set_actions(state,tool,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("code","show?","code/show?",1542910810),cljs.core.not(code_QMARK_)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","render-toolbar-button","portfolio.ui.canvas.protocols/render-toolbar-button",214419771,null),new cljs.core.Var(function(){return portfolio.ui.components.canvas_toolbar_buttons.MenuButton;},new cljs.core.Symbol("portfolio.ui.components.canvas-toolbar-buttons","MenuButton","portfolio.ui.components.canvas-toolbar-buttons/MenuButton",1353896197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.canvas-toolbar-buttons","portfolio.ui.components.canvas-toolbar-buttons",840330419,null),new cljs.core.Symbol(null,"MenuButton","MenuButton",249681575,null),"portfolio/ui/components/canvas_toolbar_buttons.cljs",27,1,7,7,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.ui.components.canvas_toolbar_buttons.MenuButton)?portfolio.ui.components.canvas_toolbar_buttons.MenuButton.cljs$lang$test:null)]))], null));
} else {
return null;
}
}),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-pane","portfolio.ui.canvas.protocols/prepare-pane",351871543,null),(function (_,f,state,view,ctx){
var G__44972 = state;
var G__44973 = view;
var G__44974 = (function (){var G__44975 = ctx;
if(cljs.core.not(portfolio.ui.canvas.code.show_code_QMARK_(state,tool,ctx))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__44975,new cljs.core.Keyword(null,"scenes","scenes",-425219404),(function (scenes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44970_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44970_SHARP_,new cljs.core.Keyword(null,"code","code",1586293142));
}),scenes);
}));
} else {
return G__44975;
}
})();
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44972,G__44973,G__44974) : f.call(null,G__44972,G__44973,G__44974));
}),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-view","portfolio.ui.canvas.protocols/prepare-view",-765650856,null),(function (_,f,state,location,view){
var G__44977 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(state,location,view) : f.call(null,state,location,view));
if(cljs.core.not(portfolio.ui.canvas.code.show_code_QMARK_(state,tool,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pane-id","pane-id",28980857),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(view)], null)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44977,new cljs.core.Keyword(null,"code","code",1586293142));
} else {
return G__44977;
}
})], null));
});

//# sourceMappingURL=portfolio.ui.canvas.code.js.map
