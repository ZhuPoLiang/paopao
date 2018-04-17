const config = require('../config')
const Models = require('../models')
const UserModel = Models.users

module.exports = async () => {
    const users = await UserModel.find({})
    const adminInfo = config.admin

    if (users.length === 0) {
        const _admin = new UserModel(adminInfo)
        const adminUser = await _admin.save()
    }
}
