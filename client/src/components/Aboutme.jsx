import React from 'react';



const Aboutme = () => {
    return (
        <div>
        {/* <Container for the main content */}
        <main className="container">
          <article>
            
    
            {/* First Row containing About Me Heading */}
            <div className="row">
              <div className="col-sm-12">
                <h1>About Me</h1>
              </div>
            </div>
    
            {/* Line break */}
            <hr />
    
            {/* Second Row containing About me Picture with 2 paragraphs */}
            <section className="row">
              <section className="col-sm-12 col-md-2">
                <img className="img-fluid"
                  src="\images\profile-pic.JPG"
                  alt="Profile"
                  />
                  
                
              </section>
    
              <section className="col-sm-12 col-md-10">
                <p1>
                  After working as an educator for 8 years in impoverished,
                  urban communities, I have a newfound respect for
                  the classroom teacher. Along with curriculum, they teach
                  social skills, emotional wellness and so much more. Because of this, many 
                  educators are simply overwhelmed.  As a web developer, I endeavor to shape digital
                  products to make the art of teaching meaningful, engaging and streamlined.
                </p1>
              </section>
            </section>
            {/* Third row containing 3rd paragraph with unordered lists */}
    
            <section className="row">
              <section className="col-sm-12">
                <p1>
                  I hope to work in a place where..
                  <ul>
                    <li>
                      Everyone’s input is considered valuable 
                    </li>
                    <li>
                      Cultivating a learning culture is paramount 
                    </li>
                    <li>
                      Collaboration is key to the
                      success of the project 
                    </li>
                    <li>
                      When necessary, working remotely is a
                      viable option 
                    </li>
                    <li>
                      Producing excellent content is the norm
                    </li>
                    <li>
                      Most importantly, our efforts support underserved communities.
                    </li>
                  </ul>
                </p1>
              </section>
            </section>
    
            {/* Fourth row containing 3rd paragraph  */}
            <section className="row">
              <p1 className="col-sm-12">
                In my free time I enjoy journaling, having quiet time and hiking with my husband.
              </p1>
            </section>
          </article>
        </main>
        </div>
    );
};

export default Aboutme;