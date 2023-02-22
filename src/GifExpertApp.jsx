import { useState } from "react";
import { AddCategory, GifGrid } from './components';

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            {
                categories.length > 0 && (
                    <button onClick={e => setCategories([])}>
                        Limpiar Busqueda
                    </button>
                )
            }
            <AddCategory
                //setCategories={setCategories} // primera forma de hacerlo;
                onNewCategory={onAddCategory}// segunda forma de hacerlo
            />
            {categories.map((category) => <GifGrid key={category} category={category} />)}

        </>
    )
}

export default GifExpertApp