import React from 'react';

const Footer: React.FC = () => {
    return (
        <>

            <footer id="footer" className="footer">
                <div className="wrap-footer">
                    {/* <div className="footer-body">
                        <div className="tf-container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="footer-info">
                                        <div className="footer-logo">
                                            <a href="#">
                                                <img id="logo_footer" alt="" src="images/logo/logo-footer.png"
                                                    data-retina="images/logo/logo-footer@2x.png" />
                                            </a>
                                        </div>
                                        <p className="text">Our buzzy food-hall style concept is inspired by international
                                            dining styles, especially in Asia. Explore the following fast-action food
                                        </p>
                                        <ul className="tf-social-icon flex items-center gap-10">
                                            <li><a href="#"><i className="icon-fb"></i></a></li>
                                            <li><a href="#"><i className="icon-trip"></i></a></li>
                                            <li><a href="#"><i className="icon-envelope-o"></i></a></li>
                                            <li><a href="#"><i className="icon-instagram2"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="footer-menu-list">
                                        <h4 className="title fw-7">OPENING TIME</h4>
                                        <ul>
                                            <li>Mon - Fri : 9:00am - 22:00pm</li>
                                            <li>Sat: 10:00am - 23:00pm</li>
                                            <li>Sun: 5:00pm - 23:00pm</li>
                                            <li>Holidays: Closed</li>
                                            <li>Happy Hours: 18:00pm - 20:00pm</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="footer-menu-list location">
                                        <h4 className="title fw-7">LOCATION</h4>
                                        <ul>
                                            <li>
                                                <div className='text'>
                                                    <span>Address</span><br />
                                                    <p>4517 Washington Ave.</p>
                                                    <p>Manchester, Kentucky 39495, USA</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <span>Order & Contact:</span>
                                                    <p className="mb-9">Basilicofood123@gmail.com</p>
                                                    <p>808-359-6973</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="footer-menu-list latest-new">
                                        <h4 className="title">LATEST NEW</h4>
                                        <p>Register your email to not miss any
                                            news and offers from us!
                                        </p>
                                        <form className="form-send-email">
                                            <fieldset>
                                                <input type="text" placeholder="Email *" name="text" aria-required="true"
                                                    required />
                                            </fieldset>
                                            <div className="button-submit">
                                                <button type="submit">
                                                    <img src="icons/send.svg" alt="" />
                                                </button>
                                            </div>
                                            <div className="checkbox-item">
                                                <label htmlFor="check-1" className="relative">
                                                    <input type="checkbox" checked id="check-1" />
                                                    <span className="btn-checkbox"></span>
                                                    I agree to the Privacy Policy
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="tf-container">
                        <div className="row">
                            <div className="footer-bottom">
                                <p>Copyright © 2025 <a href="#" className='brand-name'> The Tulip & The Rose Cafe </a> | All Right Reserved</p>
                                <ul className="content-right">

                                    {/* <div className="header-contact">
                                        <div className="icon">
                                            <i className="icon-old-phone"></i>
                                        </div>
                                        <div className="content">
                                            <p>Call Order & Delivery
                                            </p>
                                            <p className="number">808-359-6973</p>
                                        </div>
                                    </div> */}


                                    <li><i className="icon-phone"></i> 607-829-4040 </li>
                                    <li><i className="icon-location"></i> 435 Main St, Franklin, NY 13775 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="item wow fadeInLeft" data-wow-duration="3s">
                        <img src="images/items/footer.png" alt="" />
                    </div> */}
                </div>
            </footer>

        </>
    );
};

export default Footer;