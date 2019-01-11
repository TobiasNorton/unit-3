import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { slide as Menu } from 'react-burger-menu'

class App extends Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <Menu right>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
      </div>
    )
  }
}

export default App
