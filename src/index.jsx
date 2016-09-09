import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'

class Home extends Component {
  render() {
    return (<h1>Hi!</h1>) 
  }
}

class Car extends Component {
  render() {
    return (<h1>Cars page</h1>)
  }
}

class About extends Component {
  render() {
    return (<h1>About page</h1>)
  }
}

render (
  <Router>
    <Route path='/' component={Home}/>
    <Route path='/cars' component={Car}/>
    <Route path='/about' component={About}/>
  </Router>,
  document.getElementById('container')
)
