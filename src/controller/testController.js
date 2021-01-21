/**
 * 测试controller
 */
const {Result} = require('../util/resp')
const { TestService } = require('../service')


class TestController{
    static async test(req,res) {
        const s = new TestService()
        const data = await s.get()
        return new Result(data,'测试通过').success(res)
    }
}

module.exports = {
    TestController
}