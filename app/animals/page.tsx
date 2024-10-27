'use client'
import React from 'react';
import AnimalImageDisplay from '../components/AnimalImageDisplay';
import Timer from '../components/Timer';
import Leaderboard from '../components/Leaderboard';

const AnimalPage: React.FC = () => {
  const commonImages = [
    '/images/among.png',
    '/images/bobesponja.png',
    '/images/fallguys.png',
    '/images/gato.png',
    '/images/leao.png',
    '/images/olaf.png',
    '/images/pato.png',
    '/images/porco.png'
  ];

  const specialImages = [
    '/images/freddy.png',
    '/images/bluey.png',
    '/images/bingo.png'
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Noite das Massinhas - Escolha seu Desenho!</h2>
      <AnimalImageDisplay commonImages={commonImages} specialImages={specialImages} />
      <Timer />
      <Leaderboard />
    </div>
  );
};

export default AnimalPage;
