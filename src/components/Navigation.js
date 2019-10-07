import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartsContext from "../contexts/CartsContext";

const Navigation = () => {
	const {cart} = useContext(CartsContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
