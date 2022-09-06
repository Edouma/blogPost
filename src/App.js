import React from 'react';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './components/Create';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content"> 
        <Switch>
          <Route exact path="/">
            <Blogs /> 
          </Route>   

          <Route path="/create">
            <Create /> 
          </Route>  
            <Create />
        </Switch>
        </div>
        
      </div>
      </Router>
    
  );
}

export default App;
