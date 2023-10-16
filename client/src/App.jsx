import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import { Home } from './components/Home';
import About from './pages/About';
import Help from './pages/Help';
import UserProfile from './pages/UserProfile';
import Category from './pages/Category';


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/help' element={<Help />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/category/:items' element={<Category />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App