(ns main.mantine-test
  (:require ["@mantine/core" :refer [Group MantineProvider NavLink]]
            ["@testing-library/dom" :as tld]
            ["@testing-library/react" :as tlr]
            [clojure.string :as str]
            [clojure.test :refer [async deftest is testing use-fixtures]]
            [helix.core :refer [$]]
            [main.lib :refer [defnc]]
            [promesa.core :as p]))

(use-fixtures :each
  {:before #(async done (tlr/cleanup) (done))
   :after #(async done (tlr/cleanup) (done))})

(defnc MyNavLinks []
  ($ Group {:data-testid "link-groups"}
     ($ NavLink {:label "a"
                 :href "www.example.com/a"})
     ($ NavLink {:label "b"
                 :href "www.example.com/b"})))

(deftest header-drawer-component-test
  (testing "drawer should render component links"
    (async done
           (p/let [_ (tlr/render ($ MantineProvider ($ MyNavLinks)))
                   links (tlr/waitFor #(.getByTestId tld/screen "link-groups"))]

             (is (= ["a" "b"]
                    (doall
                     (map #(-> % .-href (str/split "/") last)
                          (.querySelectorAll links ".mantine-NavLink-root")))))

             (done)))))
