// import React from "react";

const Header = () => {
  return (
    <div className='container-1'>
       {/* <!-- navbar start --> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid text-white">
                <a className="navbar-brand text-white" href="#">LOGO</a>
                <a className="navbar-toggler gr" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown text-white">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Solutions
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>


                        <li className="nav-item dropdown text-white">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Features
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="Channel.html">Channels</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Enterprise</a>
                        </li>


                        <li className="nav-item dropdown text-white">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Pricing</a>
                        </li>

                    </ul>
                    <form className="d-flex gap-4">
                        <a className="btn btn-nav gr text-white" type="button">Talk to Us</a>
                        <a className="btn btn-nav gr  text-white" type="button">Create New Workspace</a>
                    </form>
                </div>
            </div>
        </nav>
        {/* <!-- navbar end --> */}
    </div>
  )
}

export default Header;
