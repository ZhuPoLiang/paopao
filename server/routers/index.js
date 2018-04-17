const Controller = require('../controller')
const createAnmin = require('../util/createAnmin')

module.exports = app => {
    // 项目初始化创建admin账号
    createAnmin();

    app.use(Controller.home.routes(), Controller.home.allowedMethods())
    app.use(Controller.users.routes(), Controller.users.allowedMethods())
    app.use(Controller.orders.routes(), Controller.orders.allowedMethods())
}
