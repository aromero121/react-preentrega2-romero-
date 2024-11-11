import React from 'react'
import Logo from "./Logo"
import CartWidget from "./CartWidget"
import "./navbar.css"

function NavBar() {
  return (
    <div>
      <Logo/>
        <ul className="categorias">
          <li><a href="#">Electrodomésticos</a></li>
          <li><a href="#">Vestimenta</a></li>
          <li><a href="#">Calzado</a></li>
          <li><a href="#">Libros</a></li>
          <li><CartWidget/></li>
        </ul>
        
    </div>
  )
}

export default NavBar