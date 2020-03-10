import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './NavBar';

function Home(props) {
    console.log('data', props.location.data);
    
  return (
    <div >
        <Navbar />
        <p>
        {props.name}
        </p>
        <h1>Ini Home</h1>
    </div>
  );
}

export default Home;
