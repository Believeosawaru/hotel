const express = require('express');
const path = require('path');
const route = require('./routes/routes')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', route);

const PORT = 3000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});