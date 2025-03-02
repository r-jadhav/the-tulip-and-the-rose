const OurStoryPage = () => {
    return <>
        <div className="page-title relative page-our-menu ">
            <div className="tf-container">
                <div className="row">
                    <div className="col-12">
                        <div className="content">

                            <h1 className="title text-4">Our Story</h1>
                            <ul className="breadcrumbs">
                                <li><a href="index-2.html">Home</a></li>
                                <li>/</li>
                                <li>PAGES</li>
                                <li>/</li>
                                <li>Our Story</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <section className="section-why page-about tf-spacing-17">
            <div className="tf-container">
                <div className="row justify-content-between">

                    <div className="col-md-6">
                        <div className="content">
                            <div className="heading-section ">
                                <div className="title text-4 text-center">Our Culinary Journey </div>
                                <p className="short-desc text-center">Serving Flavor, Tradition & Memorable Dining <br />Experiences</p>
                                <img src="../images/section/horidivider.png" alt="divider" className="horidivider" />
                            </div>


                            <p className="paragraph-1  line-clamp-4">From our humble beginnings at the Franklin Farmer's Market on Sundays grilling gyros, The Tulip and the Rose opened its doors on July 5, 2014 offering a menu of omelettes, pancakes, burgers, and our famous gyros. Since that day until now, we strive to bring exciting and innovative cuisine to the Catskills.
                            </p>
                            <br /><br />
                            <p className="paragraph-1 line-clamp-6">Every week since November 3, 2015 we have featured a brand new menu with various regional specialities including: Mediterranean, Malay, Indian, French, Thai, Persian, Russian, Vietnamese, and many more. Over time, we have expanded to a constantly changing schedule featuring a new dinner menu every Friday and Saturday. Check out our calendar to see what regions we will be highlighting every week.
                            </p>
                            <br /><br />
                            <p className="paragraph-1  line-clamp-4">Named one of the “Best Places to Eat in the Catskills,” we continue to bring delicious food and an atmosphere of sharing and enjoying to our home in Franklin.
                            </p>
                            <br /><br />
                        </div>
                    </div>

                    <div className="col-md-4">
                        {/* <div className="widget-video"> */}
                        <img src="images/items/story-main.png" />
                        {/* </div> */}
                    </div>


                </div>
            </div>
            <div className="item2">
                <img src="images/background/story-bg.png" alt="" />
            </div>
        </section>

        <section className="section-why page-about tf-spacing-13">
            <div className="tf-container">
                <div className="row">
                    <div className="col-12">

                        <div className="content">
                            <div className="heading-section">
                                <div className="title text-4 text-center">Our Gallery</div>
                                <p className="short-desc text-center">A Visual Feast of Our Culinary Creations & Ambiance</p>
                                <img src="../images/section/horidivider.png" alt="divider" className="horidivider" />

                            </div>

                            <div className="widget-content-tab">
                                <div className="widget-content-inner active">
                                    <div className="grid-layout-4 showmore-item">

                                        <div className="portfolio-item hover-img fl-item">
                                            <div className="wrap-image">
                                                <img className="lazyload" data-src="images/items/1.png"
                                                    src="images/items/1.png" alt="" />
                                            </div>
                                        </div>

                                        <div className="portfolio-item hover-img fl-item"
                                            data-wow-delay="0.1s">
                                            <div className="wrap-image">
                                                <img className="lazyload" data-src="images/items/2.png"
                                                    src="images/items/2.png" alt="" />
                                            </div>
                                        </div>

                                        <div className="portfolio-item hover-img fl-item"
                                            data-wow-delay="0.2s">
                                            <div className="wrap-image">
                                                <img className="lazyload" data-src="images/items/3.png"
                                                    src="images/items/3.png" alt="" />
                                            </div>
                                        </div>

                                        <div className="portfolio-item hover-img fl-item">
                                            <div className="wrap-image">
                                                <img className="lazyload" data-src="images/items/4.png"
                                                    src="images/items/4.png" alt="" />
                                            </div>
                                        </div>

                                        <div className="portfolio-item hover-img fl-item"
                                            data-wow-delay="0.1s">
                                            <div className="wrap-image">
                                                <img className="lazyload" data-src="images/items/5.png"
                                                    src="images/items/5.png" alt="" />
                                            </div>
                                        </div>

                                        <div className="portfolio-item hover-img fl-item"
                                            data-wow-delay="0.2s">
                                            <div className="wrap-image">
                                                <img className="lazyload" data-src="images/items/6.png"
                                                    src="images/items/6.png" alt="" />
                                            </div>
                                        </div>

                                        <div className="portfolio-item hover-img fl-item">
                                            <div className="wrap-image">
                                                <img className="lazyload" data-src="images/items/7.png"
                                                    src="images/items/7.png" alt="" />
                                            </div>
                                        </div>

                                        <div className="portfolio-item hover-img fl-item ">
                                            <div className="wrap-image">
                                                <img className="lazyload" data-src="images/items/8.png"
                                                    src="images/items/8.png" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default OurStoryPage