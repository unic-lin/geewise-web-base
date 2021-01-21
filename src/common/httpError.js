/**
 * 自定义异常类(业务异常)
 */
class HttpError extends Error{
    constructor(code, msg, stack) {
        super(msg)
        this.code = code
        this.msg = msg
        this.stack = stack
    }
}

module.exports = HttpError