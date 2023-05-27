import React from 'react';
import PropTypes from 'prop-types';

const Music = ({ audioHandler, audioMuted }) => (
  <div className="beater__audio-control">
    <h4>ሙዚቃ</h4>
    <div
      className="beater__audio-control-wrapper"
      onClick={audioHandler}
      style={{
        background: audioMuted ? 'rgba(255, 255, 255, .2)' : 'rgba(153, 218, 0, .2)'
      }}
    >
      <div
        className="beater__audio-control-toggle"
        style={{
          transform: audioMuted ? 'translateX(0)' : 'translateX(100%)',
          background: audioMuted ? '#cacaca' : '#edc162'
        }}
      />
    </div>
  </div>
);

Music.propTypes = {
  audioHandler: PropTypes.func,
  audioMuted: PropTypes.bool
};

export default Music;
