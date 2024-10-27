import React, { useState } from 'react';
import Image from 'next/image';

interface AnimalImageDisplayProps {
  commonImages: string[];
  specialImages: string[];
}

// Função para embaralhar uma lista de imagens
const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const AnimalImageDisplay: React.FC<AnimalImageDisplayProps> = ({ commonImages, specialImages }) => {
  const [commonQueue, setCommonQueue] = useState<string[]>(shuffleArray(commonImages));
  const [specialQueue, setSpecialQueue] = useState<string[]>(shuffleArray(specialImages));
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  // Função para mostrar a próxima imagem comum
  const showNextCommonImage = () => {
    if (commonQueue.length === 0) {
      setCommonQueue(shuffleArray(commonImages)); // Reembaralha a lista quando acaba
    }
    const nextImage = commonQueue[0];
    setCommonQueue(commonQueue.slice(1));
    setCurrentImage(nextImage);
  };

  // Função para mostrar a próxima imagem especial
  const showNextSpecialImage = () => {
    if (specialQueue.length === 0) {
      setSpecialQueue(shuffleArray(specialImages)); // Reembaralha a lista quando acaba
    }
    const nextImage = specialQueue[0];
    setSpecialQueue(specialQueue.slice(1));
    setCurrentImage(nextImage);
  };

  return (
    <div className="text-center my-6">
      <div className="flex justify-center space-x-4">
        <button 
          onClick={showNextCommonImage} 
          className="bg-orange-500 text-white text-lg font-semibold py-2 px-6 rounded-full shadow-md hover:bg-orange-600"
        >
          Gerar Desenho
        </button>
        <button 
          onClick={showNextSpecialImage} 
          className="bg-purple-500 text-white text-lg font-semibold py-2 px-6 rounded-full shadow-md hover:bg-purple-600"
        >
          Imagem Especial
        </button>
      </div>
      {currentImage && (
        <div className="mt-6">
          <Image 
            src={currentImage} 
            alt="Desenho de Animal ou Personagem" 
            width={250} 
            height={250} 
            className="rounded-lg border-4 border-yellow-400 mx-auto" 
          />
        </div>
      )}
    </div>
  );
};

export default AnimalImageDisplay;
