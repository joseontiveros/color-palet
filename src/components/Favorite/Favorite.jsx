import './Favorite.css'
//aca recibo una lista de paleta favorita
const Favorite = ( { favorite } ) => {
 //hago un destructuring donde voy a tener name y colors que lo traigo de favorite
  const { name, colors} = favorite
  return (
    <div className="fav-item">
      <span className="item-name">{name}</span>
      {
       //Aca llamamos a la lista de colores y cada color va a estar representado por un key como cada color es unico
        //y esta expresado en hexadecimal lo puedo utilizar como key, llamo a un estilo y seteamos el color de fondo con ese color en hexadecimal
        colors.map( color => <div key={color} className="item-color" style={{backgroundColor: color}}></div>)
        
      }
    </div>
  )
}

export default Favorite

/* export default Favorite
export const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => {} */