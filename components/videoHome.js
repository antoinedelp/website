import React from "react";

class videoHome extends React.Component {
  render() {
    return (
      <section
        className="imagebg videobg text-center parallax height-100"
        data-overlay={2}
      >
        {" "}
        <video autoPlay loop muted>
          <source src="video/ouirun.mp4" type="video/mp4" />
        </video>
        <div className="container pos-vertical-center">
          <div className="row">
            <div className="col-sm-8 col-md-7">
              <h1>
                Seul, on va plus vite. <br />Ensemble, on va plus loin... <br />
              </h1>
              <p className="lead">
                OuiRun te permet de trouver des runners de ton niveau, près de
                chez toi.<br />
              </p>
              <a className="btn btn--primary type--uppercase" href="#">
                {" "}
                <span className="btn__text">
                  <span>Se Connecter</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default videoHome;
