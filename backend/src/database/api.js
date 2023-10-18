const { getDatabase, ref, set, push } = require("firebase/database");
const database = require('./firebaseConfig');

const db = getDatabase(database);

const adicionar = async (collection, dados) => {
  const dataRef = ref(db, collection);

  try {
    const novoObjetoRef = push(dataRef); // Usando push para gerar um novo ID
    await set(novoObjetoRef, dados);
    console.log("Dados salvos com sucesso!");
  } catch (err) {
    console.error("Erro ao salvar os dados: " + err.message);
  }
};

module.exports = { adicionar };
