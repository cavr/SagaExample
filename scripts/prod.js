const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(3000, () => {
    console.log(`Server on port ${3000}`);
});