import React from "react";

class comments extends React.Component {
  render() {
    return (
      <div className="text-block">
        <h5>Commentaires</h5>
        <hr className="short" />
        <div className="col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1">
          <div className="comments">
            <h4>4 Commentaires</h4>
            <ul className="comments__list">
              <li>
                <div className="comment">
                  <div className="comment__avatar">
                    <img alt="Image" src="img/avatar-round-1.png" />{" "}
                  </div>
                  <div className="comment__body">
                    <h5 className="type--fine-print">Anne Brady</h5>
                    <div className="comment__meta">
                      <span>10th May 2016</span>
                      <a href="#">Reply</a>
                    </div>
                    <p>
                      {" "}
                      Affordances food-truck SpaceTeam unicorn disrupt integrate
                      viral pair programming big data pitch deck intuitive
                      intuitive prototype long shadow. Responsive hacker
                      intuitive driven{" "}
                    </p>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment__avatar">
                    <img alt="Image" src="img/avatar-round-3.png" />{" "}
                  </div>
                  <div className="comment__body">
                    <h5 className="type--fine-print">Jacob Sims</h5>
                    <div className="comment__meta">
                      <span>10th May 2016</span>
                      <a href="#">Reply</a>
                    </div>
                    <p>
                      {" "}
                      Prototype intuitive intuitive thought leader personas
                      parallax paradigm long shadow engaging unicorn SpaceTeam
                      fund ideate paradigm.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="comment">
                  <div className="comment__avatar">
                    <img alt="Image" src="img/avatar-round-2.png" />{" "}
                  </div>
                  <div className="comment__body">
                    <h5 className="type--fine-print">Kelly Dewitt</h5>
                    <div className="comment__meta">
                      <span>11th May 2016</span>
                      <a href="#">Reply</a>
                    </div>
                    <p>
                      {" "}
                      Responsive hacker intuitive driven waterfall is so 2000
                      and late intuitive cortado bootstrapping venture capital.
                      Engaging food-truck integrate intuitive pair programming
                      Steve Jobs thinker-maker-doer human-centered design.
                    </p>
                    <p>
                      {" "}
                      Affordances food-truck SpaceTeam unicorn disrupt integrate
                      viral pair programming big data pitch deck intuitive
                      intuitive prototype long shadow. Responsive hacker
                      intuitive driven{" "}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="comment">
                  <div className="comment__avatar">
                    <img alt="Image" src="img/avatar-round-4.png" />{" "}
                  </div>
                  <div className="comment__body">
                    <h5 className="type--fine-print">Luke Smith</h5>
                    <div className="comment__meta">
                      <span>11th May 2016</span>
                      <a href="#">Reply</a>
                    </div>
                    <p>
                      {" "}
                      Unicorn disrupt integrate viral pair programming big data
                      pitch deck intuitive intuitive prototype long shadow.
                      Responsive hacker intuitive driven{" "}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="comments-form">
            <h4>Écrire un message</h4>
            <div className="row">
              <form>
                <textarea
                  rows={4}
                  name="Message"
                  placeholder="Message"
                  defaultValue={""}
                />
                <div className="col-sm-3">
                  <button className="btn btn--primary" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default comments;
