import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-main">
            <h1>
                <a href="">
                    <i className="fas fa-store"></i> E-SHOP
                </a>
            </h1>
            <ul>
                <li>
                    <a href="">Merchants</a>
                </li>
                <li>
                    <a href="">Register</a>
                </li>
                <li>
                    <a href="">Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

// const NavBar = () => {
//     return (
//         <nav className="navbar bg-main">
//             <h1>
//                 <Link to="">
//                     <i className="fas fa-store"></i> E-SHOP
//                 </Link>
//             </h1>
//             <ul>
//                 <li>
//                     <Link to="">Merchants</Link>
//                 </li>
//                 <li>
//                     <Link to="">Register</Link>
//                 </li>
//                 <li>
//                     <Link to="">Login</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// };
