
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';



import CardCake from './components/cardCake';



function App() {

  const [modalShow, setModalShow] = useState(false);





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

        <CardCake modalShow={modalShow} setModalShow={setModalShow} />

      </div>


    </div>
  );
}

export default App;
