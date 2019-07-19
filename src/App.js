import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation></Navigation>
          <Header text="Lorum Ipsum"></Header>

          <div className="body">
          
            <Route path="/" exact component={Home} />
            <Route path="/foto" exact component={Home} />

          </div>
        
        </div>
      </Router>
    );
  }
}

export default App;
