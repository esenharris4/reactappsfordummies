import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <EssayForm fields={fields} />
      </div>
    )
  }
}

class EssayForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.forms = this.forms.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    alert('An essay was submitted: ' + this.state.value)
    event.preventDefault()
  }

  forms () {
    const content = this.props.fields.map((field) =>
      <div key={field.id} >
        <label>
          {field.name}
          <input type={field.type} name={field.name} />
        </label>
      </div>

    )
    return (
      <div>
        {content}
      </div>

    )
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          {this.forms()}
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default App

const fields = [
  {id: 0, name: 'username', type: 'text'},
  {id: 1, name: 'password', type: 'password'},
  {id: 2, name: 'email', type: 'email'},
  {id: 3, name: 'name', type: 'text'}
]
