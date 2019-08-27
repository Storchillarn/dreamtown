const fetch = require('node-fetch');
const qs = require('querystring');

const verifyRecaptcha = recaptchaToken => {
    const base = 'https://www.google.com/recaptcha/api/siteverify?';
    const queryString = qs.stringify({ secret: process.env.GRECAPTCHA_SECRET, response: recaptchaToken });
    const endpoint = base + queryString;

    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(res => res.json())
    .then(body => {
        if (body.success) return body.success;
        else throw new Error('Verification failed.')
    })
    .catch(error => {
        throw new Error(error);
    });
}

module.exports = verifyRecaptcha;