import Header from "../components/Header";
import style from "../styles/user.module.css";
import User from "../images/Perfil.jpg";
import Zelda from "../images/Zelda.avif";
import Elden from "../images/EldenRing.jpg";
import Palword from "../images/Palword.jpg";
import RedDead from "../images/Red Dead ban.jpg";
import Metal from "../images/MetalGear.jpg";
import RE4 from "../images/Resident Evil.jpg";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FaHourglass, FaPlay } from "react-icons/fa";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Perfil() {
  const navigate = useNavigate();

  const [inputOpen, setInputOpen] = useState(false);

  return (
    <>
      <Header />
      <section className={style.main}>
        <button className={style.logout}>Logout</button>

        <div className={style.profileCont}>
          <div className={style.profile}>
            <img src={User} alt="User" className={style.profileImg} />
            <div className={style.infoUser}>
              <div className={style.nameEdit}>
              <h2>
                Ronaldo
              </h2>
                <button className={style.edit} onClick={() =>  setInputOpen((prev) => !prev)}>
                  <MdEdit color="#fff" />
                </button>
              </div>
              
              <p>#6969</p>
            </div>
          </div>
        </div>

        {inputOpen && (
          <div className={style.container}>
            <div className={style.inputCont}>
              <h1>Nome: </h1>
              <input type="text" className={style.LogoutInput} placeholder="" />
            </div>

            <div className={style.inputCont}>
              <h1>E-mail: </h1>
              <input
                type="text"
                className={style.LogoutInput}
                placeholder="Exemplo123@gmail.com"
              />
            </div>

            <div className={style.inputCont}>
              <h1>Senha: </h1>
              <input
                type="password"
                className={style.LogoutInput}
                placeholder="*******"
              />
            </div>

            <div className={style.inputCont}>
              <h1>Telefone: </h1>
              <input
                type="text"
                className={style.LogoutInput}
                placeholder="(99) 9999-9999"
              />
            </div>
          </div>
        )}

        <div className={style.gameHistory}>
          <h3>Histórico de Jogos</h3>
          <div className={style.gameContent}>
            <div className={style.game}>
              <img src={Zelda} alt="" />
              <div className={style.gameInfo}>
                <h1>The legend of Zelda tears of the kingdom</h1>
                <div className={style.gameTime}>
                  <p>
                    <span>
                      <FaHourglass size={15} />
                    </span>
                    Tempo jogado: 36:34 Horas
                  </p>
                  <a href="" className={style.botao}>
                    Iniciar
                    <FaPlay size={13} />
                  </a>
                </div>
              </div>
            </div>
            <div className={style.game}>
              <img src={Elden} alt="" />
              <div className={style.gameInfo}>
                <h1>Elden Ring</h1>
                <div className={style.gameTime}>
                  <p>
                    <span>
                      <FaHourglass size={15} />
                    </span>
                    Tempo jogado: 28:57 Horas
                  </p>
                  <a href="" className={style.botao}>
                    Iniciar
                    <FaPlay size={13} />
                  </a>
                </div>
              </div>
            </div>
            <div className={style.game}>
              <img src={RedDead} alt="" />
              <div className={style.gameInfo}>
                <h1>Red Dead Demption II</h1>
                <div className={style.gameTime}>
                  <p>
                    <span>
                      <FaHourglass size={15} />
                    </span>
                    Tempo jogado: 27:17 Horas
                  </p>
                  <a href="" className={style.botao}>
                    Iniciar
                    <FaPlay size={13} />
                  </a>
                </div>
              </div>
            </div>
            <div className={style.game}>
              <img src={Palword} alt="" />
              <div className={style.gameInfo}>
                <h1>Palworld</h1>
                <div className={style.gameTime}>
                  <p>
                    <span>
                      <FaHourglass size={15} />
                    </span>
                    Tempo jogado: 24:06 Horas
                  </p>
                  <a href="" className={style.botao}>
                    Iniciar
                    <FaPlay size={13} />
                  </a>
                </div>
              </div>
            </div>
            <div className={style.game}>
              <img src={Metal} alt="" />
              <div className={style.gameInfo}>
                <h1>Metal Gear Rising: Revengeance</h1>
                <div className={style.gameTime}>
                  <p>
                    <span>
                      <FaHourglass size={15} />
                    </span>
                    Tempo jogado: 20:02 Horas
                  </p>
                  <a href="" className={style.botao}>
                    Iniciar
                    <FaPlay size={13} />
                  </a>
                </div>
              </div>
            </div>
            <div className={style.game}>
              <img src={RE4} alt="" />
              <div className={style.gameInfo}>
                <h1>Resident Evil 4 Remake</h1>
                <div className={style.gameTime}>
                  <p>
                    <span>
                      <FaHourglass size={15} />
                    </span>
                    Tempo jogado: 16:43 Horas
                  </p>
                  <a href="" className={style.botao}>
                    Iniciar
                    <FaPlay size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
