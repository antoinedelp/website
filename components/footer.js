import React from "react";

class footer extends React.Component {
  render() {
    return (
      <footer className="footer-3 text-center-xs space--xs ">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img alt="Image" className="logo" src="img/logo-dark.png" />
              <ul className="list-inline list--hover">
                <li>
                  <a href="#">
                    <span className="type--fine-print">Get Started</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="type--fine-print">help@stack.io</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 text-right text-center-xs">
              <ul className="social-list list-inline list--hover">
                <li>
                  <a href="#">
                    <i className="socicon socicon-google icon icon--xs" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="socicon socicon-twitter icon icon--xs" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="socicon socicon-facebook icon icon--xs" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="socicon socicon-instagram icon icon--xs" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {}
          <div className="row">
            <div className="col-sm-6">
              <p className="type--fine-print">Supercharge your web workflow</p>
            </div>
            <div className="col-sm-6 text-right text-center-xs">
              <span className="type--fine-print">
                ©
                <span className="update-year">2017</span> Stack Inc.
              </span>
              <a className="type--fine-print" href="#">
                Privacy Policy
              </a>
              <a className="type--fine-print" href="#">
                Legal
              </a>
            </div>
          </div>
          {}
        </div>
        {}
      </footer>
    );
  }
}

export default footer;
