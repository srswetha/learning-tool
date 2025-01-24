import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/LearningPaths.css';

const LearningPaths = () => {
  const { path } = useParams(); // Get the dynamic path from the URL

  const resources = {
    frontend: [
      {
        category: 'HTML Tools',
        resources: [
          {
            title: 'Learn HTML Basics',
            docLink: 'https://www.w3schools.com/html/',
            videoLink: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
          },
          {
            title: 'HTML Forms',
            docLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form',
            videoLink: 'https://www.youtube.com/watch?v=fNcJuPIZ2WE',
          },
        ],
        miniProject: {
          title: 'Create a Simple HTML Form',
          link: 'https://www.geeksforgeeks.org/html-form/',
        },
      },
      {
        category: 'CSS Frameworks',
        resources: [
          {
            title: 'Learn CSS Basics',
            docLink: 'https://www.w3schools.com/css/',
            videoLink: 'https://www.youtube.com/watch?v=yfoY53QXEnI',
          },
          {
            title: 'CSS Grid and Flexbox',
            docLink: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
            videoLink: 'https://www.youtube.com/watch?v=rg7Fvvl3taU',
          },
        ],
        miniProject: {
          title: 'Build a Responsive Web Page',
          link: 'https://www.freecodecamp.org/news/building-a-responsive-layout-with-css-grid-and-flexbox-d1b60d0edb36/',
        },
      },
      {
        category: 'JavaScript Frameworks',
        resources: [
          {
            title: 'Introduction to React',
            docLink: 'https://reactjs.org/docs/getting-started.html',
            videoLink: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          },
          {
            title: 'Learn Vue.js Basics',
            docLink: 'https://vuejs.org/guide/introduction.html',
            videoLink: 'https://www.youtube.com/watch?v=FXpIoQ_rT_c',
          },
        ],
        miniProject: {
          title: 'Build a To-Do App with React',
          link: 'https://www.freecodecamp.org/news/how-to-build-a-react-project-from-scratch/',
        },
      },
    ],
    backend: [
      {
        category: 'Node.js Basics',
        resources: [
          {
            title: 'Learn Node.js Basics',
            docLink: 'https://nodejs.org/en/docs/',
            videoLink: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
          },
          {
            title: 'Learn Express.js',
            docLink: 'https://expressjs.com/',
            videoLink: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
          },
        ],
        miniProject: {
          title: 'Build a REST API with Node.js',
          link: 'https://www.freecodecamp.org/news/rest-api-tutorial-learn-to-build-api-with-node-js-and-express/',
        },
      },
      {
        category: 'Database Integration',
        resources: [
          {
            title: 'Learn MongoDB Basics',
            docLink: 'https://www.mongodb.com/docs/manual/introduction/',
            videoLink: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
          },
          {
            title: 'Using Mongoose',
            docLink: 'https://mongoosejs.com/docs/',
            videoLink: 'https://www.youtube.com/watch?v=WDrU305J1yw',
          },
        ],
        miniProject: {
          title: 'Build a Blog Backend',
          link: 'https://www.digitalocean.com/community/tutorials/building-a-simple-blog-with-node-js-and-mongodb',
        },
      },
    ],
    'full-stack': [
      {
        category: 'MERN Stack Overview',
        resources: [
          {
            title: 'Introduction to MERN',
            docLink: 'https://www.mongodb.com/mern-stack',
            videoLink: 'https://www.youtube.com/watch?v=ktjafK4SgWM',
          },
          {
            title: 'Learn Full-Stack Basics',
            docLink: 'https://reactjs.org/docs/getting-started.html',
            videoLink: 'https://www.youtube.com/watch?v=7CqJlxBYj-M',
          },
        ],
        miniProject: {
          title: 'Build a MERN To-Do App',
          link: 'https://www.freecodecamp.org/news/build-a-mern-stack-app/',
        },
      },
      {
        category: 'Deployment',
        resources: [
          {
            title: 'Deploy with Heroku',
            docLink: 'https://devcenter.heroku.com/articles/git',
            videoLink: 'https://www.youtube.com/watch?v=8O1hbyBa8go',
          },
          {
            title: 'Netlify Basics',
            docLink: 'https://docs.netlify.com/',
            videoLink: 'https://www.youtube.com/watch?v=sP3LqTxkn8E',
          },
        ],
        miniProject: {
          title: 'Deploy a Full-Stack App',
          link: 'https://www.freecodecamp.org/news/how-to-deploy-a-fullstack-app/',
        },
      },
    ],
    'data-engineering': [
      {
        category: 'Data Pipelines',
        resources: [
          {
            title: 'Introduction to Data Pipelines',
            docLink: 'https://aws.amazon.com/datapipeline/',
            videoLink: 'https://www.youtube.com/watch?v=YAj1nb43zaw',
          },
          {
            title: 'Apache Kafka Basics',
            docLink: 'https://kafka.apache.org/documentation/',
            videoLink: 'https://www.youtube.com/watch?v=U2UHpciU2RQ',
          },
        ],
        miniProject: {
          title: 'Create a Simple ETL Pipeline',
          link: 'https://www.freecodecamp.org/news/how-to-create-an-etl-pipeline-in-python/',
        },
      },
    ],
    'software-engineering': [
      {
        category: 'Version Control Systems',
        resources: [
          {
            title: 'Git and GitHub Basics',
            docLink: 'https://git-scm.com/doc',
            videoLink: 'https://www.youtube.com/watch?v=8JJ101D3knE',
          },
          {
            title: 'Advanced Git Techniques',
            docLink: 'https://git-scm.com/book/en/v2',
            videoLink: 'https://www.youtube.com/watch?v=2sjqTHE0zok',
          },
        ],
        miniProject: {
          title: 'Create and Manage a GitHub Repository',
          link: 'https://www.freecodecamp.org/news/how-to-create-your-first-github-repo/',
        },
      },
      {
        category: 'Software Design Patterns',
        resources: [
          {
            title: 'Introduction to Design Patterns',
            docLink: 'https://refactoring.guru/design-patterns',
            videoLink: 'https://www.youtube.com/watch?v=v9ejT8FO-7I',
          },
          {
            title: 'Learn SOLID Principles',
            docLink: 'https://en.wikipedia.org/wiki/SOLID',
            videoLink: 'https://www.youtube.com/watch?v=vAV4Vy4jfkc',
          },
        ],
        miniProject: {
          title: 'Implement Design Patterns in JavaScript',
          link: 'https://www.digitalocean.com/community/tutorials/introduction-to-design-patterns-in-javascript',
        },
      },
    ],
    'data-analytics': [
      {
        category: 'Excel and SQL Basics',
        resources: [
          {
            title: 'Learn SQL Basics',
            docLink: 'https://www.w3schools.com/sql/',
            videoLink: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
          },
          {
            title: 'Excel Tips and Tricks',
            docLink: 'https://exceljet.net/',
            videoLink: 'https://www.youtube.com/watch?v=8xq1kRz0G6k',
          },
        ],
        miniProject: {
          title: 'Analyze a Dataset with SQL and Excel',
          link: 'https://www.datacamp.com/community/tutorials/tutorial-sql-tips-and-tricks',
        },
      },
      {
        category: 'Data Visualization',
        resources: [
          {
            title: 'Learn Tableau Basics',
            docLink: 'https://www.tableau.com/learn/training',
            videoLink: 'https://www.youtube.com/watch?v=GqafgAVN6bM',
          },
          {
            title: 'Introduction to Power BI',
            docLink: 'https://learn.microsoft.com/en-us/power-bi/',
            videoLink: 'https://www.youtube.com/watch?v=AGrl-H87pRU',
          },
        ],
        miniProject: {
          title: 'Create a Dashboard with Tableau',
          link: 'https://www.tableau.com/learn/articles/designing-data-dashboard',
        },
      },
    ],
    'machine-learning': [
      {
        category: 'Basics of Machine Learning',
        resources: [
          {
            title: 'Learn ML Basics',
            docLink: 'https://www.coursera.org/learn/machine-learning',
            videoLink: 'https://www.youtube.com/watch?v=GwIo3gDZCVQ',
          },
          {
            title: 'Python for ML',
            docLink: 'https://scikit-learn.org/stable/',
            videoLink: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
          },
        ],
        miniProject: {
          title: 'Build a Linear Regression Model',
          link: 'https://www.geeksforgeeks.org/linear-regression-in-python/',
        },
      },
    ],
    cybersecurity: [
      {
        category: 'Introduction to Cybersecurity',
        resources: [
          {
            title: 'Cybersecurity Basics',
            docLink: 'https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html',
            videoLink: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
          },
          {
            title: 'OWASP Top 10',
            docLink: 'https://owasp.org/www-project-top-ten/',
            videoLink: 'https://www.youtube.com/watch?v=rvpCw9SZ59U',
          },
        ],
        miniProject: {
          title: 'Create a Secure Web Application',
          link: 'https://www.freecodecamp.org/news/securing-web-applications/',
        },
      },
    ],
  };

  // Handle invalid paths
  if (!resources[path]) {
    return (
      <div className="learning-path-container">
        <h1 className="learning-path-title">Invalid Path</h1>
        <p>Please select a valid development path from the homepage.</p>
      </div>
    );
  }

  return (
    <div className="learning-path-container">
      <h1 className="learning-path-title">{path.replace('-', ' ').toUpperCase()} Development</h1>
      {resources[path].map((section, index) => (
        <div key={index} className="learning-section">
          <h2 className="section-category">{section.category}</h2>
          <ul className="resources-list">
            {section.resources.map((resource, idx) => (
              <li key={idx} className="resource-item">
                <a
                  href={resource.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-link"
                >
                  {resource.title} - Documentation
                </a>
                <a
                  href={resource.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  Watch Video
                </a>
              </li>
            ))}
          </ul>
          <div className="mini-project">
            <h3>Mini Project:</h3>
            <a
              href={section.miniProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {section.miniProject.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearningPaths;