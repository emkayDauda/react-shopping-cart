import React from 'react';
import { useContext } from "react";
import productsContext from "../contexts/productsContext";

// Components
import Product from './Product';

const Products = () => {
	const { products, addItem } = useContext(productsContext);
	console.log(useContext(productsContext));
	
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
