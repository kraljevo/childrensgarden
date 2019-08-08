import React from 'react'
import Scrollspy from 'react-scrollspy'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/staff">Staff</a>
            </li>
            <li className="dropdown">
                <a href="/programs">Programs</a>
                <div class="dropdown-content">
                    <a href="/primary">Primary Class</a>
                    <a href="/encrichment">Enrichment</a>
                    <a href="/summer">Summer Program</a>
                </div>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
