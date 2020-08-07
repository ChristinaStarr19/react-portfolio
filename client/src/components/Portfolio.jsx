import React, { Component } from 'react';
import projectdata from "./projectdata.json";
import Project from "./Project";
    
const styles = {
  figure: { position: "relative"}
};
    class Portfolio extends Component {
      state = {
        projectdata
      };

      render() {
        return (
          <div>
              {/* Container for the main content */}
      <main className="container">
        <article>
            <section className="row">
              <section className="col-sm-12">
                <h1>Portfolio</h1>
              </section>
            </section>
                
              <hr />
            <section className="row">
              {this.state.projectdata.map(project => (
                <Project title={project.title} image={project.image} key={project.id} githublink={project.githublink} deployedlink={project.githublink} />
              ))}
               {/* DinMo Project 1 */}
              <figure className="col-sm-12 col-md-6 col-lg-12 col-xl-6" style={styles.figure}>
                <h5 className="project-title">DinMo</h5>
                <img className="img-fluid" src="assets/images/Dinmo-screenshot.png" alt="Portfolio Photo1"/>
                <a  className="centered-link left-float" target="_blank" rel="noopener noreferrer" href="https://chayvw.github.io/gt-gp1-dinmo/">Deployed Website</a>
              
                <a className="centered-link right-float" target="_blank" rel="noopener noreferrer" href="https://github.com/Chayvw/gt-gp1-dinmo">GitHub Repository</a>
              </figure>
               {/* Maestro Project 2  */}
              <figure className="col-sm-12 col-md-6 col-lg-12 col-xl-6" style={styles.figure}>
                <h5 className="project-title">Maestro</h5>
                <img className="img-fluid" src="assets/images/maestro-screenshot.png" alt="Portfolio Photo2"/>
                <a  className="centered-link left-float" target="_blank" rel="noopener noreferrer" href="https://secure-shelf-55938.herokuapp.com/">Deployed Website</a>
              
                <a className="centered-link right-float" target="_blank" rel="noopener noreferrer" href="https://github.com/ChristinaStarr19/gt-project-2">GitHub Repository</a>
              </figure>
              {/* Password Generator  */}
              <figure className="col-sm-12 col-md-6 col-lg-12 col-xl-6" style={styles.figure}>
                <h5 className="project-title">Password Generator</h5>
                <img className="img-fluid" src="assets/images/screenshot-deployed-application.png" alt="Portfolio Photo3"/>
                <a  className="centered-link left-float" target="_blank" rel="noopener noreferrer" href="https://christinastarr19.github.io/gt-javascript-password-generator-homework-03/">Deployed Website</a>
              
                <a className="centered-link right-float" target="_blank"  rel="noopener noreferrer"href="https://github.com/ChristinaStarr19/gt-javascript-password-generator-homework-03">GitHub Repository</a>
              </figure>
              {/* Day Planner */}
              <figure className="col-sm-12 col-md-6 col-lg-12 col-xl-6" style={styles.figure}>
                <h5 className="project-title">Daily Planner</h5>
                <img className="img-fluid" src="assets/images/scheduler-screenshot.png" alt="Portfolio Photo4"/>
                <a  className="centered-link left-float" target="_blank" rel="noopener noreferrer" href="https://christinastarr19.github.io/gt-scheduler-third-party-apis-homework-05/">Deployed Website</a>
              
                <a className="centered-link right-float" target="_blank" rel="noopener noreferrer" href="https://github.com/ChristinaStarr19/gt-scheduler-third-party-apis-homework-05">GitHub Repository</a>
              </figure>
              {/* Employee Management System  */}
              <figure className="col-sm-12 col-md-6 col-lg-12 col-xl-6" style={styles.figure}>
                <h5 className="project-title">Employee Management System</h5>
                <img className="img-fluid" src="assets/images/employee-screenshot.png" alt="Portfolio Photo4"/>
                <a  className="centered-link left-float" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1dPmK0CJKowKw7N4li3VjNb7RUycFjZD1/view">Screen Recording</a>
              
                <a className="centered-link right-float" target="_blank" rel="noopener noreferrer" href="https://github.com/ChristinaStarr19/gt-mysql-employee-tracker-homework-12">GitHub Repository</a>
              </figure>
              {/* ReadMe Generator  */}
              <figure className="col-sm-12 col-md-6 col-lg-12 col-xl-6" style={styles.figure}>
                <h5 className="project-title">README Generator</h5>
                <img className="img-fluid" src="assets/images/screenshot-readme.png" alt="Portfolio Photo4"/>
                <a  className="centered-link left-float" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/14kIMU3kLyT1ZBVUJeiHF2AwPLwee0Lcy/view">Screen Recording</a>
              
                <a className="centered-link right-float" target="_blank" rel="noopener noreferrer" href="https://github.com/ChristinaStarr19/gt-readme-generator-homework-09">GitHub Repository</a>
              </figure>
              
            </section>
        </article>
      </main>
          </div>
        );
      }
    }
    
    export default Portfolio;


