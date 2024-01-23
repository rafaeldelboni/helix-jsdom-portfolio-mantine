goog.provide('portfolio.ui');
if((typeof portfolio !== 'undefined') && (typeof portfolio.ui !== 'undefined') && (typeof portfolio.ui.app !== 'undefined')){
} else {
portfolio.ui.app = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
portfolio.ui.get_collections = (function portfolio$ui$get_collections(scenes,collections){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),portfolio.ui.collection.get_default_organization(cljs.core.vals(scenes),cljs.core.vals(collections))));
});
portfolio.ui.portfolio_docs_QMARK_ = (function portfolio$ui$portfolio_docs_QMARK_(user_v){
if((user_v == null)){
return cljs.core.boolean$((function (){var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("localhost",location.hostname);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_find(/\d+\.\d+\.\d+\.\d+/,location.href);
}
})());
} else {
return user_v;
}
});
portfolio.ui.create_app = (function portfolio$ui$create_app(config,canvas_tools,extra_canvas_tools){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"portfolio-docs?","portfolio-docs?",908612814),portfolio.ui.portfolio_docs_QMARK_),new cljs.core.Keyword(null,"scenes","scenes",-425219404),cljs.core.deref(portfolio.data.scenes)),new cljs.core.Keyword(null,"collections","collections",-2114643505),portfolio.ui.get_collections(cljs.core.deref(portfolio.data.scenes),cljs.core.deref(portfolio.data.collections))),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.canvas.create_canvas(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185),new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = canvas_tools;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.canvas.background.create_background_tool(config),portfolio.ui.canvas.viewport.create_viewport_tool(config),portfolio.ui.canvas.grid.create_grid_tool(config),portfolio.ui.canvas.zoom.create_zoom_tool(config),portfolio.ui.canvas.split.create_split_tool(config),portfolio.ui.canvas.docs.create_docs_tool(config),portfolio.ui.canvas.code.create_code_tool(config),portfolio.ui.canvas.compare.create_compare_tool(config),portfolio.ui.canvas.split.create_close_tool(config)], null);
}
})(),extra_canvas_tools)], null))], null));
});
portfolio.ui.eventually_execute = portfolio.homeless.debounce(portfolio.ui.actions.execute_action_BANG_,(250));
portfolio.ui.index_content = (function portfolio$ui$index_content(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45489 = arguments.length;
var i__5770__auto___45490 = (0);
while(true){
if((i__5770__auto___45490 < len__5769__auto___45489)){
args__5775__auto__.push((arguments[i__5770__auto___45490]));

var G__45491 = (i__5770__auto___45490 + (1));
i__5770__auto___45490 = G__45491;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.index_content.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.index_content.cljs$core$IFn$_invoke$arity$variadic = (function (app,p__45471){
var vec__45472 = p__45471;
var map__45475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45472,(0),null);
var map__45475__$1 = cljs.core.__destructure_map(map__45475);
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45475__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var map__45476 = cljs.core.deref(app);
var map__45476__$1 = cljs.core.__destructure_map(map__45476);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45476__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var scenes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45476__$1,new cljs.core.Keyword(null,"scenes","scenes",-425219404));
var collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45476__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var log_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45476__$1,new cljs.core.Keyword(null,"log?","log?",-366002723));
if(cljs.core.truth_(index)){
return requestAnimationFrame((function (_){
var seq__45477 = cljs.core.seq((function (){var G__45482 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(scenes),cljs.core.vals(collections));
if(cljs.core.truth_(ids)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ids),new cljs.core.Keyword(null,"id","id",-1388402092)),G__45482);
} else {
return G__45482;
}
})());
var chunk__45478 = null;
var count__45479 = (0);
var i__45480 = (0);
while(true){
if((i__45480 < count__45479)){
var doc = chunk__45478.cljs$core$IIndexed$_nth$arity$2(null,i__45480);
if(cljs.core.truth_(log_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Index",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(doc)], 0));
} else {
}

portfolio.ui.search.protocols.index(index,doc);


var G__45492 = seq__45477;
var G__45493 = chunk__45478;
var G__45494 = count__45479;
var G__45495 = (i__45480 + (1));
seq__45477 = G__45492;
chunk__45478 = G__45493;
count__45479 = G__45494;
i__45480 = G__45495;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45477);
if(temp__5804__auto__){
var seq__45477__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45477__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45477__$1);
var G__45496 = cljs.core.chunk_rest(seq__45477__$1);
var G__45497 = c__5568__auto__;
var G__45498 = cljs.core.count(c__5568__auto__);
var G__45499 = (0);
seq__45477 = G__45496;
chunk__45478 = G__45497;
count__45479 = G__45498;
i__45480 = G__45499;
continue;
} else {
var doc = cljs.core.first(seq__45477__$1);
if(cljs.core.truth_(log_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Index",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(doc)], 0));
} else {
}

portfolio.ui.search.protocols.index(index,doc);


var G__45500 = cljs.core.next(seq__45477__$1);
var G__45501 = null;
var G__45502 = (0);
var G__45503 = (0);
seq__45477 = G__45500;
chunk__45478 = G__45501;
count__45479 = G__45502;
i__45480 = G__45503;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
}));

(portfolio.ui.index_content.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.index_content.cljs$lang$applyTo = (function (seq45469){
var G__45470 = cljs.core.first(seq45469);
var seq45469__$1 = cljs.core.next(seq45469);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45470,seq45469__$1);
}));

portfolio.ui.render_scene = (function portfolio$ui$render_scene(x){
var temp__5804__auto__ = portfolio.data.get_tapped_scene(x);
if(cljs.core.truth_(temp__5804__auto__)){
var scene = temp__5804__auto__;
portfolio.data.register_repl_scene_BANG_(scene);

return portfolio.ui.actions.execute_action_BANG_(portfolio.ui.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),portfolio.ui.routes.get_scene_location(portfolio.ui.routes.get_current_location(),scene)], null));
} else {
return null;
}
});
portfolio.ui.start_BANG_ = (function portfolio$ui$start_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45504 = arguments.length;
var i__5770__auto___45505 = (0);
while(true){
if((i__5770__auto___45505 < len__5769__auto___45504)){
args__5775__auto__.push((arguments[i__5770__auto___45505]));

var G__45506 = (i__5770__auto___45505 + (1));
i__5770__auto___45505 = G__45506;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return portfolio.ui.start_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(portfolio.ui.start_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45484){
var vec__45485 = p__45484;
var map__45488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45485,(0),null);
var map__45488__$1 = cljs.core.__destructure_map(map__45488);
var opt = map__45488__$1;
var on_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45488__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45488__$1,new cljs.core.Keyword(null,"config","config",994861415));
var canvas_tools = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45488__$1,new cljs.core.Keyword(null,"canvas-tools","canvas-tools",-1946158067));
var extra_canvas_tools = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45488__$1,new cljs.core.Keyword(null,"extra-canvas-tools","extra-canvas-tools",1666309267));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45488__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var get_indexable_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45488__$1,new cljs.core.Keyword(null,"get-indexable-data","get-indexable-data",-1702722423));
var __GT_diffable_45507 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(portfolio.ui.search.get_diffables,(function (){var or__5045__auto__ = get_indexable_data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return portfolio.ui.search.get_indexable_data;
}
})());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(portfolio.ui.app,cljs.core.merge,portfolio.ui.create_app(config,canvas_tools,extra_canvas_tools),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null));

if(cljs.core.truth_(portfolio.ui.client.started_QMARK_(portfolio.ui.app))){
} else {
cljs.core.add_watch(portfolio.data.scenes,new cljs.core.Keyword("portfolio.ui","app","portfolio.ui/app",355044435),(function (_,___$1,old_scenes,scenes){
var collections_45508 = portfolio.ui.get_collections(scenes,new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(portfolio.ui.app)));
var old_collections_45509 = portfolio.ui.get_collections(old_scenes,new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(portfolio.ui.app)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(portfolio.ui.app,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"scenes","scenes",-425219404),scenes),new cljs.core.Keyword(null,"collections","collections",-2114643505),collections_45508);
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"reindex?","reindex?",683464852).cljs$core$IFn$_invoke$arity$2(opt,true))){
portfolio.ui.index_content.cljs$core$IFn$_invoke$arity$variadic(portfolio.ui.app,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(portfolio.ui.search.get_diff_keys(__GT_diffable_45507(scenes),__GT_diffable_45507(old_scenes)),portfolio.ui.search.get_diff_keys(__GT_diffable_45507(collections_45508),__GT_diffable_45507(old_collections_45509)))], null)], 0));
} else {
}

return portfolio.ui.eventually_execute(portfolio.ui.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null));
}));

cljs.core.add_watch(portfolio.data.collections,new cljs.core.Keyword("portfolio.ui","app","portfolio.ui/app",355044435),(function (_,___$1,___$2,collections){
var old_collections = new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(portfolio.ui.app));
var collections__$1 = portfolio.ui.get_collections(new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(portfolio.ui.app)),collections);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(portfolio.ui.app,cljs.core.assoc,new cljs.core.Keyword(null,"collections","collections",-2114643505),collections__$1);

if(cljs.core.truth_(new cljs.core.Keyword(null,"reindex?","reindex?",683464852).cljs$core$IFn$_invoke$arity$2(opt,true))){
return portfolio.ui.index_content.cljs$core$IFn$_invoke$arity$variadic(portfolio.ui.app,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),portfolio.ui.search.get_diff_keys(__GT_diffable_45507(collections__$1),__GT_diffable_45507(old_collections))], null)], 0));
} else {
return null;
}
}));

cljs.core.add_tap(portfolio.ui.render_scene);

window.addEventListener("message",(function (e){
if(cljs.core.truth_(e.data.action)){
var temp__5804__auto__ = portfolio.ui.actions.get_action(e.data);
if(cljs.core.truth_(temp__5804__auto__)){
var action = temp__5804__auto__;
return portfolio.ui.actions.execute_action_BANG_(portfolio.ui.app,action);
} else {
return null;
}
} else {
return null;
}
}));
}

if(cljs.core.truth_(portfolio.ui.client.started_QMARK_(portfolio.ui.app))){
} else {
portfolio.ui.index_content(portfolio.ui.app);
}

return portfolio.ui.client.start_app.cljs$core$IFn$_invoke$arity$variadic(portfolio.ui.app,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),on_render], null)], 0));
}));

(portfolio.ui.start_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(portfolio.ui.start_BANG_.cljs$lang$applyTo = (function (seq45483){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45483));
}));


//# sourceMappingURL=portfolio.ui.js.map
