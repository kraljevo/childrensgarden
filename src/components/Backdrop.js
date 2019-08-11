import React from 'react'

const Backdrop = (props) => (
    <div id="backdrop" className={props.status} onClick={props.close}></div>
)

export default Backdrop
