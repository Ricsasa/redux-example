import React from 'react';
import { useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../redux/actions';


const ProductList = ({ products, isCart }) => {

  const dispatch = useDispatch()

  const list = products.map(product => (
    <div
      key={product.productId}
    >
      <div>Description: {product.description}</div>
      <div>Sizes: {product.sizes}</div>
      <div>Price: {product.price}</div>
      {!isCart && <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>}
      {isCart && <button onClick={() => dispatch(deleteFromCart(product))}>Remove from cart</button>}
      <hr />
    </div>
  ));

  return (list);
}

export default ProductList;
