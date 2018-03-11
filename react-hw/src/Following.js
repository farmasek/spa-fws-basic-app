import React, { Component } from 'react';
import { getUserFollowings } from './http';
export class Following extends Component {
  state = { repositories: [] };

  fetchFollowing(login) {
    getUserFollowings(login).then(
      response => this.setState({ repositories: response.data }),
      () => this.setState({ repositories: [] }),
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.login !== prevProps.match.params.login) {
      this.fetchFollowing(this.props.match.params.login);
    }
  }
  componentDidMount() {
    this.fetchFollowing(this.props.match.params.login);
  }

  render() {
    return (
      <div>
        <h1> Following users</h1>
        <div className="cardsHolder">
          {this.state.repositories.map(user => (
            <div className="card followingCard" key={user.login}>
              <img width="100px" height="100px" src={user.avatar_url} />
              <h4>{user.login}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
