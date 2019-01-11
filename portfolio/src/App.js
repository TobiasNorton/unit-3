import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  showWhatIsSection = () => {
    let whatIsLocalistSection = document.querySelector('.what-is')
    whatIsLocalistSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  showHowItWorksSection = () => {
    let howItWorksSection = document.querySelector('.how-it-works')
    howItWorksSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render() {
    return (
      <body>
        <nav className="nav-bar">
          <p className="logo">Tobias Norton</p>
          <div className="links">
            <p onClick={this.showHowItWorksSection}>Selected Works</p>
            <a href="#">Github</a> <a href="#">LinkedIn</a> <a href="#" />
          </div>
          <div className="hamburger">
            <span />
            <span />
            <span />
          </div>
        </nav>

        <section className="main">
          {/* <p className="welcome">
            Welcome to
            <br />
            <span>Localist</span>
          </p> */}
          <p className="title">TOBIAS NORTON</p>
          <p className="welcome">Full-stack Web Developer</p>
          {/* <button>Join the Family</button> */}
        </section>

        <section className="what-is">
          <h1 onClick={this.showWhatIsSection}>What is Localist?</h1>
          <div className="box-container">
            <div className="box">
              <img src="./ColorPicker.gif" />
              <p className="header">HSL Color Picker</p>
              <p className="body">
                This is an HSL (hue, saturation, light) color picker for CSS. It generates a random
                color upon the click of a button and custom colors when the user drags the sliders.
                It also displays and updates a CSS color code so that users may copy it for use in
                their own projects. It responds to user events and uses state in React to drive
                changes to the user interface.
              </p>
            </div>
            <div className="box">
              <img src="./Minesweeper.gif" />
              <p className="header">Minesweeper</p>
              <p className="body">
                Users can choose their difficulty and play the classic Minesweeper game. Left
                clicking or right clicking will check or flag a cell, respectively. Checking a mine
                will result in a game over. Working with an API, the Axios library is used to POST
                requests. The state is then updated and changes are passed down to React components
                and the user interface updates.
              </p>
            </div>
            <div className="box">
              <img src="./Blackjack.gif" />
              <p className="header">Blackjack</p>
              <p className="body">
                Blackjack! The player with the highest card sum wins. More then 21 results in a
                loss, and equal to 21 results in an automatic win (Blackjack). When the player hits
                the stay button, the dealer must draw until their cards total at least 17. From here
                the dealer will either lose by going over 21, win with a high score or win with a
                Blackjack. Built entirely with core JavaScript and no frameworks. It was assigned as
                an exercise for using conditional logic to update DOM elements. I'm happy to say
                that the instructor liked my CSS and code enough that he later used my project as a
                template to demonstrate for the class how to implement React.js and a playing cards
                API.
              </p>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <h1 onClick={this.showHowItWorksSection}>How Does It Work?</h1>
          <div className="box-container">
            <div className="box">
              <p className="header">Create an Account</p>
              <p className="body">
                You will be prompted to register with Localist through either Facebook or Google for
                authentication purposes. From there you will create a profile. After filling out the
                necessary information, you can add dates and destinations of trips you'll be taking,
                and Localist will take it from there.
              </p>
            </div>
            <div className="box">
              <p className="header">Browse Locals</p>
              <p className="body">
                Based on your travel information, you will be provided with a list of locals that
                live in the cities you will be traveling to. You may view their profiles or request
                to link with them. You may also receive requests from incoming travelers that are
                planning to visit your town, at which point you may view their profile. You may
                accept or decline any link request.
              </p>
            </div>
            <div className="box">
              <p className="header">Set Up a Time and Place to Meet</p>
              <p className="body">
                Once you are linked with someone, your contact information will become visible to
                them and theirs will be visible to you. From here it's up to you two to decide how
                and when to meet and what activities are in store!
              </p>
            </div>
          </div>
        </section>
      </body>
    )
  }
}

export default App
