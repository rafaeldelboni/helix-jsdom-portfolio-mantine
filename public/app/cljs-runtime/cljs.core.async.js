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
cljs.core.async.t_cljs$core$async35856 = (function (f,blockable,meta35857){
this.f = f;
this.blockable = blockable;
this.meta35857 = meta35857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35858,meta35857__$1){
var self__ = this;
var _35858__$1 = this;
return (new cljs.core.async.t_cljs$core$async35856(self__.f,self__.blockable,meta35857__$1));
}));

(cljs.core.async.t_cljs$core$async35856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35858){
var self__ = this;
var _35858__$1 = this;
return self__.meta35857;
}));

(cljs.core.async.t_cljs$core$async35856.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35856.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35857","meta35857",-1366675246,null)], null);
}));

(cljs.core.async.t_cljs$core$async35856.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35856");

(cljs.core.async.t_cljs$core$async35856.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35856");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35856.
 */
cljs.core.async.__GT_t_cljs$core$async35856 = (function cljs$core$async$__GT_t_cljs$core$async35856(f,blockable,meta35857){
return (new cljs.core.async.t_cljs$core$async35856(f,blockable,meta35857));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35855 = arguments.length;
switch (G__35855) {
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
return (new cljs.core.async.t_cljs$core$async35856(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35861 = arguments.length;
switch (G__35861) {
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
var G__35863 = arguments.length;
switch (G__35863) {
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
var G__35865 = arguments.length;
switch (G__35865) {
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
var val_38341 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38341) : fn1.call(null,val_38341));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38341) : fn1.call(null,val_38341));
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
var G__35867 = arguments.length;
switch (G__35867) {
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
var n__5636__auto___38346 = n;
var x_38347 = (0);
while(true){
if((x_38347 < n__5636__auto___38346)){
(a[x_38347] = x_38347);

var G__38348 = (x_38347 + (1));
x_38347 = G__38348;
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
cljs.core.async.t_cljs$core$async35868 = (function (flag,meta35869){
this.flag = flag;
this.meta35869 = meta35869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35870,meta35869__$1){
var self__ = this;
var _35870__$1 = this;
return (new cljs.core.async.t_cljs$core$async35868(self__.flag,meta35869__$1));
}));

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35870){
var self__ = this;
var _35870__$1 = this;
return self__.meta35869;
}));

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35869","meta35869",1924504665,null)], null);
}));

(cljs.core.async.t_cljs$core$async35868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35868");

(cljs.core.async.t_cljs$core$async35868.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35868.
 */
cljs.core.async.__GT_t_cljs$core$async35868 = (function cljs$core$async$__GT_t_cljs$core$async35868(flag,meta35869){
return (new cljs.core.async.t_cljs$core$async35868(flag,meta35869));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async35868(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35871 = (function (flag,cb,meta35872){
this.flag = flag;
this.cb = cb;
this.meta35872 = meta35872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35873,meta35872__$1){
var self__ = this;
var _35873__$1 = this;
return (new cljs.core.async.t_cljs$core$async35871(self__.flag,self__.cb,meta35872__$1));
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35873){
var self__ = this;
var _35873__$1 = this;
return self__.meta35872;
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35872","meta35872",-1351325810,null)], null);
}));

(cljs.core.async.t_cljs$core$async35871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35871");

(cljs.core.async.t_cljs$core$async35871.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35871.
 */
cljs.core.async.__GT_t_cljs$core$async35871 = (function cljs$core$async$__GT_t_cljs$core$async35871(flag,cb,meta35872){
return (new cljs.core.async.t_cljs$core$async35871(flag,cb,meta35872));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async35871(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35874_SHARP_){
var G__35876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35874_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35876) : fret.call(null,G__35876));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35875_SHARP_){
var G__35877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35875_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35877) : fret.call(null,G__35877));
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
var G__38356 = (i + (1));
i = G__38356;
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
var len__5769__auto___38358 = arguments.length;
var i__5770__auto___38359 = (0);
while(true){
if((i__5770__auto___38359 < len__5769__auto___38358)){
args__5775__auto__.push((arguments[i__5770__auto___38359]));

var G__38360 = (i__5770__auto___38359 + (1));
i__5770__auto___38359 = G__38360;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35880){
var map__35881 = p__35880;
var map__35881__$1 = cljs.core.__destructure_map(map__35881);
var opts = map__35881__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35878){
var G__35879 = cljs.core.first(seq35878);
var seq35878__$1 = cljs.core.next(seq35878);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35879,seq35878__$1);
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
var G__35887 = arguments.length;
switch (G__35887) {
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
var c__35785__auto___38365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_35917){
var state_val_35918 = (state_35917[(1)]);
if((state_val_35918 === (7))){
var inst_35909 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35919_38366 = state_35917__$1;
(statearr_35919_38366[(2)] = inst_35909);

(statearr_35919_38366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (1))){
var state_35917__$1 = state_35917;
var statearr_35920_38367 = state_35917__$1;
(statearr_35920_38367[(2)] = null);

(statearr_35920_38367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (4))){
var inst_35892 = (state_35917[(7)]);
var inst_35892__$1 = (state_35917[(2)]);
var inst_35893 = (inst_35892__$1 == null);
var state_35917__$1 = (function (){var statearr_35921 = state_35917;
(statearr_35921[(7)] = inst_35892__$1);

return statearr_35921;
})();
if(cljs.core.truth_(inst_35893)){
var statearr_35922_38368 = state_35917__$1;
(statearr_35922_38368[(1)] = (5));

} else {
var statearr_35923_38369 = state_35917__$1;
(statearr_35923_38369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (13))){
var state_35917__$1 = state_35917;
var statearr_35928_38370 = state_35917__$1;
(statearr_35928_38370[(2)] = null);

(statearr_35928_38370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (6))){
var inst_35892 = (state_35917[(7)]);
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35917__$1,(11),to,inst_35892);
} else {
if((state_val_35918 === (3))){
var inst_35911 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35917__$1,inst_35911);
} else {
if((state_val_35918 === (12))){
var state_35917__$1 = state_35917;
var statearr_35929_38371 = state_35917__$1;
(statearr_35929_38371[(2)] = null);

(statearr_35929_38371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (2))){
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35917__$1,(4),from);
} else {
if((state_val_35918 === (11))){
var inst_35902 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
if(cljs.core.truth_(inst_35902)){
var statearr_35930_38372 = state_35917__$1;
(statearr_35930_38372[(1)] = (12));

} else {
var statearr_35931_38373 = state_35917__$1;
(statearr_35931_38373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (9))){
var state_35917__$1 = state_35917;
var statearr_35932_38374 = state_35917__$1;
(statearr_35932_38374[(2)] = null);

(statearr_35932_38374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (5))){
var state_35917__$1 = state_35917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35933_38375 = state_35917__$1;
(statearr_35933_38375[(1)] = (8));

} else {
var statearr_35934_38376 = state_35917__$1;
(statearr_35934_38376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (14))){
var inst_35907 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35935_38377 = state_35917__$1;
(statearr_35935_38377[(2)] = inst_35907);

(statearr_35935_38377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (10))){
var inst_35899 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35936_38378 = state_35917__$1;
(statearr_35936_38378[(2)] = inst_35899);

(statearr_35936_38378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (8))){
var inst_35896 = cljs.core.async.close_BANG_(to);
var state_35917__$1 = state_35917;
var statearr_35937_38379 = state_35917__$1;
(statearr_35937_38379[(2)] = inst_35896);

(statearr_35937_38379[(1)] = (10));


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
var cljs$core$async$state_machine__35540__auto__ = null;
var cljs$core$async$state_machine__35540__auto____0 = (function (){
var statearr_35942 = [null,null,null,null,null,null,null,null];
(statearr_35942[(0)] = cljs$core$async$state_machine__35540__auto__);

(statearr_35942[(1)] = (1));

return statearr_35942;
});
var cljs$core$async$state_machine__35540__auto____1 = (function (state_35917){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_35917);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e35943){var ex__35543__auto__ = e35943;
var statearr_35944_38380 = state_35917;
(statearr_35944_38380[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_35917[(4)]))){
var statearr_35945_38381 = state_35917;
(statearr_35945_38381[(1)] = cljs.core.first((state_35917[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38382 = state_35917;
state_35917 = G__38382;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$state_machine__35540__auto__ = function(state_35917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35540__auto____1.call(this,state_35917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35540__auto____0;
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35540__auto____1;
return cljs$core$async$state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_35946 = f__35786__auto__();
(statearr_35946[(6)] = c__35785__auto___38365);

return statearr_35946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
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
var process__$1 = (function (p__35947){
var vec__35948 = p__35947;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35948,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35948,(1),null);
var job = vec__35948;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35785__auto___38385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_35955){
var state_val_35956 = (state_35955[(1)]);
if((state_val_35956 === (1))){
var state_35955__$1 = state_35955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35955__$1,(2),res,v);
} else {
if((state_val_35956 === (2))){
var inst_35952 = (state_35955[(2)]);
var inst_35953 = cljs.core.async.close_BANG_(res);
var state_35955__$1 = (function (){var statearr_35957 = state_35955;
(statearr_35957[(7)] = inst_35952);

return statearr_35957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35955__$1,inst_35953);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0 = (function (){
var statearr_35958 = [null,null,null,null,null,null,null,null];
(statearr_35958[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__);

(statearr_35958[(1)] = (1));

return statearr_35958;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1 = (function (state_35955){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_35955);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e35959){var ex__35543__auto__ = e35959;
var statearr_35960_38386 = state_35955;
(statearr_35960_38386[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_35955[(4)]))){
var statearr_35961_38387 = state_35955;
(statearr_35961_38387[(1)] = cljs.core.first((state_35955[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38388 = state_35955;
state_35955 = G__38388;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__ = function(state_35955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1.call(this,state_35955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_35962 = f__35786__auto__();
(statearr_35962[(6)] = c__35785__auto___38385);

return statearr_35962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35963){
var vec__35964 = p__35963;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35964,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35964,(1),null);
var job = vec__35964;
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
var n__5636__auto___38389 = n;
var __38390 = (0);
while(true){
if((__38390 < n__5636__auto___38389)){
var G__35967_38391 = type;
var G__35967_38392__$1 = (((G__35967_38391 instanceof cljs.core.Keyword))?G__35967_38391.fqn:null);
switch (G__35967_38392__$1) {
case "compute":
var c__35785__auto___38394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38390,c__35785__auto___38394,G__35967_38391,G__35967_38392__$1,n__5636__auto___38389,jobs,results,process__$1,async){
return (function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = ((function (__38390,c__35785__auto___38394,G__35967_38391,G__35967_38392__$1,n__5636__auto___38389,jobs,results,process__$1,async){
return (function (state_35980){
var state_val_35982 = (state_35980[(1)]);
if((state_val_35982 === (1))){
var state_35980__$1 = state_35980;
var statearr_35984_38395 = state_35980__$1;
(statearr_35984_38395[(2)] = null);

(statearr_35984_38395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (2))){
var state_35980__$1 = state_35980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35980__$1,(4),jobs);
} else {
if((state_val_35982 === (3))){
var inst_35978 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35980__$1,inst_35978);
} else {
if((state_val_35982 === (4))){
var inst_35970 = (state_35980[(2)]);
var inst_35971 = process__$1(inst_35970);
var state_35980__$1 = state_35980;
if(cljs.core.truth_(inst_35971)){
var statearr_35985_38398 = state_35980__$1;
(statearr_35985_38398[(1)] = (5));

} else {
var statearr_35986_38399 = state_35980__$1;
(statearr_35986_38399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (5))){
var state_35980__$1 = state_35980;
var statearr_35987_38401 = state_35980__$1;
(statearr_35987_38401[(2)] = null);

(statearr_35987_38401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (6))){
var state_35980__$1 = state_35980;
var statearr_35988_38405 = state_35980__$1;
(statearr_35988_38405[(2)] = null);

(statearr_35988_38405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (7))){
var inst_35976 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
var statearr_35989_38406 = state_35980__$1;
(statearr_35989_38406[(2)] = inst_35976);

(statearr_35989_38406[(1)] = (3));


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
});})(__38390,c__35785__auto___38394,G__35967_38391,G__35967_38392__$1,n__5636__auto___38389,jobs,results,process__$1,async))
;
return ((function (__38390,switch__35539__auto__,c__35785__auto___38394,G__35967_38391,G__35967_38392__$1,n__5636__auto___38389,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0 = (function (){
var statearr_35990 = [null,null,null,null,null,null,null];
(statearr_35990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__);

(statearr_35990[(1)] = (1));

return statearr_35990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1 = (function (state_35980){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_35980);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e35991){var ex__35543__auto__ = e35991;
var statearr_35992_38410 = state_35980;
(statearr_35992_38410[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_35980[(4)]))){
var statearr_35993_38411 = state_35980;
(statearr_35993_38411[(1)] = cljs.core.first((state_35980[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38412 = state_35980;
state_35980 = G__38412;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__ = function(state_35980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1.call(this,state_35980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__;
})()
;})(__38390,switch__35539__auto__,c__35785__auto___38394,G__35967_38391,G__35967_38392__$1,n__5636__auto___38389,jobs,results,process__$1,async))
})();
var state__35787__auto__ = (function (){var statearr_35995 = f__35786__auto__();
(statearr_35995[(6)] = c__35785__auto___38394);

return statearr_35995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
});})(__38390,c__35785__auto___38394,G__35967_38391,G__35967_38392__$1,n__5636__auto___38389,jobs,results,process__$1,async))
);


break;
case "async":
var c__35785__auto___38413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38390,c__35785__auto___38413,G__35967_38391,G__35967_38392__$1,n__5636__auto___38389,jobs,results,process__$1,async){
return (function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = ((function (__38390,c__35785__auto___38413,G__35967_38391,G__35967_38392__$1,n__5636__auto___38389,jobs,results,process__$1,async){
return (function (state_36013){
var state_val_36014 = (state_36013[(1)]);
if((state_val_36014 === (1))){
var state_36013__$1 = state_36013;
var statearr_36018_38416 = state_36013__$1;
(statearr_36018_38416[(2)] = null);

(statearr_36018_38416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (2))){
var state_36013__$1 = state_36013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36013__$1,(4),jobs);
} else {
if((state_val_36014 === (3))){
var inst_36011 = (state_36013[(2)]);
var state_36013__$1 = state_36013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36013__$1,inst_36011);
} else {
if((state_val_36014 === (4))){
var inst_35999 = (state_36013[(2)]);
var inst_36004 = async(inst_35999);
var state_36013__$1 = state_36013;
if(cljs.core.truth_(inst_36004)){
var statearr_36022_38419 = state_36013__$1;
(statearr_36022_38419[(1)] = (5));

} else {
var statearr_36026_38420 = state_36013__$1;
(statearr_36026_38420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (5))){
var state_36013__$1 = state_36013;
var statearr_36027_38421 = state_36013__$1;
(statearr_36027_38421[(2)] = null);

(statearr_36027_38421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (6))){
var state_36013__$1 = state_36013;
var statearr_36028_38422 = state_36013__$1;
(statearr_36028_38422[(2)] = null);

(statearr_36028_38422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (7))){
var inst_36009 = (state_36013[(2)]);
var state_36013__$1 = state_36013;
var statearr_36032_38423 = state_36013__$1;
(statearr_36032_38423[(2)] = inst_36009);

(statearr_36032_38423[(1)] = (3));


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
});})(__38390,c__35785__auto___38413,G__35967_38391,G__35967_38392__$1,n__5636__auto___38389,jobs,results,process__$1,async))
;
return ((function (__38390,switch__35539__auto__,c__35785__auto___38413,G__35967_38391,G__35967_38392__$1,n__5636__auto___38389,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0 = (function (){
var statearr_36033 = [null,null,null,null,null,null,null];
(statearr_36033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__);

(statearr_36033[(1)] = (1));

return statearr_36033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1 = (function (state_36013){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_36013);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e36034){var ex__35543__auto__ = e36034;
var statearr_36035_38426 = state_36013;
(statearr_36035_38426[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_36013[(4)]))){
var statearr_36036_38431 = state_36013;
(statearr_36036_38431[(1)] = cljs.core.first((state_36013[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38432 = state_36013;
state_36013 = G__38432;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__ = function(state_36013){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1.call(this,state_36013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__;
})()
;})(__38390,switch__35539__auto__,c__35785__auto___38413,G__35967_38391,G__35967_38392__$1,n__5636__auto___38389,jobs,results,process__$1,async))
})();
var state__35787__auto__ = (function (){var statearr_36037 = f__35786__auto__();
(statearr_36037[(6)] = c__35785__auto___38413);

return statearr_36037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
});})(__38390,c__35785__auto___38413,G__35967_38391,G__35967_38392__$1,n__5636__auto___38389,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35967_38392__$1)].join('')));

}

var G__38433 = (__38390 + (1));
__38390 = G__38433;
continue;
} else {
}
break;
}

var c__35785__auto___38434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_36061){
var state_val_36062 = (state_36061[(1)]);
if((state_val_36062 === (7))){
var inst_36057 = (state_36061[(2)]);
var state_36061__$1 = state_36061;
var statearr_36066_38436 = state_36061__$1;
(statearr_36066_38436[(2)] = inst_36057);

(statearr_36066_38436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36062 === (1))){
var state_36061__$1 = state_36061;
var statearr_36067_38437 = state_36061__$1;
(statearr_36067_38437[(2)] = null);

(statearr_36067_38437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36062 === (4))){
var inst_36040 = (state_36061[(7)]);
var inst_36040__$1 = (state_36061[(2)]);
var inst_36041 = (inst_36040__$1 == null);
var state_36061__$1 = (function (){var statearr_36068 = state_36061;
(statearr_36068[(7)] = inst_36040__$1);

return statearr_36068;
})();
if(cljs.core.truth_(inst_36041)){
var statearr_36069_38438 = state_36061__$1;
(statearr_36069_38438[(1)] = (5));

} else {
var statearr_36070_38439 = state_36061__$1;
(statearr_36070_38439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36062 === (6))){
var inst_36040 = (state_36061[(7)]);
var inst_36045 = (state_36061[(8)]);
var inst_36045__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36048 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36049 = [inst_36040,inst_36045__$1];
var inst_36050 = (new cljs.core.PersistentVector(null,2,(5),inst_36048,inst_36049,null));
var state_36061__$1 = (function (){var statearr_36071 = state_36061;
(statearr_36071[(8)] = inst_36045__$1);

return statearr_36071;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36061__$1,(8),jobs,inst_36050);
} else {
if((state_val_36062 === (3))){
var inst_36059 = (state_36061[(2)]);
var state_36061__$1 = state_36061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36061__$1,inst_36059);
} else {
if((state_val_36062 === (2))){
var state_36061__$1 = state_36061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36061__$1,(4),from);
} else {
if((state_val_36062 === (9))){
var inst_36054 = (state_36061[(2)]);
var state_36061__$1 = (function (){var statearr_36072 = state_36061;
(statearr_36072[(9)] = inst_36054);

return statearr_36072;
})();
var statearr_36073_38451 = state_36061__$1;
(statearr_36073_38451[(2)] = null);

(statearr_36073_38451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36062 === (5))){
var inst_36043 = cljs.core.async.close_BANG_(jobs);
var state_36061__$1 = state_36061;
var statearr_36074_38453 = state_36061__$1;
(statearr_36074_38453[(2)] = inst_36043);

(statearr_36074_38453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36062 === (8))){
var inst_36045 = (state_36061[(8)]);
var inst_36052 = (state_36061[(2)]);
var state_36061__$1 = (function (){var statearr_36075 = state_36061;
(statearr_36075[(10)] = inst_36052);

return statearr_36075;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36061__$1,(9),results,inst_36045);
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
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0 = (function (){
var statearr_36076 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36076[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__);

(statearr_36076[(1)] = (1));

return statearr_36076;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1 = (function (state_36061){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_36061);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e36077){var ex__35543__auto__ = e36077;
var statearr_36078_38456 = state_36061;
(statearr_36078_38456[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_36061[(4)]))){
var statearr_36079_38457 = state_36061;
(statearr_36079_38457[(1)] = cljs.core.first((state_36061[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38458 = state_36061;
state_36061 = G__38458;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__ = function(state_36061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1.call(this,state_36061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_36080 = f__35786__auto__();
(statearr_36080[(6)] = c__35785__auto___38434);

return statearr_36080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
}));


var c__35785__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_36118){
var state_val_36119 = (state_36118[(1)]);
if((state_val_36119 === (7))){
var inst_36114 = (state_36118[(2)]);
var state_36118__$1 = state_36118;
var statearr_36121_38464 = state_36118__$1;
(statearr_36121_38464[(2)] = inst_36114);

(statearr_36121_38464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (20))){
var state_36118__$1 = state_36118;
var statearr_36122_38466 = state_36118__$1;
(statearr_36122_38466[(2)] = null);

(statearr_36122_38466[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (1))){
var state_36118__$1 = state_36118;
var statearr_36123_38467 = state_36118__$1;
(statearr_36123_38467[(2)] = null);

(statearr_36123_38467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (4))){
var inst_36083 = (state_36118[(7)]);
var inst_36083__$1 = (state_36118[(2)]);
var inst_36084 = (inst_36083__$1 == null);
var state_36118__$1 = (function (){var statearr_36124 = state_36118;
(statearr_36124[(7)] = inst_36083__$1);

return statearr_36124;
})();
if(cljs.core.truth_(inst_36084)){
var statearr_36125_38471 = state_36118__$1;
(statearr_36125_38471[(1)] = (5));

} else {
var statearr_36126_38472 = state_36118__$1;
(statearr_36126_38472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (15))){
var inst_36096 = (state_36118[(8)]);
var state_36118__$1 = state_36118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36118__$1,(18),to,inst_36096);
} else {
if((state_val_36119 === (21))){
var inst_36109 = (state_36118[(2)]);
var state_36118__$1 = state_36118;
var statearr_36128_38473 = state_36118__$1;
(statearr_36128_38473[(2)] = inst_36109);

(statearr_36128_38473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (13))){
var inst_36111 = (state_36118[(2)]);
var state_36118__$1 = (function (){var statearr_36129 = state_36118;
(statearr_36129[(9)] = inst_36111);

return statearr_36129;
})();
var statearr_36130_38474 = state_36118__$1;
(statearr_36130_38474[(2)] = null);

(statearr_36130_38474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (6))){
var inst_36083 = (state_36118[(7)]);
var state_36118__$1 = state_36118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36118__$1,(11),inst_36083);
} else {
if((state_val_36119 === (17))){
var inst_36104 = (state_36118[(2)]);
var state_36118__$1 = state_36118;
if(cljs.core.truth_(inst_36104)){
var statearr_36131_38475 = state_36118__$1;
(statearr_36131_38475[(1)] = (19));

} else {
var statearr_36133_38476 = state_36118__$1;
(statearr_36133_38476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (3))){
var inst_36116 = (state_36118[(2)]);
var state_36118__$1 = state_36118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36118__$1,inst_36116);
} else {
if((state_val_36119 === (12))){
var inst_36093 = (state_36118[(10)]);
var state_36118__$1 = state_36118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36118__$1,(14),inst_36093);
} else {
if((state_val_36119 === (2))){
var state_36118__$1 = state_36118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36118__$1,(4),results);
} else {
if((state_val_36119 === (19))){
var state_36118__$1 = state_36118;
var statearr_36134_38479 = state_36118__$1;
(statearr_36134_38479[(2)] = null);

(statearr_36134_38479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (11))){
var inst_36093 = (state_36118[(2)]);
var state_36118__$1 = (function (){var statearr_36135 = state_36118;
(statearr_36135[(10)] = inst_36093);

return statearr_36135;
})();
var statearr_36136_38481 = state_36118__$1;
(statearr_36136_38481[(2)] = null);

(statearr_36136_38481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (9))){
var state_36118__$1 = state_36118;
var statearr_36137_38484 = state_36118__$1;
(statearr_36137_38484[(2)] = null);

(statearr_36137_38484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (5))){
var state_36118__$1 = state_36118;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36138_38486 = state_36118__$1;
(statearr_36138_38486[(1)] = (8));

} else {
var statearr_36139_38487 = state_36118__$1;
(statearr_36139_38487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (14))){
var inst_36096 = (state_36118[(8)]);
var inst_36098 = (state_36118[(11)]);
var inst_36096__$1 = (state_36118[(2)]);
var inst_36097 = (inst_36096__$1 == null);
var inst_36098__$1 = cljs.core.not(inst_36097);
var state_36118__$1 = (function (){var statearr_36141 = state_36118;
(statearr_36141[(8)] = inst_36096__$1);

(statearr_36141[(11)] = inst_36098__$1);

return statearr_36141;
})();
if(inst_36098__$1){
var statearr_36143_38488 = state_36118__$1;
(statearr_36143_38488[(1)] = (15));

} else {
var statearr_36144_38489 = state_36118__$1;
(statearr_36144_38489[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (16))){
var inst_36098 = (state_36118[(11)]);
var state_36118__$1 = state_36118;
var statearr_36145_38490 = state_36118__$1;
(statearr_36145_38490[(2)] = inst_36098);

(statearr_36145_38490[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (10))){
var inst_36090 = (state_36118[(2)]);
var state_36118__$1 = state_36118;
var statearr_36146_38491 = state_36118__$1;
(statearr_36146_38491[(2)] = inst_36090);

(statearr_36146_38491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (18))){
var inst_36101 = (state_36118[(2)]);
var state_36118__$1 = state_36118;
var statearr_36153_38492 = state_36118__$1;
(statearr_36153_38492[(2)] = inst_36101);

(statearr_36153_38492[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36119 === (8))){
var inst_36087 = cljs.core.async.close_BANG_(to);
var state_36118__$1 = state_36118;
var statearr_36160_38493 = state_36118__$1;
(statearr_36160_38493[(2)] = inst_36087);

(statearr_36160_38493[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0 = (function (){
var statearr_36172 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__);

(statearr_36172[(1)] = (1));

return statearr_36172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1 = (function (state_36118){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_36118);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e36173){var ex__35543__auto__ = e36173;
var statearr_36174_38494 = state_36118;
(statearr_36174_38494[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_36118[(4)]))){
var statearr_36175_38495 = state_36118;
(statearr_36175_38495[(1)] = cljs.core.first((state_36118[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38496 = state_36118;
state_36118 = G__38496;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__ = function(state_36118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1.call(this,state_36118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_36177 = f__35786__auto__();
(statearr_36177[(6)] = c__35785__auto__);

return statearr_36177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
}));

return c__35785__auto__;
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
var G__36181 = arguments.length;
switch (G__36181) {
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
var G__36187 = arguments.length;
switch (G__36187) {
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
var G__36214 = arguments.length;
switch (G__36214) {
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
var c__35785__auto___38507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_36261){
var state_val_36262 = (state_36261[(1)]);
if((state_val_36262 === (7))){
var inst_36253 = (state_36261[(2)]);
var state_36261__$1 = state_36261;
var statearr_36274_38514 = state_36261__$1;
(statearr_36274_38514[(2)] = inst_36253);

(statearr_36274_38514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (1))){
var state_36261__$1 = state_36261;
var statearr_36278_38515 = state_36261__$1;
(statearr_36278_38515[(2)] = null);

(statearr_36278_38515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (4))){
var inst_36222 = (state_36261[(7)]);
var inst_36222__$1 = (state_36261[(2)]);
var inst_36227 = (inst_36222__$1 == null);
var state_36261__$1 = (function (){var statearr_36289 = state_36261;
(statearr_36289[(7)] = inst_36222__$1);

return statearr_36289;
})();
if(cljs.core.truth_(inst_36227)){
var statearr_36290_38520 = state_36261__$1;
(statearr_36290_38520[(1)] = (5));

} else {
var statearr_36291_38521 = state_36261__$1;
(statearr_36291_38521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (13))){
var state_36261__$1 = state_36261;
var statearr_36292_38522 = state_36261__$1;
(statearr_36292_38522[(2)] = null);

(statearr_36292_38522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (6))){
var inst_36222 = (state_36261[(7)]);
var inst_36239 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36222) : p.call(null,inst_36222));
var state_36261__$1 = state_36261;
if(cljs.core.truth_(inst_36239)){
var statearr_36293_38523 = state_36261__$1;
(statearr_36293_38523[(1)] = (9));

} else {
var statearr_36294_38524 = state_36261__$1;
(statearr_36294_38524[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (3))){
var inst_36259 = (state_36261[(2)]);
var state_36261__$1 = state_36261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36261__$1,inst_36259);
} else {
if((state_val_36262 === (12))){
var state_36261__$1 = state_36261;
var statearr_36298_38528 = state_36261__$1;
(statearr_36298_38528[(2)] = null);

(statearr_36298_38528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (2))){
var state_36261__$1 = state_36261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36261__$1,(4),ch);
} else {
if((state_val_36262 === (11))){
var inst_36222 = (state_36261[(7)]);
var inst_36243 = (state_36261[(2)]);
var state_36261__$1 = state_36261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36261__$1,(8),inst_36243,inst_36222);
} else {
if((state_val_36262 === (9))){
var state_36261__$1 = state_36261;
var statearr_36304_38532 = state_36261__$1;
(statearr_36304_38532[(2)] = tc);

(statearr_36304_38532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (5))){
var inst_36230 = cljs.core.async.close_BANG_(tc);
var inst_36232 = cljs.core.async.close_BANG_(fc);
var state_36261__$1 = (function (){var statearr_36309 = state_36261;
(statearr_36309[(8)] = inst_36230);

return statearr_36309;
})();
var statearr_36318_38533 = state_36261__$1;
(statearr_36318_38533[(2)] = inst_36232);

(statearr_36318_38533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (14))){
var inst_36251 = (state_36261[(2)]);
var state_36261__$1 = state_36261;
var statearr_36322_38534 = state_36261__$1;
(statearr_36322_38534[(2)] = inst_36251);

(statearr_36322_38534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (10))){
var state_36261__$1 = state_36261;
var statearr_36334_38535 = state_36261__$1;
(statearr_36334_38535[(2)] = fc);

(statearr_36334_38535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (8))){
var inst_36245 = (state_36261[(2)]);
var state_36261__$1 = state_36261;
if(cljs.core.truth_(inst_36245)){
var statearr_36335_38537 = state_36261__$1;
(statearr_36335_38537[(1)] = (12));

} else {
var statearr_36336_38541 = state_36261__$1;
(statearr_36336_38541[(1)] = (13));

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
var cljs$core$async$state_machine__35540__auto__ = null;
var cljs$core$async$state_machine__35540__auto____0 = (function (){
var statearr_36337 = [null,null,null,null,null,null,null,null,null];
(statearr_36337[(0)] = cljs$core$async$state_machine__35540__auto__);

(statearr_36337[(1)] = (1));

return statearr_36337;
});
var cljs$core$async$state_machine__35540__auto____1 = (function (state_36261){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_36261);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e36338){var ex__35543__auto__ = e36338;
var statearr_36339_38542 = state_36261;
(statearr_36339_38542[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_36261[(4)]))){
var statearr_36340_38543 = state_36261;
(statearr_36340_38543[(1)] = cljs.core.first((state_36261[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38544 = state_36261;
state_36261 = G__38544;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$state_machine__35540__auto__ = function(state_36261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35540__auto____1.call(this,state_36261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35540__auto____0;
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35540__auto____1;
return cljs$core$async$state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_36345 = f__35786__auto__();
(statearr_36345[(6)] = c__35785__auto___38507);

return statearr_36345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
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
var c__35785__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_36371){
var state_val_36372 = (state_36371[(1)]);
if((state_val_36372 === (7))){
var inst_36367 = (state_36371[(2)]);
var state_36371__$1 = state_36371;
var statearr_36373_38547 = state_36371__$1;
(statearr_36373_38547[(2)] = inst_36367);

(statearr_36373_38547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36372 === (1))){
var inst_36348 = init;
var inst_36349 = inst_36348;
var state_36371__$1 = (function (){var statearr_36374 = state_36371;
(statearr_36374[(7)] = inst_36349);

return statearr_36374;
})();
var statearr_36377_38548 = state_36371__$1;
(statearr_36377_38548[(2)] = null);

(statearr_36377_38548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36372 === (4))){
var inst_36353 = (state_36371[(8)]);
var inst_36353__$1 = (state_36371[(2)]);
var inst_36355 = (inst_36353__$1 == null);
var state_36371__$1 = (function (){var statearr_36380 = state_36371;
(statearr_36380[(8)] = inst_36353__$1);

return statearr_36380;
})();
if(cljs.core.truth_(inst_36355)){
var statearr_36381_38549 = state_36371__$1;
(statearr_36381_38549[(1)] = (5));

} else {
var statearr_36382_38550 = state_36371__$1;
(statearr_36382_38550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36372 === (6))){
var inst_36349 = (state_36371[(7)]);
var inst_36358 = (state_36371[(9)]);
var inst_36353 = (state_36371[(8)]);
var inst_36358__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36349,inst_36353) : f.call(null,inst_36349,inst_36353));
var inst_36359 = cljs.core.reduced_QMARK_(inst_36358__$1);
var state_36371__$1 = (function (){var statearr_36385 = state_36371;
(statearr_36385[(9)] = inst_36358__$1);

return statearr_36385;
})();
if(inst_36359){
var statearr_36391_38551 = state_36371__$1;
(statearr_36391_38551[(1)] = (8));

} else {
var statearr_36392_38552 = state_36371__$1;
(statearr_36392_38552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36372 === (3))){
var inst_36369 = (state_36371[(2)]);
var state_36371__$1 = state_36371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36371__$1,inst_36369);
} else {
if((state_val_36372 === (2))){
var state_36371__$1 = state_36371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36371__$1,(4),ch);
} else {
if((state_val_36372 === (9))){
var inst_36358 = (state_36371[(9)]);
var inst_36349 = inst_36358;
var state_36371__$1 = (function (){var statearr_36393 = state_36371;
(statearr_36393[(7)] = inst_36349);

return statearr_36393;
})();
var statearr_36394_38553 = state_36371__$1;
(statearr_36394_38553[(2)] = null);

(statearr_36394_38553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36372 === (5))){
var inst_36349 = (state_36371[(7)]);
var state_36371__$1 = state_36371;
var statearr_36397_38557 = state_36371__$1;
(statearr_36397_38557[(2)] = inst_36349);

(statearr_36397_38557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36372 === (10))){
var inst_36365 = (state_36371[(2)]);
var state_36371__$1 = state_36371;
var statearr_36398_38558 = state_36371__$1;
(statearr_36398_38558[(2)] = inst_36365);

(statearr_36398_38558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36372 === (8))){
var inst_36358 = (state_36371[(9)]);
var inst_36361 = cljs.core.deref(inst_36358);
var state_36371__$1 = state_36371;
var statearr_36399_38560 = state_36371__$1;
(statearr_36399_38560[(2)] = inst_36361);

(statearr_36399_38560[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__35540__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35540__auto____0 = (function (){
var statearr_36402 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36402[(0)] = cljs$core$async$reduce_$_state_machine__35540__auto__);

(statearr_36402[(1)] = (1));

return statearr_36402;
});
var cljs$core$async$reduce_$_state_machine__35540__auto____1 = (function (state_36371){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_36371);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e36403){var ex__35543__auto__ = e36403;
var statearr_36404_38566 = state_36371;
(statearr_36404_38566[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_36371[(4)]))){
var statearr_36405_38570 = state_36371;
(statearr_36405_38570[(1)] = cljs.core.first((state_36371[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38571 = state_36371;
state_36371 = G__38571;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35540__auto__ = function(state_36371){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35540__auto____1.call(this,state_36371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35540__auto____0;
cljs$core$async$reduce_$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35540__auto____1;
return cljs$core$async$reduce_$_state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_36408 = f__35786__auto__();
(statearr_36408[(6)] = c__35785__auto__);

return statearr_36408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
}));

return c__35785__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35785__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_36422){
var state_val_36423 = (state_36422[(1)]);
if((state_val_36423 === (1))){
var inst_36411 = cljs.core.async.reduce(f__$1,init,ch);
var state_36422__$1 = state_36422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36422__$1,(2),inst_36411);
} else {
if((state_val_36423 === (2))){
var inst_36413 = (state_36422[(2)]);
var inst_36420 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36413) : f__$1.call(null,inst_36413));
var state_36422__$1 = state_36422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36422__$1,inst_36420);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35540__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35540__auto____0 = (function (){
var statearr_36428 = [null,null,null,null,null,null,null];
(statearr_36428[(0)] = cljs$core$async$transduce_$_state_machine__35540__auto__);

(statearr_36428[(1)] = (1));

return statearr_36428;
});
var cljs$core$async$transduce_$_state_machine__35540__auto____1 = (function (state_36422){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_36422);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e36429){var ex__35543__auto__ = e36429;
var statearr_36430_38579 = state_36422;
(statearr_36430_38579[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_36422[(4)]))){
var statearr_36431_38580 = state_36422;
(statearr_36431_38580[(1)] = cljs.core.first((state_36422[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38581 = state_36422;
state_36422 = G__38581;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35540__auto__ = function(state_36422){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35540__auto____1.call(this,state_36422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35540__auto____0;
cljs$core$async$transduce_$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35540__auto____1;
return cljs$core$async$transduce_$_state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_36433 = f__35786__auto__();
(statearr_36433[(6)] = c__35785__auto__);

return statearr_36433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
}));

return c__35785__auto__;
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
var G__36439 = arguments.length;
switch (G__36439) {
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
var c__35785__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_36486){
var state_val_36487 = (state_36486[(1)]);
if((state_val_36487 === (7))){
var inst_36468 = (state_36486[(2)]);
var state_36486__$1 = state_36486;
var statearr_36488_38587 = state_36486__$1;
(statearr_36488_38587[(2)] = inst_36468);

(statearr_36488_38587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36487 === (1))){
var inst_36462 = cljs.core.seq(coll);
var inst_36463 = inst_36462;
var state_36486__$1 = (function (){var statearr_36490 = state_36486;
(statearr_36490[(7)] = inst_36463);

return statearr_36490;
})();
var statearr_36494_38588 = state_36486__$1;
(statearr_36494_38588[(2)] = null);

(statearr_36494_38588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36487 === (4))){
var inst_36463 = (state_36486[(7)]);
var inst_36466 = cljs.core.first(inst_36463);
var state_36486__$1 = state_36486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36486__$1,(7),ch,inst_36466);
} else {
if((state_val_36487 === (13))){
var inst_36480 = (state_36486[(2)]);
var state_36486__$1 = state_36486;
var statearr_36495_38592 = state_36486__$1;
(statearr_36495_38592[(2)] = inst_36480);

(statearr_36495_38592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36487 === (6))){
var inst_36471 = (state_36486[(2)]);
var state_36486__$1 = state_36486;
if(cljs.core.truth_(inst_36471)){
var statearr_36496_38593 = state_36486__$1;
(statearr_36496_38593[(1)] = (8));

} else {
var statearr_36497_38594 = state_36486__$1;
(statearr_36497_38594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36487 === (3))){
var inst_36484 = (state_36486[(2)]);
var state_36486__$1 = state_36486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36486__$1,inst_36484);
} else {
if((state_val_36487 === (12))){
var state_36486__$1 = state_36486;
var statearr_36501_38595 = state_36486__$1;
(statearr_36501_38595[(2)] = null);

(statearr_36501_38595[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36487 === (2))){
var inst_36463 = (state_36486[(7)]);
var state_36486__$1 = state_36486;
if(cljs.core.truth_(inst_36463)){
var statearr_36503_38612 = state_36486__$1;
(statearr_36503_38612[(1)] = (4));

} else {
var statearr_36504_38613 = state_36486__$1;
(statearr_36504_38613[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36487 === (11))){
var inst_36477 = cljs.core.async.close_BANG_(ch);
var state_36486__$1 = state_36486;
var statearr_36505_38614 = state_36486__$1;
(statearr_36505_38614[(2)] = inst_36477);

(statearr_36505_38614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36487 === (9))){
var state_36486__$1 = state_36486;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36506_38615 = state_36486__$1;
(statearr_36506_38615[(1)] = (11));

} else {
var statearr_36507_38616 = state_36486__$1;
(statearr_36507_38616[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36487 === (5))){
var inst_36463 = (state_36486[(7)]);
var state_36486__$1 = state_36486;
var statearr_36510_38618 = state_36486__$1;
(statearr_36510_38618[(2)] = inst_36463);

(statearr_36510_38618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36487 === (10))){
var inst_36482 = (state_36486[(2)]);
var state_36486__$1 = state_36486;
var statearr_36511_38619 = state_36486__$1;
(statearr_36511_38619[(2)] = inst_36482);

(statearr_36511_38619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36487 === (8))){
var inst_36463 = (state_36486[(7)]);
var inst_36473 = cljs.core.next(inst_36463);
var inst_36463__$1 = inst_36473;
var state_36486__$1 = (function (){var statearr_36521 = state_36486;
(statearr_36521[(7)] = inst_36463__$1);

return statearr_36521;
})();
var statearr_36534_38624 = state_36486__$1;
(statearr_36534_38624[(2)] = null);

(statearr_36534_38624[(1)] = (2));


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
var cljs$core$async$state_machine__35540__auto__ = null;
var cljs$core$async$state_machine__35540__auto____0 = (function (){
var statearr_36540 = [null,null,null,null,null,null,null,null];
(statearr_36540[(0)] = cljs$core$async$state_machine__35540__auto__);

(statearr_36540[(1)] = (1));

return statearr_36540;
});
var cljs$core$async$state_machine__35540__auto____1 = (function (state_36486){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_36486);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e36543){var ex__35543__auto__ = e36543;
var statearr_36546_38625 = state_36486;
(statearr_36546_38625[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_36486[(4)]))){
var statearr_36547_38626 = state_36486;
(statearr_36547_38626[(1)] = cljs.core.first((state_36486[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38627 = state_36486;
state_36486 = G__38627;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$state_machine__35540__auto__ = function(state_36486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35540__auto____1.call(this,state_36486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35540__auto____0;
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35540__auto____1;
return cljs$core$async$state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_36551 = f__35786__auto__();
(statearr_36551[(6)] = c__35785__auto__);

return statearr_36551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
}));

return c__35785__auto__;
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
var G__36562 = arguments.length;
switch (G__36562) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_38629 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_38629(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_38630 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_38630(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_38631 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_38631(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_38632 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_38632(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36586 = (function (ch,cs,meta36587){
this.ch = ch;
this.cs = cs;
this.meta36587 = meta36587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36588,meta36587__$1){
var self__ = this;
var _36588__$1 = this;
return (new cljs.core.async.t_cljs$core$async36586(self__.ch,self__.cs,meta36587__$1));
}));

(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36588){
var self__ = this;
var _36588__$1 = this;
return self__.meta36587;
}));

(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36586.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36587","meta36587",-626695512,null)], null);
}));

(cljs.core.async.t_cljs$core$async36586.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36586");

(cljs.core.async.t_cljs$core$async36586.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36586");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36586.
 */
cljs.core.async.__GT_t_cljs$core$async36586 = (function cljs$core$async$__GT_t_cljs$core$async36586(ch,cs,meta36587){
return (new cljs.core.async.t_cljs$core$async36586(ch,cs,meta36587));
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
var m = (new cljs.core.async.t_cljs$core$async36586(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__35785__auto___38635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_36756){
var state_val_36759 = (state_36756[(1)]);
if((state_val_36759 === (7))){
var inst_36750 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36760_38636 = state_36756__$1;
(statearr_36760_38636[(2)] = inst_36750);

(statearr_36760_38636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (20))){
var inst_36649 = (state_36756[(7)]);
var inst_36663 = cljs.core.first(inst_36649);
var inst_36665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36663,(0),null);
var inst_36666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36663,(1),null);
var state_36756__$1 = (function (){var statearr_36761 = state_36756;
(statearr_36761[(8)] = inst_36665);

return statearr_36761;
})();
if(cljs.core.truth_(inst_36666)){
var statearr_36763_38640 = state_36756__$1;
(statearr_36763_38640[(1)] = (22));

} else {
var statearr_36764_38641 = state_36756__$1;
(statearr_36764_38641[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (27))){
var inst_36697 = (state_36756[(9)]);
var inst_36703 = (state_36756[(10)]);
var inst_36614 = (state_36756[(11)]);
var inst_36695 = (state_36756[(12)]);
var inst_36703__$1 = cljs.core._nth(inst_36695,inst_36697);
var inst_36704 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36703__$1,inst_36614,done);
var state_36756__$1 = (function (){var statearr_36767 = state_36756;
(statearr_36767[(10)] = inst_36703__$1);

return statearr_36767;
})();
if(cljs.core.truth_(inst_36704)){
var statearr_36769_38642 = state_36756__$1;
(statearr_36769_38642[(1)] = (30));

} else {
var statearr_36771_38643 = state_36756__$1;
(statearr_36771_38643[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (1))){
var state_36756__$1 = state_36756;
var statearr_36772_38644 = state_36756__$1;
(statearr_36772_38644[(2)] = null);

(statearr_36772_38644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (24))){
var inst_36649 = (state_36756[(7)]);
var inst_36671 = (state_36756[(2)]);
var inst_36672 = cljs.core.next(inst_36649);
var inst_36623 = inst_36672;
var inst_36624 = null;
var inst_36625 = (0);
var inst_36626 = (0);
var state_36756__$1 = (function (){var statearr_36776 = state_36756;
(statearr_36776[(13)] = inst_36624);

(statearr_36776[(14)] = inst_36671);

(statearr_36776[(15)] = inst_36625);

(statearr_36776[(16)] = inst_36623);

(statearr_36776[(17)] = inst_36626);

return statearr_36776;
})();
var statearr_36777_38646 = state_36756__$1;
(statearr_36777_38646[(2)] = null);

(statearr_36777_38646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (39))){
var state_36756__$1 = state_36756;
var statearr_36782_38647 = state_36756__$1;
(statearr_36782_38647[(2)] = null);

(statearr_36782_38647[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (4))){
var inst_36614 = (state_36756[(11)]);
var inst_36614__$1 = (state_36756[(2)]);
var inst_36615 = (inst_36614__$1 == null);
var state_36756__$1 = (function (){var statearr_36788 = state_36756;
(statearr_36788[(11)] = inst_36614__$1);

return statearr_36788;
})();
if(cljs.core.truth_(inst_36615)){
var statearr_36792_38649 = state_36756__$1;
(statearr_36792_38649[(1)] = (5));

} else {
var statearr_36794_38650 = state_36756__$1;
(statearr_36794_38650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (15))){
var inst_36624 = (state_36756[(13)]);
var inst_36625 = (state_36756[(15)]);
var inst_36623 = (state_36756[(16)]);
var inst_36626 = (state_36756[(17)]);
var inst_36645 = (state_36756[(2)]);
var inst_36646 = (inst_36626 + (1));
var tmp36779 = inst_36624;
var tmp36780 = inst_36625;
var tmp36781 = inst_36623;
var inst_36623__$1 = tmp36781;
var inst_36624__$1 = tmp36779;
var inst_36625__$1 = tmp36780;
var inst_36626__$1 = inst_36646;
var state_36756__$1 = (function (){var statearr_36805 = state_36756;
(statearr_36805[(18)] = inst_36645);

(statearr_36805[(13)] = inst_36624__$1);

(statearr_36805[(15)] = inst_36625__$1);

(statearr_36805[(16)] = inst_36623__$1);

(statearr_36805[(17)] = inst_36626__$1);

return statearr_36805;
})();
var statearr_36806_38652 = state_36756__$1;
(statearr_36806_38652[(2)] = null);

(statearr_36806_38652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (21))){
var inst_36675 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36811_38653 = state_36756__$1;
(statearr_36811_38653[(2)] = inst_36675);

(statearr_36811_38653[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (31))){
var inst_36703 = (state_36756[(10)]);
var inst_36707 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36703);
var state_36756__$1 = state_36756;
var statearr_36812_38654 = state_36756__$1;
(statearr_36812_38654[(2)] = inst_36707);

(statearr_36812_38654[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (32))){
var inst_36697 = (state_36756[(9)]);
var inst_36694 = (state_36756[(19)]);
var inst_36696 = (state_36756[(20)]);
var inst_36695 = (state_36756[(12)]);
var inst_36709 = (state_36756[(2)]);
var inst_36710 = (inst_36697 + (1));
var tmp36807 = inst_36694;
var tmp36808 = inst_36696;
var tmp36809 = inst_36695;
var inst_36694__$1 = tmp36807;
var inst_36695__$1 = tmp36809;
var inst_36696__$1 = tmp36808;
var inst_36697__$1 = inst_36710;
var state_36756__$1 = (function (){var statearr_36818 = state_36756;
(statearr_36818[(9)] = inst_36697__$1);

(statearr_36818[(21)] = inst_36709);

(statearr_36818[(19)] = inst_36694__$1);

(statearr_36818[(20)] = inst_36696__$1);

(statearr_36818[(12)] = inst_36695__$1);

return statearr_36818;
})();
var statearr_36819_38655 = state_36756__$1;
(statearr_36819_38655[(2)] = null);

(statearr_36819_38655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (40))){
var inst_36722 = (state_36756[(22)]);
var inst_36726 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36722);
var state_36756__$1 = state_36756;
var statearr_36821_38657 = state_36756__$1;
(statearr_36821_38657[(2)] = inst_36726);

(statearr_36821_38657[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (33))){
var inst_36713 = (state_36756[(23)]);
var inst_36715 = cljs.core.chunked_seq_QMARK_(inst_36713);
var state_36756__$1 = state_36756;
if(inst_36715){
var statearr_36822_38658 = state_36756__$1;
(statearr_36822_38658[(1)] = (36));

} else {
var statearr_36823_38660 = state_36756__$1;
(statearr_36823_38660[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (13))){
var inst_36639 = (state_36756[(24)]);
var inst_36642 = cljs.core.async.close_BANG_(inst_36639);
var state_36756__$1 = state_36756;
var statearr_36828_38664 = state_36756__$1;
(statearr_36828_38664[(2)] = inst_36642);

(statearr_36828_38664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (22))){
var inst_36665 = (state_36756[(8)]);
var inst_36668 = cljs.core.async.close_BANG_(inst_36665);
var state_36756__$1 = state_36756;
var statearr_36829_38665 = state_36756__$1;
(statearr_36829_38665[(2)] = inst_36668);

(statearr_36829_38665[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (36))){
var inst_36713 = (state_36756[(23)]);
var inst_36717 = cljs.core.chunk_first(inst_36713);
var inst_36718 = cljs.core.chunk_rest(inst_36713);
var inst_36719 = cljs.core.count(inst_36717);
var inst_36694 = inst_36718;
var inst_36695 = inst_36717;
var inst_36696 = inst_36719;
var inst_36697 = (0);
var state_36756__$1 = (function (){var statearr_36830 = state_36756;
(statearr_36830[(9)] = inst_36697);

(statearr_36830[(19)] = inst_36694);

(statearr_36830[(20)] = inst_36696);

(statearr_36830[(12)] = inst_36695);

return statearr_36830;
})();
var statearr_36831_38668 = state_36756__$1;
(statearr_36831_38668[(2)] = null);

(statearr_36831_38668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (41))){
var inst_36713 = (state_36756[(23)]);
var inst_36728 = (state_36756[(2)]);
var inst_36729 = cljs.core.next(inst_36713);
var inst_36694 = inst_36729;
var inst_36695 = null;
var inst_36696 = (0);
var inst_36697 = (0);
var state_36756__$1 = (function (){var statearr_36832 = state_36756;
(statearr_36832[(9)] = inst_36697);

(statearr_36832[(19)] = inst_36694);

(statearr_36832[(25)] = inst_36728);

(statearr_36832[(20)] = inst_36696);

(statearr_36832[(12)] = inst_36695);

return statearr_36832;
})();
var statearr_36833_38671 = state_36756__$1;
(statearr_36833_38671[(2)] = null);

(statearr_36833_38671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (43))){
var state_36756__$1 = state_36756;
var statearr_36834_38672 = state_36756__$1;
(statearr_36834_38672[(2)] = null);

(statearr_36834_38672[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (29))){
var inst_36737 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36835_38673 = state_36756__$1;
(statearr_36835_38673[(2)] = inst_36737);

(statearr_36835_38673[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (44))){
var inst_36747 = (state_36756[(2)]);
var state_36756__$1 = (function (){var statearr_36839 = state_36756;
(statearr_36839[(26)] = inst_36747);

return statearr_36839;
})();
var statearr_36840_38680 = state_36756__$1;
(statearr_36840_38680[(2)] = null);

(statearr_36840_38680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (6))){
var inst_36685 = (state_36756[(27)]);
var inst_36684 = cljs.core.deref(cs);
var inst_36685__$1 = cljs.core.keys(inst_36684);
var inst_36686 = cljs.core.count(inst_36685__$1);
var inst_36687 = cljs.core.reset_BANG_(dctr,inst_36686);
var inst_36692 = cljs.core.seq(inst_36685__$1);
var inst_36694 = inst_36692;
var inst_36695 = null;
var inst_36696 = (0);
var inst_36697 = (0);
var state_36756__$1 = (function (){var statearr_36844 = state_36756;
(statearr_36844[(9)] = inst_36697);

(statearr_36844[(19)] = inst_36694);

(statearr_36844[(28)] = inst_36687);

(statearr_36844[(27)] = inst_36685__$1);

(statearr_36844[(20)] = inst_36696);

(statearr_36844[(12)] = inst_36695);

return statearr_36844;
})();
var statearr_36845_38691 = state_36756__$1;
(statearr_36845_38691[(2)] = null);

(statearr_36845_38691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (28))){
var inst_36694 = (state_36756[(19)]);
var inst_36713 = (state_36756[(23)]);
var inst_36713__$1 = cljs.core.seq(inst_36694);
var state_36756__$1 = (function (){var statearr_36846 = state_36756;
(statearr_36846[(23)] = inst_36713__$1);

return statearr_36846;
})();
if(inst_36713__$1){
var statearr_36851_38695 = state_36756__$1;
(statearr_36851_38695[(1)] = (33));

} else {
var statearr_36852_38696 = state_36756__$1;
(statearr_36852_38696[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (25))){
var inst_36697 = (state_36756[(9)]);
var inst_36696 = (state_36756[(20)]);
var inst_36700 = (inst_36697 < inst_36696);
var inst_36701 = inst_36700;
var state_36756__$1 = state_36756;
if(cljs.core.truth_(inst_36701)){
var statearr_36856_38697 = state_36756__$1;
(statearr_36856_38697[(1)] = (27));

} else {
var statearr_36857_38698 = state_36756__$1;
(statearr_36857_38698[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (34))){
var state_36756__$1 = state_36756;
var statearr_36858_38699 = state_36756__$1;
(statearr_36858_38699[(2)] = null);

(statearr_36858_38699[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (17))){
var state_36756__$1 = state_36756;
var statearr_36859_38700 = state_36756__$1;
(statearr_36859_38700[(2)] = null);

(statearr_36859_38700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (3))){
var inst_36752 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36756__$1,inst_36752);
} else {
if((state_val_36759 === (12))){
var inst_36680 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36863_38701 = state_36756__$1;
(statearr_36863_38701[(2)] = inst_36680);

(statearr_36863_38701[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (2))){
var state_36756__$1 = state_36756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36756__$1,(4),ch);
} else {
if((state_val_36759 === (23))){
var state_36756__$1 = state_36756;
var statearr_36867_38702 = state_36756__$1;
(statearr_36867_38702[(2)] = null);

(statearr_36867_38702[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (35))){
var inst_36735 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36868_38703 = state_36756__$1;
(statearr_36868_38703[(2)] = inst_36735);

(statearr_36868_38703[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (19))){
var inst_36649 = (state_36756[(7)]);
var inst_36654 = cljs.core.chunk_first(inst_36649);
var inst_36655 = cljs.core.chunk_rest(inst_36649);
var inst_36656 = cljs.core.count(inst_36654);
var inst_36623 = inst_36655;
var inst_36624 = inst_36654;
var inst_36625 = inst_36656;
var inst_36626 = (0);
var state_36756__$1 = (function (){var statearr_36874 = state_36756;
(statearr_36874[(13)] = inst_36624);

(statearr_36874[(15)] = inst_36625);

(statearr_36874[(16)] = inst_36623);

(statearr_36874[(17)] = inst_36626);

return statearr_36874;
})();
var statearr_36876_38704 = state_36756__$1;
(statearr_36876_38704[(2)] = null);

(statearr_36876_38704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (11))){
var inst_36649 = (state_36756[(7)]);
var inst_36623 = (state_36756[(16)]);
var inst_36649__$1 = cljs.core.seq(inst_36623);
var state_36756__$1 = (function (){var statearr_36878 = state_36756;
(statearr_36878[(7)] = inst_36649__$1);

return statearr_36878;
})();
if(inst_36649__$1){
var statearr_36885_38705 = state_36756__$1;
(statearr_36885_38705[(1)] = (16));

} else {
var statearr_36886_38706 = state_36756__$1;
(statearr_36886_38706[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (9))){
var inst_36682 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36899_38707 = state_36756__$1;
(statearr_36899_38707[(2)] = inst_36682);

(statearr_36899_38707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (5))){
var inst_36621 = cljs.core.deref(cs);
var inst_36622 = cljs.core.seq(inst_36621);
var inst_36623 = inst_36622;
var inst_36624 = null;
var inst_36625 = (0);
var inst_36626 = (0);
var state_36756__$1 = (function (){var statearr_36900 = state_36756;
(statearr_36900[(13)] = inst_36624);

(statearr_36900[(15)] = inst_36625);

(statearr_36900[(16)] = inst_36623);

(statearr_36900[(17)] = inst_36626);

return statearr_36900;
})();
var statearr_36901_38714 = state_36756__$1;
(statearr_36901_38714[(2)] = null);

(statearr_36901_38714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (14))){
var state_36756__$1 = state_36756;
var statearr_36908_38715 = state_36756__$1;
(statearr_36908_38715[(2)] = null);

(statearr_36908_38715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (45))){
var inst_36744 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36909_38717 = state_36756__$1;
(statearr_36909_38717[(2)] = inst_36744);

(statearr_36909_38717[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (26))){
var inst_36685 = (state_36756[(27)]);
var inst_36739 = (state_36756[(2)]);
var inst_36740 = cljs.core.seq(inst_36685);
var state_36756__$1 = (function (){var statearr_36910 = state_36756;
(statearr_36910[(29)] = inst_36739);

return statearr_36910;
})();
if(inst_36740){
var statearr_36917_38721 = state_36756__$1;
(statearr_36917_38721[(1)] = (42));

} else {
var statearr_36918_38722 = state_36756__$1;
(statearr_36918_38722[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (16))){
var inst_36649 = (state_36756[(7)]);
var inst_36652 = cljs.core.chunked_seq_QMARK_(inst_36649);
var state_36756__$1 = state_36756;
if(inst_36652){
var statearr_36919_38723 = state_36756__$1;
(statearr_36919_38723[(1)] = (19));

} else {
var statearr_36920_38724 = state_36756__$1;
(statearr_36920_38724[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (38))){
var inst_36732 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36922_38725 = state_36756__$1;
(statearr_36922_38725[(2)] = inst_36732);

(statearr_36922_38725[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (30))){
var state_36756__$1 = state_36756;
var statearr_36923_38726 = state_36756__$1;
(statearr_36923_38726[(2)] = null);

(statearr_36923_38726[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (10))){
var inst_36624 = (state_36756[(13)]);
var inst_36626 = (state_36756[(17)]);
var inst_36637 = cljs.core._nth(inst_36624,inst_36626);
var inst_36639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36637,(0),null);
var inst_36640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36637,(1),null);
var state_36756__$1 = (function (){var statearr_36924 = state_36756;
(statearr_36924[(24)] = inst_36639);

return statearr_36924;
})();
if(cljs.core.truth_(inst_36640)){
var statearr_36925_38727 = state_36756__$1;
(statearr_36925_38727[(1)] = (13));

} else {
var statearr_36926_38728 = state_36756__$1;
(statearr_36926_38728[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (18))){
var inst_36678 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36931_38729 = state_36756__$1;
(statearr_36931_38729[(2)] = inst_36678);

(statearr_36931_38729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (42))){
var state_36756__$1 = state_36756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36756__$1,(45),dchan);
} else {
if((state_val_36759 === (37))){
var inst_36722 = (state_36756[(22)]);
var inst_36614 = (state_36756[(11)]);
var inst_36713 = (state_36756[(23)]);
var inst_36722__$1 = cljs.core.first(inst_36713);
var inst_36723 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36722__$1,inst_36614,done);
var state_36756__$1 = (function (){var statearr_36932 = state_36756;
(statearr_36932[(22)] = inst_36722__$1);

return statearr_36932;
})();
if(cljs.core.truth_(inst_36723)){
var statearr_36933_38739 = state_36756__$1;
(statearr_36933_38739[(1)] = (39));

} else {
var statearr_36937_38740 = state_36756__$1;
(statearr_36937_38740[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (8))){
var inst_36625 = (state_36756[(15)]);
var inst_36626 = (state_36756[(17)]);
var inst_36629 = (inst_36626 < inst_36625);
var inst_36631 = inst_36629;
var state_36756__$1 = state_36756;
if(cljs.core.truth_(inst_36631)){
var statearr_36938_38741 = state_36756__$1;
(statearr_36938_38741[(1)] = (10));

} else {
var statearr_36942_38742 = state_36756__$1;
(statearr_36942_38742[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__35540__auto__ = null;
var cljs$core$async$mult_$_state_machine__35540__auto____0 = (function (){
var statearr_36944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36944[(0)] = cljs$core$async$mult_$_state_machine__35540__auto__);

(statearr_36944[(1)] = (1));

return statearr_36944;
});
var cljs$core$async$mult_$_state_machine__35540__auto____1 = (function (state_36756){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_36756);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e36945){var ex__35543__auto__ = e36945;
var statearr_36946_38743 = state_36756;
(statearr_36946_38743[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_36756[(4)]))){
var statearr_36947_38744 = state_36756;
(statearr_36947_38744[(1)] = cljs.core.first((state_36756[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38745 = state_36756;
state_36756 = G__38745;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35540__auto__ = function(state_36756){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35540__auto____1.call(this,state_36756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35540__auto____0;
cljs$core$async$mult_$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35540__auto____1;
return cljs$core$async$mult_$_state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_36948 = f__35786__auto__();
(statearr_36948[(6)] = c__35785__auto___38635);

return statearr_36948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
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
var G__36950 = arguments.length;
switch (G__36950) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_38747 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_38747(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38754 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_38754(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38755 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38755(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38759 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_38759(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38760 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38760(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38761 = arguments.length;
var i__5770__auto___38762 = (0);
while(true){
if((i__5770__auto___38762 < len__5769__auto___38761)){
args__5775__auto__.push((arguments[i__5770__auto___38762]));

var G__38771 = (i__5770__auto___38762 + (1));
i__5770__auto___38762 = G__38771;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36961){
var map__36962 = p__36961;
var map__36962__$1 = cljs.core.__destructure_map(map__36962);
var opts = map__36962__$1;
var statearr_36963_38781 = state;
(statearr_36963_38781[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36964_38782 = state;
(statearr_36964_38782[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_36965_38783 = state;
(statearr_36965_38783[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36956){
var G__36957 = cljs.core.first(seq36956);
var seq36956__$1 = cljs.core.next(seq36956);
var G__36958 = cljs.core.first(seq36956__$1);
var seq36956__$2 = cljs.core.next(seq36956__$1);
var G__36959 = cljs.core.first(seq36956__$2);
var seq36956__$3 = cljs.core.next(seq36956__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36957,G__36958,G__36959,seq36956__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36975 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36976){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36976 = meta36976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36977,meta36976__$1){
var self__ = this;
var _36977__$1 = this;
return (new cljs.core.async.t_cljs$core$async36975(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36976__$1));
}));

(cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36977){
var self__ = this;
var _36977__$1 = this;
return self__.meta36976;
}));

(cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36976","meta36976",-642336755,null)], null);
}));

(cljs.core.async.t_cljs$core$async36975.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36975");

(cljs.core.async.t_cljs$core$async36975.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36975");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36975.
 */
cljs.core.async.__GT_t_cljs$core$async36975 = (function cljs$core$async$__GT_t_cljs$core$async36975(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36976){
return (new cljs.core.async.t_cljs$core$async36975(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36976));
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
var m = (new cljs.core.async.t_cljs$core$async36975(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__35785__auto___38822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_37057){
var state_val_37058 = (state_37057[(1)]);
if((state_val_37058 === (7))){
var inst_37015 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
if(cljs.core.truth_(inst_37015)){
var statearr_37059_38829 = state_37057__$1;
(statearr_37059_38829[(1)] = (8));

} else {
var statearr_37061_38830 = state_37057__$1;
(statearr_37061_38830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (20))){
var inst_37008 = (state_37057[(7)]);
var state_37057__$1 = state_37057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37057__$1,(23),out,inst_37008);
} else {
if((state_val_37058 === (1))){
var inst_36990 = calc_state();
var inst_36991 = cljs.core.__destructure_map(inst_36990);
var inst_36992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36991,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36991,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36991,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36996 = inst_36990;
var state_37057__$1 = (function (){var statearr_37066 = state_37057;
(statearr_37066[(8)] = inst_36992);

(statearr_37066[(9)] = inst_36993);

(statearr_37066[(10)] = inst_36996);

(statearr_37066[(11)] = inst_36994);

return statearr_37066;
})();
var statearr_37067_38832 = state_37057__$1;
(statearr_37067_38832[(2)] = null);

(statearr_37067_38832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (24))){
var inst_36999 = (state_37057[(12)]);
var inst_36996 = inst_36999;
var state_37057__$1 = (function (){var statearr_37068 = state_37057;
(statearr_37068[(10)] = inst_36996);

return statearr_37068;
})();
var statearr_37069_38834 = state_37057__$1;
(statearr_37069_38834[(2)] = null);

(statearr_37069_38834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (4))){
var inst_37010 = (state_37057[(13)]);
var inst_37008 = (state_37057[(7)]);
var inst_37007 = (state_37057[(2)]);
var inst_37008__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37007,(0),null);
var inst_37009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37007,(1),null);
var inst_37010__$1 = (inst_37008__$1 == null);
var state_37057__$1 = (function (){var statearr_37070 = state_37057;
(statearr_37070[(13)] = inst_37010__$1);

(statearr_37070[(7)] = inst_37008__$1);

(statearr_37070[(14)] = inst_37009);

return statearr_37070;
})();
if(cljs.core.truth_(inst_37010__$1)){
var statearr_37071_38843 = state_37057__$1;
(statearr_37071_38843[(1)] = (5));

} else {
var statearr_37072_38844 = state_37057__$1;
(statearr_37072_38844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (15))){
var inst_37000 = (state_37057[(15)]);
var inst_37030 = (state_37057[(16)]);
var inst_37030__$1 = cljs.core.empty_QMARK_(inst_37000);
var state_37057__$1 = (function (){var statearr_37073 = state_37057;
(statearr_37073[(16)] = inst_37030__$1);

return statearr_37073;
})();
if(inst_37030__$1){
var statearr_37075_38847 = state_37057__$1;
(statearr_37075_38847[(1)] = (17));

} else {
var statearr_37076_38848 = state_37057__$1;
(statearr_37076_38848[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (21))){
var inst_36999 = (state_37057[(12)]);
var inst_36996 = inst_36999;
var state_37057__$1 = (function (){var statearr_37077 = state_37057;
(statearr_37077[(10)] = inst_36996);

return statearr_37077;
})();
var statearr_37078_38850 = state_37057__$1;
(statearr_37078_38850[(2)] = null);

(statearr_37078_38850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (13))){
var inst_37022 = (state_37057[(2)]);
var inst_37023 = calc_state();
var inst_36996 = inst_37023;
var state_37057__$1 = (function (){var statearr_37079 = state_37057;
(statearr_37079[(10)] = inst_36996);

(statearr_37079[(17)] = inst_37022);

return statearr_37079;
})();
var statearr_37080_38851 = state_37057__$1;
(statearr_37080_38851[(2)] = null);

(statearr_37080_38851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (22))){
var inst_37050 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
var statearr_37081_38852 = state_37057__$1;
(statearr_37081_38852[(2)] = inst_37050);

(statearr_37081_38852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (6))){
var inst_37009 = (state_37057[(14)]);
var inst_37013 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37009,change);
var state_37057__$1 = state_37057;
var statearr_37082_38853 = state_37057__$1;
(statearr_37082_38853[(2)] = inst_37013);

(statearr_37082_38853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (25))){
var state_37057__$1 = state_37057;
var statearr_37083_38854 = state_37057__$1;
(statearr_37083_38854[(2)] = null);

(statearr_37083_38854[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (17))){
var inst_37009 = (state_37057[(14)]);
var inst_37001 = (state_37057[(18)]);
var inst_37032 = (inst_37001.cljs$core$IFn$_invoke$arity$1 ? inst_37001.cljs$core$IFn$_invoke$arity$1(inst_37009) : inst_37001.call(null,inst_37009));
var inst_37033 = cljs.core.not(inst_37032);
var state_37057__$1 = state_37057;
var statearr_37085_38858 = state_37057__$1;
(statearr_37085_38858[(2)] = inst_37033);

(statearr_37085_38858[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (3))){
var inst_37054 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37057__$1,inst_37054);
} else {
if((state_val_37058 === (12))){
var state_37057__$1 = state_37057;
var statearr_37086_38859 = state_37057__$1;
(statearr_37086_38859[(2)] = null);

(statearr_37086_38859[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (2))){
var inst_36996 = (state_37057[(10)]);
var inst_36999 = (state_37057[(12)]);
var inst_36999__$1 = cljs.core.__destructure_map(inst_36996);
var inst_37000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36999__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36999__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36999__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37057__$1 = (function (){var statearr_37087 = state_37057;
(statearr_37087[(15)] = inst_37000);

(statearr_37087[(18)] = inst_37001);

(statearr_37087[(12)] = inst_36999__$1);

return statearr_37087;
})();
return cljs.core.async.ioc_alts_BANG_(state_37057__$1,(4),inst_37002);
} else {
if((state_val_37058 === (23))){
var inst_37041 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
if(cljs.core.truth_(inst_37041)){
var statearr_37088_38863 = state_37057__$1;
(statearr_37088_38863[(1)] = (24));

} else {
var statearr_37089_38864 = state_37057__$1;
(statearr_37089_38864[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (19))){
var inst_37036 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
var statearr_37091_38865 = state_37057__$1;
(statearr_37091_38865[(2)] = inst_37036);

(statearr_37091_38865[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (11))){
var inst_37009 = (state_37057[(14)]);
var inst_37019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37009);
var state_37057__$1 = state_37057;
var statearr_37092_38866 = state_37057__$1;
(statearr_37092_38866[(2)] = inst_37019);

(statearr_37092_38866[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (9))){
var inst_37009 = (state_37057[(14)]);
var inst_37000 = (state_37057[(15)]);
var inst_37026 = (state_37057[(19)]);
var inst_37026__$1 = (inst_37000.cljs$core$IFn$_invoke$arity$1 ? inst_37000.cljs$core$IFn$_invoke$arity$1(inst_37009) : inst_37000.call(null,inst_37009));
var state_37057__$1 = (function (){var statearr_37093 = state_37057;
(statearr_37093[(19)] = inst_37026__$1);

return statearr_37093;
})();
if(cljs.core.truth_(inst_37026__$1)){
var statearr_37095_38867 = state_37057__$1;
(statearr_37095_38867[(1)] = (14));

} else {
var statearr_37096_38868 = state_37057__$1;
(statearr_37096_38868[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (5))){
var inst_37010 = (state_37057[(13)]);
var state_37057__$1 = state_37057;
var statearr_37097_38869 = state_37057__$1;
(statearr_37097_38869[(2)] = inst_37010);

(statearr_37097_38869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (14))){
var inst_37026 = (state_37057[(19)]);
var state_37057__$1 = state_37057;
var statearr_37102_38871 = state_37057__$1;
(statearr_37102_38871[(2)] = inst_37026);

(statearr_37102_38871[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (26))){
var inst_37046 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
var statearr_37103_38873 = state_37057__$1;
(statearr_37103_38873[(2)] = inst_37046);

(statearr_37103_38873[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (16))){
var inst_37038 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
if(cljs.core.truth_(inst_37038)){
var statearr_37104_38874 = state_37057__$1;
(statearr_37104_38874[(1)] = (20));

} else {
var statearr_37105_38875 = state_37057__$1;
(statearr_37105_38875[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (10))){
var inst_37052 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
var statearr_37106_38876 = state_37057__$1;
(statearr_37106_38876[(2)] = inst_37052);

(statearr_37106_38876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (18))){
var inst_37030 = (state_37057[(16)]);
var state_37057__$1 = state_37057;
var statearr_37108_38877 = state_37057__$1;
(statearr_37108_38877[(2)] = inst_37030);

(statearr_37108_38877[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (8))){
var inst_37008 = (state_37057[(7)]);
var inst_37017 = (inst_37008 == null);
var state_37057__$1 = state_37057;
if(cljs.core.truth_(inst_37017)){
var statearr_37109_38878 = state_37057__$1;
(statearr_37109_38878[(1)] = (11));

} else {
var statearr_37110_38879 = state_37057__$1;
(statearr_37110_38879[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__35540__auto__ = null;
var cljs$core$async$mix_$_state_machine__35540__auto____0 = (function (){
var statearr_37111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37111[(0)] = cljs$core$async$mix_$_state_machine__35540__auto__);

(statearr_37111[(1)] = (1));

return statearr_37111;
});
var cljs$core$async$mix_$_state_machine__35540__auto____1 = (function (state_37057){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_37057);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e37112){var ex__35543__auto__ = e37112;
var statearr_37113_38880 = state_37057;
(statearr_37113_38880[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_37057[(4)]))){
var statearr_37114_38881 = state_37057;
(statearr_37114_38881[(1)] = cljs.core.first((state_37057[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38882 = state_37057;
state_37057 = G__38882;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35540__auto__ = function(state_37057){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35540__auto____1.call(this,state_37057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35540__auto____0;
cljs$core$async$mix_$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35540__auto____1;
return cljs$core$async$mix_$_state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_37116 = f__35786__auto__();
(statearr_37116[(6)] = c__35785__auto___38822);

return statearr_37116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_38883 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_38883(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38887 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_38887(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38889 = (function() {
var G__38890 = null;
var G__38890__1 = (function (p){
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
var G__38890__2 = (function (p,v){
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
G__38890 = function(p,v){
switch(arguments.length){
case 1:
return G__38890__1.call(this,p);
case 2:
return G__38890__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38890.cljs$core$IFn$_invoke$arity$1 = G__38890__1;
G__38890.cljs$core$IFn$_invoke$arity$2 = G__38890__2;
return G__38890;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37128 = arguments.length;
switch (G__37128) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38889(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38889(p,v);
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
cljs.core.async.t_cljs$core$async37138 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37139){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37139 = meta37139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37140,meta37139__$1){
var self__ = this;
var _37140__$1 = this;
return (new cljs.core.async.t_cljs$core$async37138(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37139__$1));
}));

(cljs.core.async.t_cljs$core$async37138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37140){
var self__ = this;
var _37140__$1 = this;
return self__.meta37139;
}));

(cljs.core.async.t_cljs$core$async37138.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37138.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37138.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37138.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37138.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async37138.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37138.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37139","meta37139",-225207034,null)], null);
}));

(cljs.core.async.t_cljs$core$async37138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37138");

(cljs.core.async.t_cljs$core$async37138.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37138.
 */
cljs.core.async.__GT_t_cljs$core$async37138 = (function cljs$core$async$__GT_t_cljs$core$async37138(ch,topic_fn,buf_fn,mults,ensure_mult,meta37139){
return (new cljs.core.async.t_cljs$core$async37138(ch,topic_fn,buf_fn,mults,ensure_mult,meta37139));
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
var G__37136 = arguments.length;
switch (G__37136) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37134_SHARP_){
if(cljs.core.truth_((p1__37134_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37134_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37134_SHARP_.call(null,topic)))){
return p1__37134_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37134_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async37138(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__35785__auto___38909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_37221){
var state_val_37222 = (state_37221[(1)]);
if((state_val_37222 === (7))){
var inst_37216 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
var statearr_37228_38919 = state_37221__$1;
(statearr_37228_38919[(2)] = inst_37216);

(statearr_37228_38919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (20))){
var state_37221__$1 = state_37221;
var statearr_37230_38920 = state_37221__$1;
(statearr_37230_38920[(2)] = null);

(statearr_37230_38920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (1))){
var state_37221__$1 = state_37221;
var statearr_37231_38921 = state_37221__$1;
(statearr_37231_38921[(2)] = null);

(statearr_37231_38921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (24))){
var inst_37199 = (state_37221[(7)]);
var inst_37208 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37199);
var state_37221__$1 = state_37221;
var statearr_37232_38922 = state_37221__$1;
(statearr_37232_38922[(2)] = inst_37208);

(statearr_37232_38922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (4))){
var inst_37151 = (state_37221[(8)]);
var inst_37151__$1 = (state_37221[(2)]);
var inst_37152 = (inst_37151__$1 == null);
var state_37221__$1 = (function (){var statearr_37234 = state_37221;
(statearr_37234[(8)] = inst_37151__$1);

return statearr_37234;
})();
if(cljs.core.truth_(inst_37152)){
var statearr_37235_38926 = state_37221__$1;
(statearr_37235_38926[(1)] = (5));

} else {
var statearr_37236_38927 = state_37221__$1;
(statearr_37236_38927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (15))){
var inst_37193 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
var statearr_37237_38931 = state_37221__$1;
(statearr_37237_38931[(2)] = inst_37193);

(statearr_37237_38931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (21))){
var inst_37213 = (state_37221[(2)]);
var state_37221__$1 = (function (){var statearr_37243 = state_37221;
(statearr_37243[(9)] = inst_37213);

return statearr_37243;
})();
var statearr_37244_38932 = state_37221__$1;
(statearr_37244_38932[(2)] = null);

(statearr_37244_38932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (13))){
var inst_37175 = (state_37221[(10)]);
var inst_37177 = cljs.core.chunked_seq_QMARK_(inst_37175);
var state_37221__$1 = state_37221;
if(inst_37177){
var statearr_37245_38933 = state_37221__$1;
(statearr_37245_38933[(1)] = (16));

} else {
var statearr_37246_38937 = state_37221__$1;
(statearr_37246_38937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (22))){
var inst_37205 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
if(cljs.core.truth_(inst_37205)){
var statearr_37247_38938 = state_37221__$1;
(statearr_37247_38938[(1)] = (23));

} else {
var statearr_37248_38939 = state_37221__$1;
(statearr_37248_38939[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (6))){
var inst_37151 = (state_37221[(8)]);
var inst_37201 = (state_37221[(11)]);
var inst_37199 = (state_37221[(7)]);
var inst_37199__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37151) : topic_fn.call(null,inst_37151));
var inst_37200 = cljs.core.deref(mults);
var inst_37201__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37200,inst_37199__$1);
var state_37221__$1 = (function (){var statearr_37249 = state_37221;
(statearr_37249[(11)] = inst_37201__$1);

(statearr_37249[(7)] = inst_37199__$1);

return statearr_37249;
})();
if(cljs.core.truth_(inst_37201__$1)){
var statearr_37250_38944 = state_37221__$1;
(statearr_37250_38944[(1)] = (19));

} else {
var statearr_37251_38945 = state_37221__$1;
(statearr_37251_38945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (25))){
var inst_37210 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
var statearr_37252_38946 = state_37221__$1;
(statearr_37252_38946[(2)] = inst_37210);

(statearr_37252_38946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (17))){
var inst_37175 = (state_37221[(10)]);
var inst_37184 = cljs.core.first(inst_37175);
var inst_37185 = cljs.core.async.muxch_STAR_(inst_37184);
var inst_37186 = cljs.core.async.close_BANG_(inst_37185);
var inst_37187 = cljs.core.next(inst_37175);
var inst_37161 = inst_37187;
var inst_37162 = null;
var inst_37163 = (0);
var inst_37164 = (0);
var state_37221__$1 = (function (){var statearr_37254 = state_37221;
(statearr_37254[(12)] = inst_37186);

(statearr_37254[(13)] = inst_37162);

(statearr_37254[(14)] = inst_37163);

(statearr_37254[(15)] = inst_37161);

(statearr_37254[(16)] = inst_37164);

return statearr_37254;
})();
var statearr_37255_38947 = state_37221__$1;
(statearr_37255_38947[(2)] = null);

(statearr_37255_38947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (3))){
var inst_37218 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37221__$1,inst_37218);
} else {
if((state_val_37222 === (12))){
var inst_37195 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
var statearr_37256_38948 = state_37221__$1;
(statearr_37256_38948[(2)] = inst_37195);

(statearr_37256_38948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (2))){
var state_37221__$1 = state_37221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37221__$1,(4),ch);
} else {
if((state_val_37222 === (23))){
var state_37221__$1 = state_37221;
var statearr_37257_38949 = state_37221__$1;
(statearr_37257_38949[(2)] = null);

(statearr_37257_38949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (19))){
var inst_37151 = (state_37221[(8)]);
var inst_37201 = (state_37221[(11)]);
var inst_37203 = cljs.core.async.muxch_STAR_(inst_37201);
var state_37221__$1 = state_37221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37221__$1,(22),inst_37203,inst_37151);
} else {
if((state_val_37222 === (11))){
var inst_37175 = (state_37221[(10)]);
var inst_37161 = (state_37221[(15)]);
var inst_37175__$1 = cljs.core.seq(inst_37161);
var state_37221__$1 = (function (){var statearr_37258 = state_37221;
(statearr_37258[(10)] = inst_37175__$1);

return statearr_37258;
})();
if(inst_37175__$1){
var statearr_37260_38952 = state_37221__$1;
(statearr_37260_38952[(1)] = (13));

} else {
var statearr_37261_38953 = state_37221__$1;
(statearr_37261_38953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (9))){
var inst_37197 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
var statearr_37262_38954 = state_37221__$1;
(statearr_37262_38954[(2)] = inst_37197);

(statearr_37262_38954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (5))){
var inst_37158 = cljs.core.deref(mults);
var inst_37159 = cljs.core.vals(inst_37158);
var inst_37160 = cljs.core.seq(inst_37159);
var inst_37161 = inst_37160;
var inst_37162 = null;
var inst_37163 = (0);
var inst_37164 = (0);
var state_37221__$1 = (function (){var statearr_37263 = state_37221;
(statearr_37263[(13)] = inst_37162);

(statearr_37263[(14)] = inst_37163);

(statearr_37263[(15)] = inst_37161);

(statearr_37263[(16)] = inst_37164);

return statearr_37263;
})();
var statearr_37264_38955 = state_37221__$1;
(statearr_37264_38955[(2)] = null);

(statearr_37264_38955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (14))){
var state_37221__$1 = state_37221;
var statearr_37269_38957 = state_37221__$1;
(statearr_37269_38957[(2)] = null);

(statearr_37269_38957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (16))){
var inst_37175 = (state_37221[(10)]);
var inst_37179 = cljs.core.chunk_first(inst_37175);
var inst_37180 = cljs.core.chunk_rest(inst_37175);
var inst_37181 = cljs.core.count(inst_37179);
var inst_37161 = inst_37180;
var inst_37162 = inst_37179;
var inst_37163 = inst_37181;
var inst_37164 = (0);
var state_37221__$1 = (function (){var statearr_37273 = state_37221;
(statearr_37273[(13)] = inst_37162);

(statearr_37273[(14)] = inst_37163);

(statearr_37273[(15)] = inst_37161);

(statearr_37273[(16)] = inst_37164);

return statearr_37273;
})();
var statearr_37275_38959 = state_37221__$1;
(statearr_37275_38959[(2)] = null);

(statearr_37275_38959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (10))){
var inst_37162 = (state_37221[(13)]);
var inst_37163 = (state_37221[(14)]);
var inst_37161 = (state_37221[(15)]);
var inst_37164 = (state_37221[(16)]);
var inst_37169 = cljs.core._nth(inst_37162,inst_37164);
var inst_37170 = cljs.core.async.muxch_STAR_(inst_37169);
var inst_37171 = cljs.core.async.close_BANG_(inst_37170);
var inst_37172 = (inst_37164 + (1));
var tmp37266 = inst_37162;
var tmp37267 = inst_37163;
var tmp37268 = inst_37161;
var inst_37161__$1 = tmp37268;
var inst_37162__$1 = tmp37266;
var inst_37163__$1 = tmp37267;
var inst_37164__$1 = inst_37172;
var state_37221__$1 = (function (){var statearr_37276 = state_37221;
(statearr_37276[(17)] = inst_37171);

(statearr_37276[(13)] = inst_37162__$1);

(statearr_37276[(14)] = inst_37163__$1);

(statearr_37276[(15)] = inst_37161__$1);

(statearr_37276[(16)] = inst_37164__$1);

return statearr_37276;
})();
var statearr_37277_38960 = state_37221__$1;
(statearr_37277_38960[(2)] = null);

(statearr_37277_38960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (18))){
var inst_37190 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
var statearr_37278_38961 = state_37221__$1;
(statearr_37278_38961[(2)] = inst_37190);

(statearr_37278_38961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (8))){
var inst_37163 = (state_37221[(14)]);
var inst_37164 = (state_37221[(16)]);
var inst_37166 = (inst_37164 < inst_37163);
var inst_37167 = inst_37166;
var state_37221__$1 = state_37221;
if(cljs.core.truth_(inst_37167)){
var statearr_37279_38962 = state_37221__$1;
(statearr_37279_38962[(1)] = (10));

} else {
var statearr_37280_38963 = state_37221__$1;
(statearr_37280_38963[(1)] = (11));

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
var cljs$core$async$state_machine__35540__auto__ = null;
var cljs$core$async$state_machine__35540__auto____0 = (function (){
var statearr_37282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37282[(0)] = cljs$core$async$state_machine__35540__auto__);

(statearr_37282[(1)] = (1));

return statearr_37282;
});
var cljs$core$async$state_machine__35540__auto____1 = (function (state_37221){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_37221);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e37283){var ex__35543__auto__ = e37283;
var statearr_37284_38964 = state_37221;
(statearr_37284_38964[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_37221[(4)]))){
var statearr_37286_38965 = state_37221;
(statearr_37286_38965[(1)] = cljs.core.first((state_37221[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38979 = state_37221;
state_37221 = G__38979;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$state_machine__35540__auto__ = function(state_37221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35540__auto____1.call(this,state_37221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35540__auto____0;
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35540__auto____1;
return cljs$core$async$state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_37287 = f__35786__auto__();
(statearr_37287[(6)] = c__35785__auto___38909);

return statearr_37287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
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
var G__37289 = arguments.length;
switch (G__37289) {
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
var G__37298 = arguments.length;
switch (G__37298) {
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
var G__37305 = arguments.length;
switch (G__37305) {
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
var c__35785__auto___38990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_37354){
var state_val_37355 = (state_37354[(1)]);
if((state_val_37355 === (7))){
var state_37354__$1 = state_37354;
var statearr_37356_38991 = state_37354__$1;
(statearr_37356_38991[(2)] = null);

(statearr_37356_38991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (1))){
var state_37354__$1 = state_37354;
var statearr_37358_38996 = state_37354__$1;
(statearr_37358_38996[(2)] = null);

(statearr_37358_38996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (4))){
var inst_37309 = (state_37354[(7)]);
var inst_37310 = (state_37354[(8)]);
var inst_37312 = (inst_37310 < inst_37309);
var state_37354__$1 = state_37354;
if(cljs.core.truth_(inst_37312)){
var statearr_37359_38999 = state_37354__$1;
(statearr_37359_38999[(1)] = (6));

} else {
var statearr_37360_39000 = state_37354__$1;
(statearr_37360_39000[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (15))){
var inst_37336 = (state_37354[(9)]);
var inst_37342 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37336);
var state_37354__$1 = state_37354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37354__$1,(17),out,inst_37342);
} else {
if((state_val_37355 === (13))){
var inst_37336 = (state_37354[(9)]);
var inst_37336__$1 = (state_37354[(2)]);
var inst_37338 = cljs.core.some(cljs.core.nil_QMARK_,inst_37336__$1);
var state_37354__$1 = (function (){var statearr_37361 = state_37354;
(statearr_37361[(9)] = inst_37336__$1);

return statearr_37361;
})();
if(cljs.core.truth_(inst_37338)){
var statearr_37362_39001 = state_37354__$1;
(statearr_37362_39001[(1)] = (14));

} else {
var statearr_37363_39002 = state_37354__$1;
(statearr_37363_39002[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (6))){
var state_37354__$1 = state_37354;
var statearr_37364_39004 = state_37354__$1;
(statearr_37364_39004[(2)] = null);

(statearr_37364_39004[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (17))){
var inst_37344 = (state_37354[(2)]);
var state_37354__$1 = (function (){var statearr_37368 = state_37354;
(statearr_37368[(10)] = inst_37344);

return statearr_37368;
})();
var statearr_37369_39005 = state_37354__$1;
(statearr_37369_39005[(2)] = null);

(statearr_37369_39005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (3))){
var inst_37349 = (state_37354[(2)]);
var state_37354__$1 = state_37354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37354__$1,inst_37349);
} else {
if((state_val_37355 === (12))){
var _ = (function (){var statearr_37374 = state_37354;
(statearr_37374[(4)] = cljs.core.rest((state_37354[(4)])));

return statearr_37374;
})();
var state_37354__$1 = state_37354;
var ex37367 = (state_37354__$1[(2)]);
var statearr_37376_39006 = state_37354__$1;
(statearr_37376_39006[(5)] = ex37367);


if((ex37367 instanceof Object)){
var statearr_37378_39007 = state_37354__$1;
(statearr_37378_39007[(1)] = (11));

(statearr_37378_39007[(5)] = null);

} else {
throw ex37367;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (2))){
var inst_37308 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37309 = cnt;
var inst_37310 = (0);
var state_37354__$1 = (function (){var statearr_37381 = state_37354;
(statearr_37381[(7)] = inst_37309);

(statearr_37381[(8)] = inst_37310);

(statearr_37381[(11)] = inst_37308);

return statearr_37381;
})();
var statearr_37382_39009 = state_37354__$1;
(statearr_37382_39009[(2)] = null);

(statearr_37382_39009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (11))){
var inst_37315 = (state_37354[(2)]);
var inst_37316 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37354__$1 = (function (){var statearr_37385 = state_37354;
(statearr_37385[(12)] = inst_37315);

return statearr_37385;
})();
var statearr_37389_39014 = state_37354__$1;
(statearr_37389_39014[(2)] = inst_37316);

(statearr_37389_39014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (9))){
var inst_37310 = (state_37354[(8)]);
var _ = (function (){var statearr_37390 = state_37354;
(statearr_37390[(4)] = cljs.core.cons((12),(state_37354[(4)])));

return statearr_37390;
})();
var inst_37322 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37310) : chs__$1.call(null,inst_37310));
var inst_37323 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37310) : done.call(null,inst_37310));
var inst_37324 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37322,inst_37323);
var ___$1 = (function (){var statearr_37391 = state_37354;
(statearr_37391[(4)] = cljs.core.rest((state_37354[(4)])));

return statearr_37391;
})();
var state_37354__$1 = state_37354;
var statearr_37392_39018 = state_37354__$1;
(statearr_37392_39018[(2)] = inst_37324);

(statearr_37392_39018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (5))){
var inst_37334 = (state_37354[(2)]);
var state_37354__$1 = (function (){var statearr_37393 = state_37354;
(statearr_37393[(13)] = inst_37334);

return statearr_37393;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37354__$1,(13),dchan);
} else {
if((state_val_37355 === (14))){
var inst_37340 = cljs.core.async.close_BANG_(out);
var state_37354__$1 = state_37354;
var statearr_37394_39019 = state_37354__$1;
(statearr_37394_39019[(2)] = inst_37340);

(statearr_37394_39019[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (16))){
var inst_37347 = (state_37354[(2)]);
var state_37354__$1 = state_37354;
var statearr_37395_39020 = state_37354__$1;
(statearr_37395_39020[(2)] = inst_37347);

(statearr_37395_39020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (10))){
var inst_37310 = (state_37354[(8)]);
var inst_37327 = (state_37354[(2)]);
var inst_37328 = (inst_37310 + (1));
var inst_37310__$1 = inst_37328;
var state_37354__$1 = (function (){var statearr_37396 = state_37354;
(statearr_37396[(14)] = inst_37327);

(statearr_37396[(8)] = inst_37310__$1);

return statearr_37396;
})();
var statearr_37397_39021 = state_37354__$1;
(statearr_37397_39021[(2)] = null);

(statearr_37397_39021[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (8))){
var inst_37332 = (state_37354[(2)]);
var state_37354__$1 = state_37354;
var statearr_37398_39022 = state_37354__$1;
(statearr_37398_39022[(2)] = inst_37332);

(statearr_37398_39022[(1)] = (5));


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
var cljs$core$async$state_machine__35540__auto__ = null;
var cljs$core$async$state_machine__35540__auto____0 = (function (){
var statearr_37399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37399[(0)] = cljs$core$async$state_machine__35540__auto__);

(statearr_37399[(1)] = (1));

return statearr_37399;
});
var cljs$core$async$state_machine__35540__auto____1 = (function (state_37354){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_37354);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e37400){var ex__35543__auto__ = e37400;
var statearr_37402_39030 = state_37354;
(statearr_37402_39030[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_37354[(4)]))){
var statearr_37404_39034 = state_37354;
(statearr_37404_39034[(1)] = cljs.core.first((state_37354[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39035 = state_37354;
state_37354 = G__39035;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$state_machine__35540__auto__ = function(state_37354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35540__auto____1.call(this,state_37354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35540__auto____0;
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35540__auto____1;
return cljs$core$async$state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_37405 = f__35786__auto__();
(statearr_37405[(6)] = c__35785__auto___38990);

return statearr_37405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
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
var G__37408 = arguments.length;
switch (G__37408) {
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
var c__35785__auto___39056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_37444){
var state_val_37445 = (state_37444[(1)]);
if((state_val_37445 === (7))){
var inst_37423 = (state_37444[(7)]);
var inst_37424 = (state_37444[(8)]);
var inst_37423__$1 = (state_37444[(2)]);
var inst_37424__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37423__$1,(0),null);
var inst_37425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37423__$1,(1),null);
var inst_37426 = (inst_37424__$1 == null);
var state_37444__$1 = (function (){var statearr_37446 = state_37444;
(statearr_37446[(7)] = inst_37423__$1);

(statearr_37446[(8)] = inst_37424__$1);

(statearr_37446[(9)] = inst_37425);

return statearr_37446;
})();
if(cljs.core.truth_(inst_37426)){
var statearr_37447_39057 = state_37444__$1;
(statearr_37447_39057[(1)] = (8));

} else {
var statearr_37448_39058 = state_37444__$1;
(statearr_37448_39058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37445 === (1))){
var inst_37413 = cljs.core.vec(chs);
var inst_37414 = inst_37413;
var state_37444__$1 = (function (){var statearr_37449 = state_37444;
(statearr_37449[(10)] = inst_37414);

return statearr_37449;
})();
var statearr_37450_39066 = state_37444__$1;
(statearr_37450_39066[(2)] = null);

(statearr_37450_39066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37445 === (4))){
var inst_37414 = (state_37444[(10)]);
var state_37444__$1 = state_37444;
return cljs.core.async.ioc_alts_BANG_(state_37444__$1,(7),inst_37414);
} else {
if((state_val_37445 === (6))){
var inst_37440 = (state_37444[(2)]);
var state_37444__$1 = state_37444;
var statearr_37453_39070 = state_37444__$1;
(statearr_37453_39070[(2)] = inst_37440);

(statearr_37453_39070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37445 === (3))){
var inst_37442 = (state_37444[(2)]);
var state_37444__$1 = state_37444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37444__$1,inst_37442);
} else {
if((state_val_37445 === (2))){
var inst_37414 = (state_37444[(10)]);
var inst_37416 = cljs.core.count(inst_37414);
var inst_37417 = (inst_37416 > (0));
var state_37444__$1 = state_37444;
if(cljs.core.truth_(inst_37417)){
var statearr_37456_39074 = state_37444__$1;
(statearr_37456_39074[(1)] = (4));

} else {
var statearr_37457_39075 = state_37444__$1;
(statearr_37457_39075[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37445 === (11))){
var inst_37414 = (state_37444[(10)]);
var inst_37433 = (state_37444[(2)]);
var tmp37454 = inst_37414;
var inst_37414__$1 = tmp37454;
var state_37444__$1 = (function (){var statearr_37462 = state_37444;
(statearr_37462[(10)] = inst_37414__$1);

(statearr_37462[(11)] = inst_37433);

return statearr_37462;
})();
var statearr_37463_39083 = state_37444__$1;
(statearr_37463_39083[(2)] = null);

(statearr_37463_39083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37445 === (9))){
var inst_37424 = (state_37444[(8)]);
var state_37444__$1 = state_37444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37444__$1,(11),out,inst_37424);
} else {
if((state_val_37445 === (5))){
var inst_37438 = cljs.core.async.close_BANG_(out);
var state_37444__$1 = state_37444;
var statearr_37466_39084 = state_37444__$1;
(statearr_37466_39084[(2)] = inst_37438);

(statearr_37466_39084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37445 === (10))){
var inst_37436 = (state_37444[(2)]);
var state_37444__$1 = state_37444;
var statearr_37471_39088 = state_37444__$1;
(statearr_37471_39088[(2)] = inst_37436);

(statearr_37471_39088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37445 === (8))){
var inst_37414 = (state_37444[(10)]);
var inst_37423 = (state_37444[(7)]);
var inst_37424 = (state_37444[(8)]);
var inst_37425 = (state_37444[(9)]);
var inst_37428 = (function (){var cs = inst_37414;
var vec__37419 = inst_37423;
var v = inst_37424;
var c = inst_37425;
return (function (p1__37406_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37406_SHARP_);
});
})();
var inst_37429 = cljs.core.filterv(inst_37428,inst_37414);
var inst_37414__$1 = inst_37429;
var state_37444__$1 = (function (){var statearr_37472 = state_37444;
(statearr_37472[(10)] = inst_37414__$1);

return statearr_37472;
})();
var statearr_37473_39093 = state_37444__$1;
(statearr_37473_39093[(2)] = null);

(statearr_37473_39093[(1)] = (2));


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
var cljs$core$async$state_machine__35540__auto__ = null;
var cljs$core$async$state_machine__35540__auto____0 = (function (){
var statearr_37474 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37474[(0)] = cljs$core$async$state_machine__35540__auto__);

(statearr_37474[(1)] = (1));

return statearr_37474;
});
var cljs$core$async$state_machine__35540__auto____1 = (function (state_37444){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_37444);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e37475){var ex__35543__auto__ = e37475;
var statearr_37478_39094 = state_37444;
(statearr_37478_39094[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_37444[(4)]))){
var statearr_37480_39097 = state_37444;
(statearr_37480_39097[(1)] = cljs.core.first((state_37444[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39098 = state_37444;
state_37444 = G__39098;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$state_machine__35540__auto__ = function(state_37444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35540__auto____1.call(this,state_37444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35540__auto____0;
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35540__auto____1;
return cljs$core$async$state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_37483 = f__35786__auto__();
(statearr_37483[(6)] = c__35785__auto___39056);

return statearr_37483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
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
var G__37489 = arguments.length;
switch (G__37489) {
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
var c__35785__auto___39104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_37530){
var state_val_37531 = (state_37530[(1)]);
if((state_val_37531 === (7))){
var inst_37508 = (state_37530[(7)]);
var inst_37508__$1 = (state_37530[(2)]);
var inst_37512 = (inst_37508__$1 == null);
var inst_37513 = cljs.core.not(inst_37512);
var state_37530__$1 = (function (){var statearr_37536 = state_37530;
(statearr_37536[(7)] = inst_37508__$1);

return statearr_37536;
})();
if(inst_37513){
var statearr_37539_39105 = state_37530__$1;
(statearr_37539_39105[(1)] = (8));

} else {
var statearr_37541_39106 = state_37530__$1;
(statearr_37541_39106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (1))){
var inst_37500 = (0);
var state_37530__$1 = (function (){var statearr_37543 = state_37530;
(statearr_37543[(8)] = inst_37500);

return statearr_37543;
})();
var statearr_37544_39107 = state_37530__$1;
(statearr_37544_39107[(2)] = null);

(statearr_37544_39107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (4))){
var state_37530__$1 = state_37530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37530__$1,(7),ch);
} else {
if((state_val_37531 === (6))){
var inst_37524 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
var statearr_37548_39108 = state_37530__$1;
(statearr_37548_39108[(2)] = inst_37524);

(statearr_37548_39108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (3))){
var inst_37526 = (state_37530[(2)]);
var inst_37527 = cljs.core.async.close_BANG_(out);
var state_37530__$1 = (function (){var statearr_37552 = state_37530;
(statearr_37552[(9)] = inst_37526);

return statearr_37552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37530__$1,inst_37527);
} else {
if((state_val_37531 === (2))){
var inst_37500 = (state_37530[(8)]);
var inst_37503 = (inst_37500 < n);
var state_37530__$1 = state_37530;
if(cljs.core.truth_(inst_37503)){
var statearr_37555_39109 = state_37530__$1;
(statearr_37555_39109[(1)] = (4));

} else {
var statearr_37556_39110 = state_37530__$1;
(statearr_37556_39110[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (11))){
var inst_37500 = (state_37530[(8)]);
var inst_37516 = (state_37530[(2)]);
var inst_37517 = (inst_37500 + (1));
var inst_37500__$1 = inst_37517;
var state_37530__$1 = (function (){var statearr_37561 = state_37530;
(statearr_37561[(8)] = inst_37500__$1);

(statearr_37561[(10)] = inst_37516);

return statearr_37561;
})();
var statearr_37562_39111 = state_37530__$1;
(statearr_37562_39111[(2)] = null);

(statearr_37562_39111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (9))){
var state_37530__$1 = state_37530;
var statearr_37564_39112 = state_37530__$1;
(statearr_37564_39112[(2)] = null);

(statearr_37564_39112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (5))){
var state_37530__$1 = state_37530;
var statearr_37568_39113 = state_37530__$1;
(statearr_37568_39113[(2)] = null);

(statearr_37568_39113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (10))){
var inst_37521 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
var statearr_37570_39121 = state_37530__$1;
(statearr_37570_39121[(2)] = inst_37521);

(statearr_37570_39121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (8))){
var inst_37508 = (state_37530[(7)]);
var state_37530__$1 = state_37530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37530__$1,(11),out,inst_37508);
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
var cljs$core$async$state_machine__35540__auto__ = null;
var cljs$core$async$state_machine__35540__auto____0 = (function (){
var statearr_37576 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37576[(0)] = cljs$core$async$state_machine__35540__auto__);

(statearr_37576[(1)] = (1));

return statearr_37576;
});
var cljs$core$async$state_machine__35540__auto____1 = (function (state_37530){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_37530);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e37578){var ex__35543__auto__ = e37578;
var statearr_37581_39122 = state_37530;
(statearr_37581_39122[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_37530[(4)]))){
var statearr_37584_39123 = state_37530;
(statearr_37584_39123[(1)] = cljs.core.first((state_37530[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39124 = state_37530;
state_37530 = G__39124;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$state_machine__35540__auto__ = function(state_37530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35540__auto____1.call(this,state_37530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35540__auto____0;
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35540__auto____1;
return cljs$core$async$state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_37589 = f__35786__auto__();
(statearr_37589[(6)] = c__35785__auto___39104);

return statearr_37589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
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
cljs.core.async.t_cljs$core$async37614 = (function (f,ch,meta37597,_,fn1,meta37615){
this.f = f;
this.ch = ch;
this.meta37597 = meta37597;
this._ = _;
this.fn1 = fn1;
this.meta37615 = meta37615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37616,meta37615__$1){
var self__ = this;
var _37616__$1 = this;
return (new cljs.core.async.t_cljs$core$async37614(self__.f,self__.ch,self__.meta37597,self__._,self__.fn1,meta37615__$1));
}));

(cljs.core.async.t_cljs$core$async37614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37616){
var self__ = this;
var _37616__$1 = this;
return self__.meta37615;
}));

(cljs.core.async.t_cljs$core$async37614.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37593_SHARP_){
var G__37626 = (((p1__37593_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37593_SHARP_) : self__.f.call(null,p1__37593_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37626) : f1.call(null,G__37626));
});
}));

(cljs.core.async.t_cljs$core$async37614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37597","meta37597",-1916093139,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37596","cljs.core.async/t_cljs$core$async37596",1641342195,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37615","meta37615",1854631108,null)], null);
}));

(cljs.core.async.t_cljs$core$async37614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37614");

(cljs.core.async.t_cljs$core$async37614.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37614.
 */
cljs.core.async.__GT_t_cljs$core$async37614 = (function cljs$core$async$__GT_t_cljs$core$async37614(f,ch,meta37597,_,fn1,meta37615){
return (new cljs.core.async.t_cljs$core$async37614(f,ch,meta37597,_,fn1,meta37615));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37596 = (function (f,ch,meta37597){
this.f = f;
this.ch = ch;
this.meta37597 = meta37597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37598,meta37597__$1){
var self__ = this;
var _37598__$1 = this;
return (new cljs.core.async.t_cljs$core$async37596(self__.f,self__.ch,meta37597__$1));
}));

(cljs.core.async.t_cljs$core$async37596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37598){
var self__ = this;
var _37598__$1 = this;
return self__.meta37597;
}));

(cljs.core.async.t_cljs$core$async37596.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37596.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37596.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async37614(self__.f,self__.ch,self__.meta37597,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37637 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37637) : self__.f.call(null,G__37637));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37596.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37597","meta37597",-1916093139,null)], null);
}));

(cljs.core.async.t_cljs$core$async37596.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37596");

(cljs.core.async.t_cljs$core$async37596.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37596");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37596.
 */
cljs.core.async.__GT_t_cljs$core$async37596 = (function cljs$core$async$__GT_t_cljs$core$async37596(f,ch,meta37597){
return (new cljs.core.async.t_cljs$core$async37596(f,ch,meta37597));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async37596(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37648 = (function (f,ch,meta37649){
this.f = f;
this.ch = ch;
this.meta37649 = meta37649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37650,meta37649__$1){
var self__ = this;
var _37650__$1 = this;
return (new cljs.core.async.t_cljs$core$async37648(self__.f,self__.ch,meta37649__$1));
}));

(cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37650){
var self__ = this;
var _37650__$1 = this;
return self__.meta37649;
}));

(cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37649","meta37649",-1413720383,null)], null);
}));

(cljs.core.async.t_cljs$core$async37648.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37648");

(cljs.core.async.t_cljs$core$async37648.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37648");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37648.
 */
cljs.core.async.__GT_t_cljs$core$async37648 = (function cljs$core$async$__GT_t_cljs$core$async37648(f,ch,meta37649){
return (new cljs.core.async.t_cljs$core$async37648(f,ch,meta37649));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async37648(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37674 = (function (p,ch,meta37675){
this.p = p;
this.ch = ch;
this.meta37675 = meta37675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37676,meta37675__$1){
var self__ = this;
var _37676__$1 = this;
return (new cljs.core.async.t_cljs$core$async37674(self__.p,self__.ch,meta37675__$1));
}));

(cljs.core.async.t_cljs$core$async37674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37676){
var self__ = this;
var _37676__$1 = this;
return self__.meta37675;
}));

(cljs.core.async.t_cljs$core$async37674.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37674.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37674.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37674.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37674.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37674.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37674.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37675","meta37675",-1139725925,null)], null);
}));

(cljs.core.async.t_cljs$core$async37674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37674");

(cljs.core.async.t_cljs$core$async37674.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37674.
 */
cljs.core.async.__GT_t_cljs$core$async37674 = (function cljs$core$async$__GT_t_cljs$core$async37674(p,ch,meta37675){
return (new cljs.core.async.t_cljs$core$async37674(p,ch,meta37675));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async37674(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37698 = arguments.length;
switch (G__37698) {
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
var c__35785__auto___39161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_37729){
var state_val_37730 = (state_37729[(1)]);
if((state_val_37730 === (7))){
var inst_37725 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
var statearr_37733_39162 = state_37729__$1;
(statearr_37733_39162[(2)] = inst_37725);

(statearr_37733_39162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (1))){
var state_37729__$1 = state_37729;
var statearr_37736_39163 = state_37729__$1;
(statearr_37736_39163[(2)] = null);

(statearr_37736_39163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (4))){
var inst_37707 = (state_37729[(7)]);
var inst_37707__$1 = (state_37729[(2)]);
var inst_37710 = (inst_37707__$1 == null);
var state_37729__$1 = (function (){var statearr_37738 = state_37729;
(statearr_37738[(7)] = inst_37707__$1);

return statearr_37738;
})();
if(cljs.core.truth_(inst_37710)){
var statearr_37739_39164 = state_37729__$1;
(statearr_37739_39164[(1)] = (5));

} else {
var statearr_37741_39165 = state_37729__$1;
(statearr_37741_39165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (6))){
var inst_37707 = (state_37729[(7)]);
var inst_37715 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37707) : p.call(null,inst_37707));
var state_37729__$1 = state_37729;
if(cljs.core.truth_(inst_37715)){
var statearr_37742_39166 = state_37729__$1;
(statearr_37742_39166[(1)] = (8));

} else {
var statearr_37743_39168 = state_37729__$1;
(statearr_37743_39168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (3))){
var inst_37727 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37729__$1,inst_37727);
} else {
if((state_val_37730 === (2))){
var state_37729__$1 = state_37729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37729__$1,(4),ch);
} else {
if((state_val_37730 === (11))){
var inst_37719 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
var statearr_37749_39169 = state_37729__$1;
(statearr_37749_39169[(2)] = inst_37719);

(statearr_37749_39169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (9))){
var state_37729__$1 = state_37729;
var statearr_37752_39170 = state_37729__$1;
(statearr_37752_39170[(2)] = null);

(statearr_37752_39170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (5))){
var inst_37712 = cljs.core.async.close_BANG_(out);
var state_37729__$1 = state_37729;
var statearr_37754_39171 = state_37729__$1;
(statearr_37754_39171[(2)] = inst_37712);

(statearr_37754_39171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (10))){
var inst_37722 = (state_37729[(2)]);
var state_37729__$1 = (function (){var statearr_37755 = state_37729;
(statearr_37755[(8)] = inst_37722);

return statearr_37755;
})();
var statearr_37757_39173 = state_37729__$1;
(statearr_37757_39173[(2)] = null);

(statearr_37757_39173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (8))){
var inst_37707 = (state_37729[(7)]);
var state_37729__$1 = state_37729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37729__$1,(11),out,inst_37707);
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
var cljs$core$async$state_machine__35540__auto__ = null;
var cljs$core$async$state_machine__35540__auto____0 = (function (){
var statearr_37762 = [null,null,null,null,null,null,null,null,null];
(statearr_37762[(0)] = cljs$core$async$state_machine__35540__auto__);

(statearr_37762[(1)] = (1));

return statearr_37762;
});
var cljs$core$async$state_machine__35540__auto____1 = (function (state_37729){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_37729);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e37765){var ex__35543__auto__ = e37765;
var statearr_37768_39175 = state_37729;
(statearr_37768_39175[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_37729[(4)]))){
var statearr_37769_39176 = state_37729;
(statearr_37769_39176[(1)] = cljs.core.first((state_37729[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39180 = state_37729;
state_37729 = G__39180;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$state_machine__35540__auto__ = function(state_37729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35540__auto____1.call(this,state_37729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35540__auto____0;
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35540__auto____1;
return cljs$core$async$state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_37774 = f__35786__auto__();
(statearr_37774[(6)] = c__35785__auto___39161);

return statearr_37774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37781 = arguments.length;
switch (G__37781) {
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
var c__35785__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_37858){
var state_val_37859 = (state_37858[(1)]);
if((state_val_37859 === (7))){
var inst_37851 = (state_37858[(2)]);
var state_37858__$1 = state_37858;
var statearr_37864_39188 = state_37858__$1;
(statearr_37864_39188[(2)] = inst_37851);

(statearr_37864_39188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (20))){
var inst_37818 = (state_37858[(7)]);
var inst_37832 = (state_37858[(2)]);
var inst_37833 = cljs.core.next(inst_37818);
var inst_37802 = inst_37833;
var inst_37803 = null;
var inst_37804 = (0);
var inst_37805 = (0);
var state_37858__$1 = (function (){var statearr_37870 = state_37858;
(statearr_37870[(8)] = inst_37802);

(statearr_37870[(9)] = inst_37804);

(statearr_37870[(10)] = inst_37803);

(statearr_37870[(11)] = inst_37832);

(statearr_37870[(12)] = inst_37805);

return statearr_37870;
})();
var statearr_37871_39189 = state_37858__$1;
(statearr_37871_39189[(2)] = null);

(statearr_37871_39189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (1))){
var state_37858__$1 = state_37858;
var statearr_37872_39190 = state_37858__$1;
(statearr_37872_39190[(2)] = null);

(statearr_37872_39190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (4))){
var inst_37791 = (state_37858[(13)]);
var inst_37791__$1 = (state_37858[(2)]);
var inst_37792 = (inst_37791__$1 == null);
var state_37858__$1 = (function (){var statearr_37873 = state_37858;
(statearr_37873[(13)] = inst_37791__$1);

return statearr_37873;
})();
if(cljs.core.truth_(inst_37792)){
var statearr_37874_39192 = state_37858__$1;
(statearr_37874_39192[(1)] = (5));

} else {
var statearr_37875_39199 = state_37858__$1;
(statearr_37875_39199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (15))){
var state_37858__$1 = state_37858;
var statearr_37883_39200 = state_37858__$1;
(statearr_37883_39200[(2)] = null);

(statearr_37883_39200[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (21))){
var state_37858__$1 = state_37858;
var statearr_37887_39201 = state_37858__$1;
(statearr_37887_39201[(2)] = null);

(statearr_37887_39201[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (13))){
var inst_37802 = (state_37858[(8)]);
var inst_37804 = (state_37858[(9)]);
var inst_37803 = (state_37858[(10)]);
var inst_37805 = (state_37858[(12)]);
var inst_37812 = (state_37858[(2)]);
var inst_37813 = (inst_37805 + (1));
var tmp37876 = inst_37802;
var tmp37877 = inst_37804;
var tmp37878 = inst_37803;
var inst_37802__$1 = tmp37876;
var inst_37803__$1 = tmp37878;
var inst_37804__$1 = tmp37877;
var inst_37805__$1 = inst_37813;
var state_37858__$1 = (function (){var statearr_37889 = state_37858;
(statearr_37889[(8)] = inst_37802__$1);

(statearr_37889[(9)] = inst_37804__$1);

(statearr_37889[(14)] = inst_37812);

(statearr_37889[(10)] = inst_37803__$1);

(statearr_37889[(12)] = inst_37805__$1);

return statearr_37889;
})();
var statearr_37890_39202 = state_37858__$1;
(statearr_37890_39202[(2)] = null);

(statearr_37890_39202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (22))){
var state_37858__$1 = state_37858;
var statearr_37894_39203 = state_37858__$1;
(statearr_37894_39203[(2)] = null);

(statearr_37894_39203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (6))){
var inst_37791 = (state_37858[(13)]);
var inst_37800 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37791) : f.call(null,inst_37791));
var inst_37801 = cljs.core.seq(inst_37800);
var inst_37802 = inst_37801;
var inst_37803 = null;
var inst_37804 = (0);
var inst_37805 = (0);
var state_37858__$1 = (function (){var statearr_37896 = state_37858;
(statearr_37896[(8)] = inst_37802);

(statearr_37896[(9)] = inst_37804);

(statearr_37896[(10)] = inst_37803);

(statearr_37896[(12)] = inst_37805);

return statearr_37896;
})();
var statearr_37897_39206 = state_37858__$1;
(statearr_37897_39206[(2)] = null);

(statearr_37897_39206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (17))){
var inst_37818 = (state_37858[(7)]);
var inst_37822 = cljs.core.chunk_first(inst_37818);
var inst_37823 = cljs.core.chunk_rest(inst_37818);
var inst_37824 = cljs.core.count(inst_37822);
var inst_37802 = inst_37823;
var inst_37803 = inst_37822;
var inst_37804 = inst_37824;
var inst_37805 = (0);
var state_37858__$1 = (function (){var statearr_37902 = state_37858;
(statearr_37902[(8)] = inst_37802);

(statearr_37902[(9)] = inst_37804);

(statearr_37902[(10)] = inst_37803);

(statearr_37902[(12)] = inst_37805);

return statearr_37902;
})();
var statearr_37903_39207 = state_37858__$1;
(statearr_37903_39207[(2)] = null);

(statearr_37903_39207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (3))){
var inst_37853 = (state_37858[(2)]);
var state_37858__$1 = state_37858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37858__$1,inst_37853);
} else {
if((state_val_37859 === (12))){
var inst_37841 = (state_37858[(2)]);
var state_37858__$1 = state_37858;
var statearr_37904_39209 = state_37858__$1;
(statearr_37904_39209[(2)] = inst_37841);

(statearr_37904_39209[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (2))){
var state_37858__$1 = state_37858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37858__$1,(4),in$);
} else {
if((state_val_37859 === (23))){
var inst_37849 = (state_37858[(2)]);
var state_37858__$1 = state_37858;
var statearr_37909_39210 = state_37858__$1;
(statearr_37909_39210[(2)] = inst_37849);

(statearr_37909_39210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (19))){
var inst_37836 = (state_37858[(2)]);
var state_37858__$1 = state_37858;
var statearr_37910_39211 = state_37858__$1;
(statearr_37910_39211[(2)] = inst_37836);

(statearr_37910_39211[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (11))){
var inst_37802 = (state_37858[(8)]);
var inst_37818 = (state_37858[(7)]);
var inst_37818__$1 = cljs.core.seq(inst_37802);
var state_37858__$1 = (function (){var statearr_37912 = state_37858;
(statearr_37912[(7)] = inst_37818__$1);

return statearr_37912;
})();
if(inst_37818__$1){
var statearr_37913_39212 = state_37858__$1;
(statearr_37913_39212[(1)] = (14));

} else {
var statearr_37914_39213 = state_37858__$1;
(statearr_37914_39213[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (9))){
var inst_37843 = (state_37858[(2)]);
var inst_37844 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37858__$1 = (function (){var statearr_37915 = state_37858;
(statearr_37915[(15)] = inst_37843);

return statearr_37915;
})();
if(cljs.core.truth_(inst_37844)){
var statearr_37916_39214 = state_37858__$1;
(statearr_37916_39214[(1)] = (21));

} else {
var statearr_37917_39215 = state_37858__$1;
(statearr_37917_39215[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (5))){
var inst_37794 = cljs.core.async.close_BANG_(out);
var state_37858__$1 = state_37858;
var statearr_37918_39216 = state_37858__$1;
(statearr_37918_39216[(2)] = inst_37794);

(statearr_37918_39216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (14))){
var inst_37818 = (state_37858[(7)]);
var inst_37820 = cljs.core.chunked_seq_QMARK_(inst_37818);
var state_37858__$1 = state_37858;
if(inst_37820){
var statearr_37926_39217 = state_37858__$1;
(statearr_37926_39217[(1)] = (17));

} else {
var statearr_37931_39218 = state_37858__$1;
(statearr_37931_39218[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (16))){
var inst_37839 = (state_37858[(2)]);
var state_37858__$1 = state_37858;
var statearr_37933_39219 = state_37858__$1;
(statearr_37933_39219[(2)] = inst_37839);

(statearr_37933_39219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37859 === (10))){
var inst_37803 = (state_37858[(10)]);
var inst_37805 = (state_37858[(12)]);
var inst_37810 = cljs.core._nth(inst_37803,inst_37805);
var state_37858__$1 = state_37858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37858__$1,(13),out,inst_37810);
} else {
if((state_val_37859 === (18))){
var inst_37818 = (state_37858[(7)]);
var inst_37830 = cljs.core.first(inst_37818);
var state_37858__$1 = state_37858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37858__$1,(20),out,inst_37830);
} else {
if((state_val_37859 === (8))){
var inst_37804 = (state_37858[(9)]);
var inst_37805 = (state_37858[(12)]);
var inst_37807 = (inst_37805 < inst_37804);
var inst_37808 = inst_37807;
var state_37858__$1 = state_37858;
if(cljs.core.truth_(inst_37808)){
var statearr_37938_39229 = state_37858__$1;
(statearr_37938_39229[(1)] = (10));

} else {
var statearr_37939_39230 = state_37858__$1;
(statearr_37939_39230[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__35540__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35540__auto____0 = (function (){
var statearr_37943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37943[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35540__auto__);

(statearr_37943[(1)] = (1));

return statearr_37943;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35540__auto____1 = (function (state_37858){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_37858);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e37945){var ex__35543__auto__ = e37945;
var statearr_37946_39238 = state_37858;
(statearr_37946_39238[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_37858[(4)]))){
var statearr_37947_39239 = state_37858;
(statearr_37947_39239[(1)] = cljs.core.first((state_37858[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39240 = state_37858;
state_37858 = G__39240;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35540__auto__ = function(state_37858){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35540__auto____1.call(this,state_37858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35540__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35540__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_37952 = f__35786__auto__();
(statearr_37952[(6)] = c__35785__auto__);

return statearr_37952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
}));

return c__35785__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37955 = arguments.length;
switch (G__37955) {
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
var G__37965 = arguments.length;
switch (G__37965) {
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
var G__37978 = arguments.length;
switch (G__37978) {
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
var c__35785__auto___39252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_38010){
var state_val_38011 = (state_38010[(1)]);
if((state_val_38011 === (7))){
var inst_38005 = (state_38010[(2)]);
var state_38010__$1 = state_38010;
var statearr_38020_39254 = state_38010__$1;
(statearr_38020_39254[(2)] = inst_38005);

(statearr_38020_39254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (1))){
var inst_37987 = null;
var state_38010__$1 = (function (){var statearr_38021 = state_38010;
(statearr_38021[(7)] = inst_37987);

return statearr_38021;
})();
var statearr_38022_39255 = state_38010__$1;
(statearr_38022_39255[(2)] = null);

(statearr_38022_39255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (4))){
var inst_37990 = (state_38010[(8)]);
var inst_37990__$1 = (state_38010[(2)]);
var inst_37991 = (inst_37990__$1 == null);
var inst_37992 = cljs.core.not(inst_37991);
var state_38010__$1 = (function (){var statearr_38023 = state_38010;
(statearr_38023[(8)] = inst_37990__$1);

return statearr_38023;
})();
if(inst_37992){
var statearr_38027_39257 = state_38010__$1;
(statearr_38027_39257[(1)] = (5));

} else {
var statearr_38028_39258 = state_38010__$1;
(statearr_38028_39258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (6))){
var state_38010__$1 = state_38010;
var statearr_38030_39262 = state_38010__$1;
(statearr_38030_39262[(2)] = null);

(statearr_38030_39262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (3))){
var inst_38007 = (state_38010[(2)]);
var inst_38008 = cljs.core.async.close_BANG_(out);
var state_38010__$1 = (function (){var statearr_38034 = state_38010;
(statearr_38034[(9)] = inst_38007);

return statearr_38034;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38010__$1,inst_38008);
} else {
if((state_val_38011 === (2))){
var state_38010__$1 = state_38010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38010__$1,(4),ch);
} else {
if((state_val_38011 === (11))){
var inst_37990 = (state_38010[(8)]);
var inst_37999 = (state_38010[(2)]);
var inst_37987 = inst_37990;
var state_38010__$1 = (function (){var statearr_38036 = state_38010;
(statearr_38036[(7)] = inst_37987);

(statearr_38036[(10)] = inst_37999);

return statearr_38036;
})();
var statearr_38037_39265 = state_38010__$1;
(statearr_38037_39265[(2)] = null);

(statearr_38037_39265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (9))){
var inst_37990 = (state_38010[(8)]);
var state_38010__$1 = state_38010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38010__$1,(11),out,inst_37990);
} else {
if((state_val_38011 === (5))){
var inst_37987 = (state_38010[(7)]);
var inst_37990 = (state_38010[(8)]);
var inst_37994 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37990,inst_37987);
var state_38010__$1 = state_38010;
if(inst_37994){
var statearr_38043_39266 = state_38010__$1;
(statearr_38043_39266[(1)] = (8));

} else {
var statearr_38044_39267 = state_38010__$1;
(statearr_38044_39267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (10))){
var inst_38002 = (state_38010[(2)]);
var state_38010__$1 = state_38010;
var statearr_38045_39268 = state_38010__$1;
(statearr_38045_39268[(2)] = inst_38002);

(statearr_38045_39268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (8))){
var inst_37987 = (state_38010[(7)]);
var tmp38038 = inst_37987;
var inst_37987__$1 = tmp38038;
var state_38010__$1 = (function (){var statearr_38046 = state_38010;
(statearr_38046[(7)] = inst_37987__$1);

return statearr_38046;
})();
var statearr_38047_39269 = state_38010__$1;
(statearr_38047_39269[(2)] = null);

(statearr_38047_39269[(1)] = (2));


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
var cljs$core$async$state_machine__35540__auto__ = null;
var cljs$core$async$state_machine__35540__auto____0 = (function (){
var statearr_38048 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38048[(0)] = cljs$core$async$state_machine__35540__auto__);

(statearr_38048[(1)] = (1));

return statearr_38048;
});
var cljs$core$async$state_machine__35540__auto____1 = (function (state_38010){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_38010);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e38049){var ex__35543__auto__ = e38049;
var statearr_38050_39272 = state_38010;
(statearr_38050_39272[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_38010[(4)]))){
var statearr_38051_39273 = state_38010;
(statearr_38051_39273[(1)] = cljs.core.first((state_38010[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39274 = state_38010;
state_38010 = G__39274;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$state_machine__35540__auto__ = function(state_38010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35540__auto____1.call(this,state_38010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35540__auto____0;
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35540__auto____1;
return cljs$core$async$state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_38056 = f__35786__auto__();
(statearr_38056[(6)] = c__35785__auto___39252);

return statearr_38056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38059 = arguments.length;
switch (G__38059) {
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
var c__35785__auto___39276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_38097){
var state_val_38098 = (state_38097[(1)]);
if((state_val_38098 === (7))){
var inst_38093 = (state_38097[(2)]);
var state_38097__$1 = state_38097;
var statearr_38104_39277 = state_38097__$1;
(statearr_38104_39277[(2)] = inst_38093);

(statearr_38104_39277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (1))){
var inst_38060 = (new Array(n));
var inst_38061 = inst_38060;
var inst_38062 = (0);
var state_38097__$1 = (function (){var statearr_38105 = state_38097;
(statearr_38105[(7)] = inst_38061);

(statearr_38105[(8)] = inst_38062);

return statearr_38105;
})();
var statearr_38106_39281 = state_38097__$1;
(statearr_38106_39281[(2)] = null);

(statearr_38106_39281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (4))){
var inst_38065 = (state_38097[(9)]);
var inst_38065__$1 = (state_38097[(2)]);
var inst_38066 = (inst_38065__$1 == null);
var inst_38067 = cljs.core.not(inst_38066);
var state_38097__$1 = (function (){var statearr_38107 = state_38097;
(statearr_38107[(9)] = inst_38065__$1);

return statearr_38107;
})();
if(inst_38067){
var statearr_38108_39282 = state_38097__$1;
(statearr_38108_39282[(1)] = (5));

} else {
var statearr_38109_39283 = state_38097__$1;
(statearr_38109_39283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (15))){
var inst_38087 = (state_38097[(2)]);
var state_38097__$1 = state_38097;
var statearr_38110_39284 = state_38097__$1;
(statearr_38110_39284[(2)] = inst_38087);

(statearr_38110_39284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (13))){
var state_38097__$1 = state_38097;
var statearr_38111_39285 = state_38097__$1;
(statearr_38111_39285[(2)] = null);

(statearr_38111_39285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (6))){
var inst_38062 = (state_38097[(8)]);
var inst_38083 = (inst_38062 > (0));
var state_38097__$1 = state_38097;
if(cljs.core.truth_(inst_38083)){
var statearr_38112_39289 = state_38097__$1;
(statearr_38112_39289[(1)] = (12));

} else {
var statearr_38113_39290 = state_38097__$1;
(statearr_38113_39290[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (3))){
var inst_38095 = (state_38097[(2)]);
var state_38097__$1 = state_38097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38097__$1,inst_38095);
} else {
if((state_val_38098 === (12))){
var inst_38061 = (state_38097[(7)]);
var inst_38085 = cljs.core.vec(inst_38061);
var state_38097__$1 = state_38097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38097__$1,(15),out,inst_38085);
} else {
if((state_val_38098 === (2))){
var state_38097__$1 = state_38097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38097__$1,(4),ch);
} else {
if((state_val_38098 === (11))){
var inst_38077 = (state_38097[(2)]);
var inst_38078 = (new Array(n));
var inst_38061 = inst_38078;
var inst_38062 = (0);
var state_38097__$1 = (function (){var statearr_38115 = state_38097;
(statearr_38115[(7)] = inst_38061);

(statearr_38115[(10)] = inst_38077);

(statearr_38115[(8)] = inst_38062);

return statearr_38115;
})();
var statearr_38116_39299 = state_38097__$1;
(statearr_38116_39299[(2)] = null);

(statearr_38116_39299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (9))){
var inst_38061 = (state_38097[(7)]);
var inst_38075 = cljs.core.vec(inst_38061);
var state_38097__$1 = state_38097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38097__$1,(11),out,inst_38075);
} else {
if((state_val_38098 === (5))){
var inst_38065 = (state_38097[(9)]);
var inst_38061 = (state_38097[(7)]);
var inst_38070 = (state_38097[(11)]);
var inst_38062 = (state_38097[(8)]);
var inst_38069 = (inst_38061[inst_38062] = inst_38065);
var inst_38070__$1 = (inst_38062 + (1));
var inst_38071 = (inst_38070__$1 < n);
var state_38097__$1 = (function (){var statearr_38118 = state_38097;
(statearr_38118[(12)] = inst_38069);

(statearr_38118[(11)] = inst_38070__$1);

return statearr_38118;
})();
if(cljs.core.truth_(inst_38071)){
var statearr_38119_39303 = state_38097__$1;
(statearr_38119_39303[(1)] = (8));

} else {
var statearr_38120_39304 = state_38097__$1;
(statearr_38120_39304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (14))){
var inst_38090 = (state_38097[(2)]);
var inst_38091 = cljs.core.async.close_BANG_(out);
var state_38097__$1 = (function (){var statearr_38122 = state_38097;
(statearr_38122[(13)] = inst_38090);

return statearr_38122;
})();
var statearr_38123_39305 = state_38097__$1;
(statearr_38123_39305[(2)] = inst_38091);

(statearr_38123_39305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (10))){
var inst_38081 = (state_38097[(2)]);
var state_38097__$1 = state_38097;
var statearr_38124_39315 = state_38097__$1;
(statearr_38124_39315[(2)] = inst_38081);

(statearr_38124_39315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (8))){
var inst_38061 = (state_38097[(7)]);
var inst_38070 = (state_38097[(11)]);
var tmp38121 = inst_38061;
var inst_38061__$1 = tmp38121;
var inst_38062 = inst_38070;
var state_38097__$1 = (function (){var statearr_38125 = state_38097;
(statearr_38125[(7)] = inst_38061__$1);

(statearr_38125[(8)] = inst_38062);

return statearr_38125;
})();
var statearr_38126_39319 = state_38097__$1;
(statearr_38126_39319[(2)] = null);

(statearr_38126_39319[(1)] = (2));


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
var cljs$core$async$state_machine__35540__auto__ = null;
var cljs$core$async$state_machine__35540__auto____0 = (function (){
var statearr_38127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38127[(0)] = cljs$core$async$state_machine__35540__auto__);

(statearr_38127[(1)] = (1));

return statearr_38127;
});
var cljs$core$async$state_machine__35540__auto____1 = (function (state_38097){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_38097);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e38128){var ex__35543__auto__ = e38128;
var statearr_38129_39330 = state_38097;
(statearr_38129_39330[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_38097[(4)]))){
var statearr_38130_39332 = state_38097;
(statearr_38130_39332[(1)] = cljs.core.first((state_38097[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39333 = state_38097;
state_38097 = G__39333;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$state_machine__35540__auto__ = function(state_38097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35540__auto____1.call(this,state_38097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35540__auto____0;
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35540__auto____1;
return cljs$core$async$state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_38132 = f__35786__auto__();
(statearr_38132[(6)] = c__35785__auto___39276);

return statearr_38132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38135 = arguments.length;
switch (G__38135) {
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
var c__35785__auto___39345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35786__auto__ = (function (){var switch__35539__auto__ = (function (state_38206){
var state_val_38207 = (state_38206[(1)]);
if((state_val_38207 === (7))){
var inst_38202 = (state_38206[(2)]);
var state_38206__$1 = state_38206;
var statearr_38208_39351 = state_38206__$1;
(statearr_38208_39351[(2)] = inst_38202);

(statearr_38208_39351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (1))){
var inst_38160 = [];
var inst_38161 = inst_38160;
var inst_38162 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38206__$1 = (function (){var statearr_38209 = state_38206;
(statearr_38209[(7)] = inst_38161);

(statearr_38209[(8)] = inst_38162);

return statearr_38209;
})();
var statearr_38210_39352 = state_38206__$1;
(statearr_38210_39352[(2)] = null);

(statearr_38210_39352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (4))){
var inst_38165 = (state_38206[(9)]);
var inst_38165__$1 = (state_38206[(2)]);
var inst_38166 = (inst_38165__$1 == null);
var inst_38167 = cljs.core.not(inst_38166);
var state_38206__$1 = (function (){var statearr_38213 = state_38206;
(statearr_38213[(9)] = inst_38165__$1);

return statearr_38213;
})();
if(inst_38167){
var statearr_38214_39354 = state_38206__$1;
(statearr_38214_39354[(1)] = (5));

} else {
var statearr_38215_39355 = state_38206__$1;
(statearr_38215_39355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (15))){
var inst_38161 = (state_38206[(7)]);
var inst_38194 = cljs.core.vec(inst_38161);
var state_38206__$1 = state_38206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38206__$1,(18),out,inst_38194);
} else {
if((state_val_38207 === (13))){
var inst_38189 = (state_38206[(2)]);
var state_38206__$1 = state_38206;
var statearr_38219_39359 = state_38206__$1;
(statearr_38219_39359[(2)] = inst_38189);

(statearr_38219_39359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (6))){
var inst_38161 = (state_38206[(7)]);
var inst_38191 = inst_38161.length;
var inst_38192 = (inst_38191 > (0));
var state_38206__$1 = state_38206;
if(cljs.core.truth_(inst_38192)){
var statearr_38221_39363 = state_38206__$1;
(statearr_38221_39363[(1)] = (15));

} else {
var statearr_38222_39364 = state_38206__$1;
(statearr_38222_39364[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (17))){
var inst_38199 = (state_38206[(2)]);
var inst_38200 = cljs.core.async.close_BANG_(out);
var state_38206__$1 = (function (){var statearr_38223 = state_38206;
(statearr_38223[(10)] = inst_38199);

return statearr_38223;
})();
var statearr_38225_39369 = state_38206__$1;
(statearr_38225_39369[(2)] = inst_38200);

(statearr_38225_39369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (3))){
var inst_38204 = (state_38206[(2)]);
var state_38206__$1 = state_38206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38206__$1,inst_38204);
} else {
if((state_val_38207 === (12))){
var inst_38161 = (state_38206[(7)]);
var inst_38182 = cljs.core.vec(inst_38161);
var state_38206__$1 = state_38206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38206__$1,(14),out,inst_38182);
} else {
if((state_val_38207 === (2))){
var state_38206__$1 = state_38206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38206__$1,(4),ch);
} else {
if((state_val_38207 === (11))){
var inst_38161 = (state_38206[(7)]);
var inst_38170 = (state_38206[(11)]);
var inst_38165 = (state_38206[(9)]);
var inst_38179 = inst_38161.push(inst_38165);
var tmp38227 = inst_38161;
var inst_38161__$1 = tmp38227;
var inst_38162 = inst_38170;
var state_38206__$1 = (function (){var statearr_38232 = state_38206;
(statearr_38232[(12)] = inst_38179);

(statearr_38232[(7)] = inst_38161__$1);

(statearr_38232[(8)] = inst_38162);

return statearr_38232;
})();
var statearr_38233_39378 = state_38206__$1;
(statearr_38233_39378[(2)] = null);

(statearr_38233_39378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (9))){
var inst_38162 = (state_38206[(8)]);
var inst_38175 = cljs.core.keyword_identical_QMARK_(inst_38162,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_38206__$1 = state_38206;
var statearr_38236_39379 = state_38206__$1;
(statearr_38236_39379[(2)] = inst_38175);

(statearr_38236_39379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (5))){
var inst_38171 = (state_38206[(13)]);
var inst_38162 = (state_38206[(8)]);
var inst_38170 = (state_38206[(11)]);
var inst_38165 = (state_38206[(9)]);
var inst_38170__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38165) : f.call(null,inst_38165));
var inst_38171__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38170__$1,inst_38162);
var state_38206__$1 = (function (){var statearr_38239 = state_38206;
(statearr_38239[(13)] = inst_38171__$1);

(statearr_38239[(11)] = inst_38170__$1);

return statearr_38239;
})();
if(inst_38171__$1){
var statearr_38240_39380 = state_38206__$1;
(statearr_38240_39380[(1)] = (8));

} else {
var statearr_38241_39381 = state_38206__$1;
(statearr_38241_39381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (14))){
var inst_38170 = (state_38206[(11)]);
var inst_38165 = (state_38206[(9)]);
var inst_38184 = (state_38206[(2)]);
var inst_38185 = [];
var inst_38186 = inst_38185.push(inst_38165);
var inst_38161 = inst_38185;
var inst_38162 = inst_38170;
var state_38206__$1 = (function (){var statearr_38242 = state_38206;
(statearr_38242[(7)] = inst_38161);

(statearr_38242[(14)] = inst_38186);

(statearr_38242[(15)] = inst_38184);

(statearr_38242[(8)] = inst_38162);

return statearr_38242;
})();
var statearr_38243_39383 = state_38206__$1;
(statearr_38243_39383[(2)] = null);

(statearr_38243_39383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (16))){
var state_38206__$1 = state_38206;
var statearr_38244_39385 = state_38206__$1;
(statearr_38244_39385[(2)] = null);

(statearr_38244_39385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (10))){
var inst_38177 = (state_38206[(2)]);
var state_38206__$1 = state_38206;
if(cljs.core.truth_(inst_38177)){
var statearr_38245_39386 = state_38206__$1;
(statearr_38245_39386[(1)] = (11));

} else {
var statearr_38246_39399 = state_38206__$1;
(statearr_38246_39399[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (18))){
var inst_38196 = (state_38206[(2)]);
var state_38206__$1 = state_38206;
var statearr_38247_39400 = state_38206__$1;
(statearr_38247_39400[(2)] = inst_38196);

(statearr_38247_39400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (8))){
var inst_38171 = (state_38206[(13)]);
var state_38206__$1 = state_38206;
var statearr_38248_39404 = state_38206__$1;
(statearr_38248_39404[(2)] = inst_38171);

(statearr_38248_39404[(1)] = (10));


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
var cljs$core$async$state_machine__35540__auto__ = null;
var cljs$core$async$state_machine__35540__auto____0 = (function (){
var statearr_38249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38249[(0)] = cljs$core$async$state_machine__35540__auto__);

(statearr_38249[(1)] = (1));

return statearr_38249;
});
var cljs$core$async$state_machine__35540__auto____1 = (function (state_38206){
while(true){
var ret_value__35541__auto__ = (function (){try{while(true){
var result__35542__auto__ = switch__35539__auto__(state_38206);
if(cljs.core.keyword_identical_QMARK_(result__35542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35542__auto__;
}
break;
}
}catch (e38252){var ex__35543__auto__ = e38252;
var statearr_38253_39415 = state_38206;
(statearr_38253_39415[(2)] = ex__35543__auto__);


if(cljs.core.seq((state_38206[(4)]))){
var statearr_38254_39416 = state_38206;
(statearr_38254_39416[(1)] = cljs.core.first((state_38206[(4)])));

} else {
throw ex__35543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39417 = state_38206;
state_38206 = G__39417;
continue;
} else {
return ret_value__35541__auto__;
}
break;
}
});
cljs$core$async$state_machine__35540__auto__ = function(state_38206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35540__auto____1.call(this,state_38206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35540__auto____0;
cljs$core$async$state_machine__35540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35540__auto____1;
return cljs$core$async$state_machine__35540__auto__;
})()
})();
var state__35787__auto__ = (function (){var statearr_38255 = f__35786__auto__();
(statearr_38255[(6)] = c__35785__auto___39345);

return statearr_38255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35787__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
