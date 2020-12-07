import React, {Component} from 'react'
import './Footer.css'

class Footer extends Component{
 
  render(){
    return(
      <footer className='Footer'>
        <div className='contact' id='contact'>
          <h2>Contact</h2>
          <ul>
              <li><a href='https://www.linkedin.com/in/santiagogomezl/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin-in'></i>Linkedin</a></li>
              <li><a href='https://github.com/santiagogomezl' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i>GitHub</a></li>
              <li><a href='mailto:santiago.gomezl@yahoo.com' target='_blank' rel='noopener noreferrer'><i className='fas fa-envelope'></i>santiago.gomezl@yahoo.com</a></li>
          </ul>
        </div>
      </footer>
    )
  } 
}

export default Footer