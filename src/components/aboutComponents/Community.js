import React, {Component} from 'react'
import { Spring } from 'react-spring/renderprops'

const c1Style = {
  background: 'dimgrey',
  color: 'white',
  padding: '1.5rem'
}

const linkStyle = {
  color: 'white',
  textDecoration: 'underline'
}

const Community = () => (

      <Spring from={{ opacity: 0, marginTop: -1500}} to={{ opacity: 1, marginTop: 0}}>
        {props => (
          <div style={props}>
              <div style = {c1Style}>
                    <h2>Community</h2>
                    <p>Stocks Wala is currently a pet project but we have high ambitions for it.<br />
                    All value-adding contributions would be accepted.<br />
                    Raise issues before making pull requests.<br />
                    Follow this project <a href='https://github.com/abhishekr7/stocks-100' style = {linkStyle}>here</a></p>
              </div>
          </div>
        )}
      </Spring>
)

export default Community
