import React from "react";
import { Checkbox } from 'semantic-ui-react'
import Location from 'react-place';



class sessionpanel extends React.Component {
  constructor (){
    super()
  }
  render() {

    const CheckboxExampleToggle = () => (
      <Checkbox toggle />
    )

    return (
      <div className="col-md-4">
        <div className="boxed boxed--lg boxed--border">
          <div className="text-block text-center">
            <span className="h5"> Rechercher une session</span>
          </div>
          <span className="h6"> Ici ?
          <Checkbox toggle />
           Ailleurs ? </span>

          <div className="text-block">
            <ul className="menu-vertical">
              <li>
              Test
              </li>

              <li>
                  New test
              </li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default sessionpanel;
