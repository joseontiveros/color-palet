import { useEffect, useState } from 'react';
import './App.css';
import Palettes from './components/Palette/Palettes';
import Tags from './components/Tag/Tags';
import Favorites from './components/Favorite/Favorites';
import { getColorPalettes, getTags } from './service';
import { FavoritesContext } from './context/FavoriteContext';

function App() {
  //creo mi lista de paletas, inicialmente esta lista de paleta de colores va estar vacia
  const [colorPalettes, setColorPalettes] = useState([]);
  //lista de tags
  const [tags, setTags] = useState([]);
  //lista de favoritos 
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    //llamo a la funcion getColorPalettes que importo de services
    getColorPalettes()
    //recibo la informacion en data o res, esto lo almaceno en la variable de mi estado, en el estado del componente
    //entonces recibo la paleta de colores 
      .then((data) => {
      //el response.json ya esta contemplado en getColor asi que ya tengo el array listo, entonces llamo a setColor y le paso data 
        setColorPalettes(data);
        //seteamos las paletas favorites con una funcion flecha
        //aca recibimos data nuesta lista completa, utilizamos la funcion filter (high function order)
        //para filtrar
        //palette es un elemento de la lista completa de data, el criterio es que el campo liked sea true
        //entonces si es true va devolver y se va a juntar en setfavorites
        setFavorites((data) => data.filter((palette) => palette.liked));
      })
      //manejamos un catch en caso de tener un error en la llanada
      .catch((err) => console.log(err));
      // no hay problema con que se repita data, porque existe dentro de cada contexto
    getTags()
      .then((data) => setTags(data))
      .catch((err) => console.log(err));
    //dentro del useEffect podemos hacer mas de una llamada a la API por eso se definen las dos funciones
  }, []);
  // el arreglo de dependencias va a estar vacio porque solo hago la llamada a la Api al inicio para renderizado inicial
  return (
    //con este context cualquier componente dentro de App pueda llamar a la lista favoritos y a la funcion set favorites
    //esto evita hacer propdriling al hacer click en el corazon cualquier elemento de la App puede acceder a favorites y a la
    //funcion setfavorites para actualizar
    <FavoritesContext.Provider value={{favorites, setFavorites}}>
      <div className='App'>
         {/*  App llama a Palettes  */}
        <header>
          <h1>Color Palette Project</h1>
        </header>
        <div className='main-container'>
          <Tags tags={tags} />
            {/* El Componente es Palettes y la props se llama palettes y le paso del estado colorPalettes*/}
          <Palettes palettes={colorPalettes} />
          {/* el primer favorites es el nombre de la prop y el segundo es el estadoj */}
          <Favorites favorites={favorites} />
        </div>
      </div>
    </FavoritesContext.Provider>
  );
}

export default App;
