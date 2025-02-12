import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import foto from '../../assets/foto2.jpg';
import foto2 from '../../assets/foto1.jpg';

const Certificados = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificados = [
    {
      title: 'Certificado de Excelência',
      image: foto,
      description: 'Este é um breve texto descrevendo o certificado de Excelência.'
    },
    {
      title: 'Certificado de Participação',
      image: foto2,
      description: 'Este é um breve texto descrevendo o certificado de Participação.'
    },
    {
      title: 'Certificado de Conclusão',
      image: foto,
      description: 'Este é um breve texto descrevendo o certificado de Conclusão.'
    },
    {
      title: 'Certificado de Desempenho',
      image: foto2,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificados.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificados.length) % certificados.length);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="relative w-full max-w-xl lg:max-w-4xl p-6 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500">

        {/* Slide */}
        <div className="text-center transition duration-500 ease-in-out">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{certificados[currentIndex].title}</h2>
          <img 
            src={certificados[currentIndex].image} 
            alt="Certificado" 
            className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-md mb-4 transition duration-500 ease-in-out transform hover:scale-105"
          />
          <p className="text-gray-600">{certificados[currentIndex].description}</p>
        </div>

        {/* Botões de Navegação */}
        <button 
          onClick={prevSlide} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-800 transition"
        >
          <AiOutlineLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-800 transition"
        >
          <AiOutlineRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Certificados;
