import pokedex from '/assets/pokedex.jpg'
import calculadora from '/assets/calculadora.jpg'
import todoList from '/assets/todo-list.jpg'
import furniro from '/assets/furniro.jpg'

const Project = () => {
    return (
        <>
            <div className='bg-indigo-800 m-5 ssm:m-20 max-w-full'>
                <div className='grid justify-items-center m-5 sm:m-10'>
                    <h1 className='text-white text-2xl sm:text-3xl mt-5 sm:mt-10'>Projetos</h1>
                </div>

                    <div>
                        
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-5'>
                            <a href="https://orleansousa.github.io/pokedex/" target='_blank' rel='noreferrer'>
                                <div className='bg-white mx-auto rounded-xl shadow-md 
                                overflow-hidden max-w-full ssm:max-w-2xl hover:animate-pulse'>
                                        <div className='flex flex-col lg:flex-row lg:items-center'>

                                    
                                            <div className='p-5 ssm:p-8 ssm:items-center ssm:flex ssm:flex-col md:flex md:justify-center'>
                                                <div className='uppercase tracking-wide text-sm text-indigo-500 
                                                font-semibold '>
                                                    Pokedex API
                                                </div>
                                                <p>tecnologias: Javascript - CSS3 </p>
                                                <p className='mt-2 text-slate-500 ssm:text-center'>
                                                    Projeto feito para treinar habilidades com Javascript e CSS3, no consumo de API.
                                                    Api utilizada foi a PokeAPI.
                                                </p>
                                            </div>
                                            <div className='md:shrink-0 p-5 ssm:flex ssm:justify-center'>
                                                <img src={pokedex} alt="imagem ilustrativa" width={150} height={150} className='rounded-full w-[150px] h-[150px]' />
                                            </div>
                                        </div>
                                </div>
                            </a>

                            <a href="https://orleansousa.github.io/calculadora/" target='_blank' rel='noreferrer'>    
                                <div className='bg-white mx-auto rounded-xl shadow-md 
                                overflow-hidden max-w-full ssm:max-w-2xl hover:animate-pulse'>
                                    <div className='flex flex-col lg:flex-row lg:items-center'>

                                        <div className='p-5 ssm:p-8 ssm:items-center ssm:flex ssm:flex-col'>
                                            <div className='uppercase tracking-wide text-sm text-indigo-500 
                                            font-semibold '>
                                                Calculadora
                                            </div>
                                            <p>Tecnologias: Javascript - Css3 - HTML</p>
                                            <p className='mt-2 text-slate-500 ssm:text-center'>
                                                Objetivo do projeto foi treinar a logica de programação com Javascript, e utilizar o mesmo para reforçar 
                                                as chamadas de funções e manipulação de elementos HTML.
                                            </p>
                                        </div>
                                        <div className='md:shrink-0 p-5 ssm:flex ssm:justify-center'>
                                            <img src={calculadora} alt="imagem ilustrativa" width={150} height={150} className='rounded-full w-[150px] h-[150px]' />
                                        </div>
                                    </div>
                                </div>
                            </a>
                            
                        </div>
                        <hr />
                        
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-5'>

                            <a href="https://orleansousa.github.io/todo-list/" target='_blank' rel='noreferrer'>
                            <div className='bg-white mx-auto rounded-xl shadow-md 
                            overflow-hidden max-w-full ssm:max-w-2xl hover:animate-pulse'>
                                <div className='flex flex-col lg:flex-row lg:items-center'>

                                    <div className='p-5 ssm:p-8 ssm:items-center ssm:flex ssm:flex-col'>
                                        <div className='uppercase tracking-wide text-sm text-indigo-500 
                                        font-semibold '>
                                            Todo - List
                                        </div>
                                        <p>Tecnologia: Javascript - CSS3 - HTML</p>
                                        <p className='mt-2 text-slate-500 ssm:text-center'>
                                            Objetivo do projeta, é trabalhar os conceitos de CRUD, e manipulação de elementos HTML com Javascript.
                                            Utilizando de uma estilização simples para poder focar na logica de programação.
                                        </p>
                                    </div>
                                    <div className='md:shrink-0 p-5 ssm:flex ssm:justify-center'>
                                        <img src={todoList} alt="imagem ilustrativa" width={150} height={150} className='rounded-full w-[150px] h-[150px]' />
                                    </div>
                                </div>
                            </div>
                            </a>

                            <a href="https://3-compass-challenge-orleansousas-projects.vercel.app/" target='_blank' rel='noreferrer'>

                                <div className='bg-white mx-auto rounded-xl shadow-md 
                                overflow-hidden max-w-full ssm:max-w-2xl hover:animate-pulse'>
                                    <div className='flex flex-col lg:flex-row lg:items-center'>

                                        <div className='p-5 ssm:p-8 ssm:items-center ssm:flex ssm:flex-col'>
                                            <div className='uppercase tracking-wide text-sm text-indigo-500 
                                            font-semibold '>
                                                Furniro
                                            </div>
                                            <p>Tecnologias: React - Tailwind - TypeScript </p>
                                            <p className='mt-2 text-slate-500 ssm:text-center'>
                                                Projeto em desenvolvimento, com o objetivo de criar um e-commerce de moveis.
                                                onde utilizamos o consumo de API para validar o login do usuario, ainda esta em construção.
                                            </p>
                                        </div>
                                        <div className='md:shrink-0 p-5 ssm:flex ssm:justify-center'>
                                            <img src={furniro} alt="imagem ilustrativa" width={150} height={150} className='rounded-full w-[150px] h-[150px]' />
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
