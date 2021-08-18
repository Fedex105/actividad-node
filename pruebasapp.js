const prompt = require("prompt-sync")();
const usuarios = require("./funcionesAux")
const axios = require('axios');

axios.get('http://localhost:3000/usuario').then(
    function (resp){
        console.log(resp.data)
    }
)
