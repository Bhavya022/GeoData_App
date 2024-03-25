import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/Auth/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {/* Make sure PrivateRoute is implemented correctly */}
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
