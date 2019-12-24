import React, {Component} from 'react'

class AddInvestor extends Component {
  state = {

  }

  handleChange = (e) => {
      console.log(e)
  }

  handleSubmit = (e) => {
      console.log(e)
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Details</h5>

          <br />
          <br />

          <div>
            <label htmlFor="email">Investor</label>
            <input type="email" id="email" onChange={this.handleSubmit} />
          </div>

          <div>
            <label htmlFor="password">Platform</label>
            <input type="password" id="password" onChange={this.handleSubmit} />
          </div>

          <div>
            <label htmlFor="password">Amount</label>
            <input type="password" id="password" onChange={this.handleSubmit} />
          </div>

          <br />

          <div className="input-field">
            <button className="btn #000000 black white-text">Login</button>
          </div>

        </form>
      </div>
    )
  }
}

export default AddInvestor
