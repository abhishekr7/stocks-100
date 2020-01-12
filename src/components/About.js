import React, {Component} from 'react'
import WhyUs from './aboutComponents/WhyUs.js'
import OurServices from './aboutComponents/OurServices.js'
import Community from './aboutComponents/Community.js'

class About extends Component {

  render() {
    return (
      <div style = {{height:"100vh"}}>
          <WhyUs />
          <OurServices />
          <Community />
      </div>
    )
  }
}

export default About
