import Item from './Item'

const ItemList = ( {chars}) => {
  return (
    <div>
      { chars.map( c =>
        <Item key={c.id} id={c.id} name={c.name} species={c.species} image={c.image}/>
      )}
    </div>
  )
}

export default ItemList