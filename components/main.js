import React from "react";
import Gmap from "./gmap";
import Participants from "./participants";
import Comments from "./comments";
import Leftpanel from "./leftpanel";
import ModalExample from "./modal";

class main extends React.Component {
  render() {
    return (
      <div className="main-container">
      <section className="bg--secondary space--sm">
        <div className="container">
            <div className="row">
              <Leftpanel/>
              <div className="col-md-8">
                <div className="boxed boxed--lg boxed--border">
                  <div className="row">
                    <div className="col-md-7 col-xs-12">
                      <h4 className="text-center-xs">
                        Trail au parc de Saint-Cloud
                      </h4>
                    </div>
                    <div className="col-xs-10 col-xs-offset-1 hidden-lg">
                      <a
                        className="btn btn--primary btn--icon btn-block"
                        href="#"
                      >
                        <span className="btn__text">
                          <i className="material-icons">add</i>J'Y VAIS
                        </span>
                      </a>
                    </div>
                    <div className="col-xs-10 col-xs-offset-1 hidden-lg genericcustommargin">
                      <a
                        className="btn btn--icon type--uppercase text-center btn-block"
                        href="#"
                      >
                        <span className="btn__text">
                          <i className="icon-Add-User icon--xs" />Inviter
                          d'autres OuiRunners
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="row genericcustommargin">
                    <div className="col-md-3 col-sm-6 text-center">
                      <i className="icon color--primary icon-Bar-Chart2 icon--sm" />
                      <br />Coureur du dimanche
                    </div>
                    <div className="col-md-3 col-sm-6 text-center">
                      <i className="icon color--primary icon-Chacked-Flag icon--sm" />
                      <br />16km
                    </div>
                    <div className="col-md-3 col-sm-6 text-center">
                      <i className="icon color--primary icon-Stopwatch icon--sm" />
                      <br />1h15min
                    </div>
                    <div className="col-md-3 col-sm-6 text-center">
                      <i className="icon color--primary icon-Clock-Forward icon--sm" />
                      <br />Flex : pile à l'heure
                    </div>
                  </div>
                  <Gmap />
                  <div className="text-block genericcustommargin">
                    <h5>Runscription</h5>
                    <hr className="short" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas eget magna id ipsum maximus scelerisque et ac
                      arcu. Quisque non massa id metus efficitur pellentesque in
                      lacinia massa. Mauris quis ligula vel lectus lacinia
                      vulputate id vitae magna. Donec cursus a nunc et
                      vestibulum. Aenean eget cursus purus, sit amet condimentum
                      eros. Mauris ut nisl purus. Aenean eu orci porta,
                      condimentum nisi lacinia, pretium purus.
                    </p>
                  </div>
                  <Participants />
                  <Comments />
                </div>
              </div>
            </div>
          </div>
          </section>
          </div>

    );
  }
}

export default main;
