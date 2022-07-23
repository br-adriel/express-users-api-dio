import { database } from '../database.js';

const usersController = {
  listarUsuarios: (req, res) => {
    return res.status(200).json(database);
  },

  criarUsuario: (req, res) => {
    const { name } = req.body;
    if (name.length < 1) {
      return res
        .status(403)
        .json({ mensagem: 'Não é possível criar usuários sem nome' });
    }
    database.push(name);
    return res.status(201).json({ mensagem: `usuário "${name}" criado` });
  },
};

export { usersController };
