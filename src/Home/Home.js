import React, {Component} from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import './Home.css'

class Home extends Component{
 
  render(){

    const portfolioItems = this.props.portfolio.map((portfolioItem, i) => {
      return(
        <PortfolioItem key={`portfolio-item-${i}`} {...portfolioItem} technologies={this.props.technologies}/>
      )
    })

    return(
      <div className='Home'>
        <div className='hero'>
          <div className='hero-title'>
            <h1>Hi, I'm Santiago [ <em>Santi</em> ] Gomez. <br/>A <span>Full-Stack Developer</span></h1>
          </div>
          <div className='hero-social'>
            <ul>
                <li><a href='https://www.linkedin.com/in/santiagogomezl/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin-in'></i></a></li>
                <li><a href='https://github.com/santiagogomezl' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a></li>
            </ul>
          </div>
        </div>

       <section id='about' className='about'>
          <div className='about-content'>
            <div className='about-headshot'>
                <img className='avatar-img' src='./img/avatar-santiago.jpg' alt='Headshot of Santiago Gomez' />
            </div>
            <div className='about-details'>
              <h2>About Me</h2>
              <p>
                I'm a Web Developer and Computer Network Engineer who loves
                working with people and computers. I thrive on being part of
                a team passionate about creating web content to connect with 
                people and to extend the frontiers of Web Design. 
              </p>
              <p>  
                When I'm not coding, you can find me running or on the soccer
                field. Always on the lookout for a good read or to learn 
                something new. I'm currently learning about Microsoft Office365, Microsoft Power Platform and PowerShell.
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
      </div>
    )
  } 
}

export default Home