const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const DEVELOPMENT = process.env.NODE_ENV != 'production';

app.set('port', process.env.PORT || 5000)

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/cities', (request, response) => {
    response.send(require('./static/cities.json'))
})

app.listen(app.get('port'), () => {
    console.log("Listening on " + app.get('port'));
});