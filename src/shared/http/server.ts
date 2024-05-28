import express from 'express' // Importação correta do express
import 'express-async-errors' // Correção do erro de digitação
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ message: 'Olá dev!' })
})

// Correção da sintaxe da função de callback no listen
app.listen(3000, () => {
  console.log('Server started on port 3000!')
})
