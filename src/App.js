import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {WelcomePage, Header, FoodCardCollection, Info, ItemInfo, EditItem, NoteCreateForm, ListCardCollection} from "./ui-components";
import EditNote from './EditNote';
import {Routes, Route} from 'react-router-dom'



class App extends Component {

  render() {
  return (



   


    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/' element={<div><Header/><ListCardCollection/></div>} />
<Route exact path='/1edit/:cid' element={<FoodCardCollection/>} />
<Route exact path='/0' element={<div><WelcomePage/></div>} />
<Route exact path='/new' element={<div><Header/><ItemInfo/></div>} />
<Route exact path='/info' element={<div><Info/></div>} />
<Route exact path='/edit/:cid' element={<EditNote/>} />
{/* <Route exact path='/1edit/:cid' element={<NoteUpdateForm/>} /> */}
<Route exact path='/1new' element={<div><Header/><NoteCreateForm/></div>} />
{/* {<Route exact path='/new' element= {<UICreateNote/>} /> } */}

</Routes>
</header></div>




   

    );
}

}

export default withAuthenticator(App);