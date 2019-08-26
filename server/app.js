const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const { config, sender } = require('./mailer');

const app = express();

app.use(express.static(path.join('client', 'dist')));
app.use(bodyParser.json());

app.post('/api/mail', (req, res) => {
    sender(req.body);
    res.end();
});
app.get('*', (req, res) => {
    res.sendFile(path.join('client', 'dist', 'index.html'));
});

module.exports.app = app;
