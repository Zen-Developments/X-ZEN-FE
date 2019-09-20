import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tabs from './Tabs/Tabs.js';
import Form from './Tabs/Form.js';


class FormKit extends React.Component {
constructor({ match }) {
  super({ match });
  this.state = {
    config: [
      {
        id: 1,
        text: "Item 1"
      },
      {
        id: 2,
        text: "Item 2"
      },
      {
        id: 3,
        text: "Item 3"
      }
    ],
  };
}

  render() {
    return (
      <div className="Forms">
        <Tabs config={this.state.config} />

        <div className="form-view">
          <Route path={`/contact/:tabId`} component={Form} />
        </div>
      </div>
    )
  }
}

export default FormKit;
