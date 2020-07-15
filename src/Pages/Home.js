import React, { Component } from 'react';

import blockCover from '../assets/images/hero_1.jpg';
import women from '../assets/images/women.jpg';
import children from '../assets/images/children.jpg';
import men from '../assets/images/men.jpg';

import cloth_1 from '../assets/images/cloth_1.jpg';
import shoe_1 from '../assets/images/shoe_1.jpg';
import cloth_2 from '../assets/images/cloth_2.jpg';
import cloth_3 from '../assets/images/cloth_3.jpg';
import blog_1 from '../assets/images/blog_1.jpg';

import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="site-wrap">

                <div className="site-blocks-cover" style={{ backgroundImage: `url(${blockCover})` }} data-aos="fade">
                    <div className="container">
                        <div className="row align-items-start align-items-md-center justify-content-end">
                            <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                                <h1 className="mb-2">Finding Your Perfect Shoes</h1>
                                <div className="intro-text text-center text-md-left">
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
                                    <p>
                                        <Link to='/shop'><div href="#" className="btn btn-sm btn-primary">Shop Now</div></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section site-section-sm site-blocks-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
                                <div className="icon mr-4 align-self-start">
                                    <span className="icon-truck"></span>
                                </div>
                                <div className="text">
                                    <h2 className="text-uppercase">Free Shipping</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon mr-4 align-self-start">
                                    <span className="icon-refresh2"></span>
                                </div>
                                <div className="text">
                                    <h2 className="text-uppercase">Free Returns</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon mr-4 align-self-start">
                                    <span className="icon-help"></span>
                                </div>
                                <div className="text">
                                    <h2 className="text-uppercase">Customer Support</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section site-blocks-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
                                <a className="block-2-item" href="#">
                                    <figure className="image">
                                        <img src={women} alt="" className="img-fluid" />
                                    </figure>
                                    <div className="text">
                                        <span className="text-uppercase">Collections</span>
                                        <h3>Women</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                                <a className="block-2-item" href="#">
                                    <figure className="image">
                                        <img src={children} alt="" className="img-fluid" />
                                    </figure>
                                    <div className="text">
                                        <span className="text-uppercase">Collections</span>
                                        <h3>Children</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
                                <a className="block-2-item" href="#">
                                    <figure className="image">
                                        <img src={men} alt="" className="img-fluid" />
                                    </figure>
                                    <div className="text">
                                        <span className="text-uppercase">Collections</span>
                                        <h3>Men</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section block-3 site-blocks-2 bg-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 site-section-heading text-center pt-4">
                                <h2>Featured Products</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="nonloop-block-3 owl-carousel">
                                    <div className="item">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img src={cloth_1} alt="Image placeholder" className="img-fluid" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><Link to='/shop'><div href="#">Tank Top</div></Link></h3>
                                                <p className="mb-0">Finding perfect t-shirt</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img src={shoe_1} alt="Image placeholder" className="img-fluid" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><Link to='/shop'><div href="#">Corater</div></Link></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img src={cloth_2} alt="Image placeholder" className="img-fluid" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><Link to='/shop'><div href="#">Polo Shirt</div></Link></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img src={cloth_3} alt="Image placeholder" className="img-fluid" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><Link to='/shop'><div href="#">T-Shirt Mockup</div></Link></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img src={shoe_1} alt="Image placeholder" className="img-fluid" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><Link to='/shop'><div href="#">Corater</div></Link></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section block-8">
                    <div className="container">
                        <div className="row justify-content-center  mb-5">
                            <div className="col-md-7 site-section-heading text-center pt-4">
                                <h2>Big Sale!</h2>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-7 mb-5">
                                <a href="#"><img src={blog_1} alt="Image placeholder" className="img-fluid rounded" /></a>
                            </div>
                            <div className="col-md-12 col-lg-5 text-center pl-md-5">
                                <h2><a href="#">50% less in all items</a></h2>
                                <p className="post-meta mb-4">By <a href="#">Carl Smith</a> <span className="block-8-sep">&bullet;</span> September 3, 2018</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                                <p><Link to='/shop'><div className="btn btn-primary btn-sm">Shop Now</div></Link></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;