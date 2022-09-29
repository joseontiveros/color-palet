import './Tag.css'
//voy a recibir el tag el texto
const Tag = ({tag}) => {
  return (
    <span className="tag">{tag.value}</span>
  )
}

export default Tag