import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import WelcomePage from './pages/WelcomePage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/home' component={DashboardPage} />
        <Route path='/welcome' component={WelcomePage} />
      </Switch>
    );
  }
}

export default Routes;
