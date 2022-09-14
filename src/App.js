import React, { Component } from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home}></Route>
          </Switch>
        </BrowserRouter>
        

      </div>
    )
  }
}
