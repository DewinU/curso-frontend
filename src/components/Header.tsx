import React, { useState, useContext } from 'react'
import '@styles/Header.scss'
import Menu from '@components/Menu'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shooping_cart from '@icons/icon_shopping_cart.svg'
import MyOrder from '@containers/MyOrder'
import AppContext from '@context/AppContext'

const Header = () => {
 
  const { state, toggleOrders, toggleOptions } = useContext(AppContext)

  return (
    <nav>
      <img src={menu} alt='menu' className='nav-menu' />
      <div className='navbar-left'>
        <img src={logo} alt='logo' className='nav-logo' />
        <ul>
          <li>
            <a href='/'>All</a>
          </li>
          <li>
            <a href='/'>Clothes</a>
          </li>
          <li>
            <a href='/'>Electronics</a>
          </li>
          <li>
            <a href='/'>Furnitures</a>
          </li>
          <li>
            <a href='/'>Toys</a>
          </li>
          <li>
            <a href='/'>Others</a>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          <li className='navbar-email' onClick={ () => toggleOptions!() }>
            platzi@example.com
          </li>
          <li
            className='navbar-shopping-cart'
            onClick={ () => toggleOrders!() }>
            <img src={shooping_cart} alt='shopping cart' />
            {state!.cart.length > 0 && <div>{state!.cart.length}</div>}
          </li>
        </ul>
      </div>
      {state!.showOptions && <Menu />}
      {state!.showOrders && <MyOrder />}
    </nav>
  )
}

export default Header
