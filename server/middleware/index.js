const path = require('path')
const views = require('koa-views')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const koaBody = require('koa-body')
const log4js = require('koa-log4')

const log = log4js.getLogger("app")

module.exports = app => {
    // views
    app.use(
        views(
            path.resolve(__dirname, '../views'),
            {
                extension: 'pug'
            }
        )
    )

    // logger
    app.use(
        log4js.koaLogger(
            log4js.getLogger("http"),
            {
                level: 'auto'
            }
        )
    )

    app.use(async (ctx, next) => {
        const start = new Date()
        await next()
        const ms = new Date() - start
        log.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
    })

    app.use(koaBody({
        multipart: true
    }))

    app.use(bodyparser({
        enableTypes:['json', 'form', 'text']
    }))

    app.use(json())

    app.use(
        require('koa-static')(path.resolve(__dirname, '../public'))
    )

    // error-handling
    app.on('error', (err, ctx) => {
        log.error('server error', err)
    })
}
