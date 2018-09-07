import React, { Component } from 'react';
import axios from 'axios'

class UserCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    let data = this.props.data;
    const result = data.map((repo, i) => (
      <div className="github--profile" key={`repo-${i}`}>
        <div className="github--profile__state">
          <ul>
            <li>
                <h2>{repo.name}</h2>
            </li>
          </ul>
        </div>
      </div>
    ))

    return (
      <div>
        <div className="github--wrap">
            {result} 
        </div>
      </div>
    )
  }
}

export default UserCard



