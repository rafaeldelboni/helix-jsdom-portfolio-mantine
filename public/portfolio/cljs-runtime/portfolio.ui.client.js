goog.provide('portfolio.ui.client');
portfolio.ui.client.render = (function portfolio$ui$client$render(app,p__45451){
var map__45452 = p__45451;
var map__45452__$1 = cljs.core.__destructure_map(map__45452);
var on_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45452__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
var state = cljs.core.deref(app);
var page_data = portfolio.ui.core.prepare_data(state,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(state));
var app_data = portfolio.ui.actions.actionize_data(app,page_data);
if(cljs.core.ifn_QMARK_(on_render)){
(on_render.cljs$core$IFn$_invoke$arity$1 ? on_render.cljs$core$IFn$_invoke$arity$1(page_data) : on_render.call(null,page_data));
} else {
}

var temp__5802__auto__ = document.getElementById("portfolio");
if(cljs.core.truth_(temp__5802__auto__)){
var el = temp__5802__auto__;
return dumdom.core.render((portfolio.ui.components.app.App.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.app.App.cljs$core$IFn$_invoke$arity$1(app_data) : portfolio.ui.components.app.App.call(null,app_data)),el);
} else {
return console.error("Unable to render portfolio: no element with id \"portfolio\"");
}
});
portfolio.ui.client.a_element = (function portfolio$ui$client$a_element(el){
var el__$1 = el;
while(true){
if((el__$1 == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = el__$1.href;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el__$1.tagName);
} else {
return and__5043__auto__;
}
})())){
return el__$1;
} else {
var G__45464 = el__$1.parentNode;
el__$1 = G__45464;
continue;

}
}
break;
}
});
portfolio.ui.client.get_path = (function portfolio$ui$client$get_path(href){
if(cljs.core.truth_(cljs.core.not_empty(href))){
return href.replace(location.origin,"");
} else {
return null;
}
});
portfolio.ui.client.relay_body_clicks = (function portfolio$ui$client$relay_body_clicks(app,e){
var path = (function (){var G__45453 = e.target;
var G__45453__$1 = (((G__45453 == null))?null:portfolio.ui.client.a_element(G__45453));
var G__45453__$2 = (((G__45453__$1 == null))?null:G__45453__$1.href);
if((G__45453__$2 == null)){
return null;
} else {
return portfolio.ui.client.get_path(G__45453__$2);
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = path;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.re_find(/^\//,path);
} else {
return and__5043__auto__;
}
})())){
e.preventDefault();

if(cljs.core.truth_((function (){var or__5045__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e.metaKey;
}
})())){
return window.open(path,"_blank");
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"log?","log?",-366002723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Update URL from body click",path], 0));
} else {
}

history.pushState(false,false,path);

return portfolio.ui.actions.execute_action_BANG_(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null));
}
} else {
return null;
}
});
portfolio.ui.client.ensure_portfolio_css_BANG_ = (function portfolio$ui$client$ensure_portfolio_css_BANG_(f){
if(cljs.core.not(document.getElementById("portfolio-css"))){
var el = portfolio.ui.css.create_css_link("/portfolio/styles/portfolio.css");
el.addEventListener("load",(function portfolio$ui$client$ensure_portfolio_css_BANG__$_listener(e){
el.removeEventListener("load",portfolio$ui$client$ensure_portfolio_css_BANG__$_listener);

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}));

return document.head.appendChild(el);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
portfolio.ui.client.ensure_element_BANG_ = (function portfolio$ui$client$ensure_element_BANG_(){
if(cljs.core.truth_(document.getElementById("portfolio"))){
return null;
} else {
var el_45465 = document.createElement("div");
(el_45465.id = "portfolio");

document.body.appendChild(el_45465);

var script = document.createElement("script");
(script.type = "text/javascript");

(script.src = "/portfolio/prism.js");

return document.body.appendChild(script);
}
});
portfolio.ui.client.set_window_size = (function portfolio$ui$client$set_window_size(app){
var dim = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),window.innerWidth,new cljs.core.Keyword(null,"h","h",1109658740),window.innerHeight], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,new cljs.core.Keyword(null,"win","win",-1624642689),dim);
});
portfolio.ui.client.set_window_size_debounced = portfolio.homeless.debounce(portfolio.ui.client.set_window_size,(100));
portfolio.ui.client.keep_size_up_to_date = (function portfolio$ui$client$keep_size_up_to_date(app){
portfolio.ui.client.set_window_size(app);

return (window.onresize = (function (){
return portfolio.ui.client.set_window_size_debounced(app);
}));
});
portfolio.ui.client.keep_css_files_up_to_date = (function portfolio$ui$client$keep_css_files_up_to_date(app){
if(cljs.core.truth_(new cljs.core.Keyword("portfolio.ui.client","css-listener","portfolio.ui.client/css-listener",1401299013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)))){
return null;
} else {
var observer = portfolio.ui.css.watch_css_reloads(new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,new cljs.core.Keyword("portfolio.ui.client","css-listener","portfolio.ui.client/css-listener",1401299013),observer);
}
});
portfolio.ui.client.started_QMARK_ = (function portfolio$ui$client$started_QMARK_(app){
return new cljs.core.Keyword("portfolio.ui.client","started?","portfolio.ui.client/started?",-643918860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app));
});
portfolio.ui.client.start_app = (function portfolio$ui$client$start_app(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45466 = arguments.length;
var i__5770__auto___45467 = (0);
while(true){
if((i__5770__auto___45467 < len__5769__auto___45466)){
args__5775__auto__.push((arguments[i__5770__auto___45467]));

var G__45468 = (i__5770__auto___45467 + (1));
i__5770__auto___45467 = G__45468;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.client.start_app.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.client.start_app.cljs$core$IFn$_invoke$arity$variadic = (function (app,p__45458){
var vec__45459 = p__45458;
var map__45462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45459,(0),null);
var map__45462__$1 = cljs.core.__destructure_map(map__45462);
var on_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45462__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
portfolio.ui.css.load_css_files(new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)));

if(cljs.core.truth_(portfolio.ui.client.started_QMARK_(app))){
portfolio.ui.client.render(app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),on_render], null));
} else {
document.body.addEventListener("click",(function (p1__45454_SHARP_){
return portfolio.ui.client.relay_body_clicks(app,p1__45454_SHARP_);
}));

portfolio.ui.client.keep_size_up_to_date(app);

portfolio.ui.client.keep_css_files_up_to_date(app);

portfolio.ui.client.ensure_element_BANG_();

portfolio.ui.client.ensure_portfolio_css_BANG_((function (){
(window.onpopstate = (function (){
return portfolio.ui.actions.execute_action_BANG_(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null));
}));

cljs.core.add_tap((function (p1__45455_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.update,new cljs.core.Keyword(null,"taps","taps",480110748),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__45455_SHARP_], 0));
}));

cljs.core.add_watch(app,new cljs.core.Keyword("portfolio.ui.client","render","portfolio.ui.client/render",-1068629999),(function (_,___$1,___$2,___$3){
return portfolio.ui.client.render(app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),on_render], null));
}));

portfolio.ui.actions.execute_action_BANG_(app,(function (){var location__$1 = portfolio.ui.routes.get_current_location();
if((portfolio.ui.collection.get_selection(cljs.core.deref(app),portfolio.ui.routes.get_id(location__$1)) == null)){
var temp__5802__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.vals(new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app))))));
if(cljs.core.truth_(temp__5802__auto__)){
var id = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),(function (){var G__45463 = location__$1;
if((new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(location__$1)) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45463,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"up-and-running"], null));
} else {
return G__45463;
}
})()], null);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null);
}
})());

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,new cljs.core.Keyword("portfolio.ui.client","started?","portfolio.ui.client/started?",-643918860),true);
}));
}

return app;
}));

(portfolio.ui.client.start_app.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.client.start_app.cljs$lang$applyTo = (function (seq45456){
var G__45457 = cljs.core.first(seq45456);
var seq45456__$1 = cljs.core.next(seq45456);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45457,seq45456__$1);
}));


//# sourceMappingURL=portfolio.ui.client.js.map
