import React from 'react';
import Card from 'react-bootstrap/Card';
import ModalCake from './modalCake';

function CardCake({ setModalShow, modalShow }) {

  return (
    <>
      <Card onClick={() => setModalShow(true)} style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://sun9-north.userapi.com/sun9-80/s/v1/ig2/I1vrK283YII7QJ53zSoUitE5zi8VWY63gPCt7AJEcs4YM22s_zHIxgc5y66XZ-0cqbR9usVaNu5rxL5n6R6TckPq.jpg?size=1166x1280&quality=95&type=album" />
        <Card.Body>
          <Card.Title>Торт "Шоколадное мороженое"</Card.Title>
          <Card.Text>
            Вес: 1,5 кг
            Стоимость 2400 руб.
          </Card.Text>


        </Card.Body>
      </Card>
      <>
        <ModalCake
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>

    </>
  );
}

export default CardCake;