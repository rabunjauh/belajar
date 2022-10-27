import { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Header from "./components/Header";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  // useState Hook
  // const [title, setTitle] = useState("Welcome to my app");
  const [products, setProduct] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 769},
    {id: 3, title: 'Product 3', price: 989},
    {id: 4, title: 'Product 4', price: 871},
    {id: 5, title: 'Product 5', price: 459},

  ]);

  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProduct(newProducts);
  }

  // const [name, setName] = useState('Mustafa');
  
  // useEffect(() => {
  //   console.log('use effect running');
  // }, [name]);
  // DOM tanpa parameter
  // const clickMe = () => {
  //   console.log('clicked');
  // }

  // DOM dengan parameter
  // const clickMe = (name) => {
  //   console.log(`Hello ${name}`);
  // }

  // useState Hook
  // const changeTitle = () => {
  //    setTitle("Title Change");
  // }
// PROPS : mengirimkan data dari komponen utama ke komponen child & event dari komponen child ke komponen induk  
  return (
    <div>
      {/* React Router */}
      <Router>
        <Routes>
          <Route exact path="/">
            <ProductList products={products} deleteProduct={deleteProduct}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Routes>
      </Router>
      {/* <Header /> */}
      {/* <h1>{title}</h1> */}
      {/* assign parameter harus menggunakan anonymous function agar tidak dijalankan saat page load */}
      {/* <button onClick={() => clickMe('Mustafa')}>Click Me</button> */}

      {/* useState Hook: berfungsi untuk merubah variable */}
      {/* <button onClick={changeTitle}>Change Title</button> */}
      {/* <ProductList products={products} deleteProduct={deleteProduct}/> */}
      {/* <button onClick={() => setName('Name1')}>Change Name</button> */}
      {/* <p>{ name }</p> */}


    </div>
  );
}

export default App;
