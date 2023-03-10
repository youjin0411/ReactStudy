import './App.css';
import React from 'react';
function App() {
  const name = '리액트2';
  return (
    <div> 
      { name ==='리액트' ? (
        <h1> {name} 안녕😘 </h1>
      ) : (
        <h2> 잘 작동하니🤷‍♀️ ? </h2>
      )}
    </div>
  );
}

export default App;
