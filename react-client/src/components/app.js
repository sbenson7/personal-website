import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import FunScott from './pages/funScott.js';
import WorkScott from './pages/workScott.js';
import Schoolwork from './pages/schoolwork.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="funscott" exact path="/funscott" component={FunScott} />
          <Route name="workscott" exact path="/workscott" component={WorkScott} />
          <Route name="schoolwork" exact path="/schoolwork" component={Schoolwork} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;