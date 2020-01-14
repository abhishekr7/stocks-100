import React, {Component} from 'react'
import logo from '../companylogo.png'
import Intro from './homeComponents/Intro.js'
import WhyUs from './homeComponents/WhyUs.js'

class Home extends Component {

  render() {
    return (
      <div style = {{height:"100vh"}}>
          <img src={logo} className="Applogo" alt="logo"/>
          <Intro />
          <WhyUs />
      </div>
    )
  }
}

export default Home
