require('dotenv').config();

const express = require('express');
const path = require('path');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', recipeRoutes);

app.listen(PORT, () => {
    console.log('Server is running closely on http://localhost:${PORT}');
});