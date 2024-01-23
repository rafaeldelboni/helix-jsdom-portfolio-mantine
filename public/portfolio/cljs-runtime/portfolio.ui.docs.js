goog.provide('portfolio.ui.docs');
/**
 * Source markdown uses relative file paths for links to other documents, so
 *   documentation is also browsable on Github. This function changes those links
 *   to something that can be navigated by the Portfolio app.
 */
portfolio.ui.docs.fix_links = (function portfolio$ui$docs$fix_links(md){
return clojure.string.replace(md,/\(\.\/(.+)\.md(#[^\)]+)?\)/,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname),"?doc=$1$2)"].join(''));
});
/**
 * Source markdown uses relative file paths for images so they render on Github.
 *   It's hard for Portfolio to ensure that these images are available as resources
 *   over HTTP in the local setup, so it instead serves them from Github in the
 *   Portfolio UI.
 */
portfolio.ui.docs.fix_images = (function portfolio$ui$docs$fix_images(md){
return clojure.string.replace(md,/\.\/([^\)\"]+\.png)/,"https://github.com/cjohansen/portfolio/blob/main/docs/portfolio/$1?raw=true");
});
/**
 * Direct source file links to Github
 */
portfolio.ui.docs.fix_source_links = (function portfolio$ui$docs$fix_source_links(md){
return clojure.string.replace(md,/\(..\/..\/([^\)]+\.cljs)\)/,"(https://github.com/cjohansen/portfolio/blob/main/$1)");
});
portfolio.ui.docs.__GT_markdown = (function portfolio$ui$docs$__GT_markdown(lines){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"markdown","markdown",1227225089),clojure.string.trim(portfolio.ui.docs.fix_source_links(portfolio.ui.docs.fix_images(portfolio.ui.docs.fix_links(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines)))))], null);
});
portfolio.ui.docs.prepare_doc = (function portfolio$ui$docs$prepare_doc(doc){
var lines = clojure.string.split_lines(clojure.string.trim(doc));
var temp__5802__auto__ = cljs.core.re_find(/^#[^#](.*)/,cljs.core.first(lines));
if(cljs.core.truth_(temp__5802__auto__)){
var vec__44306 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44306,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44306,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.docs.__GT_markdown(cljs.core.next(lines))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.docs.__GT_markdown(lines)], null)], null);
}
});

//# sourceMappingURL=portfolio.ui.docs.js.map
