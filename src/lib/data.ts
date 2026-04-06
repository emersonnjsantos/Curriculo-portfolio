// Resume data — single source of truth

export const profile = {
  name: 'Emerson N J Santos',
  role: 'Analista & Desenvolvedor Full-Stack',
  tagline: 'IA · Automação · Mobile',
  email: 'emer7681@gmail.com',
  linkedin: 'https://www.linkedin.com/in/emer7681/',
  github: 'https://github.com/emersonnjsantos',
};

export type SkillGroup = { label: string; color: string; items: string[] };
export const skillGroups: SkillGroup[] = [
  {
    label: 'Linguagens',
    color: 'purple',
    items: ['Python', 'JavaScript', 'TypeScript', 'Dart', 'Java', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frameworks & Libs',
    color: 'green',
    items: ['Flutter', 'React', 'Django', 'Node.js', 'Express', 'Streamlit', 'Bootstrap', 'LangChain', 'BeautifulSoup'],
  },
  {
    label: 'IA & Machine Learning',
    color: 'orange',
    items: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI API'],
  },
  {
    label: 'Bancos de Dados',
    color: 'pink',
    items: ['MongoDB', 'MySQL', 'Firebase'],
  },
  {
    label: 'DevOps & Ferramentas',
    color: 'blue',
    items: ['Docker', 'Git', 'GitHub', 'Selenium', 'RPA'],
  },
];

export const cloudProviders = [
  { icon: '🌐', name: 'Google Cloud' },
  { icon: '🔷', name: 'Azure' },
  { icon: '🟠', name: 'AWS' },
];

export const mernStack = [
  { icon: '🍃', name: 'MongoDB' },
  { icon: '🚂', name: 'Express' },
  { icon: '⚛️', name: 'React' },
  { icon: '🟢', name: 'Node.js' },
];

export type Experience = {
  period: string;
  role: string;
  org: string;
  bullets: string[];
};
export const experiences: Experience[] = [
  {
    period: '2023 – 2025',
    role: 'Desenvolvedor Freelancer',
    org: 'Projetos Independentes & Universitários',
    bullets: [
      'Desenvolvi aplicações web e mobile com Python, Flutter e React.',
      'Criei automações RPA utilizando Python e Selenium para redução de tarefas manuais.',
      'Implementei agentes de IA e pipelines com LangChain e OpenAI API.',
      'Construí dashboards interativos e data apps com Streamlit.',
      'Projetei e mantive bancos de dados relacionais e NoSQL (MySQL, MongoDB, Firebase).',
    ],
  },
];

export type Project = {
  icon: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
};
export const projects: Project[] = [
  {
    icon: '🤖',
    title: 'Agentes de IA',
    url: 'https://github.com/emersonnjsantos/langchain_ask_images',
    description: 'Agentes inteligentes em Python com LangChain para análise de imagens e perguntas em linguagem natural.',
    tags: ['Python', 'LangChain', 'OpenAI'],
  },
  {
    icon: '⚙️',
    title: 'Automação RPA',
    url: 'https://github.com/emersonnjsantos/RPA_Automacao',
    description: 'Automação de processos empresariais com Python e Selenium, eliminando tarefas repetitivas.',
    tags: ['Python', 'Selenium', 'RPA'],
  },
  {
    icon: '📊',
    title: 'Dashboard de Dados',
    url: 'https://github.com/emersonnjsantos/langchain_ask_images',
    description: 'Dashboard interativo para visualização de dados e insights com Streamlit.',
    tags: ['Python', 'Streamlit'],
  },
  {
    icon: '📡',
    title: 'App Broadcasting',
    url: 'https://github.com/emersonnjsantos/app_broadcasting_flutter',
    description: 'Aplicativo Flutter com transmissão de dados em tempo real e gerenciamento de estado.',
    tags: ['Flutter', 'Dart'],
  },
  {
    icon: '₿',
    title: 'Bitcoin Price',
    url: 'https://github.com/emersonnjsantos/bitcoim_price_flutter',
    description: 'Consulta em tempo real do preço do Bitcoin com integração a APIs de criptomoedas.',
    tags: ['Flutter', 'API REST'],
  },
  {
    icon: '⛽',
    title: 'Calcula Fuel',
    url: 'https://github.com/emersonnjsantos/calcula_fuel_flutter',
    description: 'Calculadora inteligente para decidir entre álcool e gasolina com base nos preços atuais.',
    tags: ['Flutter', 'Dart'],
  },
  {
    icon: '🗣️',
    title: 'Aprenda Inglês',
    url: 'https://github.com/emersonnjsantos/aprenda_ingles_flutter',
    description: 'App educativo para aprender inglês com frases do dia a dia, ideal para iniciantes.',
    tags: ['Flutter', 'Dart'],
  },
  {
    icon: '✈️',
    title: 'Agência de Turismo',
    url: 'https://github.com/emersonnjsantos/amanhecer_turismo_agencia',
    description: 'Aplicativo completo para agência de turismo desenvolvido em Flutter com UI moderna.',
    tags: ['Flutter', 'Dart'],
  },
  {
    icon: '🍽️',
    title: 'App Restaurant',
    url: 'https://github.com/emersonnjsantos/app_restaurant_flutter',
    description: 'Aplicativo de restaurante com cardápio digital desenvolvido em Flutter.',
    tags: ['Flutter', 'Dart'],
  },
];

export const education = {
  degree: 'Análise e Desenvolvimento de Sistemas',
  school: 'Universidade Cruzeiro do Sul',
  period: '2023 – 2025',
};
