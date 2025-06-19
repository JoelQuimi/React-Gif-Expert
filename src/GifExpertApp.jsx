// Importamos el hook useState de React y los componentes necesarios
import { useState } from "react";
import { AddCotegory, GifGrid } from "./components";

// Componente principal de la aplicació
export const GifExpertApp = () => {
  // Hook de estado para almacenar las categorías. Se inicia con 'one punch'
  const [categories, setCategories] = useState(["One Punch"]);
  // Función que se encarga de agregar una nueva categoría
  const onAddCategoria = (newCategory) => {
    //Vegeta
    //categories.push(newCategory)
    // Si la categoría ya existe, no se agrega (evita duplicados)
    if (categories.includes(newCategory)) return;
    // Agrega la nueva categoría al inicio del arreglo
    setCategories([newCategory, ...categories]);
  };
  // Render del componente
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCotegory
        //setCategories = {setCategories}
        onNewCategory={(event) => onAddCategoria(event)}/>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
