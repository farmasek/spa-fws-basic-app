import React, { Component } from 'react';
import './App.css';
import { getUser } from './http';
import { Link } from 'react-router-dom';
class App extends Component {
  state = {
    user: null,
  };

  constructor(props) {
    super(props);
    if (!this.state.user) {
      this.props.history.push('/');
    }
  }

  handleLoginChange = event => {
    this.setState({ user: null });
    getUser(event.target.value).then(
      response => {
        this.setState({ user: response.data });
        this.props.history.push(`/following/${response.data.login}`);
      },
      () => {
        this.props.history.push('/');
        this.setState({ user: null });
      },
    );
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        Find github user:
        <input placeholder="login" onChange={this.handleLoginChange} />
        <br />
        {user ? (
          <div>
            <div className="profileHolder">
              <div>
                <h2>{user.login}</h2>
                <h1>{user.name}</h1>
                <p>{user.bio}</p>
                <i>{user.company}</i>
              </div>
              <img width="200px" height="200px" src={user.avatar_url} />
            </div>
            <br />
            <Link to={`/following/${user.login}`}>Following</Link>
            {` | `}
            <Link to={`/repositories/${user.login}`}>Repositories</Link>
          </div>
        ) : (
          <div>User not found</div>
        )}
      </div>
    );
  }
}

export default App;
