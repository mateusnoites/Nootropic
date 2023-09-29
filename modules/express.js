const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express()

app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', "src/views")

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/users', async (req, res) => {
  const users = await UserModel.find({});

  res.render("users", { users })
})

app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.post('/users', async (req, res) => {
  try {
    const user = await UserModel.create(req.body)

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.patch('/users/edit/:id', async (req, res) => {
  try {
    const id = req.params.id

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })

    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.delete('/users/:id', async(req, res)=>{
  try {
    const user = await UserModel.findOneAndRemove(req.params.id);
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

const port = 8080

app.listen(port, () => {
  console.log(`Rodando com Express na porta ${port}!`)
})