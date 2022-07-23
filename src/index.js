import express from 'express';

const server = express();

server.listen(5000, () => {
  console.log('Servidor executando em http://localhost:5000');
});
