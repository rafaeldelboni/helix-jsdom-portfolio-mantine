goog.provide('portfolio.ui.layout');
portfolio.ui.layout.gallery_QMARK_ = (function portfolio$ui$layout$gallery_QMARK_(selection){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(selection));
});
portfolio.ui.layout.assign_pane_ids = (function portfolio$ui$layout$assign_pane_ids(layout){
if(cljs.core.truth_(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(layout))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(layout,new cljs.core.Keyword(null,"xs","xs",649443341),(function (p1__44309_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(portfolio.ui.layout.assign_pane_ids,p1__44309_SHARP_);
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(layout,new cljs.core.Keyword("portfolio.ui.layout","pane-id","portfolio.ui.layout/pane-id",792660767),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}
});
portfolio.ui.layout.init_layout = (function portfolio$ui$layout$init_layout(state,layout,path){
var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),path], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layout","layout",-2120940921),portfolio.ui.layout.assign_pane_ids(layout),new cljs.core.Keyword(null,"source","source",-433931539),path], null);
}
});
portfolio.ui.layout.get_current_layout_path = (function portfolio$ui$layout$get_current_layout_path(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"current","current",-1088038603)], null);
});
portfolio.ui.layout.get_layout_path = (function portfolio$ui$layout$get_layout_path(layout){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(layout)], null);
});
portfolio.ui.layout.get_view_layout = (function portfolio$ui$layout$get_view_layout(state,selection){
if(portfolio.ui.layout.gallery_QMARK_(selection)){
return cljs.core.assoc_in(portfolio.ui.layout.init_layout(state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("viewport","height","viewport/height",1951335772),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.Keyword("canvas","gallery-defaults","canvas/gallery-defaults",119496358).cljs$core$IFn$_invoke$arity$1(state)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio.ui.layout","gallery-default","portfolio.ui.layout/gallery-default",976812348)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"gallery?","gallery?",-905074488)], null),true);
} else {
var or__5045__auto__ = (function (){var temp__5804__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185),new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(selection)));
if(cljs.core.truth_(temp__5804__auto__)){
var scene = temp__5804__auto__;
return portfolio.ui.layout.init_layout(state,new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)], null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var temp__5804__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185),cljs.core.reverse(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(selection))));
if(cljs.core.truth_(temp__5804__auto__)){
var collection = temp__5804__auto__;
return portfolio.ui.layout.init_layout(state,new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection)], null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var temp__5804__auto__ = new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5804__auto__)){
var layout = temp__5804__auto__;
return portfolio.ui.layout.init_layout(state,layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-layout","state-layout",2065724593)], null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = (function (){var temp__5804__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185),new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(temp__5804__auto__)){
var view = temp__5804__auto__;
return portfolio.ui.layout.init_layout(state,new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185).cljs$core$IFn$_invoke$arity$1(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(view)], null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return portfolio.ui.layout.init_layout(state,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio.ui.layout","default","portfolio.ui.layout/default",-1207920026)], null));
}
}
}
}
}
});
portfolio.ui.layout.get_layout = (function portfolio$ui$layout$get_layout(state,path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,path);
});
portfolio.ui.layout.get_current_layout = (function portfolio$ui$layout$get_current_layout(state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,portfolio.ui.layout.get_current_layout_path()));
});
portfolio.ui.layout.get_panes = (function portfolio$ui$layout$get_panes(layout){
if(cljs.core.truth_((function (){var G__44311 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(layout);
var fexpr__44310 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null);
return (fexpr__44310.cljs$core$IFn$_invoke$arity$1 ? fexpr__44310.cljs$core$IFn$_invoke$arity$1(G__44311) : fexpr__44310.call(null,G__44311));
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(portfolio.ui.layout.get_panes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(layout)], 0));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout], null);
}
});
portfolio.ui.layout.get_layout_panes = (function portfolio$ui$layout$get_layout_panes(p__44312){
var map__44313 = p__44312;
var map__44313__$1 = cljs.core.__destructure_map(map__44313);
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44313__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return portfolio.ui.layout.get_panes(layout);
});
portfolio.ui.layout.split_screen_QMARK_ = (function portfolio$ui$layout$split_screen_QMARK_(state){
return ((1) < cljs.core.count(portfolio.ui.layout.get_layout_panes(portfolio.ui.layout.get_current_layout(state))));
});

//# sourceMappingURL=portfolio.ui.layout.js.map
