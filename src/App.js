import React from 'react'
import { Provider } from 'react-redux';
import configStore from './configStore'
import Authentication from './components/Authentication'
import DashBoard from './components/DashBoard';

const store = configStore();

const App = () => {
  return (
    <Provider store= {store}>
    <div>
      <Authentication/>
    </div>
    </Provider>
  )
}

export default App

