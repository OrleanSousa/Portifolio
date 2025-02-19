import pokedex from '/assets/pokedex.jpg'
import calculadora from '/assets/calculadora.jpg'
import todoList from '/assets/todo-list.jpg'
import furniro from '/assets/furniro.jpg'
import styles from './Project.module.css'

const Project = () => {
    return (
        <>
             <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Projetos</h1>
      </div>

      <div>
        <div className={styles.projectGrid}>
          <a href="https://orleansousa.github.io/pokedex/" target='_blank' rel='noreferrer'>
            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <div className={styles.projectDetails}>
                  <div className={styles.projectTitle}>Pokedex API</div>
                  <p>tecnologias: Javascript - CSS3</p>
                  <p className={styles.projectTech}>
                    Projeto feito para treinar habilidades com Javascript e CSS3, no consumo de API. Api utilizada foi a PokeAPI.
                  </p>
                </div>
                <div className={styles.projectImageContainer}>
                  <img src={pokedex} alt="imagem ilustrativa" className={styles.projectImage} />
                </div>
              </div>
            </div>
          </a>

          <a href="https://orleansousa.github.io/calculadora/" target='_blank' rel='noreferrer'>
            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <div className={styles.projectDetails}>
                  <div className={styles.projectTitle}>Calculadora</div>
                  <p>Tecnologias: Javascript - Css3 - HTML</p>
                  <p className={styles.projectTech}>
                    Objetivo do projeto foi treinar a lógica de programação com Javascript, e utilizar o mesmo para reforçar 
                    as chamadas de funções e manipulação de elementos HTML.
                  </p>
                </div>
                <div className={styles.projectImageContainer}>
                  <img src={calculadora} alt="imagem ilustrativa" className={styles.projectImage} />
                </div>
              </div>
            </div>
          </a>
        </div>

        <hr className={styles.separator} />

        <div className={styles.projectGrid}>
          <a href="https://orleansousa.github.io/todo-list/" target='_blank' rel='noreferrer'>
            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <div className={styles.projectDetails}>
                  <div className={styles.projectTitle}>Todo - List</div>
                  <p>Tecnologia: Javascript - CSS3 - HTML</p>
                  <p className={styles.projectTech}>
                    Objetivo do projeto é trabalhar os conceitos de CRUD, e manipulação de elementos HTML com Javascript.
                    Utilizando de uma estilização simples para poder focar na lógica de programação.
                  </p>
                </div>
                <div className={styles.projectImageContainer}>
                  <img src={todoList} alt="imagem ilustrativa" className={styles.projectImage} />
                </div>
              </div>
            </div>
          </a>

          <a href="https://3-compass-challenge-orleansousas-projects.vercel.app/" target='_blank' rel='noreferrer'>
            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <div className={styles.projectDetails}>
                  <div className={styles.projectTitle}>Furniro</div>
                  <p>Tecnologias: React - Tailwind - TypeScript</p>
                  <p className={styles.projectTech}>
                    Projeto em desenvolvimento, com o objetivo de criar um e-commerce de móveis.
                    Onde utilizamos o consumo de API para validar o login do usuário, ainda está em construção.
                  </p>
                </div>
                <div className={styles.projectImageContainer}>
                  <img src={furniro} alt="imagem ilustrativa" className={styles.projectImage} />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
        </>
    )
}

export default Project
