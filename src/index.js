import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import './index.css';
import { ThemeProvider } from 'styled-components'
import theme from './theme'


export const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=';
export const API_KEY = '296QUvyOxkyLQS99KuN0uMJuXV4Ud8ViEmUfCFQF';

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));
