import React,{useContext} from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Button from "react-bootstrap/esm/Button";
import "./shop.css";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";


export const Shop = () => {
  const navigate = useNavigate()
  const { getTotalItemCars } = useContext(ShopContext);
  const  totalAmount = getTotalItemCars()

  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Pedro Tech Shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product)=> <Product data={product}/>)}
        </div>
    <div className="botton_checkout">
      <Button className="btn btn-sucess btn-lg" 
      onClick={
        ()=>
          navigate('/cart')
        }
        > Ver carrinho </Button>
    </div>

    </div>
  )
}
