(ns main.mantine-test
  (:require ["@mantine/core" :refer [Group MantineProvider NavLink]]
            ["@testing-library/react" :as tlr]
            [cljs.test :refer [async deftest is testing use-fixtures]]
            [clojure.string :as str]
            [helix.core :refer [$]]
            [main.lib :refer [defnc]]
            [promesa.core :as p]
            [shadow.cljs.modern :refer [defclass]]))

(defn mock-window-fns []
  (let [mock-fn (fn [& _args] nil)
        get-computed-style (.-getComputedStyle js/window)
        resize-observer (defclass ResizeObserver
                          (constructor [this] nil)
                          Object
                          (observe [this & args] nil)
                          (unobserve [this & args] nil)
                          (disconnect [this & args] nil))]

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
  {:before mock-window-fns
   :after tlr/cleanup})

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
