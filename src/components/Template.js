import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import axios from 'axios';

export default class Template extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
        }
    }


    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            if (res) {
                this.setState({
                    posts: res.data
                })
            }
        })
    }

    renderItem = () => {
        return this.state.posts.map((item) => {
            return (
                <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className="card h-100">
                        <div className="single-post post-style-1">

                            <Link to={{
                                pathname: "/posts/" + item.id
                            }} className="blog-image">
                                <img src="/images/500x333.png" alt="Blog" />
                            </Link>

                            <Link className="avatar" to="">
                                <img src="/images/500x500.png" alt="Profile" />
                            </Link>

                            <div className="blog-info">

                                <h4 className="title">
                                    <Link to={{
                                        pathname: "/posts/" + item.id
                                    }}>{item.title}</Link>
                                </h4>

                                <ul className="post-footer">
                                    <li><Link to=""><i className="ion-heart"></i>57</Link></li>
                                    <li><Link to=""><i className="ion-chatbubble"></i>6</Link></li>
                                    <li><Link to=""><i className="ion-eye"></i>138</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="blog-area section pt-5 pb-5">
                    <div className="container">

                        <div className="row">
                            {this.renderItem()}
                        </div>
                    </div>

                    <div className="text-center pb-5">
                        <Link className="load-more-btn" to=""><strong>LOAD MORE</strong></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
