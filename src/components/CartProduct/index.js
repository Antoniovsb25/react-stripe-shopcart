import Button from 'react-bootstrap/button';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';
import { getProductData } from '../../productsStore';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const { id, quantity } = props;
    const productData = getProductData(id);

    return (
        <>
            <p>{productData.title}</p>
            <p>x{quantity}</p>
            <p>${(quantity * productData.price).toFixed(2)}</p>
            <Button size='sm' onClick={() => cart.deleteFromCart(id)} >Remove</Button>
            <hr></hr>
        </>
    )
};

export default CartProduct;