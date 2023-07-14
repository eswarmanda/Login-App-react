import {Component} from 'react'

import './index.css'

import Message from '../Message/index'
import Login from '../Login/index'
import Logout from '../Logout/index'

class Home extends Component {
  state = {isTrue: false}

  isClicked = () => {
    const {isTrue} = this.state
    this.setState(prevState => {
      console.log(`${prevState.isTrue}`)
      if (isTrue === false) {
        return {isTrue: true}
      }
      return {isTrue: false}
    })
  }

  render() {
    const {isTrue} = this.state
    return (
      <div className="container">
        <div className="card">
          {isTrue ? <h1>Welcome User</h1> : <Message />}
          <button className="log" type="submit" onClick={this.isClicked}>
            {isTrue ? <Logout /> : <Login />}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
