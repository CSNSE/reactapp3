import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {Header, FoodCardCollection, Info, ItemInfo, EditItem} from "./ui-components";
import {Routes, Route} from 'react-router-dom'
//import NewNote from './NewNote'

class App extends Component {

  render() {
  return (
    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/' element={<div><Header/><FoodCardCollection/></div>} />
<Route exact path='/new' element={<div><Header/><ItemInfo/></div>} />
<Route exact path='/info' element={<div><Header/><Info/></div>} />
<Route exact path='/edit' element={<div><Header/><EditItem/></div>} />
{/* {<Route exact path='/new' element= {<UICreateNote/>} /> } */}

</Routes>
</header></div>

    );
}

}

export default withAuthenticator(App);