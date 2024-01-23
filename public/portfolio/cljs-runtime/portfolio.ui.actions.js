goog.provide('portfolio.ui.actions');
/**
 * Takes a map and pairs of path value to assoc-in to the map. Makes `assoc-in`
 *   work like `assoc`, e.g.:
 * 
 *   ```clj
 *   (assoc-in* {}
 *           [:person :name] "Christian"
 *           [:person :language] "Clojure")
 *   ;;=>
 *   {:person {:name "Christian"
 *          :language "Clojure"}}
 *   ```
 */
portfolio.ui.actions.assoc_in_STAR_ = (function portfolio$ui$actions$assoc_in_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44526 = arguments.length;
var i__5770__auto___44527 = (0);
while(true){
if((i__5770__auto___44527 < len__5769__auto___44526)){
args__5775__auto__.push((arguments[i__5770__auto___44527]));

var G__44528 = (i__5770__auto___44527 + (1));
i__5770__auto___44527 = G__44528;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.actions.assoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.actions.assoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(cljs.core.count(args),(2)))){
} else {
throw (new Error(["Assert failed: ","assoc-in* takes a map and pairs of path value","\n","(= 0 (mod (count args) 2))"].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args)))){
} else {
throw (new Error(["Assert failed: ","each path should be a vector","\n","(->> args (partition 2) (map first) (every? vector?))"].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__44367){
var vec__44368 = p__44367;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44368,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44368,(1),null);
return cljs.core.assoc_in(m__$1,path,v);
}),m,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args));
}));

(portfolio.ui.actions.assoc_in_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.actions.assoc_in_STAR_.cljs$lang$applyTo = (function (seq44365){
var G__44366 = cljs.core.first(seq44365);
var seq44365__$1 = cljs.core.next(seq44365);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44366,seq44365__$1);
}));

/**
 * Takes a map and paths to dissoc from it. An example explains it best:
 * 
 *   ```clj
 *   (dissoc-in* {:person {:name "Christian"
 *                      :language "Clojure"}}
 *            [:person :language])
 *   ;;=>
 *   {:person {:name "Christian"}}
 *   ```
 * 
 *   Optionally pass additional paths.
 *   
 */
portfolio.ui.actions.dissoc_in_STAR_ = (function portfolio$ui$actions$dissoc_in_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44530 = arguments.length;
var i__5770__auto___44531 = (0);
while(true){
if((i__5770__auto___44531 < len__5769__auto___44530)){
args__5775__auto__.push((arguments[i__5770__auto___44531]));

var G__44532 = (i__5770__auto___44531 + (1));
i__5770__auto___44531 = G__44532;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.actions.dissoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.actions.dissoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(path))){
return m__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(path))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(path));
} else {
var vec__44373 = cljs.core.reverse(path);
var seq__44374 = cljs.core.seq(vec__44373);
var first__44375 = cljs.core.first(seq__44374);
var seq__44374__$1 = cljs.core.next(seq__44374);
var k = first__44375;
var ks = seq__44374__$1;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.reverse(ks),cljs.core.dissoc,k);

}
}
}),m,args);
}));

(portfolio.ui.actions.dissoc_in_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.actions.dissoc_in_STAR_.cljs$lang$applyTo = (function (seq44371){
var G__44372 = cljs.core.first(seq44371);
var seq44371__$1 = cljs.core.next(seq44371);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44372,seq44371__$1);
}));

portfolio.ui.actions.atom_QMARK_ = (function portfolio$ui$actions$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
}
});
portfolio.ui.actions.get_page_title = (function portfolio$ui$actions$get_page_title(state,p__44377){
var map__44378 = p__44377;
var map__44378__$1 = cljs.core.__destructure_map(map__44378);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44378__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var document__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44378__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var suffix = (cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state))?[" - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state))].join(''):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))){
var G__44379 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(selection);
var G__44379__$1 = (((G__44379 instanceof cljs.core.Keyword))?G__44379.fqn:null);
switch (G__44379__$1) {
case "scene":
return ["Scene: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))),suffix].join('');

break;
case "collection":
return ["Collection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))),suffix].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44379__$1)].join('')));

}
} else {
if(cljs.core.truth_(document__$1)){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(document__$1);
} else {
return ["No scenes found",suffix].join('');

}
}
});
portfolio.ui.actions.go_to_location = (function portfolio$ui$actions$go_to_location(state,location){
var id = portfolio.ui.routes.get_id(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(state));
var current_scenes = portfolio.ui.collection.get_selected_scenes(state,id);
var selection = portfolio.ui.collection.get_selection(state,portfolio.ui.routes.get_id(location));
var layout = portfolio.ui.layout.get_view_layout(state,selection);
var lp = portfolio.ui.layout.get_layout_path(layout);
var expansions = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,true], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44380_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,p1__44380_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.scene_browser.get_expanded_path,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(selection)))], 0));
var document__$1 = (((id == null))?portfolio.ui.document.get_document(portfolio.ui.routes.get_document_id(location)):null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),(function (){var G__44381 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388)], null),location,portfolio.ui.layout.get_current_layout_path(),lp], null);
var G__44381__$1 = (((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,lp) == null))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__44381,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lp,layout], null)):G__44381);
if(cljs.core.seq(expansions)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__44381__$1,expansions);
} else {
return G__44381__$1;
}
})(),new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44382){
var map__44383 = p__44382;
var map__44383__$1 = cljs.core.__destructure_map(map__44383);
var on_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44383__$1,new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44383__$1,new cljs.core.Keyword(null,"params","params",710516235));
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44383__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44383__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),(function (){var or__5045__auto__ = id__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return title;
}
})(),on_unmount,params], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),current_scenes)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44384){
var map__44385 = p__44384;
var map__44385__$1 = cljs.core.__destructure_map(map__44385);
var on_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44385__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44385__$1,new cljs.core.Keyword(null,"params","params",710516235));
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44385__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44385__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){var or__5045__auto__ = id__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return title;
}
})(),on_mount,params], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(selection)))),new cljs.core.Keyword(null,"release","release",-1534371381),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(portfolio.ui.scene.get_scene_atoms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_scenes], 0)),new cljs.core.Keyword(null,"subscribe","subscribe",416253756),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(portfolio.ui.scene.get_scene_atoms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(selection)], 0)),new cljs.core.Keyword(null,"set-page-title","set-page-title",-1142382407),portfolio.ui.actions.get_page_title(state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"document","document",-1329188687),document__$1], null)),new cljs.core.Keyword(null,"update-window-location","update-window-location",770004291),portfolio.ui.routes.get_url.cljs$core$IFn$_invoke$arity$1(location)], null);
});
portfolio.ui.actions.remove_scene_param = (function portfolio$ui$actions$remove_scene_param(var_args){
var G__44387 = arguments.length;
switch (G__44387) {
case 2:
return portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$2 = (function (state,scene_id){
var param = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null)], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null))], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$3 = (function (state,scene_id,k){
var param = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null)], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null))], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.remove_scene_param.cljs$lang$maxFixedArity = 3);

portfolio.ui.actions.set_scene_param = (function portfolio$ui$actions$set_scene_param(var_args){
var G__44389 = arguments.length;
switch (G__44389) {
case 3:
return portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$3 = (function (state,scene_id,v){
var param = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null),v], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,v], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null),cljs.core.deref(param)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$4 = (function (state,scene_id,k,v){
var param = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null),v], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v], null),new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__44390 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null),v], null)], null);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__44390,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null),(function (){var G__44391 = cljs.core.deref(param);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__44391) : k.call(null,G__44391));
})()], null)], null));
} else {
return G__44390;
}
})()], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.set_scene_param.cljs$lang$maxFixedArity = 4);

portfolio.ui.actions.search = (function portfolio$ui$actions$search(p__44392,q){
var map__44393 = p__44392;
var map__44393__$1 = cljs.core.__destructure_map(map__44393);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core.truth_(index)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","suggestions","search/suggestions",-1296554258)], null),portfolio.ui.search.protocols.query(index,q)], null)], null);
} else {
return null;
}
});
portfolio.ui.actions.process_action_result_BANG_ = (function portfolio$ui$actions$process_action_result_BANG_(app,res){
var log = (cljs.core.truth_(new cljs.core.Keyword(null,"log?","log?",-366002723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)))?cljs.core.println:(function() { 
var G__44537__delegate = function (_args){
return null;
};
var G__44537 = function (var_args){
var _args = null;
if (arguments.length > 0) {
var G__44538__i = 0, G__44538__a = new Array(arguments.length -  0);
while (G__44538__i < G__44538__a.length) {G__44538__a[G__44538__i] = arguments[G__44538__i + 0]; ++G__44538__i;}
  _args = new cljs.core.IndexedSeq(G__44538__a,0,null);
} 
return G__44537__delegate.call(this,_args);};
G__44537.cljs$lang$maxFixedArity = 0;
G__44537.cljs$lang$applyTo = (function (arglist__44539){
var _args = cljs.core.seq(arglist__44539);
return G__44537__delegate(_args);
});
G__44537.cljs$core$IFn$_invoke$arity$variadic = G__44537__delegate;
return G__44537;
})()
);
var seq__44394_44540 = cljs.core.seq(new cljs.core.Keyword(null,"release","release",-1534371381).cljs$core$IFn$_invoke$arity$1(res));
var chunk__44395_44541 = null;
var count__44396_44542 = (0);
var i__44397_44543 = (0);
while(true){
if((i__44397_44543 < count__44396_44542)){
var ref_44544 = chunk__44395_44541.cljs$core$IIndexed$_nth$arity$2(null,i__44397_44543);
var G__44402_44545 = "Stop watching atom";
var G__44403_44546 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_44544], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__44402_44545,G__44403_44546) : log.call(null,G__44402_44545,G__44403_44546));

cljs.core.remove_watch(ref_44544,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875));


var G__44547 = seq__44394_44540;
var G__44548 = chunk__44395_44541;
var G__44549 = count__44396_44542;
var G__44550 = (i__44397_44543 + (1));
seq__44394_44540 = G__44547;
chunk__44395_44541 = G__44548;
count__44396_44542 = G__44549;
i__44397_44543 = G__44550;
continue;
} else {
var temp__5804__auto___44551 = cljs.core.seq(seq__44394_44540);
if(temp__5804__auto___44551){
var seq__44394_44552__$1 = temp__5804__auto___44551;
if(cljs.core.chunked_seq_QMARK_(seq__44394_44552__$1)){
var c__5568__auto___44553 = cljs.core.chunk_first(seq__44394_44552__$1);
var G__44554 = cljs.core.chunk_rest(seq__44394_44552__$1);
var G__44555 = c__5568__auto___44553;
var G__44556 = cljs.core.count(c__5568__auto___44553);
var G__44557 = (0);
seq__44394_44540 = G__44554;
chunk__44395_44541 = G__44555;
count__44396_44542 = G__44556;
i__44397_44543 = G__44557;
continue;
} else {
var ref_44558 = cljs.core.first(seq__44394_44552__$1);
var G__44404_44559 = "Stop watching atom";
var G__44405_44560 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_44558], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__44404_44559,G__44405_44560) : log.call(null,G__44404_44559,G__44405_44560));

cljs.core.remove_watch(ref_44558,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875));


var G__44561 = cljs.core.next(seq__44394_44552__$1);
var G__44562 = null;
var G__44563 = (0);
var G__44564 = (0);
seq__44394_44540 = G__44561;
chunk__44395_44541 = G__44562;
count__44396_44542 = G__44563;
i__44397_44543 = G__44564;
continue;
}
} else {
}
}
break;
}

var seq__44406_44565 = cljs.core.seq(new cljs.core.Keyword(null,"fns","fns",1185138786).cljs$core$IFn$_invoke$arity$1(res));
var chunk__44407_44566 = null;
var count__44408_44567 = (0);
var i__44409_44568 = (0);
while(true){
if((i__44409_44568 < count__44408_44567)){
var vec__44426_44569 = chunk__44407_44566.cljs$core$IIndexed$_nth$arity$2(null,i__44409_44568);
var seq__44427_44570 = cljs.core.seq(vec__44426_44569);
var first__44428_44571 = cljs.core.first(seq__44427_44570);
var seq__44427_44572__$1 = cljs.core.next(seq__44427_44570);
var k_44573 = first__44428_44571;
var first__44428_44574__$1 = cljs.core.first(seq__44427_44572__$1);
var seq__44427_44575__$2 = cljs.core.next(seq__44427_44572__$1);
var t_44576 = first__44428_44574__$1;
var first__44428_44577__$2 = cljs.core.first(seq__44427_44575__$2);
var seq__44427_44578__$3 = cljs.core.next(seq__44427_44575__$2);
var f_44579 = first__44428_44577__$2;
var args_44580 = seq__44427_44578__$3;
try{var G__44432_44581 = ["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_44573)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_44576)," with"].join('');
var G__44433_44582 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_44580], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__44432_44581,G__44433_44582) : log.call(null,G__44432_44581,G__44433_44582));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f_44579,args_44580);
}catch (e44429){var e_44583 = e44429;
var G__44430_44584 = app;
var G__44431_44585 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exception","exception",-335277064),e_44583,new cljs.core.Keyword(null,"cause","cause",231901252),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_44573)," on ",cljs.core.name(t_44576)," threw exception"].join(''),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(args_44580))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"arguments",new cljs.core.Keyword(null,"data","data",-232669377),args_44580], null):null)], null)], null)], null);
(portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2 ? portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2(G__44430_44584,G__44431_44585) : portfolio.ui.actions.execute_action_BANG_.call(null,G__44430_44584,G__44431_44585));
}

var G__44586 = seq__44406_44565;
var G__44587 = chunk__44407_44566;
var G__44588 = count__44408_44567;
var G__44589 = (i__44409_44568 + (1));
seq__44406_44565 = G__44586;
chunk__44407_44566 = G__44587;
count__44408_44567 = G__44588;
i__44409_44568 = G__44589;
continue;
} else {
var temp__5804__auto___44590 = cljs.core.seq(seq__44406_44565);
if(temp__5804__auto___44590){
var seq__44406_44591__$1 = temp__5804__auto___44590;
if(cljs.core.chunked_seq_QMARK_(seq__44406_44591__$1)){
var c__5568__auto___44592 = cljs.core.chunk_first(seq__44406_44591__$1);
var G__44593 = cljs.core.chunk_rest(seq__44406_44591__$1);
var G__44594 = c__5568__auto___44592;
var G__44595 = cljs.core.count(c__5568__auto___44592);
var G__44596 = (0);
seq__44406_44565 = G__44593;
chunk__44407_44566 = G__44594;
count__44408_44567 = G__44595;
i__44409_44568 = G__44596;
continue;
} else {
var vec__44434_44597 = cljs.core.first(seq__44406_44591__$1);
var seq__44435_44598 = cljs.core.seq(vec__44434_44597);
var first__44436_44599 = cljs.core.first(seq__44435_44598);
var seq__44435_44600__$1 = cljs.core.next(seq__44435_44598);
var k_44601 = first__44436_44599;
var first__44436_44602__$1 = cljs.core.first(seq__44435_44600__$1);
var seq__44435_44603__$2 = cljs.core.next(seq__44435_44600__$1);
var t_44604 = first__44436_44602__$1;
var first__44436_44605__$2 = cljs.core.first(seq__44435_44603__$2);
var seq__44435_44606__$3 = cljs.core.next(seq__44435_44603__$2);
var f_44607 = first__44436_44605__$2;
var args_44608 = seq__44435_44606__$3;
try{var G__44440_44609 = ["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_44601)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_44604)," with"].join('');
var G__44441_44610 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_44608], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__44440_44609,G__44441_44610) : log.call(null,G__44440_44609,G__44441_44610));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f_44607,args_44608);
}catch (e44437){var e_44611 = e44437;
var G__44438_44612 = app;
var G__44439_44613 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exception","exception",-335277064),e_44611,new cljs.core.Keyword(null,"cause","cause",231901252),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_44601)," on ",cljs.core.name(t_44604)," threw exception"].join(''),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(args_44608))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"arguments",new cljs.core.Keyword(null,"data","data",-232669377),args_44608], null):null)], null)], null)], null);
(portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2 ? portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2(G__44438_44612,G__44439_44613) : portfolio.ui.actions.execute_action_BANG_.call(null,G__44438_44612,G__44439_44613));
}

var G__44614 = cljs.core.next(seq__44406_44591__$1);
var G__44615 = null;
var G__44616 = (0);
var G__44617 = (0);
seq__44406_44565 = G__44614;
chunk__44407_44566 = G__44615;
count__44408_44567 = G__44616;
i__44409_44568 = G__44617;
continue;
}
} else {
}
}
break;
}

var seq__44442_44618 = cljs.core.seq(new cljs.core.Keyword(null,"subscribe","subscribe",416253756).cljs$core$IFn$_invoke$arity$1(res));
var chunk__44443_44619 = null;
var count__44444_44620 = (0);
var i__44445_44621 = (0);
while(true){
if((i__44445_44621 < count__44444_44620)){
var ref_44622 = chunk__44443_44619.cljs$core$IIndexed$_nth$arity$2(null,i__44445_44621);
var G__44450_44623 = "Start watching atom";
var G__44451_44624 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_44622], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__44450_44623,G__44451_44624) : log.call(null,G__44450_44623,G__44451_44624));

cljs.core.add_watch(ref_44622,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875),((function (seq__44442_44618,chunk__44443_44619,count__44444_44620,i__44445_44621,ref_44622,log){
return (function (_,___$1,___$2,___$3){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.update,new cljs.core.Keyword(null,"heartbeat","heartbeat",-1141780952),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});})(seq__44442_44618,chunk__44443_44619,count__44444_44620,i__44445_44621,ref_44622,log))
);


var G__44625 = seq__44442_44618;
var G__44626 = chunk__44443_44619;
var G__44627 = count__44444_44620;
var G__44628 = (i__44445_44621 + (1));
seq__44442_44618 = G__44625;
chunk__44443_44619 = G__44626;
count__44444_44620 = G__44627;
i__44445_44621 = G__44628;
continue;
} else {
var temp__5804__auto___44629 = cljs.core.seq(seq__44442_44618);
if(temp__5804__auto___44629){
var seq__44442_44630__$1 = temp__5804__auto___44629;
if(cljs.core.chunked_seq_QMARK_(seq__44442_44630__$1)){
var c__5568__auto___44631 = cljs.core.chunk_first(seq__44442_44630__$1);
var G__44632 = cljs.core.chunk_rest(seq__44442_44630__$1);
var G__44633 = c__5568__auto___44631;
var G__44634 = cljs.core.count(c__5568__auto___44631);
var G__44635 = (0);
seq__44442_44618 = G__44632;
chunk__44443_44619 = G__44633;
count__44444_44620 = G__44634;
i__44445_44621 = G__44635;
continue;
} else {
var ref_44636 = cljs.core.first(seq__44442_44630__$1);
var G__44452_44637 = "Start watching atom";
var G__44453_44638 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_44636], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__44452_44637,G__44453_44638) : log.call(null,G__44452_44637,G__44453_44638));

cljs.core.add_watch(ref_44636,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875),((function (seq__44442_44618,chunk__44443_44619,count__44444_44620,i__44445_44621,ref_44636,seq__44442_44630__$1,temp__5804__auto___44629,log){
return (function (_,___$1,___$2,___$3){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.update,new cljs.core.Keyword(null,"heartbeat","heartbeat",-1141780952),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});})(seq__44442_44618,chunk__44443_44619,count__44444_44620,i__44445_44621,ref_44636,seq__44442_44630__$1,temp__5804__auto___44629,log))
);


var G__44639 = cljs.core.next(seq__44442_44630__$1);
var G__44640 = null;
var G__44641 = (0);
var G__44642 = (0);
seq__44442_44618 = G__44639;
chunk__44443_44619 = G__44640;
count__44444_44620 = G__44641;
i__44445_44621 = G__44642;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___44643 = new cljs.core.Keyword(null,"update-window-location","update-window-location",770004291).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___44643)){
var url_44644 = temp__5804__auto___44643;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_44644,portfolio.ui.routes.get_current_url())){
} else {
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2("Updating browser URL to",url_44644) : log.call(null,"Updating browser URL to",url_44644));

history.pushState(false,false,url_44644);
}

requestAnimationFrame((function (){
var temp__5804__auto____$1 = (function (){var G__44454 = location.hash;
var G__44454__$1 = (((G__44454 == null))?null:cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__44454,(1)));
if((G__44454__$1 == null)){
return null;
} else {
return document.getElementById(G__44454__$1);
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var el = temp__5804__auto____$1;
return el.scrollIntoView();
} else {
return null;
}
}));
} else {
}

var temp__5804__auto___44645 = new cljs.core.Keyword(null,"set-page-title","set-page-title",-1142382407).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___44645)){
var title_44646 = temp__5804__auto___44645;
var G__44455_44647 = ["Set page title to '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_44646),"'"].join('');
(log.cljs$core$IFn$_invoke$arity$1 ? log.cljs$core$IFn$_invoke$arity$1(G__44455_44647) : log.call(null,G__44455_44647));

(document.title = title_44646);
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res);
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res))){
var G__44456_44648 = ":assoc-in";
var G__44457_44649 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res)], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__44456_44648,G__44457_44649) : log.call(null,G__44456_44648,G__44457_44649));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res))){
var G__44458_44650 = ":dissoc-in";
var G__44459_44651 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res)], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__44458_44650,G__44459_44651) : log.call(null,G__44458_44650,G__44459_44651));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app,(function (state){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.assoc_in_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.dissoc_in_STAR_,state,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res));
}));
} else {
}

var seq__44460_44652 = cljs.core.seq(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(res));
var chunk__44461_44653 = null;
var count__44462_44654 = (0);
var i__44463_44655 = (0);
while(true){
if((i__44463_44655 < count__44462_44654)){
var action_44656 = chunk__44461_44653.cljs$core$IIndexed$_nth$arity$2(null,i__44463_44655);
(portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2 ? portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2(app,action_44656) : portfolio.ui.actions.execute_action_BANG_.call(null,app,action_44656));


var G__44657 = seq__44460_44652;
var G__44658 = chunk__44461_44653;
var G__44659 = count__44462_44654;
var G__44660 = (i__44463_44655 + (1));
seq__44460_44652 = G__44657;
chunk__44461_44653 = G__44658;
count__44462_44654 = G__44659;
i__44463_44655 = G__44660;
continue;
} else {
var temp__5804__auto___44661 = cljs.core.seq(seq__44460_44652);
if(temp__5804__auto___44661){
var seq__44460_44662__$1 = temp__5804__auto___44661;
if(cljs.core.chunked_seq_QMARK_(seq__44460_44662__$1)){
var c__5568__auto___44663 = cljs.core.chunk_first(seq__44460_44662__$1);
var G__44664 = cljs.core.chunk_rest(seq__44460_44662__$1);
var G__44665 = c__5568__auto___44663;
var G__44666 = cljs.core.count(c__5568__auto___44663);
var G__44667 = (0);
seq__44460_44652 = G__44664;
chunk__44461_44653 = G__44665;
count__44462_44654 = G__44666;
i__44463_44655 = G__44667;
continue;
} else {
var action_44668 = cljs.core.first(seq__44460_44662__$1);
(portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2 ? portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2(app,action_44668) : portfolio.ui.actions.execute_action_BANG_.call(null,app,action_44668));


var G__44669 = cljs.core.next(seq__44460_44662__$1);
var G__44670 = null;
var G__44671 = (0);
var G__44672 = (0);
seq__44460_44652 = G__44669;
chunk__44461_44653 = G__44670;
count__44462_44654 = G__44671;
i__44463_44655 = G__44672;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___44673 = new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___44673)){
var vec__44464_44674 = temp__5804__auto___44673;
var ref_44675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44464_44674,(0),null);
var path_44676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44464_44674,(1),null);
var v_44677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44464_44674,(2),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref_44675,cljs.core.assoc_in,path_44676,v_44677);
} else {
}

var temp__5804__auto___44678 = new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___44678)){
var vec__44467_44679 = temp__5804__auto___44678;
var ref_44680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44467_44679,(0),null);
var v_44681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44467_44679,(1),null);
cljs.core.reset_BANG_(ref_44680,v_44681);
} else {
}

var temp__5804__auto___44682 = new cljs.core.Keyword(null,"load-css-files","load-css-files",-1144872475).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___44682)){
var paths_44683 = temp__5804__auto___44682;
portfolio.ui.css.load_css_files(paths_44683);
} else {
}

var temp__5804__auto__ = new cljs.core.Keyword(null,"replace-css-files","replace-css-files",1438305968).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto__)){
var paths = temp__5804__auto__;
return portfolio.ui.css.replace_loaded_css_files(paths);
} else {
return null;
}
});
portfolio.ui.actions.save_in_local_storage = (function portfolio$ui$actions$save_in_local_storage(k,v){
return localStorage.setItem(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
});
portfolio.ui.actions.execute_action_BANG_ = (function portfolio$ui$actions$execute_action_BANG_(app,action){
if(cljs.core.truth_(new cljs.core.Keyword(null,"log?","log?",-366002723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["execute-action!",action], 0));
} else {
}

portfolio.ui.actions.process_action_result_BANG_(app,(function (){var G__44470 = cljs.core.first(action);
var G__44470__$1 = (((G__44470 instanceof cljs.core.Keyword))?G__44470.fqn:null);
switch (G__44470__$1) {
case "assoc-in":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),cljs.core.rest(action)], null);

break;
case "dissoc-in":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),cljs.core.rest(action)], null);

break;
case "fn/call":
var vec__44471 = cljs.core.rest(action);
var seq__44472 = cljs.core.seq(vec__44471);
var first__44473 = cljs.core.first(seq__44472);
var seq__44472__$1 = cljs.core.next(seq__44472);
var fn = first__44473;
var args = seq__44472__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,args);

break;
case "go-to-location":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.go_to_location,cljs.core.deref(app),cljs.core.rest(action));

break;
case "go-to-current-location":
return portfolio.ui.actions.go_to_location(cljs.core.deref(app),portfolio.ui.routes.get_current_location());

break;
case "set-css-files":
var vec__44474 = cljs.core.rest(action);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44474,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-paths","css-paths",582305563)], null),paths], null),new cljs.core.Keyword(null,"load-css-files","load-css-files",-1144872475),paths,new cljs.core.Keyword(null,"replace-css-files","replace-css-files",1438305968),paths], null);

break;
case "remove-scene-param":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.remove_scene_param,cljs.core.deref(app),cljs.core.rest(action));

break;
case "save-in-local-storage":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(portfolio.ui.actions.save_in_local_storage,cljs.core.rest(action));

break;
case "set-scene-param":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.set_scene_param,cljs.core.deref(app),cljs.core.rest(action));

break;
case "search":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.search,cljs.core.deref(app),cljs.core.rest(action));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44470__$1)].join('')));

}
})());

return app;
});
portfolio.ui.actions.available_actions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177),null,new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),null,new cljs.core.Keyword(null,"remove-scene-param","remove-scene-param",-1304315187),null,new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583),null,new cljs.core.Keyword(null,"set-scene-param","set-scene-param",234226032),null,new cljs.core.Keyword(null,"save-in-local-storage","save-in-local-storage",1733717684),null,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),null,new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),null,new cljs.core.Keyword("fn","call","fn/call",-519998786),null], null), null);
portfolio.ui.actions.actions_QMARK_ = (function portfolio$ui$actions$actions_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) && (((cljs.core.seq(x)) && (cljs.core.every_QMARK_((function (p1__44477_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__44477_SHARP_)) && (cljs.core.contains_QMARK_(portfolio.ui.actions.available_actions,cljs.core.first(p1__44477_SHARP_))));
}),x)))));
});
portfolio.ui.actions.parse_int = (function portfolio$ui$actions$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,n)){
return (0);
} else {
return n;
}
});
portfolio.ui.actions.get_action = (function portfolio$ui$actions$get_action(message){
try{var msg = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(msg))){
var action = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(msg));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),action))?(function (){var vec__44489 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44489,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44489,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__44486_SHARP_){
var G__44493 = p1__44486_SHARP_;
if(typeof p1__44486_SHARP_ === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__44493);
} else {
return G__44493;
}
}),path),v], null);
})():null));
} else {
return null;
}
}catch (e44488){var _e = e44488;
return null;
}});
/**
 * Given a Portfolio `app` instance and some prepared data to render, wrap
 *   collections of actions in a function that executes these actions. Using this
 *   function makes it possible to prepare event handlers as a sequence of action
 *   tuples, and have them seemlessly emitted as actions in the components.
 * 
 *   If you need to access the `.-value` of the event target (e.g. for on-change on
 *   input fields, etc), use `:event.target/value` as a placeholder in your action,
 *   and it will be replaced with the value.
 */
portfolio.ui.actions.actionize_data = (function portfolio$ui$actions$actionize_data(app,data){
return clojure.walk.prewalk((function (x){
if(portfolio.ui.actions.actions_QMARK_(x)){
return (function() { 
var G__44685__delegate = function (e,p__44494){
var vec__44495 = p__44494;
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44495,(0),null);
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177)], null)]),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.identity,x)))){
e.preventDefault();

e.stopPropagation();
} else {
}

var seq__44498 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177)], null)]),x));
var chunk__44499 = null;
var count__44500 = (0);
var i__44501 = (0);
while(true){
if((i__44501 < count__44500)){
var action = chunk__44499.cljs$core$IIndexed$_nth$arity$2(null,i__44501);
portfolio.ui.actions.execute_action_BANG_(app,clojure.walk.prewalk(((function (seq__44498,chunk__44499,count__44500,i__44501,action,vec__44495,data__$1){
return (function (ax){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,ax))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,ax);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event.target","value","event.target/value",857030372),ax)){
var G__44509 = e;
var G__44509__$1 = (((G__44509 == null))?null:G__44509.target);
if((G__44509__$1 == null)){
return null;
} else {
return G__44509__$1.value;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event.target","number-value","event.target/number-value",-362876562),ax)){
var G__44510 = e;
var G__44510__$1 = (((G__44510 == null))?null:G__44510.target);
var G__44510__$2 = (((G__44510__$1 == null))?null:G__44510__$1.value);
if((G__44510__$2 == null)){
return null;
} else {
return portfolio.ui.actions.parse_int(G__44510__$2);
}
} else {
return ax;

}
}
}
});})(seq__44498,chunk__44499,count__44500,i__44501,action,vec__44495,data__$1))
,action));


var G__44686 = seq__44498;
var G__44687 = chunk__44499;
var G__44688 = count__44500;
var G__44689 = (i__44501 + (1));
seq__44498 = G__44686;
chunk__44499 = G__44687;
count__44500 = G__44688;
i__44501 = G__44689;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44498);
if(temp__5804__auto__){
var seq__44498__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44498__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44498__$1);
var G__44690 = cljs.core.chunk_rest(seq__44498__$1);
var G__44691 = c__5568__auto__;
var G__44692 = cljs.core.count(c__5568__auto__);
var G__44693 = (0);
seq__44498 = G__44690;
chunk__44499 = G__44691;
count__44500 = G__44692;
i__44501 = G__44693;
continue;
} else {
var action = cljs.core.first(seq__44498__$1);
portfolio.ui.actions.execute_action_BANG_(app,clojure.walk.prewalk(((function (seq__44498,chunk__44499,count__44500,i__44501,action,seq__44498__$1,temp__5804__auto__,vec__44495,data__$1){
return (function (ax){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,ax))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,ax);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event.target","value","event.target/value",857030372),ax)){
var G__44511 = e;
var G__44511__$1 = (((G__44511 == null))?null:G__44511.target);
if((G__44511__$1 == null)){
return null;
} else {
return G__44511__$1.value;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event.target","number-value","event.target/number-value",-362876562),ax)){
var G__44512 = e;
var G__44512__$1 = (((G__44512 == null))?null:G__44512.target);
var G__44512__$2 = (((G__44512__$1 == null))?null:G__44512__$1.value);
if((G__44512__$2 == null)){
return null;
} else {
return portfolio.ui.actions.parse_int(G__44512__$2);
}
} else {
return ax;

}
}
}
});})(seq__44498,chunk__44499,count__44500,i__44501,action,seq__44498__$1,temp__5804__auto__,vec__44495,data__$1))
,action));


var G__44694 = cljs.core.next(seq__44498__$1);
var G__44695 = null;
var G__44696 = (0);
var G__44697 = (0);
seq__44498 = G__44694;
chunk__44499 = G__44695;
count__44500 = G__44696;
i__44501 = G__44697;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__44685 = function (e,var_args){
var p__44494 = null;
if (arguments.length > 1) {
var G__44698__i = 0, G__44698__a = new Array(arguments.length -  1);
while (G__44698__i < G__44698__a.length) {G__44698__a[G__44698__i] = arguments[G__44698__i + 1]; ++G__44698__i;}
  p__44494 = new cljs.core.IndexedSeq(G__44698__a,0,null);
} 
return G__44685__delegate.call(this,e,p__44494);};
G__44685.cljs$lang$maxFixedArity = 1;
G__44685.cljs$lang$applyTo = (function (arglist__44699){
var e = cljs.core.first(arglist__44699);
var p__44494 = cljs.core.rest(arglist__44699);
return G__44685__delegate(e,p__44494);
});
G__44685.cljs$core$IFn$_invoke$arity$variadic = G__44685__delegate;
return G__44685;
})()
;
} else {
return x;
}
}),data);
});
portfolio.ui.actions.dispatch = (function portfolio$ui$actions$dispatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44700 = arguments.length;
var i__5770__auto___44701 = (0);
while(true){
if((i__5770__auto___44701 < len__5769__auto___44700)){
args__5775__auto__.push((arguments[i__5770__auto___44701]));

var G__44702 = (i__5770__auto___44701 + (1));
i__5770__auto___44701 = G__44702;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return portfolio.ui.actions.dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(portfolio.ui.actions.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (actions,e,p__44518){
var vec__44519 = p__44518;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44519,(0),null);
return requestAnimationFrame((function (){
return (actions.cljs$core$IFn$_invoke$arity$2 ? actions.cljs$core$IFn$_invoke$arity$2(e,data) : actions.call(null,e,data));
}));
}));

(portfolio.ui.actions.dispatch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(portfolio.ui.actions.dispatch.cljs$lang$applyTo = (function (seq44514){
var G__44515 = cljs.core.first(seq44514);
var seq44514__$1 = cljs.core.next(seq44514);
var G__44516 = cljs.core.first(seq44514__$1);
var seq44514__$2 = cljs.core.next(seq44514__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44515,G__44516,seq44514__$2);
}));


//# sourceMappingURL=portfolio.ui.actions.js.map
