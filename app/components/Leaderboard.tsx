'use client'
import React, { useState, useEffect } from 'react';

interface Participant {
  name: string;
  score: number;
}

const Leaderboard: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [name, setName] = useState('');

  // Carrega o ranking do localStorage ao iniciar
  useEffect(() => {
    const storedParticipants = localStorage.getItem('leaderboard');
    if (storedParticipants) {
      setParticipants(JSON.parse(storedParticipants));
    }
  }, []);

  // Atualiza o localStorage sempre que o ranking mudar
  useEffect(() => {
    localStorage.setItem('leaderboard', JSON.stringify(participants));
  }, [participants]);

  const addParticipant = () => {
    if (name.trim()) {
      const newParticipants = [...participants, { name, score: 0 }];
      setParticipants(newParticipants);
      setName('');
    }
  };

  const incrementScore = (index: number) => {
    const updatedParticipants = participants.map((participant, i) => {
      if (i === index) {
        return { ...participant, score: participant.score + 1 };
      }
      return participant;
    });
    setParticipants(updatedParticipants);
  };

  const resetLeaderboard = () => {
    setParticipants([]);
    localStorage.removeItem('leaderboard');
  };

  const sortedParticipants = [...participants].sort((a, b) => b.score - a.score);

  return (
    <div className="text-center my-6">
      <h2 className="text-3xl font-bold text-yellow-600 mb-4">Placar</h2>
      <div className="flex justify-center space-x-2 mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do Jogador"
          className="border border-yellow-400 rounded-full px-4 py-2 text-lg"
        />
        <button 
          onClick={addParticipant} 
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-600"
        >
          Adicionar Jogador
        </button>
        <button 
          onClick={resetLeaderboard} 
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-red-600"
        >
          Resetar Placar
        </button>
      </div>

      <table className="w-full max-w-lg mx-auto border-collapse">
        <thead>
          <tr className="bg-yellow-300 text-xl">
            <th className="p-4 border-b-2 border-yellow-400">Nome</th>
            <th className="p-4 border-b-2 border-yellow-400">Pontuação</th>
            <th className="p-4 border-b-2 border-yellow-400">Ações</th>
          </tr>
        </thead>
        <tbody>
          {sortedParticipants.map((participant, index) => (
            <tr 
              key={index} 
              className={`${index % 2 === 0 ? 'bg-yellow-100' : 'bg-yellow-200'} text-lg`}
            >
              <td className="p-4 border-b border-yellow-300 font-medium">{participant.name}</td>
              <td className="p-4 border-b border-yellow-300 font-medium">{participant.score}</td>
              <td className="p-4 border-b border-yellow-300">
                <button 
                  onClick={() => incrementScore(index)} 
                  className="bg-green-500 text-white font-semibold py-1 px-3 rounded-full shadow-md hover:bg-green-600"
                >
                  Adicionar Pontos
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
