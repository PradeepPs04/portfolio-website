export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Project',
      href: '#project',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Snap Notes - Quick Note Taking App',
      desc: 'Snap Notes is a simple and efficient website for creating, editing, deleting, and searching notes. Built with React.js, it uses local storage to ensure your notes are always accessible, even after closing the browser.',
      subdesc:
        'This offers a seamless experience with a responsive design built using JSX and Tailwind CSS, making it accessible on all devices, ensuring convenience for users on the go.',
      href: 'https://pradeepps04.github.io/Sanp-Notes/',
      texture: '/textures/project/project1.mp4',
      checkLive: 'Check Live Site',
      linecolor: '#EDB926',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#a9b89e',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html-5.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'React.js',
          path: '/assets/react.svg',
        },
      ],
    },

    {
      title: 'GreenThumbWeather - Agricultural Web App',
      desc: 'GreenThumbWeather is an API-powered website that supports agriculture by providing real-time weather forecasts and relevant agriculture news.',
      subdesc: 'Utilizing weather, news, and Wikipedia APIs, this helps users stay informed about weather patterns and agricultural updates, ensuring timely insights for farming decisions.',
      href: 'https://github.com/PradeepPs04/Green-Thumb-Weather',
      texture: '/textures/project/project2.mp4',
      checkLive: 'Check Project',
      linecolor: '#00E559',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html-5.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: '/assets/css.png',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/javascript.png',
        },
        {
          id: 4,
          name: 'GSAP',
          path: '/assets/gsap.svg',
        },
      ],
    },
    
    {
      title: 'Random Password Generator - Secure Password Creation Tool',
      desc: 'A simple website that generates secure passwords based on user-defined length and character preferences, supporting uppercase, lowercase, numbers, and special characters.',
      subdesc: '',
      href: 'https://pradeepps04.github.io/Random-Password-Generator/',
      texture: '/textures/project/project3.mp4',
      checkLive: 'Check Live Site',
      linecolor: '#39ACE7',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html-5.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: '/assets/css.png',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/javascript.png',
        },
      ],
    },

    {
      title: 'Tic-Tac-Toe - Classic Game',
      desc: 'A web-based Tic-Tac-Toe game built with HTML, CSS, and JavaScript, offering a simple and interactive gameplay experience.',
      subdesc: 'The game allows two players to compete, with smooth functionality and responsive design for seamless play on any device.',
      href: 'https://pradeepps04.github.io/Tic-Tac-Toe/',
      texture: '/textures/project/project4.mp4',
      checkLive: 'Check Live Site',
      linecolor: '#8549A7',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html-5.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: '/assets/css.png',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/javascript.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  