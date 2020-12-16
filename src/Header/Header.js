import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './Header.css'

class Header extends Component{

  componentDidMount(){
  
    const pathname = this.props.location.pathname
      if(pathname === '/about' || pathname === '/work' || pathname === '/contact'){

        const section  = pathname.substring(1)
        const aboutY = Math.round(document.getElementById('about').getBoundingClientRect().top + window.scrollY)
        const portfolioY = Math.round(document.getElementById('portfolio').getBoundingClientRect().top + window.scrollY)
        const contactY = Math.round(document.getElementById('contact').getBoundingClientRect().top + window.scrollY)
        
        switch(section){
          case 'about':
            window.scrollTo(0, aboutY - 100)
          break
          case 'work':
            window.scrollTo(0, portfolioY - 100)
          break
          case 'contact':
            window.scrollTo(0, contactY - 100)
          break
          default:
            window.scrollTo(0, 0)
        }

        this.toggleSection(`${section}Link`)

    }else{
      window.scrollTo(0,0)

    }
  }

  componentDidUpdate(){

    const pathname = this.props.location.pathname
      if(pathname === '/about' || pathname === '/work' || pathname === '/contact'){

        const section  = pathname.substring(1)
        const aboutY = Math.round(document.getElementById('about').getBoundingClientRect().top + window.scrollY)
        const portfolioY = Math.round(document.getElementById('portfolio').getBoundingClientRect().top + window.scrollY) 
        const contactY = Math.round(document.getElementById('contact').getBoundingClientRect().top + window.scrollY)
        
        switch(section){
          case 'about':
            window.scrollTo(0, aboutY - 100)
          break
          case 'work':
            window.scrollTo(0, portfolioY - 100)
          break
          case 'contact':
            window.scrollTo(0, contactY - 100)
          break
          default:
            window.scrollTo(0, 0)
        }

      }else{
        window.scrollTo(0,0)
        
      }  
  }

 
  toSection(e, section){
    e.preventDefault()
    
    if(this.props.history){
      this.props.history.push(`/${section}`)

      const pathname = this.props.location.pathname
      if(pathname === '/about' || pathname === '/work' || pathname === '/contact'){

        const aboutY = Math.round(document.getElementById('about').getBoundingClientRect().top + window.scrollY)
        const portfolioY = Math.round(document.getElementById('portfolio').getBoundingClientRect().top + window.scrollY)
        const contactY = Math.round(document.getElementById('contact').getBoundingClientRect().top + window.scrollY)
        
        switch(section){
          case 'about':
            window.scrollTo(0, aboutY - 100)
          break
          case 'work':
            window.scrollTo(0, portfolioY - 100)
          break
          case 'contact':
            window.scrollTo(0, contactY - 100)
          break
          default:
            window.scrollTo(0, 0)
        }

      }
    }
   
  }
 
  render(){
    return(
      <header className='Header'>
        <nav className='nav-menu'>
          <div className='header-branding'>
            <span id='name' className=''><Link to={'/'}>Santiago Gomez</Link></span>
          </div>
          <ul>
            <li><Link id='aboutLink' to={'/about'} onClick={e => this.toSection(e, 'about')}>About</Link></li>
            <li><Link id='workLink' to={'/work'} onClick={e => this.toSection(e, 'work')}>My Work</Link></li>
            <li><Link id='contactLink' to={'/contact'} onClick={e => this.toSection(e, 'contact')}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  } 
}

export default withRouter(Header)