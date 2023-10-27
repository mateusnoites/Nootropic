const express = require('express');
const cors = require('cors');
const api = require('./database/api');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});

app.post("/cadastro", async (req, res) => {
  let dados = req.body.usuario;
  await api.adicionar("usuarios", dados);
  res.status(200).json({ message: "Cadastro realizado com sucesso!" });
});

app.post("/login", async (req, res) => {
  try {
    let dados = req.body;
    const user = await api.buscar("usuarios", "email", dados.email);
    
    if (user[0].senha == dados.senha) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.json({ message: "Erro interno do servidor." });
  }
});
