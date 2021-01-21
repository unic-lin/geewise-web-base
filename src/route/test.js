/**
 * 测试路由
 */
const express = require('express')
const router = express.Router()
const { TestController } = require('../controller')

router.get('/test',TestController.test)

module.exports = router