import React from 'react';

const styles = {
  figure: { position: "relative"}
};

const Project = (props) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-12 col-xl-6" style={styles.figure}>

        
              {/* DinMo Project 1 */}
              {/* <figure className="col-sm-12 col-md-6 col-lg-12 col-xl-6" style={styles.figure}> */}
                <h5 className="project-title">{props.title}</h5>
                <img className="img-fluid" src={props.image} alt={props.title}/>
                <a  className="centered-link left-float" target="_blank" rel="noopener noreferrer" href={props.deployedlink}>Deployed Website</a>
              
                <a className="centered-link right-float" target="_blank" rel="noopener noreferrer" href={props.githublink}>GitHub Repository</a>
               
              </div>
    );
};

export default Project;