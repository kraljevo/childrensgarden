import React from 'react'
import Nav from '../components/Nav.js'
import Waypoint from 'react-waypoint'
import HeaderPrograms from '../components/HeaderPrograms'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class Programs extends React.Component {
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

        <HeaderPrograms />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        

        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="content" className="main">
            <h2>Select a program to learn more.</h2>
            <Link to="/programs/primary" activeClassName="is-active">Primary Class</Link><br />
            <Link to="/programs/encrichment" activeClassName="is-active">Enrichment</Link><br />
            <Link to="/programs/summer" activeClassName="is-active">Summer Program</Link>
          </section>
        </div>

      </Layout>
    )
  }
}

export default Programs
