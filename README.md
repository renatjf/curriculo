# 💼 Currículo — Vite + React + SCSS

Currículo profissional em formato de homepage com efeito parallax, loading animado com logo, animações ao scroll e barras de habilidade dinâmicas.

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) versão **18 ou superior**
- npm (já vem com o Node)

Verifique com:

```bash
node -v
npm -v
```

---

## 🚀 Instalação e execução

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse em: `http://localhost:5173`

### 3. Build para produção

```bash
npm run build
```

### 4. Visualizar o build

```bash
npm run preview
```

---

## 📝 Como personalizar seus dados

Edite o arquivo **`src/data.js`** com suas informações:

| Campo               | Descrição                                                        |
| ------------------- | ---------------------------------------------------------------- |
| `personal.nome`     | Seu nome completo                                                |
| `personal.titulo`   | Título profissional                                              |
| `personal.foto`     | URL da foto (LinkedIn ou outra)                                  |
| `personal.sobre`    | Texto de apresentação (parágrafos separados por linha em branco) |
| `personal.celular`  | Número de telefone                                               |
| `personal.email`    | E-mail de contato                                                |
| `personal.cidade`   | Cidade / estado                                                  |
| `personal.linkedin` | URL completa do LinkedIn                                         |
| `formacao`          | Array de formações acadêmicas                                    |
| `especializacoes`   | Array de cursos e certificações                                  |
| `experiencias`      | Array de empresas com tecnologias e porcentagens                 |

---

## 🗂️ Estrutura do projeto

```
portfolio/
├── public/
│   └── logo.svg              # Logo usada no favicon e loading
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Loading.jsx       # Tela de loading com logo animada
│   │   ├── Loading.module.scss
│   │   ├── Navbar.jsx        # Navegação fixa + menu mobile
│   │   ├── Navbar.module.scss
│   │   ├── ParallaxBg.jsx    # Fundo parallax com blobs
│   │   ├── ParallaxBg.module.scss
│   │   ├── Hero.jsx          # Seção inicial com foto e nome
│   │   ├── Hero.module.scss
│   │   ├── Sobre.jsx         # Quem sou + dados de contato
│   │   ├── Sobre.module.scss
│   │   ├── Formacao.jsx      # Formação acadêmica
│   │   ├── Formacao.module.scss
│   │   ├── Especializacoes.jsx  # Cursos e certificações
│   │   ├── Especializacoes.module.scss
│   │   ├── Experiencias.jsx  # Linha do tempo + barras de skill
│   │   ├── Experiencias.module.scss
│   │   ├── Contato.jsx       # Seção de contato
│   │   ├── Contato.module.scss
│   │   ├── Footer.jsx
│   │   └── Footer.module.scss
│   ├── styles/
│   │   └── global.scss       # Variáveis, reset, utilitários
│   ├── App.jsx
│   ├── data.js               # ← EDITE AQUI seus dados
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🎨 Features

- ⚡ **Vite + React** — build ultrarrápido
- 🎭 **Loading screen** com logo animada e barra de progresso
- 🌀 **Parallax** — camadas com velocidades diferentes no scroll
- 📱 **Mobile first** — menu hambúrguer, layout responsivo em todos os breakpoints
- 🔢 **Barras de habilidade** — animam quando entram na tela (Intersection Observer)
- 🕐 **Linha do tempo** — experiências em ordem cronológica visual
- ✨ **Animações de entrada** — fade + slide ao scrollar
- 🎨 **SCSS Modules** — estilos encapsulados por componente
- 🌑 **Dark theme** elegante com paleta ouro + vermelho

---

## 🛠️ Tecnologias

- React 18
- Vite 5
- SCSS (Sass)
- CSS Modules
- Intersection Observer API (nativo)
