(ns test-lib
  #?(:clj (:require [cljs.test :as t]
                    [promesa.core :as p]))
  #?(:cljs (:require-macros [test-lib])))

#?(:clj
    (defmacro async
      [& body]
      `(cljs.test/async done#
         (promesa.core/catch
           (promesa.core/do ~@body (done#))
           (fn [err#]
             (is (= nil err#))
             (done#))))))
