import React from "react";

class navbar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div>
          <div className="bar bar--sm visible-xs">
            <div className="container">
              <div className="row">
                <div className="col-xs-3 col-sm-2">
                  <a href="index.html">
                    <img
                      className="logo logo-dark"
                      alt="logo"
                      src="img/Logo_0uiRun_degrade_applat_1024x1024.png"
                    />
                    <img
                      className="logo logo-light"
                      alt="logo"
                      src="img/logo-light.png"
                    />{" "}
                  </a>
                </div>
                <div className="col-xs-9 col-sm-10 text-right">
                  <a
                    href="#"
                    className="hamburger-toggle"
                    data-toggle-class="#menu1;hidden-xs hidden-sm"
                  >
                    <i className="icon icon--sm stack-interface stack-menu" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav id="menu1" className="bar bar-1 hidden-xs">
            <div className="container">
              <div className="row">
                <div className="col-md-1 col-sm-2 hidden-xs">
                  <div className="bar__module">
                    <a href="index.html">
                      <img
                        className="logo logo-dark"
                        alt="logo"
                        src="img/Logo_0uiRun_degrade_applat_1024x1024.png"
                      />
                      <img
                        className="logo logo-light"
                        alt="logo"
                        src="img/logo-light.png"
                      />{" "}
                    </a>
                  </div>
                </div>
                <div className="col-md-11 col-sm-12 text-right text-left-xs text-left-sm">
                  <div className="bar__module">
                    <a
                      className="btn btn--sm type--uppercase"
                      href="#customise-template"
                    >
                      <span className="btn__text">S'enregistrer</span>
                    </a>
                    <a
                      className="btn btn--sm btn--primary type--uppercase"
                      href="#purchase-template"
                    >
                      <span className="btn__text">Buy Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default navbar;
