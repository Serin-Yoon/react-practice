import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '혜화 맛집';
  function myfunc() {
    return 100
  }

  return (
    <div className="App">
      <div className="nav">
        menu
      </div>
      <h4> { posts } </h4>
      <h4> { myfunc() } </h4>
      <img src={ logo } alt="logo" />
      <div style={ {color: "blue", fontSize: "30px" }}>스타일 변경</div>
    </div>
  );
}

export default App;
