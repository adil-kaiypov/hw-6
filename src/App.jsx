import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import Item from './components/Item/Item';
import Nav from './components/Nav/Nav';

function App() {

  const products = useSelector(state => state.products.products);

  return (
    <>
      {<Nav/>}
      {products.map(p => <Item name={p.name} _id={p._id} price={p.price} picture={p.picture} tags={p.tags} description={p.description}/>)}
    </>
  )
}

export default App
