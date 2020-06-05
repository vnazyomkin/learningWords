import React, {Component} from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import MainPage from '../../components/MainPage/MainPage';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar/>
                
                <main>
                    <MainPage>
                      {this.props.children}
                    </MainPage>
                </main>    
            </Aux>
        );
    }
}

export default Layout;