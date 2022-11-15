
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import ModalCake from './components/modalCake';



function App() {

  const [modalShow, setModalShow] = useState(false);
  console.log(modalShow)




  return (
    <div className="App">

      <div className='Header'> header info </div>


      <div className='NavBar'>
        <div> Всё</div>
        <div> Торты</div>
        <div> Бенто торт</div>
        <div> Чизкейки</div>
        <div> Капкейки</div>
        <div> Пироженое</div>
        <div> Кэнди бар</div>

      </div>


      <div className='Content'>
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
        </>

        <>
          <ModalCake
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>






      </div>


    </div>
  );
}

export default App;
