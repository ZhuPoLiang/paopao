const Koa = require('koa')
const onerror = require('koa-onerror')
const app = new Koa()

const middleware = require('./middleware')
const routers = require('./routers')

const DB = require('./lib/db')
const config = require('./config')

// 连接数据库
DB.connect(config.db)

// error handler
onerror(app)

// middleware
middleware(app)

// routes
routers(app)

module.exports = app
