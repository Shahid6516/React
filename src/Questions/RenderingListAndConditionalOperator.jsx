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

  const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];


  return (
    <div >
      <div className='Question 1'>
        <ul className='Rendring'>
          <h4 className='text-2xl mb-5'>Question 1: How to render these list using map ?</h4>
          {products.map((product) => (
            <li key={product.id}>
              <strong> Name: {product.name}</strong> - Price: ${product.price} - category: {product.category}
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <div className='Question 2'>
        <h2 className='mt-5 text-2xl'>Question 2: How can you filter products with a specific category ?</h2>

        <ul className='Filter'>
          {products.filter((product) => product.category == "Electronics").map((product) => (
            <li key={product.id}>{product.category} - {product.name} - {product.price} </li>
          ))}
        </ul>
      </div>

      <hr />

      <div className='Question 3'>
        <h2 className='text-2xl mt-5'>Question 3: How can you render a summary of total prices for products</h2>
        <ul>
          <p>Total Price Summary: {" "}
            {products.reduce((acc, product) => {
              return acc + product.price
            }, 0)}
          </p>

        </ul>
      </div>
      <hr />

      <div className="Question 4 mt-5 ">
        <h2 className='text-2xl'>Question 4: Add discountedPrice key with 10% discount to all the products with price more than 20$ and render it.</h2>

        <ul>
          {products.filter((product) => product.price > 20).map((product) => {
            return {
              ...product,
              discountedPrice: product.price - product.price * (10 / 100)
            }
          }).map((product) => (
            <li key={product.id}>Product name: {product.name} {product.discountedPrice} - discounted from: {product.price} </li>
          ))}
        </ul>

      </div>

      <hr />

      <div className='question 5 mt-5'>
        <h2 className='Question 5 text-2xl'>
          Question 5: How can you filter and render unique elements from an array using filter in react
        </h2>

        <ul className='mb-5'>
          {names.filter((name, index) => {
            return names.indexOf(name) === index;
          }).map((name) => {
            return <li>{name}</li>
          })}
        </ul>
      </div>
      <hr />
    </div>




  )
}

export default RenderingListAndConditionalOperator