(ns main.component
  (:require ["@mantine/core" :refer [createTheme AppShell Burger Button Group Skeleton]]
            ["@mantine/hooks" :refer [useDisclosure]]
            [helix.core :refer [$ <>]]
            [helix.dom :as d]
            [main.lib :refer [defnc]]))

(def theme
  (createTheme
   (clj->js
    {:colors {:deep-blue ["#eef3ff" "#dce4f5" "#b9c7e2" "#94a8d0" "#748dc1" "#5f7cb8" "#5474b4" "#44639f" "#39588f" "#2d4b81"]
              :yellow-king ["#fafae8" "#f0f1da" "#e0e1b9" "#cfd094" "#c0c274" "#b7b95f" "#b2b454" "#9c9e44" "#8a8c39" "#767a2b"]}
     :shadows {:md "1px 1px 3px rgba(0, 0, 0, .25)"
               :xl "5px 5px 3px rgba(0, 0, 0, .25)"}
     :headings {:fontFamily "Roboto, sans-serif"
                :sizes {:h1 {:fontSize "rem(36)"}}}})))

(defnc component-boolean [{:keys [value]}]
  (<> (if value "yes" "no")))

(defnc button [{:keys [color on-click text]}]
  ($ Button {:color color :onClick on-click} text))

(defnc app-shell []
  (let [[opened fns] (useDisclosure)
        {:keys [toggle]} (js->clj fns :keywordize-keys true)]
    ($ AppShell {:padding "md"
                 :header #js {:height 60}
                 :navbar #js {:width 300
                              :breakpoint "md"
                              :collapsed #js {:mobile (not opened)}}}

       ($ AppShell.Header
          ($ Group {:h "100%" :px "md"}
             ($ Burger {:opened opened
                        :onClick toggle
                        :hiddenFrom "sm"
                        :size "sm"})
             (d/div "Helix + Mantine")))

       ($ AppShell.Navbar {:p "md"}
          (for [index (range 10)]
            ($ Skeleton {:key index :h 28 :mt "sm" :animate false})))

       ($ AppShell.Main
          (d/h1 "helix-jsdom-portfolio-mantine")
          ($ button {:text "My Button"
                     :on-click #(js/console.log "clicked!")
                     :color "yellow-king"})
          (d/p
           ($ component-boolean {:value true}))))))
