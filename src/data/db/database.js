import Mock from "../mock";

const database = {
  information: {
    name: 'Joseph Zasiebida',
    aboutContent: "I am a Chicago based full stack web developer. I Work with React, Node.js, MongoDb, and Express.",
    age: '',
    phone: '',
    nationality: 'American',
    language: '',
    email: 'joseph.zasiebida@gmail.com',
    address: 'Chicago.',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'http://linkedin.com/in/joseph-zasiebida',
      dribbble: '',
      github: 'https://github.com/Jzas1'
    },
    brandImage: '/img/me.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "Front-End Development",
      icon: '',
      details: "React, Vanila javaScript, CSS,  SASS,  HTML5, Redux, Bootstrap,"
    },
    {
      title: "Back-End",
      details: "Node.js, Express, MongoDB, Rest API's"
    }
  ],
  reviews: [],
  skills: [
    {
      title: "HTML5"

    },
    {
      title: "CSS3"

    },
    {
      title: "Javascript"
    },
    {
      title: "MongoDB"
    },
    {
      title: "ReactJS"
    },
    {
      title: "Vanila Js"
    },
    {
      title: "Redux"
    },
    {
      title: "Node.js"
    },
    {
      title: "Rest API"
    },
    {
      title: "Express"
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Electronic Store",
      subtitle: "Full stack website that I built useing React, Redux, MongoDb, Node.js, and Express",
      imageUrl: "/img/proshop.png",
      url: 'https://jrx-proshopapp.herokuapp.com/'
    },
    {
      id: 2,
      title: "Clothing Store",
      subtitle: "E-commerce store that I made using React, Redux and Firebase.",
      imageUrl: "/img/screenshot.png",
      url: 'https://jz-ecom.herokuapp.com/'
    },
    {
      id: 3,
      title: "Github Finder",
      subtitle: "Early project I built using React.",
      imageUrl: "/img/git-find-img.png",
      url: 'https://github-finder-jz.herokuapp.com'
    },
    {
      id: 4,
      title: "Amazona",
      subtitle: "I re-created Amazon with React, Redux, MongoDb, Node.js, and Express",
      imageUrl: "/img/amazon.png",
      url: 'https://jrz-amazona-app.herokuapp.com/'
    },
    {
      id: 5,
      title: "Dev-Connector",
      subtitle: "I created a social networking site with React, Redux, MongoDb, and Express",
      imageUrl: "/img/dev.png",
      url: 'https://polar-thicket-67223.herokuapp.com/'
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Sales Associate",
        company: "Echo Global Logistics",
        details: "Was able to grow and build a book of business while learning Web Development"

      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Sales Associate",
        company: "OptiConverstion",
        details: "Got my start in sales, where I learned about digital marketing"

      },
      {
        id: 3,
        year: "2012 - 2016",
        position: "Server",
        company: "Mon Ami Gabi",
        details: "Worked full time as a server while attending college"
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2012 - 2014",
        graduation: "Biology",
        university: "Loyola University Chicago",
      },
      {
        id: 2,
        year: "2010 - 2012",
        graduation: "Biology",
        university: "College of Dupage",
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['408-335-3825'],
    emailAddress: ['Joseph.Zasiebida@gmail.com'],
    address: "211 E Delaware Pl. Chicago, Il"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});