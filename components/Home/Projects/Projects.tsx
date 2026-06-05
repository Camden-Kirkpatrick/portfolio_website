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
                <h1 className='pt-2 font-medium text-white/80'>Lorem ipsum dolor sit amet.</h1>
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
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Terraria Clone</h1>
                <h1 className='pt-2 font-medium text-white/80'>Lorem ipsum dolor sit amet.</h1>
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
                <h1 className='pt-2 font-medium text-white/80'>Lorem ipsum dolor sit amet.</h1>
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
                <h1 className='pt-2 font-medium text-white/80'>Lorem ipsum dolor sit amet.</h1>
            </div>
        </div>
    </div>
  )
}

export default Projects;