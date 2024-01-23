goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_39612 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_39612(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_39613 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_39613(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38362 = coll;
var G__38363 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38362,G__38363) : shadow.dom.lazy_native_coll_seq.call(null,G__38362,G__38363));
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
var G__38415 = arguments.length;
switch (G__38415) {
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
var G__38425 = arguments.length;
switch (G__38425) {
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
var G__38442 = arguments.length;
switch (G__38442) {
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
var G__38454 = arguments.length;
switch (G__38454) {
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
var G__38463 = arguments.length;
switch (G__38463) {
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
var G__38480 = arguments.length;
switch (G__38480) {
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
}catch (e38498){if((e38498 instanceof Object)){
var e = e38498;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38498;

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
var seq__38502 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__38503 = null;
var count__38504 = (0);
var i__38505 = (0);
while(true){
if((i__38505 < count__38504)){
var el = chunk__38503.cljs$core$IIndexed$_nth$arity$2(null,i__38505);
var handler_39626__$1 = ((function (seq__38502,chunk__38503,count__38504,i__38505,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38502,chunk__38503,count__38504,i__38505,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39626__$1);


var G__39627 = seq__38502;
var G__39628 = chunk__38503;
var G__39629 = count__38504;
var G__39630 = (i__38505 + (1));
seq__38502 = G__39627;
chunk__38503 = G__39628;
count__38504 = G__39629;
i__38505 = G__39630;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38502);
if(temp__5804__auto__){
var seq__38502__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38502__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38502__$1);
var G__39631 = cljs.core.chunk_rest(seq__38502__$1);
var G__39632 = c__5568__auto__;
var G__39633 = cljs.core.count(c__5568__auto__);
var G__39634 = (0);
seq__38502 = G__39631;
chunk__38503 = G__39632;
count__38504 = G__39633;
i__38505 = G__39634;
continue;
} else {
var el = cljs.core.first(seq__38502__$1);
var handler_39635__$1 = ((function (seq__38502,chunk__38503,count__38504,i__38505,el,seq__38502__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38502,chunk__38503,count__38504,i__38505,el,seq__38502__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39635__$1);


var G__39636 = cljs.core.next(seq__38502__$1);
var G__39637 = null;
var G__39638 = (0);
var G__39639 = (0);
seq__38502 = G__39636;
chunk__38503 = G__39637;
count__38504 = G__39638;
i__38505 = G__39639;
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
var G__38546 = arguments.length;
switch (G__38546) {
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
var seq__38562 = cljs.core.seq(events);
var chunk__38563 = null;
var count__38564 = (0);
var i__38565 = (0);
while(true){
if((i__38565 < count__38564)){
var vec__38576 = chunk__38563.cljs$core$IIndexed$_nth$arity$2(null,i__38565);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38576,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38576,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39644 = seq__38562;
var G__39645 = chunk__38563;
var G__39646 = count__38564;
var G__39647 = (i__38565 + (1));
seq__38562 = G__39644;
chunk__38563 = G__39645;
count__38564 = G__39646;
i__38565 = G__39647;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38562);
if(temp__5804__auto__){
var seq__38562__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38562__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38562__$1);
var G__39648 = cljs.core.chunk_rest(seq__38562__$1);
var G__39649 = c__5568__auto__;
var G__39650 = cljs.core.count(c__5568__auto__);
var G__39651 = (0);
seq__38562 = G__39648;
chunk__38563 = G__39649;
count__38564 = G__39650;
i__38565 = G__39651;
continue;
} else {
var vec__38584 = cljs.core.first(seq__38562__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38584,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38584,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39653 = cljs.core.next(seq__38562__$1);
var G__39654 = null;
var G__39655 = (0);
var G__39656 = (0);
seq__38562 = G__39653;
chunk__38563 = G__39654;
count__38564 = G__39655;
i__38565 = G__39656;
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
var seq__38596 = cljs.core.seq(styles);
var chunk__38597 = null;
var count__38598 = (0);
var i__38599 = (0);
while(true){
if((i__38599 < count__38598)){
var vec__38606 = chunk__38597.cljs$core$IIndexed$_nth$arity$2(null,i__38599);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38606,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38606,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39663 = seq__38596;
var G__39664 = chunk__38597;
var G__39665 = count__38598;
var G__39666 = (i__38599 + (1));
seq__38596 = G__39663;
chunk__38597 = G__39664;
count__38598 = G__39665;
i__38599 = G__39666;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38596);
if(temp__5804__auto__){
var seq__38596__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38596__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38596__$1);
var G__39667 = cljs.core.chunk_rest(seq__38596__$1);
var G__39668 = c__5568__auto__;
var G__39669 = cljs.core.count(c__5568__auto__);
var G__39670 = (0);
seq__38596 = G__39667;
chunk__38597 = G__39668;
count__38598 = G__39669;
i__38599 = G__39670;
continue;
} else {
var vec__38609 = cljs.core.first(seq__38596__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38609,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38609,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39671 = cljs.core.next(seq__38596__$1);
var G__39672 = null;
var G__39673 = (0);
var G__39674 = (0);
seq__38596 = G__39671;
chunk__38597 = G__39672;
count__38598 = G__39673;
i__38599 = G__39674;
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
var G__38617_39678 = key;
var G__38617_39679__$1 = (((G__38617_39678 instanceof cljs.core.Keyword))?G__38617_39678.fqn:null);
switch (G__38617_39679__$1) {
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
var ks_39681 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_39681,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_39681,"aria-");
}
})())){
el.setAttribute(ks_39681,value);
} else {
(el[ks_39681] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38633){
var map__38634 = p__38633;
var map__38634__$1 = cljs.core.__destructure_map(map__38634);
var props = map__38634__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38637 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38637,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38637,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38637,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38645 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38645,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38645;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38651 = arguments.length;
switch (G__38651) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38659){
var vec__38661 = p__38659;
var seq__38662 = cljs.core.seq(vec__38661);
var first__38663 = cljs.core.first(seq__38662);
var seq__38662__$1 = cljs.core.next(seq__38662);
var nn = first__38663;
var first__38663__$1 = cljs.core.first(seq__38662__$1);
var seq__38662__$2 = cljs.core.next(seq__38662__$1);
var np = first__38663__$1;
var nc = seq__38662__$2;
var node = vec__38661;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38666 = nn;
var G__38667 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38666,G__38667) : create_fn.call(null,G__38666,G__38667));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38669 = nn;
var G__38670 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38669,G__38670) : create_fn.call(null,G__38669,G__38670));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38677 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38677,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38677,(1),null);
var seq__38681_39686 = cljs.core.seq(node_children);
var chunk__38682_39687 = null;
var count__38683_39688 = (0);
var i__38684_39689 = (0);
while(true){
if((i__38684_39689 < count__38683_39688)){
var child_struct_39690 = chunk__38682_39687.cljs$core$IIndexed$_nth$arity$2(null,i__38684_39689);
var children_39691 = shadow.dom.dom_node(child_struct_39690);
if(cljs.core.seq_QMARK_(children_39691)){
var seq__38730_39692 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39691));
var chunk__38732_39693 = null;
var count__38733_39694 = (0);
var i__38734_39695 = (0);
while(true){
if((i__38734_39695 < count__38733_39694)){
var child_39696 = chunk__38732_39693.cljs$core$IIndexed$_nth$arity$2(null,i__38734_39695);
if(cljs.core.truth_(child_39696)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39696);


var G__39697 = seq__38730_39692;
var G__39698 = chunk__38732_39693;
var G__39699 = count__38733_39694;
var G__39700 = (i__38734_39695 + (1));
seq__38730_39692 = G__39697;
chunk__38732_39693 = G__39698;
count__38733_39694 = G__39699;
i__38734_39695 = G__39700;
continue;
} else {
var G__39701 = seq__38730_39692;
var G__39702 = chunk__38732_39693;
var G__39703 = count__38733_39694;
var G__39704 = (i__38734_39695 + (1));
seq__38730_39692 = G__39701;
chunk__38732_39693 = G__39702;
count__38733_39694 = G__39703;
i__38734_39695 = G__39704;
continue;
}
} else {
var temp__5804__auto___39705 = cljs.core.seq(seq__38730_39692);
if(temp__5804__auto___39705){
var seq__38730_39706__$1 = temp__5804__auto___39705;
if(cljs.core.chunked_seq_QMARK_(seq__38730_39706__$1)){
var c__5568__auto___39707 = cljs.core.chunk_first(seq__38730_39706__$1);
var G__39708 = cljs.core.chunk_rest(seq__38730_39706__$1);
var G__39709 = c__5568__auto___39707;
var G__39710 = cljs.core.count(c__5568__auto___39707);
var G__39711 = (0);
seq__38730_39692 = G__39708;
chunk__38732_39693 = G__39709;
count__38733_39694 = G__39710;
i__38734_39695 = G__39711;
continue;
} else {
var child_39712 = cljs.core.first(seq__38730_39706__$1);
if(cljs.core.truth_(child_39712)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39712);


var G__39713 = cljs.core.next(seq__38730_39706__$1);
var G__39714 = null;
var G__39715 = (0);
var G__39716 = (0);
seq__38730_39692 = G__39713;
chunk__38732_39693 = G__39714;
count__38733_39694 = G__39715;
i__38734_39695 = G__39716;
continue;
} else {
var G__39717 = cljs.core.next(seq__38730_39706__$1);
var G__39718 = null;
var G__39719 = (0);
var G__39720 = (0);
seq__38730_39692 = G__39717;
chunk__38732_39693 = G__39718;
count__38733_39694 = G__39719;
i__38734_39695 = G__39720;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39691);
}


var G__39722 = seq__38681_39686;
var G__39723 = chunk__38682_39687;
var G__39724 = count__38683_39688;
var G__39725 = (i__38684_39689 + (1));
seq__38681_39686 = G__39722;
chunk__38682_39687 = G__39723;
count__38683_39688 = G__39724;
i__38684_39689 = G__39725;
continue;
} else {
var temp__5804__auto___39726 = cljs.core.seq(seq__38681_39686);
if(temp__5804__auto___39726){
var seq__38681_39727__$1 = temp__5804__auto___39726;
if(cljs.core.chunked_seq_QMARK_(seq__38681_39727__$1)){
var c__5568__auto___39728 = cljs.core.chunk_first(seq__38681_39727__$1);
var G__39729 = cljs.core.chunk_rest(seq__38681_39727__$1);
var G__39730 = c__5568__auto___39728;
var G__39731 = cljs.core.count(c__5568__auto___39728);
var G__39732 = (0);
seq__38681_39686 = G__39729;
chunk__38682_39687 = G__39730;
count__38683_39688 = G__39731;
i__38684_39689 = G__39732;
continue;
} else {
var child_struct_39733 = cljs.core.first(seq__38681_39727__$1);
var children_39734 = shadow.dom.dom_node(child_struct_39733);
if(cljs.core.seq_QMARK_(children_39734)){
var seq__38748_39738 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39734));
var chunk__38750_39739 = null;
var count__38751_39740 = (0);
var i__38752_39741 = (0);
while(true){
if((i__38752_39741 < count__38751_39740)){
var child_39742 = chunk__38750_39739.cljs$core$IIndexed$_nth$arity$2(null,i__38752_39741);
if(cljs.core.truth_(child_39742)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39742);


var G__39743 = seq__38748_39738;
var G__39744 = chunk__38750_39739;
var G__39745 = count__38751_39740;
var G__39746 = (i__38752_39741 + (1));
seq__38748_39738 = G__39743;
chunk__38750_39739 = G__39744;
count__38751_39740 = G__39745;
i__38752_39741 = G__39746;
continue;
} else {
var G__39747 = seq__38748_39738;
var G__39748 = chunk__38750_39739;
var G__39749 = count__38751_39740;
var G__39750 = (i__38752_39741 + (1));
seq__38748_39738 = G__39747;
chunk__38750_39739 = G__39748;
count__38751_39740 = G__39749;
i__38752_39741 = G__39750;
continue;
}
} else {
var temp__5804__auto___39751__$1 = cljs.core.seq(seq__38748_39738);
if(temp__5804__auto___39751__$1){
var seq__38748_39755__$1 = temp__5804__auto___39751__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38748_39755__$1)){
var c__5568__auto___39757 = cljs.core.chunk_first(seq__38748_39755__$1);
var G__39758 = cljs.core.chunk_rest(seq__38748_39755__$1);
var G__39759 = c__5568__auto___39757;
var G__39760 = cljs.core.count(c__5568__auto___39757);
var G__39761 = (0);
seq__38748_39738 = G__39758;
chunk__38750_39739 = G__39759;
count__38751_39740 = G__39760;
i__38752_39741 = G__39761;
continue;
} else {
var child_39763 = cljs.core.first(seq__38748_39755__$1);
if(cljs.core.truth_(child_39763)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39763);


var G__39764 = cljs.core.next(seq__38748_39755__$1);
var G__39765 = null;
var G__39766 = (0);
var G__39767 = (0);
seq__38748_39738 = G__39764;
chunk__38750_39739 = G__39765;
count__38751_39740 = G__39766;
i__38752_39741 = G__39767;
continue;
} else {
var G__39768 = cljs.core.next(seq__38748_39755__$1);
var G__39769 = null;
var G__39770 = (0);
var G__39771 = (0);
seq__38748_39738 = G__39768;
chunk__38750_39739 = G__39769;
count__38751_39740 = G__39770;
i__38752_39741 = G__39771;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39734);
}


var G__39772 = cljs.core.next(seq__38681_39727__$1);
var G__39773 = null;
var G__39774 = (0);
var G__39775 = (0);
seq__38681_39686 = G__39772;
chunk__38682_39687 = G__39773;
count__38683_39688 = G__39774;
i__38684_39689 = G__39775;
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
var seq__38791 = cljs.core.seq(node);
var chunk__38792 = null;
var count__38793 = (0);
var i__38794 = (0);
while(true){
if((i__38794 < count__38793)){
var n = chunk__38792.cljs$core$IIndexed$_nth$arity$2(null,i__38794);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39784 = seq__38791;
var G__39785 = chunk__38792;
var G__39786 = count__38793;
var G__39787 = (i__38794 + (1));
seq__38791 = G__39784;
chunk__38792 = G__39785;
count__38793 = G__39786;
i__38794 = G__39787;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38791);
if(temp__5804__auto__){
var seq__38791__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38791__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38791__$1);
var G__39789 = cljs.core.chunk_rest(seq__38791__$1);
var G__39790 = c__5568__auto__;
var G__39791 = cljs.core.count(c__5568__auto__);
var G__39792 = (0);
seq__38791 = G__39789;
chunk__38792 = G__39790;
count__38793 = G__39791;
i__38794 = G__39792;
continue;
} else {
var n = cljs.core.first(seq__38791__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39796 = cljs.core.next(seq__38791__$1);
var G__39797 = null;
var G__39798 = (0);
var G__39799 = (0);
seq__38791 = G__39796;
chunk__38792 = G__39797;
count__38793 = G__39798;
i__38794 = G__39799;
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
var G__38833 = arguments.length;
switch (G__38833) {
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
var G__38849 = arguments.length;
switch (G__38849) {
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
var G__38872 = arguments.length;
switch (G__38872) {
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
var len__5769__auto___39806 = arguments.length;
var i__5770__auto___39808 = (0);
while(true){
if((i__5770__auto___39808 < len__5769__auto___39806)){
args__5775__auto__.push((arguments[i__5770__auto___39808]));

var G__39811 = (i__5770__auto___39808 + (1));
i__5770__auto___39808 = G__39811;
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
var seq__38891_39815 = cljs.core.seq(nodes);
var chunk__38892_39816 = null;
var count__38893_39817 = (0);
var i__38894_39818 = (0);
while(true){
if((i__38894_39818 < count__38893_39817)){
var node_39819 = chunk__38892_39816.cljs$core$IIndexed$_nth$arity$2(null,i__38894_39818);
fragment.appendChild(shadow.dom._to_dom(node_39819));


var G__39820 = seq__38891_39815;
var G__39821 = chunk__38892_39816;
var G__39822 = count__38893_39817;
var G__39823 = (i__38894_39818 + (1));
seq__38891_39815 = G__39820;
chunk__38892_39816 = G__39821;
count__38893_39817 = G__39822;
i__38894_39818 = G__39823;
continue;
} else {
var temp__5804__auto___39824 = cljs.core.seq(seq__38891_39815);
if(temp__5804__auto___39824){
var seq__38891_39825__$1 = temp__5804__auto___39824;
if(cljs.core.chunked_seq_QMARK_(seq__38891_39825__$1)){
var c__5568__auto___39826 = cljs.core.chunk_first(seq__38891_39825__$1);
var G__39827 = cljs.core.chunk_rest(seq__38891_39825__$1);
var G__39828 = c__5568__auto___39826;
var G__39829 = cljs.core.count(c__5568__auto___39826);
var G__39830 = (0);
seq__38891_39815 = G__39827;
chunk__38892_39816 = G__39828;
count__38893_39817 = G__39829;
i__38894_39818 = G__39830;
continue;
} else {
var node_39831 = cljs.core.first(seq__38891_39825__$1);
fragment.appendChild(shadow.dom._to_dom(node_39831));


var G__39832 = cljs.core.next(seq__38891_39825__$1);
var G__39833 = null;
var G__39834 = (0);
var G__39835 = (0);
seq__38891_39815 = G__39832;
chunk__38892_39816 = G__39833;
count__38893_39817 = G__39834;
i__38894_39818 = G__39835;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38888){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38888));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38908_39836 = cljs.core.seq(scripts);
var chunk__38910_39837 = null;
var count__38911_39838 = (0);
var i__38912_39839 = (0);
while(true){
if((i__38912_39839 < count__38911_39838)){
var vec__38928_39840 = chunk__38910_39837.cljs$core$IIndexed$_nth$arity$2(null,i__38912_39839);
var script_tag_39841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38928_39840,(0),null);
var script_body_39842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38928_39840,(1),null);
eval(script_body_39842);


var G__39843 = seq__38908_39836;
var G__39844 = chunk__38910_39837;
var G__39845 = count__38911_39838;
var G__39846 = (i__38912_39839 + (1));
seq__38908_39836 = G__39843;
chunk__38910_39837 = G__39844;
count__38911_39838 = G__39845;
i__38912_39839 = G__39846;
continue;
} else {
var temp__5804__auto___39847 = cljs.core.seq(seq__38908_39836);
if(temp__5804__auto___39847){
var seq__38908_39848__$1 = temp__5804__auto___39847;
if(cljs.core.chunked_seq_QMARK_(seq__38908_39848__$1)){
var c__5568__auto___39849 = cljs.core.chunk_first(seq__38908_39848__$1);
var G__39850 = cljs.core.chunk_rest(seq__38908_39848__$1);
var G__39851 = c__5568__auto___39849;
var G__39852 = cljs.core.count(c__5568__auto___39849);
var G__39853 = (0);
seq__38908_39836 = G__39850;
chunk__38910_39837 = G__39851;
count__38911_39838 = G__39852;
i__38912_39839 = G__39853;
continue;
} else {
var vec__38934_39854 = cljs.core.first(seq__38908_39848__$1);
var script_tag_39855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38934_39854,(0),null);
var script_body_39856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38934_39854,(1),null);
eval(script_body_39856);


var G__39857 = cljs.core.next(seq__38908_39848__$1);
var G__39858 = null;
var G__39859 = (0);
var G__39860 = (0);
seq__38908_39836 = G__39857;
chunk__38910_39837 = G__39858;
count__38911_39838 = G__39859;
i__38912_39839 = G__39860;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38940){
var vec__38941 = p__38940;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38941,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38941,(1),null);
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
var G__38951 = arguments.length;
switch (G__38951) {
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
var seq__38983 = cljs.core.seq(style_keys);
var chunk__38984 = null;
var count__38985 = (0);
var i__38986 = (0);
while(true){
if((i__38986 < count__38985)){
var it = chunk__38984.cljs$core$IIndexed$_nth$arity$2(null,i__38986);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39869 = seq__38983;
var G__39870 = chunk__38984;
var G__39871 = count__38985;
var G__39872 = (i__38986 + (1));
seq__38983 = G__39869;
chunk__38984 = G__39870;
count__38985 = G__39871;
i__38986 = G__39872;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38983);
if(temp__5804__auto__){
var seq__38983__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38983__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38983__$1);
var G__39873 = cljs.core.chunk_rest(seq__38983__$1);
var G__39874 = c__5568__auto__;
var G__39875 = cljs.core.count(c__5568__auto__);
var G__39876 = (0);
seq__38983 = G__39873;
chunk__38984 = G__39874;
count__38985 = G__39875;
i__38986 = G__39876;
continue;
} else {
var it = cljs.core.first(seq__38983__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39877 = cljs.core.next(seq__38983__$1);
var G__39878 = null;
var G__39879 = (0);
var G__39880 = (0);
seq__38983 = G__39877;
chunk__38984 = G__39878;
count__38985 = G__39879;
i__38986 = G__39880;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k38993,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__39008 = k38993;
var G__39008__$1 = (((G__39008 instanceof cljs.core.Keyword))?G__39008.fqn:null);
switch (G__39008__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38993,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__39010){
var vec__39011 = p__39010;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39011,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39011,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38992){
var self__ = this;
var G__38992__$1 = this;
return (new cljs.core.RecordIter((0),G__38992__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38994,other38995){
var self__ = this;
var this38994__$1 = this;
return (((!((other38995 == null)))) && ((((this38994__$1.constructor === other38995.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38994__$1.x,other38995.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38994__$1.y,other38995.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38994__$1.__extmap,other38995.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k38993){
var self__ = this;
var this__5350__auto____$1 = this;
var G__39099 = k38993;
var G__39099__$1 = (((G__39099 instanceof cljs.core.Keyword))?G__39099.fqn:null);
switch (G__39099__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38993);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__38992){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__39101 = cljs.core.keyword_identical_QMARK_;
var expr__39102 = k__5352__auto__;
if(cljs.core.truth_((pred__39101.cljs$core$IFn$_invoke$arity$2 ? pred__39101.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__39102) : pred__39101.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__39102)))){
return (new shadow.dom.Coordinate(G__38992,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39101.cljs$core$IFn$_invoke$arity$2 ? pred__39101.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__39102) : pred__39101.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__39102)))){
return (new shadow.dom.Coordinate(self__.x,G__38992,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__38992),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__38992){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38992,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39003){
var extmap__5385__auto__ = (function (){var G__39114 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39003,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39003)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39114);
} else {
return G__39114;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39003),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39003),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k39126,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__39139 = k39126;
var G__39139__$1 = (((G__39139 instanceof cljs.core.Keyword))?G__39139.fqn:null);
switch (G__39139__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39126,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__39140){
var vec__39141 = p__39140;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39141,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39141,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39125){
var self__ = this;
var G__39125__$1 = this;
return (new cljs.core.RecordIter((0),G__39125__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39127,other39128){
var self__ = this;
var this39127__$1 = this;
return (((!((other39128 == null)))) && ((((this39127__$1.constructor === other39128.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39127__$1.w,other39128.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39127__$1.h,other39128.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39127__$1.__extmap,other39128.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k39126){
var self__ = this;
var this__5350__auto____$1 = this;
var G__39174 = k39126;
var G__39174__$1 = (((G__39174 instanceof cljs.core.Keyword))?G__39174.fqn:null);
switch (G__39174__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39126);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__39125){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__39181 = cljs.core.keyword_identical_QMARK_;
var expr__39182 = k__5352__auto__;
if(cljs.core.truth_((pred__39181.cljs$core$IFn$_invoke$arity$2 ? pred__39181.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__39182) : pred__39181.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__39182)))){
return (new shadow.dom.Size(G__39125,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39181.cljs$core$IFn$_invoke$arity$2 ? pred__39181.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__39182) : pred__39181.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__39182)))){
return (new shadow.dom.Size(self__.w,G__39125,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__39125),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__39125){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__39125,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__39129){
var extmap__5385__auto__ = (function (){var G__39191 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39129,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__39129)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39191);
} else {
return G__39191;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39129),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39129),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__39947 = (i + (1));
var G__39948 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39947;
ret = G__39948;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39247){
var vec__39249 = p__39247;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39249,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39249,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39256 = arguments.length;
switch (G__39256) {
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
var G__39956 = ps;
var G__39957 = (i + (1));
el__$1 = G__39956;
i = G__39957;
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
var vec__39316 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39316,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39316,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39316,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39320_39958 = cljs.core.seq(props);
var chunk__39321_39959 = null;
var count__39322_39960 = (0);
var i__39323_39961 = (0);
while(true){
if((i__39323_39961 < count__39322_39960)){
var vec__39356_39962 = chunk__39321_39959.cljs$core$IIndexed$_nth$arity$2(null,i__39323_39961);
var k_39963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39356_39962,(0),null);
var v_39964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39356_39962,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_39963);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39963),v_39964);


var G__39965 = seq__39320_39958;
var G__39966 = chunk__39321_39959;
var G__39967 = count__39322_39960;
var G__39968 = (i__39323_39961 + (1));
seq__39320_39958 = G__39965;
chunk__39321_39959 = G__39966;
count__39322_39960 = G__39967;
i__39323_39961 = G__39968;
continue;
} else {
var temp__5804__auto___39969 = cljs.core.seq(seq__39320_39958);
if(temp__5804__auto___39969){
var seq__39320_39970__$1 = temp__5804__auto___39969;
if(cljs.core.chunked_seq_QMARK_(seq__39320_39970__$1)){
var c__5568__auto___39971 = cljs.core.chunk_first(seq__39320_39970__$1);
var G__39972 = cljs.core.chunk_rest(seq__39320_39970__$1);
var G__39973 = c__5568__auto___39971;
var G__39974 = cljs.core.count(c__5568__auto___39971);
var G__39975 = (0);
seq__39320_39958 = G__39972;
chunk__39321_39959 = G__39973;
count__39322_39960 = G__39974;
i__39323_39961 = G__39975;
continue;
} else {
var vec__39375_39976 = cljs.core.first(seq__39320_39970__$1);
var k_39977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39375_39976,(0),null);
var v_39978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39375_39976,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_39977);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39977),v_39978);


var G__39982 = cljs.core.next(seq__39320_39970__$1);
var G__39983 = null;
var G__39984 = (0);
var G__39985 = (0);
seq__39320_39958 = G__39982;
chunk__39321_39959 = G__39983;
count__39322_39960 = G__39984;
i__39323_39961 = G__39985;
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
var vec__39405 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39405,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39405,(1),null);
var seq__39409_39986 = cljs.core.seq(node_children);
var chunk__39411_39987 = null;
var count__39412_39988 = (0);
var i__39413_39989 = (0);
while(true){
if((i__39413_39989 < count__39412_39988)){
var child_struct_39991 = chunk__39411_39987.cljs$core$IIndexed$_nth$arity$2(null,i__39413_39989);
if((!((child_struct_39991 == null)))){
if(typeof child_struct_39991 === 'string'){
var text_39992 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39992),child_struct_39991].join(''));
} else {
var children_39993 = shadow.dom.svg_node(child_struct_39991);
if(cljs.core.seq_QMARK_(children_39993)){
var seq__39443_39996 = cljs.core.seq(children_39993);
var chunk__39445_39997 = null;
var count__39446_39998 = (0);
var i__39447_39999 = (0);
while(true){
if((i__39447_39999 < count__39446_39998)){
var child_40003 = chunk__39445_39997.cljs$core$IIndexed$_nth$arity$2(null,i__39447_39999);
if(cljs.core.truth_(child_40003)){
node.appendChild(child_40003);


var G__40005 = seq__39443_39996;
var G__40006 = chunk__39445_39997;
var G__40007 = count__39446_39998;
var G__40008 = (i__39447_39999 + (1));
seq__39443_39996 = G__40005;
chunk__39445_39997 = G__40006;
count__39446_39998 = G__40007;
i__39447_39999 = G__40008;
continue;
} else {
var G__40009 = seq__39443_39996;
var G__40010 = chunk__39445_39997;
var G__40011 = count__39446_39998;
var G__40012 = (i__39447_39999 + (1));
seq__39443_39996 = G__40009;
chunk__39445_39997 = G__40010;
count__39446_39998 = G__40011;
i__39447_39999 = G__40012;
continue;
}
} else {
var temp__5804__auto___40019 = cljs.core.seq(seq__39443_39996);
if(temp__5804__auto___40019){
var seq__39443_40020__$1 = temp__5804__auto___40019;
if(cljs.core.chunked_seq_QMARK_(seq__39443_40020__$1)){
var c__5568__auto___40021 = cljs.core.chunk_first(seq__39443_40020__$1);
var G__40022 = cljs.core.chunk_rest(seq__39443_40020__$1);
var G__40023 = c__5568__auto___40021;
var G__40024 = cljs.core.count(c__5568__auto___40021);
var G__40025 = (0);
seq__39443_39996 = G__40022;
chunk__39445_39997 = G__40023;
count__39446_39998 = G__40024;
i__39447_39999 = G__40025;
continue;
} else {
var child_40026 = cljs.core.first(seq__39443_40020__$1);
if(cljs.core.truth_(child_40026)){
node.appendChild(child_40026);


var G__40027 = cljs.core.next(seq__39443_40020__$1);
var G__40028 = null;
var G__40029 = (0);
var G__40030 = (0);
seq__39443_39996 = G__40027;
chunk__39445_39997 = G__40028;
count__39446_39998 = G__40029;
i__39447_39999 = G__40030;
continue;
} else {
var G__40031 = cljs.core.next(seq__39443_40020__$1);
var G__40032 = null;
var G__40033 = (0);
var G__40034 = (0);
seq__39443_39996 = G__40031;
chunk__39445_39997 = G__40032;
count__39446_39998 = G__40033;
i__39447_39999 = G__40034;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39993);
}
}


var G__40035 = seq__39409_39986;
var G__40036 = chunk__39411_39987;
var G__40037 = count__39412_39988;
var G__40038 = (i__39413_39989 + (1));
seq__39409_39986 = G__40035;
chunk__39411_39987 = G__40036;
count__39412_39988 = G__40037;
i__39413_39989 = G__40038;
continue;
} else {
var G__40039 = seq__39409_39986;
var G__40040 = chunk__39411_39987;
var G__40041 = count__39412_39988;
var G__40042 = (i__39413_39989 + (1));
seq__39409_39986 = G__40039;
chunk__39411_39987 = G__40040;
count__39412_39988 = G__40041;
i__39413_39989 = G__40042;
continue;
}
} else {
var temp__5804__auto___40043 = cljs.core.seq(seq__39409_39986);
if(temp__5804__auto___40043){
var seq__39409_40044__$1 = temp__5804__auto___40043;
if(cljs.core.chunked_seq_QMARK_(seq__39409_40044__$1)){
var c__5568__auto___40048 = cljs.core.chunk_first(seq__39409_40044__$1);
var G__40049 = cljs.core.chunk_rest(seq__39409_40044__$1);
var G__40050 = c__5568__auto___40048;
var G__40051 = cljs.core.count(c__5568__auto___40048);
var G__40052 = (0);
seq__39409_39986 = G__40049;
chunk__39411_39987 = G__40050;
count__39412_39988 = G__40051;
i__39413_39989 = G__40052;
continue;
} else {
var child_struct_40053 = cljs.core.first(seq__39409_40044__$1);
if((!((child_struct_40053 == null)))){
if(typeof child_struct_40053 === 'string'){
var text_40054 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40054),child_struct_40053].join(''));
} else {
var children_40055 = shadow.dom.svg_node(child_struct_40053);
if(cljs.core.seq_QMARK_(children_40055)){
var seq__39460_40056 = cljs.core.seq(children_40055);
var chunk__39462_40057 = null;
var count__39463_40058 = (0);
var i__39464_40059 = (0);
while(true){
if((i__39464_40059 < count__39463_40058)){
var child_40060 = chunk__39462_40057.cljs$core$IIndexed$_nth$arity$2(null,i__39464_40059);
if(cljs.core.truth_(child_40060)){
node.appendChild(child_40060);


var G__40061 = seq__39460_40056;
var G__40062 = chunk__39462_40057;
var G__40063 = count__39463_40058;
var G__40064 = (i__39464_40059 + (1));
seq__39460_40056 = G__40061;
chunk__39462_40057 = G__40062;
count__39463_40058 = G__40063;
i__39464_40059 = G__40064;
continue;
} else {
var G__40065 = seq__39460_40056;
var G__40066 = chunk__39462_40057;
var G__40067 = count__39463_40058;
var G__40068 = (i__39464_40059 + (1));
seq__39460_40056 = G__40065;
chunk__39462_40057 = G__40066;
count__39463_40058 = G__40067;
i__39464_40059 = G__40068;
continue;
}
} else {
var temp__5804__auto___40069__$1 = cljs.core.seq(seq__39460_40056);
if(temp__5804__auto___40069__$1){
var seq__39460_40070__$1 = temp__5804__auto___40069__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39460_40070__$1)){
var c__5568__auto___40071 = cljs.core.chunk_first(seq__39460_40070__$1);
var G__40072 = cljs.core.chunk_rest(seq__39460_40070__$1);
var G__40073 = c__5568__auto___40071;
var G__40074 = cljs.core.count(c__5568__auto___40071);
var G__40075 = (0);
seq__39460_40056 = G__40072;
chunk__39462_40057 = G__40073;
count__39463_40058 = G__40074;
i__39464_40059 = G__40075;
continue;
} else {
var child_40076 = cljs.core.first(seq__39460_40070__$1);
if(cljs.core.truth_(child_40076)){
node.appendChild(child_40076);


var G__40077 = cljs.core.next(seq__39460_40070__$1);
var G__40078 = null;
var G__40079 = (0);
var G__40080 = (0);
seq__39460_40056 = G__40077;
chunk__39462_40057 = G__40078;
count__39463_40058 = G__40079;
i__39464_40059 = G__40080;
continue;
} else {
var G__40081 = cljs.core.next(seq__39460_40070__$1);
var G__40082 = null;
var G__40083 = (0);
var G__40084 = (0);
seq__39460_40056 = G__40081;
chunk__39462_40057 = G__40082;
count__39463_40058 = G__40083;
i__39464_40059 = G__40084;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40055);
}
}


var G__40085 = cljs.core.next(seq__39409_40044__$1);
var G__40086 = null;
var G__40087 = (0);
var G__40088 = (0);
seq__39409_39986 = G__40085;
chunk__39411_39987 = G__40086;
count__39412_39988 = G__40087;
i__39413_39989 = G__40088;
continue;
} else {
var G__40089 = cljs.core.next(seq__39409_40044__$1);
var G__40090 = null;
var G__40091 = (0);
var G__40092 = (0);
seq__39409_39986 = G__40089;
chunk__39411_39987 = G__40090;
count__39412_39988 = G__40091;
i__39413_39989 = G__40092;
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
var len__5769__auto___40093 = arguments.length;
var i__5770__auto___40094 = (0);
while(true){
if((i__5770__auto___40094 < len__5769__auto___40093)){
args__5775__auto__.push((arguments[i__5770__auto___40094]));

var G__40095 = (i__5770__auto___40094 + (1));
i__5770__auto___40094 = G__40095;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq39487){
var G__39488 = cljs.core.first(seq39487);
var seq39487__$1 = cljs.core.next(seq39487);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39488,seq39487__$1);
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
var G__39525 = arguments.length;
switch (G__39525) {
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
var c__35785__auto___40103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_39555){
var state_val_39558 = (state_39555[(1)]);
if((state_val_39558 === (1))){
var state_39555__$1 = state_39555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39555__$1,(2),once_or_cleanup);
} else {
if((state_val_39558 === (2))){
var inst_39551 = (state_39555[(2)]);
var inst_39552 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_39555__$1 = (function (){var statearr_39576 = state_39555;
(statearr_39576[(7)] = inst_39551);

return statearr_39576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39555__$1,inst_39552);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35540__auto__ = null;
var shadow$dom$state_machine__35540__auto____0 = (function (){
var statearr_39583 = [null,null,null,null,null,null,null,null];
(statearr_39583[(0)] = shadow$dom$state_machine__35540__auto__);

(statearr_39583[(1)] = (1));

return statearr_39583;
});
var shadow$dom$state_machine__35540__auto____1 = (function (state_39555){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_39555);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e39588){var ex__35543__auto__ = e39588;
var statearr_39589_40106 = state_39555;
(statearr_39589_40106[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_39555[(4)]))){
var statearr_39590_40107 = state_39555;
(statearr_39590_40107[(1)] = cljs.core.first((state_39555[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40108 = state_39555;
state_39555 = G__40108;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
shadow$dom$state_machine__35540__auto__ = function(state_39555){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35540__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35540__auto____1.call(this,state_39555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35540__auto____0;
shadow$dom$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35540__auto____1;
return shadow$dom$state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_39592 = f__35786__auto__();
(statearr_39592[(6)] = c__35785__auto___40103);

return statearr_39592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
