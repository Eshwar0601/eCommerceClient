import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
const NavBar = ({ auth: { isAuthenticated }, logout }) => {
    const user = (
        <ul>
            <li>
                <Link to="/register?role=merchant">Merchants</Link>
            </li>
            <li>
                <Link onClick={logout} to="#!">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hide-on-mobile"> Logout </span>
                </Link>
            </li>
        </ul>
    );
    const guest = (
        <ul>
            <li>
                <Link to="/register?role=merchant">Merchants</Link>
            </li>
            <li>
                <Link to="/register?role=customer">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    );
    return (
        <nav className="main-navbar bg-main">
            <h1>
                <Link to="">
                    <i className="fas fa-store"></i> E-SHOP
                </Link>
            </h1>
            {isAuthenticated ? user : guest}
        </nav>
    );
};
const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect(mapStateToProps, { logout })(NavBar);
