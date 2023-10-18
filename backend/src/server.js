const express = require('express');
const cors = require('cors'); // Importe o módulo CORS
const path = require('path');
const api = require('./database/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Configure o middleware CORS
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});

// Restante do seu código
app.post("/cadastro", (req, res) => {
  let dados = req.body.usuario;

  api.adicionar("usuarios", dados)
});
