import React from "react";

class leftpanel extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="boxed boxed--lg boxed--border">
          <div className="text-block text-center">
            <img
              alt="avatar"
              src="img/profile-pic.jpg"
              className="image--sm img-circle"
            />
            <span className="h5">Lucas Banks</span>
            <span>Coureur du dimanche</span>
            <span className="label">organisateur</span>
          </div>
          <hr className="hidden-xs" />
          <div className="text-block hidden-xs">
            <ul className="menu-vertical">
              <li>
                <a className="btn btn--primary btn--icon btn-block" href="#">
                  <span className="btn__text">
                    <i className="material-icons">add</i>J'Y VAIS
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="btn btn--icon type--uppercase text-center btn-block"
                  href="#"
                >
                  <span className="btn__text">
                    <i className="icon-Add-User icon--xs" />Inviter d'autres
                    OuiRunners
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="text-block">
            <ul className="menu-vertical">
              <li>
                <i className="socicon socicon-facebook icon icon--xs" />
                <a
                  href="#"
                  data-toggle-class=".account-tab:not(.hidden);hidden|#account-profile;hidden"
                >
                  Partager sur Facebook
                </a>
              </li>
              <li>
                <img
                  id="messenger-icon"
                  src="img/messenger.svg"
                  alt="facebook messenger"
                />
                <a
                  href="#"
                  data-toggle-class=".account-tab:not(.hidden);hidden|#account-profile;hidden"
                >
                  Partager sur Messenger
                </a>
              </li>
              <li>
                <i className="socicon socicon-mail icon icon--xs" />
                <a
                  href="#"
                  data-toggle-class=".account-tab:not(.hidden);hidden|#account-profile;hidden"
                >
                  Partager par Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default leftpanel;
