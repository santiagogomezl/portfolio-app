import React, {Component} from 'react'
import './NotFound.css'

class NotFound extends Component{


  //Will redirect back to home page. No further interaction
  componentDidMount(){
    if(this.props.location.push){
      this.props.location.push('/')
    }else{
      window.location.href = '/'
    }
  }
 
  render(){
    return(
      <div className='NotFound'>
      
      </div>
    )
  } 
}

export default NotFound