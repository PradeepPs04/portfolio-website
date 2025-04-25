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
    // VHerbs
    {
      title: 'VHerbs - Virtual Herbal Garden',
      desc: 'VHerbs is an interactive web platform that showcases medicinal plants from AYUSH systems using 3D visualization, AI chat, and multimedia content. Built with the MERN stack and Three.js, it blends ancient knowledge with modern technology.',
      subdesc:
        'Users can explore a 3D herbal garden, search and filter plants, interact with an AI assistant, and access multimedia-rich plant profiles. The interface is fully responsive and designed for smooth, immersive learning.',
      href: 'https://vherbs.vercel.app/',
      texture: '/textures/project/v_herbs.mp4',
      checkLive: 'Check Live Site',
      linecolor: '#58A36C',
      logo: '/assets/vherbs-logo.png',
      logoStyle: {
        backgroundColor: '#E1EEBC',
        border: '0.2px solid #2F4F4F',
        boxShadow: '0px 0px 60px 0px #58A36C4D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'MongoDB',
          path: '/assets/mongodb.png',
        },
        {
          id: 2,
          name: 'Express.js',
          path: '/assets/express.png',
        },
        {
          id: 3,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 4,
          name: 'Node.js',
          path: '/assets/nodejs.png',
        },
        {
          id: 5,
          name: 'Three.js',
          path: '/assets/threejs.png',
        },
        {
          id: 6,
          name: 'Tailwind CSS',
          path: '/assets/tailwindcss.png',
        },
      ],
    },    
    // StudyNotion
    {
      title: 'StydyNotion - EdTech Website',
      desc: 'StudyNotion is a full-stack platform built with the MERN stack, allowing users to create, sell, and purchase online courses. It includes secure authentication and role-based access control (RBAC) using JWT for different user roles.',
      subdesc:
        'The platform integrates Razorpay for seamless payments and features a responsive UI designed with React.js and Tailwind CSS, ensuring smooth usability across all devices.',
      href: 'https://study-notion-front-end-plum.vercel.app/',
      texture: '/textures/project/studyNotion.mp4',
      checkLive: 'Check Live Site',
      linecolor: '#14CFFB',
      logo: '/assets/studynotion-logo.png',
      logoStyle: {
        backgroundColor: '#fff',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'MongoDB',
          path: '/assets/mongodb.png',
        },
        {
          id: 2,
          name: 'Express.js',
          path: '/assets/express.png',
        },
        {
          id: 3,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 4,
          name: 'Node.js',
          path: '/assets/nodejs.png',
        },
        {
          id: 5,
          name: 'Tailwind CSS',
          path: '/assets/tailwindcss.png',
        },
      ],
    },
    // CPU scheduling simulator
    {
      title: 'CPU-Scheduling-Simulator - Interactive Learning Tool',
      desc: 'CPU-Scheduling-Simulator is a Python app that visualizes and compares CPU scheduling algorithms like FCFS, SJF, SRTF, and Priority Scheduling. It’s designed for educational use, making complex OS concepts easy to understand.',
      subdesc:
        'The user interface, built with Tkinter and enhanced with Pillow for better visuals, provides a simple and interactive way to explore real-time scheduling results.',
      href: 'https://github.com/PradeepPs04/CPU-Scheduling-Simulator',
      texture: '/textures/project/cpu_scheduling_simulator.mp4',
      checkLive: 'Check Project',
      linecolor: '#FF5757',
      logo: '/assets/process_scheduling_logo.png',
      logoStyle: {
        backgroundColor: '#fff',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.png',
        },
        {
          id: 2,
          name: 'Tkinter',
          path: '/assets/tkinter.png',
        },
      ],
    },
    // SnapNotes
    {
      title: 'Snap Notes - Quick Note Taking App',
      desc: 'Snap Notes is a simple and efficient website for creating, editing, deleting, and searching notes. Built with React.js, it uses local storage to ensure your notes are always accessible, even after closing the browser.',
      subdesc:
        'This offers a seamless experience with a responsive design built using JSX and Tailwind CSS, making it accessible on all devices, ensuring convenience for users on the go.',
      href: 'https://pradeepps04.github.io/Sanp-Notes/',
      texture: '/textures/project/snap_notes.mp4',
      checkLive: 'Check Project',
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
    // GreenThumbWeather
    {
      title: 'GreenThumbWeather - Agricultural Web App',
      desc: 'GreenThumbWeather is an API-powered website that supports agriculture by providing real-time weather forecasts and relevant agriculture news.',
      subdesc: 'Utilizing weather, news, and Wikipedia APIs, this helps users stay informed about weather patterns and agricultural updates, ensuring timely insights for farming decisions.',
      href: 'https://pradeepps04.github.io/Green-Thumb-Weather/',
      texture: '/textures/project/green_thumb_weather.mp4',
      checkLive: 'Check Live Site',
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
    // github link for other projects
    {
      title: 'Check Other Projects',
      desc: 'Explore more of my work to see a variety of projects.',
      subdesc: 'From immersive web apps to scalable platforms, each project reflects my passion for building thoughtful digital experiences.',
      href: 'https://github.com/PradeepPs04?tab=repositories',
      texture: '/textures/project/otherProjects.mp4',
      checkLive: 'View on GitHub',
      linecolor: '#A3A3A3',
      logo: '/assets/github.svg',
      logoStyle: {
        backgroundColor: '#000',
        border: '0.2px solid #CCCCCC',
        boxShadow: '0px 0px 40px 0px #D4D4D44D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [],
    }    
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
  