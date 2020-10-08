import React, { useState, useEffect } from "react";
import "./App.css";
import Date from './components/Date';
import Photo from './components/Photo';
import Copyright from './components/Copyright';
import Axios from 'axios';
import { BASE_URL, API_KEY } from './index';
import _ from "lodash";



function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    fetchData()

  }, []);


  

  const fetchData = () => {

    const date = '1980-03-01';
    Axios.get(`${BASE_URL}${API_KEY}`)
    .then((res)=> {
      
      console.log(res.data.url)
      let photoURL = res.data.url;
      setState(res.data.url)
      
    })
  };
  console.log("below is state");
  console.log(state);

  

  return (
    <div className="App">
      <h1 id="main-title">🚀NASA's Photo of the Day!🌚</h1>
      <Date /> 
      <div>
      <Photo state={state} />
      </div>
      <div>
        <Copyright />
      </div>
    </div>
  );
}

export default App;
