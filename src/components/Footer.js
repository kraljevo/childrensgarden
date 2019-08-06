import React from 'react'
import { Link } from 'gatsby'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <p>You are welcome to tour our school by appointment.</p>
            <p>We welcome students of any race, gender, religion, nationality or ethnic origin.</p>
            <ul className="actions">
                <li><Link to="/about" className="button">Learn More</Link></li>
            </ul>
        </section>
        <section>
            <h2>Contact</h2>
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
        <p className="copyright">&copy; The Children's Garden. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
