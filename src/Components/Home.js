import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './NavBar';

import {connect} from 'react-redux'

function Home(props) {
    console.log('data home', props.book.book.bookData);
    const {bookData} = props.book.book
  return (
    <div >
        <Navbar />
        {bookData.map(item => (
          <div>
            {item.title}
          </div>
        ))}
        <h1>Ini Home</h1>
    </div>
  );
}

const mapStateToProps = (book) => {
  return{
    book
  }
}

export default connect(mapStateToProps)(Home);
