import React, {Component} from 'react';

import 'reset-css'
import classes from './App.module.css'


import Sidebar from './components/Navigation/Sidebar/Sidebar'
import MainPage from './components/MainPage/MainPage';
import Training from './containers/Training/Training';



import Toolbar from './components/Navigation/Toolbar/Toolbar'

class App extends Component {
  state = {

  }

  render() {
    return (
      <div>
          <Toolbar/>
          <main className={classes.container}>
            <Sidebar/>
            <MainPage>
              <Training/>
            </MainPage>
          </main>
      </div>
    );
  }
}

export default App;
