import React from 'react'
import Nav from '../components/Nav.js'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import HeaderAlt from '../components/HeaderAlt'
import pic02 from '../assets/images/pic02.jpg'
import Sidebar from '../components/Sidebar';
import NavMobile from '../components/NavMobile';
import Backdrop from '../components/Backdrop';

class Admissions extends React.Component {
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
              <h2>Admissions</h2>
            </header>
            <span className="image right"><img src={pic02} alt="" /></span>
            <p>To learn more about the admission process, please contact Janice Harp at <a href="tel: 765-452-1152">(765) 452-1152</a> or via email at <a href="mailto: teacherjan@tcg-kokomo.org">teacherjan@tcg-kokomo.org</a>. She will be happy to take you on a tour of the school, answer any of your questions, and put you in contact with other families in the Children's Garden Montessori School.</p>
            <h2>Steps to Enrollment</h2>
            <ul>
              <li>Set up a tour</li>
              <li>Observe a class</li>
              <li>Turn in an application</li>
              <li>Parent/child interview</li>
              <li>Turn in an enrollment form</li>
            </ul>
          </section>
        </div>

      </Layout>
    )
  }
}

export default Admissions
