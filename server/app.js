const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join('client', 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join('client', 'dist', 'index.html'));
});

module.exports.app = app;
