/**
 * 测试服务类
 */
const { Test} = require('../model')
const { HttpError } = require('../common')
class TestService{
    async get() {
        throw new HttpError(1000,'异常',null)
        return new Test('lcd')
    }
}

module.exports = {
    TestService
}