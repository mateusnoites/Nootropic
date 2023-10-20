const { getDatabase, ref, set, query, orderByChild, equalTo, get } = require("firebase/database");
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

const buscar = async (collection, campo, valor) => {
  const dataRef = ref(db, collection);

  try {
    const snapshot = await get(dataRef);
    const resultados = [];

    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();

      // Verifica se o campo no documento é igual ao valor fornecido
      if (childData[campo] === valor) {
        resultados.push(childData);
      }
    });

    if (resultados.length > 0) {
      return resultados;
    } else {
      return "Nenhum dado correspondente encontrado.";
    }
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
}


module.exports = { adicionar, buscar };
