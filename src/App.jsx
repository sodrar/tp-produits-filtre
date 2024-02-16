import { useState } from "react";

export default function App() {
  // J'ai mes données
  const products = [
    { name: "Lenovo thinkpad T440", price: 2300, stock: 20, img: "http://unsplash.it/100/100", annee: 2017 },
    { name: "Dell latitude", price: 1580, stock: 30, img: "http://unsplash.it/100/100", annee: 2019 },
    { name: "Alienware", price: 700, stock: 15, img: "http://unsplash.it/100/100", annee: 2023 },
    { name: "Azus", price: 200, stock: 20, img: "http://unsplash.it/100/100", annee: 2024 }
  ];

  const [maxPrice, setMaxPrice] = useState(1000)
  const updatePriceRange = e => {
    setMaxPrice(e.target.value)
  }

  const [maxStock, setMaxStock] = useState(20)
  const updateMaxStock = e => {
    setMaxStock(e.target.value)
  }

  const [maxYear, setMaxYear] = useState(20)
  const updateMaxYear = e => {
    setMaxYear(e.target.value)
  }

  const filteredProducts = products.filter(product => {
    return product.price < maxPrice && product.stock <= maxStock && product.annee <= maxYear
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
      <label htmlFor="price">Prix</label>
      <input name="price" id="price" type="range" max={3000} defaultValue={1000} value={maxPrice} onInput={updatePriceRange} />
      <label htmlFor="stock">Stock</label>
      <input type="range" max={40} defaultValue={20} value={maxStock} onInput={updateMaxStock} />
      <label htmlFor="annee"></label>
      <input type="range" min={2015} max={2024} defaultValue={2024} value={maxYear} onInput={updateMaxYear} />
      {productsBalises}
    </div>
  )
}