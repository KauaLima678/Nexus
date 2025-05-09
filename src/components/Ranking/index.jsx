import React from "react";
import style from "./style.module.css";
import Prey from '../../images/CapasRanking/prey.png'
import Gta5 from '../../images/CapasRanking/Gta5.png'
import Hollow from '../../images/CapasRanking/Hollow.png'
import Border from '../../images/CapasRanking/Border.png'
import Stardew from '../../images/CapasRanking/Stardew.png'
import Skyrim from '../../images/CapasRanking/Skyrim.png'
import Tunic from '../../images/CapasRanking/Tunic.png'
import FR3 from '../../images/CapasRanking/FR3.png'
import DRS3 from '../../images/CapasRanking/DRS3.png'
import Fl3 from '../../images/CapasRanking/Fallout3.png'
import Celeste from '../../images/CapasRanking/Celeste.png'
import ML11 from '../../images/CapasRanking/Mk11.png'
import { MdOutlineFileDownload } from "react-icons/md";


function Ranking() {
  const topGames = [
    {
      nome: "GTA 5",
      avaliacao: 9.4,
      imagem: Gta5,
    },
    {
      nome: "Skyrim",
      avaliacao: 9.1,
      imagem: Skyrim,
    },
    {
      nome: "Hollow Knight",
      avaliacao: 9.1,
      imagem: Hollow,
    },
    {
      nome: "Prey",
      avaliacao: 8.9,
      imagem: Prey,
    },
    {
      nome: "Tunic",
      avaliacao: 8.7,
      imagem: Tunic,
    },
    {
      nome: "Dark Sous 3",
      avaliacao: 8.6,
      imagem: DRS3,
    },
    {
      nome: "Stardew Valley",
      avaliacao: 8.6,
      imagem: Stardew,
    },
    {
      nome: "Bordererlands 2",
      avaliacao: 8.4,
      imagem: Border,
    },
    {
      nome: "Far Cry 3",
      avaliacao: 8.2,
      imagem: FR3,
    },
    {
      nome: "Fallout 3",
      avaliacao: 8.2,
      imagem: Fl3,
    },
    {
      nome: "Celeste",
      avaliacao: 8.0,
      imagem: Celeste,
    },
    {
      nome: "Mortal Kombate 11",
      avaliacao: 7.7,
      imagem: ML11,
    },
  ];


  return (
    <section className={style.topJogos}>
      <ul className={style.gamesGrid}>
        {topGames.map((game, index) => (
          <li key={index} className={style.gameItem}>
            <div className={style.thumbnailWrapper}>
              <img
                src={game.imagem}
                alt={game.nome}
                className={style.thumbnail}
              />
            </div>
            <div className={style.info}>
              <span className={style.posicao}>{index + 4}º</span>
              <span className={style.nome}>{game.nome}</span>
              <span className={style.avaliacao}>Nota: {game.avaliacao}</span>
              <button>Download <MdOutlineFileDownload size={25} color='#000000'/> </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Ranking;
