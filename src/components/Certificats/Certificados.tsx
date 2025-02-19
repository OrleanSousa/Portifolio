import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styles from './Certificados.module.css';

const Certificados: React.FC = () => {
  interface Certificado {
    title: string;
    pdf: string;
    id: number;
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
    <div className={styles.container}>
  <div className={styles.card}>

    {/* Slide */}
    {currentCertificado && (
      <div className={styles.slide}>
        <h2 className={styles.title}>{currentCertificado.title}</h2>
        
        <div className={styles.pdfContainer} onClick={openModal}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl={currentCertificado.pdf}
              defaultScale={currentCertificado.id ? (isSmallScreen ? 0.4 : 0.6) : (isSmallScreen ? 0.2 : 0.3)}/>
          </Worker>
        </div>
      </div>
    )}

    {/* Botões de Navegação */}
    <button 
      onClick={prevSlide} 
      className={styles.navButton + " left-0"}
    >
      <AiOutlineLeft size={24} />
    </button>
    
    <button 
      onClick={nextSlide} 
      className={styles.navButton + " right-0"}
    >
      <AiOutlineRight size={24} />
    </button>
  </div>

  {/* Modal */}
  {modalIsOpen && (
    <div 
      className={styles.modalOverlay} 
      onClick={handleOverlayClick}
    >
      <div className={styles.modalContent}>
        <button onClick={closeModal} className={styles.closeButton}>
          Fechar
        </button>
        <div className={styles.modalViewer}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl={currentCertificado.pdf}
              defaultScale={currentCertificado.id ? 1.0 : 0.5}
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
