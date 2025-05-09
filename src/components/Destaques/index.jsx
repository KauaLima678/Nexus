import React from "react";
import style from "./style.module.css";
import EldenBanner from "../../images/Elden Banner.png";
import RDR2 from "../../images/Red Dead ban.jpg";
import { IoMdDownload } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import games from "../data/games";
import { useNavigate } from "react-router-dom";

export default function Destaques() {
  return (
    <section className={style.destaques}>
      <h2>RECENTES</h2>
      <div className={style.postsContainer}>
        <article className={style.postCard}>
          <img src={EldenBanner} alt="Análise Completa de GTA6" />
          <div className={style.postContent}>
            <h3 className={style.title}>ELDEN RING</h3>
            <p className={style.resumo}>
              Em Elden Ring os jogadores percorrem livremente pelo mundo aberto
              interativo, onde os elementos de jogabilidade incluem combate, com
              vários tipos de armas e feitiços mágicos.
            </p>
            <div className={style.postInfo}></div>
            <div className={style.botoes}>
              <a href="/games/9" className={`${style.download} ${style.botao}`}>
                Download <IoMdDownload />
              </a>
              <a href="/games/9" className={`${style.info} ${style.botao}`}>
                Ver mais <IoIosInformationCircle />
              </a>
            </div>
          </div>
        </article>
        <article className={style.postCard}>
          <img src={RDR2} alt="Novidades em God of War: Um Novo Capítulo?" />
          <div className={style.postContent}>
            <h3 className={style.title}>RED DEAD REDEMPTION II</h3>
            <p className={style.resumo}>
              Depois de tudo dar errado em um roubo na cidade de Blackwater, no
              faroeste, Arthur Morgan e a gangue Van der Linde são obrigados a
              fugir e lutar para sobreviver no implacável coração dos Estados
              Unidos..
            </p>
            <div className={style.postInfo}></div>
            <div className={style.botoes}>
              <a href="/games/5" className={`${style.download} ${style.botao}`}>
                Download <IoMdDownload />
              </a>
              <a href="/games/5" className={`${style.info} ${style.botao}`}>
                Ver mais <IoIosInformationCircle />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
