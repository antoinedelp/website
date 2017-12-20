import React from "react";
var Link       = ReactRouterDOM.Link;


class footer extends React.Component {
  render() {
    return (
      <footer className="text-center space--sm footer-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="heading-block">
                <ul className="list-inline list--hover">
                  <li>
                    <Link to="/session"> Session Bois  </Link>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <span>Locations</span>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <span>Products</span>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <span>Work With Us</span>
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div>
                <ul className="social-list list-inline list--hover">
                  <li>
                    <a href="mailto:contact@ouirun.com" target="_self">
                      <i className="socicon icon material-icons icon--xs">
                        email
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/ouirun" target="_self">
                      <i className="socicon socicon-twitter icon icon--xs" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/OuiRunOfficiel/"
                      target="_self"
                    >
                      <i className="socicon socicon-facebook icon icon--xs" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ouirunofficiel/"
                      target="_self"
                    >
                      <i className="socicon icon socicon-instagram icon--xs" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                {" "}
                <span className="type--fine-print"> </span>{" "}
                <img
                  alt="Image"
                  className="flag"
                  src="img/Logo_0uiRun_orange_lettres blanches_1024x1024.png"
                />{" "}
              </div>
              <div>
                {" "}
                <span className="type--fine-print">
                  © <span className="update-year">2017</span> Oui Sports SAS
                </span>{" "}
                <a className="type--fine-print" href="#">
                  Politique de confidentialité
                </a>{" "}
                <a className="type--fine-print" href="#">
                  CGU
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default footer;
