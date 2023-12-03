import React from 'react';
import {createRoot}from 'react-dom/client';
import './index.css';
import App from './App';
import Amplify from "@aws-amplify/core";
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from '@aws-amplify/ui-react';
import awsConfig from './aws-exports';
import {BrowserRouter} from 'react-router-dom'
const container = document.getElementById("root")
const root= createRoot(container)
//import reportWebVitals from './reportWebVitals';
//import { Amplify } from 'aws-amplify';
//import config from './aws-exports';
Amplify.configure(awsConfig);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AmplifyProvider>
    <App />
    </AmplifyProvider>
    </BrowserRouter>
  </React.StrictMode>

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
