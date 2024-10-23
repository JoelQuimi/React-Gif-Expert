import { useState } from "react"

export const AddCotegory = ( {onNewCategory} ) => {
    const [inputValue, setInputValue] = useState('')
    //Guarda la busqueda que se realiza
    const onValueChange = ({target}) =>{
        setInputValue (target.value)
    }

    //No recarga la pagina 
    const onSubmit = (event)=> {
        event.preventDefault();
        if(inputValue.trim().length <= 1)return;
        //setCategories(categories => [inputValue, ...categories])
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit = {(event => onSubmit(event))} >
            <input 
                type="text"
                placeholder="Bucar Gif"
                value={inputValue}
                onChange={  onValueChange }
            />
        </form>
    )
}
