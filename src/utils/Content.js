const content = {
  website: {
    about: {
      /* eslint max-len: ["error", { "ignoreStrings": true }] */
      paragraphs: [
        'Hi, my name is <strong>Isaac Gluck</strong>. I am currently a software engineer at <strong>AppNexus</strong>. I\'m passionate about technology, entrepreneurship, and impact.',
        'I have experience as a founder of my own startup as well as past internships with <strong>AppNexus</strong> and <strong>Amazon</strong>. In college, I worked as a Software Engineer at the <strong>Dartmouth DALI Lab</strong>, served as a <strong>TA</strong>, and conducted independent research in the <strong>Evolutionary Computational Genomics Lab at Dartmouth</strong>',
        'Through my academic work, my professional experience, and my own interest, I\'ve learned <strong>Java, Python, Javascript, C, HTML, and CSS</strong>. I\'ve also gained experience with frameworks such as <strong>React, Flask, and Dropwizard</strong>, among others. I\'ve used tools such as <strong>Kafka</strong>, <strong>SQL</strong> and <strong>MongoDB</strong>, <strong>Git</strong> for version control and <strong>Concourse, Docker, Kubernetes, AWS, and Heroku</strong> for deployment.',
        'Beyond the screen, I am an avid <strong>soccer</strong> fan and player (you\'ll never walk alone) and am on the Dartmouth <strong>Ultimate Frisbee</strong> Team. I have played the <strong>violin</strong> my entire life and recently taught myself <strong>guitar</strong>.',
      ],
      keys: [1, 2, 3, 4],
    },
    experience: {
      AppNexus: {
        title: 'Software Development Engineer Intern',
        subtitle: 'AppNexus (aquired by AT&T) - New York, NY',
        text: 'I interned as a Software Developer Engineer at the New York Ad Tech Unicorn AppNexus. I worked on the Optimization Technology team and built a slackbot to give account executives better access to data saving the data science and engineering temas time. I used the Java Dropwizard framework to build a RESTful webservice as the backend for the Slackbot. I deployed the webservice using Docker and Kubernetes. After finishing my project early, I built a seperate frontend using Node and React. I also had the opportunity to write for the company blog about my internship.',
      },
      Research: {
        title: 'Research Assistant',
        subtitle: 'Dartmouth College - Hanover, NH',
        text: 'I was awarded the Mellam Family Foundation Grant to work full time as a research assistant in the Dartmouth Evolutionary Computational Genomics Lab. I am helped design and build a novel algorithm and metric to compare phylogenetic trees with different numbers of taxa.',
      },
      Amazon: {
        title: 'Software Development Engineer Intern',
        subtitle: 'Amazon - New York, NY',
        text: 'My freshman summer I was hired as an SDE Intern at Amazon. I worked on the Supply Chain Optimization Team in New York building an internal Java service to help improve large electronic product demand forecasting accuracy.',
      },
      TA: {
        title: 'CS 10 Teacher\'s Assistant',
        subtitle: 'Dartmouth College - Hanover, NH',
        text: 'I worked as a Teacher\'s Assistant for CS10 - Object Oriented Programming and CS52 - Full Stack Web Development.',
      },
      Tassel: {
        title: 'Cofounder and CEO',
        subtitle: 'Tassel - Hanover, NH',
        text: 'I founded Tassel with a team of 4 friends to make a less connection-based, more meritocratic recruiting platform. Tassel used Professor referrals to identify candidates. We signed up two thirds of the Dartmouth Faculty as well as professors at Princeton, University of Rochester, NYU, Hunter College and UC Berkley. More than 200 students used Tassel and we worked with more than 10 companies to land over 10 interviews and a successful hire. We even got the amazing opportunity to interview for Y Combinator.',
      },
    },
    portfolio: {
      Memur: 'I built a geo-fencing, meme sharing app, with a team of 5. We used an <strong>Express Node server</strong> with a <strong>MongoDB database</strong> hosted by <strong>Heroku</strong> for the backend. We wrote the front end with <strong>React Native</strong> and stored the images on <strong>AWS</strong>. We want to add features such as image detection for inappropriate images, as well as better image compression. See the <a href="https://github.com/dartmouth-cs52-18S/project-api-memur"  target="_blank" rel="noreferrer noopener">backend code</a>, and the <a href="https://github.com/dartmouth-cs52-18S/project-client-memur"  target="_blank" rel="noreferrer noopener">frontend code</a>.',
      Pacman: 'I created a Pacman replica application using Java and the Swing library. I had a lot of fun making a system that the user can add levels to with txt files. <a href="/assets/Pacman-Replica.zip"  >Download the jar</a>. See the code and how to add levels <a href="https://github.com/IsaacGluck/pacman-project"  target="_blank" rel="noreferrer noopener">on github</a>. Don\'t get eaten!',
      Watch: 'As part of a team of 4, I built a smartwatch scavenger hunt game using <strong>C</strong> and the <strong>Pebble Watch SDK</strong>. There was a main game server, a homebase client, and a field agent client on a smartwatch. The game server hosts a real time scavenger hunt and homebase/field agent teams join and compete to find the clues first. Check out <a href="https://github.com/IsaacGluck/smartwatch-scavenger-hunt"  target="_blank" rel="noreferrer noopener">the code</a>.',
      TSE: 'I implemented a small search engine in <strong>C</strong>. The project has 3 components: a <strong>Web Crawler</strong> using a a <strong>breadth-first search</strong> approach, an <strong>Indexer</strong> which maps webpages to words to word counts using a hashtable, and a <strong>Querier</strong> which allows a user to search the crawled pages. See <a href="https://github.com/IsaacGluck/tse"  target="_blank" rel="noreferrer noopener">the code</a>.',
      PainTrain: 'I took on the role of web master for my Ultimate Frisbee team as I taught myself web development. I built the team website with raw <strong>HTML, CSS, Javascript</strong>, and the <strong>MaterializeCSS</strong> library. Check out <a href="https://www.dartmouth.edu/~ultimate/home.html"  target="_blank" rel="noreferrer noopener">the website</a>. ',
      Website: 'I built this website using <strong>Node</strong> and <strong>React</strong> to show off what I\'ve been working on and to practice my web development skills. All the styling was done myself. You can see my first attempt at a personal website <a href="https://IsaacGluck.github.io"  target="_blank" rel="noreferrer noopener">at the old link</a> (Using raw <strong>HTML, CSS, Javascript, and Bootstrap</strong>), and <a href="https://github.com/IsaacGluck/website-react" target="_blank" rel="noreferrer noopener">the code for this new site</a>. Let me know how the new version looks!',
    },
  },
};

export default content;
