import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import WelcomePage from './pages/WelcomePage';
import PricePage from './pages/PricePage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/rpaweb' component={DashboardPage} />
        <Route path='/welcome' component={WelcomePage} />
        <Route path='/price' component={PricePage} />
      </Switch>
    );
  }
}

export default Routes;
