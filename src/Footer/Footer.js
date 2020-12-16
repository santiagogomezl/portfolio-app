import React, {Component} from 'react'
import './Footer.css'

class Footer extends Component{
 
  render(){
    return(
      <footer className='Footer'>
        <div className='footer-content'>
          <div className='footer-branding'>
            <a href='/'><span>[ <em>S</em> ]</span></a>
          </div>
          <div className='footer-contact'>
            <ul>
                <li><a href='https://www.linkedin.com/in/santiagogomezl/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin-in'></i></a></li>
                <li><a href='https://github.com/santiagogomezl' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a></li>
                <li><a href='mailto:santiago.gomezl@yahoo.com' target='_blank' rel='noopener noreferrer'><i className='fas fa-envelope'></i></a></li>
            </ul>
          </div>
        </div>
        <div className='pattern-footer'></div>
      </footer>
    )
  } 
}

export default Footer