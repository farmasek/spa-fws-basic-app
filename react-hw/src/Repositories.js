import React, { Component } from 'react';
import { getUsersRepos } from './http';
export class Repositories extends Component {
  state = { repositories: [] };

  fetchRepositories(login) {
    getUsersRepos(login).then(
      response => this.setState({ repositories: response.data }),
      () => this.setState({ repositories: [] }),
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.login !== prevProps.match.params.login) {
      this.fetchRepositories(this.props.match.params.login);
    }
  }
  componentDidMount() {
    this.fetchRepositories(this.props.match.params.login);
  }

  render() {
    return (
      <div>
        <h1> Repositories </h1>
        <div className="cardsHolder">
          {this.state.repositories.map(repository => (
            <div className="card" key={repository.id}>
              <div className="firstLine">
                <h4>{repository.name}</h4> <i>{repository.language}</i>
              </div>
              <p>{repository.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
