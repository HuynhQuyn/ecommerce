import React, { useContext, useState } from 'react';
import './Navbar.css'
import logo from "../Assets/logo.png";
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
    const [menu, setMenu] = useState('Shop')

    const {getTotalCartItems} = useContext(ShopContext)
    const handleBtn = (item) => {
        setMenu(item)
    }
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={logo} alt=''></img>
            <p>Shopper</p>
        </div>
        <ul className='navbar-menu'>
            <li onClick={() => handleBtn('Shop')}><Link to='/'>Shop</Link> {menu==='Shop' && <hr/>}</li>
            <li onClick={() => handleBtn('Men')}><Link to='/men'>Men</Link>  {menu==='Men' && <hr/>}</li>
            <li onClick={() => handleBtn('Women')}><Link to='/women'>Women</Link> {menu==='Women' && <hr/>}</li>
            <li onClick={() => handleBtn('Kids')}><Link to='/kids'>Kids</Link>  {menu==='Kids' && <hr/>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
