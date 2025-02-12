import Project1Img from '../../assets/image-2.jfif'

const Project = () => {
    return (
        <>
            <div className='bg-indigo-800 m-5 ssm:m-20 max-w-full'>
                <div className='grid justify-items-center m-5 sm:m-10'>
                    <h1 className='text-white text-2xl sm:text-3xl mt-5 sm:mt-10'>Projetos</h1>
                </div>

                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-5'>
                            <div className='bg-white mx-auto rounded-xl shadow-md 
                            overflow-hidden max-w-full ssm:max-w-2xl hover:animate-pulse'>
                                <div className='flex flex-col lg:flex-row lg:items-center'>

                                    <div className='p-5 ssm:p-8 ssm:items-center ssm:flex ssm:flex-col md:flex md:justify-center'>
                                        <div className='uppercase tracking-wide text-sm text-indigo-500 
                                        font-semibold '>
                                            Projeto 1
                                        </div>
                                        <a href='#'>subtitulo</a>
                                        <p className='mt-2 text-slate-500 ssm:text-center'>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                            Vero libero modi ad sequi?
                                        </p>
                                    </div>
                                    <div className='md:shrink-0 p-5 ssm:flex ssm:justify-center'>
                                        <img src={Project1Img} alt="imagem ilustrativa" width={150} height={150} className='rounded-full' />
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white mx-auto rounded-xl shadow-md 
                            overflow-hidden max-w-full ssm:max-w-2xl hover:animate-pulse'>
                                <div className='flex flex-col lg:flex-row lg:items-center'>

                                    <div className='p-5 ssm:p-8 ssm:items-center ssm:flex ssm:flex-col'>
                                        <div className='uppercase tracking-wide text-sm text-indigo-500 
                                        font-semibold '>
                                            Projeto 1
                                        </div>
                                        <a href='#'>subtitulo</a>
                                        <p className='mt-2 text-slate-500 ssm:text-center'>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                            Vero libero modi ad sequi?
                                        </p>
                                    </div>
                                    <div className='md:shrink-0 p-5 ssm:flex ssm:justify-center'>
                                        <img src={Project1Img} alt="imagem ilustrativa" width={150} height={150} className='rounded-full' />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <hr />
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-5'>
                            <div className='bg-white mx-auto rounded-xl shadow-md 
                            overflow-hidden max-w-full ssm:max-w-2xl hover:animate-pulse'>
                                <div className='flex flex-col lg:flex-row lg:items-center'>

                                    <div className='p-5 ssm:p-8 ssm:items-center ssm:flex ssm:flex-col'>
                                        <div className='uppercase tracking-wide text-sm text-indigo-500 
                                        font-semibold '>
                                            Projeto 1
                                        </div>
                                        <a href='#'>subtitulo</a>
                                        <p className='mt-2 text-slate-500 ssm:text-center'>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                            Vero libero modi ad sequi?
                                        </p>
                                    </div>
                                    <div className='md:shrink-0 p-5 ssm:flex ssm:justify-center'>
                                        <img src={Project1Img} alt="imagem ilustrativa" width={150} height={150} className='rounded-full' />
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white mx-auto rounded-xl shadow-md 
                            overflow-hidden max-w-full ssm:max-w-2xl hover:animate-pulse'>
                                <div className='flex flex-col lg:flex-row lg:items-center'>

                                    <div className='p-5 ssm:p-8 ssm:items-center ssm:flex ssm:flex-col'>
                                        <div className='uppercase tracking-wide text-sm text-indigo-500 
                                        font-semibold '>
                                            Projeto 1
                                        </div>
                                        <a href='#'>subtitulo</a>
                                        <p className='mt-2 text-slate-500 ssm:text-center'>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                            Vero libero modi ad sequi?
                                        </p>
                                    </div>
                                    <div className='md:shrink-0 p-5 ssm:flex ssm:justify-center'>
                                        <img src={Project1Img} alt="imagem ilustrativa" width={150} height={150} className='rounded-full' />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Project
