import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageInfo from './components/pageInfo';
import CategoryCake from './components/categoryCake';
import Page404 from './components/page404/page404';
import { NavLink, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';








function App() {

  const [modalShow, setModalShow] = useState(false);




  return (
    <div className="App">

      <div className='Header'>




      </div>


      <div className='NavBar'>

        <NavBar />

      </div>


      <div className='Content'>


        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://sun9-31.userapi.com/impg/vraWsJU26-xFSxno9wgAceigg1t0LcHr0LW15A/oXlH8eRq_7Y.jpg?size=1042x1600&quality=95&sign=d06ecdb8fac25471cf33b9b12ca88d80&type=album" />
          <Card.Body>
            <Card.Title>Торт "Красный Бархат"</Card.Title>
            <Card.Text>
              Декор: сахарная фотопечать, конфеты "Ferrero Rocher", топпер.

              Вес: 2 кг.
              Стоимость: 3100 руб.

              ❗На первый заказ скидка - 10%
              для заказа пишите в ЛС
            </Card.Text>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://sun9-31.userapi.com/impg/vraWsJU26-xFSxno9wgAceigg1t0LcHr0LW15A/oXlH8eRq_7Y.jpg?size=1042x1600&quality=95&sign=d06ecdb8fac25471cf33b9b12ca88d80&type=album" />
          <Card.Body>
            <Card.Title>Торт "Красный Бархат"</Card.Title>
            <Card.Text>
              Декор: сахарная фотопечать, конфеты "Ferrero Rocher", топпер.

              Вес: 2 кг.
              Стоимость: 3100 руб.

              ❗На первый заказ скидка - 10%
              для заказа пишите в ЛС
            </Card.Text>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://sun9-31.userapi.com/impg/vraWsJU26-xFSxno9wgAceigg1t0LcHr0LW15A/oXlH8eRq_7Y.jpg?size=1042x1600&quality=95&sign=d06ecdb8fac25471cf33b9b12ca88d80&type=album" />
          <Card.Body>
            <Card.Title>Торт "Красный Бархат"</Card.Title>
            <Card.Text>
              Декор: сахарная фотопечать, конфеты "Ferrero Rocher", топпер.

              Вес: 2 кг.
              Стоимость: 3100 руб.

              ❗На первый заказ скидка - 10%
              для заказа пишите в ЛС
            </Card.Text>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://sun9-31.userapi.com/impg/vraWsJU26-xFSxno9wgAceigg1t0LcHr0LW15A/oXlH8eRq_7Y.jpg?size=1042x1600&quality=95&sign=d06ecdb8fac25471cf33b9b12ca88d80&type=album" />
          <Card.Body>
            <Card.Title>Торт "Красный Бархат"</Card.Title>
            <Card.Text>
              Декор: сахарная фотопечать, конфеты "Ferrero Rocher", топпер.

              Вес: 2 кг.
              Стоимость: 3100 руб.

              ❗На первый заказ скидка - 10%
              для заказа пишите в ЛС
            </Card.Text>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://sun9-31.userapi.com/impg/vraWsJU26-xFSxno9wgAceigg1t0LcHr0LW15A/oXlH8eRq_7Y.jpg?size=1042x1600&quality=95&sign=d06ecdb8fac25471cf33b9b12ca88d80&type=album" />
          <Card.Body>
            <Card.Title>Торт "Красный Бархат"</Card.Title>
            <Card.Text>
              Декор: сахарная фотопечать, конфеты "Ferrero Rocher", топпер.

              Вес: 2 кг.
              Стоимость: 3100 руб.

              ❗На первый заказ скидка - 10%
              для заказа пишите в ЛС
            </Card.Text>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://sun9-31.userapi.com/impg/vraWsJU26-xFSxno9wgAceigg1t0LcHr0LW15A/oXlH8eRq_7Y.jpg?size=1042x1600&quality=95&sign=d06ecdb8fac25471cf33b9b12ca88d80&type=album" />
          <Card.Body>
            <Card.Title>Торт "Красный Бархат"</Card.Title>
            <Card.Text>
              Декор: сахарная фотопечать, конфеты "Ferrero Rocher", топпер.

              Вес: 2 кг.
              Стоимость: 3100 руб.

              ❗На первый заказ скидка - 10%
              для заказа пишите в ЛС
            </Card.Text>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://sun9-31.userapi.com/impg/vraWsJU26-xFSxno9wgAceigg1t0LcHr0LW15A/oXlH8eRq_7Y.jpg?size=1042x1600&quality=95&sign=d06ecdb8fac25471cf33b9b12ca88d80&type=album" />
          <Card.Body>
            <Card.Title>Торт "Красный Бархат"</Card.Title>
            <Card.Text>
              Декор: сахарная фотопечать, конфеты "Ferrero Rocher", топпер.

              Вес: 2 кг.
              Стоимость: 3100 руб.

              ❗На первый заказ скидка - 10%
              для заказа пишите в ЛС
            </Card.Text>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://sun9-31.userapi.com/impg/vraWsJU26-xFSxno9wgAceigg1t0LcHr0LW15A/oXlH8eRq_7Y.jpg?size=1042x1600&quality=95&sign=d06ecdb8fac25471cf33b9b12ca88d80&type=album" />
          <Card.Body>
            <Card.Title>Торт "Красный Бархат"</Card.Title>
            <Card.Text>
              Декор: сахарная фотопечать, конфеты "Ferrero Rocher", топпер.

              Вес: 2 кг.
              Стоимость: 3100 руб.

              ❗На первый заказ скидка - 10%
              для заказа пишите в ЛС
            </Card.Text>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://sun9-31.userapi.com/impg/vraWsJU26-xFSxno9wgAceigg1t0LcHr0LW15A/oXlH8eRq_7Y.jpg?size=1042x1600&quality=95&sign=d06ecdb8fac25471cf33b9b12ca88d80&type=album" />
          <Card.Body>
            <Card.Title>Торт "Красный Бархат"</Card.Title>
            <Card.Text>
              Декор: сахарная фотопечать, конфеты "Ferrero Rocher", топпер.

              Вес: 2 кг.
              Стоимость: 3100 руб.

              ❗На первый заказ скидка - 10%
              для заказа пишите в ЛС
            </Card.Text>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://sun9-31.userapi.com/impg/vraWsJU26-xFSxno9wgAceigg1t0LcHr0LW15A/oXlH8eRq_7Y.jpg?size=1042x1600&quality=95&sign=d06ecdb8fac25471cf33b9b12ca88d80&type=album" />
          <Card.Body>
            <Card.Title>Торт "Красный Бархат"</Card.Title>
            <Card.Text>
              Декор: сахарная фотопечать, конфеты "Ferrero Rocher", топпер.

              Вес: 2 кг.
              Стоимость: 3100 руб.

              ❗На первый заказ скидка - 10%
              для заказа пишите в ЛС
            </Card.Text>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://sun9-31.userapi.com/impg/vraWsJU26-xFSxno9wgAceigg1t0LcHr0LW15A/oXlH8eRq_7Y.jpg?size=1042x1600&quality=95&sign=d06ecdb8fac25471cf33b9b12ca88d80&type=album" />
          <Card.Body>
            <Card.Title>Торт "Красный Бархат"</Card.Title>
            <Card.Text>
              Декор: сахарная фотопечать, конфеты "Ferrero Rocher", топпер.

              Вес: 2 кг.
              Стоимость: 3100 руб.

              ❗На первый заказ скидка - 10%
              для заказа пишите в ЛС
            </Card.Text>

          </Card.Body>
        </Card>







        <Routes>

          {/* <Route path='/' element={<CakeElement modalShow={modalShow} setModalShow={setModalShow} />} /> */}

          {/* <Route path='/info' element={<PageInfo />} /> */}

          {/* <Route path='*' element={<Page404 />} /> */}

        </Routes>


      </div>


    </div>
  );
}

export default App;
