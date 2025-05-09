import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Catalogo from "../pages/catalog";
import DetalheJogo from "../pages/detalhesJogos";
import Perfil from "../pages/usuário";
import Sobre from "../pages/about";
import Ranking from "../pages/rank";
import Favoritos from "../pages/favoritos";

export default function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Catalogo />} />
                <Route path="/games/:id" element={<DetalheJogo />} />
                <Route path="/Conta" element={<Perfil />} />
                <Route path="/Favoritos" element={<Favoritos />} />
                <Route path="/Sobre" element={<Sobre/>} />
                <Route path="/Destaques" element={<Ranking/>} />
            </Routes>
        </BrowserRouter>
    );

}