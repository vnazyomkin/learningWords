import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import 'reset-css'
import classes from './App.module.css'

import Layout from './hoc/Layout/Layout';
import Training from './containers/Training/Training';
import Dictionary from './containers/Dictionary/Dictionary';
import Learning from './components/Training/Learning/Learning';

class App extends Component {
  state = {

  }

  render() {
    const routers = (
      <Switch>
        <Route path='/training' component={Training}/>
        <Route path='/learning' component={Learning} />
        <Route path='/dictionary' component={Dictionary} />
        <Route path='/' component={Training}/>
        <Redirect to='/'/>
      </Switch>
    );
    return (
      <BrowserRouter>
        <Layout>
          {routers}
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
