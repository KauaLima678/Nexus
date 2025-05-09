import style from './style.module.css';
import Re4Logo from '../../images/Re4Logo.png';
import RDR2Logo from '../../images/RedDeadLogo.png';
import Roc from '../../images/Rockstar.png';
import Konami from '../../images/Konami.png';
import Detroid from '../../Videos/Detroid.mp4';
import Re4 from '../../Videos/Resident4.mp4';
import RDR2 from '../../Videos/RDR2.mp4';
import DetroidLogo from '../../images/DetroidLo.png';
import Quantic from '../../images/Quantic.png';
import games from '../data/games';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Hero() {

  const navigate = useNavigate()

  const slides = [
    {
      id: 5,
      tipo: 'video',
      videoSrc: RDR2,
      logoSrc: RDR2Logo,
      Nota: 9.8,
      descricao: "Depois de tudo dar errado em um roubo na cidade de Blackwater, no faroeste, Arthur Morgan e a gangue Van der Linde são obrigados a fugir.",
      logo: Roc,
      botoes: true,
      backgroundGradient: '#AF0513',
      color: '#AF0513',
    },
    {
      id: 20,
      tipo: 'video',
      videoSrc: Re4,
      logoSrc: Re4Logo,
      Nota: 9.5,
      descricao: " Leon agora trabalha como agente do governo dos EUA. Ele é enviado a um vilarejo isolado na Europa após relatos da aparição da filha do presidente.",
      logo: Konami,
      botoes: true,
      backgroundGradient: '#1D252C'
    },
    {
      tipo: 'video',
      videoSrc: Detroid,
      logoSrc: DetroidLogo,
      Nota: 9.2,
      descricao: "O jogo se passa em 2036 na cidade de Detroit, que foi revitalizada pela invenção e o uso dos androides no nosso dia a dia. Porém da tudo errado.",
      logo: Quantic,
      botoes: true,
      backgroundGradient: '#576999'
    }
  
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

  const [larguraTela, setLarguraTela] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => setLarguraTela(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <div className={style.carrosselContainer}>
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
      <button className={style.btnAnterior} onClick={irParaAnterior}>
        <FaChevronLeft color='#fff' size={30} />
      </button>

      <div className={style.carrosselSlideWrapper}>
        <div
          className={style.carrosselSlide}
          style={{
            transform: `translateX(-${indiceAtual * 100}%)`,
            transition: animando ? 'transform 0.5s ease' : 'none'
          }}
        >

          {slides.map((slide, index) => (
            <div className={style.containerHero} key={index}>
              <div
                className={style.overlay}
                style={{
    background:
      larguraTela <= 1157
        ? slide.backgroundGradient // cor sólida
        : `linear-gradient(to right, ${slide.backgroundGradient} 20%, rgba(0, 0, 0, 0) 50%)`
  }}
              ></div>

              <div className={style.conteudo}>
                <img src={slide.logoSrc} alt="Logo" width="50%" height="92px" />
                <p>{slide.descricao}</p>
                <span>Nota: {slide.Nota}</span>
                {slide.botoes && (
                  <div className={style.botoes}>
                    <a href={`/games/${slide.id}`} className={style.botaoAssistir}>
                      <MdOutlineFileDownload size={30} color='#FFF' /> DOWNLOAD
                    </a>
                    <button className={style.botaoInfo}>
                      <img src={slide.logo} alt="Logo" />
                    </button>
                  </div>
                )}
              </div>
              <div className={style.videoContainer}>
                <video key={slide.videoSrc} autoPlay loop muted className={style.video}>
                  <source src={slide.videoSrc} type='video/mp4' />
                </video>
              </div>

            </div>
          ))}
        </div>
      </div>
      <button className={style.btnAnterior} onClick={irParaProximo}><FaChevronRight color='#fff' size={30} /></button>
    </div>)
}