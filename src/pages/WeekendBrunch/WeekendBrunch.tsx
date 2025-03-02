const WeekendBrunch = () => {
    return <>
        <div className="page-title relative page-our-menu ">
            <div className="tf-container">
                <div className="row">
                    <div className="col-12">
                        <div className="content">
                            {/* <div className="icon-top">
                                <img className="lazyload" data-src="images/logo/feathers.png" src="images/logo/feathers.png"
                                    alt="" />
                            </div> */}
                            <h1 className="title text-4">Weekend Brunch</h1>
                            {/* <div className="under-line">
                                <img className="lazyload" data-src="images/logo/line.png" src="images/logo/line.png"
                                    alt="" />
                            </div> */}
                            <ul className="breadcrumbs">
                                <li><a href="index-2.html">Home</a></li>
                                <li>/</li>
                                <li>PAGES</li>
                                <li>/</li>
                                <li>Weekend Brunch</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <section className="section-menu tf-spacing-4">
            <div className="tf-container">
                <div className="row">
                    <div className="col-lg-6">

                        <div className="heading-section text-center">
                            <div className="sub-title">Best Drinks</div>
                            <div className="title text-4">Espresso</div>
                        </div>

                        <div className="wrap-menu-item">

                            <div className="wg-menu-item ">
                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"> <a href="#">Espresso</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$4.50</div>
                                    </div>
                                    <p>Doubleshot of retro blend espresso</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Macchiato</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$5.50</div>
                                    </div>
                                    <p>Doubleshot espresso, dot of steamed milk, dot of foam</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Cortado</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$5.50</div>
                                    </div>
                                    <p>Equal parts espresso and steamed milk, 4 oz.</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Americano</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$6.50</div>
                                    </div>
                                    <p>Espresso shot topped with hot water, 10 oz.</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Traditional Cappuccino</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$6.50</div>
                                    </div>
                                    <p>Espresso, steamed milk, foam, Italian style, 6 oz.</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Modern Cappuccino</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$6.50</div>
                                    </div>
                                    <p>Espresso, steamed milk, foam, cinnamon, 10 oz.</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Latte</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$5.50</div>
                                    </div>
                                    <p>Espresso, steamed milk</p>
                                    <p>(Oat milk - add $2) </p>
                                    <p>(Almond milk - add $2) </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <img src="../images/section/divider.png" className="vertical-line" alt="Vertical Line" />
                    <div className="col-lg-6">

                        <div className="heading-section text-center">
                            <div className="sub-title">Best Drinks</div>
                            <div className="title text-4">Coffee & Tea</div>
                        </div>

                        <div className="wrap-menu-item">
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"> <a href="#">House Blend</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$7.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Decaf</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$8.00</div>
                                    </div>
                                    <p>French press, made to order</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Organic English Breakfast</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$8.00</div>
                                    </div>
                                    <p>Keemun black tea, full-bodied brew</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Earl Grey Supreme</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$4.00</div>
                                    </div>
                                    <p>Single leaf black tea, bergamot</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Dragon Pearl</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$5.00</div>
                                    </div>
                                    <p>Floral, aromatic white and green pearl tea</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">
                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Organic Bangkok</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$4.00</div>
                                    </div>
                                    <p>Green tea, lemongrass, vanilla, coconut, ginger</p>
                                </div>
                            </div>

                            <div className="wg-menu-item ">
                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Chamomile</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$4.00</div>
                                    </div>
                                    <p>Espresso, steamed milk</p>
                                </div>
                            </div>

                            <div className="wg-menu-item ">
                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Paris</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$4.00</div>
                                    </div>
                                    <p>Fruit-infused black tea, vanilla, caramel, bergamot</p>
                                </div>
                            </div>

                            <div className="wg-menu-item ">
                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Pomegranate Oolong</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$4.00</div>
                                    </div>
                                    <p>Ti Quan Yin fruity brew, toasty aroma, bright pomegranate</p>
                                </div>
                            </div>

                            <div className="wg-menu-item ">
                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">White Vanilla Grapefruit</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$4.00</div>
                                    </div>
                                    <p>Cleansing white tea, vanilla, grapefruit essence</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-menu tf-spacing-9">
            <div className="tf-container">
                <div className="row">
                    <div className="col-lg-6">

                        <div className="heading-section text-center">
                            <div className="sub-title">Best Drinks</div>
                            <div className="title text-4">Specialty Drinks</div>
                        </div>

                        <div className="wrap-menu-item">

                            <div className="wg-menu-item ">
                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"> <a href="#">Gül Kahve</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$8.00</div>
                                    </div>
                                    <p>Turkish coffee infused with rosewater and strawberry, served with rose Turkish delight, sweetened rose water</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Japanese Coffee Cola</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$8.00</div>
                                    </div>
                                    <p>Espresso shot, Fentiman’s Curiosity Cola, vanilla syrup, whipped cream</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Doodh Patti Chai</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$8.00</div>
                                    </div>
                                    <p>Lahori street style pulled masala tea with milk and cream</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Vietnamese Coffee</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$7.00</div>
                                    </div>
                                    <p>Chicory and chocolate roasted coffee dripped over condensed milk. Served iced or hot</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Turkish Coffee</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$7.00</div>
                                    </div>
                                    <p>The Sultan of coffees, finely ground Arabica coffee, freshly brewed and served in a demitasse with Turkish delight</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <img src="../images/section/divider.png" className="vertical-line" alt="Vertical Line" />
                    <div className="col-lg-6">

                        <div className="heading-section text-center">
                            <div className="sub-title">Best Drinks</div>
                            <div className="title text-4">Cold Drinks</div>
                        </div>

                        <div className="wrap-menu-item">
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"> <a href="#">Thai Iced Tea</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$8.00</div>
                                    </div>
                                    <p>Semi-wild Assam tea, orange blossom, star anise, vanilla cream, whipped cream</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Ginger Blush</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$8.00</div>
                                    </div>
                                    <p>Pressed ginger ale, strawberry, rosehip, hibiscus</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Greyblood Tonic</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$8.00</div>
                                    </div>
                                    <p>Housemade Earl Grey syrup infused with blood orange essence, topped with tonic water</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Lemonade</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$7.00</div>
                                    </div>
                                    <p>Housemade lemonade, candied lemon zest</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">

                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Curiosity Cola</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$7.00</div>
                                    </div>
                                    <p>Botanically brewed cola with natural herbal extracts</p>
                                </div>
                            </div>
                            <div className="wg-menu-item ">
                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Rose Lemonade</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$7.00</div>
                                    </div>
                                    <p>Sparkling lemonade with Bulgarian rose essence</p>
                                </div>
                            </div>

                            <div className="wg-menu-item ">
                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Ginger Beer</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$7.00</div>
                                    </div>
                                    <p>Traditionally made ginger beer with herbal extracts</p>
                                </div>
                            </div>

                            <div className="wg-menu-item ">
                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Iced Tea</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$7.00</div>
                                    </div>
                                    <p>Brewed in-house, served sweet or unsweet</p>
                                </div>
                            </div>

                            <div className="wg-menu-item ">
                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Chocolate Milk</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$7.00</div>
                                    </div>
                                </div>
                            </div>

                            <div className="wg-menu-item ">
                                <div className="content">
                                    <div className="top">
                                        <h4 className="line-clamp-1"><a href="#">Apple Juice / Orange Juice</a></h4>
                                        <span className="dot"></span>
                                        <div className="price h4">$7.00</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section> */}


        <section className="section-menu tf-spacing-4">
            <div className="widget-tabs">
                <ul className="widget-menu-tab overflow-x-auto">
                    <li className="item-title">
                        Noodles
                    </li>
                    <li className="item-title">
                        Dumplings
                    </li>
                    <li className="item-title">
                        Lunch
                    </li>
                    <li className="item-title active">
                        Drinks
                    </li>
                </ul>

                <div className="widget-content-tab">

                    <div className="widget-content-inner">
                        <div className="grid-layout-1 showmore-item1">

                            <section className="section-menu tf-spacing-4">
                                <div className="tf-container">
                                    <div className="row">
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Noodles</div>
                                            </div>

                                            <div className="wrap-menu-item">

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">Espresso</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.50</div>
                                                        </div>
                                                        <p>Doubleshot of retro blend espresso</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Macchiato</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.50</div>
                                                        </div>
                                                        <p>Doubleshot espresso, dot of steamed milk, dot of foam</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Cortado</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.50</div>
                                                        </div>
                                                        <p>Equal parts espresso and steamed milk, 4 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Americano</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$6.50</div>
                                                        </div>
                                                        <p>Espresso shot topped with hot water, 10 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Traditional Cappuccino</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$6.50</div>
                                                        </div>
                                                        <p>Espresso, steamed milk, foam, Italian style, 6 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Modern Cappuccino</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$6.50</div>
                                                        </div>
                                                        <p>Espresso, steamed milk, foam, cinnamon, 10 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Latte</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.50</div>
                                                        </div>
                                                        <p>Espresso, steamed milk</p>
                                                        <p>(Oat milk - add $2) </p>
                                                        <p>(Almond milk - add $2) </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <img src="../images/section/divider.png" className="vertical-line" alt="Vertical Line" />
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Coffee & Tea</div>
                                            </div>

                                            <div className="wrap-menu-item">
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">House Blend</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Decaf</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>French press, made to order</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Organic English Breakfast</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Keemun black tea, full-bodied brew</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Earl Grey Supreme</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Single leaf black tea, bergamot</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Dragon Pearl</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.00</div>
                                                        </div>
                                                        <p>Floral, aromatic white and green pearl tea</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Organic Bangkok</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Green tea, lemongrass, vanilla, coconut, ginger</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Chamomile</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Espresso, steamed milk</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Paris</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Fruit-infused black tea, vanilla, caramel, bergamot</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Pomegranate Oolong</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Ti Quan Yin fruity brew, toasty aroma, bright pomegranate</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">White Vanilla Grapefruit</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Cleansing white tea, vanilla, grapefruit essence</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section-menu tf-spacing-9">
                                <div className="tf-container">
                                    <div className="row">
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Specialty Drinks</div>
                                            </div>

                                            <div className="wrap-menu-item">

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">Gül Kahve</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Turkish coffee infused with rosewater and strawberry, served with rose Turkish delight, sweetened rose water</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Japanese Coffee Cola</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Espresso shot, Fentiman’s Curiosity Cola, vanilla syrup, whipped cream</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Doodh Patti Chai</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Lahori street style pulled masala tea with milk and cream</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Vietnamese Coffee</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Chicory and chocolate roasted coffee dripped over condensed milk. Served iced or hot</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Turkish Coffee</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>The Sultan of coffees, finely ground Arabica coffee, freshly brewed and served in a demitasse with Turkish delight</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <img src="../images/section/divider.png" className="vertical-line" alt="Vertical Line" />
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Cold Drinks</div>
                                            </div>

                                            <div className="wrap-menu-item">
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">Thai Iced Tea</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Semi-wild Assam tea, orange blossom, star anise, vanilla cream, whipped cream</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Ginger Blush</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Pressed ginger ale, strawberry, rosehip, hibiscus</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Greyblood Tonic</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Housemade Earl Grey syrup infused with blood orange essence, topped with tonic water</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Lemonade</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Housemade lemonade, candied lemon zest</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Curiosity Cola</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Botanically brewed cola with natural herbal extracts</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Rose Lemonade</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Sparkling lemonade with Bulgarian rose essence</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Ginger Beer</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Traditionally made ginger beer with herbal extracts</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Iced Tea</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Brewed in-house, served sweet or unsweet</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Chocolate Milk</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Apple Juice / Orange Juice</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>

                    <div className="widget-content-inner">
                        <div className="grid-layout-1 showmore-item2">
                            <section className="section-menu tf-spacing-4">
                                <div className="tf-container">
                                    <div className="row">
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Dumplings</div>
                                            </div>

                                            <div className="wrap-menu-item">

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">Espresso</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.50</div>
                                                        </div>
                                                        <p>Doubleshot of retro blend espresso</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Macchiato</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.50</div>
                                                        </div>
                                                        <p>Doubleshot espresso, dot of steamed milk, dot of foam</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Cortado</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.50</div>
                                                        </div>
                                                        <p>Equal parts espresso and steamed milk, 4 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Americano</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$6.50</div>
                                                        </div>
                                                        <p>Espresso shot topped with hot water, 10 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Traditional Cappuccino</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$6.50</div>
                                                        </div>
                                                        <p>Espresso, steamed milk, foam, Italian style, 6 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Modern Cappuccino</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$6.50</div>
                                                        </div>
                                                        <p>Espresso, steamed milk, foam, cinnamon, 10 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Latte</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.50</div>
                                                        </div>
                                                        <p>Espresso, steamed milk</p>
                                                        <p>(Oat milk - add $2) </p>
                                                        <p>(Almond milk - add $2) </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <img src="../images/section/divider.png" className="vertical-line" alt="Vertical Line" />
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Coffee & Tea</div>
                                            </div>

                                            <div className="wrap-menu-item">
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">House Blend</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Decaf</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>French press, made to order</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Organic English Breakfast</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Keemun black tea, full-bodied brew</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Earl Grey Supreme</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Single leaf black tea, bergamot</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Dragon Pearl</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.00</div>
                                                        </div>
                                                        <p>Floral, aromatic white and green pearl tea</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Organic Bangkok</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Green tea, lemongrass, vanilla, coconut, ginger</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Chamomile</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Espresso, steamed milk</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Paris</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Fruit-infused black tea, vanilla, caramel, bergamot</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Pomegranate Oolong</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Ti Quan Yin fruity brew, toasty aroma, bright pomegranate</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">White Vanilla Grapefruit</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Cleansing white tea, vanilla, grapefruit essence</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section-menu tf-spacing-9">
                                <div className="tf-container">
                                    <div className="row">
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Specialty Drinks</div>
                                            </div>

                                            <div className="wrap-menu-item">

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">Gül Kahve</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Turkish coffee infused with rosewater and strawberry, served with rose Turkish delight, sweetened rose water</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Japanese Coffee Cola</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Espresso shot, Fentiman’s Curiosity Cola, vanilla syrup, whipped cream</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Doodh Patti Chai</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Lahori street style pulled masala tea with milk and cream</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Vietnamese Coffee</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Chicory and chocolate roasted coffee dripped over condensed milk. Served iced or hot</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Turkish Coffee</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>The Sultan of coffees, finely ground Arabica coffee, freshly brewed and served in a demitasse with Turkish delight</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <img src="../images/section/divider.png" className="vertical-line" alt="Vertical Line" />
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Cold Drinks</div>
                                            </div>

                                            <div className="wrap-menu-item">
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">Thai Iced Tea</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Semi-wild Assam tea, orange blossom, star anise, vanilla cream, whipped cream</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Ginger Blush</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Pressed ginger ale, strawberry, rosehip, hibiscus</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Greyblood Tonic</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Housemade Earl Grey syrup infused with blood orange essence, topped with tonic water</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Lemonade</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Housemade lemonade, candied lemon zest</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Curiosity Cola</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Botanically brewed cola with natural herbal extracts</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Rose Lemonade</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Sparkling lemonade with Bulgarian rose essence</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Ginger Beer</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Traditionally made ginger beer with herbal extracts</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Iced Tea</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Brewed in-house, served sweet or unsweet</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Chocolate Milk</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Apple Juice / Orange Juice</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="widget-content-inner">
                        <div className="grid-layout-1 showmore-item3">
                            <section className="section-menu tf-spacing-4">
                                <div className="tf-container">
                                    <div className="row">
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Lunch</div>
                                            </div>

                                            <div className="wrap-menu-item">

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">Espresso</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.50</div>
                                                        </div>
                                                        <p>Doubleshot of retro blend espresso</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Macchiato</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.50</div>
                                                        </div>
                                                        <p>Doubleshot espresso, dot of steamed milk, dot of foam</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Cortado</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.50</div>
                                                        </div>
                                                        <p>Equal parts espresso and steamed milk, 4 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Americano</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$6.50</div>
                                                        </div>
                                                        <p>Espresso shot topped with hot water, 10 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Traditional Cappuccino</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$6.50</div>
                                                        </div>
                                                        <p>Espresso, steamed milk, foam, Italian style, 6 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Modern Cappuccino</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$6.50</div>
                                                        </div>
                                                        <p>Espresso, steamed milk, foam, cinnamon, 10 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Latte</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.50</div>
                                                        </div>
                                                        <p>Espresso, steamed milk</p>
                                                        <p>(Oat milk - add $2) </p>
                                                        <p>(Almond milk - add $2) </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <img src="../images/section/divider.png" className="vertical-line" alt="Vertical Line" />
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Coffee & Tea</div>
                                            </div>

                                            <div className="wrap-menu-item">
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">House Blend</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Decaf</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>French press, made to order</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Organic English Breakfast</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Keemun black tea, full-bodied brew</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Earl Grey Supreme</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Single leaf black tea, bergamot</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Dragon Pearl</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.00</div>
                                                        </div>
                                                        <p>Floral, aromatic white and green pearl tea</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Organic Bangkok</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Green tea, lemongrass, vanilla, coconut, ginger</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Chamomile</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Espresso, steamed milk</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Paris</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Fruit-infused black tea, vanilla, caramel, bergamot</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Pomegranate Oolong</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Ti Quan Yin fruity brew, toasty aroma, bright pomegranate</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">White Vanilla Grapefruit</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Cleansing white tea, vanilla, grapefruit essence</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section-menu tf-spacing-9">
                                <div className="tf-container">
                                    <div className="row">
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Specialty Drinks</div>
                                            </div>

                                            <div className="wrap-menu-item">

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">Gül Kahve</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Turkish coffee infused with rosewater and strawberry, served with rose Turkish delight, sweetened rose water</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Japanese Coffee Cola</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Espresso shot, Fentiman’s Curiosity Cola, vanilla syrup, whipped cream</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Doodh Patti Chai</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Lahori street style pulled masala tea with milk and cream</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Vietnamese Coffee</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Chicory and chocolate roasted coffee dripped over condensed milk. Served iced or hot</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Turkish Coffee</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>The Sultan of coffees, finely ground Arabica coffee, freshly brewed and served in a demitasse with Turkish delight</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <img src="../images/section/divider.png" className="vertical-line" alt="Vertical Line" />
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Cold Drinks</div>
                                            </div>

                                            <div className="wrap-menu-item">
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">Thai Iced Tea</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Semi-wild Assam tea, orange blossom, star anise, vanilla cream, whipped cream</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Ginger Blush</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Pressed ginger ale, strawberry, rosehip, hibiscus</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Greyblood Tonic</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Housemade Earl Grey syrup infused with blood orange essence, topped with tonic water</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Lemonade</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Housemade lemonade, candied lemon zest</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Curiosity Cola</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Botanically brewed cola with natural herbal extracts</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Rose Lemonade</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Sparkling lemonade with Bulgarian rose essence</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Ginger Beer</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Traditionally made ginger beer with herbal extracts</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Iced Tea</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Brewed in-house, served sweet or unsweet</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Chocolate Milk</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Apple Juice / Orange Juice</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="widget-content-inner active">
                        <div className="grid-layout-1 showmore-item4">
                            <section className="section-menu tf-spacing-4">
                                <div className="tf-container">
                                    <div className="row">
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Espresso</div>
                                            </div>

                                            <div className="wrap-menu-item">

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">Espresso</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.50</div>
                                                        </div>
                                                        <p>Doubleshot of retro blend espresso</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Macchiato</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.50</div>
                                                        </div>
                                                        <p>Doubleshot espresso, dot of steamed milk, dot of foam</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Cortado</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.50</div>
                                                        </div>
                                                        <p>Equal parts espresso and steamed milk, 4 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Americano</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$6.50</div>
                                                        </div>
                                                        <p>Espresso shot topped with hot water, 10 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Traditional Cappuccino</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$6.50</div>
                                                        </div>
                                                        <p>Espresso, steamed milk, foam, Italian style, 6 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Modern Cappuccino</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$6.50</div>
                                                        </div>
                                                        <p>Espresso, steamed milk, foam, cinnamon, 10 oz.</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Latte</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.50</div>
                                                        </div>
                                                        <p>Espresso, steamed milk</p>
                                                        <p>(Oat milk - add $2) </p>
                                                        <p>(Almond milk - add $2) </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <img src="../images/section/divider.png" className="vertical-line" alt="Vertical Line" />
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Coffee & Tea</div>
                                            </div>

                                            <div className="wrap-menu-item">
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">House Blend</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Decaf</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>French press, made to order</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Organic English Breakfast</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Keemun black tea, full-bodied brew</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Earl Grey Supreme</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Single leaf black tea, bergamot</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Dragon Pearl</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$5.00</div>
                                                        </div>
                                                        <p>Floral, aromatic white and green pearl tea</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Organic Bangkok</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Green tea, lemongrass, vanilla, coconut, ginger</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Chamomile</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Espresso, steamed milk</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Paris</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Fruit-infused black tea, vanilla, caramel, bergamot</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Pomegranate Oolong</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Ti Quan Yin fruity brew, toasty aroma, bright pomegranate</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">White Vanilla Grapefruit</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$4.00</div>
                                                        </div>
                                                        <p>Cleansing white tea, vanilla, grapefruit essence</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section-menu tf-spacing-9">
                                <div className="tf-container">
                                    <div className="row">
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Specialty Drinks</div>
                                            </div>

                                            <div className="wrap-menu-item">

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">Gül Kahve</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Turkish coffee infused with rosewater and strawberry, served with rose Turkish delight, sweetened rose water</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Japanese Coffee Cola</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Espresso shot, Fentiman’s Curiosity Cola, vanilla syrup, whipped cream</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Doodh Patti Chai</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Lahori street style pulled masala tea with milk and cream</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Vietnamese Coffee</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Chicory and chocolate roasted coffee dripped over condensed milk. Served iced or hot</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Turkish Coffee</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>The Sultan of coffees, finely ground Arabica coffee, freshly brewed and served in a demitasse with Turkish delight</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <img src="../images/section/divider.png" className="vertical-line" alt="Vertical Line" />
                                        <div className="col-lg-6">

                                            <div className="heading-section text-center">
                                                <div className="sub-title">Best Drinks</div>
                                                <div className="title text-4">Cold Drinks</div>
                                            </div>

                                            <div className="wrap-menu-item">
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"> <a href="#">Thai Iced Tea</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Semi-wild Assam tea, orange blossom, star anise, vanilla cream, whipped cream</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Ginger Blush</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Pressed ginger ale, strawberry, rosehip, hibiscus</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Greyblood Tonic</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$8.00</div>
                                                        </div>
                                                        <p>Housemade Earl Grey syrup infused with blood orange essence, topped with tonic water</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Lemonade</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Housemade lemonade, candied lemon zest</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">

                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Curiosity Cola</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Botanically brewed cola with natural herbal extracts</p>
                                                    </div>
                                                </div>
                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Rose Lemonade</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Sparkling lemonade with Bulgarian rose essence</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Ginger Beer</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Traditionally made ginger beer with herbal extracts</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Iced Tea</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                        <p>Brewed in-house, served sweet or unsweet</p>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Chocolate Milk</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="wg-menu-item ">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h4 className="line-clamp-1"><a href="#">Apple Juice / Orange Juice</a></h4>
                                                            <span className="dot"></span>
                                                            <div className="price h4">$7.00</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </>
}

export default WeekendBrunch