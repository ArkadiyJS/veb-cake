import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselCake(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imageCarouselOne}
          alt="First slide"
        />
        <Carousel.Caption>

          <p>{props.carouselTextOne}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imageCarouselTwo}
          alt="Second slide"
        />

        <Carousel.Caption>

          <p>{props.carouselTextTwo}</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselCake;