import React, { useEffect, useState } from "react";

function Cart() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    const existingProducts = localStorage.getItem("cart");

    if (existingProducts) {
      setSelectedProducts(JSON.parse(existingProducts));
    }
  };

  const removeFromCart = (product) => {
    const updatedProducts = selectedProducts.filter((item) => item.id !== product.id);
    setSelectedProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  const clearCart = () => {
    setSelectedProducts([]);
    localStorage.removeItem("cart");
  };

  let totalPrice = 0;
  selectedProducts.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });

  return (
    <>
      <div className="container but-cart m-3">
      <p className="m-3">TotalPrice: {totalPrice}$</p>
        <button className="btn btn-danger" onClick={clearCart}>
          Delete Cart
        </button>
      </div>
      {selectedProducts.map((product) => (
      <table className="table text-primary container" key={product.id}>
       <thead>
      <tr>
      <th>Category</th>
      <th>Image</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Delete</th>
      </tr>  
      </thead> 
     <tr>
     <td>{product.category}</td>
      <td><img src={product.image} alt="product" className="img-fluid cart-prod"/></td>
      <td>{product.price}$</td>
      <td>{product.quantity}</td>
      <td>  <button className="btn btn-danger" onClick={() => removeFromCart(product)}>
                Delete
              </button></td>
              </tr>
      </table>
      ))}
    </>
  );
}

export default Cart;