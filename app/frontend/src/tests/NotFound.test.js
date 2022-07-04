import React from 'react';
import { screen, render } from '@testing-library/react';
import NotFound from '../pages/NotFound';
const utils = require('../utils/localStorageUtils');
jest.mock('../utils/localStorageUtils')

describe('Verifica o Componente Not Found', () => {
  it('Verifica se é exibido o texto: "Page Not Found"', () => {
    render(<NotFound />);
    
    expect(screen.getByText('Page Not Found', {exact: false})).toBeDefined();
  });
});
