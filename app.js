const express = require('express');

const path = require('path'); 

const app = express();

const PORT = process.env.PORT || 3020;

app.use(express.static('public'))

app.listen(PORT,()=>console.log('servidor corriendo en el puerto'+PORT));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
});

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'));
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'));
});
