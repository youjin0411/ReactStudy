import './App.css';
import React from 'react';
function App() {

  //AND 연산자(&&)를 사용한 조건부 렌더링 
  //1. 
  //const name = '리액트';
  //return <div> {name === '리액트' ? <h1>리액트입니다.</h1> : null} </div>
  //2. 
  //const name = '리액트';
  //return <div> { name === '리액트' && <h1> 리액트입니다.</h1>} </div>
  //3.
  //const number = 10; 
  //return number && <div> 내용 </div> //number가 true 값이면 뒤에 값을 출력함. 즉 number가 0이라면 False이므로 아무것도 출력하지 않지만, 0보다 큰 숫자라면 True이므로 

  //undefined를 렌더링 하지 않기 
  //1. 
    // const name = undefined;
    // return name || '값이 undefind 입니다.';
  //2.
  //  const name = undefined;
  //  return <div>{ name || '리액트' }</div>

  //인라인 스타일링
  //3.
  const name = '리액트'
  const style1 = {
    backgroundColor : "black",  //background-Color --> backgroundColor로 표현   
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16 //단위가 px 
  }
  return <div style={style1}> {name} </div>
}

export default App;
