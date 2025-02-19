import { useState, ChangeEvent, FormEvent } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import styles from './Contact.module.css'; // Adjust the path as necessary

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
    <div className={styles.container}>
      <form 
        onSubmit={handleSubmit} 
        className={styles.form}
      >
        <h2 className={styles.title}>Contato</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.label}>Nome:</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className={styles.label}>Sobrenome:</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phone" className={styles.label}>Telefone:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>

        {/* Novo Campo: Mensagem */}
        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>Mensagem:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
            required
            className={styles.textareaField}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className={styles.submitButton}
        >
          Enviar <AiOutlineSend className="ml-2" size={20} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
