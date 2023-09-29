const mongoose = require('mongoose');

const connectToDatabase = async() => {
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.btpo07m.mongodb.net/?retryWrites=true&w=majority`).then(()=> {
    console.log("Conexão ao banco de dados realizada com sucesso!");
  })
}

module.exports = connectToDatabase