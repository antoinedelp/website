import React from "react";
var Link       = ReactRouterDOM.Link;
class navbar extends React.Component {


/*
    <div className="row">
      <div className="col-xs-9 col-sm-10 text-right">
        <a
          href="#"
          className="hamburger-toggle"
          data-toggle-class="#menu1;hidden-xs hidden-sm"
        >
          <i className="icon icon--sm stack-interface stack-menu" />
        </a>
      </div>
*/
  render() {
    return (
<div>
<Link to="/"> Home </Link>
<Link to="/session"> Session </Link>
<Link to="/sessionlist"> Toutes les sessions </Link>
<Link to="/logout"> Se déconnecter </Link>
</div>
    );
  }
}

export default navbar;
