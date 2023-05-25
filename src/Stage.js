import React from 'react';
import classNames from 'classnames';
import './style.css';

const Stage = ({ type }) => {
  return (
    <>
      <div className={classNames('stage', `stage-${type}`)}>
        <div>
          <video
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            style={{ width: '100%', height: '100%' }}
            controls
            autoplay
            muted
          />
        </div>
        {/* <div>screen 1</div> */}
        <div>screen 2</div>
        <div>screen 3</div>
        <div>screen 4</div>
        <div>screen 5</div>
        <div>screen 6</div>
        <div>screen 7</div>
        <div>screen 8</div>
        <div>screen 9</div>
        <div>screen 10</div>
        <div>screen 11</div>
        <div>screen 12</div>
        <div>screen 13</div>
        <div>screen 14</div>
        <div>screen 15</div>
        <div>screen 16</div>
      </div>
    </>
  );
};

export default Stage;
