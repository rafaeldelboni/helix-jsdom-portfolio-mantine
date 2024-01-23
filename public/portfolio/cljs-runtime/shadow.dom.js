goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38383 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_38383(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38387 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_38387(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36783 = coll;
var G__36784 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36783,G__36784) : shadow.dom.lazy_native_coll_seq.call(null,G__36783,G__36784));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36858 = arguments.length;
switch (G__36858) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36886 = arguments.length;
switch (G__36886) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36901 = arguments.length;
switch (G__36901) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36921 = arguments.length;
switch (G__36921) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36939 = arguments.length;
switch (G__36939) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36964 = arguments.length;
switch (G__36964) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36993){if((e36993 instanceof Object)){
var e = e36993;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36993;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37019 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37020 = null;
var count__37021 = (0);
var i__37022 = (0);
while(true){
if((i__37022 < count__37021)){
var el = chunk__37020.cljs$core$IIndexed$_nth$arity$2(null,i__37022);
var handler_38448__$1 = ((function (seq__37019,chunk__37020,count__37021,i__37022,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37019,chunk__37020,count__37021,i__37022,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38448__$1);


var G__38449 = seq__37019;
var G__38450 = chunk__37020;
var G__38451 = count__37021;
var G__38452 = (i__37022 + (1));
seq__37019 = G__38449;
chunk__37020 = G__38450;
count__37021 = G__38451;
i__37022 = G__38452;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37019);
if(temp__5804__auto__){
var seq__37019__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37019__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37019__$1);
var G__38454 = cljs.core.chunk_rest(seq__37019__$1);
var G__38455 = c__5568__auto__;
var G__38456 = cljs.core.count(c__5568__auto__);
var G__38457 = (0);
seq__37019 = G__38454;
chunk__37020 = G__38455;
count__37021 = G__38456;
i__37022 = G__38457;
continue;
} else {
var el = cljs.core.first(seq__37019__$1);
var handler_38458__$1 = ((function (seq__37019,chunk__37020,count__37021,i__37022,el,seq__37019__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37019,chunk__37020,count__37021,i__37022,el,seq__37019__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38458__$1);


var G__38459 = cljs.core.next(seq__37019__$1);
var G__38460 = null;
var G__38461 = (0);
var G__38462 = (0);
seq__37019 = G__38459;
chunk__37020 = G__38460;
count__37021 = G__38461;
i__37022 = G__38462;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37066 = arguments.length;
switch (G__37066) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37090 = cljs.core.seq(events);
var chunk__37091 = null;
var count__37092 = (0);
var i__37093 = (0);
while(true){
if((i__37093 < count__37092)){
var vec__37110 = chunk__37091.cljs$core$IIndexed$_nth$arity$2(null,i__37093);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37110,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37110,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38473 = seq__37090;
var G__38474 = chunk__37091;
var G__38475 = count__37092;
var G__38476 = (i__37093 + (1));
seq__37090 = G__38473;
chunk__37091 = G__38474;
count__37092 = G__38475;
i__37093 = G__38476;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37090);
if(temp__5804__auto__){
var seq__37090__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37090__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37090__$1);
var G__38477 = cljs.core.chunk_rest(seq__37090__$1);
var G__38478 = c__5568__auto__;
var G__38479 = cljs.core.count(c__5568__auto__);
var G__38480 = (0);
seq__37090 = G__38477;
chunk__37091 = G__38478;
count__37092 = G__38479;
i__37093 = G__38480;
continue;
} else {
var vec__37125 = cljs.core.first(seq__37090__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37125,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37125,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38481 = cljs.core.next(seq__37090__$1);
var G__38482 = null;
var G__38483 = (0);
var G__38484 = (0);
seq__37090 = G__38481;
chunk__37091 = G__38482;
count__37092 = G__38483;
i__37093 = G__38484;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37134 = cljs.core.seq(styles);
var chunk__37135 = null;
var count__37136 = (0);
var i__37137 = (0);
while(true){
if((i__37137 < count__37136)){
var vec__37163 = chunk__37135.cljs$core$IIndexed$_nth$arity$2(null,i__37137);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37163,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37163,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38485 = seq__37134;
var G__38486 = chunk__37135;
var G__38487 = count__37136;
var G__38488 = (i__37137 + (1));
seq__37134 = G__38485;
chunk__37135 = G__38486;
count__37136 = G__38487;
i__37137 = G__38488;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37134);
if(temp__5804__auto__){
var seq__37134__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37134__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37134__$1);
var G__38489 = cljs.core.chunk_rest(seq__37134__$1);
var G__38490 = c__5568__auto__;
var G__38491 = cljs.core.count(c__5568__auto__);
var G__38492 = (0);
seq__37134 = G__38489;
chunk__37135 = G__38490;
count__37136 = G__38491;
i__37137 = G__38492;
continue;
} else {
var vec__37175 = cljs.core.first(seq__37134__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37175,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38493 = cljs.core.next(seq__37134__$1);
var G__38494 = null;
var G__38495 = (0);
var G__38496 = (0);
seq__37134 = G__38493;
chunk__37135 = G__38494;
count__37136 = G__38495;
i__37137 = G__38496;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37212_38497 = key;
var G__37212_38498__$1 = (((G__37212_38497 instanceof cljs.core.Keyword))?G__37212_38497.fqn:null);
switch (G__37212_38498__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38500 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_38500,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_38500,"aria-");
}
})())){
el.setAttribute(ks_38500,value);
} else {
(el[ks_38500] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37262){
var map__37265 = p__37262;
var map__37265__$1 = cljs.core.__destructure_map(map__37265);
var props = map__37265__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37268 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37268,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37268,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37268,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37272 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37272,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37272;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37277 = arguments.length;
switch (G__37277) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37280){
var vec__37281 = p__37280;
var seq__37282 = cljs.core.seq(vec__37281);
var first__37283 = cljs.core.first(seq__37282);
var seq__37282__$1 = cljs.core.next(seq__37282);
var nn = first__37283;
var first__37283__$1 = cljs.core.first(seq__37282__$1);
var seq__37282__$2 = cljs.core.next(seq__37282__$1);
var np = first__37283__$1;
var nc = seq__37282__$2;
var node = vec__37281;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37284 = nn;
var G__37285 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37284,G__37285) : create_fn.call(null,G__37284,G__37285));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37287 = nn;
var G__37288 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37287,G__37288) : create_fn.call(null,G__37287,G__37288));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37294 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37294,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37294,(1),null);
var seq__37297_38514 = cljs.core.seq(node_children);
var chunk__37298_38515 = null;
var count__37299_38516 = (0);
var i__37300_38517 = (0);
while(true){
if((i__37300_38517 < count__37299_38516)){
var child_struct_38518 = chunk__37298_38515.cljs$core$IIndexed$_nth$arity$2(null,i__37300_38517);
var children_38519 = shadow.dom.dom_node(child_struct_38518);
if(cljs.core.seq_QMARK_(children_38519)){
var seq__37361_38520 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38519));
var chunk__37363_38521 = null;
var count__37364_38522 = (0);
var i__37365_38523 = (0);
while(true){
if((i__37365_38523 < count__37364_38522)){
var child_38524 = chunk__37363_38521.cljs$core$IIndexed$_nth$arity$2(null,i__37365_38523);
if(cljs.core.truth_(child_38524)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38524);


var G__38525 = seq__37361_38520;
var G__38526 = chunk__37363_38521;
var G__38527 = count__37364_38522;
var G__38528 = (i__37365_38523 + (1));
seq__37361_38520 = G__38525;
chunk__37363_38521 = G__38526;
count__37364_38522 = G__38527;
i__37365_38523 = G__38528;
continue;
} else {
var G__38532 = seq__37361_38520;
var G__38533 = chunk__37363_38521;
var G__38534 = count__37364_38522;
var G__38535 = (i__37365_38523 + (1));
seq__37361_38520 = G__38532;
chunk__37363_38521 = G__38533;
count__37364_38522 = G__38534;
i__37365_38523 = G__38535;
continue;
}
} else {
var temp__5804__auto___38536 = cljs.core.seq(seq__37361_38520);
if(temp__5804__auto___38536){
var seq__37361_38537__$1 = temp__5804__auto___38536;
if(cljs.core.chunked_seq_QMARK_(seq__37361_38537__$1)){
var c__5568__auto___38539 = cljs.core.chunk_first(seq__37361_38537__$1);
var G__38540 = cljs.core.chunk_rest(seq__37361_38537__$1);
var G__38541 = c__5568__auto___38539;
var G__38542 = cljs.core.count(c__5568__auto___38539);
var G__38543 = (0);
seq__37361_38520 = G__38540;
chunk__37363_38521 = G__38541;
count__37364_38522 = G__38542;
i__37365_38523 = G__38543;
continue;
} else {
var child_38544 = cljs.core.first(seq__37361_38537__$1);
if(cljs.core.truth_(child_38544)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38544);


var G__38545 = cljs.core.next(seq__37361_38537__$1);
var G__38546 = null;
var G__38547 = (0);
var G__38548 = (0);
seq__37361_38520 = G__38545;
chunk__37363_38521 = G__38546;
count__37364_38522 = G__38547;
i__37365_38523 = G__38548;
continue;
} else {
var G__38549 = cljs.core.next(seq__37361_38537__$1);
var G__38550 = null;
var G__38551 = (0);
var G__38552 = (0);
seq__37361_38520 = G__38549;
chunk__37363_38521 = G__38550;
count__37364_38522 = G__38551;
i__37365_38523 = G__38552;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38519);
}


var G__38554 = seq__37297_38514;
var G__38555 = chunk__37298_38515;
var G__38556 = count__37299_38516;
var G__38557 = (i__37300_38517 + (1));
seq__37297_38514 = G__38554;
chunk__37298_38515 = G__38555;
count__37299_38516 = G__38556;
i__37300_38517 = G__38557;
continue;
} else {
var temp__5804__auto___38558 = cljs.core.seq(seq__37297_38514);
if(temp__5804__auto___38558){
var seq__37297_38559__$1 = temp__5804__auto___38558;
if(cljs.core.chunked_seq_QMARK_(seq__37297_38559__$1)){
var c__5568__auto___38560 = cljs.core.chunk_first(seq__37297_38559__$1);
var G__38562 = cljs.core.chunk_rest(seq__37297_38559__$1);
var G__38563 = c__5568__auto___38560;
var G__38564 = cljs.core.count(c__5568__auto___38560);
var G__38565 = (0);
seq__37297_38514 = G__38562;
chunk__37298_38515 = G__38563;
count__37299_38516 = G__38564;
i__37300_38517 = G__38565;
continue;
} else {
var child_struct_38571 = cljs.core.first(seq__37297_38559__$1);
var children_38573 = shadow.dom.dom_node(child_struct_38571);
if(cljs.core.seq_QMARK_(children_38573)){
var seq__37404_38574 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38573));
var chunk__37406_38575 = null;
var count__37407_38576 = (0);
var i__37408_38577 = (0);
while(true){
if((i__37408_38577 < count__37407_38576)){
var child_38583 = chunk__37406_38575.cljs$core$IIndexed$_nth$arity$2(null,i__37408_38577);
if(cljs.core.truth_(child_38583)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38583);


var G__38584 = seq__37404_38574;
var G__38585 = chunk__37406_38575;
var G__38586 = count__37407_38576;
var G__38587 = (i__37408_38577 + (1));
seq__37404_38574 = G__38584;
chunk__37406_38575 = G__38585;
count__37407_38576 = G__38586;
i__37408_38577 = G__38587;
continue;
} else {
var G__38588 = seq__37404_38574;
var G__38589 = chunk__37406_38575;
var G__38590 = count__37407_38576;
var G__38591 = (i__37408_38577 + (1));
seq__37404_38574 = G__38588;
chunk__37406_38575 = G__38589;
count__37407_38576 = G__38590;
i__37408_38577 = G__38591;
continue;
}
} else {
var temp__5804__auto___38592__$1 = cljs.core.seq(seq__37404_38574);
if(temp__5804__auto___38592__$1){
var seq__37404_38593__$1 = temp__5804__auto___38592__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37404_38593__$1)){
var c__5568__auto___38594 = cljs.core.chunk_first(seq__37404_38593__$1);
var G__38595 = cljs.core.chunk_rest(seq__37404_38593__$1);
var G__38596 = c__5568__auto___38594;
var G__38597 = cljs.core.count(c__5568__auto___38594);
var G__38598 = (0);
seq__37404_38574 = G__38595;
chunk__37406_38575 = G__38596;
count__37407_38576 = G__38597;
i__37408_38577 = G__38598;
continue;
} else {
var child_38599 = cljs.core.first(seq__37404_38593__$1);
if(cljs.core.truth_(child_38599)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38599);


var G__38603 = cljs.core.next(seq__37404_38593__$1);
var G__38604 = null;
var G__38605 = (0);
var G__38606 = (0);
seq__37404_38574 = G__38603;
chunk__37406_38575 = G__38604;
count__37407_38576 = G__38605;
i__37408_38577 = G__38606;
continue;
} else {
var G__38608 = cljs.core.next(seq__37404_38593__$1);
var G__38609 = null;
var G__38610 = (0);
var G__38611 = (0);
seq__37404_38574 = G__38608;
chunk__37406_38575 = G__38609;
count__37407_38576 = G__38610;
i__37408_38577 = G__38611;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38573);
}


var G__38612 = cljs.core.next(seq__37297_38559__$1);
var G__38613 = null;
var G__38614 = (0);
var G__38615 = (0);
seq__37297_38514 = G__38612;
chunk__37298_38515 = G__38613;
count__37299_38516 = G__38614;
i__37300_38517 = G__38615;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37465 = cljs.core.seq(node);
var chunk__37466 = null;
var count__37467 = (0);
var i__37468 = (0);
while(true){
if((i__37468 < count__37467)){
var n = chunk__37466.cljs$core$IIndexed$_nth$arity$2(null,i__37468);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38626 = seq__37465;
var G__38627 = chunk__37466;
var G__38628 = count__37467;
var G__38629 = (i__37468 + (1));
seq__37465 = G__38626;
chunk__37466 = G__38627;
count__37467 = G__38628;
i__37468 = G__38629;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37465);
if(temp__5804__auto__){
var seq__37465__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37465__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37465__$1);
var G__38633 = cljs.core.chunk_rest(seq__37465__$1);
var G__38634 = c__5568__auto__;
var G__38635 = cljs.core.count(c__5568__auto__);
var G__38636 = (0);
seq__37465 = G__38633;
chunk__37466 = G__38634;
count__37467 = G__38635;
i__37468 = G__38636;
continue;
} else {
var n = cljs.core.first(seq__37465__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38639 = cljs.core.next(seq__37465__$1);
var G__38640 = null;
var G__38641 = (0);
var G__38642 = (0);
seq__37465 = G__38639;
chunk__37466 = G__38640;
count__37467 = G__38641;
i__37468 = G__38642;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37498 = arguments.length;
switch (G__37498) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37520 = arguments.length;
switch (G__37520) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37570 = arguments.length;
switch (G__37570) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38669 = arguments.length;
var i__5770__auto___38670 = (0);
while(true){
if((i__5770__auto___38670 < len__5769__auto___38669)){
args__5775__auto__.push((arguments[i__5770__auto___38670]));

var G__38671 = (i__5770__auto___38670 + (1));
i__5770__auto___38670 = G__38671;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37624_38672 = cljs.core.seq(nodes);
var chunk__37625_38673 = null;
var count__37626_38674 = (0);
var i__37627_38675 = (0);
while(true){
if((i__37627_38675 < count__37626_38674)){
var node_38676 = chunk__37625_38673.cljs$core$IIndexed$_nth$arity$2(null,i__37627_38675);
fragment.appendChild(shadow.dom._to_dom(node_38676));


var G__38677 = seq__37624_38672;
var G__38678 = chunk__37625_38673;
var G__38679 = count__37626_38674;
var G__38680 = (i__37627_38675 + (1));
seq__37624_38672 = G__38677;
chunk__37625_38673 = G__38678;
count__37626_38674 = G__38679;
i__37627_38675 = G__38680;
continue;
} else {
var temp__5804__auto___38681 = cljs.core.seq(seq__37624_38672);
if(temp__5804__auto___38681){
var seq__37624_38682__$1 = temp__5804__auto___38681;
if(cljs.core.chunked_seq_QMARK_(seq__37624_38682__$1)){
var c__5568__auto___38683 = cljs.core.chunk_first(seq__37624_38682__$1);
var G__38685 = cljs.core.chunk_rest(seq__37624_38682__$1);
var G__38686 = c__5568__auto___38683;
var G__38687 = cljs.core.count(c__5568__auto___38683);
var G__38688 = (0);
seq__37624_38672 = G__38685;
chunk__37625_38673 = G__38686;
count__37626_38674 = G__38687;
i__37627_38675 = G__38688;
continue;
} else {
var node_38690 = cljs.core.first(seq__37624_38682__$1);
fragment.appendChild(shadow.dom._to_dom(node_38690));


var G__38691 = cljs.core.next(seq__37624_38682__$1);
var G__38692 = null;
var G__38693 = (0);
var G__38694 = (0);
seq__37624_38672 = G__38691;
chunk__37625_38673 = G__38692;
count__37626_38674 = G__38693;
i__37627_38675 = G__38694;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37614){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37614));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37656_38697 = cljs.core.seq(scripts);
var chunk__37657_38698 = null;
var count__37658_38699 = (0);
var i__37659_38700 = (0);
while(true){
if((i__37659_38700 < count__37658_38699)){
var vec__37678_38702 = chunk__37657_38698.cljs$core$IIndexed$_nth$arity$2(null,i__37659_38700);
var script_tag_38703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37678_38702,(0),null);
var script_body_38704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37678_38702,(1),null);
eval(script_body_38704);


var G__38709 = seq__37656_38697;
var G__38710 = chunk__37657_38698;
var G__38711 = count__37658_38699;
var G__38712 = (i__37659_38700 + (1));
seq__37656_38697 = G__38709;
chunk__37657_38698 = G__38710;
count__37658_38699 = G__38711;
i__37659_38700 = G__38712;
continue;
} else {
var temp__5804__auto___38713 = cljs.core.seq(seq__37656_38697);
if(temp__5804__auto___38713){
var seq__37656_38715__$1 = temp__5804__auto___38713;
if(cljs.core.chunked_seq_QMARK_(seq__37656_38715__$1)){
var c__5568__auto___38716 = cljs.core.chunk_first(seq__37656_38715__$1);
var G__38717 = cljs.core.chunk_rest(seq__37656_38715__$1);
var G__38718 = c__5568__auto___38716;
var G__38719 = cljs.core.count(c__5568__auto___38716);
var G__38720 = (0);
seq__37656_38697 = G__38717;
chunk__37657_38698 = G__38718;
count__37658_38699 = G__38719;
i__37659_38700 = G__38720;
continue;
} else {
var vec__37684_38722 = cljs.core.first(seq__37656_38715__$1);
var script_tag_38723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37684_38722,(0),null);
var script_body_38724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37684_38722,(1),null);
eval(script_body_38724);


var G__38725 = cljs.core.next(seq__37656_38715__$1);
var G__38726 = null;
var G__38727 = (0);
var G__38728 = (0);
seq__37656_38697 = G__38725;
chunk__37657_38698 = G__38726;
count__37658_38699 = G__38727;
i__37659_38700 = G__38728;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37694){
var vec__37700 = p__37694;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37700,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37700,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37719 = arguments.length;
switch (G__37719) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37759 = cljs.core.seq(style_keys);
var chunk__37760 = null;
var count__37761 = (0);
var i__37762 = (0);
while(true){
if((i__37762 < count__37761)){
var it = chunk__37760.cljs$core$IIndexed$_nth$arity$2(null,i__37762);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38737 = seq__37759;
var G__38738 = chunk__37760;
var G__38739 = count__37761;
var G__38740 = (i__37762 + (1));
seq__37759 = G__38737;
chunk__37760 = G__38738;
count__37761 = G__38739;
i__37762 = G__38740;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37759);
if(temp__5804__auto__){
var seq__37759__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37759__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37759__$1);
var G__38744 = cljs.core.chunk_rest(seq__37759__$1);
var G__38745 = c__5568__auto__;
var G__38746 = cljs.core.count(c__5568__auto__);
var G__38747 = (0);
seq__37759 = G__38744;
chunk__37760 = G__38745;
count__37761 = G__38746;
i__37762 = G__38747;
continue;
} else {
var it = cljs.core.first(seq__37759__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38752 = cljs.core.next(seq__37759__$1);
var G__38753 = null;
var G__38754 = (0);
var G__38755 = (0);
seq__37759 = G__38752;
chunk__37760 = G__38753;
count__37761 = G__38754;
i__37762 = G__38755;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37790,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37803 = k37790;
var G__37803__$1 = (((G__37803 instanceof cljs.core.Keyword))?G__37803.fqn:null);
switch (G__37803__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37790,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37810){
var vec__37812 = p__37810;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37812,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37812,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37789){
var self__ = this;
var G__37789__$1 = this;
return (new cljs.core.RecordIter((0),G__37789__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37791,other37792){
var self__ = this;
var this37791__$1 = this;
return (((!((other37792 == null)))) && ((((this37791__$1.constructor === other37792.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37791__$1.x,other37792.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37791__$1.y,other37792.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37791__$1.__extmap,other37792.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37790){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37858 = k37790;
var G__37858__$1 = (((G__37858 instanceof cljs.core.Keyword))?G__37858.fqn:null);
switch (G__37858__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37790);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37789){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37863 = cljs.core.keyword_identical_QMARK_;
var expr__37865 = k__5352__auto__;
if(cljs.core.truth_((pred__37863.cljs$core$IFn$_invoke$arity$2 ? pred__37863.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37865) : pred__37863.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37865)))){
return (new shadow.dom.Coordinate(G__37789,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37863.cljs$core$IFn$_invoke$arity$2 ? pred__37863.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37865) : pred__37863.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37865)))){
return (new shadow.dom.Coordinate(self__.x,G__37789,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37789),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37789){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37789,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37795){
var extmap__5385__auto__ = (function (){var G__37886 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37795,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37795)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37886);
} else {
return G__37886;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37795),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37795),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37905,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37928 = k37905;
var G__37928__$1 = (((G__37928 instanceof cljs.core.Keyword))?G__37928.fqn:null);
switch (G__37928__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37905,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37940){
var vec__37941 = p__37940;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37941,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37941,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37904){
var self__ = this;
var G__37904__$1 = this;
return (new cljs.core.RecordIter((0),G__37904__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37907,other37908){
var self__ = this;
var this37907__$1 = this;
return (((!((other37908 == null)))) && ((((this37907__$1.constructor === other37908.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37907__$1.w,other37908.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37907__$1.h,other37908.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37907__$1.__extmap,other37908.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37905){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37969 = k37905;
var G__37969__$1 = (((G__37969 instanceof cljs.core.Keyword))?G__37969.fqn:null);
switch (G__37969__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37905);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37904){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37971 = cljs.core.keyword_identical_QMARK_;
var expr__37972 = k__5352__auto__;
if(cljs.core.truth_((pred__37971.cljs$core$IFn$_invoke$arity$2 ? pred__37971.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37972) : pred__37971.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37972)))){
return (new shadow.dom.Size(G__37904,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37971.cljs$core$IFn$_invoke$arity$2 ? pred__37971.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37972) : pred__37971.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37972)))){
return (new shadow.dom.Size(self__.w,G__37904,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37904),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37904){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37904,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37915){
var extmap__5385__auto__ = (function (){var G__37991 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37915,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37915)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37991);
} else {
return G__37991;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37915),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37915),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__38891 = (i + (1));
var G__38892 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38891;
ret = G__38892;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38023){
var vec__38024 = p__38023;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38024,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38024,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38034 = arguments.length;
switch (G__38034) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38898 = ps;
var G__38899 = (i + (1));
el__$1 = G__38898;
i = G__38899;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__38115 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38115,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38115,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38115,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38120_38902 = cljs.core.seq(props);
var chunk__38121_38903 = null;
var count__38122_38904 = (0);
var i__38123_38905 = (0);
while(true){
if((i__38123_38905 < count__38122_38904)){
var vec__38151_38906 = chunk__38121_38903.cljs$core$IIndexed$_nth$arity$2(null,i__38123_38905);
var k_38907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38151_38906,(0),null);
var v_38908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38151_38906,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_38907);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38907),v_38908);


var G__38910 = seq__38120_38902;
var G__38911 = chunk__38121_38903;
var G__38912 = count__38122_38904;
var G__38913 = (i__38123_38905 + (1));
seq__38120_38902 = G__38910;
chunk__38121_38903 = G__38911;
count__38122_38904 = G__38912;
i__38123_38905 = G__38913;
continue;
} else {
var temp__5804__auto___38914 = cljs.core.seq(seq__38120_38902);
if(temp__5804__auto___38914){
var seq__38120_38915__$1 = temp__5804__auto___38914;
if(cljs.core.chunked_seq_QMARK_(seq__38120_38915__$1)){
var c__5568__auto___38916 = cljs.core.chunk_first(seq__38120_38915__$1);
var G__38917 = cljs.core.chunk_rest(seq__38120_38915__$1);
var G__38918 = c__5568__auto___38916;
var G__38919 = cljs.core.count(c__5568__auto___38916);
var G__38920 = (0);
seq__38120_38902 = G__38917;
chunk__38121_38903 = G__38918;
count__38122_38904 = G__38919;
i__38123_38905 = G__38920;
continue;
} else {
var vec__38160_38921 = cljs.core.first(seq__38120_38915__$1);
var k_38922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38160_38921,(0),null);
var v_38923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38160_38921,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_38922);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38922),v_38923);


var G__38924 = cljs.core.next(seq__38120_38915__$1);
var G__38925 = null;
var G__38926 = (0);
var G__38927 = (0);
seq__38120_38902 = G__38924;
chunk__38121_38903 = G__38925;
count__38122_38904 = G__38926;
i__38123_38905 = G__38927;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38174 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38174,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38174,(1),null);
var seq__38179_38928 = cljs.core.seq(node_children);
var chunk__38181_38929 = null;
var count__38182_38930 = (0);
var i__38183_38931 = (0);
while(true){
if((i__38183_38931 < count__38182_38930)){
var child_struct_38932 = chunk__38181_38929.cljs$core$IIndexed$_nth$arity$2(null,i__38183_38931);
if((!((child_struct_38932 == null)))){
if(typeof child_struct_38932 === 'string'){
var text_38933 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38933),child_struct_38932].join(''));
} else {
var children_38934 = shadow.dom.svg_node(child_struct_38932);
if(cljs.core.seq_QMARK_(children_38934)){
var seq__38227_38935 = cljs.core.seq(children_38934);
var chunk__38229_38936 = null;
var count__38230_38937 = (0);
var i__38231_38938 = (0);
while(true){
if((i__38231_38938 < count__38230_38937)){
var child_38939 = chunk__38229_38936.cljs$core$IIndexed$_nth$arity$2(null,i__38231_38938);
if(cljs.core.truth_(child_38939)){
node.appendChild(child_38939);


var G__38940 = seq__38227_38935;
var G__38941 = chunk__38229_38936;
var G__38942 = count__38230_38937;
var G__38943 = (i__38231_38938 + (1));
seq__38227_38935 = G__38940;
chunk__38229_38936 = G__38941;
count__38230_38937 = G__38942;
i__38231_38938 = G__38943;
continue;
} else {
var G__38944 = seq__38227_38935;
var G__38945 = chunk__38229_38936;
var G__38946 = count__38230_38937;
var G__38947 = (i__38231_38938 + (1));
seq__38227_38935 = G__38944;
chunk__38229_38936 = G__38945;
count__38230_38937 = G__38946;
i__38231_38938 = G__38947;
continue;
}
} else {
var temp__5804__auto___38948 = cljs.core.seq(seq__38227_38935);
if(temp__5804__auto___38948){
var seq__38227_38949__$1 = temp__5804__auto___38948;
if(cljs.core.chunked_seq_QMARK_(seq__38227_38949__$1)){
var c__5568__auto___38950 = cljs.core.chunk_first(seq__38227_38949__$1);
var G__38951 = cljs.core.chunk_rest(seq__38227_38949__$1);
var G__38952 = c__5568__auto___38950;
var G__38953 = cljs.core.count(c__5568__auto___38950);
var G__38954 = (0);
seq__38227_38935 = G__38951;
chunk__38229_38936 = G__38952;
count__38230_38937 = G__38953;
i__38231_38938 = G__38954;
continue;
} else {
var child_38955 = cljs.core.first(seq__38227_38949__$1);
if(cljs.core.truth_(child_38955)){
node.appendChild(child_38955);


var G__38957 = cljs.core.next(seq__38227_38949__$1);
var G__38958 = null;
var G__38959 = (0);
var G__38960 = (0);
seq__38227_38935 = G__38957;
chunk__38229_38936 = G__38958;
count__38230_38937 = G__38959;
i__38231_38938 = G__38960;
continue;
} else {
var G__38961 = cljs.core.next(seq__38227_38949__$1);
var G__38962 = null;
var G__38963 = (0);
var G__38964 = (0);
seq__38227_38935 = G__38961;
chunk__38229_38936 = G__38962;
count__38230_38937 = G__38963;
i__38231_38938 = G__38964;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38934);
}
}


var G__38965 = seq__38179_38928;
var G__38966 = chunk__38181_38929;
var G__38967 = count__38182_38930;
var G__38968 = (i__38183_38931 + (1));
seq__38179_38928 = G__38965;
chunk__38181_38929 = G__38966;
count__38182_38930 = G__38967;
i__38183_38931 = G__38968;
continue;
} else {
var G__38969 = seq__38179_38928;
var G__38970 = chunk__38181_38929;
var G__38971 = count__38182_38930;
var G__38972 = (i__38183_38931 + (1));
seq__38179_38928 = G__38969;
chunk__38181_38929 = G__38970;
count__38182_38930 = G__38971;
i__38183_38931 = G__38972;
continue;
}
} else {
var temp__5804__auto___38973 = cljs.core.seq(seq__38179_38928);
if(temp__5804__auto___38973){
var seq__38179_38974__$1 = temp__5804__auto___38973;
if(cljs.core.chunked_seq_QMARK_(seq__38179_38974__$1)){
var c__5568__auto___38975 = cljs.core.chunk_first(seq__38179_38974__$1);
var G__38976 = cljs.core.chunk_rest(seq__38179_38974__$1);
var G__38977 = c__5568__auto___38975;
var G__38978 = cljs.core.count(c__5568__auto___38975);
var G__38979 = (0);
seq__38179_38928 = G__38976;
chunk__38181_38929 = G__38977;
count__38182_38930 = G__38978;
i__38183_38931 = G__38979;
continue;
} else {
var child_struct_38980 = cljs.core.first(seq__38179_38974__$1);
if((!((child_struct_38980 == null)))){
if(typeof child_struct_38980 === 'string'){
var text_38981 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38981),child_struct_38980].join(''));
} else {
var children_38982 = shadow.dom.svg_node(child_struct_38980);
if(cljs.core.seq_QMARK_(children_38982)){
var seq__38273_38983 = cljs.core.seq(children_38982);
var chunk__38275_38984 = null;
var count__38276_38985 = (0);
var i__38277_38986 = (0);
while(true){
if((i__38277_38986 < count__38276_38985)){
var child_38987 = chunk__38275_38984.cljs$core$IIndexed$_nth$arity$2(null,i__38277_38986);
if(cljs.core.truth_(child_38987)){
node.appendChild(child_38987);


var G__38988 = seq__38273_38983;
var G__38989 = chunk__38275_38984;
var G__38990 = count__38276_38985;
var G__38991 = (i__38277_38986 + (1));
seq__38273_38983 = G__38988;
chunk__38275_38984 = G__38989;
count__38276_38985 = G__38990;
i__38277_38986 = G__38991;
continue;
} else {
var G__38992 = seq__38273_38983;
var G__38993 = chunk__38275_38984;
var G__38994 = count__38276_38985;
var G__38995 = (i__38277_38986 + (1));
seq__38273_38983 = G__38992;
chunk__38275_38984 = G__38993;
count__38276_38985 = G__38994;
i__38277_38986 = G__38995;
continue;
}
} else {
var temp__5804__auto___38996__$1 = cljs.core.seq(seq__38273_38983);
if(temp__5804__auto___38996__$1){
var seq__38273_38997__$1 = temp__5804__auto___38996__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38273_38997__$1)){
var c__5568__auto___38998 = cljs.core.chunk_first(seq__38273_38997__$1);
var G__38999 = cljs.core.chunk_rest(seq__38273_38997__$1);
var G__39000 = c__5568__auto___38998;
var G__39001 = cljs.core.count(c__5568__auto___38998);
var G__39002 = (0);
seq__38273_38983 = G__38999;
chunk__38275_38984 = G__39000;
count__38276_38985 = G__39001;
i__38277_38986 = G__39002;
continue;
} else {
var child_39003 = cljs.core.first(seq__38273_38997__$1);
if(cljs.core.truth_(child_39003)){
node.appendChild(child_39003);


var G__39004 = cljs.core.next(seq__38273_38997__$1);
var G__39005 = null;
var G__39006 = (0);
var G__39007 = (0);
seq__38273_38983 = G__39004;
chunk__38275_38984 = G__39005;
count__38276_38985 = G__39006;
i__38277_38986 = G__39007;
continue;
} else {
var G__39008 = cljs.core.next(seq__38273_38997__$1);
var G__39009 = null;
var G__39010 = (0);
var G__39011 = (0);
seq__38273_38983 = G__39008;
chunk__38275_38984 = G__39009;
count__38276_38985 = G__39010;
i__38277_38986 = G__39011;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38982);
}
}


var G__39012 = cljs.core.next(seq__38179_38974__$1);
var G__39013 = null;
var G__39014 = (0);
var G__39015 = (0);
seq__38179_38928 = G__39012;
chunk__38181_38929 = G__39013;
count__38182_38930 = G__39014;
i__38183_38931 = G__39015;
continue;
} else {
var G__39016 = cljs.core.next(seq__38179_38974__$1);
var G__39017 = null;
var G__39018 = (0);
var G__39019 = (0);
seq__38179_38928 = G__39016;
chunk__38181_38929 = G__39017;
count__38182_38930 = G__39018;
i__38183_38931 = G__39019;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39022 = arguments.length;
var i__5770__auto___39023 = (0);
while(true){
if((i__5770__auto___39023 < len__5769__auto___39022)){
args__5775__auto__.push((arguments[i__5770__auto___39023]));

var G__39024 = (i__5770__auto___39023 + (1));
i__5770__auto___39023 = G__39024;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38303){
var G__38304 = cljs.core.first(seq38303);
var seq38303__$1 = cljs.core.next(seq38303);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38304,seq38303__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__38323 = arguments.length;
switch (G__38323) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__32244__auto___39026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_38340){
var state_val_38341 = (state_38340[(1)]);
if((state_val_38341 === (1))){
var state_38340__$1 = state_38340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38340__$1,(2),once_or_cleanup);
} else {
if((state_val_38341 === (2))){
var inst_38337 = (state_38340[(2)]);
var inst_38338 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38340__$1 = (function (){var statearr_38346 = state_38340;
(statearr_38346[(7)] = inst_38337);

return statearr_38346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38340__$1,inst_38338);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32216__auto__ = null;
var shadow$dom$state_machine__32216__auto____0 = (function (){
var statearr_38347 = [null,null,null,null,null,null,null,null];
(statearr_38347[(0)] = shadow$dom$state_machine__32216__auto__);

(statearr_38347[(1)] = (1));

return statearr_38347;
});
var shadow$dom$state_machine__32216__auto____1 = (function (state_38340){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_38340);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e38354){var ex__32219__auto__ = e38354;
var statearr_38355_39029 = state_38340;
(statearr_38355_39029[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_38340[(4)]))){
var statearr_38359_39031 = state_38340;
(statearr_38359_39031[(1)] = cljs.core.first((state_38340[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39034 = state_38340;
state_38340 = G__39034;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
shadow$dom$state_machine__32216__auto__ = function(state_38340){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32216__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32216__auto____1.call(this,state_38340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32216__auto____0;
shadow$dom$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32216__auto____1;
return shadow$dom$state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_38366 = f__32245__auto__();
(statearr_38366[(6)] = c__32244__auto___39026);

return statearr_38366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
