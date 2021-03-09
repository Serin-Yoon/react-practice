import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState('맛집 추천');
  let [글제목2, 글제목변경2] = useState('카페 추천', '책방 추천'); //array 형태로 저장

  return (
    <div className="App">
      <div className="nav">
        menu
      </div>
      <div className="list">
        <h3>{ 글제목 }</h3>
        <p>2021년 3월 9일</p>
        <hr /> 
      </div>
    </div>
  );
}

export default App;
