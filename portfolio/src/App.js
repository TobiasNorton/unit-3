import React, { Component } from 'react'
import './App.css'
import arrow from './014-CaretDown-512.png'

import { slide as Menu } from 'react-burger-menu'

class App extends Component {
  showSettings(event) {
    event.preventDefault()
  }

  showMyWorkSection = () => {
    let myWorkSection = document.querySelector('.my-work')
    myWorkSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  showHowItWorksSection = () => {
    let howItWorksSection = document.querySelector('.how-it-works')
    howItWorksSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render() {
    return (
      <body>
        <nav className="nav-bar">
          <div className="logo">TOBIAS NORTON</div>

          <div className="links">
            <Menu right className="react-burger">
              <a id="home" className="menu-item" href="/">
                Home
              </a>
              <a id="about" className="menu-item" href="/about">
                About Me
              </a>
              <a id="contact" className="menu-item" href="/contact">
                My Work
              </a>
              <a id="contact" className="menu-item" href="/contact">
                GitHub
              </a>
              <a id="contact" className="menu-item" href="/contact">
                LinkedIn
              </a>
              <a onClick={this.showSettings} className="menu-item--small" href="">
                Contact
              </a>
            </Menu>
            <p>About Me</p>
            <p onClick={this.showMyWorkSection}>My Work</p>
            <a href="https://github.com/TobiasNorton" target="_blank">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/tobiasnorton" target="_blank">
              LinkedIn
            </a>
          </div>
          {/* <div className="hamburger">
            <span />
            <span />
            <span />
          </div> */}
        </nav>

        <section className="main">
          {/* <p className="welcome">
            Welcome to
            <br />
            <span>Localist</span>
          </p> */}
          <p className="title">TOBIAS NORTON</p>
          <div className="sexy-line" />
          <p className="caption">Full-stack Web Developer</p>
          {/* <button>Join the Family</button> */}
          {/* <div className="scroll-tab" /> */}
          {/* <img src={arrow} className="arrow" /> */}
          <i class="fas fa-sort-down" />
        </section>

        <section className="about-me">
          <div className="threshold" />
          <div className="about-me-header">About Me</div>
          <div className="about-me-line" />
          <img src="./711.jpg" className="portrait" />
          <p>
            Hi, I'm Toby. I am a software developer from St. Petersburg, Florida. I graduated from
            the Savannah College of Art and Design with a BFA in Illustration and did freelance work
            for roughly 8 years. In recent years I discovered my passion for coding and made the
            life-changing decision to attend the program at Suncoast Developers Guild, a 12-week
            fully-immersive coding bootcamp with emphasis on both the front and back-ends. When I'm
            not coding you can find me behind my guitar, working on my art or practicing Kung Fu.
          </p>
        </section>

        <section className="portfolio">
          <div className="portfolio-header">Portfolio</div>
          <div className="about-me-line" />
          <div className="thumbnail-container">
            <img src="./localist.jpg" className="portfolio-image" />
            <img src="./favorite-artists-2.jpg" className="portfolio-image" />
            <img src="./hsl-color-2.jpg" className="portfolio-image" />
            <img src="./minesweeper.jpg" className="portfolio-image" />
            <img src="./blackjack.jpg" className="portfolio-image" />
            <img src="./roshambo.jpg" className="portfolio-image" />
            <img src="./star-wars.jpg" className="portfolio-image" />
            <img src="./1989.jpg" className="portfolio-image" />
          </div>
        </section>

        <section className="technologies">
          <div className="technology-header">Technologies</div>
          <div className="tech-line" />
          <div className="tech-container">
            <div className="tech">
              <i class="fas fa-4x fa-gem text-primary mb-3 sr-icon-1" />
              <p className="tech-caption">Ruby</p>
            </div>
            {/* <div className="tech">
              <p className="rails-caption">Rails</p>
            </div> */}
            <div className="tech">
              <i class="fab fa-react" />
              <p className="tech-caption">React.js</p>
            </div>
            <div className="tech">
              <i class="fab fa-js-square" />
              <p className="tech-caption">JavaScript</p>
            </div>
            <div className="tech">
              <i class="fab fa-css3-alt" />
              <p className="tech-caption">CSS3</p>
            </div>
            <div className="tech">
              <i class="fab fa-html5" />
              <p className="tech-caption">HTML5</p>
            </div>
            {/* <div className="tech">
              <i class="fab fa-html5" />
              <p className="tech-caption">HTML5</p>
            </div> */}
            {/* <div className="tech">
              <i class="fab fa-adobe" />
              <p className="tech-caption">Adobe</p>
            </div> */}
          </div>
        </section>

        {/* <section className="my-work">
          <h1 onClick={this.showMyWorkSection}>See My Work</h1>
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
        </section> */}

        {/* <section className="how-it-works">
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
        </section> */}
      </body>
    )
  }
}

export default App
