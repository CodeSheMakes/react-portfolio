import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources'

const navbarConfig = [
    {title: 'home', url: '/'},
    {title: 'about', url:'/about'},
    {title: 'contact', url:'/contact'},
    {title: 'resources', url:'/resources'}
]

const App = () => {
    return (
    
    <div>
    <Navbar config={navbarConfig}/>
      <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/resources' component={Resources} />
              <Redirect to ='/' />
          </Switch>
        </Router>
    </div>

    );
}

export default App;