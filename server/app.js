const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const { sender } = require('./mailer');
const verifyRecaptcha = require('./mailer/verifyRecaptcha');

const app = express();

app.use(express.static(path.join('client', 'dist')));
app.use(bodyParser.json());

app.post('/api/recaptcha', async (req, res) => {
    
    try {
        await verifyRecaptcha(req.body.token);
        res.status(200).end();
    } catch(error) {
        console.error(error);
        res.status(400).end();
    }
})

app.post('/api/mail', async (req, res) => {
    
    const { body } = req.body;
    
    try {
        await sender(body);
        res.status(204).end();
    } catch(error) {
        console.error(error);
        res.status(400).end();
    }

});

app.get('*', (req, res) => {
    res.sendFile(path.join('client', 'dist', 'index.html'));
});

module.exports = app;
