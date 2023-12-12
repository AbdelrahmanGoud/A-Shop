import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    updateCartItemCount();
  }, []);

  const updateCartItemCount = () => {
    const existingProduct = localStorage.getItem("cart");
    let cart = [];

    if (existingProduct) {
      cart = JSON.parse(existingProduct);
    }

    setCartItemCount(cart.length);
  };

  const handleCartClick = () => {
    setShowNotification(true);
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <>
      {[false,].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary px-5 larg-nav">
          <Container fluid>
            <Link as={Link} to="/" className="navlogo">A-Shop</Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="other-link">
                  A-Shop
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/Product">Shop</Nav.Link>
                  <Nav.Link as={Link} to="/Cart" onClick={handleCartClick}>
                    
                  <button type="button" className="btn position-relative">
                  <i class="fa-solid fa-cart-shopping cart-nav"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {cartItemCount}
    <span className="visually-hidden">unread messages</span>
  </span>
</button> 
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    
      {showNotification && (
        <div className="notification">
          Item added to cart!
        </div>
      )}
    </>
  );
}

export default Navigation;