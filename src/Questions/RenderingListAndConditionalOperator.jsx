import React from 'react'

const RenderingListAndConditionalOperator = () => {

  const products = [
    { id: 1, name: "Product A", price: 20, category: "Electronics" },
    { id: 2, name: "Product B", price: 30, category: "Clothing" },
    { id: 3, name: "Product C", price: 15, category: "Electronics" },
    { id: 4, name: "Product D", price: 25, category: "Clothing" },
    { id: 5, name: "Product E", price: 50, category: "Electronics" },
    { id: 6, name: "Product F", price: 40, category: "Food" },
  ];



  return (
  <div>
    {products.map((product)=>(
      <h1>
        Name: {product.name} - Price: {product.price} - category: {product.category}
      </h1>
    ))}
  </div>
  )
}

export default RenderingListAndConditionalOperator