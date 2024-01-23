(ns portfolio.core
  (:require [portfolio.ui :as ui]
            [portfolio.scenes.component-scene]))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn init
  []
  (ui/start!))
