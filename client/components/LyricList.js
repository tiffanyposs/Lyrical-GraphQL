import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyric from '../queries/likeLyric';

class LyricList extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      // assume the response to make app snappy
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1,
        }
      }
    });
  }

  renderLyrics() {
    const { lyrics } = this.props;
    return lyrics?.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <div className="vote-box">
          <i
            className="material-icons"
            onClick={() => this.onLike(id, likes)}
          >
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ));
  }

  render() {
    const { lyrics } = this.props;
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    )
  }
}

export default graphql(likeLyric)(LyricList);
