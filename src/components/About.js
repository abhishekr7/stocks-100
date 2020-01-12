import React, {Component} from 'react'
import logo from '../company_logo.jpg';

class About extends Component {

  render() {
    return (
      <div style = {{height:"100vh"}}>
          <img src={logo} className="Applogo" alt="logo"/>
      </div>
    )
  }
}

export default About
