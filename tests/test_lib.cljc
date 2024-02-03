(ns test-lib
  #?(:clj (:require [promesa.core :as p]
                    [cljs.test :as t]))
  #?(:cljs (:require-macros [test-lib])))

#?(:clj
    (defmacro async
      [& body]
      `(t/async done#
         (p/catch
           (p/do ~@body (done#))
           (fn [err#]
             (is (= nil err#))
             (done#))))))

#?(:clj
    (defmacro wait
      [& body]
      `(tlr/waitFor (fn [] ~@body))))
