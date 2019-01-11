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
          <p className="logo">Localist</p>
          <div className="links">
            <p onClick={this.showHowItWorksSection}>How Does It Work?</p>
            <a href="#">Join</a> <a href="#">Log In</a> <a href="#" />
          </div>
          <div className="hamburger">
            <span />
            <span />
            <span />
          </div>
        </nav>

        <section className="main">
          <p className="welcome">
            Welcome to
            <br />
            <span>Localist</span>
          </p>
          <h3 className="main-caption">Full-stack Web Developer</h3>
          <button>Join the Family</button>
        </section>

        <section className="what-is">
          <h1 onClick={this.showWhatIsSection}>What is Localist?</h1>
          <div className="box-container">
            <div className="box">
              <img src="./Waterfall.jpg" />
              <p className="header">Experience Culture</p>
              <p className="body">
                Localist provides a unique platform to meet with locals anywhere on the planet so
                that travelers can get a richer experience and see their travel destinations up
                close and personal. Find the best street food, the local music scene, the best
                views, the hidden gems that only the locals would know about. Localist seeks to help
                you find a richer cultural experience.
              </p>
            </div>
            <div className="box">
              <img src="./meetpeoplesolotravel.jpeg" />
              <p className="header">Locals Can Hang Out With Travelers</p>
              <p className="body">
                Show off your town! Remember, those from other countries don't have the same context
                as you; your town might be cooler than you think, and it could be a great
                opportunity to hang out with someone from another country. The best part is, it's
                non-committal, so no one is obligated to do anything beyond the initial hang out.
                Meet up for lunch, a beer or for a 3-day hike. It's up to you.
              </p>
            </div>
            <div className="box">
              <img src="./GroupSitting.jpeg" />
              <p className="header">What Localist is Not</p>
              <p className="body">
                Localist is not a dating website or a platform for couch sharing, but hey, it's a
                free world! If you should choose to use it for such purposes, more power to you. We
                just want Localists on both sides to have the best cultural experience they can, and
                know that the level of commitment is completely up to you and other Localists.
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
