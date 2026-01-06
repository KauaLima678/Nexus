# 🎮 Nexus - Catálogo de Jogos

## 📝 Sobre o Projeto

**Nexus** é uma plataforma web interativa de catálogo de jogos desenvolvida como **projeto de estudo** para aprendizado e prática de tecnologias web modernas. A aplicação permite aos usuários explorar, buscar, filtrar e salvar seus jogos favoritos em um ambiente responsivo e intuitivo.

---

## 🎯 Funcionalidades

- **Catálogo Completo:** Navegação por diversos títulos de jogos com informações detalhadas
- **Sistema de Favoritos (Estático):** Marque e visualize seus jogos favoritos com armazenamento em estado local
- **Ranking de Jogos:** Visualize os jogos mais populares e bem avaliados
- **Carrossel Dinâmico:** Visualização elegante dos destaques da plataforma
- **Perfil do Usuário:** Página personalizada para informações do usuário
- **Design Responsivo:** Interface adaptada para diferentes tamanhos de tela
- **Animações Suaves:** Efeitos visuais com partículas para melhor experiência

---

## �️ Tecnologias Utilizadas

- **React.js (v18):** Biblioteca JavaScript para construção de interfaces dinâmicas
- **React Router DOM (v7):** Navegação entre páginas da aplicação
- **React Icons (v5):** Biblioteca de ícones para UI
- **React Tsparticles (v2):** Efeitos de partículas animadas
- **CSS Modules:** Estilos encapsulados e reutilizáveis
- **JavaScript ES6+:** Sintaxe moderna para desenvolvimento
- **HTML5 & CSS3:** Marcação e estilização web

---

## �🚀 Começando

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 20 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Instalação

Siga os passos abaixo para configurar o projeto em sua máquina:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/ma-nobrega/base-react.git
   cd base-react
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou, se preferir Yarn:
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm start
   # ou:
   yarn start
   ```

Após esses passos, a aplicação estará rodando em [http://localhost:3000](http://localhost:3000).

## 📁 Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```
base-react/
├── public/
│   └── index.html         # Arquivo HTML principal
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   └── ComponenteExemplo/
│   │      └── index.jsx
│   ├── App.jsx             # Componente principal da aplicação
│   ├── index.js           # Ponto de entrada da aplicação
├── .gitignore             # Arquivos/pastas ignorados pelo Git
├── package.json           # Configurações do projeto e dependências
└── README.md              # Este arquivo de documentação
```

## ⚠️ Limitações e Notas Importantes

- **Sistema de Favoritos Estático:** A funcionalidade de favoritos utiliza estado local (useState) e não persiste os dados após recarregar a página. Para um ambiente de produção, seria necessário implementar um banco de dados ou localStorage.
- **Sem Sistema de Filtros:** O projeto não possui funcionalidade de filtros avançados para categorizar os jogos. Os jogos são exibidos em listas estáticas e carrosséis predefinidos.
- **Dados Mockados:** Todos os dados dos jogos são hardcoded no arquivo de dados, não há integração com API externa.

---

## 🤝 Contribuição

Contribuições são muito bem-vindas! Se você deseja sugerir melhorias, corrigir algum bug ou adicionar novos recursos, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📄 Licença

Este projeto está licenciado sob a MIT License.
