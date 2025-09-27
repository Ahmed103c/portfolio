import { Project } from "../model/Project";

export const projects : Project[] = [
  {
    name: 'Wealthwise',
    description:
      'Application bancaire centralisée permettant de gérer l’ensemble de ses comptes depuis une seule interface. Elle offre des statistiques financières détaillées et intègre un chatbot pour fournir des conseils personnalisés ',
    type: 'web-app',
    video_link: [
      'https://res.cloudinary.com/dsvwz4dru/video/upload/v1744475731/lch8veyuvdgpt5dqiqvo.webm',
    ],
    link: 'https://github.com/Ahmed103c/WealthWise',
    techno: [
      {
        name: 'Angular',
        icon: 'https://img.icons8.com/?size=100&id=71257&format=png&color=000000',
      },
      {
        name: 'TypeScript',
        icon: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000',
      },
      {
        name: 'Spring Boot',
        icon: 'https://img.icons8.com/?size=100&id=90519&format=png&color=000000',
      },
      {
        name: 'PostgreSQL',
        icon: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000',
      },
    ],
  },
  {
    name: 'MyFilm',
    type: 'web-app',
    description:
      'Plateforme web dédiée à l’hébergement et à la gestion de films, intégrant des API externes pour l’importation automatique de contenus variés.',
    
      video_link: [
      'https://res.cloudinary.com/dsvwz4dru/video/upload/v1744475742/j2ewxku7hdj2hjx3jued.webm',
    ],
    link: 'https://github.com/Ahmed103c/MyFilm',
    techno: [
      {
        name: '.NET C#',
        icon: 'https://img.icons8.com/?size=100&id=Fycm8TUhWmFU&format=png&color=000000',
      },
      {
        name: 'Blazor',
        icon: 'https://img.icons8.com/?size=100&id=iucnc54epl0f&format=png&color=000000',
      },
      {
        name: 'SQLite',
        icon: 'https://img.icons8.com/?size=100&id=VMRAbKfEzssG&format=png&color=000000',
      },
    ],
  },
  {
    name: 'Beesim',
    type: 'simulation',
    description:
      'Simulation multi-agents représentant l’interaction entre deux ruches d’abeilles, avec modélisation de comportements variés et dynamiques.',
    
      video_link: [
      'https://res.cloudinary.com/dsvwz4dru/video/upload/v1744475735/s3ki1ajqd0itxhpemz0v.webm',
    ],
    link: 'https://github.com/Ahmed103c/BeeSim',
    techno: [
      {
        name: 'java & javaFX',
        icon: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000',
      },
    ],
  },
  {
    name: 'Immolink',
    type: 'web-app',
    description:
      'Prototype d’application web réalisé lors du Hackathon Sopra Steria, visant à simuler les interactions sociales et les liens de voisinage au sein d’une communauté.',
    
      video_link: [
      'https://res.cloudinary.com/dsvwz4dru/video/upload/v1744475579/djt05nskijkpogjgqkbg.webm',
    ],
    techno: [
      {
        name: 'HTML',
        icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
      },
      {
        name: 'CSS',
        icon: 'https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000',
      },
      {
        name: 'JavaScript',
        icon: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000',
      },
    ],
    link: 'https://github.com/Ahmed103c/Hackathon_2024_Sopra_Steria',
  },
  {
    name: 'Evac',
    type: 'simulation',
    description:
      'Simulation scientifique du mouvement de foule en situation d’évacuation d’urgence, basée sur des modèles comportementaux réalistes.',
    
      video_link: [
      'https://res.cloudinary.com/dsvwz4dru/video/upload/v1744475720/gh1sw35a645ikmon0fwy.webm',
    ],
    techno: [
      {
        name: 'Python',
        icon: 'https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000',
      },
    ],
    link: 'https://github.com/Ahmed103c/Evac_Mvt_Foule',
  },
  {
    name: '********',
    type: 'upcoming',
    description:
      "simple jeu de Cartes",
    
      video_link: [
      '',
    ],
    techno: [
      {
        name: '.NET C#',
        icon: 'https://img.icons8.com/?size=100&id=Fycm8TUhWmFU&format=png&color=000000',
      },
    ],
    link: 'https://github.com/Ahmed103c/Evac_Mvt_Foule',
  },
];
