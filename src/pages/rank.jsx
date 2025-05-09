import { useNavigate } from "react-router-dom"
import style from "../styles/rank.module.css"
import Header from "../components/Header";
import Ranking from "../components/Ranking";
import Footer from "../components/Footer";
import Top3 from "../components/Top3";

export default function Rank (){
    const navigate = useNavigate();

    return (
        <>
        <Header />
        <h2 className={style.titleRank}>Ranking de Jogos</h2>
        <Top3 />
        <Ranking />
        <Footer />
        </>
    )

}