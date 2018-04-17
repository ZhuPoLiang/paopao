const mongoose = require('mongoose')
const log4js = require('koa-log4')

const log = log4js.getLogger("app")

exports.connect = config => {
    mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`, config.options)

    mongoose.connection
        .on(
            'error',
            error => log.error(error)
        )
        .on(
            'close',
            () => log.warn('Database connection closed.')
        )
        .once(
            'open',
            () => log.info('connection success: MongoDB started successfully!!')
        )
}
