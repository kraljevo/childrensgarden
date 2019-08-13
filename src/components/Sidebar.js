import React from 'react'
import { Link } from 'gatsby'

const Sidebar = (props) => (
    <nav className={props.status} id="sidebar">
        <ul>
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
                <Link>Programs <span className="down-arrow">▼</span></Link>
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
        </ul>
    </nav>
)

export default Sidebar
