import React, {Component} from 'react'
import portfolioContext from '../portfolioContext'
import {Link} from 'react-router-dom'
import './PortfolioItem.css'

class PortfolioItem extends Component{

  static contextType = portfolioContext

  d

  getUrl(name){
    return(
      name.replace(/\s/g, '-').toLowerCase()
    )
  }

  render(){

    const { name, details, logo, repo, technologiesIds } = this.props
    const siteTechnologies = this.context.technologies

    let techs
    if(siteTechnologies){
      techs = technologiesIds.map((id, i) => {
        const faObj = siteTechnologies.find(siteTechnology => Number(siteTechnology.id) === Number(id))
        return(
          <li key={`fa-icon-${i}`}><i className={`fab ${faObj.faIcon}`}></i></li>
        )
      })
    }
    

    return(
      <div className='PortfolioItem'>
        <div className='portfolio-item-header'>
          <h3><Link to={`work/${this.getUrl(name)}`}>{name}</Link></h3>
          <ul>
              {techs}
          </ul>
        </div>
        <div className='portfolio-item-image'>
          <Link to={`work/${this.getUrl(name)}`}>
              <img src={`./img/${logo}`} alt={`${name} portfolio thumbnail`} />
          </Link>
        </div>
          
        <div className='portfolio-item-details'>
          <p>{details}</p>
          <p className='repo-link'><i className='fab fa-github'></i><a href={repo} target='_blank' rel='noopener noreferrer'>{repo.replace('https://github.com','')}</a></p>
        </div>
      </div>
    )
  } 
}


// Set default props
PortfolioItem.defaultProps = {
  name: '', 
  details: '', 
  logo: '', 
  repo: '',
  technologiesIds: []
};

export default PortfolioItem