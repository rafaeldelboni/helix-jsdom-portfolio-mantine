(ns main.app-test
  (:require ["@testing-library/react" :as tlr]
            [aux :as aux]
            [cljs.test :refer [deftest is testing use-fixtures]]
            [helix.core :refer [$]]
            [main.component :as c]))

(use-fixtures :each aux/sync-setup)

(deftest a-component-test
  (testing "basic component test"
    (let [container (tlr/render ($ c/component-boolean {:value false}))
          div       (.getByText container "no")]
      (is (= "no" (.-textContent div))))))
