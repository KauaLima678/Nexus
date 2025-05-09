import React, { useState } from "react"; // Importando useState
import Header from "../components/Header";
import style from "../styles/catalogo.module.css";
import Banner from "../images/Catalogo img.png";
import games from "../components/data/games";
import { useNavigate } from "react-router-dom";
import { IoIosInformationCircle, IoMdDownload } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Carrossel from "../components/carrosselCatalog";

export default function Catalogo() {
  const navigate = useNavigate();

  const [favoritos, setFavoritos] = useState({});

  const toggleFavorito = (id) => {
    setFavoritos((prev) => ({
      ...prev,
      [id]: !prev[id], // Inverte o estado (favoritado ou não)
    }));
  };

  return (
    <>
      <Header />
      <div className={style.container}>
        <Carrossel />

        <section className={style.jogosCategoria}>
          <div className={style.sectionTitle}>
            <h1 className={style.title}>Ação</h1>
            <span>Ver mais..</span>
          </div>
          <div className={style.ContGames}>
            {games
              .filter((game) => game.categoria === "Ação")
              .map((game) => (
                <div key={game.id} className={style.game}>
                  <img src={game.imagem} alt={game.nome} />
                  <div
                    className={style.btnFav}
                    onClick={() => toggleFavorito(game.id)}
                  >
                    <FaHeart
                      size={14}
                      color={favoritos[game.id] ? "red" : "white"}
                    />
                  </div>
                  <h1>{game.nome}</h1>
                  <p>{game.genero}</p>
                  <div className={style.icons}>
                    {game.plataformas.map((plataforma, index) => (
                      <span key={index}>{plataforma.icone}</span>
                    ))}
                  </div>
                  <div className={style.botoes}>
                    <a href={`/games/${game.id}`} className={`${style.download} ${style.botao}`}>
                      Download <IoMdDownload />
                    </a>
                    <a
                      href={`/games/${game.id}`}
                      className={`${style.info} ${style.botao}`}
                    >
                      Ver mais <IoIosInformationCircle />
                    </a>
                  </div>
                </div>
              ))}
          </div>

          <div className={style.sectionTitle}>
            <h1 className={style.title}>RPG</h1>
            <span>Ver mais..</span>
          </div>

          <div className={style.ContGames}>
            {games
              .filter((game) => game.categoria === "RPG")
              .map((game) => (
                <div key={game.id} className={style.game}>
                  <img src={game.imagem} alt={game.nome} />
                  <div
                    className={style.btnFav}
                    onClick={() => toggleFavorito(game.id)}
                  >
                    <FaHeart
                      size={14}
                      color={favoritos[game.id] ? "red" : "white"}
                    />
                  </div>
                  <h1>{game.nome}</h1>
                  <p>{game.genero}</p>
                  <div className={style.icons}>
                    {game.plataformas.map((plataforma, index) => (
                      <span key={index}>{plataforma.icone}</span>
                    ))}
                  </div>
                  <div className={style.botoes}>
  <a href={`/games/${game.id}`} className={`${style.download} ${style.botao}`}>
    Download <IoMdDownload />
  </a>
  <a href={`/games/${game.id}`} className={`${style.info} ${style.botao}`}>
    Ver mais <IoIosInformationCircle />
  </a>
</div>
                </div>
              ))}
          </div>

          <div className={style.sectionTitle}>
            <h1 className={style.title}>Terror</h1>
            <span>Ver mais..</span>
          </div>

          <div className={style.ContGames}>
            {games
              .filter((game) => game.categoria === "Terror")
              .map((game) => (
                <div key={game.id} className={style.game}>
                  <img src={game.imagem} alt={game.nome} />
                  <div
                    className={style.btnFav}
                    onClick={() => toggleFavorito(game.id)}
                  >
                    <FaHeart
                      size={14}
                      color={favoritos[game.id] ? "red" : "white"}
                    />
                  </div>
                  <h1>{game.nome}</h1>
                  <p>{game.genero}</p>
                  <div className={style.icons}>
                    {game.plataformas.map((plataforma, index) => (
                      <span key={index}>{plataforma.icone}</span>
                    ))}
                  </div>
                  <div className={style.botoes}>
                    <a href={`/games/${game.id}`} className={`${style.download} ${style.botao}`}>
                      Download <IoMdDownload />
                    </a>
                    <a
                      href={`/games/${game.id}`}
                      className={`${style.info} ${style.botao}`}
                    >
                      Ver mais <IoIosInformationCircle />
                    </a>
                  </div>
                </div>
              ))}
          </div>
          <div className={style.sectionTitle}>
            <h1 className={style.title}>Aventura</h1>
            <span>Ver mais..</span>
          </div>

          <div className={style.ContGames}>
            {games
              .filter((game) => game.categoria === "Aventura")
              .map((game) => (
                <div key={game.id} className={style.game}>
                  <img src={game.imagem} alt={game.nome} />
                  <div
                    className={style.btnFav}
                    onClick={() => toggleFavorito(game.id)}
                  >
                    <FaHeart
                      size={14}
                      color={favoritos[game.id] ? "red" : "white"}
                    />
                  </div>
                  <h1>{game.nome}</h1>
                  <p>{game.genero}</p>
                  <div className={style.icons}>
                    {game.plataformas.map((plataforma, index) => (
                      <span key={index}>{plataforma.icone}</span>
                    ))}
                  </div>
                  <div className={style.botoes}>
                    <a href={`/games/${game.id}`} className={`${style.download} ${style.botao}`}>
                      Download <IoMdDownload />
                    </a>
                    <a
                      href={`/games/${game.id}`}
                      className={`${style.info} ${style.botao}`}
                    >
                      Ver mais <IoIosInformationCircle />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
