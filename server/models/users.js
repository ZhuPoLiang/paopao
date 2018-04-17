const mongoose = require('mongoose')
const Encrypt = require('../util/encrypt')

const UserSchema = new mongoose.Schema({
	name: String,
    username: {
        unique: true,
        type: String,
        required: true
    },
    phone: {
		unique: true,
		type: Number
	},
    password: {
        type: String,
        required: true
    },
    age: Number,
    sex: Number,
    address: String,
    role: {
		type: Number,
		default: 9
	},
	meta: {
		type: Date,
		default: Date.now()
	}
})

UserSchema.pre('save', function (next) {
	/*
	 *	表单保存在基本的常识内都必须对重要的数据进行加密保存
	 *	在node中利用crypto进行MD5的加密
	 *	createHash : 创建Hash算法实例，算法有md5、sha1、sha256、sha512、ripemd160
	 *	update : 将字符串叠加，可重复调用添加字符串
	 *	digest : 返回加密的字符串
	 */
	this.password = Encrypt.encrypt(this.password)

	next()
})

module.exports = mongoose.model('User', UserSchema)
