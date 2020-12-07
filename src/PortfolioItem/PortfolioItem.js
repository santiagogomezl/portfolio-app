import React, {Component} from 'react'
import './PortfolioItem.css'

class PortfolioItem extends Component{

  render(){

    const { name, details, logo, repo, site, technologiesIds } = this.props
    const siteTechnologies = this.props.technologies

    const techs = technologiesIds.map((id, i) => {
      const faObj = siteTechnologies.find(siteTechnology => Number(siteTechnology.id) === Number(id))
      return(
        <li key={`fa-icon-${i}`}><i className={`fab ${faObj.faIcon}`}></i></li>
      )
    })

    return(
      <div className='PortfolioItem'>
        <div className='portfolio-item-header'>
          <h3><a href={site} target='_blank' rel='noopener noreferrer'>{name}</a></h3>
          <ul>
              {techs}
          </ul>
        </div>
        <div className='portfolio-item-image'>
          <a href={site} target='_blank' rel='noopener noreferrer'>
              <img src={`./img/${logo}`} alt={`${name} portfolio thumbnail`} />
          </a>
        </div>
          
        <div className='portfolio-item-details'>
          <p>{details}</p>
          <p className='repo-link'><i className='fab fa-github'></i><a href={repo} target='_blank' rel='noopener noreferrer'>{repo.replace('https://github.com','')}</a></p>
        </div>
      </div>
    )
  } 
}

export default PortfolioItem