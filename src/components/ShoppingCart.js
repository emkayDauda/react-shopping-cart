import React, {useContext} from 'react'; 
import CartsContext from "../contexts/CartsContext";

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	console.log(useContext(CartsContext));
	
	const {cart, removeItem} = useContext(CartsContext)

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} removeItem={removeItem} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
