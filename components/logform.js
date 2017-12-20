import React from "react";

class logform extends React.Component {
  render() {
    return (
      <div className="col-sm-6 col-md-offset-3 col-sm-offset-3 col-xs-12">
        <div className="boxed boxed--lg bg--white text-center feature">
          <div className="modal-close modal-close-cross" />
          <h3>Login to Your Account</h3>
          <a
            className="btn block btn--icon bg--facebook type--uppercase"
            href="#"
          >
            <span className="btn__text">
              <i className="socicon-facebook" />
              Login with Facebook
            </span>
          </a>
          <a
            className="btn block btn--icon bg--twitter type--uppercase"
            href="#"
          >
            <span className="btn__text">
              <i className="socicon-twitter" />
              Login with Twitter
            </span>
          </a>
          <hr data-title="OR" />
          <div className="feature__body">
            <form lpformnum={2} abineguid="54B1EFB5E4B542898A1CCC75994EB824">
              <div className="row">
                <div className="col-sm-12">
                  <input
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "scroll",
                      backgroundSize: "16px 18px",
                      backgroundPosition: "98% 50%",
                      cursor: "auto"
                    }}
                  />
                </div>
                <div className="col-sm-12">
                  <input
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "scroll",
                      backgroundSize: "16px 18px",
                      backgroundPosition: "98% 50%",
                      cursor: "auto"
                    }}
                  />
                </div>
                <div className="col-sm-12">
                  <button
                    className="btn btn--primary type--uppercase"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
              {}
            </form>
            <span className="type--fine-print block">
              Dont have an account yet?
              <a href="#">Create account</a>
            </span>
            <span className="type--fine-print block">
              Forgot your username or password?
              <a href="#">Recover account</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default logform;
