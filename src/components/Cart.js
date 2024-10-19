import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    // reading cart from the store to get cart items, so we subscribe to the store.
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
     dispatch(clearCart());
    };

    return (
    <div className="text-center m-4 p-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-7/12 m-auto">
            
        <button className="p-2 m-2 bg-black text-white rounded-lg" 
        onClick={handleClearCart}>
            Clear Cart</button>
           {cartItems.length == 0 && <h2>Oops! Your Cart is empty add items to the cart.</h2>} 
        <ItemList items={cartItems}/>
            
        </div>
    </div>
    );
};


export default Cart;