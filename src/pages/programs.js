import React from 'react'
import Nav from '../components/Nav.js'
import Waypoint from 'react-waypoint'
import HeaderAlt from '../components/HeaderAlt'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Sidebar from '../components/Sidebar';
import NavMobile from '../components/NavMobile';
import Backdrop from '../components/Backdrop';

class Programs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
      sidebarState: 'closed'
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  _closeSidebar = () => {
    this.setState(() => ({ 
      sidebarState: 'closed'
    }))
  }
  
  _openSidebar = () => {
    this.setState(() => ({ 
      sidebarState: 'open'
    }))
  }

  render() {

    return (
      <Layout>

        <HeaderAlt />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>

        <NavMobile
          open={this._openSidebar}
        />

        <Sidebar status={this.state.sidebarState}/>

        <Backdrop
          close={this._closeSidebar}
          status={this.state.sidebarState}
        />

        <Nav sticky={this.state.stickyNav} />

        <div className="spotlight" id="main">
          <section id="content" className="main">
            <header className="major">
              <h2>Select a program to learn more</h2>
            </header>
            <ul className="actions">
              <li>
                <Link to="/programs/primary" className="button special">Primary Class</Link><br />
              </li>
              <li>
                <Link to="/programs/enrichment" className="button special">Enrichment</Link><br />
              </li>
              <li>
                <Link to="/programs/summer" className="button special">Summer Program</Link>
              </li>
            </ul>
          </section>
        </div>

      </Layout>
    )
  }
}

export default Programs
