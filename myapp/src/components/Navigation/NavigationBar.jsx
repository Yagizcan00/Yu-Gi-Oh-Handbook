import React from 'react'
import "./NavigationBar.scss"
import { Outlet, Link } from "react-router-dom";
import CardsLogo from "../../icons/cards.png"
import GuideLogo from "../../icons/guide.png"

function NavigationBar() {
  return (
    <section className='NavigationBar'>
      <section className='NavigationParent'>
        <Link className='link' to="/">
        <img className="icon" src={GuideLogo} alt="Rehber Sayfa" />
        </Link>
        <Link className='link' to="/elimdekikartlar">
        <img className="icon" src={CardsLogo} alt="Elimdeki Kartlar" />
        </Link>
      </section>
      <Outlet />
    </section>
  )
}

export default NavigationBar
