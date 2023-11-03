import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <nav className="navbar bg-dark navbar-dark navbar-expand-lg">
                <div className="container-fluid">
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Header