(ns portfolio.core
  (:require [portfolio.scenes.component-scene]
            [portfolio.ui :as ui]))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn init
  []
  (ui/start! {:config {:css-paths ["/app/app.css"]
                       :canvas-path "/portfolio/custom-canvas.html"}}))
