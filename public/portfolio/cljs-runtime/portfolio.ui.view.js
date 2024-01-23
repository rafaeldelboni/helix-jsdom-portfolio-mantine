goog.provide('portfolio.ui.view');

/**
 * @interface
 */
portfolio.ui.view.IViewData = function(){};

var portfolio$ui$view$IViewData$prepare_data$dyn_42024 = (function (view,state,location){
var x__5393__auto__ = (((view == null))?null:view);
var m__5394__auto__ = (portfolio.ui.view.prepare_data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(view,state,location) : m__5394__auto__.call(null,view,state,location));
} else {
var m__5392__auto__ = (portfolio.ui.view.prepare_data["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(view,state,location) : m__5392__auto__.call(null,view,state,location));
} else {
throw cljs.core.missing_protocol("IViewData.prepare-data",view);
}
}
});
portfolio.ui.view.prepare_data = (function portfolio$ui$view$prepare_data(view,state,location){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(view),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.view","prepare-data","portfolio.ui.view/prepare-data",800392415,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$3 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$3(view,state,location) : meta_impl__5395__auto__.call(null,view,state,location));
} else {
if((((!((view == null)))) && ((!((view.portfolio$ui$view$IViewData$prepare_data$arity$3 == null)))))){
return view.portfolio$ui$view$IViewData$prepare_data$arity$3(view,state,location);
} else {
return portfolio$ui$view$IViewData$prepare_data$dyn_42024(view,state,location);
}
}
});


/**
 * @interface
 */
portfolio.ui.view.IView = function(){};

var portfolio$ui$view$IView$render_view$dyn_42029 = (function (self){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.ui.view.render_view[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__5394__auto__.call(null,self));
} else {
var m__5392__auto__ = (portfolio.ui.view.render_view["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__5392__auto__.call(null,self));
} else {
throw cljs.core.missing_protocol("IView.render-view",self);
}
}
});
portfolio.ui.view.render_view = (function portfolio$ui$view$render_view(self){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.view","render-view","portfolio.ui.view/render-view",657855785,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1(self) : meta_impl__5395__auto__.call(null,self));
} else {
if((((!((self == null)))) && ((!((self.portfolio$ui$view$IView$render_view$arity$1 == null)))))){
return self.portfolio$ui$view$IView$render_view$arity$1(self);
} else {
return portfolio$ui$view$IView$render_view$dyn_42029(self);
}
}
});


//# sourceMappingURL=portfolio.ui.view.js.map
