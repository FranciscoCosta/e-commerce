import React, { Component } from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import './App.css';
import Categories from './components/Categories';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Categories}></Route>
          </Switch>
        </BrowserRouter>
        

      </div>
    )
  }
}
