import React from 'react'
import ResumeCard from './ResumeCard';
import { FaCodepen, FaReact } from 'react-icons/fa';
import { BiBadge } from 'react-icons/bi';

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* Work */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My Work <span className='text-cyan-200'>Experience</span>
                </h1>
                <div
                    className='mt-10'
                    data-aos='zoom-in'
                    data-aos-anchor-placement='top-center'
                >
                    <ResumeCard
                        Icon={FaCodepen}
                        role="Deli Clerk" 
                        description='Fareway · Deli prep, customer service, food safety.'
                        date='2023 - Present'
                    />
                </div>
            </div>
            {/* Education */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My <span className='text-cyan-200'>Education</span>
                </h1>
                <div
                    className='mt-10'
                    data-aos='zoom-out'
                    data-aos-anchor-placement='top-center'
                    data-aos-delay="300"
                >
                    <ResumeCard 
                        Icon={BiBadge}
                        role="Associate of Applied Science, in Computer Information Systems"
                        date="Aug 2023 - May 2025"
                        description="Des Moines Area Community College · GPA 3.97 / 4.00 · Dean's List & President's List"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume;