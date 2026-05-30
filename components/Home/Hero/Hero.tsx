import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
        <div className='relative z-10 flex flex-col items-center'>
            <Image src="/images/me.png" alt="hero-image" width={150} height={150} className="rounded-full border-8 border-[#0c0c48aa]"/>
        </div>
    </div>
  )
}

export default Hero