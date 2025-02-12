import { useState, ChangeEvent, FormEvent } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = `Olá, meu nome é ${formData.firstName} ${formData.lastName}.
    Meu telefone é: ${formData.phone}
    Meu email é: ${formData.email}
    Minha mensagem: ${formData.message}`;

    // Número do WhatsApp (inclua o código do país, por exemplo, 55 para Brasil)
    const whatsappNumber = '5574999831228'; // Substitua pelo seu número
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contato</h2>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-semibold">Nome:</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-semibold">Sobrenome:</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-semibold">Telefone:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Novo Campo: Mensagem */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-semibold">Mensagem:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full flex justify-center items-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-800 transition"
        >
          Enviar <AiOutlineSend className="ml-2" size={20} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
