const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/'));
app.use('/packages/profile', express.static(__dirname + '/packages/profile/'));


app.listen(process.env.PORT || 8080);