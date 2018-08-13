import React, {Component} from 'react'
import './App.css'

class SignUp extends Component {
  render () {
    return (
      <div className='SignUp'>
        <form>
          <label>
            Name :
            <input type='text' name='name' />
          </label>
        </form>
      </div>
    )
  }
}
export default SignUp
