import React, { useState, useContext } from 'react'
import '@styles/MobileNav.scss'
import Menu from '@components/Menu'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shooping_cart from '@icons/icon_shopping_cart.svg'
import MyOrder from '@containers/MyOrder'
import AppContext from '@context/AppContext'

const MobileNav = ({state}:any) => {

  return (
    <section className="mobile-menu">
        <ul>
            <li><a href="/">All</a></li>
            <li><a href="/">Clothes</a></li>
            <li><a href="/">Electronics</a></li>
            <li><a href="/">Furnitures</a></li>
            <li><a href="/">Toys</a></li>
            <li><a href="/">Others</a></li>
        </ul>
        <ul>
            <li><a href="/">My Orders</a></li>
            <li><a href="/">My Account</a></li>
        </ul>

        <ul>
            <li>
                <a className="email" href="/">umana.dewin@gmail.com</a>
            </li>
            <li><a className="sign-out" href="/">Sign out</a></li>
        </ul>
    </section>
  )
}

export default MobileNav
