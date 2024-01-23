goog.provide('portfolio.ui.search.protocols');

/**
 * @interface
 */
portfolio.ui.search.protocols.Index = function(){};

var portfolio$ui$search$protocols$Index$index$dyn_44362 = (function (self,document){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.ui.search.protocols.index[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(self,document) : m__5394__auto__.call(null,self,document));
} else {
var m__5392__auto__ = (portfolio.ui.search.protocols.index["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(self,document) : m__5392__auto__.call(null,self,document));
} else {
throw cljs.core.missing_protocol("Index.index",self);
}
}
});
portfolio.ui.search.protocols.index = (function portfolio$ui$search$protocols$index(self,document){
if((((!((self == null)))) && ((!((self.portfolio$ui$search$protocols$Index$index$arity$2 == null)))))){
return self.portfolio$ui$search$protocols$Index$index$arity$2(self,document);
} else {
return portfolio$ui$search$protocols$Index$index$dyn_44362(self,document);
}
});

var portfolio$ui$search$protocols$Index$query$dyn_44363 = (function (self,q){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.ui.search.protocols.query[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(self,q) : m__5394__auto__.call(null,self,q));
} else {
var m__5392__auto__ = (portfolio.ui.search.protocols.query["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(self,q) : m__5392__auto__.call(null,self,q));
} else {
throw cljs.core.missing_protocol("Index.query",self);
}
}
});
portfolio.ui.search.protocols.query = (function portfolio$ui$search$protocols$query(self,q){
if((((!((self == null)))) && ((!((self.portfolio$ui$search$protocols$Index$query$arity$2 == null)))))){
return self.portfolio$ui$search$protocols$Index$query$arity$2(self,q);
} else {
return portfolio$ui$search$protocols$Index$query$dyn_44363(self,q);
}
});


/**
 * @interface
 */
portfolio.ui.search.protocols.SearchResult = function(){};

var portfolio$ui$search$protocols$SearchResult$prepare_result$dyn_44364 = (function (self,state,location,result){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.ui.search.protocols.prepare_result[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(self,state,location,result) : m__5394__auto__.call(null,self,state,location,result));
} else {
var m__5392__auto__ = (portfolio.ui.search.protocols.prepare_result["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(self,state,location,result) : m__5392__auto__.call(null,self,state,location,result));
} else {
throw cljs.core.missing_protocol("SearchResult.prepare-result",self);
}
}
});
portfolio.ui.search.protocols.prepare_result = (function portfolio$ui$search$protocols$prepare_result(self,state,location,result){
if((((!((self == null)))) && ((!((self.portfolio$ui$search$protocols$SearchResult$prepare_result$arity$4 == null)))))){
return self.portfolio$ui$search$protocols$SearchResult$prepare_result$arity$4(self,state,location,result);
} else {
return portfolio$ui$search$protocols$SearchResult$prepare_result$dyn_44364(self,state,location,result);
}
});


//# sourceMappingURL=portfolio.ui.search.protocols.js.map
