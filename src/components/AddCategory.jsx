import { useState } from 'react';
import PropTypes from 'prop-types'

export function AddCategory({ /*setCategories*/ onNewCategory }) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let valueReturn = inputValue.trim();
        if (valueReturn.length <= 1) return;
        //setCategories(categories => [inputValue, ...categories]);// primero forma de retorna valores al comp padre;
        onNewCategory(valueReturn);// segunda forma de retornar valores al comp padre;
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input type="text" placeholder="Ingrese la categoría" value={inputValue}
                onChange={onInputChange}>
            </input>
            <button type="submit">
                Agregar
            </button>
            {
                inputValue && (
                    <button type="reset" onClick={e => setInputValue('')}>
                        Limpiar
                    </button>
                )
            }

        </form>
    )
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
