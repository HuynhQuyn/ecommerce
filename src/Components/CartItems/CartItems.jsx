import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart , deleteFromCart} = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e,id) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={id}>
              <div className="cartitems-format cartitems-format-main">
                <img className="carticon-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div className="cartitems-quanity-btn">
                  <button 
                   onClick={() => {
                    addToCart(e.id);
                  }}
                  className="quanity-btn">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button className="cartitems-quantity">{cartItems[e.id]}</button>
                  <button 
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="quanity-btn">
                    <FontAwesomeIcon icon={faMinus} />
                  </button>

                </div>
               
                <p>${e.new_price*cartItems[e.id]}</p>
                <img
                    className="carticon-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    deleteFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="promo_code"/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
