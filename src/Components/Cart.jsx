// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Image,
//   Stack,
//   Heading,
//   Text,
//   Button,
//   Flex,
//   Divider,
//   HStack,
//   Center,
// } from "@chakra-ui/react";
import { useContext } from "react";
import {ShopContext} from "../Context/ShopContext";
import { PRODUCTS } from "../products";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import './Cart.css'



const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  // const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
// {totalAmount > 0 ? (
  //   <div className="checkout">
  //     <p>Subtotal: ₹{totalAmount}</p>
  //     <button onClick={() => navigate("/")}>Continue Shopping</button>
  //     <button>Checkout</button>
  //   </div>
  // ) : (
  //   <h1> Your Cart is Empty</h1>
  // )}