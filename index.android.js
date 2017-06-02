import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux'

import App from './src/App'
import store from './src/store/manageStore'

export default class reactnativefirst extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactnativefirst', () => reactnativefirst);
