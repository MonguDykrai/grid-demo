import React, { useState } from 'react';
import Stage from './Stage.js';
import './style.css';

export default function App() {
  const [type, setType] = useState(1);
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => setType(1)}>1</button>
        </li>
        <li>
          <button onClick={() => setType(4)}>4</button>
        </li>
        <li>
          <button onClick={() => setType(9)}>9</button>
        </li>
        <li>
          <button onClick={() => setType(16)}>16</button>
        </li>
      </ul>
      <ol>
        <li
          draggable="true"
          data-url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          onDragStart={(event) => {
            event.dataTransfer.setData('text/plain', event.target.dataset.url);
          }}
        >
          地址1
        </li>
        <li
          draggable="true"
          data-url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          onDragStart={(event) => {
            event.dataTransfer.setData('text/plain', event.target.dataset.url);
          }}
        >
          地址2
        </li>
      </ol>
      <div className="container">
        <Stage type={type} />
      </div>
    </div>
  );
}
