import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import configureStore from "../configureStore"

import HelloWorld from "./HelloWorld"
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Home!")} />
            <Route path="/hello" render={() => <HelloWorld greeting="Friend" />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
