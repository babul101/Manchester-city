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
import AdminPlayers from './Components/Admin/Players';
import AddEditPlayers from './Components/Admin/Players/addEditPlayers';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';
import NotFound from './Components/ui/not_found';
const Routes = (props) => {
  
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path='/admin_players/add_players' exact component={AddEditPlayers} />
        <PrivateRoute {...props} path='/admin_players/add_players/:id' exact component={AddEditPlayers} />
        <PrivateRoute {...props} path='/admin_players' exact component={AdminPlayers} />
        <PrivateRoute {...props} path='/admin_matches/edit_match' exact component={AddEditMatch} />
        <PrivateRoute {...props} path='/admin_matches/edit_match/:id' exact component={AddEditMatch} />
        <PrivateRoute {...props} path='/admin_matches' exact component={AdminMatches} />
        <PrivateRoute {...props} path='/dashboard' exact component={Dashboard} />
        <PublicRoute {...props} restricted={false} path='/the_matches' exact component = {TheMatches}   />
        <PublicRoute {...props} restricted={false} path='/the_team' exact component = {TheTeam}   />
        <PublicRoute {...props} restricted={true} path = '/sign_in' exact component={SignIn} />
        <PublicRoute {...props} restricted={false} path='/' exact component={Home} />
        <PublicRoute {...props} restricted={false} component={NotFound} />
      </Switch>       
    </Layout>
  );
};

export default Routes;