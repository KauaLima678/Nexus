import games from "../components/data/games";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import style from "../styles/details.module.css";
import { IoMdArrowBack, IoMdDownload } from "react-icons/io";
import { FaArrowLeft, FaDownload, FaHeart, FaPause, FaPlay, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import { useState} from "react";

export default function DetalheJogo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const game = games.find((game) => game.id === parseInt(id));



  return (
    <>
      <Header />

      <div className={style.container}>

      <button className={style.backButton} onClick={() => navigate(-1)}><FaArrowLeft /></button>
      
        {game ? (
          <div key={game.id} className={style.game}>
            <div className={style.gameMain}>
              <h1 className={style.gameName}>{game.nome}</h1>

              <div className={style.videoContent}>
                <video
                  controls
                  src={game.banner}
                  className={style.video}
                  autoPlay
                  muted
                  loop
                ></video>
              </div>

              <p className={style.gameDesc}>{game.descricao}</p>
              <div className={style.gameTags}>
                <div className={style.generos}>
                  <h3>Gêneros</h3>
                  <div className={style.cont}>
                    <span>{game.genero}</span>
                    <span>{game.categoria}</span>
                  </div>
                </div>
                <div className={style.line}></div>
                <div className={style.recursos}>
                  <h3>Recursos</h3>
                  <div className={style.cont}>
                    {game.recursos.map(({ recurso }, index) => (
                      <span key={index}>{recurso}</span>
                    ))}
                    {/* { Recurso } = para cada item no array recursos, extraia a propriedade recurso diretamente.  */}
                  </div>
                </div>
              </div>
              <h3 className={style.title2}>{game.nome}</h3>
              <p className={style.gameHistory}>{game.sobre}</p>
            </div>
            <div className={style.gameInfosCont}>
            <div className={style.gameInfos}>
              <div className={style.rateCont}>
                <span className={style.rate}>{game.nota}</span>
                <div className={style.rateIcons}>
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                </div>
              </div>

              <div className={style.gameBoxClass}>
                <div className={style.class}>
                  <img src={game.classificacaoIcon} alt={game.classificacao} />
                  <div className={style.classText}>
                    <span className={style.titleClass}>
                      {game.classificacao}
                    </span>
                    <span className={style.caution}>{game.caution}</span>
                  </div>
                </div>
              </div>

              <div className={style.buttonCont}>
                <a href="#" className={`${style.button} ${style.download}`}>
                  Download <IoMdDownload />
                </a>
                <a href="#" className={`${style.button} ${style.favorito}`}>
                  Adicionar aos Favoritos <FaHeart />
                </a>
              </div>

              <div className={style.credits}>
                <div className={style.credit}>
                  <span className={style.titleCredit}>Desenvolvedora</span>
                  <div className={style.desenv}>
                    <p>{game.desenvolvedora}</p>
                  </div>
                </div>
                <div className={style.credit}>
                  <span className={style.titleCredit}>Editora</span>
                  <p>{game.editora}</p>
                </div>
                <div className={style.credit}>
                  <span className={style.titleCredit}>Data de lançamento</span>
                  <p>{game.data}</p>
                </div>
                <div className={style.credit}>
                  <span className={style.titleCredit}>Plataformas</span>
                  <div className={style.iconsCont}>
                    {game.plataformas.map((plataforma, index) => (
                      <span key={index} className={style.icon}>
                        {plataforma.icone}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </div>
            
          </div>
        ) : (
          <p>Jogo não encontrado.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
