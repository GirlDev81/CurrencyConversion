import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Tiff'
    }
  }
  render () {
    return (
      <section id="home">
        <div className="container">
         <div className="col-md-6">
          <img src="/img/logo2.png" className="squares-logo"/>
          <div className="ads">Add Ad Here</div>
         </div>

         <div className="col-md-6">
          <h2>Convert your currency</h2>
            <label>Amount:</label>
              <input type="text" name="amount"/>
              {/* API CURRENCY LISTINGS */}
            <label>From:</label>
              <input type="text" name="currency"/>
            <label>To:</label>
              <input type="text" name="currency"/>
                {/* API CURRENCY LISTINGS */}
            <button type="submit">Convert</button>
         </div>
        </div>
      </section>)
  }
}
