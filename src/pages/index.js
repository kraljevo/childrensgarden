import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="The Children's Garden" />

        <Header />
        
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>

        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Welcome to the Children's Garden Montessori School</h2>
                </header>
                <p>Children of mixed ages and abilities work together in a Montessori class. Each child is treated as an individual, and is offered lessons that build on their interests, and fit their developmental needs.</p>
                <ul className="actions">
                  <li><Link to="/about" className="button special">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>The Montessori Approach</h2>
            </header>
            <p>Our approach is <em>child-centered</em>. We believe that every child is a unique individual and should have the opportunity to reach his or her potential. We want to cultivate the child's natural abilities to learn through building self-esteem, providing opportunities for social interaction, and the foundation for peaceful relationships.</p>
            <p>Children are welcome to join the primary class at around age two-and-one-half, and continue through kindergarten.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/about" className="button special">Learn More</Link></li>
              </ul>
            </footer>
          </section>
        </div>

      </Layout>
    )
  }
}

export default Index
