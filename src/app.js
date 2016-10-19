import React, { Component } from 'react';
import { Navigator, View } from 'react-native';
import { Provider } from 'react-redux';

// for our store
import configStore from './store/configStore';
// our routes from navigator
import { routes } from './routes';
// here are the pages for the different routes
import SplashPage from './components/SplashPage';
import LocationPage from './components/LocationPage';
import LocationsPage from './components/LocationsListPage';
import RestaurantPage from './components/RestaurantPage';

export default class koiDemoNative extends Component {

  renderScene(route, navigator) {
    switch (route.name) {
      case 'splashPage':
        return (<SplashPage navigator={navigator} />);
        // return (<LocationPage navigator={navigator} />);
        // return (<RestaurantPage navigator={navigator} />);
      case 'locationPage':
        return (<LocationPage navigator={navigator} />);
      case 'locationsPage':
        return (<LocationsPage navigator={navigator} />);
      case 'restaurantDetails':
        return (<RestaurantPage navigator={navigator} />);
      default:
        return (<SplashPage navigator={navigator} />);
    }
  }

  render() {
    return (
      <Provider store={configStore()} >
        <View style={{ flex: 1 }}>
          <Navigator
            style={{ flex: 1 }}
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={this.renderScene}
          />
        </View>
      </Provider>
    );
  }
}
