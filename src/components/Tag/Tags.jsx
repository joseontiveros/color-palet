import Tag from './Tag';
import './Tags.css';
//va a recibir una lista de tags
const Tags = ({ tags }) => {

  return (
    <div className='tag-container'>
      <h2>Tags</h2>
      {/*  aca se muestra el listado de cada uno de los tags
   se va a iterar por la lista de tags */}
      {tags.map((tag) => (
      //el tag va a tener un id y un value que es {tag}
        //cada vez que hacemos un map necesitamos especificar una key que es unica y ese es el tag.id
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
  );
};

export default Tags;