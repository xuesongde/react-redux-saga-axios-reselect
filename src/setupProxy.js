const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/mock/599fe56cbd4203191f535ed9", {
      target: "https://www.easy-mock.com",
      changeOrigin: true,
      rejectUnauthorized: false
    })
  );
};
