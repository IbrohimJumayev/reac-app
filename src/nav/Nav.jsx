
import './Nav.css';
import React, { useEffect, useState } from 'react';

function Nav() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          <p>LOGO</p>
        </div>

        <div className="navigation">
          <form>
            <select id="categories" name="categories">
              <option value="technology">Categories</option>
              <option value="clothing">Clothing</option>
              <option value="jewelry">Jewelry</option>
              <option value="electronics">Electronics</option>
            </select>
          </form>
          <a href="#">What’s new</a>
          <a href="#">Sales</a>
          <a href="#">Help</a>
        </div>

        <div className="user-interaction">
          <div className="search">
            <input type="search" name="search" id="search" placeholder="Search Products" />
            <label htmlFor="search">
              <span className="material-symbols-outlined">search</span>
            </label>
          </div>
          <div className="user-acc">
            <span className="material-symbols-outlined">person</span>
            <p>Account</p>
          </div>
          <div className="user-cart">
            <span className="material-symbols-outlined">shopping_cart</span>
            <p>Cart</p>
            <span className="product-counter">{count}</span>
          </div>
        </div>
      </nav>

      <div className="container">
        <h1>Lorem ipsum dolor<br /> sit amet, consectetur<br /> adipiscing elit.</h1>
        <button>Shop now</button>
      </div>

      <div className="products">
        <div className="product-text">
          <p>Products For You!</p>
          {loading && <span className="loader"></span>}
        </div>

        <div className="product-cards">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="product-info">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
              <strong>${product.price}</strong>
              </div>
              <button onClick={() =>{
                setCount(count + 1)
              }}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Nav;
