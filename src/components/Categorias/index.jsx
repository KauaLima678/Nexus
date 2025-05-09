import React from 'react';
import style from './style.module.css';
import Acao from '../../images/Ação.png'
import Rpg from '../../images/Rpg.png'
import Corrida from '../../images/Corrida.png'
import Indie from '../../images/Indie.png'
import Mais from '../../images/Mais.png'
export default function Categorias() {
  return (
    <section className={style.categorias}>
      <h2>Categorias</h2>
      <div className={style.listaCategorias}>
        <a href="/games"> <div className={style.categoria} style={{ background: `url(${Acao}) no-repeat center center / cover` }}>
            <h3>AÇÃO</h3>
          </div>  </a>
        <a href="/games"> <div className={style.categoria} style={{ background: `url(${Rpg}) no-repeat center center / cover` }}>
          <h3>RPG</h3>
        </div>  </a>
        <a href="/games"> <div className={style.categoria} style={{ background: `url(${Corrida}) no-repeat center center / cover` }}>
          <h3>CORRIDA</h3>
        </div>  </a>
        <a href="/games"> <div className={style.categoria} style={{ background: `url(${Indie}) no-repeat center center / cover` }}>
          <h3>INDIE</h3>
        </div> </a>
        <a href="/games"> <div className={style.categoria} style={{ background: `url(${Mais}) no-repeat center center / cover` }}>
          <h3>MAIS</h3>
        </div>  </a>
      </div>
    </section>
  );
}
