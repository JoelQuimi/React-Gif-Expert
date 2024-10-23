import { useState } from "react"
import { AddCotegory, GifGrid } from "./components";

export  const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch']);
    const onAddCategoria = (newCategory) => {
        //Vegeta
        //categories.push(newCategory)
        if(categories.includes(newCategory))return;
        setCategories([ newCategory, ...categories]);
    }
return (
    <>
        <h1>GifExpertApp</h1>
        <AddCotegory
        //setCategories = {setCategories}
            onNewCategory = {event=> onAddCategoria(event)}
        />
            {
                categories.map ( ( category ) => (
                    <GifGrid key = {category} category={category} />
                ))
                
            }
        </>
)
}
