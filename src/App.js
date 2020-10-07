import React from "react";
import "./App.css";
import Date from './components/Date';
import Photo from './components/Photo';
import Copyright from './components/Copyright';

function App() {



  return (
    <div className="App">
      <p>
        <h1 id="main-title">NASA's Photo of the Day!</h1>
      </p>
      <Date /> 
      <div>
      <Photo />
      </div>
      <div>
      <Copyright />
      </div>
    </div>
  );
}

export default App;
