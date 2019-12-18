import React from 'react';
import ProtectedRoute from './protected.route'
import Login from './login';
import Title2 from './title2';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './register';
import Add from './add';
import DashBoard from './dashboard';
import Edit from './edit';
import Settings from './settings';
import Details from './details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Title2></Title2>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' component={Register} />
        <ProtectedRoute path='/dashboard' component={DashBoard} />
        <ProtectedRoute path='/add' component={Add} />
        <ProtectedRoute path='/details/:id' component={Details} />
        <ProtectedRoute path='/edit/:id' component={Edit} />
        <ProtectedRoute path='/settings' component={Settings} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;

