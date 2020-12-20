import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom'
import {
  Drawer,
  IconButton,
  AppBar,
  Toolbar
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';

import GroupsContainer from './views/GroupsContainer/GroupsContainer.jsx'
import SignINContainer from './views/SignINContainer.jsx'
import SignUPContainer from './views/SignUPContainer.jsx'
import NewGroupContainer from './views/NewGroupContainer.jsx'
import CoursesContainer from './views/Asteroids.jsx'
import DashboardContainer from './views/DashboardContainer/Dashboard.jsx'


import './App.css'

function App() {
  const [ open, setOpen ] = useState(false)

  return (
    <React.Fragment>
      <Router>
        <div>
          <AppBar position="relative" className="nav_bar" color="secondary">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={ () => setOpen(true) }
              >
                <MenuIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>



          <Switch>
            <Route exact path="/">
              <SignINContainer/>
            </Route>
            <Route exact path="/Dashboard">
              <DashboardContainer/>
            </Route>
            <Route exact path="/SignUPContainer">
              <SignUPContainer/>
            </Route>
            <Route exact path="/NewGroup">
              <NewGroupContainer/>
            </Route>
            <Route path="/Courses">
              <CoursesContainer/>
            </Route>
            <Route path="/Groups">
              <GroupsContainer/>
            </Route>
            <Route path="/Settings">
              <GroupsContainer/>
            </Route>
            <Route>
              <h1>404 Not found</h1>
            </Route>
          </Switch>


        </div>
        <Drawer
          variant="persistent"
          anchor="left"
          open={ open }
        >
          <IconButton
            onClick={() => setOpen(false)}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon/>
        </IconButton>
        
            <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/Groups">Groups</Link>
            </li>
            <li>
              <Link to="/Courses">Courses</Link>
            </li>
            <li>
              <Link to="/Settings">Settings</Link>
            </li>
            </ul>
        </Drawer>
      </Router>
    </React.Fragment>
  );
}

export default App;
