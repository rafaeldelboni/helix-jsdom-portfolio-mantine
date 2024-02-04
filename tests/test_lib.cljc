(ns test-lib
  (:require [cljs.test]
            [promesa.core])
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
