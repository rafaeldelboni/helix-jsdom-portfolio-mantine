(ns main.mantine-test
  (:require ["@mantine/core" :refer [Group MantineProvider NavLink Button]]
            [aux :as aux :refer [get-all-by-role get-by-text click! wait ->text]]
            [test-lib :refer [async]]
            [cljs.test :refer [deftest is testing use-fixtures]]
            [clojure.string :as str]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [main.component :as c]
            [main.lib :refer [defnc]]
            [promesa.core :as p]))

(defn render [component]
  (aux/render ($ MantineProvider component)))

(use-fixtures :each
  {:before aux/async-setup
   :after aux/async-cleanup})

(defnc MyNavLinks []
  ($ Group {:data-testid "link-groups"}
     ($ NavLink {:label "a"
                 :href "www.example.com/a"})
     ($ NavLink {:label "b"
                 :href "www.example.com/b"})))

(deftest mantine-test-sync
  (testing "should render mantine component links"
     (render ($ MyNavLinks))
     (is (= ["a" "b"]
            (map ->text (get-all-by-role "link"))))))

(deftest mantine-test-async
  (testing "should render counter, after click, should change state to 1"
    (async
      (render ($ c/counter))
      (is (some? (get-by-text "Count: 0")))
      (click! (get-by-text "Increase"))
      (wait #(is (some? (get-by-text "Count: 1")))))))
