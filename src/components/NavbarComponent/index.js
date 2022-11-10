import { useState, useContext } from "react";
import { Button, Navbar, Modal } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import CartProduct from "../CartProduct";

function NavbarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({items: cart.items})
    }).then(response => {
        return response.json();
    }).then(response => {
        if (response.url) {
            window.location.assign(response.url) //fowarding user to stripe
        }
    })
  }

  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productCount}) Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {productCount > 0 ? 
            <>
                <p>Items in your cart:</p>
                {cart.items.map((product, index) => (
                    <CartProduct key={index} id={product.id} quantity={product.quantity} />
                ))}
                <p>Total: {cart.getTotalCost().toFixed(2)}</p>
                <Button onClick={checkout} variant="success">Buy now</Button>
            </> 
            : <span>Empty cart</span>}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
