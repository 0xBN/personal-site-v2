const img1 = require('../shared/img/1.png');
const img2 = require('../shared/img/2.png');
const img3 = require('../shared/img/3.png');
const {
  ReactSvg,
  FirebaseSvg,
  HtmlSvg,
  CssSvg,
  JavascriptSvg,
  TailwindcssSvg,
  NodeSvg,
  MongodbSvg,
  ExpressSvg,
  ReduxSvg,
  TypescriptSvg,
  PythonSvg,
  JestSvg,
} = require('svgs');

export const test = 'test123';

export const user = {
  github: 'https://www.github.com/0xBN',
  linkedin: 'https://www.linkedin.com/in/brianvbn',
  email: 'brianvbn@gmail.com',
  phone: '+1-312-715-8602',
};

export const projects = [
  {
    id: 1,
    name: `Where's Waldo?`,
    images: ['https://i.imgur.com/8v3okP7.gif', img1, img2, img3],
    technologies: [
      'firebase',
      'react',
      'html',
      'css',
      'javascript',
      'tailwind',
      'node',
      'mongodb',
      'express',
      'redux',
      'typescript',
      'python',
      'jest',
    ],
    description: 'Game where the user finds objects on screen.',
    challenges: `Tagged location of object same on different client window sizes, first experience using Firebase to write and save to docs for leaderboard tracking`,
    link: `https://0xbn.github.io/hidden-objects-game/`,
    code: `https://github.com/0xBN/hidden-objects-game`,
  },
  {
    id: 2,
    name: `2Where's Waldo?`,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Number_4_in_red_rounded_square.svg/1024px-Number_4_in_red_rounded_square.svg.png',
      `http://www.clker.com/cliparts/p/7/W/8/F/T/purple-rounded-square-with-number-5-hi.png`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Eo_circle_red_number-6.svg/2048px-Eo_circle_red_number-6.svg.png`,
    ],
    technologies: ['firebase', 'react', 'html', 'css', 'javascript'],
    description: 'Game where the user finds objects on screen.',
    challenges: `Tagged location of object same on different client window sizes, first experience using Firebase to write and save to docs for leaderboard tracking`,
    link: `https://0xbn.github.io/hidden-objects-game/`,
    code: `https://github.com/0xBN/hidden-objects-game`,
  },
  {
    id: 3,
    name: `3Where's Waldo?`,
    images: [
      `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Eo_circle_blue_number-7.svg/2048px-Eo_circle_blue_number-7.svg.png`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Eo_circle_blue_number-8.svg/2048px-Eo_circle_blue_number-8.svg.png`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Eo_circle_purple_number-9.svg/1024px-Eo_circle_purple_number-9.svg.png`,
      `https://www.pngmart.com/files/14/10-Number-PNG-HD.png`,
    ],
    technologies: ['firebase', 'react', 'html', 'css', 'javascript'],
    description: 'Game where the user finds objects on screen.',
    challenges: `Tagged location of object same on different client window sizes, first experience using Firebase to write and save to docs for leaderboard tracking`,
    link: `https://0xbn.github.io/hidden-objects-game/`,
    code: `https://github.com/0xBN/hidden-objects-game`,
  },
];

export const techIcons = {
  firebase: <FirebaseSvg />,
  react: <ReactSvg />,
  html: <HtmlSvg />,
  css: <CssSvg />,
  javascript: <JavascriptSvg />,
  tailwind: <TailwindcssSvg />,
  node: <NodeSvg />,
  mongodb: <MongodbSvg />,
  express: <ExpressSvg />,
  redux: <ReduxSvg />,
  typescript: <TypescriptSvg />,
  python: <PythonSvg />,
  jest: <JestSvg />,
};

export const techWebsites = {
  firebase: 'https://firebase.google.com/',
  react: 'https://reactjs.org/',
  html: 'https://html.spec.whatwg.org/multipage/',
  css: 'https://www.w3.org/Style/CSS/Overview.en.html',
  javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  tailwind: 'https://tailwindcss.com/',
  node: 'https://nodejs.org/en/',
  mongodb: 'https://www.mongodb.com/',
  express: 'https://expressjs.com/',
  redux: 'https://redux.js.org/',
  typescript: `https://www.typescriptlang.org/`,
  python: `https://www.python.org/`,
  jest: `https://jestjs.io/`,
};

export const techWordUpperCase = ['html', 'css'];
