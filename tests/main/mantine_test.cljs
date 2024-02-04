(ns main.mantine-test
  (:require ["@mantine/core" :refer [Group MantineProvider NavLink]]
            [aux :as aux :refer [->text click! get-all-by-role get-by-text
                                 wait]]
            [cljs.test :refer [deftest is testing use-fixtures]]
            [helix.core :refer [$]]
            [main.component :as c]
            [main.lib :refer [defnc]]
            [test-lib :refer [async]]))

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
