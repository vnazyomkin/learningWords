import React, {Component} from 'react';

import Sidebar from './components/Navigation/Sidebar/Sidebar'
import MainPage from './components/MainPage/MainPage';
import Dictionary from './containers/Dictionary/Dictionary';
import 'reset-css'
import classes from './App.module.css'


import Toolbar from './components/Navigation/Toolbar/Toolbar'

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className={classes.App}>
          <Toolbar/>
          <main className={classes.container}>
            <Sidebar/>
            <MainPage>
              <Dictionary/>
            </MainPage>
          </main>
      </div>
    );
  }
}

export default App;
