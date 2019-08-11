import React from 'react'
import Nav from '../../components/Nav.js'
import Waypoint from 'react-waypoint'
import HeaderPrograms from '../../components/HeaderPrograms'

import Layout from '../../components/layout'
import pic07 from '../../assets/images/pic07.jpg'
import pic09 from '../../assets/images/pic09.jpg'
import pic10 from '../../assets/images/pic10.jpg'
import pic11 from '../../assets/images/pic11.jpg'
import pic12 from '../../assets/images/pic12.jpg'
import pic13 from '../../assets/images/pic13.jpg'
import Sidebar from '../../components/Sidebar';
import NavMobile from '../../components/NavMobile';
import Backdrop from '../../components/Backdrop';

class Primary extends React.Component {
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
            <span className="image fit"><img src={pic07} alt="" /></span>
            <header className="major">
              <h2>Primary Class</h2>
            </header>
            <p>2 1/2 to 6 year olds</p>
            <p>The Montessori Classroom is a "living room" for children. Children choose their activities from open shelves with self-correcting materials.  The three year age range allows each child to progress at their own pace.  Over time, the class becomes a unified normalized community working with high concentration.  A natural "flow" is achieved which is rarely seen in young children.  These children become happy, helpful, motivated learners.</p>
            
            <header className="major">
              <h2>Curriculum Overview</h2>
            </header>
            <span className="image left"><img src={pic09} alt="" /></span>
            <h3>Practical Life</h3>
            <p>These lessons engage the child in everyday activities that the child is familiar with in her culture, which are typical of the care of the environment, care of one's self, and learning how people act with one another. The child may be offered a lesson on how to wash a table, how to button, or how to greet someone. All of these activities are an aid to the child's growth of independence and self control. Upon accomplishing a simple task, the child gains confidence, self-respect and dignity!</p>

            <span className="image left"><img src={pic10} alt="" /></span>
            <h3>Sensorial</h3>
            <p>Once the child has gained some coordination and self-control, he is shown the Sensorial equipment.  It is our duty as adults to expose the child to many different sights, sounds, smells, textures, and tastes, wherein his intellect will be built up.  Theh child is keenly aware of order and small detail at three years of age and we need to take advantage of these sensitive periods and allow the child to explore these materials so that his senses will become refined.</p>

            <span className="image left"><img src={pic11} alt="" /></span>
            <h3>Language</h3>
            <p>Language is the underlying factor in much of the work done in the Montessori class. Since communication is a fundamental need of man, it is the child who is building the language skills which will serve him the rest of his life. The teacher gives special attention to enriching the child's vocabulary daily through stories, poems, and naming objects and experiences. The children first trace sandpaper letters and learn the sounds of the letters. Then moves on to using a movable alphabet to form simple words. Soon the child begins to sound out those words and "explodes" into reading! This usually comes after the explosion into writing since the child has the natural ability to form the numbers and letters after tracing them and working on various other activities that have prepared him mentally and physically. Throughout the child's work in this area, the teacher works very hard at transmitting the magic and wonder of language to the children.</p>

            <span className="image left"><img src={pic12} alt="" /></span>
            <h3>Mathematics</h3>
            <p>Humans are endowed with a mathematical mind from the moment of birth, which allow us to think in mathematical terms. The actual preparation for math work in the classroom is done long before the math exercises are given. We lay the foundation for order, exactness, sequence, and working with the concentration through the lessons of Practical Life and Sensorial. Through the use of concrete materials, the child is led to explore one through ten, then the teens, as well as the decimal system. Later, the child will be ready to move on to more abstract concepts.</p>
            
            <span className="image left"><img src={pic13} alt="" /></span>
            <h3>Cultural Subjects</h3>
            <p>The cultural subjects, including art, music, history, geography, the natural and physical sciences, are seen as other ways for the child to express herself in the Montessori classroom. Stories are told and read of life in other parts of the world, classified picture materials are provided, music is played, and songs are sung. Clay, painting or drawing, collage, and other art media offer the children the choice of materials for their own expression in the area of art.</p>
          </section>
        </div>

      </Layout>
    )
  }
}

export default Primary
