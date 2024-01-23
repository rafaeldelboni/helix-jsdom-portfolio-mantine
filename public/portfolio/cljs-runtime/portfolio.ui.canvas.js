goog.provide('portfolio.ui.canvas');
portfolio.ui.canvas.view_impl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.view","render-view","portfolio.ui.view/render-view",657855785,null),new cljs.core.Var(function(){return portfolio.ui.components.canvas.CanvasView;},new cljs.core.Symbol("portfolio.ui.components.canvas","CanvasView","portfolio.ui.components.canvas/CanvasView",1850747569,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.canvas","portfolio.ui.components.canvas",-1179967811,null),new cljs.core.Symbol(null,"CanvasView","CanvasView",1270527477,null),"portfolio/ui/components/canvas.cljs",27,1,402,402,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.ui.components.canvas.CanvasView)?portfolio.ui.components.canvas.CanvasView.cljs$lang$test:null)]))], null);
portfolio.ui.canvas.get_current_addon = (function portfolio$ui$canvas$get_current_addon(location,addons){
var or__5045__auto__ = (function (){var temp__5804__auto__ = (function (){var G__45070 = location;
var G__45070__$1 = (((G__45070 == null))?null:new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(G__45070));
var G__45070__$2 = (((G__45070__$1 == null))?null:new cljs.core.Keyword(null,"addon","addon",931813532).cljs$core$IFn$_invoke$arity$1(G__45070__$1));
if((G__45070__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__45070__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),addons));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first(addons);
}
});
portfolio.ui.canvas.prepare_panel = (function portfolio$ui$canvas$prepare_panel(state,location,scene,addons){
var current_addon = portfolio.ui.canvas.get_current_addon(location,addons);
var minimize_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","panel","canvas/panel",892496792),new cljs.core.Keyword(null,"minimized?","minimized?",1807883709)], null);
var content = portfolio.ui.canvas.protocols.prepare_panel_content(current_addon,state,scene);
var minimized_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,minimize_path,cljs.core.not(content));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),(function (){var iter__5523__auto__ = (function portfolio$ui$canvas$prepare_panel_$_iter__45072(s__45073){
return (new cljs.core.LazySeq(null,(function (){
var s__45073__$1 = s__45073;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45073__$1);
if(temp__5804__auto__){
var s__45073__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45073__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45073__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45075 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45074 = (0);
while(true){
if((i__45074 < size__5522__auto__)){
var addon = cljs.core._nth(c__5521__auto__,i__45074);
cljs.core.chunk_append(b__45075,(function (){var G__45076 = addon;
var G__45076__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_addon,addon))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45076,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true):G__45076);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_addon,addon)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45076__$1,new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_addon_url(location,addon));
} else {
return G__45076__$1;
}
})());

var G__45207 = (i__45074 + (1));
i__45074 = G__45207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45075),portfolio$ui$canvas$prepare_panel_$_iter__45072(cljs.core.chunk_rest(s__45073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45075),null);
}
} else {
var addon = cljs.core.first(s__45073__$2);
return cljs.core.cons((function (){var G__45077 = addon;
var G__45077__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_addon,addon))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45077,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true):G__45077);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_addon,addon)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45077__$1,new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_addon_url(location,addon));
} else {
return G__45077__$1;
}
})(),portfolio$ui$canvas$prepare_panel_$_iter__45072(cljs.core.rest(s__45073__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(addons);
})(),new cljs.core.Keyword(null,"minimized?","minimized?",1807883709),minimized_QMARK_,new cljs.core.Keyword(null,"button","button",1456579943),(cljs.core.truth_(minimized_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Maximize",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),minimize_path], null)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"up","up",-269712113)], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Minimize",new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),minimize_path,true], null)], null)], null)),new cljs.core.Keyword(null,"content","content",15833224),content], null);
});
portfolio.ui.canvas.get_tool_defaults = (function portfolio$ui$canvas$get_tool_defaults(tools){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.canvas.addons.get_default_value,tools));
});
portfolio.ui.canvas.toolbar_value_QMARK_ = (function portfolio$ui$canvas$toolbar_value_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$ui$canvas$protocols$ICanvasToolValue$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(portfolio.ui.canvas.protocols.ICanvasToolValue,tool):false)):cljs.core.native_satisfies_QMARK_(portfolio.ui.canvas.protocols.ICanvasToolValue,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.ifn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tool),new cljs.core.Symbol("portfolio.ui.canvas.protocols","get-tool-value","portfolio.ui.canvas.protocols/get-tool-value",732248337,null)));
}
});
portfolio.ui.canvas.get_tool_values = (function portfolio$ui$canvas$get_tool_values(state,id,tools){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45087_SHARP_){
return portfolio.ui.canvas.protocols.get_tool_value(p1__45087_SHARP_,state,id);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(portfolio.ui.canvas.toolbar_value_QMARK_,tools)));
});
portfolio.ui.canvas.prepare_error = (function portfolio$ui$canvas$prepare_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45208 = arguments.length;
var i__5770__auto___45209 = (0);
while(true){
if((i__5770__auto___45209 < len__5769__auto___45208)){
args__5775__auto__.push((arguments[i__5770__auto___45209]));

var G__45210 = (i__5770__auto___45209 + (1));
i__5770__auto___45209 = G__45210;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.canvas.prepare_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.canvas.prepare_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__45096,p__45097){
var map__45098 = p__45096;
var map__45098__$1 = cljs.core.__destructure_map(map__45098);
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45098__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45098__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45098__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var vec__45099 = p__45097;
var scene = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45099,(0),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__5045__auto__ = exception.message;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.truth_(exception)){
return ["Exception was not an Error instance: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception)].join('');
} else {
return null;
}
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45092_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__45092_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),portfolio.ui.code.code_str);
}),data),(function (){var temp__5804__auto__ = cljs.core.ex_data(exception);
if(cljs.core.truth_(temp__5804__auto__)){
var data__$1 = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"ex-data",new cljs.core.Keyword(null,"data","data",-232669377),portfolio.ui.code.code_str(data__$1)], null);
} else {
return null;
}
})()),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"component-params","component-params",-1900426525).cljs$core$IFn$_invoke$arity$1(scene);
if(cljs.core.truth_(temp__5804__auto__)){
var params = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Component params",new cljs.core.Keyword(null,"data","data",-232669377),params], null);
} else {
return null;
}
})()),new cljs.core.Keyword(null,"stack","stack",-793405930),exception.stack,new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5045__auto__ = cause;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "Failed to render component";
}
})()], null);
}));

(portfolio.ui.canvas.prepare_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.canvas.prepare_error.cljs$lang$applyTo = (function (seq45094){
var G__45095 = cljs.core.first(seq45094);
var seq45094__$1 = cljs.core.next(seq45094);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45095,seq45094__$1);
}));

portfolio.ui.canvas.prepare_canvas = (function portfolio$ui$canvas$prepare_canvas(options,p__45102){
var map__45103 = p__45102;
var map__45103__$1 = cljs.core.__destructure_map(map__45103);
var canvas = map__45103__$1;
var scene = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45103__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));
var f = new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(canvas));
var map__45104 = scene;
var map__45104__$1 = cljs.core.__destructure_map(map__45104);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45104__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var component_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45104__$1,new cljs.core.Keyword(null,"component-params","component-params",-1900426525));
var error = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(canvas,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),component_params,new cljs.core.Keyword(null,"runtime-error","runtime-error",-2116843646)], null));
var canvas__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(canvas,new cljs.core.Keyword(null,"opt","opt",-794706369),options);
var G__45105 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(canvas__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"rendered-data","rendered-data",1076820229),new cljs.core.Keyword(null,"options","options",99638489)], null),options);
var G__45105__$1 = ((cljs.core.ifn_QMARK_(f))?cljs.core.assoc_in(G__45105,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,options)):G__45105);
var G__45105__$2 = (((error == null))?cljs.core.assoc_in(G__45105__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"report-render-error","report-render-error",-2098634445)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),id,component_params,new cljs.core.Keyword(null,"runtime-error","runtime-error",-2116843646)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword("action","exception","action/exception",-1254845906),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword("action","info","action/info",-664115456),new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword("action","cause","action/cause",1369441962)], null)], null)], null)):G__45105__$1);
if(cljs.core.truth_(error)){
return cljs.core.assoc_in(G__45105__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"error","error",-978969032)], null),portfolio.ui.canvas.prepare_error.cljs$core$IFn$_invoke$arity$variadic(error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scene], 0)));
} else {
return G__45105__$2;
}
});
portfolio.ui.canvas.toolbar_button_QMARK_ = (function portfolio$ui$canvas$toolbar_button_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$ui$canvas$protocols$ICanvasToolbarButtonData$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(portfolio.ui.canvas.protocols.ICanvasToolbarButtonData,tool):false)):cljs.core.native_satisfies_QMARK_(portfolio.ui.canvas.protocols.ICanvasToolbarButtonData,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.ifn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tool),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-toolbar-button","portfolio.ui.canvas.protocols/prepare-toolbar-button",-1774370808,null)));
}
});
portfolio.ui.canvas.dark_QMARK_ = (function portfolio$ui$canvas$dark_QMARK_(background){
if(cljs.core.truth_(background)){
return (new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(portfolio.ui.color.rgb__GT_hsl(portfolio.ui.color.__GT_rgb(background))) < (40));
} else {
return null;
}
});
portfolio.ui.canvas.create_button_groups = (function portfolio$ui$canvas$create_button_groups(buttons){
var buttons__$1 = buttons;
var grouped = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by(new cljs.core.Keyword(null,"button-group","button-group",-1532145548),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"button-group","button-group",-1532145548),buttons__$1)));
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.core.first(buttons__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var map__45108 = temp__5802__auto__;
var map__45108__$1 = cljs.core.__destructure_map(map__45108);
var button = map__45108__$1;
var button_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45108__$1,new cljs.core.Keyword(null,"button-group","button-group",-1532145548));
var G__45213 = cljs.core.next(buttons__$1);
var G__45214 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(grouped,button_group);
var G__45215 = (((button_group == null))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,button):(cljs.core.truth_((grouped.cljs$core$IFn$_invoke$arity$1 ? grouped.cljs$core$IFn$_invoke$arity$1(button_group) : grouped.call(null,button_group)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),(grouped.cljs$core$IFn$_invoke$arity$1 ? grouped.cljs$core$IFn$_invoke$arity$1(button_group) : grouped.call(null,button_group))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","render-toolbar-button","portfolio.ui.canvas.protocols/render-toolbar-button",214419771,null),new cljs.core.Var(function(){return portfolio.ui.components.canvas_toolbar_buttons.ButtonGroup;},new cljs.core.Symbol("portfolio.ui.components.canvas-toolbar-buttons","ButtonGroup","portfolio.ui.components.canvas-toolbar-buttons/ButtonGroup",-873134790,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.canvas-toolbar-buttons","portfolio.ui.components.canvas-toolbar-buttons",840330419,null),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null),"portfolio/ui/components/canvas_toolbar_buttons.cljs",28,1,33,33,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.ui.components.canvas_toolbar_buttons.ButtonGroup)?portfolio.ui.components.canvas_toolbar_buttons.ButtonGroup.cljs$lang$test:null)]))], null))):res
));
buttons__$1 = G__45213;
grouped = G__45214;
res = G__45215;
continue;
} else {
return res;
}
break;
}
});
portfolio.ui.canvas.specifically_sized_QMARK_ = (function portfolio$ui$canvas$specifically_sized_QMARK_(p__45109){
var map__45110 = p__45109;
var map__45110__$1 = cljs.core.__destructure_map(map__45110);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45110__$1,new cljs.core.Keyword("viewport","width","viewport/width",809992237));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45110__$1,new cljs.core.Keyword("viewport","height","viewport/height",1951335772));
return ((typeof width === 'number') || (typeof height === 'number'));
});
portfolio.ui.canvas.prepare_pane = (function portfolio$ui$canvas$prepare_pane(state,view,ctx){
var temp__5804__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(ctx));
if(temp__5804__auto__){
var scenes = temp__5804__auto__;
var buttons = portfolio.ui.canvas.create_button_groups(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__45111_SHARP_){
return portfolio.ui.canvas.protocols.prepare_toolbar_button(p1__45111_SHARP_,state,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"scenes","scenes",-425219404)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(portfolio.ui.canvas.toolbar_button_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view))));
var background = new cljs.core.Keyword("background","background-color","background/background-color",1902638780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629).cljs$core$IFn$_invoke$arity$1(ctx));
var G__45112 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"pane","pane",1593450723),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"canvases","canvases",-441653731),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(portfolio.ui.canvas.prepare_canvas,new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629).cljs$core$IFn$_invoke$arity$1(ctx)),scenes),new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(portfolio.ui.canvas.dark_QMARK_(background))?new cljs.core.Keyword(null,"dark","dark",1818973999):new cljs.core.Keyword(null,"light","light",1918998747))], null);
var G__45112__$1 = ((cljs.core.seq(buttons))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45112,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null)):G__45112);
if((((!(portfolio.ui.canvas.specifically_sized_QMARK_(new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629).cljs$core$IFn$_invoke$arity$1(ctx))))) && (cljs.core.not(new cljs.core.Keyword(null,"gallery?","gallery?",-905074488).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(ctx)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45112__$1,new cljs.core.Keyword(null,"background","background",-863952629),background);
} else {
return G__45112__$1;
}
} else {
return null;
}
});
portfolio.ui.canvas.canvas_tool_QMARK_ = (function portfolio$ui$canvas$canvas_tool_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$ui$canvas$protocols$ICanvasTool$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(portfolio.ui.canvas.protocols.ICanvasTool,tool):false)):cljs.core.native_satisfies_QMARK_(portfolio.ui.canvas.protocols.ICanvasTool,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return ((cljs.core.ifn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tool),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-canvas","portfolio.ui.canvas.protocols/prepare-canvas",-294584957,null)))) && (cljs.core.ifn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tool),new cljs.core.Symbol("portfolio.ui.canvas.protocols","finalize-canvas","portfolio.ui.canvas.protocols/finalize-canvas",468082050,null)))));
}
});
portfolio.ui.canvas.pane_prepper_QMARK_ = (function portfolio$ui$canvas$pane_prepper_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$ui$canvas$protocols$ICanvasToolPaneMiddleware$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(portfolio.ui.canvas.protocols.ICanvasToolPaneMiddleware,tool):false)):cljs.core.native_satisfies_QMARK_(portfolio.ui.canvas.protocols.ICanvasToolPaneMiddleware,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.ifn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tool),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-pane","portfolio.ui.canvas.protocols/prepare-pane",351871543,null)));
}
});
portfolio.ui.canvas.prepare_scenes = (function portfolio$ui$canvas$prepare_scenes(state,location,view,layout,scenes){
var iter__5523__auto__ = (function portfolio$ui$canvas$prepare_scenes_$_iter__45144(s__45146){
return (new cljs.core.LazySeq(null,(function (){
var s__45146__$1 = s__45146;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45146__$1);
if(temp__5804__auto__){
var s__45146__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45146__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45146__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45151 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45150 = (0);
while(true){
if((i__45150 < size__5522__auto__)){
var scene = cljs.core._nth(c__5521__auto__,i__45150);
cljs.core.chunk_append(b__45151,(function (){var tools = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(portfolio.ui.canvas.canvas_tool_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view));
var G__45165 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scene","scene",1523800415),portfolio.ui.scene.prep_scene_fn(state,scene)], null);
var G__45165__$1 = ((cljs.core.seq(new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(state)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45165,new cljs.core.Keyword(null,"css-paths","css-paths",582305563),new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(state)):G__45165);
var G__45165__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45165__$1,new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618),new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(state)):G__45165__$1);
var G__45165__$3 = ((cljs.core.seq(tools))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45165__$2,new cljs.core.Keyword(null,"tools","tools",-1241731990),tools):G__45165__$2);
var G__45165__$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(scene))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__45165__$3,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(scene)], 0)):G__45165__$3);
var G__45165__$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(scene))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45165__$4,new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(scene)):G__45165__$4);
if(cljs.core.truth_(new cljs.core.Keyword(null,"gallery?","gallery?",-905074488).cljs$core$IFn$_invoke$arity$1(layout))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__45165__$5,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_scene_url(location,scene)], 0));
} else {
return G__45165__$5;
}
})());

var G__45217 = (i__45150 + (1));
i__45150 = G__45217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45151),portfolio$ui$canvas$prepare_scenes_$_iter__45144(cljs.core.chunk_rest(s__45146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45151),null);
}
} else {
var scene = cljs.core.first(s__45146__$2);
return cljs.core.cons((function (){var tools = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(portfolio.ui.canvas.canvas_tool_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view));
var G__45166 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scene","scene",1523800415),portfolio.ui.scene.prep_scene_fn(state,scene)], null);
var G__45166__$1 = ((cljs.core.seq(new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(state)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45166,new cljs.core.Keyword(null,"css-paths","css-paths",582305563),new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(state)):G__45166);
var G__45166__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45166__$1,new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618),new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(state)):G__45166__$1);
var G__45166__$3 = ((cljs.core.seq(tools))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45166__$2,new cljs.core.Keyword(null,"tools","tools",-1241731990),tools):G__45166__$2);
var G__45166__$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(scene))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__45166__$3,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(scene)], 0)):G__45166__$3);
var G__45166__$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(scene))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45166__$4,new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(scene)):G__45166__$4);
if(cljs.core.truth_(new cljs.core.Keyword(null,"gallery?","gallery?",-905074488).cljs$core$IFn$_invoke$arity$1(layout))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__45166__$5,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_scene_url(location,scene)], 0));
} else {
return G__45166__$5;
}
})(),portfolio$ui$canvas$prepare_scenes_$_iter__45144(cljs.core.rest(s__45146__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(portfolio.ui.scene.sort_key,scenes));
});
portfolio.ui.canvas.prepare_layout_pane = (function portfolio$ui$canvas$prepare_layout_pane(state,view,ctx){
var f = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (f,tool){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(portfolio.ui.canvas.protocols.prepare_pane,tool,f);
}),portfolio.ui.canvas.prepare_pane,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(portfolio.ui.canvas.pane_prepper_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view)));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(state,view,ctx) : f.call(null,state,view,ctx));
});
portfolio.ui.canvas.prepare_layout_xs = (function portfolio$ui$canvas$prepare_layout_xs(state,location,root_layout,source,view,scenes,path,opt){
if(cljs.core.truth_((function (){var G__45168 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt);
var fexpr__45167 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null);
return (fexpr__45167.cljs$core$IFn$_invoke$arity$1 ? fexpr__45167.cljs$core$IFn$_invoke$arity$1(G__45168) : fexpr__45167.call(null,G__45168));
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"xs","xs",649443341),(function (){var n = cljs.core.count(new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(opt));
var iter__5523__auto__ = (function portfolio$ui$canvas$prepare_layout_xs_$_iter__45170(s__45171){
return (new cljs.core.LazySeq(null,(function (){
var s__45171__$1 = s__45171;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45171__$1);
if(temp__5804__auto__){
var s__45171__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45171__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45171__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45173 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45172 = (0);
while(true){
if((i__45172 < size__5522__auto__)){
var vec__45174 = cljs.core._nth(c__5521__auto__,i__45172);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45174,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45174,(1),null);
cljs.core.chunk_append(b__45173,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45178 = state;
var G__45179 = location;
var G__45180 = root_layout;
var G__45181 = source;
var G__45182 = view;
var G__45183 = scenes;
var G__45184 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
var G__45185 = x;
return (portfolio.ui.canvas.prepare_layout_xs.cljs$core$IFn$_invoke$arity$8 ? portfolio.ui.canvas.prepare_layout_xs.cljs$core$IFn$_invoke$arity$8(G__45178,G__45179,G__45180,G__45181,G__45182,G__45183,G__45184,G__45185) : portfolio.ui.canvas.prepare_layout_xs.call(null,G__45178,G__45179,G__45180,G__45181,G__45182,G__45183,G__45184,G__45185));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt)))?new cljs.core.Keyword(null,"height","height",1025178622):new cljs.core.Keyword(null,"width","width",-384071477)),["calc(100% / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('')),new cljs.core.Keyword(null,"offset","offset",296498311),["calc((100% / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),") * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),")"].join('')),new cljs.core.Keyword(null,"handle","handle",1538948854),(((i < (n - (1))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt)))?new cljs.core.Keyword(null,"horizontal","horizontal",2062109475):new cljs.core.Keyword(null,"vertical","vertical",718696748))], null):null)));

var G__45218 = (i__45172 + (1));
i__45172 = G__45218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45173),portfolio$ui$canvas$prepare_layout_xs_$_iter__45170(cljs.core.chunk_rest(s__45171__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45173),null);
}
} else {
var vec__45186 = cljs.core.first(s__45171__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45186,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45186,(1),null);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45189 = state;
var G__45190 = location;
var G__45191 = root_layout;
var G__45192 = source;
var G__45193 = view;
var G__45194 = scenes;
var G__45195 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
var G__45196 = x;
return (portfolio.ui.canvas.prepare_layout_xs.cljs$core$IFn$_invoke$arity$8 ? portfolio.ui.canvas.prepare_layout_xs.cljs$core$IFn$_invoke$arity$8(G__45189,G__45190,G__45191,G__45192,G__45193,G__45194,G__45195,G__45196) : portfolio.ui.canvas.prepare_layout_xs.call(null,G__45189,G__45190,G__45191,G__45192,G__45193,G__45194,G__45195,G__45196));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt)))?new cljs.core.Keyword(null,"height","height",1025178622):new cljs.core.Keyword(null,"width","width",-384071477)),["calc(100% / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('')),new cljs.core.Keyword(null,"offset","offset",296498311),["calc((100% / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),") * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),")"].join('')),new cljs.core.Keyword(null,"handle","handle",1538948854),(((i < (n - (1))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt)))?new cljs.core.Keyword(null,"horizontal","horizontal",2062109475):new cljs.core.Keyword(null,"vertical","vertical",718696748))], null):null)),portfolio$ui$canvas$prepare_layout_xs_$_iter__45170(cljs.core.rest(s__45171__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(opt)));
})()], null);
} else {
return portfolio.ui.canvas.prepare_layout_pane(state,view,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"pane-id","pane-id",28980857),new cljs.core.Keyword("portfolio.ui.layout","pane-id","portfolio.ui.layout/pane-id",792660767).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([portfolio.ui.canvas.get_tool_defaults(new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view)),opt,portfolio.ui.canvas.get_tool_values(state,new cljs.core.Keyword("portfolio.ui.layout","pane-id","portfolio.ui.layout/pane-id",792660767).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view))], 0)),new cljs.core.Keyword(null,"pane-path","pane-path",-316302892),path,new cljs.core.Keyword(null,"layout-path","layout-path",-654991240),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),source], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),root_layout,new cljs.core.Keyword(null,"config-source","config-source",-1282385545),source,new cljs.core.Keyword(null,"scenes","scenes",-425219404),scenes], null));
}
});
portfolio.ui.canvas.prepare_layout = (function portfolio$ui$canvas$prepare_layout(state,location,view,p__45197,scenes){
var map__45198 = p__45197;
var map__45198__$1 = cljs.core.__destructure_map(map__45198);
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45198__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45198__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var scenes__$1 = portfolio.ui.canvas.prepare_scenes(state,location,view,layout,scenes);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(portfolio.ui.canvas.prepare_layout_xs(state,location,layout,source,view,scenes__$1,cljs.core.PersistentVector.EMPTY,layout),new cljs.core.Keyword(null,"id","id",-1388402092),(cljs.core.truth_(new cljs.core.Keyword(null,"gallery?","gallery?",-905074488).cljs$core$IFn$_invoke$arity$1(layout))?portfolio.ui.routes.get_id(location):new cljs.core.Keyword(null,"single-scene","single-scene",-30974946)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),"100%"], 0));
});
portfolio.ui.canvas.prepare_canvas_view = (function portfolio$ui$canvas$prepare_canvas_view(state,location,view){
var layout = portfolio.ui.layout.get_current_layout(state);
var map__45199 = new cljs.core.Keyword(null,"current-selection","current-selection",-812715814).cljs$core$IFn$_invoke$arity$1(state);
var map__45199__$1 = cljs.core.__destructure_map(map__45199);
var scenes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45199__$1,new cljs.core.Keyword(null,"scenes","scenes",-425219404));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45199__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45199__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.with_meta((function (){var G__45200 = (function (){var temp__5802__auto__ = cljs.core.first(new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(view));
if(cljs.core.truth_(temp__5802__auto__)){
var error = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hud","hud",-1987595891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(portfolio.ui.canvas.prepare_layout(state,location,view,layout,scenes),new cljs.core.Keyword(null,"panel","panel",-558637456),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(scenes))) && (cljs.core.seq(new cljs.core.Keyword(null,"addons","addons",-1518903852).cljs$core$IFn$_invoke$arity$1(view)))))?portfolio.ui.canvas.prepare_panel(state,location,cljs.core.first(scenes),new cljs.core.Keyword(null,"addons","addons",-1518903852).cljs$core$IFn$_invoke$arity$1(view)):null));
}
})();
var G__45200__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collection","collection",-683361892),kind);
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__45200,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(target),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(target)], 0)):G__45200);
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45200__$1,new cljs.core.Keyword(null,"hud","hud",-1987595891),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)], null)], null),new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.bold","x","phosphor.bold/x",-1069548419),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["currentColor","none","round","56","round","24","200","200","56"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["currentColor","none","round","200","round","24","200","56","56"])], null)], null));

return new cljs.core.Keyword("phosphor.bold","x","phosphor.bold/x",-1069548419);
})()
], null),new cljs.core.Keyword(null,"error","error",-978969032),portfolio.ui.canvas.prepare_error(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(state))], null));
} else {
return G__45200__$1;
}
})(),portfolio.ui.canvas.view_impl);
});
portfolio.ui.canvas.view_prepper_QMARK_ = (function portfolio$ui$canvas$view_prepper_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$ui$canvas$protocols$ICanvasToolMiddleware$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(portfolio.ui.canvas.protocols.ICanvasToolMiddleware,tool):false)):cljs.core.native_satisfies_QMARK_(portfolio.ui.canvas.protocols.ICanvasToolMiddleware,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.ifn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tool),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-view","portfolio.ui.canvas.protocols/prepare-view",-765650856,null)));
}
});
portfolio.ui.canvas.prepare_view = (function portfolio$ui$canvas$prepare_view(view,state,location){
var f = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (f,tool){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(portfolio.ui.canvas.protocols.prepare_view,tool,f,state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([location,view], 0));
}),portfolio.ui.canvas.prepare_canvas_view,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(portfolio.ui.canvas.view_prepper_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view)));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(state,location,view) : f.call(null,state,location,view));
});
portfolio.ui.canvas.data_impl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.view","prepare-data","portfolio.ui.view/prepare-data",800392415,null),new cljs.core.Var(function(){return portfolio.ui.canvas.prepare_view;},new cljs.core.Symbol("portfolio.ui.canvas","prepare-view","portfolio.ui.canvas/prepare-view",1102582197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas","portfolio.ui.canvas",1102171045,null),new cljs.core.Symbol(null,"prepare-view","prepare-view",-1617068415,null),"portfolio/ui/canvas.cljs",19,1,247,247,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"view","view",-1406440955,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"location","location",-838836381,null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.prepare_view)?portfolio.ui.canvas.prepare_view.cljs$lang$test:null)]))], null);
portfolio.ui.canvas.describe_missing_tool_id = (function portfolio$ui$canvas$describe_missing_tool_id(tool){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Badly configured canvas tool",new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Canvas tool extensions must have an ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id"], null)," or they won't work correctly. Please inspect this tool."], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Configuration",new cljs.core.Keyword(null,"data","data",-232669377),portfolio.ui.code.code_str(tool)], null)], null)], null);
});
portfolio.ui.canvas.describe_problem = (function portfolio$ui$canvas$describe_problem(tool,p__45202){
var map__45203 = p__45202;
var map__45203__$1 = cljs.core.__destructure_map(map__45203);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45203__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45203__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Badly configured canvas tool",new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),message," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),portfolio.ui.code.code_str(data)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Configuration",new cljs.core.Keyword(null,"data","data",-232669377),portfolio.ui.code.code_str(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tool,new cljs.core.Keyword(null,"problems","problems",2097327077)))], null)], null)], null);
});
portfolio.ui.canvas.create_canvas = (function portfolio$ui$canvas$create_canvas(p__45205){
var map__45206 = p__45205;
var map__45206__$1 = cljs.core.__destructure_map(map__45206);
var tools = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45206__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var addons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45206__$1,new cljs.core.Keyword(null,"addons","addons",-1518903852));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45206__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("portfolio.ui.canvas","canvas","portfolio.ui.canvas/canvas",1995656155),new cljs.core.Keyword(null,"title","title",636505583),"Canvas",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),tools)),new cljs.core.Keyword(null,"addons","addons",-1518903852),addons,new cljs.core.Keyword(null,"layout","layout",-2120940921),(function (){var or__5045__auto__ = layout;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__45204_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(portfolio.ui.canvas.describe_problem,p1__45204_SHARP_),new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(p1__45204_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tools], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.canvas.describe_missing_tool_id,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"problems","problems",2097327077),tools)))))], null),portfolio.ui.canvas.data_impl);
});

//# sourceMappingURL=portfolio.ui.canvas.js.map
