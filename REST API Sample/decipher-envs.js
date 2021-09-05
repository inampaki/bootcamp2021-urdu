const crypto = require('crypto')
const key = 'ca981be48e90867604588e75d04feabb6dsddsfsdfdfdsdsffd3cc007a8f8ad89b10616ed84d815504';
const decipher = crypto.createDecipher('aes192', key);

exports.decrypted = (encryptedText) => {
    return new Promise((resolve, reject) => {
        let decrypted = '';
        decipher.on('readable', () => {
            const data = decipher.read();
        if (data)
            decrypted += data.toString('utf8');
        });
        decipher.on('end', () => {
            resolve(decrypted);            
        });
        decipher.write(encryptedText, 'hex');
        decipher.end();
    })
}