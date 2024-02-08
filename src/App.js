import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {WelcomePage, Header,ListHeader, NewList, EditList, FoodCardCollection, Info, ItemInfo, EditItem, NoteCreateForm, ListCardCollection, Guide} from "./ui-components";
import EditNote from './EditNote';
import {Routes, Route} from 'react-router-dom'



class App extends Component {

  render() {
  return (



   


    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/lists' element={<div><ListHeader/><ListCardCollection/></div>} />
<Route exact path='/guide' element={<div><ListHeader/><Guide/></div>} />
<Route exact path='/1edit/:cid' element={<div><Header/><FoodCardCollection/></div>} />
<Route exact path='/' element={<div><WelcomePage/></div>} />
<Route exact path='/new' element={<div><Header/><ItemInfo/></div>} />
<Route exact path='/info' element={<div><Info/></div>} />
<Route exact path='/edit/:cid' element={<EditNote/>} />
<Route exact path='/ediList/:cid' element={<EditList/>} />
<Route exact path='/newList' element={<div><ListHeader/><NewList/></div>} />
{/* <Route exact path='/1edit/:cid' element={<NoteUpdateForm/>} /> */}
<Route exact path='/1new' element={<div><Header/><NoteCreateForm/></div>} />
{/* {<Route exact path='/new' element= {<UICreateNote/>} /> } */}

</Routes>
</header></div>




   

    );
}

}

export default withAuthenticator(App);