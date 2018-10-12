// LIB
import React, { PureComponent } from 'react';

// APP
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

// MODULE
import './App.less';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
