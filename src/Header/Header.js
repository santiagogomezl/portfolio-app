import React, {Component} from 'react'
import './Header.css'

class Header extends Component{
 
  render(){
    return(
      <header className='Header'>
        <nav className='nav-menu'>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">My Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  } 
}

export default Header