
shadow.cljs.devtools.client.env.module_loaded('main');

try { portfolio.core.init(); } catch (e) { console.error("An error occurred when calling (portfolio.core/init)"); throw(e); }