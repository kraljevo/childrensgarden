import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>The Children's Garden</h1>
        <p>A Montessori School</p>
    </header>
)

export default Header
