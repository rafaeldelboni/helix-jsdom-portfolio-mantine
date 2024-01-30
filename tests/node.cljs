(ns node
  (:require ["global-jsdom" :as global-jsdom]
            [cljs.test :as test]))

(defmethod test/report [:cljs.test/default :end-run-tests] [test-data]
  (if (cljs.test/successful? test-data)
    (println "Tests passed!!")
    (println (ex-info "Tests Failed" test-data))))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn main []
  (global-jsdom)
  (test/run-all-tests #".*-test$"))
