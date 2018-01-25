
// koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。
// 使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套， 并极大地提升错误处理的效率。
// koa 不在内核方法中绑定任何中间件， 它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。
// Koa 应用程序是一个包含一组中间件函数的对象，它是按照类似堆栈的方式组织和执行的。
// Koa 类似于你可能遇到过的许多其他中间件系统，例如 Ruby 的 Rack ，Connect 等，然而，一个关键的设计点是在其低级中间件层中提供高级“语法糖”。 这提高了互操作性，稳健性，并使书写中间件更加愉快。
// const http = require('http');
// const https = require('https');
// const Koa = require('koa');
// const app = new Koa();
// http.createServer(app.callback()).listen(1110);
// https.createServer(app.callback()).listen(1111);

const PORT=1111;
import Koa from 'koa';
const app = new Koa(); // 实例化对象

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa in app-async.js';
});

app.listen(PORT);
console.log("server runing , port: "+PORT);

module.exports = app;
