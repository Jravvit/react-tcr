import React, { Component } from 'react';
import { Route,BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Category from './components/category/categoryContainer';
import Apply from './components/apply/applyContainer';
import Dashboard from './components/dashboard/dashboardContainer';
import About from './components/about/aboutContainer';
import Content from './components/content/contentContainer';
import Header from './components/common/header';
import Footer from './components/common/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Category}/>
            <Route path="/category/:content" component={Content}/>
            <Route path="/apply" component={Apply}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/about" component={About}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

