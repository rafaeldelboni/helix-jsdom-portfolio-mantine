(ns portfolio.scenes.component-scene
  (:require ["@mantine/core" :refer [MantineProvider]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [main.component :as c]
            [main.lib :refer [defnc]]
            [portfolio.react-18 :refer-macros [defscene]]))

(defscene mantine-helix-hooks-counter
  :title "Counter with React Hooks and Mantine"
  ($ MantineProvider {:theme c/theme}
    ($ c/counter)))

(defscene component-boolean-true
  (d/div (d/h1 "helix-jsdom")
         ($ c/component-boolean {:value true})))

(defscene component-boolean-false
  ($ c/component-boolean {:value false}))

(defscene mantine-button
  ($ MantineProvider {:theme c/theme}
     ($ c/button {:text "My Button"
                  :on-click #(js/console.log "clicked!")
                  :color "blue"})))
