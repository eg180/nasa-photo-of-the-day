import React, { useState } from "react";
import "./App.css";
import Date from './components/Date';
import Photo from './components/Photo';
import Copyright from './components/Copyright';
import axios from 'axios';
import { BASE_URL, API_KEY } from './index';



function App() {
  const {currentPhoto, setPhoto} = useState('');

  const getnasaDailyPhotoURL = () => {
    axios.get(`${BASE_URL}${API_KEY}`)
    .then(res => {
      let dynamic_photo_url = res.data.url;
      setPhoto(dynamic_photo_url);

      // setPhoto(dynamic_photo_url);
  })
    .catch(err => {
      // do something else
      console.log(err);
    })
  } 
  

  return (
    <div className="App">
      <h1 id="main-title">NASA's Photo of the Day!</h1>
      <Date /> 
      <div>
      <Photo photoDuJour = {getnasaDailyPhotoURL()}/>
      </div>
      <div>
      <Copyright />
      </div>
    </div>
  );
}

export default App;
