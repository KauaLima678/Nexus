import { useEffect, useRef, useState,  } from "react";
import Header from "../components/Header";
import Hero from "../components/hero";
import Destaque from "../components/Destaques";
import Categorias from "../components/Categorias";
import Footer from "../components/Footer";
import style from "../styles/home.module.css";
import games from "../components/data/games";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward, IoMdDownload } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const [favoritos, setFavoritos] = useState({});
  const [animando, setAnimando] = useState(true);
  const [startIndexPopulares, setStartIndexPopulares] = useState(0);
const [startIndexMaisBaixados, setStartIndexMaisBaixados] = useState(0);

  const timeoutRef = useRef(null);

  const toggleFavorito = (id) => {
    setFavoritos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  


  // Populares
const nextSlidePopulares = () => {
  if (startIndexPopulares + visibleCount < jogosPopulares.length) {
    setStartIndexPopulares(startIndexPopulares + 1);
  } else {
    setStartIndexPopulares(0);
  }
};

const prevSlidePopulares = () => {
  if (startIndexPopulares > 0) {
    setStartIndexPopulares(startIndexPopulares - 1);
  }
};

// Mais Baixados
const nextSlideMaisBaixados = () => {
  if (startIndexMaisBaixados + visibleCount < MaisBaixados.length) {
    setStartIndexMaisBaixados(startIndexMaisBaixados + 1);
  } else {
    setStartIndexMaisBaixados(0);
  }
};

const prevSlideMaisBaixados = () => {
  if (startIndexMaisBaixados > 0) {
    setStartIndexMaisBaixados(startIndexMaisBaixados - 1);
  }
};

    const [visibleCount, setVisibleCount] = useState(4); // padrão: 4 jogos visíveis

// 👇 depois disso você pode usar visibleCount
const jogosPopulares = games.filter((game) => game.populares);
const visibleGames = jogosPopulares.slice(startIndexPopulares, startIndexPopulares + visibleCount);

const MaisBaixados = games.filter((game) => game.maisBaixados);
const maisBaixadosGames = MaisBaixados.slice(startIndexMaisBaixados, startIndexMaisBaixados + visibleCount);


useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 901) {
      setVisibleCount(2);
    } else {
      setVisibleCount(4);
    }
  };

  // Executar na primeira montagem
  handleResize();

  // Atualizar ao redimensionar
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  
  
  return (
    <>
      <Header />
      <h1 className={style.CarrosselTitle}>Destaques</h1>
      <Hero />

      <div className={style.navigation}>
      <h1 className={style.CarrosselGamesTitle}>Populares da semana</h1>
      <div  className={style.btnNav}>
      <button className={style.arrow} onClick={prevSlidePopulares}><IoIosArrowBack /></button>
      <button className={style.arrow} onClick={nextSlidePopulares}><IoIosArrowForward /></button>
      </div>
</div>

      <div className={style.ContGames}>

        <div className={style.carrossel} >
          {visibleGames.map((game) => (
            <div key={game.id} className={style.game} >
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

        
      </div>

      <div className={style.navigation}>
      <h1 className={style.CarrosselGamesTitle}>Mais Baixados</h1>
      <div  className={style.btnNav}>
      <button className={style.arrow} onClick={prevSlideMaisBaixados}><IoIosArrowBack /></button>
      <button className={style.arrow} onClick={nextSlideMaisBaixados}><IoIosArrowForward /></button>
      </div>
</div>

      <div className={style.ContGames}>

        <div className={style.carrossel}>
          {maisBaixadosGames.map((game) => (
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
                <a href="#" className={`${style.download} ${style.botao}`}>
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

        
      </div>

     
      <Destaque />
      <Categorias />
      <Footer />
    </>
  );
}
