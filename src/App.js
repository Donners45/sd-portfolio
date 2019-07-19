import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation>
          </Navigation>
          <Header text="Lorum Ipsum">
          </Header>
          <div className="body">
            <Route path="/" exact component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
