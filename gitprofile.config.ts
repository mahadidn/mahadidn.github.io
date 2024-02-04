// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mahadidn', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['', ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'e-voting',
          description: 'e-voting website using PHP with MVC.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/mahadidn/e-voting',
        },
        {
          title: 'e-learning',
          description: 'e-learning website using PHP with MVC.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/mahadidn/e-learning',
        },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mahadi Dwi Nugraha',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'mahadi-dwi-nugraha-b55647250/',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: 'mahadi_dn',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'mahadidwinugraha@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'PHPUnit',
    'HTML',
    'Linux',
    'CSS',
    'Bootstrap',
  ],
  experiences: [
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'September 2021',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [
    {
      name: 'Red Hat Certified System Administrator (RHCSA)',
      body: 'Red Hat',
      year: 'May 2023',
      link: 'https://www.credly.com/badges/06972855-95a3-4969-861c-b182f34218b6/linked_in_profile',
    },
    {
      name: 'IBM Artificial Intelligence Practitioner Certificate',
      body: 'IBM',
      year: 'September 2023',
      link: 'https://www.credly.com/badges/9b547219-9228-4cdf-86bd-92878ba561f8/linked_in_profile',
    },
    {
      name: 'Python for Data Science',
      body: 'IBM',
      year: 'May 2023',
      link: 'https://www.credly.com/badges/e49f1244-37c4-4233-8f76-810d93edd5fe/linked_in_profile',
    },
    {
      name: 'Enterprise Design Thinking Practitioner',
      body: 'IBM',
      year: 'May 2023',
      link: 'https://www.credly.com/badges/8ebb772c-5966-49c5-89da-ae4ea3bc00bd/linked_in_profile',
    },
    {
      name: 'Enterprise Design Thinking - Team Essentials for AI',
      body: 'IBM',
      year: 'June 2023',
      link: 'https://www.credly.com/badges/78f9bce7-b383-4c30-885f-e9a8db70cd07/linked_in_profile',
    },
  ],
  educations: [
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2015',
    //   to: '2019',
    // },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
