// Importa as dependências necessárias
const express = require('express');
const cron = require('node-cron');
const axios = require('axios');

require('dotenv').config();

// Configura o aplicativo Express
const app = express();

app.use(express.json());

// Define a porta a partir da variável de ambiente PORT ou usa 3000 por padrão
const PORT = process.env.PORT || 3000;

// Rota simples para a raiz
app.get('/', (req, res) => {
    res.send('Servidor Node.js está rodando!');
  });

app.get('/test', (req, res) => {
    res.send('Servidor Node.js está rodando!');
});

// Configura um cron job para ser executado a cada minuto (você pode ajustar a expressão cron)
cron.schedule('*/5 * * * * *', async () => {
    try {
        // Faz uma requisição GET a uma URL de exemplo (substitua pela URL desejada)
        const response = await axios.get('https://trabalho-faculdade-1.onrender.com/work');
        // Processa a resposta
        console.log('Dados recebidos:', response.data);
      } catch (error) {
        // Captura e exibe qualquer erro ocorrido durante a requisição
        console.error('Erro na requisição GET:', error.message);
      }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
