
import React, {Component} from 'react';
import {store} from "./src/store/store";
import { Provider } from 'react-redux';

import AppWithNavigationState from "./src/components/Navigator/AppNavigation";


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>     );
  }
}
