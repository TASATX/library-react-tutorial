import React from "react";
import emptyCart from '../assets/empty_cart.svg'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Cart = () => {
    return (
        <div id="books__body">
            <main id="cart">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                                <div className="cart__header">
                                    <span className="cart__book">Book</span>
                                    <span className="cart__quantity">Quantity</span>
                                    <span className="cart__total">Price</span>
                                </div>
                                <div className="cart__body">
                                    <div className="cart__item">
                                        <div className="cart__book">
                                            <img src="/" className="cart__book--img" 
                                            alt="" />
                                            <div className="cart__book--info">
                                                <span className="cart__book--title">???</span> 
                                                <span className="cart__book--price">
                                                "$" 
                                                "29.00"
                                                </span>
                                                <button className="cart__book--remove">Remove</button>
                                            </div>
                                        </div>
                                        <div className="cart__quantity">
                                            <input type="number" min="0" max="99" className="cart__input" value="1" />
                                        </div>
                                        <div className="cart__total">
                                            "$"
                                            "29.00"
                                        </div>
                                    </div>
                                </div>
                                <div className="total">
                                    <div className="total__item total__sub-total">
                                        <span>Subtotal</span>
                                        <span>
                                            "$"
                                            "26.10"
                                        </span>                    
                                    </div>
                                    <div className="total__item total__tax">
                                        <span>Tax</span>
                                        <span>
                                            "$"
                                            "2.90"
                                        </span>                    
                                    </div>
                                    <div className="total__item total__price">
                                        <span>Total</span>
                                        <span>
                                            "$"
                                            "29.00"
                                        </span>                    
                                    </div>
                                    <button className="btn btn__checkout no-cursor">Proceed to checkout</button>
                                </div>
                                <div className="cart__empty">
                                    <img src={emptyCart} alt="cart__empty==img" />
                                    <h2>You don't have any books in your cart!</h2>
                                    <Link to="/book">
                                        <button className="btn">Browse Books</button>
                                    </Link>
                                </div>
                            </div>    
                    </div>
                </div>
            </main>
        </div>
      
    );
}

export default Cart;