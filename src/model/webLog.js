class WebLog{
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