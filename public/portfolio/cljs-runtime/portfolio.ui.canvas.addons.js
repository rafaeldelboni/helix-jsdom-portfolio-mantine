goog.provide('portfolio.ui.canvas.addons');
portfolio.ui.canvas.addons.get_tool_id = (function portfolio$ui$canvas$addons$get_tool_id(tool){
var or__5045__auto__ = new cljs.core.Keyword(null,"group-id","group-id",-1316082778).cljs$core$IFn$_invoke$arity$1(tool);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool);
}
});
portfolio.ui.canvas.addons.get_persisted_value = (function portfolio$ui$canvas$addons$get_persisted_value(tool){
try{var G__44718 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio.ui.canvas.addons.get_tool_id(tool));
var G__44718__$1 = (((G__44718 == null))?null:localStorage.getItem(G__44718));
var G__44718__$2 = (((G__44718__$1 == null))?null:cljs.core.not_empty(G__44718__$1));
if((G__44718__$2 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__44718__$2);
}
}catch (e44717){var _e = e44717;
return null;
}});
portfolio.ui.canvas.addons.get_default_value = (function portfolio$ui$canvas$addons$get_default_value(tool){
var or__5045__auto__ = (cljs.core.truth_(new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(tool))?portfolio.ui.canvas.addons.get_persisted_value(tool):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"default-value","default-value",232220170).cljs$core$IFn$_invoke$arity$1(tool);
}
});
portfolio.ui.canvas.addons.get_global_value = (function portfolio$ui$canvas$addons$get_global_value(state,tool){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),portfolio.ui.canvas.addons.get_tool_id(tool),new cljs.core.Keyword(null,"value","value",305978217)], null));
});
portfolio.ui.canvas.addons.get_pane_value = (function portfolio$ui$canvas$addons$get_pane_value(state,tool,pane_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),pane_id,portfolio.ui.canvas.addons.get_tool_id(tool),new cljs.core.Keyword(null,"value","value",305978217)], null));
});
portfolio.ui.canvas.addons.get_tool_value = (function portfolio$ui$canvas$addons$get_tool_value(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44782 = arguments.length;
var i__5770__auto___44783 = (0);
while(true){
if((i__5770__auto___44783 < len__5769__auto___44782)){
args__5775__auto__.push((arguments[i__5770__auto___44783]));

var G__44784 = (i__5770__auto___44783 + (1));
i__5770__auto___44783 = G__44784;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return portfolio.ui.canvas.addons.get_tool_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(portfolio.ui.canvas.addons.get_tool_value.cljs$core$IFn$_invoke$arity$variadic = (function (state,tool,p__44722){
var vec__44723 = p__44722;
var pane_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44723,(0),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([portfolio.ui.canvas.addons.get_global_value(state,tool),(cljs.core.truth_(pane_id)?portfolio.ui.canvas.addons.get_pane_value(state,tool,pane_id):null)], 0));
}));

(portfolio.ui.canvas.addons.get_tool_value.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(portfolio.ui.canvas.addons.get_tool_value.cljs$lang$applyTo = (function (seq44719){
var G__44720 = cljs.core.first(seq44719);
var seq44719__$1 = cljs.core.next(seq44719);
var G__44721 = cljs.core.first(seq44719__$1);
var seq44719__$2 = cljs.core.next(seq44719__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44720,G__44721,seq44719__$2);
}));

portfolio.ui.canvas.addons.get_current_value = (function portfolio$ui$canvas$addons$get_current_value(state,tool,p__44726){
var map__44727 = p__44726;
var map__44727__$1 = cljs.core.__destructure_map(map__44727);
var pane_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44727__$1,new cljs.core.Keyword(null,"pane-id","pane-id",28980857));
var pane_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44727__$1,new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629));
var or__5045__auto__ = (function (){var temp__5804__auto__ = cljs.core.seq(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(tool)))], 0)));
if(temp__5804__auto__){
var ks = temp__5804__auto__;
return cljs.core.not_empty(cljs.core.select_keys(pane_options,ks));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = portfolio.ui.canvas.addons.get_tool_value.cljs$core$IFn$_invoke$arity$variadic(state,tool,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pane_id], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return portfolio.ui.canvas.addons.get_default_value(tool);
}
}
});
portfolio.ui.canvas.addons.get_set_actions = (function portfolio$ui$canvas$addons$get_set_actions(state,tool,pane_id,v){
var id = portfolio.ui.canvas.addons.get_tool_id(tool);
var global_QMARK_ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"global?","global?",-2022837689).cljs$core$IFn$_invoke$arity$1(tool);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (!(portfolio.ui.layout.split_screen_QMARK_(state)));
}
})();
var G__44728 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),pane_id,id,new cljs.core.Keyword(null,"value","value",305978217)], null),v], null)], null);
var G__44728__$1 = (cljs.core.truth_(global_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__44728,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),id,new cljs.core.Keyword(null,"value","value",305978217)], null),v], null)):G__44728);
if(cljs.core.truth_((function (){var and__5043__auto__ = global_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(tool);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__44728__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-in-local-storage","save-in-local-storage",1733717684),id,v], null));
} else {
return G__44728__$1;
}
});
portfolio.ui.canvas.addons.get_override_actions = (function portfolio$ui$canvas$addons$get_override_actions(state,tool,v){
var id = portfolio.ui.canvas.addons.get_tool_id(tool);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5523__auto__ = (function portfolio$ui$canvas$addons$get_override_actions_$_iter__44729(s__44730){
return (new cljs.core.LazySeq(null,(function (){
var s__44730__$1 = s__44730;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44730__$1);
if(temp__5804__auto__){
var s__44730__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44730__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44730__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44732 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44731 = (0);
while(true){
if((i__44731 < size__5522__auto__)){
var vec__44735 = cljs.core._nth(c__5521__auto__,i__44731);
var pane_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44735,(0),null);
cljs.core.chunk_append(b__44732,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),pane_id,id,new cljs.core.Keyword(null,"value","value",305978217)], null)], null));

var G__44785 = (i__44731 + (1));
i__44731 = G__44785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44732),portfolio$ui$canvas$addons$get_override_actions_$_iter__44729(cljs.core.chunk_rest(s__44730__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44732),null);
}
} else {
var vec__44741 = cljs.core.first(s__44730__$2);
var pane_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44741,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),pane_id,id,new cljs.core.Keyword(null,"value","value",305978217)], null)], null),portfolio$ui$canvas$addons$get_override_actions_$_iter__44729(cljs.core.rest(s__44730__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__44746){
var vec__44747 = p__44746;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44747,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44747,(1),null);
return cljs.core.contains_QMARK_(m,id);
}),new cljs.core.Keyword(null,"panes","panes",-721909923).cljs$core$IFn$_invoke$arity$1(state)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),id,new cljs.core.Keyword(null,"value","value",305978217)], null),v], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(tool))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-in-local-storage","save-in-local-storage",1733717684),id,v], null)], null):null)], 0));
});
portfolio.ui.canvas.addons.get_clear_actions = (function portfolio$ui$canvas$addons$get_clear_actions(state,tool,pane_id){
var id = portfolio.ui.canvas.addons.get_tool_id(tool);
var global_QMARK_ = (!(portfolio.ui.layout.split_screen_QMARK_(state)));
var G__44750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),pane_id,id,new cljs.core.Keyword(null,"value","value",305978217)], null)], null)], null);
var G__44750__$1 = ((global_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__44750,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),id,new cljs.core.Keyword(null,"value","value",305978217)], null)], null)):G__44750);
if(cljs.core.truth_((function (){var and__5043__auto__ = global_QMARK_;
if(and__5043__auto__){
return new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(tool);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__44750__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-in-local-storage","save-in-local-storage",1733717684),id,null], null));
} else {
return G__44750__$1;
}
});
portfolio.ui.canvas.addons.get_expand_path = (function portfolio$ui$canvas$addons$get_expand_path(vid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","tools","canvas/tools",-491389486),vid,new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null);
});
portfolio.ui.canvas.addons.get_custom_tool_source_title = (function portfolio$ui$canvas$addons$get_custom_tool_source_title(p__44764){
var vec__44765 = p__44764;
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44765,(0),null);
var G__44768 = source;
var G__44768__$1 = (((G__44768 instanceof cljs.core.Keyword))?G__44768.fqn:null);
switch (G__44768__$1) {
case "scene":
return "Scene config";

break;
case "collection":
return "Collection config";

break;
case "state-layout":
return "Global config";

break;
case "view":
return "Canvas config";

break;
case "portfolio.ui.layout/gallery-default":
return "Default config (gallery)";

break;
case "portfolio.ui.layout/default":
return "Default config";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44768__$1)].join('')));

}
});
portfolio.ui.canvas.addons.prepare_tool_menu = (function portfolio$ui$canvas$addons$prepare_tool_menu(tool,state,pane){
var current_value = portfolio.ui.canvas.addons.get_current_value(state,tool,pane);
var custom_options = (cljs.core.truth_((function (){var and__5043__auto__ = current_value;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(tool))),current_value)));
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),portfolio.ui.canvas.addons.get_custom_tool_source_title(new cljs.core.Keyword(null,"config-source","config-source",-1282385545).cljs$core$IFn$_invoke$arity$1(pane)),new cljs.core.Keyword(null,"value","value",305978217),current_value,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null)], null):null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),(function (){var iter__5523__auto__ = (function portfolio$ui$canvas$addons$prepare_tool_menu_$_iter__44769(s__44770){
return (new cljs.core.LazySeq(null,(function (){
var s__44770__$1 = s__44770;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44770__$1);
if(temp__5804__auto__){
var s__44770__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44770__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44770__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44772 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44771 = (0);
while(true){
if((i__44771 < size__5522__auto__)){
var map__44773 = cljs.core._nth(c__5521__auto__,i__44771);
var map__44773__$1 = cljs.core.__destructure_map(map__44773);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44773__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44773__$1,new cljs.core.Keyword(null,"value","value",305978217));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44773__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
cljs.core.chunk_append(b__44772,(function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,current_value);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_,new cljs.core.Keyword(null,"actions","actions",-812656882),(cljs.core.truth_(disabled_QMARK_)?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.ifn_QMARK_(new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(tool)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fn","call","fn/call",-519998786),new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(tool),value], null):null)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((selected_QMARK_)?portfolio.ui.canvas.addons.get_clear_actions(state,tool,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane)):portfolio.ui.canvas.addons.get_set_actions(state,tool,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane),value)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),portfolio.ui.canvas.addons.get_expand_path(new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane))], null)], null)))))], null);
})());

var G__44787 = (i__44771 + (1));
i__44771 = G__44787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44772),portfolio$ui$canvas$addons$prepare_tool_menu_$_iter__44769(cljs.core.chunk_rest(s__44770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44772),null);
}
} else {
var map__44774 = cljs.core.first(s__44770__$2);
var map__44774__$1 = cljs.core.__destructure_map(map__44774);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44774__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44774__$1,new cljs.core.Keyword(null,"value","value",305978217));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44774__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return cljs.core.cons((function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,current_value);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_,new cljs.core.Keyword(null,"actions","actions",-812656882),(cljs.core.truth_(disabled_QMARK_)?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.ifn_QMARK_(new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(tool)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fn","call","fn/call",-519998786),new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(tool),value], null):null)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((selected_QMARK_)?portfolio.ui.canvas.addons.get_clear_actions(state,tool,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane)):portfolio.ui.canvas.addons.get_set_actions(state,tool,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane),value)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),portfolio.ui.canvas.addons.get_expand_path(new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane))], null)], null)))))], null);
})(),portfolio$ui$canvas$addons$prepare_tool_menu_$_iter__44769(cljs.core.rest(s__44770__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(tool),custom_options));
})()], null);
});
portfolio.ui.canvas.addons.get_tool_title = (function portfolio$ui$canvas$addons$get_tool_title(state,tool,pane){
var or__5045__auto__ = ((cljs.core.ifn_QMARK_(new cljs.core.Keyword(null,"prepare-title","prepare-title",-384904958).cljs$core$IFn$_invoke$arity$1(tool)))?(function (){var f = new cljs.core.Keyword(null,"prepare-title","prepare-title",-384904958).cljs$core$IFn$_invoke$arity$1(tool);
var G__44775 = portfolio.ui.canvas.addons.get_current_value(state,tool,pane);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44775) : f.call(null,G__44775));
})():null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(tool);
}
});
portfolio.ui.canvas.addons.prepare_toolbar_menu_button = (function portfolio$ui$canvas$addons$prepare_toolbar_menu_button(tool,state,pane){
var expand_path = portfolio.ui.canvas.addons.get_expand_path(new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane));
var expanded_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,expand_path));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(tool))?null:portfolio.ui.canvas.addons.get_tool_title(state,tool,pane)),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(tool),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(tool))?portfolio.ui.canvas.addons.get_tool_title(state,tool,pane):null),new cljs.core.Keyword(null,"actions","actions",-812656882),((expanded_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),expand_path], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),expand_path,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool)], null)], null)),new cljs.core.Keyword(null,"menu","menu",352255198),((expanded_QMARK_)?portfolio.ui.canvas.addons.prepare_tool_menu(tool,state,pane):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","render-toolbar-button","portfolio.ui.canvas.protocols/render-toolbar-button",214419771,null),new cljs.core.Var(function(){return portfolio.ui.components.canvas_toolbar_buttons.MenuButton;},new cljs.core.Symbol("portfolio.ui.components.canvas-toolbar-buttons","MenuButton","portfolio.ui.components.canvas-toolbar-buttons/MenuButton",1353896197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.canvas-toolbar-buttons","portfolio.ui.components.canvas-toolbar-buttons",840330419,null),new cljs.core.Symbol(null,"MenuButton","MenuButton",249681575,null),"portfolio/ui/components/canvas_toolbar_buttons.cljs",27,1,7,7,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.ui.components.canvas_toolbar_buttons.MenuButton)?portfolio.ui.components.canvas_toolbar_buttons.MenuButton.cljs$lang$test:null)]))], null));
});
portfolio.ui.canvas.addons.create_toolbar_menu_button = (function portfolio$ui$canvas$addons$create_toolbar_menu_button(data){
var missing = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,data),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),null], null), null));
return cljs.core.with_meta((function (){var G__44776 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613));
if(cljs.core.seq(missing)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44776,new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"problem","problem",1168155148),new cljs.core.Keyword(null,"missing-keys","missing-keys",1110061005),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.set(missing),new cljs.core.Keyword(null,"message","message",-406056002),"Can't create toolbar menu button without keys"], null)], null));
} else {
return G__44776;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-toolbar-button","portfolio.ui.canvas.protocols/prepare-toolbar-button",-1774370808,null),new cljs.core.Var(function(){return portfolio.ui.canvas.addons.prepare_toolbar_menu_button;},new cljs.core.Symbol("portfolio.ui.canvas.addons","prepare-toolbar-menu-button","portfolio.ui.canvas.addons/prepare-toolbar-menu-button",1580553987,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.addons","portfolio.ui.canvas.addons",-683238776,null),new cljs.core.Symbol(null,"prepare-toolbar-menu-button","prepare-toolbar-menu-button",2050463894,null),"portfolio/ui/canvas/addons.cljs",34,1,109,109,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tool","tool",341835057,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"pane","pane",-1060985046,null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.addons.prepare_toolbar_menu_button)?portfolio.ui.canvas.addons.prepare_toolbar_menu_button.cljs$lang$test:null)])),new cljs.core.Symbol("portfolio.ui.canvas.protocols","get-tool-value","portfolio.ui.canvas.protocols/get-tool-value",732248337,null),(function (tool,state,pane_id){
return portfolio.ui.canvas.addons.get_tool_value.cljs$core$IFn$_invoke$arity$variadic(state,tool,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pane_id], 0));
}),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-canvas","portfolio.ui.canvas.protocols/prepare-canvas",-294584957,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (_,___$1,___$2){
return null;
});
}
})(),new cljs.core.Symbol("portfolio.ui.canvas.protocols","finalize-canvas","portfolio.ui.canvas.protocols/finalize-canvas",468082050,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (_,___$1,___$2){
return null;
});
}
})()], null));
});
portfolio.ui.canvas.addons.create_canvas_extension = (function portfolio$ui$canvas$addons$create_canvas_extension(data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data))){
} else {
throw (new Error(["Assert failed: ","Can't create viewport extension without :id","\n","(:id data)"].join('')));
}

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852).cljs$core$IFn$_invoke$arity$1(data);
}
})())){
} else {
throw (new Error(["Assert failed: ","Can't create viewport extension without neither :prepare-canvas nor :finalize-canvas","\n","(or (:prepare-canvas data) (:finalize-canvas data))"].join('')));
}

return cljs.core.with_meta(data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-canvas","portfolio.ui.canvas.protocols/prepare-canvas",-294584957,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (_,___$1,___$2){
return null;
});
}
})(),new cljs.core.Symbol("portfolio.ui.canvas.protocols","finalize-canvas","portfolio.ui.canvas.protocols/finalize-canvas",468082050,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (_,___$1,___$2){
return null;
});
}
})()], null));
});
portfolio.ui.canvas.addons.create_action_button = (function portfolio$ui$canvas$addons$create_action_button(data){
var seq__44777_44788 = cljs.core.seq(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-actions","get-actions",396936459),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),null], null), null));
var chunk__44778_44789 = null;
var count__44779_44790 = (0);
var i__44780_44791 = (0);
while(true){
if((i__44780_44791 < count__44779_44790)){
var k_44792 = chunk__44778_44789.cljs$core$IIndexed$_nth$arity$2(null,i__44780_44791);
if(cljs.core.truth_((k_44792.cljs$core$IFn$_invoke$arity$1 ? k_44792.cljs$core$IFn$_invoke$arity$1(data) : k_44792.call(null,data)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create toolbar action button without key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),k_44792,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}


var G__44793 = seq__44777_44788;
var G__44794 = chunk__44778_44789;
var G__44795 = count__44779_44790;
var G__44796 = (i__44780_44791 + (1));
seq__44777_44788 = G__44793;
chunk__44778_44789 = G__44794;
count__44779_44790 = G__44795;
i__44780_44791 = G__44796;
continue;
} else {
var temp__5804__auto___44797 = cljs.core.seq(seq__44777_44788);
if(temp__5804__auto___44797){
var seq__44777_44798__$1 = temp__5804__auto___44797;
if(cljs.core.chunked_seq_QMARK_(seq__44777_44798__$1)){
var c__5568__auto___44799 = cljs.core.chunk_first(seq__44777_44798__$1);
var G__44800 = cljs.core.chunk_rest(seq__44777_44798__$1);
var G__44801 = c__5568__auto___44799;
var G__44802 = cljs.core.count(c__5568__auto___44799);
var G__44803 = (0);
seq__44777_44788 = G__44800;
chunk__44778_44789 = G__44801;
count__44779_44790 = G__44802;
i__44780_44791 = G__44803;
continue;
} else {
var k_44804 = cljs.core.first(seq__44777_44798__$1);
if(cljs.core.truth_((k_44804.cljs$core$IFn$_invoke$arity$1 ? k_44804.cljs$core$IFn$_invoke$arity$1(data) : k_44804.call(null,data)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create toolbar action button without key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),k_44804,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}


var G__44805 = cljs.core.next(seq__44777_44798__$1);
var G__44806 = null;
var G__44807 = (0);
var G__44808 = (0);
seq__44777_44788 = G__44805;
chunk__44778_44789 = G__44806;
count__44779_44790 = G__44807;
i__44780_44791 = G__44808;
continue;
}
} else {
}
}
break;
}

var show_QMARK_ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"show?","show?",1543842127).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.constantly(true);
}
})();
return cljs.core.with_meta(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"show?","show?",1543842127),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"get-actions","get-actions",396936459),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-toolbar-button","portfolio.ui.canvas.protocols/prepare-toolbar-button",-1774370808,null),(function (tool,state,options){
if(cljs.core.truth_((show_QMARK_.cljs$core$IFn$_invoke$arity$3 ? show_QMARK_.cljs$core$IFn$_invoke$arity$3(tool,state,options) : show_QMARK_.call(null,tool,state,options)))){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(data))?null:new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var fexpr__44781 = new cljs.core.Keyword(null,"get-actions","get-actions",396936459).cljs$core$IFn$_invoke$arity$1(data);
return (fexpr__44781.cljs$core$IFn$_invoke$arity$3 ? fexpr__44781.cljs$core$IFn$_invoke$arity$3(tool,state,options) : fexpr__44781.call(null,tool,state,options));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","render-toolbar-button","portfolio.ui.canvas.protocols/render-toolbar-button",214419771,null),new cljs.core.Var(function(){return portfolio.ui.components.canvas_toolbar_buttons.MenuButton;},new cljs.core.Symbol("portfolio.ui.components.canvas-toolbar-buttons","MenuButton","portfolio.ui.components.canvas-toolbar-buttons/MenuButton",1353896197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.canvas-toolbar-buttons","portfolio.ui.components.canvas-toolbar-buttons",840330419,null),new cljs.core.Symbol(null,"MenuButton","MenuButton",249681575,null),"portfolio/ui/components/canvas_toolbar_buttons.cljs",27,1,7,7,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.ui.components.canvas_toolbar_buttons.MenuButton)?portfolio.ui.components.canvas_toolbar_buttons.MenuButton.cljs$lang$test:null)]))], null));
} else {
return null;
}
})], null));
});

//# sourceMappingURL=portfolio.ui.canvas.addons.js.map
