import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

export default function Header() {
    const cartItems = useSelector((state)=>state.cartItems);
    let cartItemQuantitiy = cartItems.reduce((accumlator,currElem)=>accumlator+currElem.quantity,0);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
            <ShoppingCartIcon/>
          <div className="cart-items-count">{cartItemQuantitiy}</div>
        </Link>
      </div>
    </header>
  )
}