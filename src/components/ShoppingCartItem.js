import React, {useContext} from 'react';
import CartsContext from "../contexts/CartsContext";
const Item = props => {
	const {removeItem} = useContext(CartsContext)

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeItem({id: props.id})}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
