import React from 'react'
import { useParams } from 'react-router-dom' 

export default function Product() {
  const {products} = useParams()
  const product = productList[products]

  return (
    <h1>탭내용이랍니당</h1>

  )
}
