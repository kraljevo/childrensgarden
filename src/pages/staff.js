import React from 'react'
import Nav from '../components/Nav.js'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import HeaderStaff from '../components/HeaderStaff'
import pic02 from '../assets/images/pic02.jpg'

class Staff extends React.Component {
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

        <HeaderStaff />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="content" className="main">
            <span className="image left"><img src={pic02} alt="" /></span>
            <p>Janice L. Harp received Montessori training and certification through the Association Montessori Internationale (AMI). Since 1985, Mrs. Harp has directed classes in Georgia, Michigan and Indiana at AMI recognized schools. She is dedicated to creating an atmosphere of calm, order and joy while striving to meet the developmental needs of each child in her class. Mrs. Harp serves as administrator and primary class teacher of the school. She lives in Kokomo with her husband Ray.</p>
            <div>
            </div>
          </section>
        </div>
        
      </Layout>
    )
  }
}

export default Staff
