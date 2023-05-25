import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import './style.css';

const Stage = ({ type }) => {
  const previousType = useRef(type);
  const [screens, setScreens] = useState([
    { key: 1, url: '' },
    { key: 2, url: '' },
    { key: 3, url: '' },
    { key: 4, url: '' },
    { key: 5, url: '' },
    { key: 6, url: '' },
    { key: 7, url: '' },
    { key: 8, url: '' },
    { key: 9, url: '' },
    { key: 10, url: '' },
    { key: 11, url: '' },
    { key: 12, url: '' },
    { key: 13, url: '' },
    { key: 14, url: '' },
    { key: 15, url: '' },
    { key: 16, url: '' },
  ]);
  useEffect(() => {
    if (type !== previousType.current) {
      if (type < previousType.current) {
        setScreens((prev) => {
          prev.forEach((screen) => {
            // 假定：上一次选择(previousType.current)的类型为9，本次选择(type)的类型为4
            // 那么 screen.key 值大于 type 的元素的 url 都得置为空字符串（模拟移除摄像头）
            if (screen.key > type) {
              screen.url = '';
            }
          });
          return prev.map((screen) => screen);
        });
      }
    }
    previousType.current = type;
  }, [type]);
  return (
    <>
      <div className={classNames('stage', `stage-${type}`)}>
        {screens.map((screen) => (
          <div
            key={screen.key}
            onDragOver={(event) => {
              event.preventDefault();
            }}
            onDrop={(event) => {
              const currentScreen = screens.find(
                (scre) => scre.key === screen.key
              );
              if (currentScreen && currentScreen.url) {
                window.alert('当前区域已有设备播放！');
                return;
              }
              var url = event.dataTransfer.getData('text');
              setScreens((prev) => {
                prev[screen.key - 1].url = url;
                return prev.map((screen) => screen);
              });
            }}
          >
            <video
              src={screen.url}
              style={{ width: '100%', height: '100%' }}
              controls
              autoPlay
              muted
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Stage;
