import React from 'react';

const Cart = (props) =>{
	return(
		<div>
			<ul>
				<li>{props.currentItems}</li>
			</ul>
		</div>
		)
}

export default Cart;