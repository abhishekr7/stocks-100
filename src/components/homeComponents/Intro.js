import React, {Component} from 'react'
import { Spring } from 'react-spring/renderprops'

const c1Style = {
  background: '#1b1c1d',
  color: 'white',
  padding: '1.5rem',
  width: '100%'
}

const Intro = () => (

  <Spring from={{ opacity: 0.4, marginTop: 1000}} to={{ opacity: 1, marginTop: 50}}>
      {props => (
            <div style={props}>
                <div style = {c1Style}>
                      <h2>Who are we ?</h2>
                      <p>We are a stock screening service dedicated to bringing new individuals in the day trading universe.<br />
                        We understand that stock market is considered to be scary affair by most and we are here to bust that myth.<br />
                        Our easy-to-use solutions will help you analyse and compare the performance of various stocks, thereby helping you to make the best decisions.
                      </p>
                </div>
            </div>
      )}
  </Spring>
)

export default Intro
