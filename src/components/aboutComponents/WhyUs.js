import React, {Component} from 'react'
import { Spring } from 'react-spring/renderprops'

const c1Style = {
  background: 'gainsboro',
  color: 'white',
  padding: '1.5rem'
}

const WhyUs = () => (

      <Spring from={{ opacity: 0.2, marginTop: -500 }} to={{ opacity: 1, marginTop: 0}}>
        {props => (
              <div style={props}>
                  <div style = {c1Style}>
                        <h2>Why Us ?</h2>
                        <p>We provide the best stock screening service at zero costs.<br />
                        Use our service any number of times you want.<br />
                        What's more ?...You don't even need to sign-up or log-in<br />
                        How we make money ?...We don't...Right Now!</p>
                  </div>
              </div>
        )}
      </Spring>
)

export default WhyUs
