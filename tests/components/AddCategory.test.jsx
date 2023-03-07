import { AddCategory } from '../../src/components/AddCategory';
import { fireEvent, render, screen } from '@testing-library/react';

describe('test a <AddCategory/>', () => {
    test('Debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const entrada = screen.getByRole('textbox');
        fireEvent.input(entrada, { target: { value: 'Saitama' } });
        expect(entrada.value).toBe('Saitama');
    });

    test('Debe llamar onNewCategory si el input posee algun valor', () => {
        const valorEntrada = 'Saitama';
        const onNewCategory = jest.fn(); // esto simula una funcion;
        render(<AddCategory onNewCategory={onNewCategory} />);
        const entrada = screen.getByRole('textbox');
        const formulario = screen.getByRole('form'); // agregamos un aria-label en form del componente;
        fireEvent.input(entrada, { target: { value: valorEntrada } });
        fireEvent.submit(formulario);
        expect(entrada.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled(); // Evalua si se llamo la funcion;
        expect(onNewCategory).toHaveBeenCalledTimes(1); // evalua si llama la funcion la cantidad de veces deseada;
        expect(onNewCategory).toHaveBeenCalledWith(valorEntrada);
    });
    test('No debe llamar el onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const formulario = screen.getByRole('form');
        fireEvent.submit(formulario);
        expect(onNewCategory).toHaveBeenCalledTimes(0); //forma 1;
        expect(onNewCategory).not.toHaveBeenCalled(); //forma 2;
    })
});