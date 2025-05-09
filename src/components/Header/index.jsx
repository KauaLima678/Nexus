import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { TbWorldStar } from "react-icons/tb";
import { IoIosSearch, IoMdInformationCircleOutline } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import Logo from "../../images/Logo.png";
import style from "./style.module.css";
import User from "../../images/Perfil.jpg";
import { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";

export default function Header() {
  const [menuLateral, setMenuLateral] = useState(false);
  const [fechandoMenu, setFechandoMenu] = useState(false);
  const [pesquisar, setPesquisar] = useState(false);
  const [login, setLogin] = useState(false);

  const fecharMenu = () => {
  setFechandoMenu(true);
  setTimeout(() => {
    setMenuLateral(false);
    setFechandoMenu(false);
  }, 300); // Tempo da animação (deve bater com o CSS)
};

  return (
    <>
      <header>
        <button onClick={() => setMenuLateral(true)} className={style.menuIcon}>
          <LiaBarsSolid color="#fff" />
        </button>
        <a href="/"><img src={Logo} alt="" width="150px" /></a>
        <div className={style.busca}>
          <input type="text" placeholder="Search..." />
          <IoIosSearch size={20} color="#FFFFFF" />
        </div>
        <div className={style.userContainer}>
          <img src={User} alt="Foto de perfil" />
          <div className={style.userTexts}>
            <span>Ronaldo</span>
            <p>#4002</p>
            </div>
        </div>
        <button
          onClick={() => setPesquisar(true)}
          className={style.searchIcon}
        ></button>
      </header>
      {menuLateral && (
        <div
          onClick={fecharMenu}
          className={`${style.overlayMenuLateral} ${fechandoMenu ? style.fechar : ""}`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${style.menuLateral} ${fechandoMenu ? style.menuLateralFechar : ""}`}
          >
            <div className={style.cabecalho}>
              <img src={Logo} alt="" />
              <button onClick={fecharMenu}>
                <IoCloseOutline size={25} color="#fff" />
              </button>
            </div>
            <div>
              <nav className={style.navMenuLateral}>
                <a href="/">
                  <FaHome size={25} color="#37E359" />
                  Home
                </a>
                <a href="/games">
                  <GrCatalog size={25} color="#37E359" />
                  Catalogo
                </a>
                <a href="/Favoritos">
                  <FaHeart size={25} color="#37E359" />
                  Favoritos
                </a>
                <a href="/Destaques">
                  <TbWorldStar size={25} color="#37E359" />
                  Destaques
                </a>
                <a href="/Sobre">
                  <IoMdInformationCircleOutline size={25} color="#37E359" />
                  Sobre
                </a>
                <a href="/Conta">
                  <CgProfile size={25} color="#37E359" />
                  Conta
                </a>
                <hr />
                <div className={style.userContainerMenu}>
                    <img src={User} alt="" />
                    <div className={style.userTextsMenu}>
                        <span>Ronaldo</span>
                        <p>#4002</p>
                    </div>

                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
      {pesquisar && (
        <div
          onClick={() => setPesquisar(false)}
          className={style.overlayPesquisar}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={style.pesquisaContainer}
          >
            <input
              type="text"
              className={style.pesquisaInput}
              placeholder="Pesquisar..."
            />
            <FaSearch color="#36c636" />
          </div>
        </div>
      )}
    </>
  );
}
