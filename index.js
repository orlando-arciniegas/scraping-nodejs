const express = require('express');
const app = express();
const getPrice = require('./getPrice');

app.get('/', (req, res) => {
    getPrice()
    .then(data => res.json(data))
})

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), console.log('Server on port:', app.get('port')));