import { FaHeart, FaRegHeart } from 'react-icons/fa';
//usecontex es el hook que nos permite acceder al estado global
import { useContext, useState } from 'react';
import { FavoritesContext } from '../../context/FavoriteContext';
import './Palette.css'
//Aca recibo una paleta (pelette) un objeto completo props.palette.name,
//hago un destructuring de palette
const Palette = ({ palette }) => {
  //hago un segundo destructuring
  //estos son los campos de la API
  const { id, name, colors, liked } = palette
  //lista de favoritos con su funcion de setear para actualizar la lista de favoritos
  const { favorites, setFavorites } = useContext(FavoritesContext);
  //el valor inicial es liked, con useState voy a saber el estado actual si es favorito o no la paleta
  const [isFavorite, setIsFavorite] = useState(liked);

  const handleFavorite = () => {
    //aca se esta llamando al estado actual, si esta en verdadero lo voy a transformar a falso con el negador y viceversa
    setIsFavorite((isFavorite) => !isFavorite);
    //con esta funcion se busca el indice en la funcion de favoritos, porque actualmente no se si hay 1,2 o ningun favorito
    //en foundIndex me va a devolver un numero, va buscar el index dentro de favoritos, si existe alguna
    //paleta de favoritos que coincida con el id de la paleta a la que acabo de dar un clic
    //si esta paleta no existe en esta lista va devolver -1 y si existe va a devolver el valor del indice, el id recibe un numero
    //busco si la paleta ya esta en favoritos
    const foundIndex = favorites.findIndex(fav => fav.id === id);

    //para agregar a favoritos
    if (foundIndex === -1) {
      //actualizo la lista de favoritos
      //utilizo un sprint sintax 3 puntitos, si favorite tenia 3 paleta, entonces agrego la paleta nueva,
      //con los 3 puntitos hago un nuevo array las paletas que existian las separo y las concateno con la nueva paleta 
      setFavorites([...favorites, palette])
      //salgo de la funcion
      return
    }

    //Quitar de favoritos
    setFavorites(
      //se quiere un nueva lista de paletas menos la paleta actual que tiene el id
      favorites.filter((fav) => fav.id !== id )//!==
    );
  }

  return (
    <div className='palette-container'>
      <div className='palette'>
        {/*  Muestra el nombre de la paleta */}
        <h3>{name}</h3>
          {/*  la paleta tiene cuatro colores, es una lista de colores, 
       entonces recibimos una listas de colores (colors) y hacemos un map*/}
        {colors.map((color) => {
          return (
            <div
              key={color}
              className='color'
              style={{ backgroundColor: color }}
            >
              <span>{color}</span>
            </div>
          );
        })}
      </div>
      <div className='fav'>
       {/* se usa un ternario 
        utilizamos react icons font awsome 
        corazon lleno */}
        {isFavorite ? (
          //definimos la funcion handleFavorite para que cuando haga click en el corazon lleno o vacio
          //va a recibir mi evento y decido que hacer con el evento
          //en este caso voy a cambiar el estado si esta lleno lo cambio al opuesto y lo quito de la paleta favorita
          <FaHeart className='fav heart' onClick={handleFavorite}/>
        ) : (
          /*  Corazon vacio */
          <FaRegHeart className='fav' onClick={handleFavorite}/>
        )}
      </div>
    </div>
  );
}
export default Palette