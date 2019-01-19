import React, { Component } from 'react'
import './App.css'
import arrow from './white_arrow.png'

import { slide as Menu } from 'react-burger-menu'

class App extends Component {
  showSettings(event) {
    event.preventDefault()
  }

  showAboutMe = () => {
    let aboutMe = document.querySelector('.about-me')
    aboutMe.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  showPortfolio = () => {
    let portfolioSection = document.querySelector('.portfolio')
    portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  showTechSkills = () => {
    let technologies = document.querySelector('.technologies')
    technologies.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  showContactMe = () => {
    let contactMe = document.querySelector('.contact-me')
    contactMe.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
              <a id="about" className="menu-item" onClick={this.showAboutMe}>
                About Me
              </a>
              <a id="contact" className="menu-item" onClick={this.showPortfolio}>
                Portfolio
              </a>
              <a id="contact" className="menu-item" onClick={this.showTechSkills}>
                Tech Skills
              </a>
              <a
                id="contact"
                className="menu-item"
                href="https://github.com/TobiasNorton"
                target="_blank"
              >
                GitHub
              </a>
              <a
                id="contact"
                className="menu-item"
                href="https://www.linkedin.com/in/tobiasnorton"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                onClick={this.showSettings}
                className="menu-item--small"
                onClick={this.showContactMe}
              >
                Contact
              </a>
            </Menu>
            <p onClick={this.showAboutMe}>About Me</p>
            <p onClick={this.showPortfolio}>My Work</p>
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
          {/* <i class="fas fa-sort-down" /> */}
          <img src={arrow} className="arrow bounce" onClick={this.showAboutMe} />
        </section>

        <section className="about-me">
          {/* <div className="threshold" /> */}
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
            <div>
              <a href="http://tobiasnorton-favorite-artists.surge.sh/" target="_blank">
                <img src="./favorite-artists-2.jpg" className="thumbnail" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="./localist.jpg" className="thumbnail " />
              </a>
            </div>
            <div>
              <a href="http://hsl-color-picker.surge.sh/" target="_blank">
                <img src="./hsl-color-2.jpg" className="thumbnail" />
              </a>
            </div>
            <div>
              <a href="http://tobiasnorton-minesweeper.surge.sh/" target="_blank">
                <img src="./minesweeper.jpg" className="thumbnail" />
              </a>
            </div>
            <div>
              <a href="http://blackjack-tobiasnorton.surge.sh/" target="_blank">
                <img src="./blackjack.jpg" className="thumbnail" />
              </a>
            </div>
            <div>
              <a href="http://roshambo-tobiasnorton.surge.sh/" target="_blank">
                <img src="./roshambo.jpg" className="thumbnail" />
              </a>
            </div>
            <div>
              <a href="http://tobiasnorton-star-wars-characters.surge.sh/" target="_blank">
                <img src="./star-wars.jpg" className="thumbnail" />
              </a>
            </div>
            <div>
              {' '}
              <a href="http://tobiasnorton-made-in-1989.surge.sh/" target="_blank">
                <img src="./1989.jpg" className="thumbnail" />
              </a>
            </div>
          </div>
        </section>

        <section className="technologies">
          <div className="technology-header">Skills & Technologies</div>
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
        <section className="contact-me">
          <div className="contact-me-header">Contact Me</div>
          <div className="contact-line" />
          <div>
            <div className="contact-me-container">
              <div className="contact">
                <i class="fas fa-envelope" />
                {/* <p>Email</p> */}
                <p>tobiaswnorton@gmail.com</p>
              </div>
              {/* <div className="contact">
                <i class="fab fa-github" />
                <p>TobiasNorton</p>
              </div> */}
              <div className="contact">
                <a href="https://www.linkedin.com/in/tobiasnorton" target="_blank">
                  <i class="fab fa-linkedin" />
                </a>
                {/* <p>LinkedIn</p> */}
                <p>linkedin.com/in/tobiasnorton</p>
                <div />
              </div>
              <div className="contact">
                <i class="fas fa-phone" />
                {/* <p>Phone</p> */}
                <p>(941)-587-9667</p>
              </div>
            </div>
          </div>
        </section>
      </body>
    )
  }
}

export default App
