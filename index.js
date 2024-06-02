const express = require('express');
const path = require('path');
const route = require('./routes/routes');
const dotenv = require('dotenv');
const { notFound } = require('./controllers/controllers')

dotenv.config()

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', route);
app.use('*', notFound);

const PORT = 3000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});