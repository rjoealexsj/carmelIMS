import React, { Component } from 'react';
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default class SliderCorousel extends Component {
  render() {
   return <div>
     
<Carousel>
                <div>
                    <img src={slide1} />
                    <p className="legend"><h2>Welcome to <span>Medicio</span></h2>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel</p>
                </div>
                <div>
                    <img src={slide2} />
                    <p className="legend"><h2>Lorem Ipsum Dolor</h2>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
                </div>
                <div>
                    <img src={slide3} />
                    <p className="legend"><h2>Sequi ea ut et est quaerat</h2> Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
                </div>
            </Carousel>

    </div>;
  }
}
