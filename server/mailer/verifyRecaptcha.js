const fetch = require('node-fetch');

const verifyRecaptcha = recaptchaToken => {
    const base = 'https://www.google.com/recaptcha/api/siteverify';
    const secret = 'secret=' + process.env.GRECAPTCHA_SECRET;
    const response = 'response=' + recaptchaToken;
    const endpoint = base + '?' + secret + '&' + response;
    
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(res => res.json())
    .then(body => body.success)
    .catch(console.error)
}

module.exports = verifyRecaptcha;