const uuid = require('uuid')
const { WebLog } = require('../model')
const { appLogger } = require('../util/logger')

async function WebLogMiddle(req,res,next) {
    const requestId = uuid.v4()
    req.requestId = requestId
    const body = req.body
    const params = req.params
    const method = req.method
    const query = req.query
    const path = req.path
    const weblog = new WebLog(requestId,method,path,params,query,body)
    appLogger.info(JSON.stringify(weblog))
    await next()
}

module.exports = {
    WebLogMiddle
}