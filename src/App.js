import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation>
        </Navigation>
        <Header text="Sean Donnelly">
        </Header>
        <div className="body">
          <Home></Home>
        </div>
      </div>
    );
  }
}

export default App;
