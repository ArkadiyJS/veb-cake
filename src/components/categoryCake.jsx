import React from 'react';

import Button from 'react-bootstrap/Button';
function CategoryCake(props) {
  return (
    <div className='Cate'>
      {/*  переделать кнопки */}
      <Button variant="primary">Всё</Button>{' '}
      <Button variant="secondary">Торты</Button>{' '}
      <Button variant="success">Бенто торт</Button>{' '}
      <Button variant="warning">Чизкейки</Button>{' '}
      <Button variant="danger">Капкейки</Button>{' '}
      <Button variant="info">Пироженое</Button>{' '}
      <Button variant="light">Кэнди бар</Button>{' '}

    </div>
  );
}

export default CategoryCake;