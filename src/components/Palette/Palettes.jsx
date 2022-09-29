import Palette from "./Palette";
import './Palettes.css'
//este componente recibe la lista de paletas o paleta de colores y crea multiples paletas
const Palettes = ({ palettes }) => {
  return (
    <div className='grid'>
     {/* Se ejecuta (high order fuction) una funcion que recibe como parametro otra funcion que es map. 
    para recibir una lista o array utilizamos map y asi renderizamos componentes en react
    ¨palettes es la lista paletas.
    para pasar informacion al componente lo hacemos a traves de las props, en lugar de hacer props.palettes
    voy a usar destructuring, entonces voy a recibir una lista de paletas(palettes).
    Luego llamo al componente Palette  */}
      {palettes.map((palette) => (
        <Palette key={palette.id} palette={palette} />
      ))}
    </div>
  );
}

export default Palettes