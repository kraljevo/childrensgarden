import React from 'react'
import Nav from '../components/Nav.js'
import Waypoint from 'react-waypoint'
import HeaderPrograms from '../components/HeaderPrograms'
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

        <HeaderPrograms />

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

        <div id="main">
          <section id="content" className="main">
            <h2>Select a program to learn more.</h2>
            <Link to="/programs/primary" activeClassName="is-active">Primary Class</Link><br />
            <Link to="/programs/enrichment" activeClassName="is-active">Enrichment</Link><br />
            <Link to="/programs/summer" activeClassName="is-active">Summer Program</Link>
          </section>
        </div>

      </Layout>
    )
  }
}

export default Programs
