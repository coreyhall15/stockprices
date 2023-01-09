import React from "react"

import { useLoaderData } from "react-router-dom"

const Price = (props) => {
  const stock = useLoaderData()
console.log(stock)
  return (
    <div>
      <h1>
        {stock[0].symbol}
        <br></br>
        {stock[0].price} 
      </h1>
      
    </div>
  )
}

export default Price