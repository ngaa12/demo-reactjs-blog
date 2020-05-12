import React, { Component } from 'react';
import Comments from './Comments';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import axios from 'axios';

export default class SinglePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: [],
        }
    }

    componentDidMount = async () => {
        const { match } = this.props;
        await axios.get('https://jsonplaceholder.typicode.com/posts/' + match.params.id).then((res) => {
            if (res) {
                this.setState({
                    item: res.data
                })
            }
        });
    }

    render() {
        const { item } = this.state;
        return (
            <div>
                <Header />
                <div className="post-area section">
                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-12 no-right-padding">
                                <div className="main-post">
                                    <div className="blog-post-inner">
                                        <div className="post-info">

                                            <div className="left-area">
                                                <Link className="avatar" to="">
                                                    <img src="/images/avt.jpg" alt="Profile" />
                                                </Link>
                                            </div>

                                            <div className="middle-area">
                                                <Link className="name" to=""><strong>Katy Liu</strong></Link>
                                                <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                            </div>

                                        </div>

                                        <h3 className="title">
                                            <Link to=""><strong>{item.title}</strong></Link>
                                        </h3>

                                        <p className="para">{item.body}</p>

                                        <ul className="tags">
                                            <li><Link to="">Mnual</Link></li>
                                            <li><Link to="">Liberty</Link></li>
                                            <li><Link to="">Recommendation</Link></li>
                                            <li><Link to="">Inspiration</Link></li>
                                        </ul>
                                    </div>

                                    <div className="post-icons-area">
                                        <ul className="post-icons">
                                            <li><Link to=""><i className="ion-heart"></i>57</Link></li>
                                            <li><Link to=""><i className="ion-chatbubble"></i>6</Link></li>
                                            <li><Link to=""><i className="ion-eye"></i>138</Link></li>
                                        </ul>

                                        <ul className="icons">
                                            <li>SHARE : </li>
                                            <li><Link to=""><i className="ion-social-facebook"></i></Link></li>
                                            <li><Link to=""><i className="ion-social-twitter"></i></Link></li>
                                            <li><Link to=""><i className="ion-social-pinterest"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Comments />
                </div>
                <Footer />
            </div>
        )
    }
}
