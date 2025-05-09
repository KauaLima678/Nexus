import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../../images/Logo.png"
import style from "./style.module.css"


export default function Footer() {
  return (
    
      <footer className={style.footer}>
        <div className={style.footerContainer}>
  
          <div className={style.footerColumn}>
            <img src={Logo} alt="Nexus Logo" className={style.footerLogo} />
            <p>
              Nexus é sua plataforma definitiva para descobrir, baixar e acompanhar os melhores jogos do momento.
            </p>
          </div>
  
          <div className={style.footerNavList}>
            <h4>Navegação</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/games">Catalogo</a></li>
              <li><a href="/Favoritos">Favoritos</a></li>
              <li><a href="/Destaques">Destaques</a></li>
              <li><a href="/Sobre">Sobre</a></li>
              <li><a href="/Conta">Conta</a></li>
            </ul>
          </div>
  
          <div className={style.footerColumn}>
            <h4>Suporte</h4>
            <ul>
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Reportar Problema</a></li>
              <li><a href="#">Termos e Condições</a></li>
            </ul>
          </div>
  
          <div className={style.footerColumnSocial}>
            <h4>Siga-nos</h4>
            <div className={style.footerSocial}>
              <div className={style.socialIcon}>
              <a href="#"><FaFacebookF /></a>
              </div>
              <div className={style.socialIcon}>
              <a href="#"><FaInstagram /></a>
              </div>
              <div className={style.socialIcon}>
              <a href="#"><FaYoutube /></a>
              </div>
            </div>
          </div>
  
        </div>
  
        <div className={style.footerBottom}>
          © 2025 Nexus Inc. Todos os direitos reservados.
        </div>
      </footer>
  );
}

