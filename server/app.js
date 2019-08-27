const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const { config, sender } = require('./mailer');
const verifyRecaptcha = require('./mailer/verifyRecaptcha');

const app = express();

app.use(express.static(path.join('client', 'dist')));
app.use(bodyParser.json());

app.post('/api/mail', async (req, res) => {
    
    const { body, recaptchaToken } = req.body;

    const recaptchaResponse = await verifyRecaptcha(recaptchaToken);
    
    if (!recaptchaResponse) res.status(400).end();
    
    sender(body);

    res.status(204).end();
});
app.get('*', (req, res) => {
    res.sendFile(path.join('client', 'dist', 'index.html'));
});

module.exports.app = app;
