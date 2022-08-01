import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './pages/Main';
import Error from "./pages/404";
import NavigationBar from './components/NavigationBar';

import './assets/global.scss';

function App() {
  return (
      <div className='main-root'>
          <Router>
              <NavigationBar></NavigationBar>
              <main>
                  <Routes>
                      <Route path='/' element={ <Main/> } />
                      <Route path='*' element={ <Error/> } />
                  </Routes>
              </main>
          </Router>
      </div>
  );
}

export default App;