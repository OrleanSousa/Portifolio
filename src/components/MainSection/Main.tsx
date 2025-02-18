import {BsLinkedin, BsInstagram } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import PicturePerfil from '../../../public/assets/foto1.jpg'
import { Link } from "react-router-dom"
import { SiCss3, SiHtml5, SiReact, SiTailwindcss } from "react-icons/si"


const Main = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10
    lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit ssm:text-center">
        <p className="text-slate-300 text-4xl mb-5">Olá, me chamo</p>
        <h1 className="text-6xl ">Orlean Sousa</h1>
        <hr/>
        <p className="mt-10 text-xl text-slate-300 font-sans">Tenho 29 anos, iniciei minha jornada de programador aos 26, começando meus estudos 
          no Curso tecnico em informatica no IFBA - Campos Jacobina, onde tive meu primeiro contato com a programação. La vi que amava tecnologias e decidir 
          seguir a carreira de desenvolvedor Front-End. Atualmente estou cursando Analise e Desenvolvimento de Sistemas na UNIASSELVI, onde tive a oportunidade
          de aprimorar meus conhecimentos em programação e desenvolvimento de software. meus hobbies são: Jogar video game, assistir series, filmes e ler livros.
        </p>
      </div> 
      <div className="lg:w-1/3 items-center ssm:w-fit">
        <img src={PicturePerfil} alt="Foto de perfil"  width={150} height={150}
        className="rounded-full w-full border-8 border-white"/>
      </div>
      <div className="lg:w-1/3 ssm:w-fit ssm:justify-center ssm:text-center ssm:flex ssm:flex-col ssm:items-center">
          <p className="text-4xl mb-4">Sobre mim: </p>
          <p className="text-slate-300 font-sans">Sou um desenvolvedor Front-End focado em construção de layouts e soluções visuais 
        para pequenas empresas usando as tecnologias atuais tais como: React, 
        Tailwind, JavaScript e CSS5</p>
        <div className="mt-3 gap-4">
          <h2 className="text-2xl">Tecnologias:</h2>
          <div className="flex space-x-4 text-4xl mt-4">
          <SiReact className="text-blue-500" />
          <SiTailwindcss className="text-teal-400" />
          <SiCss3 className="text-blue-600" />
          <SiHtml5 className="text-orange-500" />
       </div>
        </div>
        <Link to='/contact' className="bg-white text-indigo-600 px-10 py-2 my-3
        rounded-full hover:bg-indigo-800 hover:text-white">
          Saber Mais....
          </Link>

          <div className="flex mt-5 space-x-4 cursor-pointer">
                <a href="https://www.linkedin.com/in/orlean-silva-224489190/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={40} className="border-4 hover:border-indigo-800 rounded-full"/></a>
                <a href="https://www.instagram.com/orl_ean/" target="_blank" rel="noopener noreferrer"><BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full"/></a>
                <a href="https://github.com/OrleanSousa" target="_blank" rel="noopener noreferrer"><FaGithub size={40} className="border-4 hover:border-indigo-800 rounded-full"/></a>
          </div>
      </div>
    </section>
  )
}

export default Main