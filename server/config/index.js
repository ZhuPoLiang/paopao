const base = {
    admin: {
        username: 'admin',
        password: '11111',
        role: 1
    },
    CONSTANTS: {
        ROLE: {
            SUPERADMIN: 1,
            ADMIN: 2,
            DEFAULT: 9
        }
    }
}

// development mongodb
const dev = Object.assign({}, base, {
    db: {
        host: '127.0.0.1',
        port: 27017,
        database: 'paopao',
        options: {
            user: 'admin',
            pass: '123456'
        }
    }
})

// production mongodb
const prod = Object.assign({}, base, {

})

const env = process.env.NODE_ENV || 'development'

const _config = {
    development: dev,
    production: prod
}

// 数据库配置
module.exports = _config[env]
