import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-section">

                                <Link className="logo" to=""><img src="/images/logo.png" alt="Logo" /></Link>
                                <p className="copyright">Bona @ 2017. All rights reserved.</p>
                                <p className="copyright">Designed by <Link to="https://colorlib.com" target="_blank">Colorlib</Link></p>
                                <ul className="icons">
                                    <li><Link to=""><i className="ion-social-facebook-outline"></i></Link></li>
                                    <li><Link to=""><i className="ion-social-twitter-outline"></i></Link></li>
                                    <li><Link to=""><i className="ion-social-instagram-outline"></i></Link></li>
                                    <li><Link to=""><i className="ion-social-vimeo-outline"></i></Link></li>
                                    <li><Link to=""><i className="ion-social-pinterest-outline"></i></Link></li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-section">
                                <h4 className="title"><b>CATAGORIES</b></h4>
                                <ul>
                                    <li><Link to="">BEAUTY</Link></li>
                                    <li><Link to="">HEALTH</Link></li>
                                    <li><Link to="">MUSIC</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="">SPORT</Link></li>
                                    <li><Link to="">DESIGN</Link></li>
                                    <li><Link to="">TRAVEL</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-section">

                                <h4 className="title"><b>SUBSCRIBE</b></h4>
                                <div className="input-area">
                                    <form>
                                        <input className="email-input" type="text" placeholder="Enter your email" />
                                        <button className="submit-btn" type="submit"><i className="icon ion-ios-email-outline"></i></button>
                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
