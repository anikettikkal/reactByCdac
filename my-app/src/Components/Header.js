import React from "react";
import { NavLink, Link } from "react-router";

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Login</Link>

                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/adduser">Add User</Link></li>
                                    <li><Link class="dropdown-item" to="/showuser">Show User</Link></li>
                                    <li><Link class="dropdown-item" to="/product">Products</Link></li>
                                    <li><Link class="dropdown-item" to="/comp1">Comp1</Link></li>
                                    <li><Link class="dropdown-item" to="/comp2">Comp2</Link></li>
                                    <li><Link class="dropdown-item" to="/comp3">Comp3</Link></li>
                                    <li><Link class="dropdown-item" to="/trending">Trending</Link></li>
                                    <li><Link class="dropdown-item" to="/upcoming">Upcoming</Link></li>
                                    <li><Link class="dropdown-item" to="/toprated">Top Rated</Link></li>
                                    <li><Link class="dropdown-item" to="/comp4">Comp4</Link></li>

                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/pagenotfound">Page Not Found</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;