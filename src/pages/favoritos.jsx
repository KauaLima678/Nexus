import style from "../styles/fav.module.css";
import Header from "../components/Header";
import games from "../components/data/games";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoIosInformationCircle, IoMdDownload } from "react-icons/io";
import Footer from "../components/Footer";

export default function Favoritos() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <section className={style.containerFav}>
        <h1 className={style.title}>Favoritos</h1>

        <div className={style.ContGames}>
          {games
            .slice(0, 4)

            .map((game) => (
              <div key={game.id} className={style.game}>
                <img src={game.imagem} alt={game.nome} />
                <div className={style.btnFav}>
                  <FaHeart size={14} color="#ff2828" />
                </div>
                <h1>{game.nome}</h1>
                <p>{game.genero}</p>
                <div className={style.icons}>
                  {game.plataformas.map((plataforma, index) => (
                    <span key={index}>{plataforma.icone}</span>
                  ))}
                </div>
                <div className={style.botoes}>
                  <a href="#" className={`${style.download} ${style.botao}`}>
                    Download <IoMdDownload />
                  </a>
                  <a
                    href="#"
                    onClick={() => navigate(`/games/${game.id}`)}
                    className={`${style.info} ${style.botao}`}
                  >
                    Ver mais <IoIosInformationCircle />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
