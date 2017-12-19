import React from "react";
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
console.log(response);
}


class signinbar extends React.Component {
  render() {
    return (
      <section className="bar bar-3 bar--sm bg--secondary hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="bar__module">
                <span className="type--fade">
                  OuiRun | Seul, on va plus vite. Ensemble on va plus loin.
                </span>
              </div>
            </div>
            <div className="col-md-6 text-right text-left-xs text-left-sm hidden-xs">
              <div className="bar__module">
                <ul className="menu-horizontal">
                  <li>
                    <div className="modal-instance">
                      <a
                        href="#"
                        className="modal-trigger"
                        data-modal-index={0}
                      >
                        S'identifier
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="modal-instance">
                      <FacebookLogin
                        appId="527582624079253"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={responseFacebook} />
                    </div>
                  </li>
                  <li>
                    <a href="#" data-notification-link="side-menu">
                      <i className="stack-dot-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {}
          </div>
          {}
        </div>
      </section>
    );
  }
}

export default signinbar;
