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
app.post("/cadastro", async (req, res) => {
  let dados = req.body.usuario;

  await api.adicionar("usuarios", dados)
});

app.post("/login", async (req, res) => {
  try {
    let dados = req.body.usuario;

    const user = await api.buscar("usuarios", "email", dados.email);
    
    if(user[0].senha == dados.senha) {
      console.log("Senha correta.");
    } else {
      console.log("Senha incorreta.")
      console.log(`Senha informada: ${dados.senha}; Senha esperada: ${user.senha}`)
    }

    res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});
