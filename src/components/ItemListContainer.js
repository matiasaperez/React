import { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [chars, setChars] = useState([])

  useEffect(() => {
    const URL = 'https://rickandmortyapi.com/api/character'
    fetch( URL )
      .then( res => res.json() )
      .then( data => {
        console.log( data.results );
        setChars( data.results )
      })
  }, [])

  return (
    <div> 
      <>
        <div>Rick y Morty</div>
        <ItemList chars={chars}/>
    </>
    </div>
  )
}

export default ItemListContainer