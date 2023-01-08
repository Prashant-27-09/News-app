 import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize=5;
    
  render() {
    return (
      <div>
       
       <NavBar />
       <Router>
       <Routes>
          <Route  exact path="/" element={<News key={1} pageSize={this.pageSize} country='in' category="general"/>}></Route>
          <Route  path="/business" element={<News key={2} pageSize={this.pageSize} country='in' category="business"/>}></Route>
          <Route  exact path="/entertainment"element={<News Key={3} pageSize={this.pageSize} country='in' category="entertainment"/>}></Route>
          <Route  exact path="/general"element={<News key={4} pageSize={this.pageSize} country='in' category="general"/>}></Route>
          <Route  exact path="/health"element={<News key={5} pageSize={this.pageSize} country='in' category="health"/>}></Route>
          <Route  exact path="/science"element={<News key={6} pageSize={this.pageSize} country='in' category="science"/>}></Route>
          <Route  exact path="/sports"element={<News key={7} pageSize={this.pageSize} country='in' category="sports"/>}></Route>
          <Route  exact path="/technology"element={<News key={8} pageSize={this.pageSize} country='in' category="technology"/>}></Route>
        </Routes>
       </Router>
      </div>
    )
  }
}
