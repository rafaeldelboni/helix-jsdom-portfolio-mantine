goog.provide('portfolio.ui.collection');
portfolio.ui.collection.by_parent_id = (function portfolio$ui$collection$by_parent_id(parent_id){
return (function (p1__41934_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(p1__41934_SHARP_));
});
});
portfolio.ui.collection.ns__GT_path = (function portfolio$ui$collection$ns__GT_path(ns){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns,/\./);
});
portfolio.ui.collection.path__GT_id = (function portfolio$ui$collection$path__GT_id(path){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",path));
});
portfolio.ui.collection.get_collection_title = (function portfolio$ui$collection$get_collection_title(s){
var G__41935 = (((s instanceof cljs.core.Keyword))?cljs.core.name(s):s);
var G__41935__$1 = (((G__41935 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__41935,/\./));
var G__41935__$2 = (((G__41935__$1 == null))?null:cljs.core.last(G__41935__$1));
if((G__41935__$2 == null)){
return null;
} else {
return portfolio.homeless.title_case(G__41935__$2);
}
});
portfolio.ui.collection.suggest_packages = (function portfolio$ui$collection$suggest_packages(scenes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
var id = portfolio.ui.collection.path__GT_id(path);
var G__41937 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),portfolio.ui.collection.get_collection_title(cljs.core.last(path)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"package","package",1189062786)], null);
if(((1) < cljs.core.count(path))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41937,new cljs.core.Keyword(null,"collection","collection",-683361892),portfolio.ui.collection.path__GT_id(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((1),path)));
} else {
return G__41937;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.collection.ns__GT_path,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41936_SHARP_){
var or__5045__auto__ = (function (){var G__41938 = p1__41936_SHARP_;
var G__41938__$1 = (((G__41938 == null))?null:new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(G__41938));
if((G__41938__$1 == null)){
return null;
} else {
return cljs.core.name(G__41938__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.namespace(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__41936_SHARP_));
}
}),scenes)));
});
portfolio.ui.collection.ensure_defaults = (function portfolio$ui$collection$ensure_defaults(collection,scenes){
var G__41939 = collection;
var G__41939__$1 = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(collection)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41939,new cljs.core.Keyword(null,"title","title",636505583),portfolio.ui.collection.get_collection_title(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection))):G__41939);
if((new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(collection) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41939__$1,new cljs.core.Keyword(null,"kind","kind",-717265803),(cljs.core.truth_(cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection)]),new cljs.core.Keyword(null,"collection","collection",-683361892)),scenes))?new cljs.core.Keyword(null,"package","package",1189062786):new cljs.core.Keyword(null,"folder","folder",1515881736)));
} else {
return G__41939__$1;
}
});
portfolio.ui.collection.get_default_organization = (function portfolio$ui$collection$get_default_organization(scenes,collections){
var existing = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),collections));
var packages = (function (){var iter__5523__auto__ = (function portfolio$ui$collection$get_default_organization_$_iter__41943(s__41944){
return (new cljs.core.LazySeq(null,(function (){
var s__41944__$1 = s__41944;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41944__$1);
if(temp__5804__auto__){
var s__41944__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41944__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41944__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41946 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41945 = (0);
while(true){
if((i__41945 < size__5522__auto__)){
var pkg = cljs.core._nth(c__5521__auto__,i__41945);
cljs.core.chunk_append(b__41946,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pkg,cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pkg))], 0)));

var G__41972 = (i__41945 + (1));
i__41945 = G__41972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41946),portfolio$ui$collection$get_default_organization_$_iter__41943(cljs.core.chunk_rest(s__41944__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41946),null);
}
} else {
var pkg = cljs.core.first(s__41944__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pkg,cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pkg))], 0)),portfolio$ui$collection$get_default_organization_$_iter__41943(cljs.core.rest(s__41944__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(portfolio.ui.collection.suggest_packages(scenes));
})();
var folders = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),portfolio.ui.collection.get_collection_title(id),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"folder","folder",1515881736)], null);
}),cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collection","collection",-683361892),packages)));
var configured_folders = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(existing,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collection","collection",-683361892),packages));
var folder_n = cljs.core.count(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),folders),configured_folders)));
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41942_SHARP_){
return portfolio.ui.collection.ensure_defaults(p1__41942_SHARP_,scenes);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41941_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__41941_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__41941_SHARP_))], 0));
}),((((((1) < folder_n)) || (cljs.core.seq(configured_folders))))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(packages,folders):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41940_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41940_SHARP_,new cljs.core.Keyword(null,"collection","collection",-683361892));
}),packages)))));
});
portfolio.ui.collection.get_collection_path = (function portfolio$ui$collection$get_collection_path(p__41947,id){
var map__41948 = p__41947;
var map__41948__$1 = cljs.core.__destructure_map(map__41948);
var scenes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41948__$1,new cljs.core.Keyword(null,"scenes","scenes",-425219404));
var collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41948__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var target = (function (){var or__5045__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals(scenes)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals(collections)));
}
})();
var res = (cljs.core.truth_(target)?(new cljs.core.List(null,target,null,(1),null)):cljs.core.List.EMPTY);
while(true){
var parent_id = new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(cljs.core.first(res));
if(cljs.core.truth_((function (){var and__5043__auto__ = parent_id;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([parent_id]),new cljs.core.Keyword(null,"id","id",-1388402092)),res));
} else {
return and__5043__auto__;
}
})())){
var G__41976 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([parent_id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals(collections))));
res = G__41976;
continue;
} else {
return res;
}
break;
}
});
portfolio.ui.collection.get_collection_scenes = (function portfolio$ui$collection$get_collection_scenes(p__41949,ids){
var map__41950 = p__41949;
var map__41950__$1 = cljs.core.__destructure_map(map__41950);
var collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41950__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var scenes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41950__$1,new cljs.core.Keyword(null,"scenes","scenes",-425219404));
var res = cljs.core.PersistentVector.EMPTY;
var ids__$1 = cljs.core.set(ids);
while(true){
if(cljs.core.seq(ids__$1)){
var G__41977 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(res,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ids__$1,new cljs.core.Keyword(null,"collection","collection",-683361892)),cljs.core.vals(scenes)));
var G__41978 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ids__$1,new cljs.core.Keyword(null,"collection","collection",-683361892)),cljs.core.vals(collections))));
res = G__41977;
ids__$1 = G__41978;
continue;
} else {
return res;
}
break;
}
});
portfolio.ui.collection.get_selected_scenes = (function portfolio$ui$collection$get_selected_scenes(p__41951,id){
var map__41952 = p__41951;
var map__41952__$1 = cljs.core.__destructure_map(map__41952);
var state = map__41952__$1;
var scenes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41952__$1,new cljs.core.Keyword(null,"scenes","scenes",-425219404));
var or__5045__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals(scenes)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return portfolio.ui.collection.get_collection_scenes(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
}
});
portfolio.ui.collection.get_selection = (function portfolio$ui$collection$get_selection(state,id){
var scene = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals(new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state))));
var target = (function (){var or__5045__auto__ = scene;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals(new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(state))));
}
})();
if(cljs.core.truth_(target)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),portfolio.ui.collection.get_selected_scenes(state,id),new cljs.core.Keyword(null,"kind","kind",-717265803),(cljs.core.truth_(scene)?new cljs.core.Keyword(null,"scene","scene",1523800415):new cljs.core.Keyword(null,"collection","collection",-683361892)),new cljs.core.Keyword(null,"path","path",-188191168),portfolio.ui.collection.get_collection_path(state,id),new cljs.core.Keyword(null,"target","target",253001721),target], null);
} else {
return null;
}
});
portfolio.ui.collection.by_id = (function portfolio$ui$collection$by_id(state,id){
var or__5045__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals(new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals(new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(state))));
}
});
portfolio.ui.collection.get_sort_key = (function portfolio$ui$collection$get_sort_key(collection){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$2(collection,(999999999)),(function (){var or__5045__auto__ = (function (){var G__41953 = collection;
var G__41953__$1 = (((G__41953 == null))?null:new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(G__41953));
if((G__41953__$1 == null)){
return null;
} else {
return clojure.string.lower_case(G__41953__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__41954 = collection;
var G__41954__$1 = (((G__41954 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__41954));
if((G__41954__$1 == null)){
return null;
} else {
return cljs.core.name(G__41954__$1);
}
}
})()], null);
});
/**
 * Look for key `k` in map `m`. If not present, traverse collection hierarchy via
 *   `:collection` and look in the parent collection. If the key is not found in
 *   any parent, finally try the `state`.
 */
portfolio.ui.collection.get_in_parents = (function portfolio$ui$collection$get_in_parents(state,m,k){
var m__$1 = m;
while(true){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5802__auto__ = new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(m__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var id = temp__5802__auto__;
var G__41984 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),id], null));
m__$1 = G__41984;
continue;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,k);
}
}
break;
}
});
portfolio.ui.collection.get_folder_illustration = (function portfolio$ui$collection$get_folder_illustration(state,collection,expanded_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var or__5045__auto__ = (cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"expanded-icon","expanded-icon",-230268495).cljs$core$IFn$_invoke$arity$1(collection):new cljs.core.Keyword(null,"collapsed-icon","collapsed-icon",-874318333).cljs$core$IFn$_invoke$arity$1(collection));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(collection);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (cljs.core.truth_(expanded_QMARK_)?portfolio.ui.collection.get_in_parents(state,collection,new cljs.core.Keyword(null,"default-folder-expanded-icon","default-folder-expanded-icon",1716940208)):portfolio.ui.collection.get_in_parents(state,collection,new cljs.core.Keyword(null,"default-folder-collapsed-icon","default-folder-collapsed-icon",1590027459)));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = portfolio.ui.collection.get_in_parents(state,collection,new cljs.core.Keyword(null,"default-folder-icon","default-folder-icon",-1368802029));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
if(cljs.core.truth_(expanded_QMARK_)){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","folder-open","phosphor.regular/folder-open",-1111756712),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M32,208l30.18-90.53A8,8,0,0,1,69.77,112H232a8,8,0,0,1,7.59,10.53L211.09,208Z",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","folder-open","phosphor.regular/folder-open",-1111756712);
} else {
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","folder","phosphor.regular/folder",1329311459),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M216.89,208H39.38A7.4,7.4,0,0,1,32,200.62V80H216a8,8,0,0,1,8,8V200.89A7.11,7.11,0,0,1,216.89,208Z",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M32,80V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34L128,80",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","folder","phosphor.regular/folder",1329311459);
}
}
}
}
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5045__auto__ = (cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"expanded-icon-color","expanded-icon-color",-1316573703).cljs$core$IFn$_invoke$arity$1(collection):new cljs.core.Keyword(null,"collapsed-icon-color","collapsed-icon-color",1864171020).cljs$core$IFn$_invoke$arity$1(collection));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"icon-color","icon-color",620934726).cljs$core$IFn$_invoke$arity$1(collection);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "var(--folder-icon-color)";
}
}
})()], null);
});
portfolio.ui.collection.get_package_illustration = (function portfolio$ui$collection$get_package_illustration(state,collection,expanded_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var or__5045__auto__ = (cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"expanded-icon","expanded-icon",-230268495).cljs$core$IFn$_invoke$arity$1(collection):new cljs.core.Keyword(null,"collapsed-icon","collapsed-icon",-874318333).cljs$core$IFn$_invoke$arity$1(collection));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(collection);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (cljs.core.truth_(expanded_QMARK_)?portfolio.ui.collection.get_in_parents(state,collection,new cljs.core.Keyword(null,"default-package-expanded-icon","default-package-expanded-icon",-46693748)):portfolio.ui.collection.get_in_parents(state,collection,new cljs.core.Keyword(null,"default-package-collapsed-icon","default-package-collapsed-icon",226330667)));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = portfolio.ui.collection.get_in_parents(state,collection,new cljs.core.Keyword(null,"default-package-icon","default-package-icon",-529773453));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","cube","phosphor.regular/cube",-1420851111),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"32.7 76.92 128 129.08 223.3 76.92",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["currentColor","none","round","129.09","round","16","128","232","128"])], null)], null));

return new cljs.core.Keyword("phosphor.regular","cube","phosphor.regular/cube",-1420851111);
}
}
}
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5045__auto__ = (cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"expanded-icon-color","expanded-icon-color",-1316573703).cljs$core$IFn$_invoke$arity$1(collection):new cljs.core.Keyword(null,"collapsed-icon-color","collapsed-icon-color",1864171020).cljs$core$IFn$_invoke$arity$1(collection));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"icon-color","icon-color",620934726).cljs$core$IFn$_invoke$arity$1(collection);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "var(--highlight-color)";
}
}
})()], null);
});
portfolio.ui.collection.get_scene_illustration = (function portfolio$ui$collection$get_scene_illustration(state,scene,selected_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var or__5045__auto__ = (cljs.core.truth_(selected_QMARK_)?new cljs.core.Keyword(null,"selected-icon","selected-icon",-1343164076).cljs$core$IFn$_invoke$arity$1(scene):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(scene);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (cljs.core.truth_(selected_QMARK_)?portfolio.ui.collection.get_in_parents(state,scene,new cljs.core.Keyword(null,"default-scene-selected-icon","default-scene-selected-icon",-1703655455)):null);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = portfolio.ui.collection.get_in_parents(state,scene,new cljs.core.Keyword(null,"default-scene-icon","default-scene-icon",-1142833501));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","bookmark","phosphor.regular/bookmark",-1295251681),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"192 176 127.99 136 64 176",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","bookmark","phosphor.regular/bookmark",-1295251681);
}
}
}
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5045__auto__ = (cljs.core.truth_(selected_QMARK_)?new cljs.core.Keyword(null,"selected-icon-color","selected-icon-color",954239169).cljs$core$IFn$_invoke$arity$1(scene):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"icon-color","icon-color",620934726).cljs$core$IFn$_invoke$arity$1(scene);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
if(cljs.core.truth_(selected_QMARK_)){
return null;
} else {
return "var(--browser-unit-icon-color)";
}
}
}
})()], null);
});
portfolio.ui.collection.get_illustration = (function portfolio$ui$collection$get_illustration(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41990 = arguments.length;
var i__5770__auto___41991 = (0);
while(true){
if((i__5770__auto___41991 < len__5769__auto___41990)){
args__5775__auto__.push((arguments[i__5770__auto___41991]));

var G__41992 = (i__5770__auto___41991 + (1));
i__5770__auto___41991 = G__41992;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return portfolio.ui.collection.get_illustration.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(portfolio.ui.collection.get_illustration.cljs$core$IFn$_invoke$arity$variadic = (function (item,state,p__41958){
var vec__41959 = p__41958;
var current_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41959,(0),null);
var G__41962 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(item);
var G__41962__$1 = (((G__41962 instanceof cljs.core.Keyword))?G__41962.fqn:null);
switch (G__41962__$1) {
case "folder":
return portfolio.ui.collection.get_folder_illustration(state,item,current_QMARK_);

break;
case "package":
return portfolio.ui.collection.get_package_illustration(state,item,current_QMARK_);

break;
default:
return portfolio.ui.collection.get_scene_illustration(state,item,current_QMARK_);

}
}));

(portfolio.ui.collection.get_illustration.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(portfolio.ui.collection.get_illustration.cljs$lang$applyTo = (function (seq41955){
var G__41956 = cljs.core.first(seq41955);
var seq41955__$1 = cljs.core.next(seq41955);
var G__41957 = cljs.core.first(seq41955__$1);
var seq41955__$2 = cljs.core.next(seq41955__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41956,G__41957,seq41955__$2);
}));

portfolio.ui.collection.prepare_selection_menu_bar = (function portfolio$ui$collection$prepare_selection_menu_bar(state,selection,p__41963){
var map__41964 = p__41963;
var map__41964__$1 = cljs.core.__destructure_map(map__41964);
var expand_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41964__$1,new cljs.core.Keyword(null,"expand-path","expand-path",-436455836));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41964__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var tight_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41964__$1,new cljs.core.Keyword(null,"tight?","tight?",1625746895));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(tight_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))], null)], null):(function (){var iter__5523__auto__ = (function portfolio$ui$collection$prepare_selection_menu_bar_$_iter__41965(s__41966){
return (new cljs.core.LazySeq(null,(function (){
var s__41966__$1 = s__41966;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41966__$1);
if(temp__5804__auto__){
var s__41966__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41966__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41966__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41968 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41967 = (0);
while(true){
if((i__41967 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__41967);
cljs.core.chunk_append(b__41968,(function (){var G__41969 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)], null);
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection),item);
if(and__5043__auto__){
return location__$1;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41969,new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_url.cljs$core$IFn$_invoke$arity$2(location__$1,item));
} else {
return G__41969;
}
})());

var G__41996 = (i__41967 + (1));
i__41967 = G__41996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41968),portfolio$ui$collection$prepare_selection_menu_bar_$_iter__41965(cljs.core.chunk_rest(s__41966__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41968),null);
}
} else {
var item = cljs.core.first(s__41966__$2);
return cljs.core.cons((function (){var G__41970 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)], null);
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection),item);
if(and__5043__auto__){
return location__$1;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41970,new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_url.cljs$core$IFn$_invoke$arity$2(location__$1,item));
} else {
return G__41970;
}
})(),portfolio$ui$collection$prepare_selection_menu_bar_$_iter__41965(cljs.core.rest(s__41966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(selection));
})()),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,expand_path))?(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","caret-up","phosphor.regular/caret-up",1003770385),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"48 160 128 80 208 160",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","caret-up","phosphor.regular/caret-up",1003770385);
})()
:(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","caret-down","phosphor.regular/caret-down",-1607045536),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"208 96 128 176 48 96",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","caret-down","phosphor.regular/caret-down",-1607045536);
})()
),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),expand_path,cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,expand_path))], null)], null)], null),new cljs.core.Keyword(null,"illustration","illustration",-48860973),(function (){var G__41971 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection);
if((G__41971 == null)){
return null;
} else {
return portfolio.ui.collection.get_illustration(G__41971,state);
}
})()], null);
});

//# sourceMappingURL=portfolio.ui.collection.js.map
