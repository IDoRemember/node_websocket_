const path = require('path');
export default {
  entry: "src/index.js",
  disableCSSModules: true,
  env: {
    development: {
      proxy: {
        "/schoolexam": {
          //"target": "http://172.17.3.122:8080/freelycar_wechat/api/",//赵冉
          "target": "ws://172.17.3.158:8081/schoolexam/echo",//小付
          //  "target": "http://192.168.0.104:8080/freelycar_wechat/api/",  //小轩
          // "target": "http://localhost:8081/freelycar_wechat/api/",  //localhost

          "changeOrigin": true,
          "pathRewrite": { "^/api": "" }
        }
      }
    }
  }
}
