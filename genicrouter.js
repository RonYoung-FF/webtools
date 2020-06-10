//导入express
const express = require('express');
//创建服务器实例
const app = express();
//处理post请求参数中间件
app.use(bodyParser.json());//此中间件用于处理json格式的post请求
app.use(bodyParser.urlencoded({extended:false}))//此中间件处理url格式的post请求
//处理跨域请求文件头信息
app.use('*',(req,res,next)=>{
    //允许哪个来源的请求
    res.header('Access-Control-Allow-Origin','http://localhost:3000')
    //允许何种请求
    res.header('Access-Control-Allow-Methods','get,post')
    //允许请求携带cookie
    res.header('Access-Control-Allow-Credentials',true)
    //允许ajax请求
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //允许请求头包含类型信息
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
//处理请求
//传统URL参数
app.get('/url', (req, res) => {
    res.send('传统的URL传递参数!' + req.query.id)
  })
//restful形式参数
  app.get('/url/:id', (req, res) => {
    res.send('Restful形式的URL传递参数!' + req.params.id)
  })
//返回一个json格式字符串
  app.get('/url', (req, res) => {
    res.json({
      uname: 'lisi',
      age: 13,
      gender: 'male'
    });
  })
  
//监听端口
app.listen(3000);
console.log('服务器开启成功');

