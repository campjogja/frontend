import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/NavBar';

const URL_STRING = "/api/v1/"

class App extends Component {
  state = {
    name: 'Mamanx Garox',
    date: new Date().getDate(),
    library: [],
    title: '',
    author: '',
    description: '',
    body: ''
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    Axios.get(URL_STRING)
      .then(({ data }) => {
        this.setState({
          library: data.result
        })
      })
      .catch(err => console.log(err))
  }

  addBook = (id) => {
    const { title, author, description, body } = this.state
    const book = {
      title,
      body
    }

    // Axios.post(`https://jsonplaceholder.typicode.com/posts`, book, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'token': `bearer ${token}`
    //   },
    // })
    //   .then((response) => {
    //     console.log('response', response.data)

    //   })
    //   .catch((error) => {
    //     alert('error', error.response)
    //   })

    // console.log('book', book);
    Axios.post(`https://jsonplaceholder.typicode.com/posts`, book)
      .then(res => {
        console.log(res);
      })
  }

  nextDate = () => {
    this.setState({
      date: this.state.date + 1
    })
  }

  render() {
    const { name, date, library } = this.state
    console.log('data from library state', library);
    return (
      <div>
        <Navbar />
        Ini Class Component
      <div className="cardContainer">
          {library.length < 1 ?
            (
              <div>
                data kosong
              </div>
            ) :
            library.map(item => (
              <Link to={{pathname: '/home', data: item}}>
              <div key={item.id} className="cardContainer">
                <div className="card">
                  <h1 className="textTitle">{item.title}</h1>
                  <p className="textTitle">{item.author}</p>
                  <p className="textTitle">{item.desc}</p>
                </div>
              </div>
              </Link>
            ))}
          <button onClick={this.nextDate}>
            Next Date
      </button>
        </div>
        <div>
          <input type="text"
            onChange={(e) => {
              this.setState({
                title: e.target.value
              })
            }} />
          <input type="text"
            onChange={(e) => {
              this.setState({
                body: e.target.value
              })
            }} />
          {/* <input type="text"
            onChange={(e) => {
              this.setState({
                description: e.target.value
              })
            }} /> */}
          <button onClick={this.addBook}>
            Add Book
          </button>
        </div>
      </div>
    )
  }
}

export default App;