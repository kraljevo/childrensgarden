import React from 'react'
import Nav from '../../components/Nav.js'
import Waypoint from 'react-waypoint'
import HeaderPrograms from '../../components/HeaderPrograms'

import Layout from '../../components/layout'
import pic08 from '../../assets/images/pic08.jpg'

class Enrichment extends React.Component {
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
            <span className="image fit"><img src={pic08} alt="" /></span>
            <h2>Enrichment</h2>
            <p>Before and after care hours are offered, but differ each year depending on the needs of our families. Please see Mrs. Harp with your requests.</p>
          </section>
        </div>

      </Layout>
    )
  }
}

export default Enrichment
