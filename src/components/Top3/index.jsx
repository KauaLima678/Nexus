import React from "react";
import style from "./style.module.css";
import RedDeadLogo from '../../images/RedDeadLogo.png'
import ElderLogo from '../../images/ElderRingLogo.png'
import CyberLogo from '../../images/CyberLogo.png'
import { MdOutlineFileDownload } from "react-icons/md";
import {IoMdDownload } from "react-icons/io";


function Ranking() {
  const topGames = [
    {
      avaliacao: 9.8,
      imagem: RedDeadLogo,
      backgroundClass: style.bgRedDead,
    },
    {
      avaliacao: 9.6,
      imagem: ElderLogo,
      backgroundClass: style.bgGodOfWar,
    },
    {
      avaliacao: 9.4,
      imagem: CyberLogo,
      backgroundClass: style.bgEldenRing,
    },
  ];


  return (
    <section className={style.topJogos}>
      <ul className={style.gamesGrid}>
        {topGames.map((game, index) => (
          <li key={index} className={`${style.gameItem} ${game.backgroundClass}`}>
            <div className={style.thumbnailWrapper}>
              <img
                src={game.imagem}
                alt={game.nome}
                className={style.thumbnail}
              />
            </div>
            <div className={style.info}>
              <span className={style.posicao}>{index + 1}º</span>
              <span className={style.avaliacao}>Nota: {game.avaliacao}</span>
              <a href="/games/5" className={`${style.download} ${style.botao}`}>
                  Download <IoMdDownload />
                </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Ranking;