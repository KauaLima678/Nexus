import SpiderMan from "../../images/Spider Man.png";
import Shadowfall from "../../images/Shadowfall.jpg";
import SpiderMan2 from "../../images/Spider man 2.jpg";
import CyberPunk from "../../images/CyberPunk.png";
import RedDead from "../../images/Red Dead.jpg";
import PlantvsZombie from "../../images/PlantvsZombie.jpg";
import TombRaider from "../../images/Tomb Raider.jpg";
import Assasin from "../../images/Assasin.jpg";
import Elden from "../../images/Elden.jpg";
import Diablo from "../../images/Diablo.jpg";
import Project from "../../images/Project.jpg";
import FinalFantasy from "../../images/Final Fantasy.avif";
import StarRail from "../../images/Starrail.avif";
import PerennialOrder from "../../images/Perennial order.avif";
import AILimit from "../../images/AI Limit.avif";
import GodOfWar from "../../images/God of War.avif";
import Devour from "../../images/Devour.avif";
import FNAF from "../../images/FNAF.webp";
import Poppy from "../../images/Poppy.avif";
import Resident from "../../images/Resident.jpg";
import Amnesia from "../../images/Amnesia.avif";
import Outlast from "../../images/Outlast.avif";
import NoMore from "../../images/No More.jpg";
import TheLastOfUs from "../../images/The Last.avif";
import CyberUlt from "../../images/CyberPunk Ult.png";
import MK1 from "../../images/Mortal Kombat.avif";
import Subnautica from "../../images/Subnautica.jpg";
import Split from "../../images/Split Fiction.webp";
import Minecraft from "../../images/Minecraft.jpg";
import GTA from "../../images/GTA.avif";
import Horizon from "../../images/Horizon.avif";
import Wukong from "../../images/Wukong.avif";

//Classificações
import Livre from "../../images/L.png";
import A10 from "../../images/10.png";
import A12 from "../../images/12.png";
import A14 from "../../images/14.png";
import A16 from "../../images/16.png";
import A18 from "../../images/18.png";

// Videos
import MilesVideo from "../../Videos/miles.mp4";
import SpiderMan2Trailer from "../../Videos/Spider man 2 Trailer.mp4";
import CyberPunkTrailer from "../../Videos/CyberPunk 2077.mp4";
import CyberPunkUltimate from "../../Videos/CyberPunk Ultimate.mp4";
import AssasinTrailer from "../../Videos/Assassin's Creed Shadows Trailer.mp4";
import AITrailer from "../../Videos/AI Limit Trailer.mp4";
import AmnesiaTrailer from "../../Videos/Amnesia Trailer.mp4";
import WukongTrailer from "../../Videos/Wukong Trailer.mp4";
import DevourTrailer from "../../Videos/Devour Trailer.mp4";
import DiabloTrailer from "../../Videos/Diablo Trailer.mp4";
import EldenTrailer from "../../Videos/Elden Ring Trailer.mp4";
import FinalFantasyTrailer from "../../Videos/Final Fantasy Trailer.mp4";
import FNAFTrailer from "../../Videos/FNAF Trailer.mp4";
import GOWTrailer from "../../Videos/God of war Trailer.mp4";
import GTATrailer from "../../Videos/GTA Trailer.mp4";
import HorizonTrailer from "../../Videos/Horizon Trailer.mp4";
import MinecraftTrailer from "../../Videos/Minecraft Trailer.mp4";
import MK1Trailer from "../../Videos/MK1 Trailer.mp4";
import OutlastTrailer from "../../Videos/Outlast Trailer.mp4";
import NMR2Trailer from "../../Videos/NMR2 Trailer.mp4";
import POTrailer from "../../Videos/PO Trailer.mp4";
import PoppyTrailer from "../../Videos/Poppy Trailer.mp4";
import PXZTrailer from "../../Videos/PXZ Trailer.mp4";
import PZTrailer from "../../Videos/PZ Trailer.mp4";
import RDRTrailer from "../../Videos/RDR Trailer.mp4";
import RE4Trailer from "../../Videos/RE4 Trailer.mp4";
import ShadowFallTrailer from "../../Videos/ShadowFall Trailer.mp4";
import SFTrailer from "../../Videos/SplitFiction Trailer.mp4";
import StarRailTrailer from "../../Videos/Star Rail Trailer.mp4";
import SubnauticaTrailer from "../../Videos/Subnautica Trailer.mp4";
import TLOUTrailer from "../../Videos/TLOU trailer.mp4";
import TRTrailer from "../../Videos/TR Trailer.mp4";

import { BsNintendoSwitch } from "react-icons/bs";
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

const games = [
  {
    id: 1,
    maisBaixados: true,
    populares: false,
    categoria: "Ação",
    nome: "Spider Man: Miles Morales",
    genero: "Aventura",
    recursos: [{ recurso: "Para um jogador" }],
    imagem: SpiderMan,
    banner: MilesVideo,
    nota: 4.8,
    classificacaoIcon: A12,
    classificacao: "12 anos",
    caution: "Violência",
    descricao:
      "O adolescente Miles Morales está se adaptando a um novo lar enquanto segue os passos do seu mentor, Peter Parker, como um novo Homem-Aranha. Mas quando uma violenta disputa de forças ameaça destruir seu novo lar, Miles precisa reconhecer e assumir o título de Homem-Aranha.",
    sobre:
      "Após os eventos de Marvel's Spider-Man Remasterizado, o adolescente Miles Morales está se adaptando à sua nova casa enquanto segue os passos do seu mentor, Peter Parker, para se tornar um novo Homem-Aranha. Mas uma violenta disputa de forças ameaça destruir seu novo lar e faz o aspirante a herói perceber que com grandes poderes também vêm grandes responsabilidades. Para salvar a Nova York da Marvel, Miles precisa reconhecer e assumir o título de Homem-Aranha.",
    desenvolvedora: "Insominiac Games",
    editora: "Sony",
    data: "12/11/2020",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 2,
    categoria: "Ação",
    maisBaixados: false,
    populares: false,
    nome: "Spider Man 2",
    genero: "Aventura",
    recursos: [{ recurso: "Para um jogador" }],
    imagem: SpiderMan2,
    banner: SpiderMan2Trailer,
    nota: 4.7,
    classificacaoIcon: A12,
    classificacao: "12 anos",
    caution: "Violência",
    descricao:
      "O poder incrível do simbionte força Peter Parker e Miles Morales a lutarem desesperadamente para equilibrar suas vidas, amizades e o dever de proteger as pessoas em um capítulo empolgante da aclamada franquia Spider-Man.",
    sobre:
      "Os Spiders Peter Parker e Miles Morales encaram a maior prova de força com e sem suas máscaras enquanto lutam para salvar a cidade, um ao outro e as pessoas que amam do monstruoso Venom e da nova e perigosa ameaça: os simbiontes.",
    desenvolvedora: "Insominiac Games, Nixes Software",
    editora: "PlayStation Publishing LLC",
    data: "30/01/2025",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 3,
    categoria: "Ação",
    nome: "CyberPunk 2077",
    maisBaixados: false,
    populares: true,
    genero: "Estratégia",
    recursos: [
      { recurso: "Compatível com Controles" },
      { recurso: "Para um jogador" },
    ],
    imagem: CyberPunk,
    banner: CyberPunkTrailer,
    nota: 4.8,
    classificacaoIcon: A18,
    classificacao: "18 anos",
    caution: "Conteúdo Sexual, Drogas, Violência extrema",
    descricao:
      "Cyberpunk 2077 é um jogo de ação e aventura em mundo aberto do estúdio CD Projekt Red, criador de The Witcher 3: Wild Hunt. O jogo acontece em Night City, uma megalópole obcecada pelo poder, glamour e modificações biológicas",
    sobre:
      "Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto ambientado na megalópole de Night City, onde você é um mercenário cyberpunk envolvido em uma intensa luta pela sobrevivência. Com diversas melhorias e conteúdo adicional gratuito, personalize o seu personagem e o seu estilo de jogo conforme aceita trabalhos, construa uma reputação e desbloqueie melhorias. Seus relacionamentos e suas escolhas moldarão a história e o mundo ao seu redor. Aqui nascem as lendas. Qual será a sua?",
    desenvolvedora: "CD PROJEKT RED",
    editora: "CD PROJEKT RED",
    data: "09/12/2020",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 4,
    categoria: "Ação",
    maisBaixados: true,
    populares: true,
    nome: "Assasin's Creed: Shadows",
    genero: "Ação/Aventura",
    recursos: [
      { recurso: "Para um Jogador" },
      { recurso: "Compatível com controles" },
    ],
    caution: "Violência extrema, Conteudo sexual, Drogas Lícitas",
    imagem: Assasin,
    banner: AssasinTrailer,
    nota: 4.8,
    classificacaoIcon: A18,
    classificacao: "18 anos",
    descricao:
      "Viva uma história épica de ação e aventura ambientada no Japão feudal! Torne-se uma assassina shinobi letal e um poderoso samurai lendário enquanto explora um mundo aberto maravilhoso em tempos caóticos.",
    sobre:
      "Jogue com Naoe, uma assassina shinobi, e Yasuke, um samurai lendário, enquanto vivencia suas histórias fascinantes e domina seus estilos de luta complementares. Como Naoe, use a furtividade para não ser detectada e a agilidade para confundir seus inimigos. Como Yasuke, ataque seus adversários com poder e precisão letais.",
    desenvolvedora: "Ubisoft Entertainment",
    editora: "Ubisoft Entertainment",
    data: "20/03/2025",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 5,
    categoria: "Ação",
    maisBaixados: true,
    populares: false,
    nome: "Red Dead Redemption II",
    genero: "Ação/Aventura",
    recursos: [
      { recurso: "Para um Jogador" },
      { recurso: "Compatível com controles" },
    ],
    imagem: RedDead,
    banner: RDRTrailer,
    nota: 4.9,
    caution: "Atos criminosos, Violência, Drogas Lícitas",
    classificacaoIcon: A18,
    classificacao: "18 anos",
    descricao:
      "Estados Unidos, 1899. O fim da era do velho oeste se aproxima, e os xerifes caçam as últimas gangues fora da lei. Quem não se rende ou sucumbe, acaba morto.",
    sobre:
      "Depois de tudo dar errado em um roubo na cidade de Blackwater, no faroeste, Arthur Morgan e a gangue Van der Linde são obrigados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue terá que roubar, assaltar e lutar para sobreviver no implacável coração dos Estados Unidos.",
    desenvolvedora: "Rockstar Games",
    editora: "Rockstar Games",
    data: "26/10/2018",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 6,
    categoria: "Ação",
    maisBaixados: false,
    populares: false,
    nome: " SHADOWFALL",
    genero: "Estratégia",
    recursos: [
      { recurso: "Para um Jogador" },
      { recurso: "Compatível com controles" },
    ],
    imagem: Shadowfall,
    banner: ShadowFallTrailer,
    nota: 4.5,
    classificacao: "Livre",
    classificacaoIcon: Livre,
    descricao:
      "Os mundos repletos de aventura de Eldrador estão em perigo! Lidera Creatures prontas para a ação em combates estratégicos por turnos e derrota uma misteriosa e sombria ameaça. ",
    sobre:
      "Os mundos de Eldrador estão ameaçados por uma força sombria. O jogador deve liderar um time de 20 criaturas elementares — como dragões, golems de fogo e lobos de gelo — em batalhas estratégicas por turnos. Cada criatura possui habilidades únicas que podem ser aprimoradas ao longo do jogo.",
    desenvolvedora: "Wild River Games GmbH",
    editora: "Wild River Games GmbH",
    data: "05/03/2025",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
      { icone: <BsNintendoSwitch /> },
    ],
  },
  {
    id: 7,
    maisBaixados: false,
    populares: false,
    categoria: "Ação",
    nome: "Plants vs. Zombies™: BPN Edição Deluxe",
    genero: "Estratégia",
    recursos: [{ recurso: "Para um Jogador" }],
    imagem: PlantvsZombie,
    banner: PXZTrailer,
    nota: 4.5,
    classificacao: "10 anos",
    classificacaoIcon: A10,
    caution: "Violência",
    descricao:
      "Fertilize as suas defesas em Plants vs. Zombies: Batalha por Neighborville, o jogo de tiro mais maluco de todos! A Edição Deluxe inclui o jogo base e um conteúdo exclusivo incrível.",
    sobre:
      "Participe da mais nova versão da antiga batalha entre plantas e zumbis com 20 classes totalmente personalizáveis no lançamento, incluindo uma classe de jogo cooperativo para cada facção. Enfeite os personagens com visuais extravagantes e armas malucas que mostrem sua personalidade única.",
    editora: "Electronic Arts",
    desenvolvedora: "PopCap",
    data: "09/05/2024",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
      { icone: <BsNintendoSwitch /> },
    ],
  },
  {
    id: 8,
    maisBaixados: false,
    populares: false,
    categoria: "Ação",
    nome: "Shadow of the Tomb Raider",
    genero: "Aventura",
    recursos: [{ recurso: "Para um Jogador" }],
    imagem: TombRaider,
    banner: TRTrailer,
    nota: 4.5,
    classificacao: "16 anos",
    classificacaoIcon: A16,
    caution: "Conteudo impactante, Linguagem imprópria, Violênica",
    descricao:
      "Em Shadow of the Tomb Raider: Definitive Edition você vivenciará o último capítulo da origem de Lara, no qual ela cumprirá seu destino e se tornará a Tomb Raider.",
    sobre:
      "Em Shadow of the Tomb Raider: Definitive Edition você vivenciará o último capítulo da origem de Lara, no qual ela cumprirá seu destino e se tornará a Tomb Raider. Ao combinar o jogo de base, todas as tumbas de desafios dos sete DLCs, bem como todas as armas, trajes e habilidades complementares, Shadow of the Tomb Raider: Definitive Edition é a forma definitiva de vivenciar o momento determinante de Lara.",
    desenvolvedora: "Eidos-Montréal, Crystal Dynamics, Nixxes Software",
    editora: "Crystal Dynamics",
    data: "30/12/2021",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 9,
    maisBaixados: true,
    populares: true,
    categoria: "RPG",
    nome: "Elden Ring",
    genero: "Soulsborne",
    recursos: [{ recurso: "Para um Jogador" }],
    imagem: Elden,
    banner: EldenTrailer,
    nota: 4.5,
    classificacao: "16 anos",
    classificacaoIcon: A16,
    caution: "Violência",
    descricao:
      "Desvende os mistérios do poder do Elden Ring. Encontre adversários com origens profundas, personagens com motivações próprias únicas para ajudar ou dificultar seu progresso e criaturas assustadoras.",
    sobre:
      "Elden Ring é um jogo de ação e RPG em mundo aberto, desenvolvido pela FromSoftware e publicado pela Bandai Namco. Lançado em 2022, o jogo combina o estilo desafiador e sombrio da série Dark Souls com uma exploração mais livre e expansiva. Você assume o papel de um Maculado, um guerreiro exilado chamado a retornar às Terras Intermédias para restaurar o Anel Prístino (Elden Ring) e se tornar o novo Lorde Prístino. O mundo está em ruínas após a destruição do anel e a queda da Rainha Marika, e agora é dominado por semideuses corrompidos e forças sombrias.",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 10,
    populares: true,
    maisBaixados: false,
    categoria: "RPG",
    nome: "Diablo IV",
    genero: "Dungeon crawler",
    recursos: [
      { recurso: "Para um Jogador" },
      { recurso: "Compativel com controle" },
    ],
    imagem: Diablo,
    banner: DiabloTrailer,
    nota: 3.8,
    classificacao: "18 anos",
    classificacaoIcon: A18,
    caution: "Violência extrema, Dogas Lícitas",
    descricao:
      "O Santuário caiu mais uma vez na escuridão uma vez que Lilith foi convocada por meio de ritual sombrio depois de eras no exílio. Agora, o ódio ameaça consumir o Santuário enquanto o mal se espalha e uma nova onda de cultistas surge para dar as boas-vindas a Lilith.",
    sobre:
      "Forge seu caminho através do Santuário – um mundo contínuo e em constante crescimento, repleto de escolhas, missões, corrupção e espólios. Junte-se a outros aventureiros, retome cidades sitiadas, mergulhe em masmorras de pesadelos e lute pelo destino do mundo.",
    editora: "Blizzard Entertainment",
    desenvolvedora: "Blizzard Entertainment",
    data: "06/06/2023",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 11,
    populares: false,
    maisBaixados: false,
    categoria: "RPG",
    nome: "Project Zomboide",
    genero: "Indie",
    recursos: [
      { recurso: "Para um Jogador" },
      { recurso: "Sobrevivência sandbox" },
    ],
    imagem: Project,
    banner: PZTrailer,
    nota: 4.5,
    classificacao: "14 anos",
    classificacaoIcon: A14,
    caution: "Violência",
    descricao:
      "Project Zomboid é o primeiro jogo lançado comercialmente da The Indie Stone. A versão instável mais recente é a Build 42, lançada pela primeira vez em beta instável em dezembro de 2024, que inclui animais, uma revisão do sistema de criação, vários locais adicionados e renovados, além de outras pequenas alterações.",
    sobre:
      "Nas cidades de Muldraugh e West Point, os sobreviventes devem saquear casas, construir defesas e fazer o máximo para adiar sua morte inevitável dia após dia. Nenhuma ajuda está chegando – sua sobrevivência depende de sua própria astúcia, sorte e capacidade de escapar de uma horda implacável.",
    desenvolvedora: "The indie Stone",
    editora: "The indie Stone",
    data: "08/11/2013",
    plataformas: [{ icone: <FaWindows /> }],
  },
  {
    id: 12,
    maisBaixados: false,
    populares: false,
    categoria: "RPG",
    nome: "Final Fantasy XVI",
    genero: "RPG de Fantasia e Ficção ciêntifica",
    recursos: [
      { recurso: "Para um Jogador" },
      { recurso: "Compativel com controle" },
    ],
    imagem: FinalFantasy,
    banner: FinalFantasyTrailer,
    nota: 4.7,
    classificacao: "16 anos",
    classificacaoIcon: A16,
    caution: "Temas sensíveis, Conteudo Sexual, Violência",
    descricao:
      "Fantasia épica sombria onde o destino é decidido por Eikons e os Dominantes que os controlam. Esta é a história de Clive Rosfield, guerreiro que jura vingança contra o Eikon das trevas, Ifrit, entidade misteriosa que traz calamidade por onde passa.",
    sobre:
      'Um épico mundo de fantasia sombria onde o destino do mundo é decidido pelos poderosos Eikons e os Dominantes que os controlam. Essa é a história de Clive Rosfield, um guerreiro que recebeu o título de "Primeiro Escudo de Rosaria" e jurou proteger seu irmão mais novo, Joshua, o Dominante da Fênix. Clive se envolve em uma grande tragédia e jura vingança contra o Eikon Ifrit, uma entidade misteriosa que traz calamidade por onde passa.',
    desenvolvedora: "Square Enix",
    editora: "Square Enix",
    data: "17/09/2014",
    plataformas: [{ icone: <FaWindows /> }, { icone: <FaPlaystation /> }],
  },
  {
    id: 13,
    maisBaixados: false,
    populares: false,
    categoria: "RPG",
    nome: "Perennial Order",
    genero: "Boss rush",
    recursos: [
      { recurso: "Para um Jogador" },
      { recurso: "Compativel com controle" },
    ],
    imagem: PerennialOrder,
    banner: POTrailer,
    nota: 4.5,
    classificacao: "14 anos",
    classificacaoIcon: A14,
    caution: "Violência",
    descricao:
      "Perennial Order é um jogo de duelo contra chefões e um terror vegetal 2D, situado em um mundo atmosférico medieval atormentado por terrores infestados pela natureza. Sozinho ou com um amigo, explore uma terra sobrenatural repleta de história em um estilo artístico e realístico.",
    sobre:
      "​Perennial Order é um jogo independente de ação e aventura em 2D, desenvolvido pela Gardenfiend Games e publicado pela SOEDESCO, lançado em 5 de setembro de 2024. Com uma estética sombria e inspirada na Idade das Trevas, o jogo combina elementos de horror e fantasia sombria em um mundo infestado por horrores naturais",
    desenvolvedora: "Gardenfiend Games",
    editora: "SOEDESCO",
    data: "06/09/2024",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 14,
    maisBaixados: false,
    populares: false,
    categoria: "RPG",
    nome: "AI Limit",
    genero: "SoulsLike",
    recursos: [
      { recurso: "Para um Jogador" },
      { recurso: "Compativel com controle" },
    ],
    imagem: AILimit,
    banner: AITrailer,
    nota: 4.4,
    classificacao: "12 anos",
    classificacaoIcon: A12,
    caution: "Violência",
    descricao:
      "Neste ARPG de ficção científica pós-apocalíptico, você jogará como Arrisa, uma Blader imortal, e explorará as ruínas da última cidade para encontrar a esperança de uma nova vida.",
    sobre:
      "AI LIMIT é um RPG de ação com temática de ficção científica pós-apocalíptica, desenvolvido pela Sense Games e publicado pela CE-Asia. Lançado em 27 de março de 2025 para PlayStation 5 e PC, o jogo faz parte do programa PlayStation China Hero Project.",
    desenvolvedora: "Sense Games",
    editora: "CE-Asia",
    data: "27/03/2025",
    plataformas: [{ icone: <FaWindows /> }, { icone: <FaPlaystation /> }],
  },
  {
    id: 15,
    maisBaixados: false,
    populares: false,
    categoria: "RPG",
    nome: "Honkai Star Rail",
    genero: "RPG de fantasia e ficção científica",
    recursos: [
      { recurso: "Para um Jogador" },
      { recurso: "Compativel com controle" },
    ],
    imagem: StarRail,
    banner: StarRailTrailer,
    nota: 4.7,
    classificacao: "10 anos",
    classificacaoIcon: A10,
    caution: "Linguagem Imprópria, Violência.",
    descricao:
      "Honkai: Star Rail é um novo RPG de fantasia espacial da HoYoverse. Suba no Expresso Astral e vivencie as infinitas maravilhas da galáxia em uma jornada cheia de aventura e emoção.",
    sobre:
      "Embarque em uma aventura galáctica onde você molda sua própria história. Com tecnologia de ponta que renderiza cinemáticas de alta qualidade em tempo real, nosso inovador sistema de expressão facial transmite emoções autênticas, tudo aprimorado pela trilha sonora original da HOYO-MiX que define o cenário. Junte-se a nós agora e viaje por um universo conflitante e cooperativo, onde suas escolhas definirão o desfecho da história!",
    desenvolvedora: "Shanghai miHoYo HaiYuancheng Technology Co., Ltd",
    editora: "COGNOSPHERE PTE. LTD.",
    data: "25/04/2023",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 16,
    maisBaixados: true,
    populares: false,
    categoria: "RPG",
    nome: "Gof Of War",
    genero: "Hack and Slash",
    recursos: [
      { recurso: "Para um Jogador" },
      { recurso: "Compativel com controle" },
    ],
    imagem: GodOfWar,
    banner: GOWTrailer,
    nota: 4.9,
    classificacao: "18 anos",
    classificacaoIcon: A18,
    caution: "Linguagem imprópria, Violência",
    descricao:
      "Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo.",
    sobre:
      "Com uma câmera sobre o ombro do personagem que deixa o jogador mais próximo do que nunca da ação, as lutas em God of War™ refletem o panteão de criaturas nórdicas que Kratos vai enfrentar: são grandiosas, realistas e cruéis. A nova arma principal e as novas habilidades mantêm o espírito de God of War, mas também introduzem novos conceitos ao gênero, com uma nova perspectiva para os combates.",
    desenvolvedora: "Santa Monica Studio",
    editora: "PlayStation Publishing LLC",
    data: "14/01/2022",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 17,
    maisBaixados: false,
    populares: false,
    categoria: "Terror",
    nome: "No More Room in Hell 2",
    genero: "Ação/Horror",
    recursos: [{ recurso: "Para um Jogador" }, { recurso: "COOP" }],
    imagem: NoMore,
    banner: NMR2Trailer,
    nota: 3.5,
    classificacao: "18 anos",
    classificacaoIcon: A18,
    caution: "Conteúdo Sexual, Drogas, Drogas Ilícitas, Violência Extrema",
    descricao:
      "No More Room in Hell 2 é uma experiência apavorante de terror e ação cooperativa para 8 jogadores. Comece só, encontre amigos na escuridão e sobreviva — tudo em um apocalipse zumbi dinâmico e infinitamente rejogável.",
    sobre:
      "No More Room in Hell 2 é uma intensa e aterrorizante jornada cooperativa de morte permanente na misteriosa escuridão de zonas infestadas por zumbis. Como um socorrista de emergência, você deve sobreviver, vasculhar, estocar e cumprir sua missão — e depois repetir, sendo cada vez uma experiência totalmente nova. Cuidado, pois uma mordida pode colocar tudo a perder, dando início à contagem regressiva da infecção dos zumbis dentro de você.",
    desenvolvedora: "Torn Banner Studios",
    editora: "Torn Banner Studios",
    data: "22/10/2024",
    plataformas: [{ icone: <FaWindows /> }],
  },
  {
    id: 18,
    categoria: "Terror",
    nome: "Amnesia Rebirth",
    genero: "Horror",
    imagem: Amnesia,
    recursos: [{ recurso: "Para um Jogador" }],
    banner: AmnesiaTrailer,
    nota: 4.2,
    classificacao: "18 anos",
    classificacaoIcon: A18,
    caution: "Conteúdo Sexual, Linguagem Imprópria, Violência Extrema",
    descricao:
      "Amnesia: Rebirth, uma nova incursão nas trevas dos criadores da icônica série Amnesia. Uma angustiante jornada pela desolação e pelo desespero, explorando os limites da resiliência humana.",
    sobre:
      "Em Amnesia: Rebirth, você é Tasi Trianon e acorda nas entranhas do deserto da Argélia. Passaram-se dias. Onde você esteve? O que você fez? Onde estão os outros? Reconstitua sua jornada e reúna os fragmentos do seu passado despedaçado – é sua única possibilidade de sobreviver ao horror impiedoso que ameaça te devorar. O tempo está contra você. Ponha-se no lugar de Tasi e ajude-a a passar por seu terror e dor pessoal. Lutando para atravessar uma região devastada, você também precisa lutar com suas próprias esperanças, medos e amargos arrependimentos. E, mesmo assim você precisa continuar, um passo de cada vez, sabendo que se falhar, vai perder tudo.",
    desenvolvedora: "Frictional Games",
    editora: "Frictional Games",
    data: "20/10/2020",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
      { icone: <BsNintendoSwitch /> },
    ],
  },
  {
    id: 19,
    populares: false,
    maisBaixados: false,
    categoria: "Terror",
    nome: "Poppy Playtime 4",
    genero: "Horror",
    recursos: [{ recurso: "Para um Jogador" }],
    imagem: Poppy,
    banner: PoppyTrailer,
    nota: 4.5,
    classificacao: "12 anos",
    classificacaoIcon: A12,
    caution: "Medo, Violência",
    descricao:
      "Você deve sobreviver nesta aventura de horror/desafios. Use seu Grabpack para manipular circuitos elétricos ou pegar itens à distância. Explore as misteriosas instalações... e não seja pego.",
    sobre:
      "A Playtime Co. já foi a líder da indústria de fabricação de brinquedos... até que um dia, todos dentro da fábrica desapareceram sem deixar rastros. Agora, anos depois, você precisa explorar a fábrica abandonada e descobrir a verdade.Os brinquedos. Os brinquedos da Playtime Co. são animados e cheios de vida! Temos o Boogie Bot, o Huggy Wuggy, a Catbee, a Poppy e muito mais! Já que você está aqui, por que não fazer uma visitinha aos brinquedos? Você pode acabar fazendo alguns novos amigos...",
    desenvolvedora: "Mob Entertainment",
    editora: "Mob Entertainment",
    data: "31/10/2024",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
      { icone: <BsNintendoSwitch /> },
    ],
  },
  {
    id: 20,
    maisBaixados: true,
    populares: false,
    categoria: "Terror",
    nome: "Resident Evil 4 Remake",
    genero: "Ação/Horror",
    recursos: [
      { recurso: "Para um Jogador" },
      { recurso: "Compativel com controle" },
    ],
    imagem: Resident,
    banner: RE4Trailer,
    nota: "5.0",
    classificacaoIcon: A18,
    classificacao: "18 anos",
    caution: "Violência, Linguagem Imprópria",
    descricao:
      "Resident Evil 4 é um jogo de terror e sobrevivência no qual os jogadores terão que enfrentar situações extremas de medo. Apesar dos vários elementos de terror, o jogo é equilibrado com muita ação e uma experiência de jogo bastante variada.",
    sobre:
      "Seis anos se passaram desde o desastre biológico em Raccoon City. O agente Leon S. Kennedy, um dos sobreviventes do incidente, foi enviado para resgatar a filha raptada do presidente. Ele segue o rastro dela até uma isolada vila europeia, onde há algo terrivelmente errado com os habitantes. Então a cortina se abre nessa história de um resgate ousado e um terror medonho, onde vida e morte, terror e catarse, se encontram.",
    desenvolvedora: "CAPCOM CO., LTD.",
    editora: "CAPCOM CO., LTD.",
    data: "24/03/2023",

    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 21,
    maisBaixados: false,
    populares: false,
    categoria: "Terror",
    nome: "Devour",
    genero: "Horror",
    recursos: [{ recurso: "Cooperativo" }],
    imagem: Devour,
    banner: DevourTrailer,
    nota: 4.5,
    classificacaoIcon: A14,
    classificacao: "14 anos",
    caution: "Medo, Temas sensíveis, Violência extrema",
    descricao:
      "DEVOUR é um jogo cooperativo de terror e sobrevivência para 1 a 4 jogadores. Detenha cultistas possuídos antes que eles o arrastem para o inferno. Corra. Grite. Esconda-se. Só não seja pego.",
    sobre:
      "Você é um ex-membro de um culto satânico que tenta deter seus ex-companheiros que foram possuídos por Azazel, um demônio antigo. Em cada mapa, o objetivo é realizar um ritual para banir a entidade – geralmente queimando objetos amaldiçoados como cabras, ovos ou bonecos – enquanto é constantemente caçado.",
    desenvolvedora: "Straight Back Games",
    editora: "Straight Back Games",
    data: "29/09/2023",
    plataformas: [{ icone: <FaWindows /> }],
  },
  {
    id: 22,
    maisBaixados: false,
    populares: false,
    categoria: "Terror",
    nome: "Five nights at freddy's: Security Breach",
    genero: "Exploração/Horror",
    recursos: [{ recurso: "Para um jogador" }],
    imagem: FNAF,
    banner: FNAFTrailer,
    nota: 4.5,
    classificacao: "16 anos",
    classificacaoIcon: A14,
    caution: "Medo, Violência Fantasiosa",
    descricao:
      "Em Five Nights at Freddy's: Security Breach, você joga como Gregory, um garotinho que ficou preso à noite no Freddy Fazbear's Mega Pizzaplex.",
    sobre:
      "Five Nights at Freddy’s: Security Breach é o mais novo jogo da série de terror para toda a família amada por milhões de jogadores de todo o mundo. Jogue como Gregory, um garotinho preso durante a noite no Freddy Fazbear’s Mega Pizzaplex. Com a ajuda do próprio Freddy Fazbear, Gregory deve sobreviver aos personagens reimaginados de Five Nights at Freddy’s que estão atrás dele — além de novas ameaças horripilantes. Quando os protocolos noturnos são ativados, os animatrônicos do Fazbear’s Mega Pizzaplex perseguem todos os intrusos implacavelmente. Glamrock Chica, Roxanne Wolf, Montgomery Gator e Vanessa, a guarda noturna do Pizzaplex, vão revirar todos os carrinhos de pizza de algodão-doce se for preciso — é melhor não ficar muito tempo no mesmo lugar.",
    desenvolvedora: "Steel Wool Studios",
    editora: "ScottGames",
    data: "28/02/2022",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
      { icone: <BsNintendoSwitch /> },
    ],
  },
  {
    id: 23,
    maisBaixados: false,
    populares: false,
    categoria: "Terror",
    nome: "Outlast 2",
    genero: "Horror",
    imagem: Outlast,
    banner: OutlastTrailer,
    nota: 4.7,
    classificacao: "18 anos",
    classificacaoIcon: A18,
    caution: "Medo, Violência Extrema",
    descricao:
      "O inferno é um experimento do qual não há escapatória em Outlast, um jogo de terror de sobrevivência em primeira pessoa da Red Barrels. Como o jornalista investigativo Miles Upshur, explore o Mount Massive Asylum e tente sobreviver tempo o bastante para descobrir seu terrível segredo... se tiver coragem.",
    recursos: [{ recurso: "Para um jogador" }],
    sobre:
      "Outlast 2 é a sequência do aclamado jogo de terror de sobrevivência, Outlast. Ambientado no mesmo universo do primeiro jogo, mas com personagens e cenários diferentes, Outlast 2 é uma jornada cheia de reviravoltas que mostra as profundezas da mente humana e seus segredos obscuros. Outlast 2 traz Sullivan Knoth e seus seguidores, que abandonaram o nosso mundo cruel para fundar Temple Gate, uma cidade nas profundezas das florestas e escondida da civilização. Knoth e o seu pessoal estão se preparando para o sofrimento do fim dos tempos e você está bem no meio disso.",
    desenvolvedora: "Red Barrels",
    editora: "Red Barrels",
    data: "04/10/2022",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 24,
    categoria: "Terror",
    maisBaixados: false,
    populares: true,
    nome: "The Last of Us™ Parte II",
    genero: "Sobrevivência/Horror",
    imagem: TheLastOfUs,
    banner: TLOUTrailer,
    nota: 4.8,
    classificacao: "18 anos",
    classificacaoIcon: A18,
    caution: "Violência Extrema, Nudez, Drogas",
    descricao:
      "Experimente o vencedor de mais de 300 prêmios de Jogo do Ano remasterizado com melhorias gráficas, novos modos, como a experiência de sobrevivência roguelike Sem Volta e muito mais.",
    recursos: [{ recurso: "Para um jogador" }],
    sobre:
      "Explore o combate intrincado de The Last of Us Parte II neste modo que faz sucesso entre os fãs! Sobreviva o máximo possível em cada sessão escolhendo os caminhos a tomar em uma série de confrontos aleatórios. Jogue com diversos personagens desbloqueáveis, cada qual com características únicas. Os numerosos desafios contam com diferentes inimigos e locais memoráveis da Parte II, sempre culminando em batalhas acirradas contra chefes.",
    desenvolvedora: "Naughty Dog LLC, Nixxes Software, Iron Galaxy",
    editora: "PlayStation Publishing LLC",
    data: "03/04/2025",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 25,
    maisBaixados: false,
    populares: false,
    categoria: "Aventura",
    nome: "CyberPunk 2077 - Ultimate Edition",
    genero: "Ficção Ciêntifica",
    imagem: CyberUlt,
    banner: CyberPunkUltimate,
    nota: 4.7,
    classificacao: "18 anos",
    classificacaoIcon: A18,
    caution: "Conteúdo Sexual, Drogas, Violência Extrema",
    descricao:
      "Viva tudo que Night City tem a oferecer com o RPG de ação e aventura em mundo aberto Cyberpunk 2077 e a aventura de suspense e espionagem Phantom Liberty. Aqui nascem as lendas. Qual será a sua?",

    recursos: [
      { recurso: "Para um jogador" },
      { recurso: "Compátivel com controles" },
      { recurso: "Mundo Aberto" },
    ],
    sobre:
      "Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto ambientada em Night City, uma megalópole obcecada por poder, glamour e modificação corporal. Jogue como V, um mercenário cyberpunk, e enfrente as forças mais poderosas da cidade em uma luta pela glória e sobrevivência. Aqui nascem as lendas. Qual será a sua?",
    desenvolvedora: "CD PROJEKT RED",
    editora: "CD PROJEKT RED",
    data: "05/12/2023",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 26,
    maisBaixados: false,
    populares: false,
    categoria: "Aventura",
    nome: "Subnautica",
    genero: "Exploração",
    recursos: [{ recurso: "Para um jogador" }, { recurso: "Cooperativo" }],
    imagem: Subnautica,
    banner: SubnauticaTrailer,
    nota: 4.8,
    classificacao: "Livre",
    classificacaoIcon: Livre,
    caution: "Linguagem Imprópria, Violência Fantasiosa",
    descricao:
      "Subnautica é um jogo de aventura subaquática ambientado em um planeta oceânico alienígena. Um enorme mundo aberto, cheio de maravilhas e perigos, está à sua espera!",
    sobre:
      "Subnautica 2 é um jogo de sobrevivência e aventura submarina ambientado em um mundo oceânico alienígena totalmente novo. Este é o novo capítulo do universo Subnautica, desenvolvido pela Unknown Worlds. Novo Mundo, Nova AventuraUm novo mundo está à sua espera, com uma história inédita e cheia de surpresas. Você é um pioneiro rumo a um planeta distance, mas aglo não está certo. A IA da nave insiste que você continue com a missão. Só que esse mundo é perigoso demais para humanos sobreviverem... A não ser que você redefina o que significa ser humano. Que criaturas, inteligentes ou não, estarão esperando por você?",
    desenvolvedora: "Unknown Worlds Entertainment",
    editora: "KRAFTON, Inc.",
    data: "24/04/2025",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 27,
    maisBaixados: false,
    populares: false,
    categoria: "Aventura",
    nome: "Split Fiction",
    genero: "Coop",
    recursos: [{ recurso: "Para um Jogador" }],
    imagem: Split,
    banner: SFTrailer,
    nota: 4.9,
    classificacao: "14 anos",
    classificacaoIcon: A14,
    caution: "Violência",
    descricao:
      "Passe por momentos alucinantes ao entrar nos vários mundos de Split Fiction, uma aventura cooperativa que ultrapassa fronteiras, do mesmo estúdio que criou It Takes Two.",
    sobre:
      "Mio e Zoe, escritoras opostas, ficam presas em suas próprias histórias depois de serem ligadas a uma máquina projetada para roubar suas ideias. Elas terão que depender uma da outra para se libertarem, trabalhando juntas para dominar várias habilidades e superar os desafios enquanto percorrem entre mundos de ficção científica e fantasia nesta história inesperada sobre amizade.",
    desenvolvedora: "Hazelight Studios AB",
    editora: "Electronic Arts",
    data: "06/03/2025",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <BsNintendoSwitch /> },
    ],
  },
  {
    id: 28,
    maisBaixados: true,
    populares: true,
    categoria: "Aventura",
    nome: "Mortal Kombat 1",
    genero: "Luta",
    imagem: MK1,
    banner: MK1Trailer,
    nota: 4.6,
    classificacao: "18 anos",
    classificacaoIcon: A18,
    caution: "Linguagem Imprópria, Violência Extrema",
    descricao:
      "Descubra um renascido Universo de Mortal Kombat™ criado pelo Deus do Fogo Liu Kang. Mortal Kombat™ 1 inaugura uma nova era da franquia icônica com um novo sistema de luta, modos de jogo e fatalities!",
    recursos: [{ recurso: "Para um Jogador" },
      { recurso: "Compatível com controle"}
    ],
    sobre: "Está no Nosso Sangue! Descubra um renascido Universo de Mortal Kombat criado pelo Deus do Fogo Liu Kang. Mortal Kombat 1 inaugura uma nova era da franquia icônica com um novo sistema de luta, modos de jogo e fatalities!",
    desenvolvedora: "NetherRealm Studios | QLOC",
    editora: "Warner Bros. Games",
    data: "19/09/2023",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
      { icone: <BsNintendoSwitch/>}
    ],
  },
  {
    id: 29,
    maisBaixados: false,
    populares: true,
    categoria: "Aventura",
    nome: "Black Myth: Wukong",
    genero: "RPG de ação",
    imagem: Wukong,
    banner: WukongTrailer,
    nota: 4.9,
    classificacao: "16 anos",
    classificacaoIcon: A16,
    caution: "Linguagem Imprópria, Violência",
    descricao:
      "Black Myth: Wukong é um RPG de ação inspirado na mitologia chinesa. Você assume o papel do Predestinado e tem a responsabilidade de encarar os desafios e as maravilhas do mundo para desvendar a verdade obscura por trás de uma lenda gloriosa do passado.",
      recursos: [
        {recurso: "Para um Jogador"}
            ],
            sobre: 'Black Myth: Wukong é um RPG de ação inspirado na mitologia chinesa. A história é baseada em "Jornada para o Oeste", um dos Quatro Grandes Romances Clássicos da literatura do país. Você assume o papel do Predestinado e tem a responsabilidade de encarar os desafios e as maravilhas do mundo para desvendar a verdade obscura por trás de uma lenda gloriosa do passado.',
            desenvolvedora: "Game Science",
            editora: "Game Science",
            data: "19/08/2024",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
  {
    id: 30,
    maisBaixados: false,
    populares: true,
    categoria: "Aventura",
    nome: "Horizon Zero Dawn™",
    genero: "RPG de ação",
    imagem: Horizon,
    banner: HorizonTrailer,
    nota: 4.7,
    classificacao: "12 anos",
    classificacaoIcon: A12,
    caution: "Drogas Lícitas, Violência",
    descricao:
      "Curta o aclamado Horizon Zero Dawn™ com recursos aprimorados e novos visuais incríveis. Em um futuro distante, onde máquinas colossais vagam pela Terra, a humanidade sobrevive em diferentes tribos, em meio às ruínas da nossa civilização.",
      recursos: [
        {recurso: "Para um Jogador"}
            ],
            sobre: "Explore um mundo vasto e vibrante, cheio de máquinas imponentes e ruínas misteriosas de uma civilização esquecida pelo tempo, remasterizado para PC, com novos recursos e visuais incríveis. Empunhe o arco e a lança da Aloy, uma jovem caçadora de máquinas e exilada da tribo, que parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.  Ao longo da jornada, Aloy encontrará tribos únicas, assentamentos cheios de vida, personagens peculiares e companheiros cativantes.Mas esse mundo aberto também é repleto de vida selvagem e perigo. Máquinas formidáveis, porém letais, patrulham a exuberante paisagem corrompida por uma força desconhecida. Em combate, você contará com um esplêndido arsenal para executar ataques táticos devastadores contra máquinas temíveis e facções rivais implacáveis. Horizon Zero Dawn™, um premiado jogo de RPG e ação, traz com esta edição remasterizada o deslumbrante mundo da Aloy com uma fidelidade visual ainda maior e todo o potencial do PC. Ela também inclui The Frozen Wilds, uma vasta expansão com novas áreas, habilidades, armas e máquinas. ",
            desenvolvedora: "Guerrilla Games/Nixxes Software",
            editora: "PlayStation Publishing LLC",
            data: "31/10/24",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
    ],
  },
  {
    id: 31,
    maisBaixados: true,
    populares: false,
    categoria: "Aventura",
    nome: "Minecraft",
    genero: "Exploração",
    imagem: Minecraft,
    banner: MinecraftTrailer,
    nota: 4.4,
    classificacao: "12 anos",
    classificacaoIcon: A12,
    caution: "Violência Fantasiosa",
    descricao:
      "Mergulhe em um mundo aberto de construção, criação e sobrevivência. Colete recursos, sobreviva à noite e construa qualquer coisa que puder imaginar, bloco por bloco, no jogo definitivo de simulação. Aventure-se por mundos completamente abertos, onde você pode participar de jogos MMO com amigos, construir uma cidade, iniciar uma fazendinha, minerar nas profundezas da terra, enfrentar inimigos misteriosos ou simplesmente explorar até as fronteiras da sua imaginação!",
      recursos: [
        {recurso: "Para um Jogador"},
        {recurso: "Mundo Aberto"},
            ],
            sobre: "Construa tudo que você possa imaginar, descubra mistérios assustadores e sobreviva à noite no melhor jogo do tipo livre. No Minecraft, cada jogada é diferente e aventuras inesquecíveis aguardam em cada canto. Explore e crie seu caminho em um mundo infinito que você pode construir, um bloco de cada vez.",
            desenvolvedora: "Mojang Studios",
            editora: "Xbox Game Studios",
            data: "17/05/2009",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
      { icone: <BsNintendoSwitch /> },
    ],
  },
  {
    id: 32,
    populares: true,
    maisBaixados: true,
    categoria: "Aventura",
    nome: "GTA V",
    genero: "Mundo aberto",
    imagem: GTA,
    banner: GTATrailer,
    nota: 4.6,
    classificacao: "18 anos",
    classificacaoIcon: A18,
    caution: "Conteúdo Sexual, Drogas, Violência",
    descricao:
      "Experimente os grandes sucessos de entretenimento Grand Theft Auto V e Grand Theft Auto Online, agora atualizados para uma nova geração com elementos visuais impressionantes, carregamento mais rápido, áudio 3D e muito mais, além de conteúdo exclusivo para jogadores de GTA Online.",
      recursos: [
        {recurso: "Para um Jogador"},
        {recurso: "Mundo Aberto"}
            ],
            sobre: "Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se veem envolvidos com alguns dos elementos mais assustadores e malucos do submundo do crime, do governo dos EUA e da indústria do entretenimento, eles precisam realizar uma série de golpes ousados para sobreviver em uma cidade cruel onde não podem confiar em ninguém, nem mesmo um no outro.Os jogadores atuais de PC podem transferir o progresso do Modo História do GTAV, assim como o progresso e os personagens do GTA Online, através de uma única migração da versão clássica do GTAV para o GTAV Enhanced.",
            desenvolvedora: "Rockstar Games",
            editora: "Rockstar Games",
            data: "04/03/2025",
    plataformas: [
      { icone: <FaWindows /> },
      { icone: <FaPlaystation /> },
      { icone: <FaXbox /> },
    ],
  },
];

const maisBaixados = [
  {
    id: 1,
    categoria: "Ação",
    nome: "Assasin's Creed: Shadows",
    imagem: Assasin,
  },
  {
    id: 2,
    categoria: "Ação",
    nome: "Red Dead Redemption II",
    imagem: RedDead,
  },
  {
    id: 3,
    categoria: "Aventura",
    nome: "Mortal Kombat 1",
    imagem: MK1,
  },
  {
    id: 4,
    categoria: "Aventura",
    nome: "Minecraft",
    imagem: Minecraft,
  },
];

const Populares = [
  {
    id: 27,
    categoria: "Aventura",
    nome: "Split Fiction",
    imagem: Split,
  },
  {
    id: 2,
    categoria: "Terror",
    nome: "The Last of Us™ Parte II Remastered",
    imagem: TheLastOfUs,
  },
  {
    id: 4,
    categoria: "Aventura",
    nome: "Subnautica",
    imagem: Subnautica,
  },
  {
    id: 3,
    categoria: "Aventura",
    nome: "Mortal Kombat 1",
    imagem: MK1,
  },
];

export default games;

// {
//   id: 4,
//   nome: "Minecraft",
//   genero: "Sandbox",
//   imagem: Minecraft,
//   plataformas: [
//       { nome: "PC", logo: pcLogo },
//       { nome: "Xbox One", logo: xboxLogo },
//       { nome: "PS4", logo: psLogo },
//       { nome: "Switch", logo: 'caminho/para/logo/switch.png' },
//   ]
// },
