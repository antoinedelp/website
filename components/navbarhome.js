import React from "react";

class navBarHome extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div
          className="via-1513091732315"
          via="via-1513091732315"
          vio="OuiRun Nav"
        >
          <div className="bar bar--sm visible-xs">
            <div className="container">
              <div className="row">
                <div className="col-xs-3 col-sm-2">
                  <a href="index.html">
                    {" "}
                    <img
                      className="logo logo-dark"
                      alt="logo"
                      src="img/logo-dark.png"
                    />{" "}
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
                    {" "}
                    <i className="icon icon--sm stack-interface stack-menu" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav
            id="menu1"
            className="bar bar-1 hidden-xs bar--absolute bar--transparent"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-1 col-sm-2 hidden-xs">
                  <div className="bar__module">
                    <a href="index.html">
                      {" "}
                      <img
                        className="logo logo-dark"
                        alt="logo"
                        src="img/logo-dark.png"
                      />{" "}
                      <img
                        className="logo logo-light"
                        alt="logo"
                        src="img/Logo_0uiRun_degrade_trait_1024x1024.png"
                      />{" "}
                    </a>
                  </div>
                </div>
                <div className="col-md-11 col-sm-12 text-right text-left-xs text-left-sm">
                  <div className="bar__module">
                    <ul className="menu-horizontal text-left">
                      <li>
                        {" "}
                        <a href="#">Single Link</a>{" "}
                      </li>
                      <li className="dropdown">
                        {" "}
                        <span className="dropdown__trigger">La Communauté</span>
                        <div className="dropdown__container">
                          <div className="container">
                            <div className="row">
                              <div className="dropdown__content col-md-2">
                                <ul className="menu-vertical">
                                  <li>
                                    {" "}
                                    <a href="#">Single Link</a>{" "}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown">
                        {" "}
                        <span className="dropdown__trigger">Dropdown Wide</span>
                        <div className="dropdown__container">
                          <div className="container">
                            <div className="row">
                              <div className="dropdown__content col-md-12">
                                <div className="col-md-3">
                                  <h5>Menu Title</h5>
                                  <ul className="menu-vertical">
                                    <li>
                                      {" "}
                                      <a href="#">Single Link</a>{" "}
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3">
                                  <h5>Menu Title</h5>
                                  <ul className="menu-vertical">
                                    <li>
                                      {" "}
                                      <a href="#">Single Link</a>{" "}
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3">
                                  <h5>Menu Title</h5>
                                  <ul className="menu-vertical">
                                    <li>
                                      {" "}
                                      <a href="#">Single Link</a>{" "}
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3">
                                  <h5>Menu Title</h5>
                                  <ul className="menu-vertical">
                                    <li>
                                      {" "}
                                      <a href="#">Single Link</a>{" "}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bar__module">
                    <a
                      className="btn btn--sm type--uppercase"
                      href="#customise-template"
                    >
                      {" "}
                      <span className="btn__text">télécharger l'app</span>{" "}
                    </a>
                    <a
                      className="btn btn--sm btn--primary type--uppercase"
                      href="#purchase-template"
                    >
                      {" "}
                      <span className="btn__text">je m'inscris</span>{" "}
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

export default navBarHome;
