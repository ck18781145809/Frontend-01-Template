# Week03

## 总结

今天在老师的带领下细致的过了js的词法和语法，虽然之前在《重学前端》看过，但是很多东西还是一知半解，同过再一次的学习，加深了一些知识的印象，也学到了很多新的东西。

## 作业

### js特殊对象

- Function

  - 普通调用和作为构造函数调用有区别

- Array

  - 修改 length 属性有区别
    - 如果 length > oldLength，填充 empty
    - 如果 length < oldLength，截取到 length 位
  - 创建数组时（Array(length)）
    - 不同的 length 有不同的表现
      - length >= 0
      - length 是 -0，转为 +0
      - length > 2<sup>32</sup> -1，报错

- String

  - [[GetOwnProperty]]
  - [[DefineOwnProperty]]
  - [[OwnPropertyKeys]]

- Arguments

  - [[GetOwnProperty]]
  - [[DefineOwnProperty]]
  - [[Get]]
  - [[Set]]
  - [[Delete]]

- Integer-Indexed

  - [[GetOwnProperty]]
  - [[HasProperty]]
  - [[DefineOwnProperty]]
  - [[Get]]
  - [[Set]]
  - [[OwnPropertyKeys]]

- Module Namespace

  - [[SetPropertyOf]]
  - [[IsExtensible]]
  - [[PreventExtensions]]
  - [[GetOwnProperty]]
  - [[DefineOwnProperty]]
  - [[HasProperty]]
  - [[Get]]
  - [[Set]]
  - [[Delete]]

- Immutable Prototype

  - [[SetPropertyOf]]

- Proxy

  - [[SetPropertyOf]]
  - [[GetPropertyOf]]
  - [[IsExtensible]]
  - [[PreventExtensions]]
  - [[GetOwnProperty]]
  - [[DefineOwnProperty]]
  - [[HasProperty]]
  - [[Get]]
  - [[Set]]
  - [[Delete]]
  - [[OwnPropertyKeys]]
  - [[Call]]
  - [[Construct]]

  