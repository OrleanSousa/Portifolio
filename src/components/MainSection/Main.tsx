import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import PicturePerfil from '../../../public/assets/foto1.jpg'


const Main = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10
    lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit ssm:text-center">
        <p className="text-slate-300 text-4xl mb-5">Olá, me chamo</p>
        <h1 className="text-6xl ">Orlean Sousa</h1>
        <hr/>
        <p className="mt-10 text-xl text-slate-300 font-sans">Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Aliquid hic accusamus iste eos, 
          cum id consequuntur nemo consequatur ipsam non repudiandae 
          dolorem voluptatem nostrum vel quo, veniam quos nam provident!
        Aliquid perspiciatis voluptatem excepturi
         autem debitis in reiciendis, vero veniam! Quibusdam 
         totam veritatis minima odio commodi deleniti, eligendi iusto 
         soluta necessitatibus ea consequuntur dolore asperiores unde temporibus. 
         Tempore, placeat architecto.</p>
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
        <button className="bg-white text-indigo-600 px-10 py-2 my-3
        rounded-full hover:bg-indigo-800 hover:text-white">
          Saber Mais....
          </button>

          <div className="flex mt-5 space-x-4 cursor-pointer">
                <BsFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
                <BsLinkedin size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
                <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
                <FaGithub size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
          </div>
      </div>
    </section>
  )
}

export default Main