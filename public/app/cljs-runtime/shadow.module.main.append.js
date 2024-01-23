
shadow.cljs.devtools.client.env.module_loaded('main');

try { main.app.init(); } catch (e) { console.error("An error occurred when calling (main.app/init)"); throw(e); }