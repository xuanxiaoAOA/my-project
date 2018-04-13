react.js使用demo
## 启动说明
项目使用Create React App脚手架(https://github.com/facebookincubator/create-react-app)
yarn start
## demo1 高阶组件
原文地址：https://github.com/brickspert/blog/issues/2388 
##demo2 继承自定义组件 
还不清楚是否建议使用
## demo3 PureComponent+immutable
PureComponent用法与载shouldComponentUpdate做判断相同，比对的是引用地址（内存地址）
var a=1;
var b=a
b=2;
console.log(a,b)//1   2
var c={id:1};
var d=c
d.id=2
console.log(c,d)//{id: 2}   {id: 2}  原因d和c是同一个内存地址 所以d改变了 c也发生变化 
PureComponent如果props引用地址未改变（内容发生变化）也不会render
结合immutable（不可变变量） 每一次改变都是一个全新的引用（问题：久的是否还在内存中） 


