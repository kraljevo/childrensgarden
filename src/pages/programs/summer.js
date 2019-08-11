import React from 'react'
import Nav from '../../components/Nav.js'
import Waypoint from 'react-waypoint'
import HeaderPrograms from '../../components/HeaderPrograms'

import Layout from '../../components/layout'
import pic03 from '../../assets/images/pic03.jpg'
import Sidebar from '../../components/Sidebar';
import NavMobile from '../../components/NavMobile';
import Backdrop from '../../components/Backdrop';

class Summer extends React.Component {
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
            <span className="image fit"><img src={pic03} alt="" /></span>
            <h2>Summer Program</h2>
            <p>Join us at The Children's Garden Montessori School for summer camps that will encourage your child to explore, create, problem solve, and just have good old plain fun!</p>
            <p>Each theme-filled week will include activities such as crafts, songs, games, stories and active participation.</p>
            <p>Your three to eight year old children will have a blast when they join our campers this summer.  Sign up for half days, full days, or a combination!</p>
            <h3>Call the office at <a href="tel: 765-452-1152">(765) 452-1152</a> for more information.</h3>
          </section>
        </div>

      </Layout>
    )
  }
}

export default Summer
