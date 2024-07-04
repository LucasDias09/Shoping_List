import React,{useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CheckOut } from '../CheckOut/CheckOut';

export const Cart = () => {
  const { cartItems,getTotalCardAmount} = useContext(ShopContext);
  const totalAmount = getTotalCardAmount()


  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="checkout">
        
        <p>Sub Total: {totalAmount}€</p>
        <CheckOut></CheckOut>
      </div>
    </div>
  )
}
