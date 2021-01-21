const express = require('express')
require('express-async-errors')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('config')
const port = config.get('port')
const app = express()
const { errorLogger } = require('./util/logger')

// 引入路由
const {testRouter} = require('./route')

// 引入自定义异常
const { HttpError } = require('./common')

const { WebLogMiddle } = require('./middleware')

// 解决跨域
app.use(cors({
    origin: '*',
    methods:['GET','POST','PATCH','DELETE'],
    allowedHeaders: '*'
}))



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(WebLogMiddle)


// 注册路由
app.use(testRouter)



/**
 * 全局异常
 */
app.use(async(err,req,res,next) => {
    errorLogger.error("全局异常 " + err)
    if(err instanceof HttpError) {
        res.status(500).json({
            code: 500,
            msg: err.code,
            stack: err.stack
        })
    } else {
        res.status(500).json({
            code: 500,
            msg:"系统异常"
        })
    }
    await next()
})



app.listen(port,() => {
    console.log("web listening in " + port)
})
