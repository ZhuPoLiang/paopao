const crypto = require('crypto')

/*
 *  十位盐
 *  时间戳（2位）+ 随机字母（8位）
 */
const salt = () => {
    let time = Date.now() % 100,
        str = '';

    time = time === 0 ? '00' : String(time);

    for (let i = 0; i < 8; i++) {
        const base = Math.random() < 0.5 ? 65 : 97;
        str += String.fromCharCode(
            base +
            Math.floor(
                Math.random() * 26
            )
        );
    }

    return time + str;
}

// md5加密
const md5 = text => crypto.createHash("md5").update(String(text)).digest("hex")

// 加盐加密
const encrypt = password => md5(md5(password) + salt())

module.exports = {
    salt,
    md5,
    encrypt
}
