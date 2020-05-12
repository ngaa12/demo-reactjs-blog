import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container-fluid position-relative no-side-padding">

                        <Link to="/home" className="logo"><img src="/images/logo.png" alt="Logo" /></Link>

                        <div className="menu-nav-icon" data-nav-menu="#main-menu"><i className="ion-navicon"></i></div>

                        <ul className="main-menu visible-on-click" id="main-menu">
                            <li><Link to="/home">Home</Link></li>
                        </ul>

                        <div className="src-area">
                            <form>
                                <button className="src-btn" type="submit"><i className="ion-ios-search-strong"></i></button>
                                <input className="src-input" type="text" placeholder="Type of search" />
                            </form>
                        </div>

                    </div>
                </div>

                <div className="slider"></div>

            </div>
        )
    }
}
