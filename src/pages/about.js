import React from 'react'
import Nav from '../components/Nav.js'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import HeaderAbout from '../components/HeaderAbout'
import pic02 from '../assets/images/pic02.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic05 from '../assets/images/pic05.jpg'
import Sidebar from '../components/Sidebar';
import NavMobile from '../components/NavMobile';
import Backdrop from '../components/Backdrop';

class About extends React.Component {
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
        <HeaderAbout />
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
            <span className="image left"><img src={pic02} alt="" /></span>
            <p>Established in 1998, The Children's Garden seeks to follow the discoveries of Dr. Maria Montessori. Raymin and Janice Harp founded the school with the assistance of a group of caring families who were dedicated to an authentic implementation of the Montessori education.  T.C.G. is registered with the state of Indiana as a non-public school.</p>
            <p>The Children's Garden is situated on a private, one acre lot in a park-like setting.  Children are able to enjoy the outdoors to its fullest in a safe environment.</p>
            <span className="image fit"><img src={pic05} alt="" /></span>
            <span className="image fit"><img src={pic06} alt="" /></span>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
