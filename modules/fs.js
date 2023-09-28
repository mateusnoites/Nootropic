const fs = require('fs')
const path = require('path')

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if(error) {
        return console.log("Erro: ", error)
    }

    console.log("Pasta criada com sucesso!")
})

// Criar um arquivo
fs.writeFile(path.join(__dirname, '/teste', 'test.txt'), 'Hello, node!\n', (error) => {
    if (error) {
        return console.log("Erro: ", error)
    }

    console.log("Arquivo criado com sucesso!")
})

// Adicionar a um arquivo
fs.appendFile(path.join(__dirname, '/teste', 'test.txt'), 'hello, worldddd!!! :D', (error) => {
    if (error) {
        return console.log("Erro: ", error)
    }

    console.log("Texto adicionado com sucesso!")
})