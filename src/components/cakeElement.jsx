import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardCake from './cardCake'
import { cakeLOL } from '../dbLOL';

function CakeElement(props) {

  // const [cakeItems, setCakeItems] = useState()

  // console.log(cakeItems)

  // useEffect(() => {
  //   axios.get("https://6381dbba9842ca8d3c9b18a9.mockapi.io/cake").then(res => setCakeItems(res.data))
  // }, [])

  console.log(cakeLOL)
  return (
    <>
      {
        cakeLOL.map(cake => (
          <CardCake
            key={cake.id}
            cardTitle={cake.cardTitle}
            carouselTextOne={cake.carouselTextOne}
            carouselTextTwo={cake.carouselTextTwo}
            imageCard={cake.imageCard}
            imageCarouselOne={cake.imageCarouselOne}
            imageCarouselTwo={cake.imageCarouselTwo}
            price={cake.price}
            rating={cake.rating}
            modalShow={props.modalShow}
            setModalShow={props.setModalShow}
          />
        ))}


    </>
  );
}

export default CakeElement;