import React from 'react'

const NavMobile = (props) => (
    <div id="nav-mobile">
        <div id="burger-container" onClick={props.open}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
        </div>
    </div>
)

export default NavMobile
