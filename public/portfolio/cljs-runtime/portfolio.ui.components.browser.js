goog.provide('portfolio.ui.components.browser');
portfolio.ui.components.browser.render_items = (function portfolio$ui$components$browser$render_items(var_args){
var G__44826 = arguments.length;
switch (G__44826) {
case 1:
return portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$1 = (function (items){
return portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$2(null,items);
}));

(portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$2 = (function (attrs,items){
if(cljs.core.seq(items)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),attrs,(function (){var iter__5523__auto__ = (function portfolio$ui$components$browser$iter__44827(s__44828){
return (new cljs.core.LazySeq(null,(function (){
var s__44828__$1 = s__44828;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44828__$1);
if(temp__5804__auto__){
var s__44828__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44828__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44828__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44830 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44829 = (0);
while(true){
if((i__44829 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__44829);
cljs.core.chunk_append(b__44830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(portfolio.ui.components.browser.render_menu.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.browser.render_menu.cljs$core$IFn$_invoke$arity$1(item) : portfolio.ui.components.browser.render_menu.call(null,item))], null));

var G__44850 = (i__44829 + (1));
i__44829 = G__44850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44830),portfolio$ui$components$browser$iter__44827(cljs.core.chunk_rest(s__44828__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44830),null);
}
} else {
var item = cljs.core.first(s__44828__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(portfolio.ui.components.browser.render_menu.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.browser.render_menu.cljs$core$IFn$_invoke$arity$1(item) : portfolio.ui.components.browser.render_menu.call(null,item))], null),portfolio$ui$components$browser$iter__44827(cljs.core.rest(s__44828__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(items);
})()], null);
} else {
return null;
}
}));

(portfolio.ui.components.browser.render_items.cljs$lang$maxFixedArity = 2);

portfolio.ui.components.browser.get_context_offset = (function portfolio$ui$components$browser$get_context_offset(context,kind){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pair){
var G__44831 = pair;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"folder","folder",1515881736)], null),G__44831)){
return (24);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"package","package",1189062786)], null),G__44831)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"package","package",1189062786),new cljs.core.Keyword(null,"folder","folder",1515881736)], null),G__44831)){
return (24);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"package","package",1189062786),new cljs.core.Keyword(null,"package","package",1189062786)], null),G__44831)){
return (24);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"unit","unit",375175175)], null),G__44831)){
return (8);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"package","package",1189062786),new cljs.core.Keyword(null,"unit","unit",375175175)], null),G__44831)){
return (48);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44831)].join('')));

}
}
}
}
}
}
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind], null)))));
});
/**
 * 
 */
portfolio.ui.components.browser.Folder = (function (){var G__44832 = (function (p__44834){
var map__44835 = p__44834;
var map__44835__$1 = cljs.core.__destructure_map(map__44835);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44835__$1,new cljs.core.Keyword(null,"title","title",636505583));
var illustration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44835__$1,new cljs.core.Keyword(null,"illustration","illustration",-48860973));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44835__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44835__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44835__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var left_padding = ((8) + portfolio.ui.components.browser.get_context_offset(context,new cljs.core.Keyword(null,"folder","folder",1515881736)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--bg)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h4","h2.h4",1151335370),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--folder-bg)",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid var(--folder-border)",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid var(--folder-border)",new cljs.core.Keyword(null,"padding","padding",1660304693),["16px 8px 16px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_padding),"px"].join(''),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions)?"pointer":null),new cljs.core.Keyword(null,"gap","gap",80255254),(8)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration))?phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(illustration),new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)], 0)):null),title], null),portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 24px"], null)], null),items)], null);
});
var G__44833 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.browser/Folder"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44832,G__44833) : dumdom.core.component.call(null,G__44832,G__44833));
})();
/**
 * 
 */
portfolio.ui.components.browser.Package = (function (){var G__44836 = (function (p__44838){
var map__44839 = p__44838;
var map__44839__$1 = cljs.core.__destructure_map(map__44839);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44839__$1,new cljs.core.Keyword(null,"title","title",636505583));
var illustration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44839__$1,new cljs.core.Keyword(null,"illustration","illustration",-48860973));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44839__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var toggle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44839__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44839__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44839__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44839__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"var(--highlight-bg)":null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?"bold":null),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),((cljs.core.truth_(selected_QMARK_)?(4):(8)) + portfolio.ui.components.browser.get_context_offset(context,new cljs.core.Keyword(null,"package","package",1189062786))),new cljs.core.Keyword(null,"margin","margin",-995903681),(cljs.core.truth_(selected_QMARK_)?"0 4px":null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(toggle))?phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(toggle),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(toggle);
if(cljs.core.truth_(temp__5804__auto__)){
var rotation = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"transform 0.15s",new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotation),"deg)"].join('')], null);
} else {
return null;
}
})()], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(toggle)], null)], 0)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration))?phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?"var(--package-selected-fg)":new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(illustration)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null)], null)], 0)):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions)?"pointer":null),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0"], null)], null),title], null)], null),portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$1(items)], null);
});
var G__44837 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.browser/Package"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44836,G__44837) : dumdom.core.component.call(null,G__44836,G__44837));
})();
/**
 * 
 */
portfolio.ui.components.browser.Unit = (function (){var G__44840 = (function (p__44842){
var map__44843 = p__44842;
var map__44843__$1 = cljs.core.__destructure_map(map__44843);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44843__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44843__$1,new cljs.core.Keyword(null,"url","url",276297046));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44843__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44843__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var illustration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44843__$1,new cljs.core.Keyword(null,"illustration","illustration",-48860973));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44843__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var left_padding = portfolio.ui.components.browser.get_context_offset(context,new cljs.core.Keyword(null,"unit","unit",375175175));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"var(--highlight-bg)":null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?(600):null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 4px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"padding","padding",1660304693),["8px 0 8px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_padding),"px"].join('')], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration))?phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(illustration),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null)], null)], 0)):null),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--browser-unit-fg)"], null)], null),title], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"color","color",1011675173),"var(--browser-unit-fg)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null))], null);
});
var G__44841 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.browser/Unit"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44840,G__44841) : dumdom.core.component.call(null,G__44840,G__44841));
})();
portfolio.ui.components.browser.render_menu = (function portfolio$ui$components$browser$render_menu(props){
var G__44844 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props);
var G__44844__$1 = (((G__44844 instanceof cljs.core.Keyword))?G__44844.fqn:null);
switch (G__44844__$1) {
case "folder":
return (portfolio.ui.components.browser.Folder.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.browser.Folder.cljs$core$IFn$_invoke$arity$1(props) : portfolio.ui.components.browser.Folder.call(null,props));

break;
case "package":
return (portfolio.ui.components.browser.Package.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.browser.Package.cljs$core$IFn$_invoke$arity$1(props) : portfolio.ui.components.browser.Package.call(null,props));

break;
default:
return (portfolio.ui.components.browser.Unit.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.browser.Unit.cljs$core$IFn$_invoke$arity$1(props) : portfolio.ui.components.browser.Unit.call(null,props));

}
});
/**
 * 
 */
portfolio.ui.components.browser.Browser = (function (){var G__44845 = (function (p__44847){
var map__44848 = p__44847;
var map__44848__$1 = cljs.core.__destructure_map(map__44848);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44848__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$1(items);
});
var G__44846 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.browser/Browser",new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),portfolio.ui.components.elastic_container.enter(),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),portfolio.ui.components.elastic_container.leave()], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__44845,G__44846) : dumdom.core.component.call(null,G__44845,G__44846));
})();

//# sourceMappingURL=portfolio.ui.components.browser.js.map
