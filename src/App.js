
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';



import CardCake from './components/cardCake';
import PageInfo from './components/pageInfo';
import CategoryCake from './components/categoryCake';
import Page404 from './components/page404';




function App() {

  const [modalShow, setModalShow] = useState(false);





  return (
    <div className="App">

      <div className='Header'> header info </div>


      <div className='NavBar'>
        <CategoryCake />

      </div>


      <div className='Content'>

        <CardCake modalShow={modalShow} setModalShow={setModalShow} />
        {/* <PageInfo /> */}
        {/* <Page404/> */}

      </div>


    </div>
  );
}

export default App;
