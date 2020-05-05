import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';


class SongDetail extends Component {
  render() {
    const { song } = this?.props?.data;
    return (
      <div>
        <h3>Song Detail</h3>
        <p>{song?.title}</p>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => ({
    variables: {
      id: props.params.id,
    },
  })
})(SongDetail);
