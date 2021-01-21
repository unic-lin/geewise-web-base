/**
 * 日志模型
 */
class WebLog{
    /**
     * 
     * @param {*} requestId 请求id
     * @param {*} method 请求方法
     * @param {*} path 请求路径
     * @param {*} params 请求参数
     * @param {*} query 请求query
     * @param {*} body 请求body
     */
    constructor(requestId,method,path, params,query,body){
        this.requestId = requestId
        this.method = method
        this.path = path
        this.params = params
        this.query = query
        this.body = body
    }
}
module.exports = WebLog