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
                <div className='mt-10'>
                    <ResumeCard
                        Icon={FaCodepen}
                        role="Deli Clerk" 
                        description='Fareway'
                    />
                    <ResumeCard
                        Icon={FaReact}
                        role="Cashier / Warehouse"
                        description='Hobby Lobby'
                    />
                </div>
            </div>
            {/* Education */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My <span className='text-cyan-200'>Education</span>
                </h1>
                <div className='mt-10'>
                    <ResumeCard 
                        Icon={BiBadge}
                        role="Associate of Applied Science, in Computer Information Systems"
                        date="Aug 2023 - May 2025"
                        description='Des Moines Area Community College'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume;