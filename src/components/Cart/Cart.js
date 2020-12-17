import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total , prd ) => total + prd.price ,0);
    let shipping = 0;
    if(total > 150){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.50;
    }
    let tax = total / 10;
    const formatNmbr = num =>{
        const precision =  num.toFixed(2);
        return(precision);
    }
    const grandTotal = total + shipping + tax ;
    return (
        <div>
            <h3><small>Course Purchased : {cart.length}</small></h3>
            <h5><small>Course Price : ${formatNmbr(total)} </small> </h5>
            <h5><small>Shipping & Handling : ${formatNmbr(shipping)} </small></h5>
            <h5><small>Total Before Tax : ${formatNmbr(total + shipping)}</small></h5>
            <h5><small>Estimated Tax: ${formatNmbr(tax)} </small></h5>
            <h3 className ="orderTotal"> Total : ${formatNmbr(grandTotal)}</h3>

                <button  className="cartBtn"> Add To Cart
                </button>
        </div>
    );
};

export default Cart;