(ns main.mantine-test
  (:require ["@mantine/core" :refer [Group MantineProvider NavLink Button]]
            ["@testing-library/react" :as tlr]
            [aux :refer [->text get-by-text get-all-by-role get-by-text click!] :as aux]
            [test-lib :refer [async wait]]
            [cljs.test :refer [deftest is testing use-fixtures]]
            [clojure.string :as str]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [main.lib :refer [defnc]]
            [promesa.core :as p]))

(defn render [component]
  (tlr/render ($ MantineProvider component)))

(use-fixtures :each
  {:before aux/async-setup
   :after aux/async-cleanup})

(defnc MyNavLinks []
  ($ Group {:data-testid "link-groups"}
     ($ NavLink {:label "a"
                 :href "www.example.com/a"})
     ($ NavLink {:label "b"
                 :href "www.example.com/b"})))

(defnc MyCounter []
  (let [[count set-count] (hooks/use-state 0)]
    (d/div
     (d/p "Count: " count)
     ($ Button {:onClick #(set-count inc)} "Increase"))))

(deftest mantine-test-sync
  (testing "should render mantine component links"
     (render ($ MyNavLinks))
     (is (= ["a" "b"]
            (map ->text (get-all-by-role "link"))))))

(deftest mantine-test-async
  (testing "should render counter, after click, should change state to 1"
    (async
      (render ($ MyCounter))
      (is (some? (get-by-text "Count: 0")))
      (click! (get-by-text "Increase"))
      (wait (is (some? (get-by-text "Count: 1")))))))
