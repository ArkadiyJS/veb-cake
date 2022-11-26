import React from 'react';
import s from './page404.module.css'
function Page404(props) {
  return (
    <div className={s.notFound}>
      <div className={s.smail}>😕</div>
      <span className={s.spanText}>Такой страницы несуществует</span>
      <p className={s.description}>к сожалении данная страница отсутствует </p>
    </div>
  );
}

export default Page404;