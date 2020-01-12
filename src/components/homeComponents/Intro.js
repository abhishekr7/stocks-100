import React, {Component} from 'react'
import { Spring } from 'react-spring/renderprops'

const c1Style = {
  background: 'grey',
  color: 'white',
  padding: '1.5rem',
  width: '100%'
}

const Intro = () => (

  <Spring from={{ opacity: 0.4, marginTop: 1000}} to={{ opacity: 1, marginTop: 0}}>
      {props => (
            <div style={props}>
                <div style = {c1Style}>
                      <h2>Our Services</h2>
                      <p>Check out the details of all the Top Companies registered with NASDAQ<br />
                      Compare two stocks against each other.<br />
                      See how a stock performs over time.
                      </p>
                </div>
            </div>
      )}
  </Spring>
)

export default Intro
