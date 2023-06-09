import React from 'react';
import { Carousel } from 'react-bootstrap';
// import "./../Component/CarouselContainer.css"
import image1 from '../../Image/image1.png';
import image2 from '../../Image/image2.png';
import image3 from '../../Image/image3.png';
import './Home.css'

const Slider = () => {
    return (
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Third slide"
                />
                <Carousel.Caption>
       
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
               
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>

    )
}

export default Slider;