(ns main.app
  (:require ["@mantine/core" :refer [MantineProvider]]
            ["react-dom/client" :as rdom]
            [helix.core :refer [$]]
            [main.component :refer [app-shell theme]]
            [main.lib :refer [defnc]]))

(defnc app []
  ($ MantineProvider {:theme theme}
     ($ app-shell)))

(defonce root
  (rdom/createRoot
   (js/document.getElementById "app")))

(defn render []
  (.render root ($ app)))

(defn ^:export init []
  (render))
