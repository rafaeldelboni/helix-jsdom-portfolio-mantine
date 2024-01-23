goog.provide('portfolio.data');
portfolio.data.scenes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
portfolio.data.scene_order = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
portfolio.data.collections = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
portfolio.data.render_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Finds scenes that have been deleted. All the scenes in the same namespace
 *   should have :idx 1 apart. If there are scenes in a namespace that are
 *   separated from the rest with :idx more than 1 apart, it means the other scenes
 *   have been re-defined.
 */
portfolio.data.get_deleted_scenes = (function portfolio$data$get_deleted_scenes(scenes){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__41560){
var vec__41561 = p__41560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41561,(0),null);
var scenes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41561,(1),null);
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p__41564){
var vec__41565 = p__41564;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41565,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41565,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(b)),(1));
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx","idx",1053688473),scenes__$1)))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals(scenes))], 0));
});
portfolio.data.purge_removed_scenes = (function portfolio$data$purge_removed_scenes(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(portfolio.data.scenes,(function (scenes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,scenes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),portfolio.data.get_deleted_scenes(scenes)));
}));
});
portfolio.data.eventually_purge_scenes = portfolio.homeless.debounce(portfolio.data.purge_removed_scenes,(50));
/**
 * Finds the line number (if available) and index of the scene. Line number 1 very
 *   likely means the form was sent to the REPL, not recompiled from a file. When
 *   that is the case, we reuse the existing index and line number if possible.
 */
portfolio.data.get_scene_context = (function portfolio$data$get_scene_context(old,new$){
if(cljs.core.truth_(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(new$))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new$);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old);
}
})(),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(new$)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new$))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword(null,"idx","idx",1053688473),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(old);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(portfolio.data.scene_order,cljs.core.inc);
}
})()], null);
} else {
if((new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(new$) == null)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new$);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old);
}
})(),new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(portfolio.data.scene_order,cljs.core.inc)], null);
} else {
return null;
}
}
}
});
portfolio.data.get_next_idx = (function portfolio$data$get_next_idx(ns){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(-1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cljs.core.namespace,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals(cljs.core.deref(portfolio.data.scenes))))) + (1));
});
portfolio.data.register_scene_BANG_ = (function portfolio$data$register_scene_BANG_(scene){
if(cljs.core.not(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot register scene without :id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scene","scene",1523800415),scene], null));
} else {
var map__41578 = portfolio.data.get_scene_context(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(portfolio.data.scenes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)], null)),scene);
var map__41578__$1 = cljs.core.__destructure_map(map__41578);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41578__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41578__$1,new cljs.core.Keyword(null,"line","line",212345235));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(portfolio.data.scenes,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene),(function (){var G__41587 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(scene,new cljs.core.Keyword(null,"param","param",2013631823)),new cljs.core.Keyword(null,"line","line",212345235),line,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),(new Date()).getTime()], 0));
var G__41587__$1 = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41587,new cljs.core.Keyword(null,"title","title",636505583),portfolio.homeless.__GT_title(cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)))):G__41587);
var G__41587__$2 = (((new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(scene) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41587__$1,new cljs.core.Keyword(null,"collection","collection",-683361892),(function (){var G__41591 = scene;
var G__41591__$1 = (((G__41591 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__41591));
var G__41591__$2 = (((G__41591__$1 == null))?null:cljs.core.namespace(G__41591__$1));
if((G__41591__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__41591__$2);
}
})()):G__41587__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"param","param",2013631823).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41587__$2,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"param","param",2013631823).cljs$core$IFn$_invoke$arity$1(scene));
} else {
return G__41587__$2;
}
})());

portfolio.data.eventually_purge_scenes();

return null;
}
});
portfolio.data.register_collection_BANG_ = (function portfolio$data$register_collection_BANG_(id,collection){
if((id instanceof cljs.core.Keyword)){
} else {
throw (new Error(["Assert failed: ","register-collection! must be called with a keyword id as first argument","\n","(keyword? id)"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(portfolio.data.collections,cljs.core.assoc,id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(collection,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
portfolio.data.create_repl_scene = (function portfolio$data$create_repl_scene(scene){
var idx = portfolio.data.get_next_idx("portfolio.repl");
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scene,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("portfolio.repl",["scene-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime())].join('')),new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.re_find(/\d\d:\d\d:\d\d/,cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date())));
}
})(),new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"line","line",212345235),(- idx),new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","terminal","phosphor.regular/terminal",-850127077),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"40 64 112 128 40 192",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["currentColor","none","round","192","round","16","120","192","216"])], null)], null));

return new cljs.core.Keyword("phosphor.regular","terminal","phosphor.regular/terminal",-850127077);
})()
,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"portfolio.repl","portfolio.repl",981727887)], null)], 0));
});
portfolio.data.register_repl_scene_BANG_ = (function portfolio$data$register_repl_scene_BANG_(scene){
portfolio.data.register_scene_BANG_(scene);

if(cljs.core.truth_(new cljs.core.Keyword(null,"portfolio.repl","portfolio.repl",981727887).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(portfolio.data.collections)))){
return null;
} else {
return portfolio.data.register_collection_BANG_(new cljs.core.Keyword(null,"portfolio.repl","portfolio.repl",981727887),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"collection","collection",-683361892),null,new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","terminal-window","phosphor.regular/terminal-window",12406937),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"80 96 120 128 80 160",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["currentColor","none","round","160","round","16","136","160","176"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],["48","8","currentColor","none","round","192","round","16","32","160"])], null)], null));

return new cljs.core.Keyword("phosphor.regular","terminal-window","phosphor.regular/terminal-window",12406937);
})()
,new cljs.core.Keyword(null,"title","title",636505583),"REPL"], null));
}
});
portfolio.data.register_scene_renderer_BANG_ = (function portfolio$data$register_scene_renderer_BANG_(f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(portfolio.data.render_fns,cljs.core.conj,f);
});
portfolio.data.get_tapped_scene = (function portfolio$data$get_tapped_scene(x){
if(cljs.core.truth_(x)){
var fs = cljs.core.deref(portfolio.data.render_fns);
while(true){
var f = cljs.core.first(fs);
var scene = (cljs.core.truth_(f)?(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)):null);
if(cljs.core.truth_(scene)){
return portfolio.data.create_repl_scene(scene);
} else {
if(cljs.core.next(fs)){
var G__41621 = cljs.core.next(fs);
fs = G__41621;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

//# sourceMappingURL=portfolio.data.js.map
