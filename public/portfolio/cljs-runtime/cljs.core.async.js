goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33859 = (function (f,blockable,meta33860){
this.f = f;
this.blockable = blockable;
this.meta33860 = meta33860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33861,meta33860__$1){
var self__ = this;
var _33861__$1 = this;
return (new cljs.core.async.t_cljs$core$async33859(self__.f,self__.blockable,meta33860__$1));
}));

(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33861){
var self__ = this;
var _33861__$1 = this;
return self__.meta33860;
}));

(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33860","meta33860",689536638,null)], null);
}));

(cljs.core.async.t_cljs$core$async33859.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33859");

(cljs.core.async.t_cljs$core$async33859.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33859");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33859.
 */
cljs.core.async.__GT_t_cljs$core$async33859 = (function cljs$core$async$__GT_t_cljs$core$async33859(f,blockable,meta33860){
return (new cljs.core.async.t_cljs$core$async33859(f,blockable,meta33860));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33855 = arguments.length;
switch (G__33855) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async33859(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33870 = arguments.length;
switch (G__33870) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33873 = arguments.length;
switch (G__33873) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33881 = arguments.length;
switch (G__33881) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36759 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36759) : fn1.call(null,val_36759));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36759) : fn1.call(null,val_36759));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33892 = arguments.length;
switch (G__33892) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___36785 = n;
var x_36786 = (0);
while(true){
if((x_36786 < n__5636__auto___36785)){
(a[x_36786] = x_36786);

var G__36787 = (x_36786 + (1));
x_36786 = G__36787;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33895 = (function (flag,meta33896){
this.flag = flag;
this.meta33896 = meta33896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33897,meta33896__$1){
var self__ = this;
var _33897__$1 = this;
return (new cljs.core.async.t_cljs$core$async33895(self__.flag,meta33896__$1));
}));

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33897){
var self__ = this;
var _33897__$1 = this;
return self__.meta33896;
}));

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33896","meta33896",613801297,null)], null);
}));

(cljs.core.async.t_cljs$core$async33895.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33895");

(cljs.core.async.t_cljs$core$async33895.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33895");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33895.
 */
cljs.core.async.__GT_t_cljs$core$async33895 = (function cljs$core$async$__GT_t_cljs$core$async33895(flag,meta33896){
return (new cljs.core.async.t_cljs$core$async33895(flag,meta33896));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async33895(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33901 = (function (flag,cb,meta33902){
this.flag = flag;
this.cb = cb;
this.meta33902 = meta33902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33903,meta33902__$1){
var self__ = this;
var _33903__$1 = this;
return (new cljs.core.async.t_cljs$core$async33901(self__.flag,self__.cb,meta33902__$1));
}));

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33903){
var self__ = this;
var _33903__$1 = this;
return self__.meta33902;
}));

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33902","meta33902",-4440156,null)], null);
}));

(cljs.core.async.t_cljs$core$async33901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33901");

(cljs.core.async.t_cljs$core$async33901.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33901.
 */
cljs.core.async.__GT_t_cljs$core$async33901 = (function cljs$core$async$__GT_t_cljs$core$async33901(flag,cb,meta33902){
return (new cljs.core.async.t_cljs$core$async33901(flag,cb,meta33902));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async33901(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33906_SHARP_){
var G__33932 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33906_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33932) : fret.call(null,G__33932));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33907_SHARP_){
var G__33934 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33907_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33934) : fret.call(null,G__33934));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36821 = (i + (1));
i = G__36821;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36834 = arguments.length;
var i__5770__auto___36835 = (0);
while(true){
if((i__5770__auto___36835 < len__5769__auto___36834)){
args__5775__auto__.push((arguments[i__5770__auto___36835]));

var G__36836 = (i__5770__auto___36835 + (1));
i__5770__auto___36835 = G__36836;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33941){
var map__33942 = p__33941;
var map__33942__$1 = cljs.core.__destructure_map(map__33942);
var opts = map__33942__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33938){
var G__33939 = cljs.core.first(seq33938);
var seq33938__$1 = cljs.core.next(seq33938);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33939,seq33938__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33947 = arguments.length;
switch (G__33947) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32244__auto___36846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_34017){
var state_val_34018 = (state_34017[(1)]);
if((state_val_34018 === (7))){
var inst_33999 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
var statearr_34033_36851 = state_34017__$1;
(statearr_34033_36851[(2)] = inst_33999);

(statearr_34033_36851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (1))){
var state_34017__$1 = state_34017;
var statearr_34037_36853 = state_34017__$1;
(statearr_34037_36853[(2)] = null);

(statearr_34037_36853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (4))){
var inst_33965 = (state_34017[(7)]);
var inst_33965__$1 = (state_34017[(2)]);
var inst_33973 = (inst_33965__$1 == null);
var state_34017__$1 = (function (){var statearr_34041 = state_34017;
(statearr_34041[(7)] = inst_33965__$1);

return statearr_34041;
})();
if(cljs.core.truth_(inst_33973)){
var statearr_34042_36857 = state_34017__$1;
(statearr_34042_36857[(1)] = (5));

} else {
var statearr_34043_36859 = state_34017__$1;
(statearr_34043_36859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (13))){
var state_34017__$1 = state_34017;
var statearr_34050_36861 = state_34017__$1;
(statearr_34050_36861[(2)] = null);

(statearr_34050_36861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (6))){
var inst_33965 = (state_34017[(7)]);
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34017__$1,(11),to,inst_33965);
} else {
if((state_val_34018 === (3))){
var inst_34009 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34017__$1,inst_34009);
} else {
if((state_val_34018 === (12))){
var state_34017__$1 = state_34017;
var statearr_34051_36863 = state_34017__$1;
(statearr_34051_36863[(2)] = null);

(statearr_34051_36863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (2))){
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34017__$1,(4),from);
} else {
if((state_val_34018 === (11))){
var inst_33992 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
if(cljs.core.truth_(inst_33992)){
var statearr_34054_36866 = state_34017__$1;
(statearr_34054_36866[(1)] = (12));

} else {
var statearr_34057_36868 = state_34017__$1;
(statearr_34057_36868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (9))){
var state_34017__$1 = state_34017;
var statearr_34059_36869 = state_34017__$1;
(statearr_34059_36869[(2)] = null);

(statearr_34059_36869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (5))){
var state_34017__$1 = state_34017;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34060_36870 = state_34017__$1;
(statearr_34060_36870[(1)] = (8));

} else {
var statearr_34063_36871 = state_34017__$1;
(statearr_34063_36871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (14))){
var inst_33997 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
var statearr_34064_36873 = state_34017__$1;
(statearr_34064_36873[(2)] = inst_33997);

(statearr_34064_36873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (10))){
var inst_33989 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
var statearr_34065_36874 = state_34017__$1;
(statearr_34065_36874[(2)] = inst_33989);

(statearr_34065_36874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (8))){
var inst_33982 = cljs.core.async.close_BANG_(to);
var state_34017__$1 = state_34017;
var statearr_34066_36875 = state_34017__$1;
(statearr_34066_36875[(2)] = inst_33982);

(statearr_34066_36875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32216__auto__ = null;
var cljs$core$async$state_machine__32216__auto____0 = (function (){
var statearr_34068 = [null,null,null,null,null,null,null,null];
(statearr_34068[(0)] = cljs$core$async$state_machine__32216__auto__);

(statearr_34068[(1)] = (1));

return statearr_34068;
});
var cljs$core$async$state_machine__32216__auto____1 = (function (state_34017){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_34017);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e34071){var ex__32219__auto__ = e34071;
var statearr_34072_36879 = state_34017;
(statearr_34072_36879[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_34017[(4)]))){
var statearr_34073_36880 = state_34017;
(statearr_34073_36880[(1)] = cljs.core.first((state_34017[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36882 = state_34017;
state_34017 = G__36882;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$state_machine__32216__auto__ = function(state_34017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32216__auto____1.call(this,state_34017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32216__auto____0;
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32216__auto____1;
return cljs$core$async$state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_34081 = f__32245__auto__();
(statearr_34081[(6)] = c__32244__auto___36846);

return statearr_34081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__34092){
var vec__34093 = p__34092;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34093,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34093,(1),null);
var job = vec__34093;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32244__auto___36889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_34101){
var state_val_34103 = (state_34101[(1)]);
if((state_val_34103 === (1))){
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34101__$1,(2),res,v);
} else {
if((state_val_34103 === (2))){
var inst_34098 = (state_34101[(2)]);
var inst_34099 = cljs.core.async.close_BANG_(res);
var state_34101__$1 = (function (){var statearr_34106 = state_34101;
(statearr_34106[(7)] = inst_34098);

return statearr_34106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34101__$1,inst_34099);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0 = (function (){
var statearr_34108 = [null,null,null,null,null,null,null,null];
(statearr_34108[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__);

(statearr_34108[(1)] = (1));

return statearr_34108;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1 = (function (state_34101){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_34101);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e34110){var ex__32219__auto__ = e34110;
var statearr_34111_36891 = state_34101;
(statearr_34111_36891[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_34101[(4)]))){
var statearr_34112_36892 = state_34101;
(statearr_34112_36892[(1)] = cljs.core.first((state_34101[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36899 = state_34101;
state_34101 = G__36899;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__ = function(state_34101){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1.call(this,state_34101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_34116 = f__32245__auto__();
(statearr_34116[(6)] = c__32244__auto___36889);

return statearr_34116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34117){
var vec__34118 = p__34117;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34118,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34118,(1),null);
var job = vec__34118;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___36903 = n;
var __36904 = (0);
while(true){
if((__36904 < n__5636__auto___36903)){
var G__34122_36905 = type;
var G__34122_36906__$1 = (((G__34122_36905 instanceof cljs.core.Keyword))?G__34122_36905.fqn:null);
switch (G__34122_36906__$1) {
case "compute":
var c__32244__auto___36908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36904,c__32244__auto___36908,G__34122_36905,G__34122_36906__$1,n__5636__auto___36903,jobs,results,process__$1,async){
return (function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = ((function (__36904,c__32244__auto___36908,G__34122_36905,G__34122_36906__$1,n__5636__auto___36903,jobs,results,process__$1,async){
return (function (state_34146){
var state_val_34147 = (state_34146[(1)]);
if((state_val_34147 === (1))){
var state_34146__$1 = state_34146;
var statearr_34149_36911 = state_34146__$1;
(statearr_34149_36911[(2)] = null);

(statearr_34149_36911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (2))){
var state_34146__$1 = state_34146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34146__$1,(4),jobs);
} else {
if((state_val_34147 === (3))){
var inst_34143 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34146__$1,inst_34143);
} else {
if((state_val_34147 === (4))){
var inst_34133 = (state_34146[(2)]);
var inst_34135 = process__$1(inst_34133);
var state_34146__$1 = state_34146;
if(cljs.core.truth_(inst_34135)){
var statearr_34153_36916 = state_34146__$1;
(statearr_34153_36916[(1)] = (5));

} else {
var statearr_34154_36918 = state_34146__$1;
(statearr_34154_36918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (5))){
var state_34146__$1 = state_34146;
var statearr_34157_36920 = state_34146__$1;
(statearr_34157_36920[(2)] = null);

(statearr_34157_36920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (6))){
var state_34146__$1 = state_34146;
var statearr_34160_36922 = state_34146__$1;
(statearr_34160_36922[(2)] = null);

(statearr_34160_36922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (7))){
var inst_34140 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
var statearr_34161_36923 = state_34146__$1;
(statearr_34161_36923[(2)] = inst_34140);

(statearr_34161_36923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36904,c__32244__auto___36908,G__34122_36905,G__34122_36906__$1,n__5636__auto___36903,jobs,results,process__$1,async))
;
return ((function (__36904,switch__32215__auto__,c__32244__auto___36908,G__34122_36905,G__34122_36906__$1,n__5636__auto___36903,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0 = (function (){
var statearr_34162 = [null,null,null,null,null,null,null];
(statearr_34162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__);

(statearr_34162[(1)] = (1));

return statearr_34162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1 = (function (state_34146){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_34146);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e34165){var ex__32219__auto__ = e34165;
var statearr_34167_36927 = state_34146;
(statearr_34167_36927[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_34146[(4)]))){
var statearr_34169_36928 = state_34146;
(statearr_34169_36928[(1)] = cljs.core.first((state_34146[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36929 = state_34146;
state_34146 = G__36929;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__ = function(state_34146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1.call(this,state_34146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__;
})()
;})(__36904,switch__32215__auto__,c__32244__auto___36908,G__34122_36905,G__34122_36906__$1,n__5636__auto___36903,jobs,results,process__$1,async))
})();
var state__32246__auto__ = (function (){var statearr_34170 = f__32245__auto__();
(statearr_34170[(6)] = c__32244__auto___36908);

return statearr_34170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
});})(__36904,c__32244__auto___36908,G__34122_36905,G__34122_36906__$1,n__5636__auto___36903,jobs,results,process__$1,async))
);


break;
case "async":
var c__32244__auto___36931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36904,c__32244__auto___36931,G__34122_36905,G__34122_36906__$1,n__5636__auto___36903,jobs,results,process__$1,async){
return (function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = ((function (__36904,c__32244__auto___36931,G__34122_36905,G__34122_36906__$1,n__5636__auto___36903,jobs,results,process__$1,async){
return (function (state_34187){
var state_val_34188 = (state_34187[(1)]);
if((state_val_34188 === (1))){
var state_34187__$1 = state_34187;
var statearr_34193_36933 = state_34187__$1;
(statearr_34193_36933[(2)] = null);

(statearr_34193_36933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34188 === (2))){
var state_34187__$1 = state_34187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34187__$1,(4),jobs);
} else {
if((state_val_34188 === (3))){
var inst_34185 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34187__$1,inst_34185);
} else {
if((state_val_34188 === (4))){
var inst_34177 = (state_34187[(2)]);
var inst_34178 = async(inst_34177);
var state_34187__$1 = state_34187;
if(cljs.core.truth_(inst_34178)){
var statearr_34197_36938 = state_34187__$1;
(statearr_34197_36938[(1)] = (5));

} else {
var statearr_34201_36940 = state_34187__$1;
(statearr_34201_36940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34188 === (5))){
var state_34187__$1 = state_34187;
var statearr_34203_36941 = state_34187__$1;
(statearr_34203_36941[(2)] = null);

(statearr_34203_36941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34188 === (6))){
var state_34187__$1 = state_34187;
var statearr_34205_36943 = state_34187__$1;
(statearr_34205_36943[(2)] = null);

(statearr_34205_36943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34188 === (7))){
var inst_34183 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
var statearr_34213_36944 = state_34187__$1;
(statearr_34213_36944[(2)] = inst_34183);

(statearr_34213_36944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36904,c__32244__auto___36931,G__34122_36905,G__34122_36906__$1,n__5636__auto___36903,jobs,results,process__$1,async))
;
return ((function (__36904,switch__32215__auto__,c__32244__auto___36931,G__34122_36905,G__34122_36906__$1,n__5636__auto___36903,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0 = (function (){
var statearr_34218 = [null,null,null,null,null,null,null];
(statearr_34218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__);

(statearr_34218[(1)] = (1));

return statearr_34218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1 = (function (state_34187){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_34187);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e34222){var ex__32219__auto__ = e34222;
var statearr_34223_36949 = state_34187;
(statearr_34223_36949[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_34187[(4)]))){
var statearr_34224_36950 = state_34187;
(statearr_34224_36950[(1)] = cljs.core.first((state_34187[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36953 = state_34187;
state_34187 = G__36953;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__ = function(state_34187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1.call(this,state_34187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__;
})()
;})(__36904,switch__32215__auto__,c__32244__auto___36931,G__34122_36905,G__34122_36906__$1,n__5636__auto___36903,jobs,results,process__$1,async))
})();
var state__32246__auto__ = (function (){var statearr_34230 = f__32245__auto__();
(statearr_34230[(6)] = c__32244__auto___36931);

return statearr_34230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
});})(__36904,c__32244__auto___36931,G__34122_36905,G__34122_36906__$1,n__5636__auto___36903,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34122_36906__$1)].join('')));

}

var G__36954 = (__36904 + (1));
__36904 = G__36954;
continue;
} else {
}
break;
}

var c__32244__auto___36955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_34260){
var state_val_34261 = (state_34260[(1)]);
if((state_val_34261 === (7))){
var inst_34256 = (state_34260[(2)]);
var state_34260__$1 = state_34260;
var statearr_34270_36958 = state_34260__$1;
(statearr_34270_36958[(2)] = inst_34256);

(statearr_34270_36958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (1))){
var state_34260__$1 = state_34260;
var statearr_34271_36960 = state_34260__$1;
(statearr_34271_36960[(2)] = null);

(statearr_34271_36960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (4))){
var inst_34237 = (state_34260[(7)]);
var inst_34237__$1 = (state_34260[(2)]);
var inst_34238 = (inst_34237__$1 == null);
var state_34260__$1 = (function (){var statearr_34272 = state_34260;
(statearr_34272[(7)] = inst_34237__$1);

return statearr_34272;
})();
if(cljs.core.truth_(inst_34238)){
var statearr_34273_36962 = state_34260__$1;
(statearr_34273_36962[(1)] = (5));

} else {
var statearr_34274_36963 = state_34260__$1;
(statearr_34274_36963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (6))){
var inst_34242 = (state_34260[(8)]);
var inst_34237 = (state_34260[(7)]);
var inst_34242__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34247 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34248 = [inst_34237,inst_34242__$1];
var inst_34249 = (new cljs.core.PersistentVector(null,2,(5),inst_34247,inst_34248,null));
var state_34260__$1 = (function (){var statearr_34275 = state_34260;
(statearr_34275[(8)] = inst_34242__$1);

return statearr_34275;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34260__$1,(8),jobs,inst_34249);
} else {
if((state_val_34261 === (3))){
var inst_34258 = (state_34260[(2)]);
var state_34260__$1 = state_34260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34260__$1,inst_34258);
} else {
if((state_val_34261 === (2))){
var state_34260__$1 = state_34260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34260__$1,(4),from);
} else {
if((state_val_34261 === (9))){
var inst_34253 = (state_34260[(2)]);
var state_34260__$1 = (function (){var statearr_34280 = state_34260;
(statearr_34280[(9)] = inst_34253);

return statearr_34280;
})();
var statearr_34281_36969 = state_34260__$1;
(statearr_34281_36969[(2)] = null);

(statearr_34281_36969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (5))){
var inst_34240 = cljs.core.async.close_BANG_(jobs);
var state_34260__$1 = state_34260;
var statearr_34282_36970 = state_34260__$1;
(statearr_34282_36970[(2)] = inst_34240);

(statearr_34282_36970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (8))){
var inst_34242 = (state_34260[(8)]);
var inst_34251 = (state_34260[(2)]);
var state_34260__$1 = (function (){var statearr_34283 = state_34260;
(statearr_34283[(10)] = inst_34251);

return statearr_34283;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34260__$1,(9),results,inst_34242);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0 = (function (){
var statearr_34287 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34287[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__);

(statearr_34287[(1)] = (1));

return statearr_34287;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1 = (function (state_34260){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_34260);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e34289){var ex__32219__auto__ = e34289;
var statearr_34290_36975 = state_34260;
(statearr_34290_36975[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_34260[(4)]))){
var statearr_34291_36976 = state_34260;
(statearr_34291_36976[(1)] = cljs.core.first((state_34260[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36978 = state_34260;
state_34260 = G__36978;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__ = function(state_34260){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1.call(this,state_34260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_34292 = f__32245__auto__();
(statearr_34292[(6)] = c__32244__auto___36955);

return statearr_34292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


var c__32244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_34338){
var state_val_34339 = (state_34338[(1)]);
if((state_val_34339 === (7))){
var inst_34334 = (state_34338[(2)]);
var state_34338__$1 = state_34338;
var statearr_34344_36983 = state_34338__$1;
(statearr_34344_36983[(2)] = inst_34334);

(statearr_34344_36983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (20))){
var state_34338__$1 = state_34338;
var statearr_34349_36984 = state_34338__$1;
(statearr_34349_36984[(2)] = null);

(statearr_34349_36984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (1))){
var state_34338__$1 = state_34338;
var statearr_34350_36985 = state_34338__$1;
(statearr_34350_36985[(2)] = null);

(statearr_34350_36985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (4))){
var inst_34296 = (state_34338[(7)]);
var inst_34296__$1 = (state_34338[(2)]);
var inst_34297 = (inst_34296__$1 == null);
var state_34338__$1 = (function (){var statearr_34351 = state_34338;
(statearr_34351[(7)] = inst_34296__$1);

return statearr_34351;
})();
if(cljs.core.truth_(inst_34297)){
var statearr_34353_36989 = state_34338__$1;
(statearr_34353_36989[(1)] = (5));

} else {
var statearr_34357_36990 = state_34338__$1;
(statearr_34357_36990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (15))){
var inst_34312 = (state_34338[(8)]);
var state_34338__$1 = state_34338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34338__$1,(18),to,inst_34312);
} else {
if((state_val_34339 === (21))){
var inst_34329 = (state_34338[(2)]);
var state_34338__$1 = state_34338;
var statearr_34358_36995 = state_34338__$1;
(statearr_34358_36995[(2)] = inst_34329);

(statearr_34358_36995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (13))){
var inst_34331 = (state_34338[(2)]);
var state_34338__$1 = (function (){var statearr_34359 = state_34338;
(statearr_34359[(9)] = inst_34331);

return statearr_34359;
})();
var statearr_34360_36997 = state_34338__$1;
(statearr_34360_36997[(2)] = null);

(statearr_34360_36997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (6))){
var inst_34296 = (state_34338[(7)]);
var state_34338__$1 = state_34338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34338__$1,(11),inst_34296);
} else {
if((state_val_34339 === (17))){
var inst_34324 = (state_34338[(2)]);
var state_34338__$1 = state_34338;
if(cljs.core.truth_(inst_34324)){
var statearr_34361_37000 = state_34338__$1;
(statearr_34361_37000[(1)] = (19));

} else {
var statearr_34362_37003 = state_34338__$1;
(statearr_34362_37003[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (3))){
var inst_34336 = (state_34338[(2)]);
var state_34338__$1 = state_34338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34338__$1,inst_34336);
} else {
if((state_val_34339 === (12))){
var inst_34309 = (state_34338[(10)]);
var state_34338__$1 = state_34338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34338__$1,(14),inst_34309);
} else {
if((state_val_34339 === (2))){
var state_34338__$1 = state_34338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34338__$1,(4),results);
} else {
if((state_val_34339 === (19))){
var state_34338__$1 = state_34338;
var statearr_34367_37005 = state_34338__$1;
(statearr_34367_37005[(2)] = null);

(statearr_34367_37005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (11))){
var inst_34309 = (state_34338[(2)]);
var state_34338__$1 = (function (){var statearr_34371 = state_34338;
(statearr_34371[(10)] = inst_34309);

return statearr_34371;
})();
var statearr_34373_37007 = state_34338__$1;
(statearr_34373_37007[(2)] = null);

(statearr_34373_37007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (9))){
var state_34338__$1 = state_34338;
var statearr_34374_37009 = state_34338__$1;
(statearr_34374_37009[(2)] = null);

(statearr_34374_37009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (5))){
var state_34338__$1 = state_34338;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34375_37012 = state_34338__$1;
(statearr_34375_37012[(1)] = (8));

} else {
var statearr_34376_37013 = state_34338__$1;
(statearr_34376_37013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (14))){
var inst_34318 = (state_34338[(11)]);
var inst_34312 = (state_34338[(8)]);
var inst_34312__$1 = (state_34338[(2)]);
var inst_34317 = (inst_34312__$1 == null);
var inst_34318__$1 = cljs.core.not(inst_34317);
var state_34338__$1 = (function (){var statearr_34381 = state_34338;
(statearr_34381[(11)] = inst_34318__$1);

(statearr_34381[(8)] = inst_34312__$1);

return statearr_34381;
})();
if(inst_34318__$1){
var statearr_34382_37015 = state_34338__$1;
(statearr_34382_37015[(1)] = (15));

} else {
var statearr_34383_37016 = state_34338__$1;
(statearr_34383_37016[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (16))){
var inst_34318 = (state_34338[(11)]);
var state_34338__$1 = state_34338;
var statearr_34388_37017 = state_34338__$1;
(statearr_34388_37017[(2)] = inst_34318);

(statearr_34388_37017[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (10))){
var inst_34305 = (state_34338[(2)]);
var state_34338__$1 = state_34338;
var statearr_34396_37018 = state_34338__$1;
(statearr_34396_37018[(2)] = inst_34305);

(statearr_34396_37018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (18))){
var inst_34321 = (state_34338[(2)]);
var state_34338__$1 = state_34338;
var statearr_34397_37023 = state_34338__$1;
(statearr_34397_37023[(2)] = inst_34321);

(statearr_34397_37023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (8))){
var inst_34302 = cljs.core.async.close_BANG_(to);
var state_34338__$1 = state_34338;
var statearr_34401_37026 = state_34338__$1;
(statearr_34401_37026[(2)] = inst_34302);

(statearr_34401_37026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0 = (function (){
var statearr_34407 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__);

(statearr_34407[(1)] = (1));

return statearr_34407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1 = (function (state_34338){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_34338);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e34409){var ex__32219__auto__ = e34409;
var statearr_34410_37029 = state_34338;
(statearr_34410_37029[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_34338[(4)]))){
var statearr_34411_37031 = state_34338;
(statearr_34411_37031[(1)] = cljs.core.first((state_34338[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37034 = state_34338;
state_34338 = G__37034;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__ = function(state_34338){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1.call(this,state_34338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_34414 = f__32245__auto__();
(statearr_34414[(6)] = c__32244__auto__);

return statearr_34414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));

return c__32244__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34434 = arguments.length;
switch (G__34434) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34457 = arguments.length;
switch (G__34457) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34459 = arguments.length;
switch (G__34459) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32244__auto___37051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_34489){
var state_val_34490 = (state_34489[(1)]);
if((state_val_34490 === (7))){
var inst_34485 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
var statearr_34492_37059 = state_34489__$1;
(statearr_34492_37059[(2)] = inst_34485);

(statearr_34492_37059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (1))){
var state_34489__$1 = state_34489;
var statearr_34493_37065 = state_34489__$1;
(statearr_34493_37065[(2)] = null);

(statearr_34493_37065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (4))){
var inst_34466 = (state_34489[(7)]);
var inst_34466__$1 = (state_34489[(2)]);
var inst_34467 = (inst_34466__$1 == null);
var state_34489__$1 = (function (){var statearr_34495 = state_34489;
(statearr_34495[(7)] = inst_34466__$1);

return statearr_34495;
})();
if(cljs.core.truth_(inst_34467)){
var statearr_34496_37073 = state_34489__$1;
(statearr_34496_37073[(1)] = (5));

} else {
var statearr_34499_37074 = state_34489__$1;
(statearr_34499_37074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (13))){
var state_34489__$1 = state_34489;
var statearr_34501_37075 = state_34489__$1;
(statearr_34501_37075[(2)] = null);

(statearr_34501_37075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (6))){
var inst_34466 = (state_34489[(7)]);
var inst_34472 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34466) : p.call(null,inst_34466));
var state_34489__$1 = state_34489;
if(cljs.core.truth_(inst_34472)){
var statearr_34506_37076 = state_34489__$1;
(statearr_34506_37076[(1)] = (9));

} else {
var statearr_34507_37077 = state_34489__$1;
(statearr_34507_37077[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (3))){
var inst_34487 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34489__$1,inst_34487);
} else {
if((state_val_34490 === (12))){
var state_34489__$1 = state_34489;
var statearr_34511_37079 = state_34489__$1;
(statearr_34511_37079[(2)] = null);

(statearr_34511_37079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (2))){
var state_34489__$1 = state_34489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34489__$1,(4),ch);
} else {
if((state_val_34490 === (11))){
var inst_34466 = (state_34489[(7)]);
var inst_34476 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34489__$1,(8),inst_34476,inst_34466);
} else {
if((state_val_34490 === (9))){
var state_34489__$1 = state_34489;
var statearr_34514_37080 = state_34489__$1;
(statearr_34514_37080[(2)] = tc);

(statearr_34514_37080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (5))){
var inst_34469 = cljs.core.async.close_BANG_(tc);
var inst_34470 = cljs.core.async.close_BANG_(fc);
var state_34489__$1 = (function (){var statearr_34516 = state_34489;
(statearr_34516[(8)] = inst_34469);

return statearr_34516;
})();
var statearr_34517_37083 = state_34489__$1;
(statearr_34517_37083[(2)] = inst_34470);

(statearr_34517_37083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (14))){
var inst_34483 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
var statearr_34518_37084 = state_34489__$1;
(statearr_34518_37084[(2)] = inst_34483);

(statearr_34518_37084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (10))){
var state_34489__$1 = state_34489;
var statearr_34520_37086 = state_34489__$1;
(statearr_34520_37086[(2)] = fc);

(statearr_34520_37086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (8))){
var inst_34478 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
if(cljs.core.truth_(inst_34478)){
var statearr_34521_37087 = state_34489__$1;
(statearr_34521_37087[(1)] = (12));

} else {
var statearr_34522_37088 = state_34489__$1;
(statearr_34522_37088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32216__auto__ = null;
var cljs$core$async$state_machine__32216__auto____0 = (function (){
var statearr_34523 = [null,null,null,null,null,null,null,null,null];
(statearr_34523[(0)] = cljs$core$async$state_machine__32216__auto__);

(statearr_34523[(1)] = (1));

return statearr_34523;
});
var cljs$core$async$state_machine__32216__auto____1 = (function (state_34489){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_34489);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e34524){var ex__32219__auto__ = e34524;
var statearr_34525_37094 = state_34489;
(statearr_34525_37094[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_34489[(4)]))){
var statearr_34526_37099 = state_34489;
(statearr_34526_37099[(1)] = cljs.core.first((state_34489[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37100 = state_34489;
state_34489 = G__37100;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$state_machine__32216__auto__ = function(state_34489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32216__auto____1.call(this,state_34489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32216__auto____0;
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32216__auto____1;
return cljs$core$async$state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_34527 = f__32245__auto__();
(statearr_34527[(6)] = c__32244__auto___37051);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_34550){
var state_val_34551 = (state_34550[(1)]);
if((state_val_34551 === (7))){
var inst_34546 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34552_37108 = state_34550__$1;
(statearr_34552_37108[(2)] = inst_34546);

(statearr_34552_37108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (1))){
var inst_34529 = init;
var inst_34530 = inst_34529;
var state_34550__$1 = (function (){var statearr_34555 = state_34550;
(statearr_34555[(7)] = inst_34530);

return statearr_34555;
})();
var statearr_34556_37109 = state_34550__$1;
(statearr_34556_37109[(2)] = null);

(statearr_34556_37109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (4))){
var inst_34533 = (state_34550[(8)]);
var inst_34533__$1 = (state_34550[(2)]);
var inst_34534 = (inst_34533__$1 == null);
var state_34550__$1 = (function (){var statearr_34561 = state_34550;
(statearr_34561[(8)] = inst_34533__$1);

return statearr_34561;
})();
if(cljs.core.truth_(inst_34534)){
var statearr_34562_37114 = state_34550__$1;
(statearr_34562_37114[(1)] = (5));

} else {
var statearr_34563_37117 = state_34550__$1;
(statearr_34563_37117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (6))){
var inst_34533 = (state_34550[(8)]);
var inst_34537 = (state_34550[(9)]);
var inst_34530 = (state_34550[(7)]);
var inst_34537__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34530,inst_34533) : f.call(null,inst_34530,inst_34533));
var inst_34538 = cljs.core.reduced_QMARK_(inst_34537__$1);
var state_34550__$1 = (function (){var statearr_34565 = state_34550;
(statearr_34565[(9)] = inst_34537__$1);

return statearr_34565;
})();
if(inst_34538){
var statearr_34566_37119 = state_34550__$1;
(statearr_34566_37119[(1)] = (8));

} else {
var statearr_34567_37120 = state_34550__$1;
(statearr_34567_37120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (3))){
var inst_34548 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34550__$1,inst_34548);
} else {
if((state_val_34551 === (2))){
var state_34550__$1 = state_34550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34550__$1,(4),ch);
} else {
if((state_val_34551 === (9))){
var inst_34537 = (state_34550[(9)]);
var inst_34530 = inst_34537;
var state_34550__$1 = (function (){var statearr_34568 = state_34550;
(statearr_34568[(7)] = inst_34530);

return statearr_34568;
})();
var statearr_34569_37130 = state_34550__$1;
(statearr_34569_37130[(2)] = null);

(statearr_34569_37130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (5))){
var inst_34530 = (state_34550[(7)]);
var state_34550__$1 = state_34550;
var statearr_34570_37131 = state_34550__$1;
(statearr_34570_37131[(2)] = inst_34530);

(statearr_34570_37131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (10))){
var inst_34544 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34572_37133 = state_34550__$1;
(statearr_34572_37133[(2)] = inst_34544);

(statearr_34572_37133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (8))){
var inst_34537 = (state_34550[(9)]);
var inst_34540 = cljs.core.deref(inst_34537);
var state_34550__$1 = state_34550;
var statearr_34574_37138 = state_34550__$1;
(statearr_34574_37138[(2)] = inst_34540);

(statearr_34574_37138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32216__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32216__auto____0 = (function (){
var statearr_34577 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34577[(0)] = cljs$core$async$reduce_$_state_machine__32216__auto__);

(statearr_34577[(1)] = (1));

return statearr_34577;
});
var cljs$core$async$reduce_$_state_machine__32216__auto____1 = (function (state_34550){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_34550);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e34578){var ex__32219__auto__ = e34578;
var statearr_34579_37149 = state_34550;
(statearr_34579_37149[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_34550[(4)]))){
var statearr_34580_37150 = state_34550;
(statearr_34580_37150[(1)] = cljs.core.first((state_34550[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37153 = state_34550;
state_34550 = G__37153;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32216__auto__ = function(state_34550){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32216__auto____1.call(this,state_34550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32216__auto____0;
cljs$core$async$reduce_$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32216__auto____1;
return cljs$core$async$reduce_$_state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_34583 = f__32245__auto__();
(statearr_34583[(6)] = c__32244__auto__);

return statearr_34583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));

return c__32244__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_34591){
var state_val_34592 = (state_34591[(1)]);
if((state_val_34592 === (1))){
var inst_34586 = cljs.core.async.reduce(f__$1,init,ch);
var state_34591__$1 = state_34591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34591__$1,(2),inst_34586);
} else {
if((state_val_34592 === (2))){
var inst_34588 = (state_34591[(2)]);
var inst_34589 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34588) : f__$1.call(null,inst_34588));
var state_34591__$1 = state_34591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34591__$1,inst_34589);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32216__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32216__auto____0 = (function (){
var statearr_34599 = [null,null,null,null,null,null,null];
(statearr_34599[(0)] = cljs$core$async$transduce_$_state_machine__32216__auto__);

(statearr_34599[(1)] = (1));

return statearr_34599;
});
var cljs$core$async$transduce_$_state_machine__32216__auto____1 = (function (state_34591){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_34591);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e34602){var ex__32219__auto__ = e34602;
var statearr_34604_37181 = state_34591;
(statearr_34604_37181[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_34591[(4)]))){
var statearr_34605_37183 = state_34591;
(statearr_34605_37183[(1)] = cljs.core.first((state_34591[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37209 = state_34591;
state_34591 = G__37209;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32216__auto__ = function(state_34591){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32216__auto____1.call(this,state_34591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32216__auto____0;
cljs$core$async$transduce_$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32216__auto____1;
return cljs$core$async$transduce_$_state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_34608 = f__32245__auto__();
(statearr_34608[(6)] = c__32244__auto__);

return statearr_34608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));

return c__32244__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34610 = arguments.length;
switch (G__34610) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_34639){
var state_val_34640 = (state_34639[(1)]);
if((state_val_34640 === (7))){
var inst_34621 = (state_34639[(2)]);
var state_34639__$1 = state_34639;
var statearr_34642_37220 = state_34639__$1;
(statearr_34642_37220[(2)] = inst_34621);

(statearr_34642_37220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34640 === (1))){
var inst_34615 = cljs.core.seq(coll);
var inst_34616 = inst_34615;
var state_34639__$1 = (function (){var statearr_34662 = state_34639;
(statearr_34662[(7)] = inst_34616);

return statearr_34662;
})();
var statearr_34664_37224 = state_34639__$1;
(statearr_34664_37224[(2)] = null);

(statearr_34664_37224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34640 === (4))){
var inst_34616 = (state_34639[(7)]);
var inst_34619 = cljs.core.first(inst_34616);
var state_34639__$1 = state_34639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34639__$1,(7),ch,inst_34619);
} else {
if((state_val_34640 === (13))){
var inst_34633 = (state_34639[(2)]);
var state_34639__$1 = state_34639;
var statearr_34665_37228 = state_34639__$1;
(statearr_34665_37228[(2)] = inst_34633);

(statearr_34665_37228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34640 === (6))){
var inst_34624 = (state_34639[(2)]);
var state_34639__$1 = state_34639;
if(cljs.core.truth_(inst_34624)){
var statearr_34668_37235 = state_34639__$1;
(statearr_34668_37235[(1)] = (8));

} else {
var statearr_34669_37237 = state_34639__$1;
(statearr_34669_37237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34640 === (3))){
var inst_34637 = (state_34639[(2)]);
var state_34639__$1 = state_34639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34639__$1,inst_34637);
} else {
if((state_val_34640 === (12))){
var state_34639__$1 = state_34639;
var statearr_34673_37240 = state_34639__$1;
(statearr_34673_37240[(2)] = null);

(statearr_34673_37240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34640 === (2))){
var inst_34616 = (state_34639[(7)]);
var state_34639__$1 = state_34639;
if(cljs.core.truth_(inst_34616)){
var statearr_34675_37244 = state_34639__$1;
(statearr_34675_37244[(1)] = (4));

} else {
var statearr_34676_37246 = state_34639__$1;
(statearr_34676_37246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34640 === (11))){
var inst_34630 = cljs.core.async.close_BANG_(ch);
var state_34639__$1 = state_34639;
var statearr_34677_37247 = state_34639__$1;
(statearr_34677_37247[(2)] = inst_34630);

(statearr_34677_37247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34640 === (9))){
var state_34639__$1 = state_34639;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34678_37252 = state_34639__$1;
(statearr_34678_37252[(1)] = (11));

} else {
var statearr_34679_37254 = state_34639__$1;
(statearr_34679_37254[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34640 === (5))){
var inst_34616 = (state_34639[(7)]);
var state_34639__$1 = state_34639;
var statearr_34685_37255 = state_34639__$1;
(statearr_34685_37255[(2)] = inst_34616);

(statearr_34685_37255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34640 === (10))){
var inst_34635 = (state_34639[(2)]);
var state_34639__$1 = state_34639;
var statearr_34686_37256 = state_34639__$1;
(statearr_34686_37256[(2)] = inst_34635);

(statearr_34686_37256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34640 === (8))){
var inst_34616 = (state_34639[(7)]);
var inst_34626 = cljs.core.next(inst_34616);
var inst_34616__$1 = inst_34626;
var state_34639__$1 = (function (){var statearr_34688 = state_34639;
(statearr_34688[(7)] = inst_34616__$1);

return statearr_34688;
})();
var statearr_34689_37259 = state_34639__$1;
(statearr_34689_37259[(2)] = null);

(statearr_34689_37259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32216__auto__ = null;
var cljs$core$async$state_machine__32216__auto____0 = (function (){
var statearr_34693 = [null,null,null,null,null,null,null,null];
(statearr_34693[(0)] = cljs$core$async$state_machine__32216__auto__);

(statearr_34693[(1)] = (1));

return statearr_34693;
});
var cljs$core$async$state_machine__32216__auto____1 = (function (state_34639){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_34639);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e34696){var ex__32219__auto__ = e34696;
var statearr_34698_37266 = state_34639;
(statearr_34698_37266[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_34639[(4)]))){
var statearr_34699_37267 = state_34639;
(statearr_34699_37267[(1)] = cljs.core.first((state_34639[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37271 = state_34639;
state_34639 = G__37271;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$state_machine__32216__auto__ = function(state_34639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32216__auto____1.call(this,state_34639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32216__auto____0;
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32216__auto____1;
return cljs$core$async$state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_34700 = f__32245__auto__();
(statearr_34700[(6)] = c__32244__auto__);

return statearr_34700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));

return c__32244__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34710 = arguments.length;
switch (G__34710) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37278 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37278(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37279 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37279(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37286 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37286(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37301 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37301(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34778 = (function (ch,cs,meta34779){
this.ch = ch;
this.cs = cs;
this.meta34779 = meta34779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34780,meta34779__$1){
var self__ = this;
var _34780__$1 = this;
return (new cljs.core.async.t_cljs$core$async34778(self__.ch,self__.cs,meta34779__$1));
}));

(cljs.core.async.t_cljs$core$async34778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34780){
var self__ = this;
var _34780__$1 = this;
return self__.meta34779;
}));

(cljs.core.async.t_cljs$core$async34778.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34778.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34778.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34778.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34778.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34778.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34779","meta34779",928233813,null)], null);
}));

(cljs.core.async.t_cljs$core$async34778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34778");

(cljs.core.async.t_cljs$core$async34778.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34778.
 */
cljs.core.async.__GT_t_cljs$core$async34778 = (function cljs$core$async$__GT_t_cljs$core$async34778(ch,cs,meta34779){
return (new cljs.core.async.t_cljs$core$async34778(ch,cs,meta34779));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async34778(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32244__auto___37309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_34928){
var state_val_34929 = (state_34928[(1)]);
if((state_val_34929 === (7))){
var inst_34924 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
var statearr_34934_37310 = state_34928__$1;
(statearr_34934_37310[(2)] = inst_34924);

(statearr_34934_37310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (20))){
var inst_34824 = (state_34928[(7)]);
var inst_34836 = cljs.core.first(inst_34824);
var inst_34837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34836,(0),null);
var inst_34838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34836,(1),null);
var state_34928__$1 = (function (){var statearr_34935 = state_34928;
(statearr_34935[(8)] = inst_34837);

return statearr_34935;
})();
if(cljs.core.truth_(inst_34838)){
var statearr_34936_37311 = state_34928__$1;
(statearr_34936_37311[(1)] = (22));

} else {
var statearr_34940_37312 = state_34928__$1;
(statearr_34940_37312[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (27))){
var inst_34869 = (state_34928[(9)]);
var inst_34793 = (state_34928[(10)]);
var inst_34871 = (state_34928[(11)]);
var inst_34878 = (state_34928[(12)]);
var inst_34878__$1 = cljs.core._nth(inst_34869,inst_34871);
var inst_34879 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34878__$1,inst_34793,done);
var state_34928__$1 = (function (){var statearr_34948 = state_34928;
(statearr_34948[(12)] = inst_34878__$1);

return statearr_34948;
})();
if(cljs.core.truth_(inst_34879)){
var statearr_34949_37317 = state_34928__$1;
(statearr_34949_37317[(1)] = (30));

} else {
var statearr_34950_37318 = state_34928__$1;
(statearr_34950_37318[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (1))){
var state_34928__$1 = state_34928;
var statearr_34951_37319 = state_34928__$1;
(statearr_34951_37319[(2)] = null);

(statearr_34951_37319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (24))){
var inst_34824 = (state_34928[(7)]);
var inst_34845 = (state_34928[(2)]);
var inst_34846 = cljs.core.next(inst_34824);
var inst_34802 = inst_34846;
var inst_34803 = null;
var inst_34804 = (0);
var inst_34805 = (0);
var state_34928__$1 = (function (){var statearr_34953 = state_34928;
(statearr_34953[(13)] = inst_34845);

(statearr_34953[(14)] = inst_34803);

(statearr_34953[(15)] = inst_34804);

(statearr_34953[(16)] = inst_34802);

(statearr_34953[(17)] = inst_34805);

return statearr_34953;
})();
var statearr_34954_37321 = state_34928__$1;
(statearr_34954_37321[(2)] = null);

(statearr_34954_37321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (39))){
var state_34928__$1 = state_34928;
var statearr_34959_37322 = state_34928__$1;
(statearr_34959_37322[(2)] = null);

(statearr_34959_37322[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (4))){
var inst_34793 = (state_34928[(10)]);
var inst_34793__$1 = (state_34928[(2)]);
var inst_34794 = (inst_34793__$1 == null);
var state_34928__$1 = (function (){var statearr_34960 = state_34928;
(statearr_34960[(10)] = inst_34793__$1);

return statearr_34960;
})();
if(cljs.core.truth_(inst_34794)){
var statearr_34961_37323 = state_34928__$1;
(statearr_34961_37323[(1)] = (5));

} else {
var statearr_34962_37324 = state_34928__$1;
(statearr_34962_37324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (15))){
var inst_34803 = (state_34928[(14)]);
var inst_34804 = (state_34928[(15)]);
var inst_34802 = (state_34928[(16)]);
var inst_34805 = (state_34928[(17)]);
var inst_34820 = (state_34928[(2)]);
var inst_34821 = (inst_34805 + (1));
var tmp34956 = inst_34803;
var tmp34957 = inst_34804;
var tmp34958 = inst_34802;
var inst_34802__$1 = tmp34958;
var inst_34803__$1 = tmp34956;
var inst_34804__$1 = tmp34957;
var inst_34805__$1 = inst_34821;
var state_34928__$1 = (function (){var statearr_34964 = state_34928;
(statearr_34964[(14)] = inst_34803__$1);

(statearr_34964[(15)] = inst_34804__$1);

(statearr_34964[(16)] = inst_34802__$1);

(statearr_34964[(17)] = inst_34805__$1);

(statearr_34964[(18)] = inst_34820);

return statearr_34964;
})();
var statearr_34965_37326 = state_34928__$1;
(statearr_34965_37326[(2)] = null);

(statearr_34965_37326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (21))){
var inst_34849 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
var statearr_34972_37328 = state_34928__$1;
(statearr_34972_37328[(2)] = inst_34849);

(statearr_34972_37328[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (31))){
var inst_34878 = (state_34928[(12)]);
var inst_34882 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34878);
var state_34928__$1 = state_34928;
var statearr_34974_37329 = state_34928__$1;
(statearr_34974_37329[(2)] = inst_34882);

(statearr_34974_37329[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (32))){
var inst_34869 = (state_34928[(9)]);
var inst_34870 = (state_34928[(19)]);
var inst_34871 = (state_34928[(11)]);
var inst_34868 = (state_34928[(20)]);
var inst_34884 = (state_34928[(2)]);
var inst_34885 = (inst_34871 + (1));
var tmp34966 = inst_34869;
var tmp34967 = inst_34870;
var tmp34968 = inst_34868;
var inst_34868__$1 = tmp34968;
var inst_34869__$1 = tmp34966;
var inst_34870__$1 = tmp34967;
var inst_34871__$1 = inst_34885;
var state_34928__$1 = (function (){var statearr_34979 = state_34928;
(statearr_34979[(9)] = inst_34869__$1);

(statearr_34979[(19)] = inst_34870__$1);

(statearr_34979[(11)] = inst_34871__$1);

(statearr_34979[(20)] = inst_34868__$1);

(statearr_34979[(21)] = inst_34884);

return statearr_34979;
})();
var statearr_34980_37337 = state_34928__$1;
(statearr_34980_37337[(2)] = null);

(statearr_34980_37337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (40))){
var inst_34897 = (state_34928[(22)]);
var inst_34901 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34897);
var state_34928__$1 = state_34928;
var statearr_34982_37340 = state_34928__$1;
(statearr_34982_37340[(2)] = inst_34901);

(statearr_34982_37340[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (33))){
var inst_34888 = (state_34928[(23)]);
var inst_34890 = cljs.core.chunked_seq_QMARK_(inst_34888);
var state_34928__$1 = state_34928;
if(inst_34890){
var statearr_34983_37345 = state_34928__$1;
(statearr_34983_37345[(1)] = (36));

} else {
var statearr_34984_37346 = state_34928__$1;
(statearr_34984_37346[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (13))){
var inst_34814 = (state_34928[(24)]);
var inst_34817 = cljs.core.async.close_BANG_(inst_34814);
var state_34928__$1 = state_34928;
var statearr_34985_37347 = state_34928__$1;
(statearr_34985_37347[(2)] = inst_34817);

(statearr_34985_37347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (22))){
var inst_34837 = (state_34928[(8)]);
var inst_34842 = cljs.core.async.close_BANG_(inst_34837);
var state_34928__$1 = state_34928;
var statearr_34988_37348 = state_34928__$1;
(statearr_34988_37348[(2)] = inst_34842);

(statearr_34988_37348[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (36))){
var inst_34888 = (state_34928[(23)]);
var inst_34892 = cljs.core.chunk_first(inst_34888);
var inst_34893 = cljs.core.chunk_rest(inst_34888);
var inst_34894 = cljs.core.count(inst_34892);
var inst_34868 = inst_34893;
var inst_34869 = inst_34892;
var inst_34870 = inst_34894;
var inst_34871 = (0);
var state_34928__$1 = (function (){var statearr_34990 = state_34928;
(statearr_34990[(9)] = inst_34869);

(statearr_34990[(19)] = inst_34870);

(statearr_34990[(11)] = inst_34871);

(statearr_34990[(20)] = inst_34868);

return statearr_34990;
})();
var statearr_34993_37349 = state_34928__$1;
(statearr_34993_37349[(2)] = null);

(statearr_34993_37349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (41))){
var inst_34888 = (state_34928[(23)]);
var inst_34903 = (state_34928[(2)]);
var inst_34904 = cljs.core.next(inst_34888);
var inst_34868 = inst_34904;
var inst_34869 = null;
var inst_34870 = (0);
var inst_34871 = (0);
var state_34928__$1 = (function (){var statearr_35002 = state_34928;
(statearr_35002[(9)] = inst_34869);

(statearr_35002[(19)] = inst_34870);

(statearr_35002[(11)] = inst_34871);

(statearr_35002[(20)] = inst_34868);

(statearr_35002[(25)] = inst_34903);

return statearr_35002;
})();
var statearr_35020_37350 = state_34928__$1;
(statearr_35020_37350[(2)] = null);

(statearr_35020_37350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (43))){
var state_34928__$1 = state_34928;
var statearr_35021_37351 = state_34928__$1;
(statearr_35021_37351[(2)] = null);

(statearr_35021_37351[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (29))){
var inst_34912 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
var statearr_35025_37352 = state_34928__$1;
(statearr_35025_37352[(2)] = inst_34912);

(statearr_35025_37352[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (44))){
var inst_34921 = (state_34928[(2)]);
var state_34928__$1 = (function (){var statearr_35026 = state_34928;
(statearr_35026[(26)] = inst_34921);

return statearr_35026;
})();
var statearr_35028_37353 = state_34928__$1;
(statearr_35028_37353[(2)] = null);

(statearr_35028_37353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (6))){
var inst_34859 = (state_34928[(27)]);
var inst_34858 = cljs.core.deref(cs);
var inst_34859__$1 = cljs.core.keys(inst_34858);
var inst_34861 = cljs.core.count(inst_34859__$1);
var inst_34862 = cljs.core.reset_BANG_(dctr,inst_34861);
var inst_34867 = cljs.core.seq(inst_34859__$1);
var inst_34868 = inst_34867;
var inst_34869 = null;
var inst_34870 = (0);
var inst_34871 = (0);
var state_34928__$1 = (function (){var statearr_35029 = state_34928;
(statearr_35029[(9)] = inst_34869);

(statearr_35029[(28)] = inst_34862);

(statearr_35029[(19)] = inst_34870);

(statearr_35029[(11)] = inst_34871);

(statearr_35029[(27)] = inst_34859__$1);

(statearr_35029[(20)] = inst_34868);

return statearr_35029;
})();
var statearr_35031_37356 = state_34928__$1;
(statearr_35031_37356[(2)] = null);

(statearr_35031_37356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (28))){
var inst_34868 = (state_34928[(20)]);
var inst_34888 = (state_34928[(23)]);
var inst_34888__$1 = cljs.core.seq(inst_34868);
var state_34928__$1 = (function (){var statearr_35035 = state_34928;
(statearr_35035[(23)] = inst_34888__$1);

return statearr_35035;
})();
if(inst_34888__$1){
var statearr_35036_37357 = state_34928__$1;
(statearr_35036_37357[(1)] = (33));

} else {
var statearr_35037_37358 = state_34928__$1;
(statearr_35037_37358[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (25))){
var inst_34870 = (state_34928[(19)]);
var inst_34871 = (state_34928[(11)]);
var inst_34874 = (inst_34871 < inst_34870);
var inst_34875 = inst_34874;
var state_34928__$1 = state_34928;
if(cljs.core.truth_(inst_34875)){
var statearr_35046_37359 = state_34928__$1;
(statearr_35046_37359[(1)] = (27));

} else {
var statearr_35048_37360 = state_34928__$1;
(statearr_35048_37360[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (34))){
var state_34928__$1 = state_34928;
var statearr_35056_37367 = state_34928__$1;
(statearr_35056_37367[(2)] = null);

(statearr_35056_37367[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (17))){
var state_34928__$1 = state_34928;
var statearr_35065_37368 = state_34928__$1;
(statearr_35065_37368[(2)] = null);

(statearr_35065_37368[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (3))){
var inst_34926 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34928__$1,inst_34926);
} else {
if((state_val_34929 === (12))){
var inst_34854 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
var statearr_35076_37369 = state_34928__$1;
(statearr_35076_37369[(2)] = inst_34854);

(statearr_35076_37369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (2))){
var state_34928__$1 = state_34928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34928__$1,(4),ch);
} else {
if((state_val_34929 === (23))){
var state_34928__$1 = state_34928;
var statearr_35087_37374 = state_34928__$1;
(statearr_35087_37374[(2)] = null);

(statearr_35087_37374[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (35))){
var inst_34910 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
var statearr_35098_37375 = state_34928__$1;
(statearr_35098_37375[(2)] = inst_34910);

(statearr_35098_37375[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (19))){
var inst_34824 = (state_34928[(7)]);
var inst_34828 = cljs.core.chunk_first(inst_34824);
var inst_34829 = cljs.core.chunk_rest(inst_34824);
var inst_34830 = cljs.core.count(inst_34828);
var inst_34802 = inst_34829;
var inst_34803 = inst_34828;
var inst_34804 = inst_34830;
var inst_34805 = (0);
var state_34928__$1 = (function (){var statearr_35100 = state_34928;
(statearr_35100[(14)] = inst_34803);

(statearr_35100[(15)] = inst_34804);

(statearr_35100[(16)] = inst_34802);

(statearr_35100[(17)] = inst_34805);

return statearr_35100;
})();
var statearr_35101_37380 = state_34928__$1;
(statearr_35101_37380[(2)] = null);

(statearr_35101_37380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (11))){
var inst_34824 = (state_34928[(7)]);
var inst_34802 = (state_34928[(16)]);
var inst_34824__$1 = cljs.core.seq(inst_34802);
var state_34928__$1 = (function (){var statearr_35107 = state_34928;
(statearr_35107[(7)] = inst_34824__$1);

return statearr_35107;
})();
if(inst_34824__$1){
var statearr_35108_37383 = state_34928__$1;
(statearr_35108_37383[(1)] = (16));

} else {
var statearr_35109_37384 = state_34928__$1;
(statearr_35109_37384[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (9))){
var inst_34856 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
var statearr_35111_37385 = state_34928__$1;
(statearr_35111_37385[(2)] = inst_34856);

(statearr_35111_37385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (5))){
var inst_34800 = cljs.core.deref(cs);
var inst_34801 = cljs.core.seq(inst_34800);
var inst_34802 = inst_34801;
var inst_34803 = null;
var inst_34804 = (0);
var inst_34805 = (0);
var state_34928__$1 = (function (){var statearr_35114 = state_34928;
(statearr_35114[(14)] = inst_34803);

(statearr_35114[(15)] = inst_34804);

(statearr_35114[(16)] = inst_34802);

(statearr_35114[(17)] = inst_34805);

return statearr_35114;
})();
var statearr_35117_37386 = state_34928__$1;
(statearr_35117_37386[(2)] = null);

(statearr_35117_37386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (14))){
var state_34928__$1 = state_34928;
var statearr_35121_37387 = state_34928__$1;
(statearr_35121_37387[(2)] = null);

(statearr_35121_37387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (45))){
var inst_34918 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
var statearr_35122_37388 = state_34928__$1;
(statearr_35122_37388[(2)] = inst_34918);

(statearr_35122_37388[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (26))){
var inst_34859 = (state_34928[(27)]);
var inst_34914 = (state_34928[(2)]);
var inst_34915 = cljs.core.seq(inst_34859);
var state_34928__$1 = (function (){var statearr_35124 = state_34928;
(statearr_35124[(29)] = inst_34914);

return statearr_35124;
})();
if(inst_34915){
var statearr_35125_37389 = state_34928__$1;
(statearr_35125_37389[(1)] = (42));

} else {
var statearr_35126_37390 = state_34928__$1;
(statearr_35126_37390[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (16))){
var inst_34824 = (state_34928[(7)]);
var inst_34826 = cljs.core.chunked_seq_QMARK_(inst_34824);
var state_34928__$1 = state_34928;
if(inst_34826){
var statearr_35127_37391 = state_34928__$1;
(statearr_35127_37391[(1)] = (19));

} else {
var statearr_35130_37392 = state_34928__$1;
(statearr_35130_37392[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (38))){
var inst_34907 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
var statearr_35133_37397 = state_34928__$1;
(statearr_35133_37397[(2)] = inst_34907);

(statearr_35133_37397[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (30))){
var state_34928__$1 = state_34928;
var statearr_35134_37399 = state_34928__$1;
(statearr_35134_37399[(2)] = null);

(statearr_35134_37399[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (10))){
var inst_34803 = (state_34928[(14)]);
var inst_34805 = (state_34928[(17)]);
var inst_34813 = cljs.core._nth(inst_34803,inst_34805);
var inst_34814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34813,(0),null);
var inst_34815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34813,(1),null);
var state_34928__$1 = (function (){var statearr_35136 = state_34928;
(statearr_35136[(24)] = inst_34814);

return statearr_35136;
})();
if(cljs.core.truth_(inst_34815)){
var statearr_35137_37410 = state_34928__$1;
(statearr_35137_37410[(1)] = (13));

} else {
var statearr_35138_37411 = state_34928__$1;
(statearr_35138_37411[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (18))){
var inst_34852 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
var statearr_35144_37415 = state_34928__$1;
(statearr_35144_37415[(2)] = inst_34852);

(statearr_35144_37415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (42))){
var state_34928__$1 = state_34928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34928__$1,(45),dchan);
} else {
if((state_val_34929 === (37))){
var inst_34793 = (state_34928[(10)]);
var inst_34897 = (state_34928[(22)]);
var inst_34888 = (state_34928[(23)]);
var inst_34897__$1 = cljs.core.first(inst_34888);
var inst_34898 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34897__$1,inst_34793,done);
var state_34928__$1 = (function (){var statearr_35157 = state_34928;
(statearr_35157[(22)] = inst_34897__$1);

return statearr_35157;
})();
if(cljs.core.truth_(inst_34898)){
var statearr_35162_37416 = state_34928__$1;
(statearr_35162_37416[(1)] = (39));

} else {
var statearr_35166_37420 = state_34928__$1;
(statearr_35166_37420[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (8))){
var inst_34804 = (state_34928[(15)]);
var inst_34805 = (state_34928[(17)]);
var inst_34807 = (inst_34805 < inst_34804);
var inst_34808 = inst_34807;
var state_34928__$1 = state_34928;
if(cljs.core.truth_(inst_34808)){
var statearr_35167_37422 = state_34928__$1;
(statearr_35167_37422[(1)] = (10));

} else {
var statearr_35169_37423 = state_34928__$1;
(statearr_35169_37423[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32216__auto__ = null;
var cljs$core$async$mult_$_state_machine__32216__auto____0 = (function (){
var statearr_35174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35174[(0)] = cljs$core$async$mult_$_state_machine__32216__auto__);

(statearr_35174[(1)] = (1));

return statearr_35174;
});
var cljs$core$async$mult_$_state_machine__32216__auto____1 = (function (state_34928){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_34928);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e35182){var ex__32219__auto__ = e35182;
var statearr_35188_37428 = state_34928;
(statearr_35188_37428[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_34928[(4)]))){
var statearr_35190_37429 = state_34928;
(statearr_35190_37429[(1)] = cljs.core.first((state_34928[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37430 = state_34928;
state_34928 = G__37430;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32216__auto__ = function(state_34928){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32216__auto____1.call(this,state_34928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32216__auto____0;
cljs$core$async$mult_$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32216__auto____1;
return cljs$core$async$mult_$_state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_35195 = f__32245__auto__();
(statearr_35195[(6)] = c__32244__auto___37309);

return statearr_35195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35208 = arguments.length;
switch (G__35208) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37436 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37436(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37439 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37439(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37440 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37440(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37449 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37449(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37462 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37462(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37470 = arguments.length;
var i__5770__auto___37471 = (0);
while(true){
if((i__5770__auto___37471 < len__5769__auto___37470)){
args__5775__auto__.push((arguments[i__5770__auto___37471]));

var G__37472 = (i__5770__auto___37471 + (1));
i__5770__auto___37471 = G__37472;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35287){
var map__35288 = p__35287;
var map__35288__$1 = cljs.core.__destructure_map(map__35288);
var opts = map__35288__$1;
var statearr_35289_37477 = state;
(statearr_35289_37477[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35291_37478 = state;
(statearr_35291_37478[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_35294_37479 = state;
(statearr_35294_37479[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35277){
var G__35278 = cljs.core.first(seq35277);
var seq35277__$1 = cljs.core.next(seq35277);
var G__35279 = cljs.core.first(seq35277__$1);
var seq35277__$2 = cljs.core.next(seq35277__$1);
var G__35280 = cljs.core.first(seq35277__$2);
var seq35277__$3 = cljs.core.next(seq35277__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35278,G__35279,G__35280,seq35277__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35299 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35300){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35300 = meta35300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35301,meta35300__$1){
var self__ = this;
var _35301__$1 = this;
return (new cljs.core.async.t_cljs$core$async35299(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35300__$1));
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35301){
var self__ = this;
var _35301__$1 = this;
return self__.meta35300;
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35300","meta35300",1688392038,null)], null);
}));

(cljs.core.async.t_cljs$core$async35299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35299");

(cljs.core.async.t_cljs$core$async35299.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35299.
 */
cljs.core.async.__GT_t_cljs$core$async35299 = (function cljs$core$async$__GT_t_cljs$core$async35299(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35300){
return (new cljs.core.async.t_cljs$core$async35299(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35300));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async35299(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32244__auto___37510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_35388){
var state_val_35389 = (state_35388[(1)]);
if((state_val_35389 === (7))){
var inst_35346 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35346)){
var statearr_35398_37513 = state_35388__$1;
(statearr_35398_37513[(1)] = (8));

} else {
var statearr_35400_37519 = state_35388__$1;
(statearr_35400_37519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (20))){
var inst_35339 = (state_35388[(7)]);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35388__$1,(23),out,inst_35339);
} else {
if((state_val_35389 === (1))){
var inst_35318 = calc_state();
var inst_35320 = cljs.core.__destructure_map(inst_35318);
var inst_35321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35320,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35320,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35320,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35324 = inst_35318;
var state_35388__$1 = (function (){var statearr_35402 = state_35388;
(statearr_35402[(8)] = inst_35324);

(statearr_35402[(9)] = inst_35321);

(statearr_35402[(10)] = inst_35323);

(statearr_35402[(11)] = inst_35322);

return statearr_35402;
})();
var statearr_35405_37525 = state_35388__$1;
(statearr_35405_37525[(2)] = null);

(statearr_35405_37525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (24))){
var inst_35328 = (state_35388[(12)]);
var inst_35324 = inst_35328;
var state_35388__$1 = (function (){var statearr_35409 = state_35388;
(statearr_35409[(8)] = inst_35324);

return statearr_35409;
})();
var statearr_35410_37528 = state_35388__$1;
(statearr_35410_37528[(2)] = null);

(statearr_35410_37528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (4))){
var inst_35341 = (state_35388[(13)]);
var inst_35339 = (state_35388[(7)]);
var inst_35338 = (state_35388[(2)]);
var inst_35339__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35338,(0),null);
var inst_35340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35338,(1),null);
var inst_35341__$1 = (inst_35339__$1 == null);
var state_35388__$1 = (function (){var statearr_35411 = state_35388;
(statearr_35411[(13)] = inst_35341__$1);

(statearr_35411[(14)] = inst_35340);

(statearr_35411[(7)] = inst_35339__$1);

return statearr_35411;
})();
if(cljs.core.truth_(inst_35341__$1)){
var statearr_35412_37530 = state_35388__$1;
(statearr_35412_37530[(1)] = (5));

} else {
var statearr_35414_37533 = state_35388__$1;
(statearr_35414_37533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (15))){
var inst_35362 = (state_35388[(15)]);
var inst_35329 = (state_35388[(16)]);
var inst_35362__$1 = cljs.core.empty_QMARK_(inst_35329);
var state_35388__$1 = (function (){var statearr_35417 = state_35388;
(statearr_35417[(15)] = inst_35362__$1);

return statearr_35417;
})();
if(inst_35362__$1){
var statearr_35418_37538 = state_35388__$1;
(statearr_35418_37538[(1)] = (17));

} else {
var statearr_35421_37539 = state_35388__$1;
(statearr_35421_37539[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (21))){
var inst_35328 = (state_35388[(12)]);
var inst_35324 = inst_35328;
var state_35388__$1 = (function (){var statearr_35423 = state_35388;
(statearr_35423[(8)] = inst_35324);

return statearr_35423;
})();
var statearr_35426_37544 = state_35388__$1;
(statearr_35426_37544[(2)] = null);

(statearr_35426_37544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (13))){
var inst_35355 = (state_35388[(2)]);
var inst_35356 = calc_state();
var inst_35324 = inst_35356;
var state_35388__$1 = (function (){var statearr_35429 = state_35388;
(statearr_35429[(17)] = inst_35355);

(statearr_35429[(8)] = inst_35324);

return statearr_35429;
})();
var statearr_35430_37545 = state_35388__$1;
(statearr_35430_37545[(2)] = null);

(statearr_35430_37545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (22))){
var inst_35382 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35432_37547 = state_35388__$1;
(statearr_35432_37547[(2)] = inst_35382);

(statearr_35432_37547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (6))){
var inst_35340 = (state_35388[(14)]);
var inst_35344 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35340,change);
var state_35388__$1 = state_35388;
var statearr_35435_37554 = state_35388__$1;
(statearr_35435_37554[(2)] = inst_35344);

(statearr_35435_37554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (25))){
var state_35388__$1 = state_35388;
var statearr_35437_37556 = state_35388__$1;
(statearr_35437_37556[(2)] = null);

(statearr_35437_37556[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (17))){
var inst_35340 = (state_35388[(14)]);
var inst_35330 = (state_35388[(18)]);
var inst_35364 = (inst_35330.cljs$core$IFn$_invoke$arity$1 ? inst_35330.cljs$core$IFn$_invoke$arity$1(inst_35340) : inst_35330.call(null,inst_35340));
var inst_35365 = cljs.core.not(inst_35364);
var state_35388__$1 = state_35388;
var statearr_35439_37560 = state_35388__$1;
(statearr_35439_37560[(2)] = inst_35365);

(statearr_35439_37560[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (3))){
var inst_35386 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35388__$1,inst_35386);
} else {
if((state_val_35389 === (12))){
var state_35388__$1 = state_35388;
var statearr_35445_37561 = state_35388__$1;
(statearr_35445_37561[(2)] = null);

(statearr_35445_37561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (2))){
var inst_35324 = (state_35388[(8)]);
var inst_35328 = (state_35388[(12)]);
var inst_35328__$1 = cljs.core.__destructure_map(inst_35324);
var inst_35329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35328__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35328__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35328__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35388__$1 = (function (){var statearr_35449 = state_35388;
(statearr_35449[(16)] = inst_35329);

(statearr_35449[(18)] = inst_35330);

(statearr_35449[(12)] = inst_35328__$1);

return statearr_35449;
})();
return cljs.core.async.ioc_alts_BANG_(state_35388__$1,(4),inst_35331);
} else {
if((state_val_35389 === (23))){
var inst_35373 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35373)){
var statearr_35453_37572 = state_35388__$1;
(statearr_35453_37572[(1)] = (24));

} else {
var statearr_35456_37573 = state_35388__$1;
(statearr_35456_37573[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (19))){
var inst_35368 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35458_37576 = state_35388__$1;
(statearr_35458_37576[(2)] = inst_35368);

(statearr_35458_37576[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (11))){
var inst_35340 = (state_35388[(14)]);
var inst_35351 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35340);
var state_35388__$1 = state_35388;
var statearr_35461_37577 = state_35388__$1;
(statearr_35461_37577[(2)] = inst_35351);

(statearr_35461_37577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (9))){
var inst_35340 = (state_35388[(14)]);
var inst_35329 = (state_35388[(16)]);
var inst_35359 = (state_35388[(19)]);
var inst_35359__$1 = (inst_35329.cljs$core$IFn$_invoke$arity$1 ? inst_35329.cljs$core$IFn$_invoke$arity$1(inst_35340) : inst_35329.call(null,inst_35340));
var state_35388__$1 = (function (){var statearr_35467 = state_35388;
(statearr_35467[(19)] = inst_35359__$1);

return statearr_35467;
})();
if(cljs.core.truth_(inst_35359__$1)){
var statearr_35469_37581 = state_35388__$1;
(statearr_35469_37581[(1)] = (14));

} else {
var statearr_35471_37582 = state_35388__$1;
(statearr_35471_37582[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (5))){
var inst_35341 = (state_35388[(13)]);
var state_35388__$1 = state_35388;
var statearr_35473_37583 = state_35388__$1;
(statearr_35473_37583[(2)] = inst_35341);

(statearr_35473_37583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (14))){
var inst_35359 = (state_35388[(19)]);
var state_35388__$1 = state_35388;
var statearr_35477_37587 = state_35388__$1;
(statearr_35477_37587[(2)] = inst_35359);

(statearr_35477_37587[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (26))){
var inst_35378 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35480_37588 = state_35388__$1;
(statearr_35480_37588[(2)] = inst_35378);

(statearr_35480_37588[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (16))){
var inst_35370 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35370)){
var statearr_35481_37589 = state_35388__$1;
(statearr_35481_37589[(1)] = (20));

} else {
var statearr_35483_37590 = state_35388__$1;
(statearr_35483_37590[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (10))){
var inst_35384 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35486_37592 = state_35388__$1;
(statearr_35486_37592[(2)] = inst_35384);

(statearr_35486_37592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (18))){
var inst_35362 = (state_35388[(15)]);
var state_35388__$1 = state_35388;
var statearr_35489_37593 = state_35388__$1;
(statearr_35489_37593[(2)] = inst_35362);

(statearr_35489_37593[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (8))){
var inst_35339 = (state_35388[(7)]);
var inst_35349 = (inst_35339 == null);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35349)){
var statearr_35491_37595 = state_35388__$1;
(statearr_35491_37595[(1)] = (11));

} else {
var statearr_35492_37596 = state_35388__$1;
(statearr_35492_37596[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32216__auto__ = null;
var cljs$core$async$mix_$_state_machine__32216__auto____0 = (function (){
var statearr_35496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35496[(0)] = cljs$core$async$mix_$_state_machine__32216__auto__);

(statearr_35496[(1)] = (1));

return statearr_35496;
});
var cljs$core$async$mix_$_state_machine__32216__auto____1 = (function (state_35388){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_35388);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e35500){var ex__32219__auto__ = e35500;
var statearr_35501_37597 = state_35388;
(statearr_35501_37597[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_35388[(4)]))){
var statearr_35502_37602 = state_35388;
(statearr_35502_37602[(1)] = cljs.core.first((state_35388[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37603 = state_35388;
state_35388 = G__37603;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32216__auto__ = function(state_35388){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32216__auto____1.call(this,state_35388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32216__auto____0;
cljs$core$async$mix_$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32216__auto____1;
return cljs$core$async$mix_$_state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_35506 = f__32245__auto__();
(statearr_35506[(6)] = c__32244__auto___37510);

return statearr_35506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37608 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37608(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37612 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37612(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37615 = (function() {
var G__37616 = null;
var G__37616__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37616__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37616 = function(p,v){
switch(arguments.length){
case 1:
return G__37616__1.call(this,p);
case 2:
return G__37616__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37616.cljs$core$IFn$_invoke$arity$1 = G__37616__1;
G__37616.cljs$core$IFn$_invoke$arity$2 = G__37616__2;
return G__37616;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35538 = arguments.length;
switch (G__35538) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37615(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37615(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35554 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35555){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35555 = meta35555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35556,meta35555__$1){
var self__ = this;
var _35556__$1 = this;
return (new cljs.core.async.t_cljs$core$async35554(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35555__$1));
}));

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35556){
var self__ = this;
var _35556__$1 = this;
return self__.meta35555;
}));

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35554.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35555","meta35555",458759673,null)], null);
}));

(cljs.core.async.t_cljs$core$async35554.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35554");

(cljs.core.async.t_cljs$core$async35554.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35554");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35554.
 */
cljs.core.async.__GT_t_cljs$core$async35554 = (function cljs$core$async$__GT_t_cljs$core$async35554(ch,topic_fn,buf_fn,mults,ensure_mult,meta35555){
return (new cljs.core.async.t_cljs$core$async35554(ch,topic_fn,buf_fn,mults,ensure_mult,meta35555));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35545 = arguments.length;
switch (G__35545) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35543_SHARP_){
if(cljs.core.truth_((p1__35543_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35543_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35543_SHARP_.call(null,topic)))){
return p1__35543_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35543_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async35554(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32244__auto___37637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_35669){
var state_val_35670 = (state_35669[(1)]);
if((state_val_35670 === (7))){
var inst_35664 = (state_35669[(2)]);
var state_35669__$1 = state_35669;
var statearr_35675_37639 = state_35669__$1;
(statearr_35675_37639[(2)] = inst_35664);

(statearr_35675_37639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (20))){
var state_35669__$1 = state_35669;
var statearr_35676_37642 = state_35669__$1;
(statearr_35676_37642[(2)] = null);

(statearr_35676_37642[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (1))){
var state_35669__$1 = state_35669;
var statearr_35677_37643 = state_35669__$1;
(statearr_35677_37643[(2)] = null);

(statearr_35677_37643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (24))){
var inst_35647 = (state_35669[(7)]);
var inst_35656 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35647);
var state_35669__$1 = state_35669;
var statearr_35678_37648 = state_35669__$1;
(statearr_35678_37648[(2)] = inst_35656);

(statearr_35678_37648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (4))){
var inst_35592 = (state_35669[(8)]);
var inst_35592__$1 = (state_35669[(2)]);
var inst_35593 = (inst_35592__$1 == null);
var state_35669__$1 = (function (){var statearr_35680 = state_35669;
(statearr_35680[(8)] = inst_35592__$1);

return statearr_35680;
})();
if(cljs.core.truth_(inst_35593)){
var statearr_35681_37649 = state_35669__$1;
(statearr_35681_37649[(1)] = (5));

} else {
var statearr_35682_37651 = state_35669__$1;
(statearr_35682_37651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (15))){
var inst_35640 = (state_35669[(2)]);
var state_35669__$1 = state_35669;
var statearr_35685_37654 = state_35669__$1;
(statearr_35685_37654[(2)] = inst_35640);

(statearr_35685_37654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (21))){
var inst_35661 = (state_35669[(2)]);
var state_35669__$1 = (function (){var statearr_35688 = state_35669;
(statearr_35688[(9)] = inst_35661);

return statearr_35688;
})();
var statearr_35689_37655 = state_35669__$1;
(statearr_35689_37655[(2)] = null);

(statearr_35689_37655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (13))){
var inst_35621 = (state_35669[(10)]);
var inst_35624 = cljs.core.chunked_seq_QMARK_(inst_35621);
var state_35669__$1 = state_35669;
if(inst_35624){
var statearr_35690_37660 = state_35669__$1;
(statearr_35690_37660[(1)] = (16));

} else {
var statearr_35691_37662 = state_35669__$1;
(statearr_35691_37662[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (22))){
var inst_35653 = (state_35669[(2)]);
var state_35669__$1 = state_35669;
if(cljs.core.truth_(inst_35653)){
var statearr_35695_37666 = state_35669__$1;
(statearr_35695_37666[(1)] = (23));

} else {
var statearr_35697_37667 = state_35669__$1;
(statearr_35697_37667[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (6))){
var inst_35592 = (state_35669[(8)]);
var inst_35649 = (state_35669[(11)]);
var inst_35647 = (state_35669[(7)]);
var inst_35647__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35592) : topic_fn.call(null,inst_35592));
var inst_35648 = cljs.core.deref(mults);
var inst_35649__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35648,inst_35647__$1);
var state_35669__$1 = (function (){var statearr_35703 = state_35669;
(statearr_35703[(11)] = inst_35649__$1);

(statearr_35703[(7)] = inst_35647__$1);

return statearr_35703;
})();
if(cljs.core.truth_(inst_35649__$1)){
var statearr_35704_37668 = state_35669__$1;
(statearr_35704_37668[(1)] = (19));

} else {
var statearr_35707_37669 = state_35669__$1;
(statearr_35707_37669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (25))){
var inst_35658 = (state_35669[(2)]);
var state_35669__$1 = state_35669;
var statearr_35708_37672 = state_35669__$1;
(statearr_35708_37672[(2)] = inst_35658);

(statearr_35708_37672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (17))){
var inst_35621 = (state_35669[(10)]);
var inst_35631 = cljs.core.first(inst_35621);
var inst_35632 = cljs.core.async.muxch_STAR_(inst_35631);
var inst_35633 = cljs.core.async.close_BANG_(inst_35632);
var inst_35634 = cljs.core.next(inst_35621);
var inst_35603 = inst_35634;
var inst_35604 = null;
var inst_35605 = (0);
var inst_35606 = (0);
var state_35669__$1 = (function (){var statearr_35713 = state_35669;
(statearr_35713[(12)] = inst_35605);

(statearr_35713[(13)] = inst_35633);

(statearr_35713[(14)] = inst_35603);

(statearr_35713[(15)] = inst_35606);

(statearr_35713[(16)] = inst_35604);

return statearr_35713;
})();
var statearr_35720_37676 = state_35669__$1;
(statearr_35720_37676[(2)] = null);

(statearr_35720_37676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (3))){
var inst_35666 = (state_35669[(2)]);
var state_35669__$1 = state_35669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35669__$1,inst_35666);
} else {
if((state_val_35670 === (12))){
var inst_35642 = (state_35669[(2)]);
var state_35669__$1 = state_35669;
var statearr_35721_37677 = state_35669__$1;
(statearr_35721_37677[(2)] = inst_35642);

(statearr_35721_37677[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (2))){
var state_35669__$1 = state_35669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35669__$1,(4),ch);
} else {
if((state_val_35670 === (23))){
var state_35669__$1 = state_35669;
var statearr_35723_37681 = state_35669__$1;
(statearr_35723_37681[(2)] = null);

(statearr_35723_37681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (19))){
var inst_35592 = (state_35669[(8)]);
var inst_35649 = (state_35669[(11)]);
var inst_35651 = cljs.core.async.muxch_STAR_(inst_35649);
var state_35669__$1 = state_35669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35669__$1,(22),inst_35651,inst_35592);
} else {
if((state_val_35670 === (11))){
var inst_35603 = (state_35669[(14)]);
var inst_35621 = (state_35669[(10)]);
var inst_35621__$1 = cljs.core.seq(inst_35603);
var state_35669__$1 = (function (){var statearr_35734 = state_35669;
(statearr_35734[(10)] = inst_35621__$1);

return statearr_35734;
})();
if(inst_35621__$1){
var statearr_35735_37682 = state_35669__$1;
(statearr_35735_37682[(1)] = (13));

} else {
var statearr_35736_37683 = state_35669__$1;
(statearr_35736_37683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (9))){
var inst_35644 = (state_35669[(2)]);
var state_35669__$1 = state_35669;
var statearr_35737_37687 = state_35669__$1;
(statearr_35737_37687[(2)] = inst_35644);

(statearr_35737_37687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (5))){
var inst_35600 = cljs.core.deref(mults);
var inst_35601 = cljs.core.vals(inst_35600);
var inst_35602 = cljs.core.seq(inst_35601);
var inst_35603 = inst_35602;
var inst_35604 = null;
var inst_35605 = (0);
var inst_35606 = (0);
var state_35669__$1 = (function (){var statearr_35742 = state_35669;
(statearr_35742[(12)] = inst_35605);

(statearr_35742[(14)] = inst_35603);

(statearr_35742[(15)] = inst_35606);

(statearr_35742[(16)] = inst_35604);

return statearr_35742;
})();
var statearr_35743_37695 = state_35669__$1;
(statearr_35743_37695[(2)] = null);

(statearr_35743_37695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (14))){
var state_35669__$1 = state_35669;
var statearr_35748_37704 = state_35669__$1;
(statearr_35748_37704[(2)] = null);

(statearr_35748_37704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (16))){
var inst_35621 = (state_35669[(10)]);
var inst_35626 = cljs.core.chunk_first(inst_35621);
var inst_35627 = cljs.core.chunk_rest(inst_35621);
var inst_35628 = cljs.core.count(inst_35626);
var inst_35603 = inst_35627;
var inst_35604 = inst_35626;
var inst_35605 = inst_35628;
var inst_35606 = (0);
var state_35669__$1 = (function (){var statearr_35757 = state_35669;
(statearr_35757[(12)] = inst_35605);

(statearr_35757[(14)] = inst_35603);

(statearr_35757[(15)] = inst_35606);

(statearr_35757[(16)] = inst_35604);

return statearr_35757;
})();
var statearr_35760_37709 = state_35669__$1;
(statearr_35760_37709[(2)] = null);

(statearr_35760_37709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (10))){
var inst_35605 = (state_35669[(12)]);
var inst_35603 = (state_35669[(14)]);
var inst_35606 = (state_35669[(15)]);
var inst_35604 = (state_35669[(16)]);
var inst_35612 = cljs.core._nth(inst_35604,inst_35606);
var inst_35613 = cljs.core.async.muxch_STAR_(inst_35612);
var inst_35614 = cljs.core.async.close_BANG_(inst_35613);
var inst_35617 = (inst_35606 + (1));
var tmp35745 = inst_35605;
var tmp35746 = inst_35603;
var tmp35747 = inst_35604;
var inst_35603__$1 = tmp35746;
var inst_35604__$1 = tmp35747;
var inst_35605__$1 = tmp35745;
var inst_35606__$1 = inst_35617;
var state_35669__$1 = (function (){var statearr_35767 = state_35669;
(statearr_35767[(12)] = inst_35605__$1);

(statearr_35767[(17)] = inst_35614);

(statearr_35767[(14)] = inst_35603__$1);

(statearr_35767[(15)] = inst_35606__$1);

(statearr_35767[(16)] = inst_35604__$1);

return statearr_35767;
})();
var statearr_35768_37710 = state_35669__$1;
(statearr_35768_37710[(2)] = null);

(statearr_35768_37710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (18))){
var inst_35637 = (state_35669[(2)]);
var state_35669__$1 = state_35669;
var statearr_35773_37711 = state_35669__$1;
(statearr_35773_37711[(2)] = inst_35637);

(statearr_35773_37711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (8))){
var inst_35605 = (state_35669[(12)]);
var inst_35606 = (state_35669[(15)]);
var inst_35609 = (inst_35606 < inst_35605);
var inst_35610 = inst_35609;
var state_35669__$1 = state_35669;
if(cljs.core.truth_(inst_35610)){
var statearr_35774_37712 = state_35669__$1;
(statearr_35774_37712[(1)] = (10));

} else {
var statearr_35775_37713 = state_35669__$1;
(statearr_35775_37713[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32216__auto__ = null;
var cljs$core$async$state_machine__32216__auto____0 = (function (){
var statearr_35783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35783[(0)] = cljs$core$async$state_machine__32216__auto__);

(statearr_35783[(1)] = (1));

return statearr_35783;
});
var cljs$core$async$state_machine__32216__auto____1 = (function (state_35669){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_35669);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e35785){var ex__32219__auto__ = e35785;
var statearr_35787_37714 = state_35669;
(statearr_35787_37714[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_35669[(4)]))){
var statearr_35796_37716 = state_35669;
(statearr_35796_37716[(1)] = cljs.core.first((state_35669[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37718 = state_35669;
state_35669 = G__37718;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$state_machine__32216__auto__ = function(state_35669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32216__auto____1.call(this,state_35669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32216__auto____0;
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32216__auto____1;
return cljs$core$async$state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_35797 = f__32245__auto__();
(statearr_35797[(6)] = c__32244__auto___37637);

return statearr_35797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35806 = arguments.length;
switch (G__35806) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35831 = arguments.length;
switch (G__35831) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35834 = arguments.length;
switch (G__35834) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__32244__auto___37737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_35909){
var state_val_35911 = (state_35909[(1)]);
if((state_val_35911 === (7))){
var state_35909__$1 = state_35909;
var statearr_35920_37743 = state_35909__$1;
(statearr_35920_37743[(2)] = null);

(statearr_35920_37743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (1))){
var state_35909__$1 = state_35909;
var statearr_35921_37745 = state_35909__$1;
(statearr_35921_37745[(2)] = null);

(statearr_35921_37745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (4))){
var inst_35857 = (state_35909[(7)]);
var inst_35858 = (state_35909[(8)]);
var inst_35860 = (inst_35858 < inst_35857);
var state_35909__$1 = state_35909;
if(cljs.core.truth_(inst_35860)){
var statearr_35922_37748 = state_35909__$1;
(statearr_35922_37748[(1)] = (6));

} else {
var statearr_35923_37750 = state_35909__$1;
(statearr_35923_37750[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (15))){
var inst_35893 = (state_35909[(9)]);
var inst_35900 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35893);
var state_35909__$1 = state_35909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35909__$1,(17),out,inst_35900);
} else {
if((state_val_35911 === (13))){
var inst_35893 = (state_35909[(9)]);
var inst_35893__$1 = (state_35909[(2)]);
var inst_35894 = cljs.core.some(cljs.core.nil_QMARK_,inst_35893__$1);
var state_35909__$1 = (function (){var statearr_35925 = state_35909;
(statearr_35925[(9)] = inst_35893__$1);

return statearr_35925;
})();
if(cljs.core.truth_(inst_35894)){
var statearr_35926_37751 = state_35909__$1;
(statearr_35926_37751[(1)] = (14));

} else {
var statearr_35927_37752 = state_35909__$1;
(statearr_35927_37752[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (6))){
var state_35909__$1 = state_35909;
var statearr_35929_37753 = state_35909__$1;
(statearr_35929_37753[(2)] = null);

(statearr_35929_37753[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (17))){
var inst_35902 = (state_35909[(2)]);
var state_35909__$1 = (function (){var statearr_35938 = state_35909;
(statearr_35938[(10)] = inst_35902);

return statearr_35938;
})();
var statearr_35939_37754 = state_35909__$1;
(statearr_35939_37754[(2)] = null);

(statearr_35939_37754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (3))){
var inst_35907 = (state_35909[(2)]);
var state_35909__$1 = state_35909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35909__$1,inst_35907);
} else {
if((state_val_35911 === (12))){
var _ = (function (){var statearr_35942 = state_35909;
(statearr_35942[(4)] = cljs.core.rest((state_35909[(4)])));

return statearr_35942;
})();
var state_35909__$1 = state_35909;
var ex35935 = (state_35909__$1[(2)]);
var statearr_35943_37756 = state_35909__$1;
(statearr_35943_37756[(5)] = ex35935);


if((ex35935 instanceof Object)){
var statearr_35944_37757 = state_35909__$1;
(statearr_35944_37757[(1)] = (11));

(statearr_35944_37757[(5)] = null);

} else {
throw ex35935;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (2))){
var inst_35856 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35857 = cnt;
var inst_35858 = (0);
var state_35909__$1 = (function (){var statearr_35945 = state_35909;
(statearr_35945[(11)] = inst_35856);

(statearr_35945[(7)] = inst_35857);

(statearr_35945[(8)] = inst_35858);

return statearr_35945;
})();
var statearr_35946_37758 = state_35909__$1;
(statearr_35946_37758[(2)] = null);

(statearr_35946_37758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (11))){
var inst_35869 = (state_35909[(2)]);
var inst_35870 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35909__$1 = (function (){var statearr_35947 = state_35909;
(statearr_35947[(12)] = inst_35869);

return statearr_35947;
})();
var statearr_35948_37763 = state_35909__$1;
(statearr_35948_37763[(2)] = inst_35870);

(statearr_35948_37763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (9))){
var inst_35858 = (state_35909[(8)]);
var _ = (function (){var statearr_35950 = state_35909;
(statearr_35950[(4)] = cljs.core.cons((12),(state_35909[(4)])));

return statearr_35950;
})();
var inst_35879 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35858) : chs__$1.call(null,inst_35858));
var inst_35880 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35858) : done.call(null,inst_35858));
var inst_35881 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35879,inst_35880);
var ___$1 = (function (){var statearr_35954 = state_35909;
(statearr_35954[(4)] = cljs.core.rest((state_35909[(4)])));

return statearr_35954;
})();
var state_35909__$1 = state_35909;
var statearr_35955_37764 = state_35909__$1;
(statearr_35955_37764[(2)] = inst_35881);

(statearr_35955_37764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (5))){
var inst_35891 = (state_35909[(2)]);
var state_35909__$1 = (function (){var statearr_35956 = state_35909;
(statearr_35956[(13)] = inst_35891);

return statearr_35956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35909__$1,(13),dchan);
} else {
if((state_val_35911 === (14))){
var inst_35897 = cljs.core.async.close_BANG_(out);
var state_35909__$1 = state_35909;
var statearr_35958_37765 = state_35909__$1;
(statearr_35958_37765[(2)] = inst_35897);

(statearr_35958_37765[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (16))){
var inst_35905 = (state_35909[(2)]);
var state_35909__$1 = state_35909;
var statearr_35960_37766 = state_35909__$1;
(statearr_35960_37766[(2)] = inst_35905);

(statearr_35960_37766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (10))){
var inst_35858 = (state_35909[(8)]);
var inst_35884 = (state_35909[(2)]);
var inst_35885 = (inst_35858 + (1));
var inst_35858__$1 = inst_35885;
var state_35909__$1 = (function (){var statearr_35961 = state_35909;
(statearr_35961[(8)] = inst_35858__$1);

(statearr_35961[(14)] = inst_35884);

return statearr_35961;
})();
var statearr_35962_37771 = state_35909__$1;
(statearr_35962_37771[(2)] = null);

(statearr_35962_37771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (8))){
var inst_35889 = (state_35909[(2)]);
var state_35909__$1 = state_35909;
var statearr_35963_37779 = state_35909__$1;
(statearr_35963_37779[(2)] = inst_35889);

(statearr_35963_37779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32216__auto__ = null;
var cljs$core$async$state_machine__32216__auto____0 = (function (){
var statearr_35964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35964[(0)] = cljs$core$async$state_machine__32216__auto__);

(statearr_35964[(1)] = (1));

return statearr_35964;
});
var cljs$core$async$state_machine__32216__auto____1 = (function (state_35909){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_35909);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e35967){var ex__32219__auto__ = e35967;
var statearr_35968_37785 = state_35909;
(statearr_35968_37785[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_35909[(4)]))){
var statearr_35970_37786 = state_35909;
(statearr_35970_37786[(1)] = cljs.core.first((state_35909[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37788 = state_35909;
state_35909 = G__37788;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$state_machine__32216__auto__ = function(state_35909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32216__auto____1.call(this,state_35909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32216__auto____0;
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32216__auto____1;
return cljs$core$async$state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_35972 = f__32245__auto__();
(statearr_35972[(6)] = c__32244__auto___37737);

return statearr_35972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35976 = arguments.length;
switch (G__35976) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32244__auto___37794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_36022){
var state_val_36023 = (state_36022[(1)]);
if((state_val_36023 === (7))){
var inst_35998 = (state_36022[(7)]);
var inst_35997 = (state_36022[(8)]);
var inst_35997__$1 = (state_36022[(2)]);
var inst_35998__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35997__$1,(0),null);
var inst_35999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35997__$1,(1),null);
var inst_36002 = (inst_35998__$1 == null);
var state_36022__$1 = (function (){var statearr_36025 = state_36022;
(statearr_36025[(7)] = inst_35998__$1);

(statearr_36025[(8)] = inst_35997__$1);

(statearr_36025[(9)] = inst_35999);

return statearr_36025;
})();
if(cljs.core.truth_(inst_36002)){
var statearr_36026_37796 = state_36022__$1;
(statearr_36026_37796[(1)] = (8));

} else {
var statearr_36027_37797 = state_36022__$1;
(statearr_36027_37797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (1))){
var inst_35987 = cljs.core.vec(chs);
var inst_35988 = inst_35987;
var state_36022__$1 = (function (){var statearr_36029 = state_36022;
(statearr_36029[(10)] = inst_35988);

return statearr_36029;
})();
var statearr_36030_37798 = state_36022__$1;
(statearr_36030_37798[(2)] = null);

(statearr_36030_37798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (4))){
var inst_35988 = (state_36022[(10)]);
var state_36022__$1 = state_36022;
return cljs.core.async.ioc_alts_BANG_(state_36022__$1,(7),inst_35988);
} else {
if((state_val_36023 === (6))){
var inst_36017 = (state_36022[(2)]);
var state_36022__$1 = state_36022;
var statearr_36033_37800 = state_36022__$1;
(statearr_36033_37800[(2)] = inst_36017);

(statearr_36033_37800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (3))){
var inst_36019 = (state_36022[(2)]);
var state_36022__$1 = state_36022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36022__$1,inst_36019);
} else {
if((state_val_36023 === (2))){
var inst_35988 = (state_36022[(10)]);
var inst_35990 = cljs.core.count(inst_35988);
var inst_35991 = (inst_35990 > (0));
var state_36022__$1 = state_36022;
if(cljs.core.truth_(inst_35991)){
var statearr_36038_37806 = state_36022__$1;
(statearr_36038_37806[(1)] = (4));

} else {
var statearr_36039_37807 = state_36022__$1;
(statearr_36039_37807[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (11))){
var inst_35988 = (state_36022[(10)]);
var inst_36010 = (state_36022[(2)]);
var tmp36035 = inst_35988;
var inst_35988__$1 = tmp36035;
var state_36022__$1 = (function (){var statearr_36040 = state_36022;
(statearr_36040[(10)] = inst_35988__$1);

(statearr_36040[(11)] = inst_36010);

return statearr_36040;
})();
var statearr_36041_37808 = state_36022__$1;
(statearr_36041_37808[(2)] = null);

(statearr_36041_37808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (9))){
var inst_35998 = (state_36022[(7)]);
var state_36022__$1 = state_36022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36022__$1,(11),out,inst_35998);
} else {
if((state_val_36023 === (5))){
var inst_36015 = cljs.core.async.close_BANG_(out);
var state_36022__$1 = state_36022;
var statearr_36043_37809 = state_36022__$1;
(statearr_36043_37809[(2)] = inst_36015);

(statearr_36043_37809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (10))){
var inst_36013 = (state_36022[(2)]);
var state_36022__$1 = state_36022;
var statearr_36044_37811 = state_36022__$1;
(statearr_36044_37811[(2)] = inst_36013);

(statearr_36044_37811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (8))){
var inst_35998 = (state_36022[(7)]);
var inst_35997 = (state_36022[(8)]);
var inst_35999 = (state_36022[(9)]);
var inst_35988 = (state_36022[(10)]);
var inst_36005 = (function (){var cs = inst_35988;
var vec__35993 = inst_35997;
var v = inst_35998;
var c = inst_35999;
return (function (p1__35973_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35973_SHARP_);
});
})();
var inst_36006 = cljs.core.filterv(inst_36005,inst_35988);
var inst_35988__$1 = inst_36006;
var state_36022__$1 = (function (){var statearr_36046 = state_36022;
(statearr_36046[(10)] = inst_35988__$1);

return statearr_36046;
})();
var statearr_36047_37819 = state_36022__$1;
(statearr_36047_37819[(2)] = null);

(statearr_36047_37819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32216__auto__ = null;
var cljs$core$async$state_machine__32216__auto____0 = (function (){
var statearr_36053 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36053[(0)] = cljs$core$async$state_machine__32216__auto__);

(statearr_36053[(1)] = (1));

return statearr_36053;
});
var cljs$core$async$state_machine__32216__auto____1 = (function (state_36022){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_36022);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e36054){var ex__32219__auto__ = e36054;
var statearr_36055_37823 = state_36022;
(statearr_36055_37823[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_36022[(4)]))){
var statearr_36056_37826 = state_36022;
(statearr_36056_37826[(1)] = cljs.core.first((state_36022[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37829 = state_36022;
state_36022 = G__37829;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$state_machine__32216__auto__ = function(state_36022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32216__auto____1.call(this,state_36022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32216__auto____0;
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32216__auto____1;
return cljs$core$async$state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_36063 = f__32245__auto__();
(statearr_36063[(6)] = c__32244__auto___37794);

return statearr_36063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36066 = arguments.length;
switch (G__36066) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32244__auto___37837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_36091){
var state_val_36092 = (state_36091[(1)]);
if((state_val_36092 === (7))){
var inst_36072 = (state_36091[(7)]);
var inst_36072__$1 = (state_36091[(2)]);
var inst_36073 = (inst_36072__$1 == null);
var inst_36074 = cljs.core.not(inst_36073);
var state_36091__$1 = (function (){var statearr_36097 = state_36091;
(statearr_36097[(7)] = inst_36072__$1);

return statearr_36097;
})();
if(inst_36074){
var statearr_36099_37841 = state_36091__$1;
(statearr_36099_37841[(1)] = (8));

} else {
var statearr_36100_37842 = state_36091__$1;
(statearr_36100_37842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (1))){
var inst_36067 = (0);
var state_36091__$1 = (function (){var statearr_36101 = state_36091;
(statearr_36101[(8)] = inst_36067);

return statearr_36101;
})();
var statearr_36102_37844 = state_36091__$1;
(statearr_36102_37844[(2)] = null);

(statearr_36102_37844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (4))){
var state_36091__$1 = state_36091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36091__$1,(7),ch);
} else {
if((state_val_36092 === (6))){
var inst_36085 = (state_36091[(2)]);
var state_36091__$1 = state_36091;
var statearr_36103_37847 = state_36091__$1;
(statearr_36103_37847[(2)] = inst_36085);

(statearr_36103_37847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (3))){
var inst_36087 = (state_36091[(2)]);
var inst_36088 = cljs.core.async.close_BANG_(out);
var state_36091__$1 = (function (){var statearr_36104 = state_36091;
(statearr_36104[(9)] = inst_36087);

return statearr_36104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36091__$1,inst_36088);
} else {
if((state_val_36092 === (2))){
var inst_36067 = (state_36091[(8)]);
var inst_36069 = (inst_36067 < n);
var state_36091__$1 = state_36091;
if(cljs.core.truth_(inst_36069)){
var statearr_36105_37848 = state_36091__$1;
(statearr_36105_37848[(1)] = (4));

} else {
var statearr_36106_37850 = state_36091__$1;
(statearr_36106_37850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (11))){
var inst_36067 = (state_36091[(8)]);
var inst_36077 = (state_36091[(2)]);
var inst_36078 = (inst_36067 + (1));
var inst_36067__$1 = inst_36078;
var state_36091__$1 = (function (){var statearr_36107 = state_36091;
(statearr_36107[(10)] = inst_36077);

(statearr_36107[(8)] = inst_36067__$1);

return statearr_36107;
})();
var statearr_36113_37856 = state_36091__$1;
(statearr_36113_37856[(2)] = null);

(statearr_36113_37856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (9))){
var state_36091__$1 = state_36091;
var statearr_36114_37857 = state_36091__$1;
(statearr_36114_37857[(2)] = null);

(statearr_36114_37857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (5))){
var state_36091__$1 = state_36091;
var statearr_36116_37859 = state_36091__$1;
(statearr_36116_37859[(2)] = null);

(statearr_36116_37859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (10))){
var inst_36082 = (state_36091[(2)]);
var state_36091__$1 = state_36091;
var statearr_36120_37860 = state_36091__$1;
(statearr_36120_37860[(2)] = inst_36082);

(statearr_36120_37860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (8))){
var inst_36072 = (state_36091[(7)]);
var state_36091__$1 = state_36091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36091__$1,(11),out,inst_36072);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32216__auto__ = null;
var cljs$core$async$state_machine__32216__auto____0 = (function (){
var statearr_36121 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36121[(0)] = cljs$core$async$state_machine__32216__auto__);

(statearr_36121[(1)] = (1));

return statearr_36121;
});
var cljs$core$async$state_machine__32216__auto____1 = (function (state_36091){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_36091);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e36124){var ex__32219__auto__ = e36124;
var statearr_36125_37869 = state_36091;
(statearr_36125_37869[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_36091[(4)]))){
var statearr_36129_37870 = state_36091;
(statearr_36129_37870[(1)] = cljs.core.first((state_36091[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37872 = state_36091;
state_36091 = G__37872;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$state_machine__32216__auto__ = function(state_36091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32216__auto____1.call(this,state_36091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32216__auto____0;
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32216__auto____1;
return cljs$core$async$state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_36130 = f__32245__auto__();
(statearr_36130[(6)] = c__32244__auto___37837);

return statearr_36130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36145 = (function (f,ch,meta36138,_,fn1,meta36146){
this.f = f;
this.ch = ch;
this.meta36138 = meta36138;
this._ = _;
this.fn1 = fn1;
this.meta36146 = meta36146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36147,meta36146__$1){
var self__ = this;
var _36147__$1 = this;
return (new cljs.core.async.t_cljs$core$async36145(self__.f,self__.ch,self__.meta36138,self__._,self__.fn1,meta36146__$1));
}));

(cljs.core.async.t_cljs$core$async36145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36147){
var self__ = this;
var _36147__$1 = this;
return self__.meta36146;
}));

(cljs.core.async.t_cljs$core$async36145.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36145.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36136_SHARP_){
var G__36159 = (((p1__36136_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36136_SHARP_) : self__.f.call(null,p1__36136_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36159) : f1.call(null,G__36159));
});
}));

(cljs.core.async.t_cljs$core$async36145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36138","meta36138",-1450102625,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36137","cljs.core.async/t_cljs$core$async36137",364618393,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36146","meta36146",379355083,null)], null);
}));

(cljs.core.async.t_cljs$core$async36145.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36145");

(cljs.core.async.t_cljs$core$async36145.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36145");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36145.
 */
cljs.core.async.__GT_t_cljs$core$async36145 = (function cljs$core$async$__GT_t_cljs$core$async36145(f,ch,meta36138,_,fn1,meta36146){
return (new cljs.core.async.t_cljs$core$async36145(f,ch,meta36138,_,fn1,meta36146));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36137 = (function (f,ch,meta36138){
this.f = f;
this.ch = ch;
this.meta36138 = meta36138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36139,meta36138__$1){
var self__ = this;
var _36139__$1 = this;
return (new cljs.core.async.t_cljs$core$async36137(self__.f,self__.ch,meta36138__$1));
}));

(cljs.core.async.t_cljs$core$async36137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36139){
var self__ = this;
var _36139__$1 = this;
return self__.meta36138;
}));

(cljs.core.async.t_cljs$core$async36137.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36137.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36137.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async36145(self__.f,self__.ch,self__.meta36138,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36161 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36161) : self__.f.call(null,G__36161));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36137.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36138","meta36138",-1450102625,null)], null);
}));

(cljs.core.async.t_cljs$core$async36137.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36137");

(cljs.core.async.t_cljs$core$async36137.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36137");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36137.
 */
cljs.core.async.__GT_t_cljs$core$async36137 = (function cljs$core$async$__GT_t_cljs$core$async36137(f,ch,meta36138){
return (new cljs.core.async.t_cljs$core$async36137(f,ch,meta36138));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36137(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36167 = (function (f,ch,meta36168){
this.f = f;
this.ch = ch;
this.meta36168 = meta36168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36169,meta36168__$1){
var self__ = this;
var _36169__$1 = this;
return (new cljs.core.async.t_cljs$core$async36167(self__.f,self__.ch,meta36168__$1));
}));

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36169){
var self__ = this;
var _36169__$1 = this;
return self__.meta36168;
}));

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36168","meta36168",-1936919302,null)], null);
}));

(cljs.core.async.t_cljs$core$async36167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36167");

(cljs.core.async.t_cljs$core$async36167.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36167.
 */
cljs.core.async.__GT_t_cljs$core$async36167 = (function cljs$core$async$__GT_t_cljs$core$async36167(f,ch,meta36168){
return (new cljs.core.async.t_cljs$core$async36167(f,ch,meta36168));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36167(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36183 = (function (p,ch,meta36184){
this.p = p;
this.ch = ch;
this.meta36184 = meta36184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36185,meta36184__$1){
var self__ = this;
var _36185__$1 = this;
return (new cljs.core.async.t_cljs$core$async36183(self__.p,self__.ch,meta36184__$1));
}));

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36185){
var self__ = this;
var _36185__$1 = this;
return self__.meta36184;
}));

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36184","meta36184",109820972,null)], null);
}));

(cljs.core.async.t_cljs$core$async36183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36183");

(cljs.core.async.t_cljs$core$async36183.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36183.
 */
cljs.core.async.__GT_t_cljs$core$async36183 = (function cljs$core$async$__GT_t_cljs$core$async36183(p,ch,meta36184){
return (new cljs.core.async.t_cljs$core$async36183(p,ch,meta36184));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async36183(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36197 = arguments.length;
switch (G__36197) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32244__auto___37918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_36218){
var state_val_36219 = (state_36218[(1)]);
if((state_val_36219 === (7))){
var inst_36214 = (state_36218[(2)]);
var state_36218__$1 = state_36218;
var statearr_36222_37919 = state_36218__$1;
(statearr_36222_37919[(2)] = inst_36214);

(statearr_36222_37919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (1))){
var state_36218__$1 = state_36218;
var statearr_36226_37927 = state_36218__$1;
(statearr_36226_37927[(2)] = null);

(statearr_36226_37927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (4))){
var inst_36200 = (state_36218[(7)]);
var inst_36200__$1 = (state_36218[(2)]);
var inst_36201 = (inst_36200__$1 == null);
var state_36218__$1 = (function (){var statearr_36227 = state_36218;
(statearr_36227[(7)] = inst_36200__$1);

return statearr_36227;
})();
if(cljs.core.truth_(inst_36201)){
var statearr_36228_37932 = state_36218__$1;
(statearr_36228_37932[(1)] = (5));

} else {
var statearr_36229_37933 = state_36218__$1;
(statearr_36229_37933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (6))){
var inst_36200 = (state_36218[(7)]);
var inst_36205 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36200) : p.call(null,inst_36200));
var state_36218__$1 = state_36218;
if(cljs.core.truth_(inst_36205)){
var statearr_36230_37934 = state_36218__$1;
(statearr_36230_37934[(1)] = (8));

} else {
var statearr_36232_37935 = state_36218__$1;
(statearr_36232_37935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (3))){
var inst_36216 = (state_36218[(2)]);
var state_36218__$1 = state_36218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36218__$1,inst_36216);
} else {
if((state_val_36219 === (2))){
var state_36218__$1 = state_36218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36218__$1,(4),ch);
} else {
if((state_val_36219 === (11))){
var inst_36208 = (state_36218[(2)]);
var state_36218__$1 = state_36218;
var statearr_36235_37947 = state_36218__$1;
(statearr_36235_37947[(2)] = inst_36208);

(statearr_36235_37947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (9))){
var state_36218__$1 = state_36218;
var statearr_36236_37949 = state_36218__$1;
(statearr_36236_37949[(2)] = null);

(statearr_36236_37949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (5))){
var inst_36203 = cljs.core.async.close_BANG_(out);
var state_36218__$1 = state_36218;
var statearr_36237_37950 = state_36218__$1;
(statearr_36237_37950[(2)] = inst_36203);

(statearr_36237_37950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (10))){
var inst_36211 = (state_36218[(2)]);
var state_36218__$1 = (function (){var statearr_36241 = state_36218;
(statearr_36241[(8)] = inst_36211);

return statearr_36241;
})();
var statearr_36242_37951 = state_36218__$1;
(statearr_36242_37951[(2)] = null);

(statearr_36242_37951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (8))){
var inst_36200 = (state_36218[(7)]);
var state_36218__$1 = state_36218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36218__$1,(11),out,inst_36200);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32216__auto__ = null;
var cljs$core$async$state_machine__32216__auto____0 = (function (){
var statearr_36243 = [null,null,null,null,null,null,null,null,null];
(statearr_36243[(0)] = cljs$core$async$state_machine__32216__auto__);

(statearr_36243[(1)] = (1));

return statearr_36243;
});
var cljs$core$async$state_machine__32216__auto____1 = (function (state_36218){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_36218);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e36245){var ex__32219__auto__ = e36245;
var statearr_36246_37952 = state_36218;
(statearr_36246_37952[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_36218[(4)]))){
var statearr_36247_37953 = state_36218;
(statearr_36247_37953[(1)] = cljs.core.first((state_36218[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37955 = state_36218;
state_36218 = G__37955;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$state_machine__32216__auto__ = function(state_36218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32216__auto____1.call(this,state_36218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32216__auto____0;
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32216__auto____1;
return cljs$core$async$state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_36253 = f__32245__auto__();
(statearr_36253[(6)] = c__32244__auto___37918);

return statearr_36253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36256 = arguments.length;
switch (G__36256) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_36325){
var state_val_36326 = (state_36325[(1)]);
if((state_val_36326 === (7))){
var inst_36320 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36334_37961 = state_36325__$1;
(statearr_36334_37961[(2)] = inst_36320);

(statearr_36334_37961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (20))){
var inst_36290 = (state_36325[(7)]);
var inst_36301 = (state_36325[(2)]);
var inst_36302 = cljs.core.next(inst_36290);
var inst_36276 = inst_36302;
var inst_36277 = null;
var inst_36278 = (0);
var inst_36279 = (0);
var state_36325__$1 = (function (){var statearr_36336 = state_36325;
(statearr_36336[(8)] = inst_36277);

(statearr_36336[(9)] = inst_36278);

(statearr_36336[(10)] = inst_36279);

(statearr_36336[(11)] = inst_36276);

(statearr_36336[(12)] = inst_36301);

return statearr_36336;
})();
var statearr_36340_37962 = state_36325__$1;
(statearr_36340_37962[(2)] = null);

(statearr_36340_37962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (1))){
var state_36325__$1 = state_36325;
var statearr_36341_37964 = state_36325__$1;
(statearr_36341_37964[(2)] = null);

(statearr_36341_37964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (4))){
var inst_36265 = (state_36325[(13)]);
var inst_36265__$1 = (state_36325[(2)]);
var inst_36266 = (inst_36265__$1 == null);
var state_36325__$1 = (function (){var statearr_36344 = state_36325;
(statearr_36344[(13)] = inst_36265__$1);

return statearr_36344;
})();
if(cljs.core.truth_(inst_36266)){
var statearr_36345_37965 = state_36325__$1;
(statearr_36345_37965[(1)] = (5));

} else {
var statearr_36347_37966 = state_36325__$1;
(statearr_36347_37966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (15))){
var state_36325__$1 = state_36325;
var statearr_36351_37967 = state_36325__$1;
(statearr_36351_37967[(2)] = null);

(statearr_36351_37967[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (21))){
var state_36325__$1 = state_36325;
var statearr_36352_37968 = state_36325__$1;
(statearr_36352_37968[(2)] = null);

(statearr_36352_37968[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (13))){
var inst_36277 = (state_36325[(8)]);
var inst_36278 = (state_36325[(9)]);
var inst_36279 = (state_36325[(10)]);
var inst_36276 = (state_36325[(11)]);
var inst_36286 = (state_36325[(2)]);
var inst_36287 = (inst_36279 + (1));
var tmp36348 = inst_36277;
var tmp36349 = inst_36278;
var tmp36350 = inst_36276;
var inst_36276__$1 = tmp36350;
var inst_36277__$1 = tmp36348;
var inst_36278__$1 = tmp36349;
var inst_36279__$1 = inst_36287;
var state_36325__$1 = (function (){var statearr_36353 = state_36325;
(statearr_36353[(8)] = inst_36277__$1);

(statearr_36353[(14)] = inst_36286);

(statearr_36353[(9)] = inst_36278__$1);

(statearr_36353[(10)] = inst_36279__$1);

(statearr_36353[(11)] = inst_36276__$1);

return statearr_36353;
})();
var statearr_36354_37974 = state_36325__$1;
(statearr_36354_37974[(2)] = null);

(statearr_36354_37974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (22))){
var state_36325__$1 = state_36325;
var statearr_36355_37978 = state_36325__$1;
(statearr_36355_37978[(2)] = null);

(statearr_36355_37978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (6))){
var inst_36265 = (state_36325[(13)]);
var inst_36274 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36265) : f.call(null,inst_36265));
var inst_36275 = cljs.core.seq(inst_36274);
var inst_36276 = inst_36275;
var inst_36277 = null;
var inst_36278 = (0);
var inst_36279 = (0);
var state_36325__$1 = (function (){var statearr_36358 = state_36325;
(statearr_36358[(8)] = inst_36277);

(statearr_36358[(9)] = inst_36278);

(statearr_36358[(10)] = inst_36279);

(statearr_36358[(11)] = inst_36276);

return statearr_36358;
})();
var statearr_36359_37979 = state_36325__$1;
(statearr_36359_37979[(2)] = null);

(statearr_36359_37979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (17))){
var inst_36290 = (state_36325[(7)]);
var inst_36294 = cljs.core.chunk_first(inst_36290);
var inst_36295 = cljs.core.chunk_rest(inst_36290);
var inst_36296 = cljs.core.count(inst_36294);
var inst_36276 = inst_36295;
var inst_36277 = inst_36294;
var inst_36278 = inst_36296;
var inst_36279 = (0);
var state_36325__$1 = (function (){var statearr_36360 = state_36325;
(statearr_36360[(8)] = inst_36277);

(statearr_36360[(9)] = inst_36278);

(statearr_36360[(10)] = inst_36279);

(statearr_36360[(11)] = inst_36276);

return statearr_36360;
})();
var statearr_36361_37985 = state_36325__$1;
(statearr_36361_37985[(2)] = null);

(statearr_36361_37985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (3))){
var inst_36322 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36325__$1,inst_36322);
} else {
if((state_val_36326 === (12))){
var inst_36310 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36362_37987 = state_36325__$1;
(statearr_36362_37987[(2)] = inst_36310);

(statearr_36362_37987[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (2))){
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36325__$1,(4),in$);
} else {
if((state_val_36326 === (23))){
var inst_36318 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36367_37989 = state_36325__$1;
(statearr_36367_37989[(2)] = inst_36318);

(statearr_36367_37989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (19))){
var inst_36305 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36369_37990 = state_36325__$1;
(statearr_36369_37990[(2)] = inst_36305);

(statearr_36369_37990[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (11))){
var inst_36290 = (state_36325[(7)]);
var inst_36276 = (state_36325[(11)]);
var inst_36290__$1 = cljs.core.seq(inst_36276);
var state_36325__$1 = (function (){var statearr_36370 = state_36325;
(statearr_36370[(7)] = inst_36290__$1);

return statearr_36370;
})();
if(inst_36290__$1){
var statearr_36372_37992 = state_36325__$1;
(statearr_36372_37992[(1)] = (14));

} else {
var statearr_36374_37993 = state_36325__$1;
(statearr_36374_37993[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (9))){
var inst_36312 = (state_36325[(2)]);
var inst_36313 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36325__$1 = (function (){var statearr_36375 = state_36325;
(statearr_36375[(15)] = inst_36312);

return statearr_36375;
})();
if(cljs.core.truth_(inst_36313)){
var statearr_36376_37995 = state_36325__$1;
(statearr_36376_37995[(1)] = (21));

} else {
var statearr_36377_37996 = state_36325__$1;
(statearr_36377_37996[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (5))){
var inst_36268 = cljs.core.async.close_BANG_(out);
var state_36325__$1 = state_36325;
var statearr_36379_37998 = state_36325__$1;
(statearr_36379_37998[(2)] = inst_36268);

(statearr_36379_37998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (14))){
var inst_36290 = (state_36325[(7)]);
var inst_36292 = cljs.core.chunked_seq_QMARK_(inst_36290);
var state_36325__$1 = state_36325;
if(inst_36292){
var statearr_36380_37999 = state_36325__$1;
(statearr_36380_37999[(1)] = (17));

} else {
var statearr_36381_38000 = state_36325__$1;
(statearr_36381_38000[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (16))){
var inst_36308 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36386_38001 = state_36325__$1;
(statearr_36386_38001[(2)] = inst_36308);

(statearr_36386_38001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (10))){
var inst_36277 = (state_36325[(8)]);
var inst_36279 = (state_36325[(10)]);
var inst_36284 = cljs.core._nth(inst_36277,inst_36279);
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36325__$1,(13),out,inst_36284);
} else {
if((state_val_36326 === (18))){
var inst_36290 = (state_36325[(7)]);
var inst_36299 = cljs.core.first(inst_36290);
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36325__$1,(20),out,inst_36299);
} else {
if((state_val_36326 === (8))){
var inst_36278 = (state_36325[(9)]);
var inst_36279 = (state_36325[(10)]);
var inst_36281 = (inst_36279 < inst_36278);
var inst_36282 = inst_36281;
var state_36325__$1 = state_36325;
if(cljs.core.truth_(inst_36282)){
var statearr_36390_38002 = state_36325__$1;
(statearr_36390_38002[(1)] = (10));

} else {
var statearr_36391_38003 = state_36325__$1;
(statearr_36391_38003[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32216__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32216__auto____0 = (function (){
var statearr_36392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36392[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32216__auto__);

(statearr_36392[(1)] = (1));

return statearr_36392;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32216__auto____1 = (function (state_36325){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_36325);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e36393){var ex__32219__auto__ = e36393;
var statearr_36394_38006 = state_36325;
(statearr_36394_38006[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_36325[(4)]))){
var statearr_36395_38007 = state_36325;
(statearr_36395_38007[(1)] = cljs.core.first((state_36325[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38011 = state_36325;
state_36325 = G__38011;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32216__auto__ = function(state_36325){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32216__auto____1.call(this,state_36325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32216__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32216__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_36396 = f__32245__auto__();
(statearr_36396[(6)] = c__32244__auto__);

return statearr_36396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));

return c__32244__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36398 = arguments.length;
switch (G__36398) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36401 = arguments.length;
switch (G__36401) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36407 = arguments.length;
switch (G__36407) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32244__auto___38028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_36435){
var state_val_36436 = (state_36435[(1)]);
if((state_val_36436 === (7))){
var inst_36429 = (state_36435[(2)]);
var state_36435__$1 = state_36435;
var statearr_36437_38031 = state_36435__$1;
(statearr_36437_38031[(2)] = inst_36429);

(statearr_36437_38031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (1))){
var inst_36411 = null;
var state_36435__$1 = (function (){var statearr_36438 = state_36435;
(statearr_36438[(7)] = inst_36411);

return statearr_36438;
})();
var statearr_36439_38033 = state_36435__$1;
(statearr_36439_38033[(2)] = null);

(statearr_36439_38033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (4))){
var inst_36414 = (state_36435[(8)]);
var inst_36414__$1 = (state_36435[(2)]);
var inst_36415 = (inst_36414__$1 == null);
var inst_36416 = cljs.core.not(inst_36415);
var state_36435__$1 = (function (){var statearr_36440 = state_36435;
(statearr_36440[(8)] = inst_36414__$1);

return statearr_36440;
})();
if(inst_36416){
var statearr_36441_38035 = state_36435__$1;
(statearr_36441_38035[(1)] = (5));

} else {
var statearr_36446_38036 = state_36435__$1;
(statearr_36446_38036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (6))){
var state_36435__$1 = state_36435;
var statearr_36447_38037 = state_36435__$1;
(statearr_36447_38037[(2)] = null);

(statearr_36447_38037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (3))){
var inst_36431 = (state_36435[(2)]);
var inst_36432 = cljs.core.async.close_BANG_(out);
var state_36435__$1 = (function (){var statearr_36450 = state_36435;
(statearr_36450[(9)] = inst_36431);

return statearr_36450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36435__$1,inst_36432);
} else {
if((state_val_36436 === (2))){
var state_36435__$1 = state_36435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36435__$1,(4),ch);
} else {
if((state_val_36436 === (11))){
var inst_36414 = (state_36435[(8)]);
var inst_36423 = (state_36435[(2)]);
var inst_36411 = inst_36414;
var state_36435__$1 = (function (){var statearr_36452 = state_36435;
(statearr_36452[(7)] = inst_36411);

(statearr_36452[(10)] = inst_36423);

return statearr_36452;
})();
var statearr_36455_38041 = state_36435__$1;
(statearr_36455_38041[(2)] = null);

(statearr_36455_38041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (9))){
var inst_36414 = (state_36435[(8)]);
var state_36435__$1 = state_36435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36435__$1,(11),out,inst_36414);
} else {
if((state_val_36436 === (5))){
var inst_36411 = (state_36435[(7)]);
var inst_36414 = (state_36435[(8)]);
var inst_36418 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36414,inst_36411);
var state_36435__$1 = state_36435;
if(inst_36418){
var statearr_36461_38042 = state_36435__$1;
(statearr_36461_38042[(1)] = (8));

} else {
var statearr_36462_38043 = state_36435__$1;
(statearr_36462_38043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (10))){
var inst_36426 = (state_36435[(2)]);
var state_36435__$1 = state_36435;
var statearr_36463_38047 = state_36435__$1;
(statearr_36463_38047[(2)] = inst_36426);

(statearr_36463_38047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (8))){
var inst_36411 = (state_36435[(7)]);
var tmp36459 = inst_36411;
var inst_36411__$1 = tmp36459;
var state_36435__$1 = (function (){var statearr_36464 = state_36435;
(statearr_36464[(7)] = inst_36411__$1);

return statearr_36464;
})();
var statearr_36465_38053 = state_36435__$1;
(statearr_36465_38053[(2)] = null);

(statearr_36465_38053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32216__auto__ = null;
var cljs$core$async$state_machine__32216__auto____0 = (function (){
var statearr_36469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36469[(0)] = cljs$core$async$state_machine__32216__auto__);

(statearr_36469[(1)] = (1));

return statearr_36469;
});
var cljs$core$async$state_machine__32216__auto____1 = (function (state_36435){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_36435);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e36470){var ex__32219__auto__ = e36470;
var statearr_36471_38056 = state_36435;
(statearr_36471_38056[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_36435[(4)]))){
var statearr_36472_38057 = state_36435;
(statearr_36472_38057[(1)] = cljs.core.first((state_36435[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38065 = state_36435;
state_36435 = G__38065;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$state_machine__32216__auto__ = function(state_36435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32216__auto____1.call(this,state_36435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32216__auto____0;
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32216__auto____1;
return cljs$core$async$state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_36477 = f__32245__auto__();
(statearr_36477[(6)] = c__32244__auto___38028);

return statearr_36477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36480 = arguments.length;
switch (G__36480) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32244__auto___38069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_36520){
var state_val_36521 = (state_36520[(1)]);
if((state_val_36521 === (7))){
var inst_36516 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36522_38070 = state_36520__$1;
(statearr_36522_38070[(2)] = inst_36516);

(statearr_36522_38070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (1))){
var inst_36482 = (new Array(n));
var inst_36483 = inst_36482;
var inst_36484 = (0);
var state_36520__$1 = (function (){var statearr_36523 = state_36520;
(statearr_36523[(7)] = inst_36484);

(statearr_36523[(8)] = inst_36483);

return statearr_36523;
})();
var statearr_36524_38076 = state_36520__$1;
(statearr_36524_38076[(2)] = null);

(statearr_36524_38076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (4))){
var inst_36487 = (state_36520[(9)]);
var inst_36487__$1 = (state_36520[(2)]);
var inst_36488 = (inst_36487__$1 == null);
var inst_36489 = cljs.core.not(inst_36488);
var state_36520__$1 = (function (){var statearr_36526 = state_36520;
(statearr_36526[(9)] = inst_36487__$1);

return statearr_36526;
})();
if(inst_36489){
var statearr_36528_38080 = state_36520__$1;
(statearr_36528_38080[(1)] = (5));

} else {
var statearr_36529_38081 = state_36520__$1;
(statearr_36529_38081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (15))){
var inst_36510 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36531_38082 = state_36520__$1;
(statearr_36531_38082[(2)] = inst_36510);

(statearr_36531_38082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (13))){
var state_36520__$1 = state_36520;
var statearr_36533_38083 = state_36520__$1;
(statearr_36533_38083[(2)] = null);

(statearr_36533_38083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (6))){
var inst_36484 = (state_36520[(7)]);
var inst_36506 = (inst_36484 > (0));
var state_36520__$1 = state_36520;
if(cljs.core.truth_(inst_36506)){
var statearr_36536_38084 = state_36520__$1;
(statearr_36536_38084[(1)] = (12));

} else {
var statearr_36537_38085 = state_36520__$1;
(statearr_36537_38085[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (3))){
var inst_36518 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36520__$1,inst_36518);
} else {
if((state_val_36521 === (12))){
var inst_36483 = (state_36520[(8)]);
var inst_36508 = cljs.core.vec(inst_36483);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36520__$1,(15),out,inst_36508);
} else {
if((state_val_36521 === (2))){
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36520__$1,(4),ch);
} else {
if((state_val_36521 === (11))){
var inst_36500 = (state_36520[(2)]);
var inst_36501 = (new Array(n));
var inst_36483 = inst_36501;
var inst_36484 = (0);
var state_36520__$1 = (function (){var statearr_36543 = state_36520;
(statearr_36543[(7)] = inst_36484);

(statearr_36543[(8)] = inst_36483);

(statearr_36543[(10)] = inst_36500);

return statearr_36543;
})();
var statearr_36545_38086 = state_36520__$1;
(statearr_36545_38086[(2)] = null);

(statearr_36545_38086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (9))){
var inst_36483 = (state_36520[(8)]);
var inst_36498 = cljs.core.vec(inst_36483);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36520__$1,(11),out,inst_36498);
} else {
if((state_val_36521 === (5))){
var inst_36484 = (state_36520[(7)]);
var inst_36493 = (state_36520[(11)]);
var inst_36483 = (state_36520[(8)]);
var inst_36487 = (state_36520[(9)]);
var inst_36491 = (inst_36483[inst_36484] = inst_36487);
var inst_36493__$1 = (inst_36484 + (1));
var inst_36494 = (inst_36493__$1 < n);
var state_36520__$1 = (function (){var statearr_36546 = state_36520;
(statearr_36546[(12)] = inst_36491);

(statearr_36546[(11)] = inst_36493__$1);

return statearr_36546;
})();
if(cljs.core.truth_(inst_36494)){
var statearr_36547_38089 = state_36520__$1;
(statearr_36547_38089[(1)] = (8));

} else {
var statearr_36548_38090 = state_36520__$1;
(statearr_36548_38090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (14))){
var inst_36513 = (state_36520[(2)]);
var inst_36514 = cljs.core.async.close_BANG_(out);
var state_36520__$1 = (function (){var statearr_36551 = state_36520;
(statearr_36551[(13)] = inst_36513);

return statearr_36551;
})();
var statearr_36552_38091 = state_36520__$1;
(statearr_36552_38091[(2)] = inst_36514);

(statearr_36552_38091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (10))){
var inst_36504 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36553_38092 = state_36520__$1;
(statearr_36553_38092[(2)] = inst_36504);

(statearr_36553_38092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (8))){
var inst_36493 = (state_36520[(11)]);
var inst_36483 = (state_36520[(8)]);
var tmp36550 = inst_36483;
var inst_36483__$1 = tmp36550;
var inst_36484 = inst_36493;
var state_36520__$1 = (function (){var statearr_36554 = state_36520;
(statearr_36554[(7)] = inst_36484);

(statearr_36554[(8)] = inst_36483__$1);

return statearr_36554;
})();
var statearr_36555_38093 = state_36520__$1;
(statearr_36555_38093[(2)] = null);

(statearr_36555_38093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32216__auto__ = null;
var cljs$core$async$state_machine__32216__auto____0 = (function (){
var statearr_36557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36557[(0)] = cljs$core$async$state_machine__32216__auto__);

(statearr_36557[(1)] = (1));

return statearr_36557;
});
var cljs$core$async$state_machine__32216__auto____1 = (function (state_36520){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_36520);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e36559){var ex__32219__auto__ = e36559;
var statearr_36560_38094 = state_36520;
(statearr_36560_38094[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_36520[(4)]))){
var statearr_36561_38095 = state_36520;
(statearr_36561_38095[(1)] = cljs.core.first((state_36520[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38097 = state_36520;
state_36520 = G__38097;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$state_machine__32216__auto__ = function(state_36520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32216__auto____1.call(this,state_36520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32216__auto____0;
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32216__auto____1;
return cljs$core$async$state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_36563 = f__32245__auto__();
(statearr_36563[(6)] = c__32244__auto___38069);

return statearr_36563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36571 = arguments.length;
switch (G__36571) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32244__auto___38099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32245__auto__ = (function (){var switch__32215__auto__ = (function (state_36617){
var state_val_36618 = (state_36617[(1)]);
if((state_val_36618 === (7))){
var inst_36613 = (state_36617[(2)]);
var state_36617__$1 = state_36617;
var statearr_36633_38100 = state_36617__$1;
(statearr_36633_38100[(2)] = inst_36613);

(statearr_36633_38100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (1))){
var inst_36572 = [];
var inst_36573 = inst_36572;
var inst_36574 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36617__$1 = (function (){var statearr_36634 = state_36617;
(statearr_36634[(7)] = inst_36574);

(statearr_36634[(8)] = inst_36573);

return statearr_36634;
})();
var statearr_36637_38101 = state_36617__$1;
(statearr_36637_38101[(2)] = null);

(statearr_36637_38101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (4))){
var inst_36577 = (state_36617[(9)]);
var inst_36577__$1 = (state_36617[(2)]);
var inst_36578 = (inst_36577__$1 == null);
var inst_36579 = cljs.core.not(inst_36578);
var state_36617__$1 = (function (){var statearr_36641 = state_36617;
(statearr_36641[(9)] = inst_36577__$1);

return statearr_36641;
})();
if(inst_36579){
var statearr_36644_38103 = state_36617__$1;
(statearr_36644_38103[(1)] = (5));

} else {
var statearr_36645_38104 = state_36617__$1;
(statearr_36645_38104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (15))){
var inst_36573 = (state_36617[(8)]);
var inst_36605 = cljs.core.vec(inst_36573);
var state_36617__$1 = state_36617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36617__$1,(18),out,inst_36605);
} else {
if((state_val_36618 === (13))){
var inst_36600 = (state_36617[(2)]);
var state_36617__$1 = state_36617;
var statearr_36650_38106 = state_36617__$1;
(statearr_36650_38106[(2)] = inst_36600);

(statearr_36650_38106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (6))){
var inst_36573 = (state_36617[(8)]);
var inst_36602 = inst_36573.length;
var inst_36603 = (inst_36602 > (0));
var state_36617__$1 = state_36617;
if(cljs.core.truth_(inst_36603)){
var statearr_36651_38107 = state_36617__$1;
(statearr_36651_38107[(1)] = (15));

} else {
var statearr_36653_38108 = state_36617__$1;
(statearr_36653_38108[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (17))){
var inst_36610 = (state_36617[(2)]);
var inst_36611 = cljs.core.async.close_BANG_(out);
var state_36617__$1 = (function (){var statearr_36654 = state_36617;
(statearr_36654[(10)] = inst_36610);

return statearr_36654;
})();
var statearr_36655_38109 = state_36617__$1;
(statearr_36655_38109[(2)] = inst_36611);

(statearr_36655_38109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (3))){
var inst_36615 = (state_36617[(2)]);
var state_36617__$1 = state_36617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36617__$1,inst_36615);
} else {
if((state_val_36618 === (12))){
var inst_36573 = (state_36617[(8)]);
var inst_36593 = cljs.core.vec(inst_36573);
var state_36617__$1 = state_36617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36617__$1,(14),out,inst_36593);
} else {
if((state_val_36618 === (2))){
var state_36617__$1 = state_36617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36617__$1,(4),ch);
} else {
if((state_val_36618 === (11))){
var inst_36577 = (state_36617[(9)]);
var inst_36573 = (state_36617[(8)]);
var inst_36581 = (state_36617[(11)]);
var inst_36590 = inst_36573.push(inst_36577);
var tmp36659 = inst_36573;
var inst_36573__$1 = tmp36659;
var inst_36574 = inst_36581;
var state_36617__$1 = (function (){var statearr_36663 = state_36617;
(statearr_36663[(7)] = inst_36574);

(statearr_36663[(8)] = inst_36573__$1);

(statearr_36663[(12)] = inst_36590);

return statearr_36663;
})();
var statearr_36665_38112 = state_36617__$1;
(statearr_36665_38112[(2)] = null);

(statearr_36665_38112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (9))){
var inst_36574 = (state_36617[(7)]);
var inst_36586 = cljs.core.keyword_identical_QMARK_(inst_36574,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_36617__$1 = state_36617;
var statearr_36671_38113 = state_36617__$1;
(statearr_36671_38113[(2)] = inst_36586);

(statearr_36671_38113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (5))){
var inst_36574 = (state_36617[(7)]);
var inst_36577 = (state_36617[(9)]);
var inst_36582 = (state_36617[(13)]);
var inst_36581 = (state_36617[(11)]);
var inst_36581__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36577) : f.call(null,inst_36577));
var inst_36582__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36581__$1,inst_36574);
var state_36617__$1 = (function (){var statearr_36678 = state_36617;
(statearr_36678[(13)] = inst_36582__$1);

(statearr_36678[(11)] = inst_36581__$1);

return statearr_36678;
})();
if(inst_36582__$1){
var statearr_36679_38118 = state_36617__$1;
(statearr_36679_38118[(1)] = (8));

} else {
var statearr_36680_38119 = state_36617__$1;
(statearr_36680_38119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (14))){
var inst_36577 = (state_36617[(9)]);
var inst_36581 = (state_36617[(11)]);
var inst_36595 = (state_36617[(2)]);
var inst_36596 = [];
var inst_36597 = inst_36596.push(inst_36577);
var inst_36573 = inst_36596;
var inst_36574 = inst_36581;
var state_36617__$1 = (function (){var statearr_36683 = state_36617;
(statearr_36683[(7)] = inst_36574);

(statearr_36683[(8)] = inst_36573);

(statearr_36683[(14)] = inst_36595);

(statearr_36683[(15)] = inst_36597);

return statearr_36683;
})();
var statearr_36684_38128 = state_36617__$1;
(statearr_36684_38128[(2)] = null);

(statearr_36684_38128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (16))){
var state_36617__$1 = state_36617;
var statearr_36689_38129 = state_36617__$1;
(statearr_36689_38129[(2)] = null);

(statearr_36689_38129[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (10))){
var inst_36588 = (state_36617[(2)]);
var state_36617__$1 = state_36617;
if(cljs.core.truth_(inst_36588)){
var statearr_36690_38131 = state_36617__$1;
(statearr_36690_38131[(1)] = (11));

} else {
var statearr_36691_38133 = state_36617__$1;
(statearr_36691_38133[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (18))){
var inst_36607 = (state_36617[(2)]);
var state_36617__$1 = state_36617;
var statearr_36698_38134 = state_36617__$1;
(statearr_36698_38134[(2)] = inst_36607);

(statearr_36698_38134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (8))){
var inst_36582 = (state_36617[(13)]);
var state_36617__$1 = state_36617;
var statearr_36699_38138 = state_36617__$1;
(statearr_36699_38138[(2)] = inst_36582);

(statearr_36699_38138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32216__auto__ = null;
var cljs$core$async$state_machine__32216__auto____0 = (function (){
var statearr_36705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36705[(0)] = cljs$core$async$state_machine__32216__auto__);

(statearr_36705[(1)] = (1));

return statearr_36705;
});
var cljs$core$async$state_machine__32216__auto____1 = (function (state_36617){
while(true){
var ret_value__32217__auto__ = (function (){try{while(true){
var result__32218__auto__ = switch__32215__auto__(state_36617);
if(cljs.core.keyword_identical_QMARK_(result__32218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32218__auto__;
}
break;
}
}catch (e36712){var ex__32219__auto__ = e36712;
var statearr_36713_38142 = state_36617;
(statearr_36713_38142[(2)] = ex__32219__auto__);


if(cljs.core.seq((state_36617[(4)]))){
var statearr_36714_38143 = state_36617;
(statearr_36714_38143[(1)] = cljs.core.first((state_36617[(4)])));

} else {
throw ex__32219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38145 = state_36617;
state_36617 = G__38145;
continue;
} else {
return ret_value__32217__auto__;
}
break;
}
});
cljs$core$async$state_machine__32216__auto__ = function(state_36617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32216__auto____1.call(this,state_36617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32216__auto____0;
cljs$core$async$state_machine__32216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32216__auto____1;
return cljs$core$async$state_machine__32216__auto__;
})()
})();
var state__32246__auto__ = (function (){var statearr_36715 = f__32245__auto__();
(statearr_36715[(6)] = c__32244__auto___38099);

return statearr_36715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32246__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
