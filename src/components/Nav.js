import React from 'react'
import Scrollspy from 'react-scrollspy'
import { Link } from 'gatsby'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } offset={-300}>
            <li>
                <Link to="/" activeClassName="is-active">Home</Link>
            </li>
            <li>
                <Link to="/about" activeClassName="is-active">About</Link>
            </li>
            <li>
                <Link to="/staff" activeClassName="is-active">Staff</Link>
            </li>
            <li className="dropdown">
                <Link to="/programs" activeClassName="is-active" partiallyActive={true}>Programs</Link>
                <div class="dropdown-content">
                    <Link to="/programs/primary" activeClassName="is-active">Primary Class</Link>
                    <Link to="/programs/enrichment" activeClassName="is-active">Enrichment</Link>
                    <Link to="/programs/summer" activeClassName="is-active">Summer Program</Link>
                </div>
            </li>
            <li>
                <Link to="/admissions" activeClassName="is-active">Admissions</Link>
            </li>
            <li>
                <Link to="/contact" activeClassName="is-active">Contact</Link>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
