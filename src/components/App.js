import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './SignUp'
import HomePage from './HomePage'
import Header from './Header'
import { Provider } from 'react-redux'
import store from '../redux/store'


class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App
