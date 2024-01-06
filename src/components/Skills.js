import meter1 from "../images/img/meter1.svg";
import meter2 from "../images/img/meter2.svg";
import meter3 from "../images/img/meter3.svg";
import Photo1 from "../images/img/Photo-1.jpg";
import Photo2 from "../images/img/Photo-2.jpg";
import Photo3 from "../images/img/Photo-3.jpg";
import Photo4 from "../images/img/Photo-4.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../images/img/arrow1.svg";
import arrow2 from "../images/img/arrow2.svg";
import colorSharp from "../images/img/color-sharp.png"
import React from "react";

function Skills(){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Us</h2>
                        <p>The web application is developed by Team 40 for FINAL YEAR PROJECT under the guidance of Prof. Shwetashree from SJCE, Mysore.<br></br></p>
                        <p><b>Developer Team</b></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Photo2} alt="Image" />
                                <h5>Vikash</h5>
                            </div>
                            <div className="item">
                                <img src={Photo3} alt="Image" />
                                <h5>Mohith</h5>
                            </div>
                            <div className="item">
                                <img src={Photo4} alt="Image" />
                                <h5>Vachan</h5>
                            </div>
                            <div className="item">
                                <img src={Photo1} alt="Image" />
                                <h5>Harshith</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;