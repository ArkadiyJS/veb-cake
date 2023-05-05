
import React from 'react';
import Card from 'react-bootstrap/Card';
import ModalCake from './modalCake';

function CardCake(props) {


  return (




    <>
      <Card onClick={() => props.setModalShow(true)} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imageCard} />
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text>
            {props.cardText}
          </Card.Text>


        </Card.Body>
      </Card>


      <>
        <ModalCake
          show={props.modalShow}
          onHide={() => props.setModalShow(false)}
          {...props}
        />
      </>

    </>
  );
}

export default CardCake;