import React, { Component } from 'react';
import projectdata from "./projectdata.json";
import Project from "./Project";
    

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
            
            </section>
        </article>
      </main>
          </div>
        );
      }
    }
    
    export default Portfolio;


