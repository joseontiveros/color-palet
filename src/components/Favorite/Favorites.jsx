import Favorite from './Favorite';
import './Favorites.css';
{/* Aca le llega una lista de paletas marcadas como favoritas 
favorites es el nombre de la props*/}
const Favorites = ({ favorites }) => {
  return (
    <div className='favorite-container'>
      <h2>Mis Favoritos</h2>
       {/* itera cobre sobre la lista de paletas*/}
      {favorites.map((favorite) => (
        /*  y le paso una paleta del objeto completo como favorito
        entonces de renderiza una lista del componente favorito que creamos,
        cada favorite es un elemento de la lista favorites  */
        <Favorite key={favorite.id} favorite={favorite} />
      ))}
    </div>
  );
};

export default Favorites;