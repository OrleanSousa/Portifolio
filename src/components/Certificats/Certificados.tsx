import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Certificados: React.FC = () => {
  interface Certificado {
    title: string;
    pdf: string;
    description: string;
  }

  const [certificados, setCertificados] = useState<Certificado[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const fetchCertificados = async () => {
      try {
        const response = await fetch('/assets/certificados.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar JSON');
        }
        const data = await response.json();
        setCertificados(data);
      } catch (error) {
        console.error('Erro ao carregar certificados:', error);
      }
    };

    fetchCertificados();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificados.length);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificados.length) % certificados.length);
  };

  const openModal = (): void => {
    if (!isSmallScreen) {
      setModalIsOpen(true);
    }
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (certificados.length === 0) {
    return <p>Carregando certificados...</p>;
  }

  const currentCertificado = certificados[currentIndex];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="relative w-full max-w-xl lg:max-w-4xl p-6 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500">

        {/* Slide */}
        {currentCertificado && (
          <div className="text-center transition duration-500 ease-in-out">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{currentCertificado.title}</h2>
            
            <div className="w-full h-64 lg:h-96 rounded-lg shadow-md mb-4 overflow-hidden cursor-pointer" onClick={openModal}>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={currentCertificado.pdf}
                  defaultScale={isSmallScreen ? 0.2 : 0.3}
                />
              </Worker>
            </div>

            <p className="text-gray-600">{currentCertificado.description}</p>
          </div>
        )}

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

      {/* Modal */}
      {modalIsOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" 
          onClick={handleOverlayClick}
        >
          <div className="relative w-full max-w-4xl h-4/5 bg-white rounded-2xl shadow-xl overflow-hidden p-6">
            <button onClick={closeModal} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-700 transition">
              Fechar
            </button>
            <div className="w-full h-full flex justify-center items-center mt-[40px]">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={currentCertificado.pdf}
                  defaultScale={0.5}
                />
              </Worker>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificados;
