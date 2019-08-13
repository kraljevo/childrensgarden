import React from 'react'
import Nav from '../components/Nav.js'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import HeaderAlt from '../components/HeaderAlt'
import pic04 from '../assets/images/pic04.jpg'
import Sidebar from '../components/Sidebar';
import NavMobile from '../components/NavMobile';
import Backdrop from '../components/Backdrop';

class Contact extends React.Component {
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

        <div id="main">
          <section id="content" className="main">
            <header className="major">
              <h2>Contact Us</h2>
            </header>
            <span className="image right"><img src={pic04} alt="" /></span>
            <p>We are located on the Northwest side of Kokomo Indiana. To view a map, click on our address. We look forward to hearing from you.</p>
            <dl className="alt">
                <dt>Address</dt>
                <dd><a href="https://www.google.com/maps/place/1206+S+Dixon+Rd,+Kokomo,+IN+46902/@40.4723507,-86.1658597,17z/data=!3m1!4b1!4m5!3m4!1s0x881484125e472649:0xf4c12bf7c5bf1809!8m2!3d40.4723466!4d-86.163671">1206 South Dixon Road &bull; Kokomo, IN 46902</a></dd>
                <dt>Phone</dt>
                <dd><a href="tel: 765-452-1152">(765) 452-1152</a></dd>
                <dt>Email</dt>
                <dd><a href="mailto: teacherjan@tcg-kokomo.org">teacherjan@tcg-kokomo.org</a></dd>
            </dl>
            <ul className="icons">
                <li>Find us on Facebook</li>
                <li><a href="https://www.facebook.com/tcgkokomo/" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
            </ul>
          </section>
        </div>

      </Layout>
    )
  }
}

export default Contact
