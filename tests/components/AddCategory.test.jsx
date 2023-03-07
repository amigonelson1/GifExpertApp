import { AddCategory } from '../../src/components/AddCategory';
import { fireEvent, render, screen } from '@testing-library/react';

describe('test a <AddCategory/>', () => {
    test('Debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const entrada = screen.getByRole('textbox');
        fireEvent.input(entrada, { target: { value: 'Saitama' } });
        expect(entrada.value).toBe('Saitama');
    });
});