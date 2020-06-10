import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const style = {
  background: 'lightgreen',
  padding:'10px'
};

const NavBar = () => {

  const products = useSelector(store => store.cart.products)

  return (
    <div style={style}>
      <h3>RicsiStore</h3>
      <Link to="/">Home</Link>   
      |
      <Link to="/cart">Cart({products.length})</Link>   
    </div>
  )
};

export default NavBar;