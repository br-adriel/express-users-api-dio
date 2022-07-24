import { Request } from 'express';
import { UsersController } from './usersController';
import { makeMockResponse } from '../mocks/mockRespose';

describe('Users Controller', () => {
  const usersController = new UsersController();
  const mockRequest = {} as Request;
  const mockResponse = makeMockResponse();

  it('Deve listar os usuarios', () => {
    usersController.listarUsuarios(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toHaveLength(1);
  });

  it('Deve criar um novo usuario', () => {
    mockRequest.body = { name: 'novoUsuario' };

    usersController.criarUsuario(mockRequest, mockResponse);

    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      mensagem: `usuário "novoUsuario" criado`,
    });
  });

  it('Não deve criar usuario sem nome', () => {
    mockRequest.body = { name: '' };

    usersController.criarUsuario(mockRequest, mockResponse);

    expect(mockResponse.state.status).toBe(403);
    expect(mockResponse.state.json).toMatchObject({
      mensagem: 'Não é possível criar usuários sem nome',
    });
  });
});
