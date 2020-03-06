import React from 'react';
import {connect} from 'react-redux'
import Links from './Links/Links'
import Steraming from './YouTube/YouTube'
import './App.css';

function App(props) {
  return (
    <div>
      <div id = 'Steraming'>
        <Steraming id = {props.List}/>
      </div>
      <div id = 'Links'>
        <Links />
      </div>
    </div>
  );
}

const mapPlayList = state =>{
  return{
      List : state.list
  }
}

export default connect(mapPlayList)(App);
