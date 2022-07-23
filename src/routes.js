import { Router } from 'express';

const routes = Router();

const database = [];

routes.get('/users', (req, res) => {
  return res.status(200).json(database);
});

routes.post('/users', (req, res) => {
  const { name } = req.body;
  if (name.length < 1) {
    return res
      .status(403)
      .json({ mensagem: 'Não é possível criar usuários sem nome' });
  }
  database.push(name);
  return res.status(201).json({ mensagem: `usuário "${name}" criado` });
});

export { routes };
