import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './PortfolioItemThumb.css'

class PortfolioItemThumb extends Component{
 

  getUrl(name){
    return name.toLowerCase().replace(/\s/g,'-');
  }

  render(){

    const {id, name, details, logo, images, repo, site, technologiesIds } = this.props
    const siteTechnologies = this.props.technologies

    const techs = technologiesIds.map(id => {
      const faObj = siteTechnologies.find(siteTechnology => Number(siteTechnology.id) === Number(id))
      return(
        <li><i className={`fab ${faObj.faIcon}`}></i></li>
      )
    })

    console.log(techs)

    return(
      <div className='PortfolioItemThumb'>
        <div className='portfolio-item-thumb-header'>
          <h3><a href={site} target='_blank' rel='noopener noreferrer'>{name}</a></h3>
          <ul>
              {techs}
          </ul>
        </div>
        <div className='portfolio-item-thumb-image'>
          <Link to={`./portfolio/${this.getUrl(name)}`} >
              <img src={`./img/${logo}`} alt={`${name} portfolio thumbnail`} />
          </Link>
        </div>
          
        <div className='portfolio-item-details'>
          <h1>{name}</h1>
          <p>{details}</p>
          <p className='repo-link'><i className='fab fa-github'></i><a href={repo} target='_blank' rel='noopener noreferrer'>{repo.replace('https://','www.')}</a></p>
        </div>
      </div>
    )
  } 
}

export default PortfolioItemThumb