import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                //setCategories={setCategories} // primera forma de hacerlo;
                onNewCategory={onAddCategory}// segunda forma de hacerlo
            />
            {categories.map((category) => <GifGrid key={category} category={category} />)}

        </>
    )
}

export default GifExpertApp