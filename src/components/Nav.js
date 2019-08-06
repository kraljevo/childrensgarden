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
            <li>
                <a href="/programs">Programs</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
