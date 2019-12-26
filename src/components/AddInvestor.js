import React, {Component} from 'react'

class AddInvestor extends Component {
  state = {
      investor : '',
      platform : '',
      amount : ''
  }

  handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
      // prevent default action of form submission ->  blank form entries
      //e.preventDefault();
      console.log(this.state);
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
            <label htmlFor="investor">Investor</label>
            <input type="text" id="investor" onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="platform">Platform</label>
            <input type="text" id="platform" onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" onChange={this.handleChange} />
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
