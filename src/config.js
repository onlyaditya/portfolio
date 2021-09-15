module.exports = {
  email: 'onlyaditya001@gmail.com',

  logo:
    'M 32.55 49.63 L 29.82 42.56 L 12.39 42.56 L 9.8 49.63 L 0 49.63 L 20.65 0 L 21.35 0 L 42.07 49.63 L 32.55 49.63 Z M 14.91 35.77 L 27.23 35.77 L 22.12 22.47 L 20.93 18.55 L 19.81 22.47 L 14.91 35.77 Z',

  logo_alphabet_g_position: 'translate(29.000000, 19.000000)',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/onlyaditya',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aditya-1994/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Skills',
      url: '/#skills',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Blogs',
      url: '/#blogs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  tech: [
    {
      name: 'javascript',
      img: 'https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png',
    },
    {
      name: 'React',
      img: 'https://cdn.iconscout.com/icon/free/png-512/react-4-1175110.png',
    },
    {
      name: 'Redux',
      img: 'https://cdn.iconscout.com/icon/free/png-512/redux-3629018-3030243.png',
    },
    {
      name: 'HTML',
      img: 'https://image.flaticon.com/icons/png/512/919/919827.png',
    },
    {
      name: 'CSS',
      img: 'https://cdn-icons-png.flaticon.com/512/919/919826.png',
    },
    {
      name: 'GIT',
      img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    },
    {
      name: 'Material UI',
      img: 'https://material-ui.com/static/logo.png',
    },
    {
      name: 'Cypress',
      img: 'https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/113/000/original/Cypress.io_Round_Logo.png?1618514359',
    },

  ],
  blogs: [
    {
      frontmatter: {
        external: 'https://aditya-nj.hashnode.dev/how-me-and-my-3-other-team-members-made-a-clone-of-the-travelocitycom-website-in-just-6-days',
        github: 'https://github.com/sheikhtausif/travelocity-clone',
        title: 'How we cloned Travelocity.com in just 6 days.',
      },
      html:
        '<p> Travelocity is an online travel agency. From this website, users can book a hotel room, flights, cars, etc. across the world..</p>',
    },
    
  ],
  projects: [
    {
      title: 'Travelocity.com Clone',
      tech: ['React', 'Redux', 'Json Server', 'Material UI'],
      github: 'https://github.com/sheikhtausif/travelocity-clone',
      image:
        'https://github.com/sheikhtausif/travelocity-clone/raw/master/Screenshots/Home1.png',
      html:
        '<p>Travelocity is an online travel agency. From this website, users can book a hotel room, flights, cars, etc. across the world..</p>',
      link: 'https://github.com/sheikhtausif/travelocity-clone',
    },
    {
      title: 'Milaap.org Clone',
      tech: ['React', 'Redux', 'Json Server'],
      github: 'https://github.com/bharadwaj-bhat/Project_milaap',
      image:
        'https://user-images.githubusercontent.com/83001524/129575962-3a15bfe4-4f33-484a-b842-82e97fc44599.png',
      html:
        '<p>Milaap is an online crowdfunding platform that enables anyone across India to raise funds for healthcare, education, sports, disaster relief and other personal causes, with great ease.</p>',
      link: 'https://github.com/bharadwaj-bhat/Project_milaap',
    },
    {
      title: 'Ajio.com Clone',
      tech: ['HTML', 'CSS', 'Javascript'],
      github: 'https://github.com/vshubhams/Ajio-clone',
      image:
        'https://github.com/vshubhams/Ajio-clone/raw/master/screenshots/Screenshot%20(65).png',
      html:
        '<p>Ajio.com is an e commece website exclusively for fashion products for men, women and children owned by Reliance Retail </p>',
      link: 'https://github.com/vshubhams/Ajio-clone',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
