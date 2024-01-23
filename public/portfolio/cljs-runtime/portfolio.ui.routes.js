goog.provide('portfolio.ui.routes');
portfolio.ui.routes.get_location = (function portfolio$ui$routes$get_location(location,item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(location,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));
});
portfolio.ui.routes.get_url = (function portfolio$ui$routes$get_url(var_args){
var G__41931 = arguments.length;
switch (G__41931) {
case 1:
return portfolio.ui.routes.get_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portfolio.ui.routes.get_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.routes.get_url.cljs$core$IFn$_invoke$arity$1 = (function (location){
return portfolio.ui.router.get_url(location);
}));

(portfolio.ui.routes.get_url.cljs$core$IFn$_invoke$arity$2 = (function (location,item){
return portfolio.ui.router.get_url(portfolio.ui.routes.get_location(location,item));
}));

(portfolio.ui.routes.get_url.cljs$lang$maxFixedArity = 2);

portfolio.ui.routes.get_scene_location = (function portfolio$ui$routes$get_scene_location(location,scene){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(location,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)], null));
});
portfolio.ui.routes.get_scene_url = (function portfolio$ui$routes$get_scene_url(location,scene){
return portfolio.ui.router.get_url(portfolio.ui.routes.get_scene_location(location,scene));
});
portfolio.ui.routes.get_addon_url = (function portfolio$ui$routes$get_addon_url(location,addon){
return portfolio.ui.router.get_url(cljs.core.assoc_in(location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"addon","addon",931813532)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(addon)));
});
portfolio.ui.routes.get_id = (function portfolio$ui$routes$get_id(location){
var G__41932 = location;
var G__41932__$1 = (((G__41932 == null))?null:new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(G__41932));
var G__41932__$2 = (((G__41932__$1 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__41932__$1));
if((G__41932__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__41932__$2);
}
});
portfolio.ui.routes.get_document_id = (function portfolio$ui$routes$get_document_id(location){
var temp__5804__auto__ = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(location));
if(cljs.core.truth_(temp__5804__auto__)){
var doc = temp__5804__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("document",doc);
} else {
return null;
}
});
portfolio.ui.routes.get_current_url = (function portfolio$ui$routes$get_current_url(){
return window.location.href.replace(window.location.origin,"");
});
portfolio.ui.routes.get_current_location = (function portfolio$ui$routes$get_current_location(){
return portfolio.ui.router.get_location(portfolio.ui.routes.get_current_url());
});

//# sourceMappingURL=portfolio.ui.routes.js.map
