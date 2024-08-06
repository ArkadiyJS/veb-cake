import React from 'react';
import s from './card.module.css'

function Card(props) {
  return (

    <div className={s.card}>
      <img className={s.cardImg} alt='cake' src='https://sun9-23.userapi.com/impg/FA-BDB8uozz0D5n8W2hn1TMr94S0jRsCZ9NXtg/Zsy08ZaSTxo.jpg?size=1280x1228&quality=95&sign=0d8effb191fc95630564ec288f037e46&type=album' />
      <div className={s.bodyCard}>
        <h3 className={s.titleCard}>
          торт "Красный бархат"
        </h3>
        <p className={s.textCard}>
          тортик по хорошей и вкусной цене
        </p>
      </div>
    </div>
  );
}

export default Card;