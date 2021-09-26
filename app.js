const express = require('express');
const app = express();
const path = require('path')
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
// Requerimos modulos, publicpath resuelve la ruta y app.use le dice a express que esta es publica
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));

});

/*
app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});
// Jona seguro me olvide pero cuando veas esto, si yo uso sendfile(publicpath './direccion/' deberia funcionar?)
*/

app.get('/babbage', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/babbage.html'));
});

app.get('/berners-lee', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/berners-lee.html'));
});

app.get('/clarke', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/clarke.html'));
});

app.get('/hamilton', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/hamilton.html'));
});

app.get('/hopper', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/hopper.html'));
});

app.get('/lovelace', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/lovelace.html'));
});

app.get('/turing', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/turing.html'));
});


app.listen(3030, () => {
console.log("Server escuchando en puerto 3030")
});


