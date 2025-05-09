import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ParticlesBackground from "../components/Particles";
import style from "../styles/about.module.css";
import Logo from "../images/Logo.png";
import Equipe from "../images/Team Nexus.png";
import Kaua from "../images/Kauã.png";
import Facco from "../images/Facco.png";
import Lorena from "../images/Lorena.png";
import { FaLinkedin } from "react-icons/fa";

export default function Sobre() {
  const [showParticles, setShowParticles] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowParticles(window.innerWidth > 391);
    };

    handleResize(); // Chama na montagem
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      {showParticles && <ParticlesBackground />}
      <section className={style.sobre}>
        <h1 className={style.title}>
          Equipe <img src={Logo} alt="" />
        </h1>
        <div className={style.cont}>
          <div className={style.history}>
            <h1 className={style.titleSobre}>Sobre nós</h1>
            <p>
              A Nexus surgiu da união de três entusiastas —{" "}
              <span>Kauã Lima</span>, <span>Rafael Facco</span> e{" "}
              <span>Lorena Godoy</span> — com a missão de conectar jogadores aos
              melhores conteúdos do universo gamer. Criamos uma plataforma
              acessível, prática e confiável, com foco em usabilidade, curadoria
              de qualidade e constante atualização.
            </p>
            <p>
              Mais do que informar, buscamos fortalecer uma comunidade engajada
              e diversa, oferecendo uma experiência digital que valoriza
              conforto, interatividade e representatividade. Com dedicação e
              profissionalismo, a Nexus vai além do entretenimento, promovendo
              conexões reais, inovação e excelência.
            </p>
          </div>
          <img src={Equipe} alt="Equipe Nexus" className={style.nexusTeam} />
        </div>

        <div className={style.devs}>
            <h1 className={style.devTitle}>Desenvolvedores</h1>

            <div className={style.dev}>
                <img src={Kaua} alt="" />
                <div className={style.devInfo}>
                    <h1>Kauã Lima - <span>Scrum Master</span></h1>

                    <h3>À frente da Nexus, Kauã Lima é o cérebro por trás do projeto. Extrovertido e sempre cheio de ideias, ele combina sua paixão por games com uma dedicação incansável para tornar a Nexus a melhor plataforma possível. Com uma visão clara e espírito de liderança, ele inspira a equipe a inovar e entregar a melhor experiência para a comunidade gamer.</h3>

                    <a href="www.linkedin.com/in/kauãlima" className={style.btn}><FaLinkedin />Linkedin</a>
                </div>
            </div>

            <div className={style.devInvert}>
                
                <div className={style.devInfo}>
                    <h1>Rafael Facco - <span>Desenvolvedor</span></h1>

                    <h3>Rafael Facco foi uma peça essencial no desenvolvimento da Nexus. Extrovertido, dedicado e sempre trazendo soluções criativas, ele transforma ideias em realidade com sua paixão por tecnologia e games. Com um olhar inovador, ajuda a construir uma plataforma intuitiva e dinâmica, garantindo a melhor experiência para a comunidade gamer.</h3>

                    <a href="" className={style.btn}><FaLinkedin />Linkedin</a>
                </div>
                <img src={Facco} alt="" />
            </div>

            <div className={style.dev}>
                <img src={Lorena} alt="" />
                <div className={style.devInfo}>
                    <h1>Lorena Godoy - <span>Desenvolvedora</span></h1>

                    <h3>Lorena Godoy é a mente criativa por trás do design da Nexus. Centrada e objetiva, ela combina estética e funcionalidade para criar uma experiência visual atraente e intuitiva. Com um olhar detalhista e habilidades em desenvolvimento, garante que cada elemento do site seja tão bonito quanto eficiente, proporcionando aos gamers uma navegação fluida e envolvente.</h3>

                    <a href="" className={style.btn}><FaLinkedin />Linkedin</a>
                </div>
            </div>
        </div>
            <div className={style.sobreProjeto}>
        <h1 className={style.projetoTitle}>Sobre nosso projeto</h1>
                <p>O Nexus é um projeto desenvolvido como parte do nosso curso, onde recebemos o desafio de criar uma aplicação front-end com React, baseada no tema torrent de jogos. O objetivo foi construir uma interface moderna e intuitiva, focada na experiência do usuário, sem funcionalidades ativas.</p>
                <p>Durante o desenvolvimento, aplicamos conceitos essenciais de design, responsividade e estruturação de componentes, explorando boas práticas no desenvolvimento de interfaces web. O projeto reflete nosso aprendizado e dedicação, resultando em um site visualmente atrativo e pronto para futuras implementações.</p>
            </div>

            <div className={style.langsCont}>
              <h1 className={style.langsTitle}>Tecnologias utilizadas</h1>
                <div className={style.lang}>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>React Js</span>
                </div>
            </div>

        
      </section>
      <Footer />
    </>
  );
}
