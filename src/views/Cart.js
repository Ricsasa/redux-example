import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList';

const Cart = () => {

  const products = useSelector(store => store.cart.products)
  const total = useSelector(store => store.cart.total)

  return (
    <>
      <h1>Cart</h1>
      <h1>Price: {total}</h1>
      {Array.isArray(products) && products.length > 0 && <ProductList products={products} isCart={true} />}
      {Array.isArray(products) && products.length === 0 && "No hay productos!!"}
    </>
  )
};

export default Cart;
