import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../conponantcss/Homestyle.css';


function Limit() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products?limit=6");
      let data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("حدث خطأ في جلب المنتجات:", error);
    }
  };

  const addToCart = (product) => {
    const existingProduct = localStorage.getItem("cart");
    let cart = [];

    if (existingProduct) {
      cart = JSON.parse(existingProduct);
    }

    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <section>
        <div className="container pb-5">
          <div className="row">
            {products.map((product) => (
              <div className="col-lg-4 mb-3" key={product.id}>
                <div className="card limit-card">
                  <img src={product.image} className="card-img-top text-center img-fluid w-50" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.category}</h5>
                   <div className="cont-prod">
                   <p className="card-text price">{product.price}$</p>
                   <p className="card-text">{product.rating.count} count</p>
                   <p className="card-text">{product.rating.rate}<i class="fa-solid fa-star rat-ic"></i></p>
                   </div>

                    <button className="btn btn-dark mx-2" onClick={() => addToCart(product)}>
                    <i class="fa-solid fa-cart-arrow-down"></i>
                    </button>
                    <button className="btn btn-dark mx-2 but-wch" onClick={() => addToCart(product)}>
                    <i class="fa-solid fa-heart hrt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Limit;