import React from 'react';

import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Detail from './Pages/Detail';
import Card from './Pages/Card';
import Checkout from './Pages/Checkout';
import Thankyou from './Pages/Thankyou';

import Header from './Components/Header';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/detail' component={Detail} />
          <Route exact path='/card' component={Card} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/thankyou' component={Thankyou} />
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
