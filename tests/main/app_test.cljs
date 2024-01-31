(ns main.app-test
  (:require ["@testing-library/react" :as tlr]
            [cljs.test :refer [deftest is testing use-fixtures]]
            [helix.core :refer [$]]
            [main.component :as c]))

(defn setup-root [f]
  (f)
  (tlr/cleanup))

(use-fixtures :each setup-root)

(deftest a-component-test
  (testing "basic component test"
    (let [container (tlr/render ($ c/component-boolean {:value false}))
          div       (.getByText container "no")]
      (is (= "no" (.-textContent div))))))
