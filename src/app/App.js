import React, { Component } from 'react';
import {Provider} from 'react-redux'

import Aplicacao from '../componentes/aplicacao.js'
import store from '../redux/store.js'

class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <div className="App">
         
          <Aplicacao />
        </div>

      </Provider>
    )   

  }
  }
  
export default App;
