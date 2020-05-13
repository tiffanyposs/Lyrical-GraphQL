import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import fetchSongs from '../queries/fetchSongs';
import addSong from '../queries/addSong';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    }
  }

  resetInput() {
    this.setState({
      title: '',
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    if (!title) return;

    this.props.mutate({
      variables: {
        title,
      },
      refetchQueries: [{ query: fetchSongs }] // warm up cache, refetches data associated with a DIFFERENT component
    }).then(() => hashHistory.push('/'));

    this.resetInput();
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title</label>
          <input
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
          <input type="submit" value="create" />
        </form>
      </div>
    );
  }
}

export default graphql(addSong)(SongCreate);
