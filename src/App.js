import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation>
        </Navigation>
        <Header text="Sean Donnelly">
        </Header>
        <header className="App-header"></header>
        <div className="body">

        </div>
      </div>
    );
  }
}

export default App;
