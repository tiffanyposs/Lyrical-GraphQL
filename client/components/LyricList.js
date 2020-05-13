import React, { Component } from 'react';

class LyricList extends Component {
  onLike(id) {
    console.log(id);
  }

  renderLyrics() {
    const { lyrics } = this.props;
    return lyrics?.map(({ id, content }) => (
      <li key={id} className="collection-item">
        {content}
        <i
          className="material-icons"
          onClick={() => this.onLike(id)}
        >
          thumb_up
        </i>
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

export default LyricList;
