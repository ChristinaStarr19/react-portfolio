import React from 'react';

const Contact = () => {
    return (
        <div>
            <main className="container contact-page">
      <article>
        {/* First row containing Contact heading. */}
        <section className="row">
          <section className="col-sm-12">
            <h1>Contact</h1>
          </section>
        </section>

        {/* < Line Break  */}
        <hr />

        {/* Second row containing column, which contains name, email and message form. */}
        <section className="row contact-background">
          <section className="col-sm-10 text-align">
            <form>
              <section className="form-group">
                <label for="gitHub link">GitHub Profile:</label><span> </span>
                <a
                  href="https://github.com/ChristinaStarr19"
                  target="_blank" rel="noopener noreferrer"
                  className="card-link"
                  >https://github.com/ChristinaStarr19</a
                >
               
              </section>
              <section className="form-group">
                <label for="linkedIn link">LinkedIn Profile:</label> <span> </span>
                <a
                  href="https://www.linkedin.com/in/christinastarr19/"
                  target="_blank" rel="noopener noreferrer"
                  className="card-link"
                  >linkedin.com/in/christinastarr19/</a
                >
              </section>
              <section className="form-group">
                <label for="exampleFormControlInput1">Email:</label> <span> </span>
                <a
                  href="mailto:christinastarr19@yahoo.com"
                  target="_blank" rel="noopener noreferrer"
                  className="card-link"
                  >ChristinaStarr19@yahoo.com</a
                >
              </section>
              <section className="form-group">
                <label for="exampleFormControlInput1">Phone Number:</label> <span> </span>
                <a href="tel:+7063327062">+706-332-7062</a>
              </section>
             
        
            </form>
          </section>
        </section>
      </article>
    </main>
        </div>
    );
};

export default Contact;