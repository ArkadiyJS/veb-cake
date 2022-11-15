import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselCake(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sun9-west.userapi.com/sun9-8/s/v1/ig2/cTPPlZw5ZSAH4n3c809APGXKpDZgCWi0lzuXDHemy47RB_3487bHB9bBozYwElST1ao_1MIDWBxcWgVAJb--Xw2f.jpg?size=1101x1280&quality=95&type=album"
          alt="First slide"
        />
        <Carousel.Caption>

          <p>Торт "Шоколадное мороженое"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sun9-north.userapi.com/sun9-84/s/v1/ig2/rIRh3NbgFojSBLwbP6MtpXY0xJKmw8uUl2Oi_Bl8qUY-KAqpTuq1eh0HBkQtV3nWZANKu1I41Vf1ZHkVJDjEfBZD.jpg?size=1280x960&quality=95&type=album"
          alt="Second slide"
        />

        <Carousel.Caption>

          <p>Разрез</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselCake;