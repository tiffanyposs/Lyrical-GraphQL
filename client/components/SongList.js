import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongs from '../queries/fetchSongs';
import deleteSong from '../queries/deleteSong';

class SongList extends Component {
  onSongDelete(id) {
    this.props.mutate({
      variables: {
        id,
      },
    }).then(() => this.props.data.refetch()); // refetches data from this component
  }

  renderSongs() {
    const { songs } = this.props.data;
    return songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          {title}
          <i
            className="material-icons"
            onClick={() => this.onSongDelete(id)}
          >
            delete
          </i>
        </li>
      )
    })
  }

  render() {
    if (this.props.data.loading) return <div>Loading...</div>
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

// you need to run graphql twice to add both queries
export default graphql(deleteSong)(
  graphql(fetchSongs)(SongList)
);
