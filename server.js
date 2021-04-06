const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const https = require('https');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
res.sendFile('index.html', { root: __dirname + '/public' });
});

var heroku = process.env.ONHEROKU
if(heroku == 1) {

PORT = process.env.PORT
app.listen(PORT, () => {
console.log('Server is Running at localhost:'+PORT);
});

} else {
config = require('./config.json'),
PORT = config.port;

app.listen(PORT, () => {
console.log(`Server is Running at localhost:${ PORT }`);
});
}
