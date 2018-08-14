const content = {
  website: {
    about: {
      /* eslint max-len: ["error", { "ignoreStrings": true }] */
      paragraphs: [
        'Hi, my name is <strong>Isaac Gluck</strong>. I am an aspiring software engineer studying Computer Science at <strong>Dartmouth College</strong>. I began my coding career at <strong>Stuyvesant High School</strong> and have not looked back. I\'ve taken classes in Object Oriented Programming, Computer Architecture, Algorithms, Computer Graphics, and Full Stack Web Development.',
        'I work as a teaching assistant and tutor as well as doing independent research in the <strong>Evolutionary Computational Genomics Lab at Dartmouth</strong>. I also had amazing experiences interning at <strong>Amazon</strong> and <strong>AppNexus</strong>.',
        'Through my academic work, my professional experience, and my own interest, I\'ve learned <strong>Java, Python, C, Javascript, HTML, and CSS</strong>. I\'ve also gained experience with frameworks such as <strong>Dropwizard, Flask, Node, React, and Bootstrap</strong>, among others. I\'ve used tools such as <strong>SQL</strong> and <strong>MongoDB</strong>, <strong>Git</strong> for version control and <strong>Docker, Kubernetes, AWS, and Heroku</strong> for deployment.',
        'Beyond the screen, I am an avid <strong>soccer</strong> fan and player (you\'ll never walk alone) and am on the Dartmouth <strong>Ultimate Frisbee</strong> Team (for whom I\'m the webmaster). I have played the <strong>violin</strong> my entire life and recently taught myself <strong>guitar</strong>.',
      ],
      keys: [1, 2, 3, 4],
    },
    experience: {
      AppNexus: {
        title: 'Software Development Engineer Intern',
        subtitle: 'AppNexus (aquired by AT&T) - New York, NY',
        text: 'This past summer I interned as a Software Developer Engineer at the New York Ad Tech Company AppNexus. I worked on the Optimization Technology team and used Java Dropwizard to build a RESTful webservice as the backend for a Slackbot. I deployed the webservice using Docker and Kubernetes. After finishing my project early, I added a Node React frontend using the same backend. I also got the opportunity to write for the company blog about my internship.',
      },
      Research: {
        title: 'Research Assistant',
        subtitle: 'Dartmouth College - Hanover, NH',
        text: 'Winter term of Junior year, I was awarded the Mellam Family Foundation Grant to work full time as a research assistant in the Dartmouth Evolutionary Computational Genomics Lab. I now work part time in the lab as I continue taking classes. I am helping design and build a novel algorithm and metric to compare phylogenetic trees with different numbers of taxa.',
      },
      Amazon: {
        title: 'Software Development Engineer Intern',
        subtitle: 'Amazon - New York, NY',
        text: 'My freshman summer I was hired as an SDE Intern at Amazon. I worked on the Supply Chain Optimization Team in New York building a Java internal service to help improve large electronic product demand forecasting accuracy.',
      },
      TA: {
        title: 'CS 10 Teacher\'s Assistant',
        subtitle: 'Dartmouth College - Hanover, NH',
        text: 'I worked as a Teacher\'s Assistant for Computer Science 10 - Problem Solving via Object Oriented Programming. I held multiple office hours every week, graded homework assignments and exams, and lead a section of 12.',
      },
    },
    portfolio: {
      Memur: 'I built an a geo-fencing, meme sharing app, with a team of 5. We used an <strong>Express Node server</strong> with a <strong>MongoDB database</strong> hosted by <strong>Heroku</strong> for the backend. We wrote the front end with <strong>React Native</strong> and stored the images on <strong>AWS</strong>. We want to add features such as image detection for inappropriate images, as well as better image compression. See the backend code <a href="#">here</a>, and the frontend code <a href="#">here</a>.',
      Pacman: 'I created a Pacman replica application using Java and the Swing library. I had a lot of fun making a system that the user can add levels to with txt files. Download the jar <a href="#">here</a>. See the code and how to add levels <a href="#">here</a>. Don\'t get eaten!',
      Watch: 'On a team of 4, built a smartwatch scavenger hunt game using <strong>C</strong> and the <strong>Pebble Watch SDK</strong>. There was a main game server, a homebase client, and a field agent client on a smartwatch. The game server hosts a real time scavenger hunt and homebase/field agent teams join and compete to find the clues first. See the code <a href="#">here</a>.',
      TSE: 'I implemented a small search engine in <strong>C</strong>. The project has 3 components: a <strong>Web Crawler</strong> using a a <strong>breadth-first search</strong> approach, an <strong>Indexer</strong> which maps webpages to words to word counts using a hashtable, and a <strong>Querier</strong> which allows a user to search the crawled pages. See the code <a href="#">here</a>.',
      PainTrain: 'As I taught myself web development I took on the role of web master for my Ultimate Frisbee team. I built the site with raw <strong>HTML, CSS, Javascript</strong>, and the <strong>MaterializeCSS</strong> library. Check it out <a href="#">here</a>. ',
      Website: 'I built this website using <strong>Node</strong> and <strong>React</strong> to show off what I\'ve been working on and to practice my web development skills. All the styling was done myself. You can see my first attempt at a personal website <a href="#">here</a> (Using raw <strong>HTML, CSS, Javascript, and Bootstrap</strong>), and the code for this new site <a href="#">here</a>. Let me know how it looks!',
    },
  },
};

export default content;
