import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VisibilityFilters } from './store/action';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <Test />
    </div>
  );
}

export default App;
