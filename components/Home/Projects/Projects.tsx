import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Here's some of my <br/> <span className='text-cyan-300'>projects</span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            {/* First project */}
            <div
                data-aos='fade-up'
                data-aos-anchor-placement='top-center'
                data-aos-delay="0"
            >
                <Image
                    src='/images/3d_renderer.png'
                    alt='img'
                    width={800}
                    height={650}
                    className='rounded-lg'
                />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>3D Software Renderer</h1>
                <p className='pt-2 font-medium text-white/80'>
                    Real-time software renderer built from scratch in C - perspective projection, triangle rasterization, z-buffering, lighting, and texture mapping. All 3D math implemented without OpenGL or DirectX.
                </p>
                <div className='pt-3 flex gap-4'>
                    <a
                        href='https://github.com/Camden-Kirkpatrick/3D-Software-Renderer'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-cyan-300 hover:text-cyan-200 font-medium'
                    >
                        GitHub →
                    </a>
                </div>
            </div>
            {/* Second project */}
            <div
                data-aos='fade-up'
                data-aos-anchor-placement='top-center'
                data-aos-delay="100"
            >
                <Image
                    src='/images/terraria.png'
                    alt='img'
                    width={800}
                    height={650}
                    className='rounded-lg'
                />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Terraria Clone <span className='text-sm text-white/60 font-normal'>(in progress)</span></h1>
                <p className='pt-2 font-medium text-white/80'>
                    A 2D sandbox game I'm currently building in C++ with Raylib. Watch the gameplay demo to see what's working so far.
                </p>
                <div className='pt-3 flex gap-4'>
                    <a
                        href='https://github.com/Camden-Kirkpatrick/terraria_clone'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-cyan-300 hover:text-cyan-200 font-medium'
                    >
                        GitHub →
                    </a>
                    <a
                        href='https://www.youtube.com/watch?v=cEhbzT8-38I'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-cyan-300 hover:text-cyan-200 font-medium'
                    >
                        Watch Demo →
                    </a>
                </div>
            </div>
            {/* Third project */}
            <div
                data-aos='fade-up'
                data-aos-anchor-placement='top-center'
                data-aos-delay="100"
            >
                <Image
                    src='/images/helpdesk.png'
                    alt='img'
                    width={800}
                    height={650}
                    className='rounded-lg'
                />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Helpdesk API</h1>
                <p className='pt-2 font-medium text-white/80'>
                    Full-stack helpdesk app with JWT auth, bcrypt password hashing, and per-user data isolation enforced at the database level. 8 RESTful endpoints built with FastAPI and SQLModel, tested with pytest.
                </p>
                <div className='pt-3 flex gap-4'>
                    <a
                        href='https://helpdesk-api-b2qv.onrender.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-cyan-300 hover:text-cyan-200 font-medium'
                    >
                        Live →
                    </a>
                    <a
                        href='https://github.com/Camden-Kirkpatrick/helpdesk-api'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-cyan-300 hover:text-cyan-200 font-medium'
                    >
                        GitHub →
                    </a>
                </div>
            </div>
            {/* Fourth project */}
            <div
                data-aos='fade-up'
                data-aos-anchor-placement='top-center'
                data-aos-delay="100"
            >
                <Image
                    src='/images/bank_project.png'
                    alt='img'
                    width={800}
                    height={650}
                    className='rounded-lg'
                />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Bank Management System</h1>
                <p className='pt-2 font-medium text-white/80'>
                    Console-based banking system in C++ using OOP - supports banks, customers, and checking/savings accounts with deposits, withdrawals, transfers, and interest. Persistent file I/O with a Makefile-based build.
                </p>
                <div className='pt-3 flex gap-4'>
                    <a
                        href='https://github.com/Camden-Kirkpatrick/Bank_Management_System'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-cyan-300 hover:text-cyan-200 font-medium'
                    >
                        GitHub →
                    </a>
                </div>
            </div>
            {/* Fifth project */}
            <div
                data-aos='fade-up'
                data-aos-anchor-placement='top-center'
                data-aos-delay="100"
            >
                <Image
                    src='/images/portfolio.png'
                    alt='img'
                    width={800}
                    height={650}
                    className='rounded-lg'
                />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Portfolio Website</h1>
                <p className='pt-2 font-medium text-white/80'>
                    This site itself - my first front-end project. Built with Next.js, TypeScript, and Tailwind CSS, with AOS scroll animations and a working contact form backed by a serverless email API.
                </p>
                <div className='pt-3 flex gap-4'>
                    <a
                        href='https://github.com/Camden-Kirkpatrick/portfolio_website'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-cyan-300 hover:text-cyan-200 font-medium'
                    >
                        GitHub →
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;