import React from 'react'
import PersonaCard from './PersonaCard'
import { assets } from '@/assets/assets'
import Image from 'next/image'
const Persona = () => {
  return (
    <div className='max-h-[400px]  '>
        <div className='text-3xl text-center'>
        Persona
        </div>
        <div className='flex overflow-x-scroll flex-col gap-40 flex-wrap h-[300px] mt-20 ml-20 mr-20'>
     
        
        <Image src={assets.kids_mobile} alt="Kids" className='w-64 h-64 rounded-full shadow-lg mb-4 object-cover' />
        <Image src={assets.ethnic_mobile} alt="Kids" className='w-64 h-64 rounded-full shadow-lg mb-4  object-cover' />
        
        <Image src={assets.ethnic_mobile} alt="Kids" className='w-64 h-64 rounded-full shadow-lg mb-4 object-cover' />
        <Image src={assets.ethnic_mobile} alt="Kids" className='w-64 h-64 rounded-full shadow-lg mb-4 object-cover' />
        <Image src={assets.ethnic_mobile} alt="Kids" className='w-64 h-64 rounded-full shadow-lg mb-4 object-cover' />
        <Image src={assets.ethnic_mobile} alt="Kids" className='w-64 h-64 rounded-full shadow-lg mb-4 object-cover' />
        <Image src={assets.kids} alt="Kids" className='w-64 h-64 rounded-full shadow-lg mb-4 object-cover' />
        
        
       
        
    </div>
    </div>
  )
}

export default Persona
