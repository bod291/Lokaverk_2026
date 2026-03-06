const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use('/', (req, res) => {
    res.render('index', {title: 'Forsíða'});
    const frame = getframe();
    res.render('index', { title: 'warframe', frame})
})

app.use(express.static(path.join(__dirname, 'public')));