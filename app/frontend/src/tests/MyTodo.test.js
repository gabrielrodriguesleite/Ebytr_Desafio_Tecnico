import MyTodo from '../pages/MyTodo';
import { rootReducer } from '../store';
import { renderWithRouterAndStore } from './utils/renderWithRouterAndStore';
import React from 'react';
import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
const utils = require('../utils/localStorageUtils');
jest.mock('../utils/localStorageUtils')

describe('Verifica o Componente MyTodo', () => {
  it('Verifica se é exibido o nome e email disponíveis no token', () => {
    const VALIDTOKEN = {name: 'Nome', email: 'email@email.com', token: '123456789'};
    jest.spyOn(utils, "getToken").mockImplementation(()=>VALIDTOKEN);
    jest.spyOn(utils, "getByEmail").mockImplementation(()=>VALIDTOKEN);

    renderWithRouterAndStore(<MyTodo history={createMemoryHistory()}/>, rootReducer, '/');
    
    expect(screen.getByText(VALIDTOKEN.name, {exact: false})).toBeDefined();
    expect(screen.getByText(VALIDTOKEN.name, {exact: false})).toBeDefined();
  });
});
