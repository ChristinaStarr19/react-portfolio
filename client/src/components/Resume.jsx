import React from "react";


const styles = {
  figure: { position: "relative" },
};

const Resume = () => {
  return (
    <div>
      <main className="container resume-page">
        <article>
          <section className="row">
            <section className="col-sm-12">
              <h1>Resume</h1>
            </section>
          </section>

          <hr />
          <section className="row">
            <figure
              className="col-sm-12 col-md-12 col-lg-12 col-xl-12"
              style={styles.figure}
            >
              <embed
                src="/pdf/Christina-Starr-Technical-Support (1).pdf"
                type="application/pdf"
                width="100%"
                height="600px"
              />
            </figure>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Resume;
