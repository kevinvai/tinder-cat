import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import './TinderNav.style.css'

const TinderContainer = (props) => {
    const curPath = props.location.pathname;
    return(
        <div className="tindercontainer-container">
            <Link to="/" className={curPath === '/' ? 'active' : 'inactive'}>Home</Link>
            <Link to="/favs" className={curPath === '/favs' ? 'active' : 'inactive'}>Favs</Link>
        </div>
    )
}
export default withRouter(TinderContainer);