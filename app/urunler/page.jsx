import React from 'react'
import ProductList from '../_components/ProductList'

const urunler = () => {
  return (
    <div>
      <div><ProductList type="strecleme"/></div>
      <div><ProductList type="cemberleme"/></div>
    </div>
  )
}

export default urunler