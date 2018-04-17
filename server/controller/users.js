const router = require('koa-router')()
const Model = require('../models')
const UserModel = Model.user

router.prefix('/users')

router
    .get('/', async (ctx, next) => {
        ctx.body = '获取所有用户数据'
    })
    .get('/:id', async (ctx, next) => {
        ctx.body = '获取单条用户数据'
    })
    .post('/', async (ctx, next) => {
        ctx.body = '提交用户信息'
    })
    .put('/:id', async (ctx, next) => {
        ctx.body = '更新用户信息'
    })
    .delete('/:id', async (ctx, next) => {
        ctx.body = '删除用户信息'
    })

module.exports = router
