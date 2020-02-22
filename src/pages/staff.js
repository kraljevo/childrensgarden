import React from 'react'
import Nav from '../components/Nav.js'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import HeaderAlt from '../components/HeaderAlt'
import pic02 from '../assets/images/pic02.jpg'
import Sidebar from '../components/Sidebar';
import NavMobile from '../components/NavMobile';
import Backdrop from '../components/Backdrop';

class Staff extends React.Component {
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
              <h2>Meet Our Staff</h2>
            </header>
            <span className="image left"><img src={pic02} alt="Janice L. Harp" /></span>
            <h2>Janice L. Harp</h2>
            <p>Janice L. Harp received Montessori training and certification through the Association Montessori Internationale (AMI). Since 1985, Mrs. Harp has directed classes in Georgia, Michigan and Indiana at AMI recognized schools. She is dedicated to creating an atmosphere of calm, order and joy while striving to meet the developmental needs of each child in her class. Mrs. Harp serves as administrator and primary class teacher of the school. She lives in Kokomo with her husband Ray.</p>
            <span className="image left"><img src={pic02} alt="Tammy Thompson" /></span>
            <h2>Tammy Thompson</h2>
            <p>Tammy Thompson joined the school in 2016 as our classroom assistant.  She assists Mrs. Harp with the children, makes materials, has office duties and also directs the older children in a gym class each week. In the fall of 2019, Mrs. Thompson began working with the toddlers in their specialized environment.  Tammy lives in Kokomo with her family of five.</p>
          </section>
        </div>

      </Layout>
    )
  }
}

export default Staff
