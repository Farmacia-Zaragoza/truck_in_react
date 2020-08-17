import React, { Component, Fragment } from 'react';
import $ from 'jquery'; // jQuery import
import { horizontalSlideleft, horizontalSlideRight, stopTabScroll, verticalSlideUp, verticalSlideDown } from '../../utils/config.js';

import 'flexslider/flexslider.css'; // The styles if needed
import './Slider.css';
import { Grid, List, Image } from 'semantic-ui-react';

window.jQuery = window.$ = $;
require('flexslider'); // This uses the NPM-package, but it can be replaced by the local file.

class FlexSlider extends Component {
    componentDidMount() {
        $(window).on('load', function() {
            let item_width;
            const window_width = window.innerWidth;
            //console.log(window_width);
            if(window_width < 768) {
                item_width = 150;
            }
            if (window_width < 500) {
                item_width = 100;
            }
            if(window_width>=768) {
                item_width = 210;
            }
            if(window_width > 2560) {
                item_width = 420;
            }
            if(window_width > 4000) {
                item_width = 800;
            }
            // The slider being synced must be initialized first
            $('#carousel').flexslider({
              animation: "slide",
              controlNav: false,
              animationLoop: false,
              slideshow: false,
              itemWidth: item_width,
              itemMargin: 5,
              asNavFor: '#slider'
            });
           
            $('#slider').flexslider({
              animation: "slide",
              controlNav: false,
              animationLoop: false,
              slideshow: false,
              sync: "#carousel"
            });
            //hover event on carousel
            $('.flex-nav-prev a'+','+' .flex-nav-next a'+','+'#carousel li img').on('mouseenter', function() {
                $(this).trigger('click');
            });
          });
    }
    render() {
        return (
                <Fragment>
                    <div id="slider" className="flexslider">
                    <div className="slider_caption_wrapper">
                        <div className="slider_caption_inner">
                            <div className="email_phone_wrapper">
                                <Grid columns="equal">
                                    <Grid.Column>
                                        <div className="email">
                                            <div className="email_icon">
                                                <i class="fas fa-envelope"></i>
                                            </div>
                                            <div className="email_content">
                                                <div className="email_content_scroll">
                                                    <div className="left_email_handler"
                                                        onMouseEnter={() => horizontalSlideleft(this.email_scroll)}
                                                        onMouseLeave={() => stopTabScroll(this.email_scroll)}
                                                    ><i class="fas fa-angle-left"></i></div>
                                                    <div className="email_scroll" ref={node => this.email_scroll = node}>
                                                        <img src="http://truck.vbrqx.com/dev/img/email/email_address.png" alt="email address" />
                                                    </div>
                                                    <div className="right_email_handler"
                                                        onMouseEnter={() => horizontalSlideRight(this.email_scroll)}
                                                        onMouseLeave={() => stopTabScroll(this.email_scroll)}
                                                    ><i class="fas fa-angle-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <div className="phone">
                                            <div className="phone_icon">
                                                <i class="fas fa-phone"></i>
                                            </div>
                                            <div className="phone_content">
                                                <div className="phone_content_inner">
                                                    <img src="http://truck.vbrqx.com/dev/img/phone/phone_number.png" alt="phone number"/>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid.Column>
                                </Grid>
                            </div>
                            {/* caption area */}
                            <div className="caption_wrapper">
                                <div className="caption_inner_content">
                                <div className="up_content_handler"
                                    onMouseEnter={() => verticalSlideDown(this.caption_inner_scroll)}
                                    onMouseLeave={() => stopTabScroll(this.caption_inner_scroll)}
                                >
                                    <span><i class="fas fa-angle-up"></i></span>
                                    <span><i class="fas fa-angle-up"></i></span>
                                    <span><i class="fas fa-angle-up"></i></span>
                                </div>
                                <div className="caption_inner_scroll" ref={node => this.caption_inner_scroll = node}>
                                    <p>STARTS ONE --- Firts long description of the flat. Long lines of text. Multiple lines of text. Another text. More copy. Firts long description of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat Firts long description of the flat --- FINISHES ONE
                                    </p>

                                    <p>STARTS TWO--- Firts long descriptiption of the flat Firts long description of the flat --- FINISHES TWO</p>

                                    <p>STARTS 3 --- Firts long description of the flat. Long lines of text. Multiple lines of text. Another text. More copy. Firts long description of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat Firts long description of the flat --- FINISHES 3</p>

                                    <p>STARTS 4--- Firts long description of the flat. Long lines of text. Multiple lines of text. Another text. More copy. Firts long description of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat Firts long description of the flat --- FINISHES 4</p>

                                    <p>STARTS 5 --- Firts long description of the flat. Long lines of text. Multiple lines of text. Another text. More copy. Firts long description of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat Firts long description of the flat --- FINISHES 5</p>

                                    <p>STARTS 6 --- Firts long description of the flat. Long lines of text. Multiple lines of text. Another text. More copy. Firts long description of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat of the flat. Firts long description of the flat. Firts long description of the flat Firts long description of the flat Firts long description of the flat --- FINISHES 6</p>
                                </div>
                                <div className="down_content_handler"
                                    onMouseEnter={() => verticalSlideUp(this.caption_inner_scroll)}
                                    onMouseLeave={() => stopTabScroll(this.caption_inner_scroll)}
                                >
                                    <span><i class="fas fa-angle-down"></i></span>
                                    <span><i class="fas fa-angle-down"></i></span>
                                    <span><i class="fas fa-angle-down"></i></span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="slides">
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                    </ul>
                </div>
                <div id="carousel" className="flexslider">
                    <ul className="slides">
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                        <li>
                        <img src="http://gondolas02.vbrqx.com/photos/0300x0250/blue_big_truck_vnx-hor_0300x0250.jpg" alt="truck" />
                        </li>
                    </ul>
                </div>
                </Fragment>
        )
    }
}

export default FlexSlider;