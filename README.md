# static-html
> 纯静态项目

## 运行项目
```
* 代码地址：
  $ git clone https://github.com/lenjee/static-html.git
  $ cd static-html/
  $ npm install
  $ npm dev
```


## 搭建项目
```
* 初始化npm
  $ npm init
* 安装koa
  $ npm install koa --save
* Babel默认是不会转换Map,Promise等全局对象，这里就需要加载bebel-polyfill模块进行转换
* babel-preset-env 是一个新的 preset模块，可以根据配置的目标运行环境（environment）自动启用需要的 babel 插件。有了babel-preset-env就不用考虑babel-preset-es2015.
  $ npm install babel-core babel-polyfill babel-register babel-preset-env --save-dev
* 在本地创建 .babelrc ，并加入下列代码，这样koa就可以编写es6语法
    {
      "presets": ["env"]
    }
* index.js 中引入 babel-register 、babel-polyfill 、server.js
* server.js 中创建服务
```
