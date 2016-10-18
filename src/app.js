import React, { Component } from 'react';
import { Navigator } from 'react-native';

// our routes from navigator
import routes from './routes';
// here are the pages for the different routes
import SplashPage from './components/SplashPage';

export default class koiDemoNative extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    if (route.name === 'splashPage') {
      return (<SplashPage navigator={navigator} />);
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'splashPage' }}
        initialRouteStack={routes}
        renderScene={this.renderScene}
      />
    );
  }
}
