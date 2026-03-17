const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`server keyrir á http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')));