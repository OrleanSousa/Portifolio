import {BsLinkedin, BsInstagram } from "react-icons/bs"
import styles from './Main.module.css';
import { FaGithub } from "react-icons/fa"
import PicturePerfil from '../../../public/assets/foto1.jpg'
import { Link } from "react-router-dom"
import { SiCss3, SiHtml5, SiReact, SiTailwindcss } from "react-icons/si"


const Main = () => {
  return (
    <section className={styles.container}>
      <div className={styles.introduction}>
        <p className={styles.introductionText}>Olá, me chamo</p>
        <h1 className={styles.name}>Orlean Sousa</h1>
        <hr />
        <p className={styles.description}>
          Tenho 29 anos, sou graduando em Análise e Desenvolvimento de Sistemas na UNIASSELVI, onde tenho a oportunidade de aprimorar meus conhecimentos em programação e desenvolvimento de software.  
          Iniciei minha jornada de programador aos 26 anos, começando meus estudos no Curso Técnico em Informática no IFBA - Campos Jacobina, onde tive meu primeiro contato com a programação, o que despertou meu interesse por tecnologias e me levou a optar pela carreira de desenvolvedor Front-End. 
          Meus hobbies são: Jogar video game, assistir séries, filmes e ler livros.
        </p>
      </div> 
      <div className={styles.profileImageContainer}>
        <img 
          src={PicturePerfil} 
          alt="Foto de perfil"  
          width={150} 
          height={150}
          className={styles.profileImage}
        />
      </div>
      <div className={styles.aboutMe}>
        <p className={styles.aboutMeTitle}>Sobre mim:</p>
        <p className={styles.aboutMeText}>
          Sou um desenvolvedor Front-End focado em construção de layouts e soluções visuais 
          para pequenas empresas usando as tecnologias atuais tais como: React, 
          Tailwind, JavaScript e CSS5.
        </p>
        <div className={styles.technologies}>
          <h2 className={styles.technologiesTitle}>Tecnologias:</h2>
          <div className={styles.technologiesIcons}>
            <SiReact className="text-blue-500" />
            <SiTailwindcss className="text-teal-400" />
            <SiCss3 className="text-blue-600" />
            <SiHtml5 className="text-orange-500" />
          </div>
        </div>
        <Link to='/contact' className={styles.learnMoreButton}>
          Saber Mais....
        </Link>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/orlean -silva-224489190/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={40} className={styles.socialIcon} />
          </a>
          <a href="https://www.instagram.com/orl_ean/" target="_blank" rel="noopener noreferrer">
            <BsInstagram size={40} className={styles.socialIcon} />
          </a>
          <a href="https://github.com/OrleanSousa" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Main