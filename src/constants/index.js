import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  kasa,
  wealthhealth,
  portefolio,
  sql,
  scss,
  vuejs,
  api,
  sportsee,
  fisheye,
  groupomania,
  petitsplats,
  billed,
  cv,
} from "../assets";

export const navLinks = [
  {
    id: "cv",
    title: "Curriculum",
  },
  {
    id: "work",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Developpeur Web",
    icon: web,
  },
  {
    title: "React / Vue",
    icon: mobile,
  },
  {
    title: "FrontEnd",
    icon: backend,
  },
  {
    title: "BackEnd",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Vue.js",
    icon: vuejs,
  },
  {
    name: "Redux",
    icon: redux,
  },
   {
    name: "API",
    icon: api,
  },
  {
    name: "SQL",
    icon: sql,
  },
   {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "SCSS",
    icon: scss,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Kasa",
    description:
      "Kasa est une application web de location d'appartement entre particuliers. On peut y voir les nombreux appartements mis en ligne avec des photos ainsi qu'une description des lieux.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kasa,
    source_code_link: "https://github.com/polzocr/P11-Kasa",
    vercel_link: "https://p11-kasa-indol.vercel.app/",
  },
  {
    name: "Wealth Health",
    description:
      "WealthHealth est une grande société financière qui utilise une application interne nommé HRnet. Cette application permet de gérer les dossiers des employés.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: wealthhealth,
    source_code_link: "https://github.com/polzocr/P-14",
    vercel_link: "https://p-14-taupe.vercel.app/"
  },
  {
    name: "Portefolio",
    description:
      "Voici le portefolio sur lequel vous êtes actuellement ! Je me suis inspiré de plusieurs portefolio en 3D pour le réaliser. Il utilise React.js, Framer-motion, React-tilt et Tailwind.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portefolio,
    source_code_link: "https://github.com/polzocr/3d_portfolio",
    vercel_link: "https://3d-portfolio-orcin-sigma.vercel.app/"
  },
  {
    name: "SportSee",
    description:
      "SportSee est un tableau de bord d'analytics développé en React. L'utilisateur va pouvoir suivre ses sessions sportives et analyser ses résultats au cours du temps. L'accent est mis sur la DataVisualisation avec notamment D3.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
       {
        name: "react-router",
        color: "blue-text-gradient",
      },
      {
        name: "prop-types",
        color: "green-text-gradient",
      },
      {
        name: "D3.js",
        color: "pink-text-gradient",
      },
    ],
    image: sportsee,
    source_code_link: "https://github.com/polzocr/P12-SportSee",
    vercel_link: "https://p12-sport-see-zeta.vercel.app/"
  },
  {
    name: "FishEye",
    description:
      "FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux. Il est entièrement adapté aux usagers présantant des handicaps.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "design-patterns",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: fisheye,
    source_code_link: "https://github.com/polzocr/Front-End-Fisheye-p6",
    vercel_link: "https://front-end-fisheye-p6.vercel.app/"
  },
  {
    name: "Groupomania",
    description:
      "Cette app est un réseau social interne pour les employés de Groupomania. Les utilisateurs peuvent poster des photos et des messages, commenter et liker les posts. (Il faut lancer le backend en local)",
    tags: [
      {
        name: "vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: groupomania,
    source_code_link: "https://github.com/polzocr/p7",
    vercel_link: "https://p7-pink.vercel.app/login"
  },
  {
    name: "Les petits plats",
    description:
      "C'est une application de recettes de cuisines. Le projet se concentre essentielement sur la partie recherche de recettes en fonction d'ingrédients et ustensils.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "algorithmie",
        color: "green-text-gradient",
      },
      {
        name: "POO ",
        color: "pink-text-gradient",
      },
    ],
    image: petitsplats,
    source_code_link: "https://github.com/polzocr/p7-les-petits-plats",
    vercel_link: "https://p7-les-petits-plats-ten.vercel.app/"
  },
  {
    name: "Billed",
    description:
      "Billed est une entreprise qui produits des solutions Saas destinées aux équipes de ressources humaines.(Suivre le Readme pour le backend et les codes de connexion)",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "testing-library",
        color: "green-text-gradient",
      },
      {
        name: "jest ",
        color: "pink-text-gradient",
      },
    ],
    image: billed,
    source_code_link: "https://github.com/polzocr/P9-Billed",
    vercel_link: "https://p9-billed-two.vercel.app/"
  },
   {
    name: "CV en ligne",
    description:
      "Voici mon cv mis dans une application créée grâce à react.js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cv,
    source_code_link: "https://github.com/polzocr/portefolio",
    vercel_link: "https://portefolio-bay.vercel.app/cv"
  },
];

export { services, technologies, projects };