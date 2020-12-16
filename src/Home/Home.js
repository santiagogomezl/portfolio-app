import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import portfolioContext from '../portfolioContext'
import PortfolioItem from '../PortfolioItem/PortfolioItem'

import './Home.css'

class Home extends Component{

  static contextType = portfolioContext
 
  render(){

    const portfolioItems = this.context.portfolio.map((portfolioItem, i) => {
      return(
        <PortfolioItem key={`portfolio-item-${i}`} {...portfolioItem} technologies={this.props.technologies}/>
      )
    })

    return(
      <div className='Home'>
        <div className='hero'>
          <div className='pattern-hero-top'></div>
            <span className='hero-branding'>[ <em>S</em> ]</span>
            <div className='hero-content'>
              <div className='hero-skills'>
                <ul>
                  <li><i className='fab fa-css3'></i></li>
                  <li><i className='fab fa-js'></i></li>
                  <li><i className='fab fa-react'></i></li>
                  <li><i className='fab fa-node'></i></li>
                </ul>
              </div>
              <div className='hero-details'>
                <h1>Hi, I'm Santiago [ <em>Santi</em> ] Gomez. <br/>A <span>Full-Stack Developer</span></h1>
                <p>Based in San Francisco Bay Area. Web Development, IT Engineering</p>
                <ul>
                    <li><a href='https://www.linkedin.com/in/santiagogomezl/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin-in'></i></a></li>
                    <li><a href='https://github.com/santiagogomezl' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a></li>
                </ul>
              </div>
              <div className='hero-picture'>
                <img src='./img/Santipic2.png' alt='Santiago Gomez Hero' />
              </div>
            </div>
            <div className='pattern-hero-bottom'></div>
        </div>

       <section id='about' className='about'>
          <h2>About Me</h2>
          <div className='about-content'>
            <div className='about-headshot'>
                <img className='avatar-img' src='./img/avatar-santiago.png' alt='Headshot of Santiago Gomez' />
            </div>
            <div className='about-details'>
              <p>
                I'm a Web Developer and Computer Network Engineer who loves
                working with people and computers. I thrive on being part of
                a team that is passionate about creating web content to connect with 
                people, and to extend the frontiers of Web Design. 
              </p>
              <p>  
                When I'm not coding, you can find me running, or on the soccer
                field. Always on the lookout for a good read or to learn 
                something new. I'm currently learning about Microsoft Office 365, Microsoft Power Platform and PowerShell.
              </p>
            </div>
          </div>
        </section>
        <section id='portfolio' className='portfolio'>
            <h2>My Work</h2>
            <div className='portfolio-items'>
              {portfolioItems}
            </div>
        </section>
        <section id='contact' className='contact'>
            {/* <di class='contact-header'>
                <h2>Get in Touch</h2>
                <p>Feel free to reach out! Find me on:</p>
            </di> */}
            <div className='contact-content'>
              <div className='contact-details'>
              <ul>
                <li><a href='https://www.linkedin.com/in/santiagogomezl/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin-in'></i>Linkedin</a></li>
                <li><a href='https://github.com/santiagogomezl' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i>Github</a></li>
                <li><a href='mailto:santiago.gomezl@yahoo.com' target='_blank' rel='noopener noreferrer'><button className='reach-out-btn'>Reach Out Here</button></a></li>
              </ul>
              </div>
              <div className='contact-headshot'>
                <img src='./img/texting-santiago.png' alt='Headshot of Santiago Gomez texting' />
              </div>
              
            </div>
            <div className='hello-bg'></div>
        </section>
      </div>
    )
  } 
}

export default withRouter(Home)