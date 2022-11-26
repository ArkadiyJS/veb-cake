import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardCake from './components/cardCake';
import PageInfo from './components/pageInfo';
import CategoryCake from './components/categoryCake';
import Page404 from './components/page404/page404';
import { NavLink, Route, Routes } from 'react-router-dom';





function App() {

  const [modalShow, setModalShow] = useState(false);





  return (
    <div className="App">

      <div className='Header'>

        <NavLink to='/info'>как заказать?</NavLink>
        header info

      </div>


      <div className='NavBar'>

        <CategoryCake />

      </div>


      <div className='Content'>


        <Routes>

          <Route path='/' element={<CardCake modalShow={modalShow} setModalShow={setModalShow} />} />

          <Route path='/info' element={<PageInfo />} />

          <Route path='*' element={<Page404 />} />

        </Routes>


      </div>


    </div>
  );
}

export default App;
