'use client';
import React from 'react';
import './Clock.css';

export default function Clock({ weatherData, title }) {
  const [time, setTime] = React.useState([]);

  React.useEffect(() => {
    setTime(weatherData.split([':']));
  }, [weatherData]);

  return (
    <div className="flex flex-col gap-2">
      <p className="font-light text-center drop-shadow-lg sm:text-sm">{title}</p>
      <div className="clock__box">
        <div className="clock">
          <div className="hour">
            <div
              className="hr"
              id="hr"
              style={{
                transform: `rotateZ(${time[0] * 30 + time[1] / 12}deg)`,
              }}
            ></div>
          </div>
          <div className="min">
            <div
              className="mn"
              id="mn"
              style={{
                transform: `rotateZ(${time[1] * 6}deg)`,
              }}
            ></div>
          </div>
          <div className="sec">
            <div
              className="sc"
              id="sc"
              style={{
                transform: `rotateZ(${time[2] * 6}deg)`,
              }}
            ></div>
          </div>
        </div>
        <p className="text-center font-light text-lg py-5 drop-shadow-lg  sm:text-base">
          {time[0]}ч {time[1]}м
        </p>
      </div>
    </div>
  );
}
