import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import portfolioContext from '../portfolioContext'
import './MyWork.css'

class MyWork extends Component{

  static contextType = portfolioContext

  state = {
    id: '',
    name: '',
    details: '',
    technologiesIds: '',
    logo: '',
    repo: '',
    site: '',
}


  componentDidMount(){

    if(this.props.match){

      const urlName = this.props.match.params.work_name.replace(/-/g, ' ')
      const myWork = this.context.portfolio.find(portfolioItem => portfolioItem.name.toLowerCase() === urlName)
      if(myWork){
        this.setState({
          id: myWork.id,
          name: myWork.name,
          details: myWork.details,
          technologiesIds: myWork.technologiesIds,
          logo: myWork.logo,
          repo: myWork.repo,
          site: myWork.site,
          images: myWork.images
        })
      }else{
        if(this.props.history){
          this.props.history.push('/')
        }else{
          window.location.href = '/'
        }
      }
     
    }else{

      if(this.props.history){
        this.props.history.push('/')
      }else{
        window.location.href = '/'
      }

    }

  }

  render(){

    const { name, details, logo, repo, site, technologiesIds, images } = this.state
    const siteTechnologies = this.context.technologies

    let techs
    if(technologiesIds){
      techs = technologiesIds.map((id, i) => {
        const faObj = siteTechnologies.find(siteTechnology => Number(siteTechnology.id) === Number(id))
        return(
          <li key={`fa-icon-${i}`}><i className={`fab ${faObj.faIcon}`}></i></li>
        )
      })
    }
    
    let desktopGallery
    let mobileGallery
    if(images){

      desktopGallery = images.slice(0,3).map((img, i) => {
        return(
          <div className='image-container' key={`desktop-gallery-${i}`}>
            <img src={`/img/${img.img}`} alt={`${name} features`}/>
            <div className='image-caption'>
              <p>{img.caption}</p>
            </div>
          </div>
        )
      })

      mobileGallery = images.slice(3,5).map((img, i) => {
        return(
          <div className='mobile' key={`mobile-gallery-${i}`}>
            <img src={`/img/${img.img}`}  alt={`${name} mobile features`} />
            <div className='mobile-caption'>
              <p>{img.caption}</p>
            </div>
          </div>
        )
      })

    }

    return(
      <div className='MyWork'>

        <div className='mywork-container'>
          <div className='mywork-logo'>
            <img src={`/img/${logo}`} alt={`${name} logo`} />
          </div>
          <div className='mywork-header'>
              <h1>{name}</h1>
          </div>
          <div className='mywork-details'>
            <p>{details}</p>
            <ul>{techs}</ul>
          </div>
          <div className='mywork-links'>
            <ul>
              <li>
                <h3>Live Demo</h3>
                <a href={site} target='_blank' rel='noopener noreferrer'>{site.replace('https://','')}</a>
              </li>
              <li>
                <h3>Repo</h3>
                <a href={repo} target='_blank' rel='noopener noreferrer'>{repo.replace('https://','')}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mywork-images'>
          {desktopGallery}
        
          <div className='mobiles-container'>
            {mobileGallery}
          </div> 

        </div>
        
      </div>
    )
  } 
}

export default withRouter(MyWork)
