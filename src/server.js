const express = require('express');
const { RankingController } = require('./controllers/RankingController');

const app = express();
app.use(express.json());

const port = 3001;

app.get('/ranking', RankingController.getRanking);

app.listen(port, () => {
  console.log('Servidor rodando na porta: ', port);
})
