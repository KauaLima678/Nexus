import style from "./style.module.css";
import games from "../data/games";
import MilesBanner from "../../images/CarrosselImgs/MilesBanner.avif";
import LogoMiles from "../../images/CarrosselImgs/Logo Miles.png";
import LogoInsonamic from "../../images/CarrosselImgs/Insomniacwhite.png";
import AssassinBanner from "../../images/CarrosselImgs/Assassin Banner.jpg";
import AssassinLogo from "../../images/CarrosselImgs/Logo assassin.png";
import Ubisoft from "../../images/CarrosselImgs/Ubisoft Logo.webp";
import EldenBanner from "../../images/CarrosselImgs/Elden Banner.png";
import EldenLogo from "../../images/CarrosselImgs/Elden Logo.png";
import Bandai from "../../images/CarrosselImgs/Bandai Logo.png";
import MK1 from "../../images/CarrosselImgs/Mk1 Banner.png";
import MK1Logo from "../../images/CarrosselImgs/MK1 logo.png";
import NetherRealm from "../../images/CarrosselImgs/NetherRealm.png"
import { MdOutlineFileDownload } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Carrossel() {
  const slides = [
    {
      id: 1,
      banner: MilesBanner,
      logoSrc: LogoMiles,
      Nota: 4.8,
      descricao:
        "Miles Morales, o novo Homem-Aranha, luta para se adaptar a sua nova vida, enquanto enfrenta uma ameaça que coloca seu lar e tudo o que ele ama em perigo, forçando-o a aceitar seu destino como herói.",
      logo: LogoInsonamic,
      botoes: true,
      backgroundGradient: "#AF0513",
    },
    {
      id: 4,
      banner: AssassinBanner,
      logoSrc: AssassinLogo,
      Nota: 4.8,
      descricao:
        "Viva uma história épica de ação e aventura ambientada no Japão feudal! Torne-se uma assassina shinobi letal e um poderoso samurai lendário enquanto explora um mundo aberto maravilhoso em tempos caóticos.",
      logo: Ubisoft,
      botoes: true,
      backgroundGradient: "#AF0513",
    },
    {
      id: 9,
      banner: EldenBanner,
      logoSrc: EldenLogo,
      Nota: 4.5,
      descricao:
        "Desvende os mistérios do poder do Elden Ring. Encontre adversários com origens profundas, personagens com motivações próprias únicas para ajudar ou dificultar seu progresso e criaturas assustadoras.",
      logo: Bandai,
      botoes: true,
      backgroundGradient: "#AF0513",
    },
    {
      id: 28,
      banner: MK1,
      logoSrc: MK1Logo,
      Nota: 4.6,
      descricao:
        "Descubra um renascido Universo de Mortal Kombat™ criado pelo Deus do Fogo Liu Kang. Mortal Kombat™ 1 inaugura uma nova era da franquia icônica com um novo sistema de luta, modos de jogo e fatalities!",
      logo: NetherRealm,
      botoes: true,
      backgroundGradient: "#AF0513",
    },
  ];
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [animando, setAnimando] = useState(true);
  const timeoutRef = useRef(null);

  const irParaProximo = () => {
    if (indiceAtual === slides.length - 1) {
      // Desativa animação, zera índice depois do tempo da transição
      setAnimando(true);
      setIndiceAtual(slides.length); // move visualmente pra fora
      timeoutRef.current = setTimeout(() => {
        setAnimando(false); // desativa transição
        setIndiceAtual(0); // reseta índice para 0
      }, 500); // tempo da transição em ms
    } else {
      setAnimando(true);
      setIndiceAtual((prev) => prev + 1);
    }
  };

  const irParaAnterior = () => {
    if (indiceAtual === 0) {
      // Desativa animação, pula pro último sem transição
      setAnimando(false);
      setIndiceAtual(slides.length - 1);
    } else {
      setAnimando(true);
      setIndiceAtual((prev) => prev - 1);
    }
  };

  // Limpando timeouts se desmontar o componente
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const navigate = useNavigate();

  return (
    <div className={style.carrosselContainer}>
      <button className={style.btnAnterior} onClick={irParaAnterior}>
        <FaChevronLeft color="#fff" size={50} />
      </button>
      

      <div className={style.carrosselSlideWrapper}>
        <div
          className={style.carrosselSlide}
          style={{
            transform: `translateX(-${indiceAtual * 100}%)`,
            transition: animando ? "transform 0.8s ease" : "none",
          }}
        >
          {slides.map((slide, index) => (
            <div className={style.containerHero} key={index}>
              <div className={style.conteudo}>
                <div className={style.logoContent}>
                <img src={slide.logoSrc} alt="Logo" height="92px" className={style.logoSrc} />

                </div>
                <p>{slide.descricao}</p>
                <div className={style.notaContent}>
                  <span>Nota: {slide.Nota}</span>
                  <img src={slide.logo} alt="Logo" className={style.devLogo} />
                </div>

                <div className={style.botoes}>
                  <div className={`${style.botaoDownload} ${style.botao}`}>
                    <MdOutlineFileDownload size={25} />
                    <a href={`/games/${slide.id}`}>DOWNLOAD</a>
                    </div>
                    <div className={`${style.botaoInfo} ${style.botao}`}>
                    <IoIosInformationCircle />
                    <a
                      href={`/games/${slide.id}`}
                      className={style.info}
                    >
                      Ver mais 
                    </a>
                  </div>
                </div>
              </div>
              <div className={style.BannerContainer}>
                <img className={style.banner} src={slide.banner}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className={style.btnProximo} onClick={irParaProximo}>
        <FaChevronRight color="#fff" size={50} />
      </button>
      <div className={style.dotsContainer}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${style.dot} ${indiceAtual === index ? style.activeDot : ''}`}
            onClick={() => {
              setAnimando(true);
              setIndiceAtual(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
