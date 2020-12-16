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
      // const selectedLink = document.querySelector('.selected')
      // if(selectedLink){
      //   selectedLink.classList.remove('selected')
      // }
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

        // this.toggleSection(`${section}Link`)

      //   let scrollpos = window.scrollY
      // window.addEventListener('scroll', function() {
        
      //   scrollpos = Math.round(window.scrollY)

      //   if(scrollpos >= aboutY -100  && scrollpos < portfolioY -100 ){
      //     const selectedLink = document.querySelector('.selected')
      //     const aboutLink = document.querySelector('#aboutLink')
      //     if(selectedLink){
      //       selectedLink.classList.remove('selected')
      //       aboutLink.classList.add('selected')
      //     }else{
      //       aboutLink.classList.add('selected')
      //     }
      //   }else if(scrollpos >= portfolioY -100 && scrollpos < contactY - 500){
      //     const selectedLink = document.querySelector('.selected')
      //     const portfolioLink = document.querySelector('#workLink')
      //     if(selectedLink){
      //       selectedLink.classList.remove('selected')
      //       portfolioLink.classList.add('selected')
      //     }else{
      //       portfolioLink.classList.add('selected')
      //     }
      //   }else if(scrollpos >= contactY -500){
      //     const selectedLink = document.querySelector('.selected')
      //     const contactLink = document.querySelector('#contactLink')
      //     if(selectedLink){
      //       selectedLink.classList.remove('selected')
      //       contactLink.classList.add('selected')
      //     }else{
      //       contactLink.classList.add('selected')
      //     }
      //   }else{
      //     const selectedLink = document.querySelector('.selected')
      //     if(selectedLink){
      //       selectedLink.classList.remove('selected')
      //     }
      //   }

      // })



      }else{
        window.scrollTo(0,0)
        // const selectedLink = document.querySelector('.selected')
        // if(selectedLink){
        //   selectedLink.classList.remove('selected')
        // }
      }
      
  }

  toggleSection(linkId){
    // const selectedLink = document.querySelector('.selected')
    // const clickedLink = document.querySelector(`#${linkId}`)
    // if(selectedLink && clickedLink){
    //   if(selectedLink !== clickedLink){
    //     clickedLink.classList.toggle('selected')
    //     selectedLink.classList.toggle('selected')
    //   }
    // }else{
    //   clickedLink.classList.toggle('selected')
    // }
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

        // this.toggleSection(`${section}Link`)
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