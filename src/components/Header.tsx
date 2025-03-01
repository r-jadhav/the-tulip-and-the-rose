import React from 'react';
import logo from '../assets/logo/logo1.png';


const Header: React.FC = () => {
    return (
        <>
            <div className='main-header'>
                {/* top-bar */}
                <div className="tf-top-bar">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="wrap-top">
                                    <ul className="list-info">
                                        <li>Email :<a href="mailto:thetulipandtherose@gmail.com"> thetulipandtherose@gmail.com </a> </li>
                                        {/* <li>
                                        <i className="icon-clock2"></i>
                                        Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                    </li> */}
                                    </ul>
                                    <ul className="list-sosial">
                                        <p>Follow us : </p>
                                        <li><i className="icon-instagram2"></i></li>
                                        <li><i className="icon-facebook"></i></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* top-bar  */}

                <header id="header-main" className="header header-fixed style-absolute">
                    <div className="header-inner">
                        <div className="tf-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="header-inner-wrap">
                                        <div className="header-logo">
                                            <a href="#" className="site-logo">
                                                <img id="logo_header" alt="" src={logo}
                                                    data-retina={logo} />
                                            </a>
                                        </div>
                                        <div className="header-left">

                                            <nav className="main-menu">
                                                <ul className="navigation">
                                                    <li><a href="#">Weekday Brunch</a>
                                                    </li>
                                                    {/* <li><a href="#">PAGES</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="#">ABOUT US</a></li>
                                                        <li><a href="#">OUR MENU</a></li>
                                                        <li><a href="history.html">HISTORY</a></li>
                                                        <li><a href="our-team.html">OUR BAKERY TEAM</a></li>
                                                        <li><a href="404.html">404 PAGE</a></li>
                                                    </ul>
                                                </li> */}
                                                    <li><a href="#">Weekend Brunch</a></li>
                                                    <li><a href="#">Dinner Menu</a></li>
                                                    <li><a href="#">Catering & Private Events</a></li>
                                                    <li><a href="#">Our Story</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="header-right">
                                            <div className="wrap-header-icons">
                                                {/* <div className="header-search">
                                                <a className="show-search" href="#"><i className="icon-search1"></i></a>
                                                <div className="top-search">
                                                    <form className="form-search">
                                                        <fieldset>
                                                            <input type="search" placeholder="Search..." className=""
                                                                name="search" tabIndex={2} value="" aria-required={true}
                                                                required={true} />
                                                        </fieldset>
                                                        <div className="button-submit">
                                                            <button type="submit">
                                                                <i className="icon-search1"></i>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div> 
                                            <div className="header-cart">
                                                <a className="show-cart" href="#"><i className="icon-shopping-cart1"></i></a>
                                                <div className="bag-box">
                                                    <div className="cart-item">
                                                        <div className="wrap-image">
                                                            <img src="images/shop/bread-6.png" alt="bread" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="price">$2.15</div>
                                                            <h6 className="name"><a href="shop-detail.html">BUN HAMBUGER</a>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="cart-item">
                                                        <div className="wrap-image">
                                                            <img src="images/shop/bread-5.png" alt="bread" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="price">$5.54</div>
                                                            <h6 className="name"><a href="shop-detail.html">BREAD WITH MEAT</a>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="cart-item">
                                                        <div className="wrap-image">
                                                            <img src="images/shop/bread-9.png" alt="bread" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="price"><span>$2.99</span>$1.59</div>
                                                            <h6 className="name"><a href="shop-detail.html">ALMOND STICK
                                                                CAKE</a></h6>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>*/}

                                                <div className="icon">
                                                    <i className="icon-old-phone"></i>
                                                </div>

                                            </div>
                                            <div className="header-contact">
                                                {/* <div className="icon">
                                                <i className="icon-old-phone"></i>
                                            </div>
                                            <div className="content">
                                                <p>Call Order & Delivery
                                                </p>
                                                <p className="number">808-359-6973</p>
                                            </div> */}

                                                {/* Reservation Button */}
                                                <a href="#" className="reservation-btn">Reservation</a>

                                            </div>
                                            <div className="mobile-button ">
                                                <i className="icon-menu
                                    "></i>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className="mobile-nav-wrap">
                                    <div className="overlay-mobile-nav"></div>
                                    <div className="inner-mobile-nav">
                                        <div className="top-nav-mobile">
                                            <a href="index-2.html" rel="home" className="main-logo">
                                                <img id="mobile-logo_header" alt="" src="images/logo/logo.png"
                                                    data-retina="images/logo/logo@2x.png" />
                                            </a>
                                            <div className="mobile-nav-close">
                                                <i className="icon-close"></i>
                                            </div>
                                        </div>
                                        <nav id="mobile-main-nav" className="mobile-main-nav">
                                            <ul id="menu-mobile-menu" className="menu">
                                                <li className="menu-item current-menu-item">
                                                    <a className="item-menu-mobile" href="index-2.html">HOME</a>
                                                </li>
                                                <li className="menu-item menu-item-has-children-mobile">
                                                    <a className="item-menu-mobile" href="javascript:void(0);">PAGES</a>
                                                    <ul className="sub-menu-mobile">
                                                        <li className="menu-item"><a href="about.html">ABOUT</a></li>
                                                        <li className="menu-item"><a href="our-menu.html">OUR MENU</a></li>
                                                        <li className="menu-item"><a href="history.html">HISTORY</a></li>
                                                        <li className="menu-item"><a href="our-team.html">OUR BAKERY TEAM</a></li>
                                                        <li className="menu-item"><a href="404.html">404</a></li>

                                                    </ul>
                                                </li>
                                                <li className="menu-item">
                                                    <a className="item-menu-mobile" href="portfolio.html">PORTFOLIO</a>
                                                </li>
                                                <li className="menu-item menu-item-has-children-mobile">
                                                    <a className="item-menu-mobile" href="javascript:void(0);">SHOP</a>
                                                    <ul className="sub-menu-mobile">
                                                        <li className="menu-item"><a href="shop.html">SHOP</a></li>
                                                        <li className="menu-item"><a href="shop-detail.html">SHOP DETAIL</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-has-children-mobile ">
                                                    <a className="item-menu-mobile" href="javascript:void(0);">BLOG</a>
                                                    <ul className="sub-menu-mobile">
                                                        <li className="menu-item"><a href="blog.html">BLOG GRID</a></li>
                                                        <li className="menu-item "><a href="blog-single.html">BLOG
                                                            SINGLE</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="contact-us.html">CONTACT</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            </div>
        </>
    );
};

export default Header;
