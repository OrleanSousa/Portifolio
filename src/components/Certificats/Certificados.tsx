import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import certificado1 from '../../../public/assets/UC-012d4099-e560-42a2-bdad-a25fa7594efe-js-em-7-dias.pdf';
import certificado2 from '../../../public/assets/UC-12b30d78-95c0-4d76-a467-28f9b89aa32d-s3.pdf';
import certificado3 from '../../../public/assets/UC-21e987f3-1891-4b69-94ce-3397d6eaa76f.pdf';
import certificado4 from '../../../public/assets/UC-230ad8dc-ab28-4e1b-895f-ea8179ff2481js-com-node.js-e-projetos.pdf';
import certificado5 from '../../../public/assets/UC-247910dc-650d-4049-aec4-1dbe06ebe24f-desen-web+projetos.pdf';
import certificado6 from '../../../public/assets/UC-2a1b3f9f-98c6-4820-87c2-b4b184059ddd-flexbox.pdf';
import certificado7 from '../../../public/assets/UC-2fc8990e-26cb-4cd4-80ab-db5cb62bfb77.pdf';
import certificado8 from '../../../public/assets/UC-6c5a6544-5ab7-46c5-a766-ba63cdfbc474-react+typescript.pdf';
import certificado9 from '../../../public/assets/UC-7cedafdc-9097-44bd-9be9-bdffcc1a10d9-git-e-github.pdf';
import certificado10 from '../../../public/assets/UC-acf320fc-b3a6-4156-aa5f-bf90688ffdf8-20-projetos-com-react.pdf';
import certificado11 from '../../../public/assets/UC-acf320fc-b3a6-4156-aa5f-bf90688ffdf8.pdf';
import certificado12 from '../../../public/assets/UC-b44ebd01-1676-4ee2-b6b5-325b89c8e432-appsync+amplify+react-e-graphql.pdf';
import certificado13 from '../../../public/assets/UC-b44ebd01-1676-4ee2-b6b5-325b89c8e432-appsync+amplify.pdf';
import certificado14 from '../../../public/assets/UC-c6861bd9-5d3a-4ff7-8dea-f47061894b98-react+tests.pdf';
import certificado15 from '../../../public/assets/UC-d6186af3-4831-460f-83c7-b109dd45b348-ec2.pdf';
import certificado16 from '../../../public/assets/UC-d9734804-fd93-43b3-935a-c2052a7e50eb-tailwind.pdf';
import certificado17 from '../../../public/assets/UC-dc94610b-9c84-4e0a-9db6-478ec743fdfd-git-e-github.pdf';
import certificado18 from '../../../public/assets/UC-e2d7fe93-f24d-4fc1-9efb-b53159804d41-computação-na-nuvem.pdf';

const Certificados = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificados = [
    {
      title: 'Certificado de Excelência',
      pdf: certificado1,
      description: 'Este é um breve texto descrevendo o certificado de Excelência.'
    },
    {
      title: 'Certificado de Participação',
      pdf: certificado2,
      description: 'Este é um breve texto descrevendo o certificado de Participação.'
    },
    {
      title: 'Certificado de Conclusão',
      pdf: certificado3,
      description: 'Este é um breve texto descrevendo o certificado de Conclusão.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado4,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado5,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado6,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado7,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado8,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado9,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado10,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado11,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado12,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado13,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado14,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado15,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado16,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado17,
      description: 'Este é um breve texto descrevendo o certificado de Desempenho.'
    },
    {
      title: 'Certificado de Desempenho',
      pdf: certificado18,
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
          
          <div className="w-full h-64 lg:h-96 rounded-lg shadow-md mb-4 overflow-hidden">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={certificados[currentIndex].pdf}
                defaultScale={0.3} 
                
              />
            </Worker>
          </div>

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
