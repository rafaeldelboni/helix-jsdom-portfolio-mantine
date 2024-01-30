(ns main.mantine-test
  (:require ["@mantine/core" :refer [Group MantineProvider NavLink]]
            ["@testing-library/dom" :as tld]
            ["@testing-library/react" :as tlr]
            [clojure.string :as str]
            [cljs.test :refer [async deftest is testing use-fixtures]]
            [helix.core :refer [$]]
            [main.lib :refer [defnc]]
            [promesa.core :as p]
            [shadow.cljs.modern :refer [defclass]]))

(defn mock-window-fns []
  (let [mock-fn (fn [& args] (js/console.debug args))
        get-computed-style (.-getComputedStyle js/window)
        resize-observer (defclass ResizeObserver
                          (constructor [this] (js/console.debug this))
                          Object
                          (observe [this & args] (js/console.debug this args))
                          (unobserve [this & args] (js/console.debug this args))
                          (disconnect [this & args] (js/console.debug this args)))]

    (set! (.-getComputedStyle js/window)
          (fn [elt]
            (get-computed-style elt)))

    (.defineProperty js/Object js/window
                     "matchMedia"
                     #js {:writable true,
                          :value (fn [query]
                                   #js {:matches false,
                                        :media query,
                                        :onchange nil,
                                        :addListener mock-fn,
                                        :removeListener mock-fn,
                                        :addEventListener mock-fn,
                                        :removeEventListener mock-fn,
                                        :dispatchEvent mock-fn})})

    (set! (.-ResizeObserver js/window)
          resize-observer)))

(use-fixtures :each
  {:before #(async done (mock-window-fns) (done))
   :after #(async done (tlr/cleanup) (done))})

(defnc MyNavLinks []
  ($ Group {:data-testid "link-groups"}
     ($ NavLink {:label "a"
                 :href "www.example.com/a"})
     ($ NavLink {:label "b"
                 :href "www.example.com/b"})))

(deftest mantine-test
  (testing "drawer should render component links"

    (async done
           (p/let [_ (tlr/render ($ MantineProvider ($ MyNavLinks)))
                   links (tlr/waitFor #(.getByTestId tld/screen "link-groups"))]

             (is (= ["a" "b"]
                    (doall
                     (map #(-> % .-href (str/split "/") last)
                          (.querySelectorAll links ".mantine-NavLink-root")))))

             (done)))))
