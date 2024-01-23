goog.provide('portfolio.ui.color');
portfolio.ui.color.hex__GT_rgba = (function portfolio$ui$color$hex__GT_rgba(hex){
var vec__44738 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44733_SHARP_){
return parseInt(p1__44733_SHARP_,(16));
}),(cljs.core.truth_((function (){var G__44745 = cljs.core.count(hex);
var fexpr__44744 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__44744.cljs$core$IFn$_invoke$arity$1 ? fexpr__44744.cljs$core$IFn$_invoke$arity$1(G__44745) : fexpr__44744.call(null,G__44745));
})())?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44734_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44734_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44734_SHARP_)].join('');
}),cljs.core.re_seq(/[^#]/,hex)):cljs.core.re_seq(/[^#]{2}/,hex))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255)], null)));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44738,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44738,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44738,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44738,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,(a / (255))], null);
});
portfolio.ui.color.rgb_re = /rgb\((\d+), (\d+), (\d+)\)/;
portfolio.ui.color.rgba_re = /rgba\((\d+), (\d+), (\d+), (.*)\)/;
portfolio.ui.color.perceived_rgb = (function portfolio$ui$color$perceived_rgb(bg,rgb_or_rgba){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(rgb_or_rgba))){
return rgb_or_rgba;
} else {
var vec__44751 = bg;
var bg_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44751,(0),null);
var bg_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44751,(1),null);
var bg_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44751,(2),null);
var vec__44754 = rgb_or_rgba;
var fg_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44754,(0),null);
var fg_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44754,(1),null);
var fg_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44754,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44754,(3),null);
var bg_a = ((1) - a);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((bg_r * bg_a) + (fg_r * a)) | (0)),(((bg_g * bg_a) + (fg_g * a)) | (0)),(((bg_b * bg_a) + (fg_b * a)) | (0))], null);
}
});
portfolio.ui.color.rgba_str__GT_rgb = (function portfolio$ui$color$rgba_str__GT_rgb(color){
if(cljs.core.truth_(cljs.core.re_find(portfolio.ui.color.rgba_re,color))){
return portfolio.ui.color.perceived_rgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44757_SHARP_){
return parseFloat(p1__44757_SHARP_);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.re_find(portfolio.ui.color.rgba_re,color))));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44758_SHARP_){
return parseInt(p1__44758_SHARP_,(10));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.re_find(portfolio.ui.color.rgb_re,color))));
}
});
portfolio.ui.color.__GT_rgb = (function portfolio$ui$color$__GT_rgb(color){
if(cljs.core.truth_(cljs.core.re_find(/#.+/,color))){
return portfolio.ui.color.perceived_rgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null),portfolio.ui.color.hex__GT_rgba(color));
} else {
return portfolio.ui.color.rgba_str__GT_rgb(color);
}
});
portfolio.ui.color.pct = (function portfolio$ui$color$pct(decimal){
return Math.floor((decimal * (100)));
});
portfolio.ui.color.round = (function portfolio$ui$color$round(n){
return (portfolio.ui.color.pct(n) / (100));
});
portfolio.ui.color.rgb__GT_hsl = (function portfolio$ui$color$rgb__GT_hsl(rgb){
var vec__44760 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44759_SHARP_){
return portfolio.ui.color.round((p1__44759_SHARP_ / 255.0));
}),rgb);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44760,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44760,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44760,(2),null);
var minv = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = r;
var y__5134__auto__ = g;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = b;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var maxv = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = r;
var y__5131__auto__ = g;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = b;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var diff = (maxv - minv);
var luminace = Math.ceil(((100) * ((maxv + minv) / (2))));
var saturation = portfolio.ui.color.pct(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minv,maxv))?(0):(((luminace < (50)))?(diff / (maxv + minv)):(diff / (((2) - maxv) - minv))
)));
var hue = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(saturation,(0)))?(0):Math.ceil(((60) * ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(maxv,r))?((g - b) / diff):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(maxv,g))?((2) + ((b - r) / diff)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(maxv,b))?((4) + ((r - g) / diff)):null))))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"h","h",1109658740),hue,new cljs.core.Keyword(null,"s","s",1705939918),saturation,new cljs.core.Keyword(null,"l","l",1395893423),luminace], null);
});

//# sourceMappingURL=portfolio.ui.color.js.map
