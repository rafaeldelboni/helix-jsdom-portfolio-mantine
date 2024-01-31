(ns main.mantine-test
  (:require ["@mantine/core" :refer [Group MantineProvider NavLink]]
            ["@testing-library/react" :as tlr]
            [aux :as aux]
            [cljs.test :refer [async deftest is testing use-fixtures]]
            [clojure.string :as str]
            [helix.core :refer [$]]
            [main.lib :refer [defnc]]
            [promesa.core :as p]))

(use-fixtures :each
  {:before aux/async-setup
   :after aux/async-cleanup})

(defnc MyNavLinks []
  ($ Group {:data-testid "link-groups"}
     ($ NavLink {:label "a"
                 :href "www.example.com/a"})
     ($ NavLink {:label "b"
                 :href "www.example.com/b"})))

(deftest mantine-test
  (testing "should render mantine component links"
    (async done
      (p/catch
        (p/let [groups (tlr/waitFor #(-> (tlr/render
                                          ($ MantineProvider ($ MyNavLinks)))
                                         (.getByTestId "link-groups")))
                links (->> (.querySelectorAll groups ".mantine-NavLink-root")
                           (mapv #(-> % .-href (str/split "/") last)))]

          (is (= ["a" "b"]
                 links))

          (done))
        (fn [err] (js/console.error err))))))
