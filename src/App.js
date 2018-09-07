import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard'
import Search from './components/Search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      username: '',
      repoList: []
    }
  }

  fetchProfile = (username) => { 
    let url = `https://api.github.com/users/${username}`;
    axios.get(url)
      .then(response => {
          axios.get(response.data.repos_url).then(res => {
            this.setState({
              repoList: res.data
            })     
          })
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    this.fetchProfile(this.state.username);
  }
  
  render() {
    return (
      <div className="App">
        <h1>Please enter a name:</h1>
        <Search fetchProfile={this.fetchProfile}/>
        <h2>List of repositories:</h2>
        <hr/>
        <UserCard data={this.state.repoList}/>
      </div>
    );
  }
}

export default App;
