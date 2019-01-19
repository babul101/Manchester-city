import React from 'react';
import Layout from './Hoc/Layout';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/signin';
import Dashboard from './Components/Admin/Dashboard';
import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';
import AdminMatches from './Components/Admin/Matches';
import AddEditMatch from './Components/Admin/Matches/addEditMatch';
const Routes = (props) => {
  
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path='/admin_matches/edit_match' exact component={AddEditMatch} />
        <PrivateRoute {...props} path='/admin_matches/edit_match/:id' exact component={AddEditMatch} />
        <PrivateRoute {...props} path='/admin_matches' exact component={AdminMatches} />
        <PrivateRoute {...props} path='/dashboard' exact component={Dashboard} />
        <PublicRoute {...props} restricted={true} path = '/sign_in' exact component={SignIn} />
        <PublicRoute {...props} restricted={false} path='/' exact component={Home} />
      </Switch>       
    </Layout>
  );
};

export default Routes;