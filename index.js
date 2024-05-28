const express = require('express');
const path = require('path')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 3000 || process.env.PORT

app.get('/', (req, res, next) => {
    res.render('home')
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});