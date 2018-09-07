import React, { Component } from 'react';
import './../../App.css';
import axios from 'axios'

class SearchCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchProfile(this.state.value);
  }

  render () {
    return (
      <div>
        <div className="search--box">
          <form onSubmit={this.handleSubmit}>
            <label><input type="search" ref="username" value={this.state.value} onChange={this.handleChange} placeholder="Type Username + Enter"/></label>
            <input type="submit" value="Submit" />
          </form> 
        </div>
      </div>  
    )
  }
}

export default SearchCard