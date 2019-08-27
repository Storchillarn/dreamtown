require('dotenv').config();
const app = require('./server/app');
const chalk = require('chalk');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server listening on port ${chalk.bgWhite.black(PORT)}.`));