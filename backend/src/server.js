const express = require('express');
const path = require('path');
const api = require('./database/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});

api.adicionar("usuarios", {
  nome: "Mateus",
  idade: 18
});
