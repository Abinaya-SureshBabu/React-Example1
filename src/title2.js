import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
function Title2(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <h3 className="navbar-brand" style={{ color: "white" }}><strong>ClientPanel</strong></h3>
            {props.authenticated.authentication ?<Link className="nav-link text-white" to="/dashboard" >Dashboard</Link> :''}
            {
                props.authenticated.authentication ? <ul className="navbar-nav  ml-auto text-white ">
                    <li className="nav-item"><Link className="nav-link" style={{ color: "white" }}>{props.user}</Link></li>
                    <li className="nav-item"><Link to="/settings" style={{ color: "white" }} className="nav-link">Settings</Link></li>
                    <li className="nav-item"><Link style={{ color: "white" }} className="nav-link" onClick={() => { props.dispatch({ type: "LOGOUT" }) }}><a>Logout</a></Link></li>
                </ul>
                    :
                    <ul className="navbar-nav  ml-auto text-white ">
                        <li className="nav-item"><Link to="/" style={{ color: "white" }} className="nav-link">Login</Link></li>
                        <li className="nav-item "><Link to="/register" style={{ color: "white" }} className="nav-link">Register</Link></li>
                    </ul>
            }
        </nav>
    );
}
const mapStateToProps = (state) => {
    console.log(state.user)
    return {
        logstate: state.log,
        authenticated: state.auth,
        user: state.user,
    };
}
export default connect(mapStateToProps)(Title2);





