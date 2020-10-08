import React, { useState, useEffect } from "react";
import "./App.css";
import Date from './components/Date';
import Photo from './components/Photo';
import Copyright from './components/Copyright';
import Axios from 'axios';
import { BASE_URL, API_KEY } from './index';
import _ from "lodash";
import styled from 'styled-components'

const H1Styling = styled.h1`
  color: #1d3557;
  background-color: #ffbe0b;
  border-radius: 2%;
`



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
      setState(res.data)
      
    })
  };
  console.log("below is state");
  console.log(state);
  console.log(state.explanation);

  

  return (
    <div className="App">
      <H1Styling id="main-title">🚀NASA's Photo of the Day!🌚</H1Styling>
      <Date state_date={state.date} state_explanation={state.explanation} state_photographer={state.copyright}/> 
      <div>
      <Photo state={state.url} />
      </div>
      <div>
        <Copyright state_copyright={state.copyright}/>
      </div>
    </div>
  );
}

export default App;
