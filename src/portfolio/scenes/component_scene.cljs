(ns portfolio.scenes.component-scene
  (:require [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [main.component :as c]
            [main.lib :refer [defnc]]
            [portfolio.react-18 :refer-macros [defscene]]))


(defnc counter []
  (let [[count set-count] (hooks/use-state 0)]
    (d/div
     (d/p "Count: " count)
     (d/button {:on-click #(set-count inc)} "Increase"))))

(defscene helix-counter
  :title "Counter with React Hooks"
  ($ counter))

(defscene component-boolean-true
  (d/div (d/h1 "helix-jsdom")
         ($ c/component-boolean {:value true})))

(defscene component-boolean-false
  ($ c/component-boolean {:value false}))
