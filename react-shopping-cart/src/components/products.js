import React from 'react';

const Products = (props) => {
	return (
		<React.Fragment>
			<div>{props.name}</div>
			<div>{props.cost}</div>
		</React.Fragment>
	);
}

export default Products;