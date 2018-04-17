const router = require('koa-router')()

router.prefix('/orders')

router
    .get('/', async (ctx, next) => {
        ctx.body = '获取订单数据'
    })
    .get('/:id', async (ctx, next) => {
        ctx.body = '获取单独一条订单数据'
    })
    .post('/', async (ctx, next) => {
        console.log(ctx.request.body)
        ctx.body = '提交订单数据'
    })
    .put('/:id', async (ctx, next) => {
        ctx.body = '更新订单数据'
    })
    .delete('/:id', async (ctx, next) => {
        ctx.body = '删除订单数据'
    })

module.exports = router
