import { useState } from "react";

export default function App() {
  // J'ai mes données
  const products = [
    { name: "Lenovo thinkpad T440", price: 2300, stock: 20, img: "http://unsplash.it/100/100" },
    { name: "Dell latitude", price: 1580, stock: 30, img: "http://unsplash.it/100/100" },
    { name: "Alienware", price: 700, stock: 15, img: "http://unsplash.it/100/100" },
    { name: "Azus", price: 200, stock: 20, img: "http://unsplash.it/100/100" }
  ];

  const [maxPrice,setMaxPrice] = useState(1000)
  const updatePriceRange = e => {
    setMaxPrice(e.target.value)
  }

  const filteredProducts = products.filter(product => {
    return product.price < maxPrice
  })

  const productsBalises = filteredProducts.map((product, i) => {
    return (
      <div key={i} style={{ border: "solid black 1px" }}>
        <p> {product.name} </p>
        <p> {product.price} €</p>
        <p> stock:{product.stock} </p>
        <img src={product.img} alt="" />
      </div>
    )
  });

  return (
    <div>
      <label>
        <input type="range" max={3000} defaultValue={1000} value={maxPrice} onInput={updatePriceRange} />
      </label>
      {productsBalises}
    </div>
  )
}