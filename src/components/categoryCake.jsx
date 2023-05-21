import React from 'react';

import Button from 'react-bootstrap/Button';
function CategoryCake(props) {
  return (
    <>
      {/*  переделать кнопки */}
      <Button variant="primary">Всё</Button>{' '}
      <Button variant="secondary">Торты</Button>{' '}
      <Button variant="success">Бенто торт</Button>{' '}
      <Button variant="warning">Чизкейки</Button>{' '}
      <Button variant="danger">Капкейки</Button>{' '}
      <Button variant="info">Пироженое</Button>{' '}
      <Button variant="light">Кэнди бар</Button>{' '}

    </>
  );
}

export default CategoryCake;