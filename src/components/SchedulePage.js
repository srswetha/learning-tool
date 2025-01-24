import React, { useState } from 'react';
import '../styles/SchedulePage.css';

const SchedulePage = () => {
  const [timePeriod, setTimePeriod] = useState('');
  const [learningPath, setLearningPath] = useState('');
  const [completedTasks, setCompletedTasks] = useState({});

  const timeOptions = ['1 Week', '1 Month', '3 Months', '6 Months', '1 Year'];

  const learningPaths = {
    frontend: {
      '1 Week': [
        { 
          title: 'HTML Basics (15 min)', 
          videoLink: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
          docLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        { 
          title: 'CSS Basics (20 min)', 
          videoLink: 'https://www.youtube.com/watch?v=yfoY53QXEnI',
          docLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
        },
        { 
          title: 'JavaScript Intro (30 min)', 
          videoLink: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          docLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'
        }
      ],
      '1 Month': [
        { 
          title: 'Complete Frontend in 1 Month (6 hours)', 
          videoLink: 'https://www.youtube.com/watch?v=3qBXWUpoPHo',
          docLink: 'https://frontendmasters.com/learn/html-css/'
        },
        { 
          title: 'React Basics (2 hours)', 
          videoLink: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          docLink: 'https://react.dev/'
        },
        { 
          title: 'CSS Advanced Techniques (1.5 hours)', 
          videoLink: 'https://www.youtube.com/watch?v=IeTHxRH-uk4',
          docLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox'
        }
      ],
      '3 Months': [
        { 
          title: 'HTML + CSS Mastery (10 hours)', 
          videoLink: 'https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/',
          docLink: 'https://developer.mozilla.org/en-US/docs/Learn/HTML'
        },
        { 
          title: 'Advanced JavaScript (20 hours)', 
          videoLink: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
          docLink: 'https://javascript.info/'
        },
        { 
          title: 'React + Redux (30 hours)', 
          videoLink: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
          docLink: 'https://redux.js.org/'
        }
      ],
      '6 Months': [
        { 
          title: 'Frontend Web Development Bootcamp (50 hours)', 
          videoLink: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
          docLink: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer'
        },
        { 
          title: 'Modern Web Applications with React (50 hours)', 
          videoLink: 'https://frontendmasters.com/courses/complete-react-v7/',
          docLink: 'https://react.dev/'
        },
      ],
      '1 Year': [
        { 
          title: 'Professional Frontend Certification (120 hours)', 
          videoLink: 'https://www.coursera.org/specializations/web-design',
          docLink: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer'
        },
        { 
          title: 'Frontend Frameworks Deep Dive (100 hours)', 
          videoLink: 'https://frontendmasters.com/learn/frameworks/',
          docLink: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer'
        }
      ],
    },
    backend: {
      '1 Week': [
        { 
          title: 'Node.js Basics (30 min)', 
          videoLink: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
          docLink: 'https://nodejs.org/en/docs'
        },
        { 
          title: 'Express.js Crash Course (20 min)', 
          videoLink: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
          docLink: 'https://expressjs.com/en/starter/installing.html'
        }
      ],
      '1 Month': [
        { 
          title: 'Mastering Node.js + MongoDB (10 hours)', 
          videoLink: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/',
          docLink: 'https://nodejs.dev/en/learn'
        },
        { 
          title: 'REST APIs with Express.js (5 hours)', 
          videoLink: 'https://www.youtube.com/watch?v=fw5hhRTG7E8',
          docLink: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs'
        }
      ],
      '1 Year': [
        { 
          title: 'Backend Development Professional Certification (100 hours)', 
          videoLink: 'https://www.udemy.com/course/nodejs-the-complete-guide/',
          docLink: 'https://nodejs.dev/en/learn'
        },
        { 
          title: 'Database Management + API Mastery (80 hours)', 
          videoLink: 'https://www.coursera.org/specializations/server-side',
          docLink: 'https://www.postgresql.org/docs/'
        }
      ],
    },
    dataScience: {
      '1 Week': [
        { 
          title: 'Introduction to Data Science (30 min)', 
          videoLink: 'https://www.youtube.com/watch?v=ua-CiDNNj30',
          docLink: 'https://www.datascience.com/resources'
        }
      ],
      '1 Month': [
        { 
          title: 'Python for Data Science (8 hours)', 
          videoLink: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
          docLink: 'https://www.python.org/about/gettingstarted/'
        },
        { 
          title: 'Data Analysis with Pandas (5 hours)', 
          videoLink: 'https://www.youtube.com/watch?v=vmEHCJofslg',
          docLink: 'https://pandas.pydata.org/docs/'
        }
      ],
      '1 Year': [
        { 
          title: 'Data Science Specialization (100 hours)', 
          videoLink: 'https://www.coursera.org/specializations/jhu-data-science',
          docLink: 'https://datasciencespecialization.github.io/'
        }
      ]
    },
  };

  const handleCheckboxChange = (index) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const calculateProgress = () => {
    const totalTasks = learningPaths[learningPath]?.[timePeriod]?.length || 0;
    const completedCount = Object.values(completedTasks).filter(Boolean).length;
    return totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);
  };

  const progress = calculateProgress();

  return (
    <div className="schedule-container">
      <div className="schedule-content">
        <h1 className="schedule-title">Schedule Your Learning Path</h1>
        <div className="schedule-options">
          <select
            className="schedule-select"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
          >
            <option value="">Select Time Period</option>
            {timeOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            className="schedule-select"
            value={learningPath}
            onChange={(e) => setLearningPath(e.target.value)}
          >
            <option value="">Select Learning Path</option>
            {Object.keys(learningPaths).map((path, index) => (
              <option key={index} value={path}>
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </option>
            ))}
          </select>
        </div>
        {timePeriod && learningPath && (
          <div className="schedule-details">
            <h2>
              {learningPath.charAt(0).toUpperCase() + learningPath.slice(1)} Path -{' '}
              {timePeriod}
            </h2>
            <ul className="task-list">
              {learningPaths[learningPath][timePeriod].map((resource, index) => (
                <li key={index} className="task-item">
                  <input
                    type="checkbox"
                    checked={!!completedTasks[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <a
                    href={resource.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="task-link"
                  >
                    {resource.title} (Video)
                  </a>
                  <a
                    href={resource.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-link"
                    style={{ marginLeft: '15px', fontSize: '0.9rem', color: '#4caf50' }}
                  >
                    Documentation
                  </a>
                </li>
              ))}
            </ul>
            <div className="progress-tracker">
              <p>Progress: {progress}%</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;
