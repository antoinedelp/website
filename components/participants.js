import React from "react";

class participants extends React.Component {
  render() {
    return (
      <div className="text-block">
        <h5>Participants</h5>
        <hr className="short" />
        <div className="col-xs-4 col-sm-2 col-xs-offset-4 col-sm-offset-0">
          <div className="feature feature-8">
            <img className="img-circle" alt="Image" src="img/profile-pic.jpg" />
            <p className="text-center">Vera Duncan</p>
          </div>
        </div>
        <div className="col-xs-4 col-sm-2 col-xs-offset-4 col-sm-offset-0">
          <div className="feature feature-8 img-circle">
            <img
              className="img-circle"
              alt="Image"
              src="img/avatar-round-3.png"
            />
            <p className="text-center">Zach Smith</p>
          </div>
        </div>
        <div className="col-xs-4 col-sm-2 col-xs-offset-4 col-sm-offset-0">
          <div className="feature feature-8 img-circle">
            <img
              className="img-circle"
              alt="Image"
              src="img/avatar-round-2.png"
            />
            <p className="text-center">Bernice Lucas</p>
          </div>
        </div>
        <div className="col-xs-4 col-sm-2 col-xs-offset-4 col-sm-offset-0">
          <div className="feature feature-8 img-circle">
            <img
              className="img-circle"
              alt="Image"
              src="img/avatar-round-4.png"
            />
            <p className="text-center">Cameron Nguyen</p>
          </div>
        </div>
        <div className="col-xs-4 col-sm-2 col-xs-offset-4 col-sm-offset-0">
          <div className="feature feature-8 img-circle">
            <img
              className="img-circle"
              alt="Image"
              src="img/avatar-round-5.png"
            />
            <p className="text-center">Josie Web</p>
          </div>
        </div>
        <div className="col-xs-4 col-sm-2 col-xs-offset-4 col-sm-offset-0">
          <div className="feature feature-8 img-circle">
            <img
              className="img-circle"
              alt="Image"
              src="img/avatar-round-6.png"
            />
            <p className="text-center">Bryce Vaughn</p>
          </div>
        </div>
      </div>
    );
  }
}

export default participants;
