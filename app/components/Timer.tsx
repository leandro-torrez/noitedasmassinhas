'use client'
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-center my-6">
      <h2 className="text-2xl font-bold text-blue-500">Tempo: {formatTime(time)}</h2>
      <div className="flex justify-center space-x-4 mt-4">
        <button 
          onClick={() => setIsActive(true)} 
          disabled={isActive} 
          className={`${
            isActive ? 'bg-gray-300' : 'bg-green-500 hover:bg-green-600'
          } text-white font-semibold py-2 px-4 rounded-full`}
        >
          Iniciar
        </button>
        <button 
          onClick={() => setIsActive(false)} 
          disabled={!isActive} 
          className={`${
            !isActive ? 'bg-gray-300' : 'bg-red-500 hover:bg-red-600'
          } text-white font-semibold py-2 px-4 rounded-full`}
        >
          Parar
        </button>
        <button 
          onClick={() => { setTime(0); setIsActive(false); }} 
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full"
        >
          Resetar
        </button>
      </div>
    </div>
  );
};

export default Timer;
