import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './page404.module.css'

function Page404(props) {
  return (
    <div className={s.container}>
      <div className={s.notFound}>
        <div className={s.smail}>😕</div>
        <span className={s.spanText}>Такой страницы несуществует</span>
        <p className={s.description}>к сожалении данная страница отсутствует </p>
        <NavLink to='/' > <button className={s.button}>Вернуться на главную</button></NavLink>
      </div>
    </div>
  );
}

export default Page404;