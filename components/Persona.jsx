import React from 'react'

const Persona = () => {
  return (
    <div>
        <div className='text-3xl text-center'>
        Persona
        </div>
        <div className='flex gap-40 items-center justify-center flex-wrap '>
        
        <div className="items-center justify-center pt-14">
            
            <img
            src="/persona-image.jpg"
            alt="Persona"
            className="w-64 h-64 rounded-full shadow-lg mb-4"
            />
            
        </div>

        <div className="flex flex-col items-center justify-center pt-14">
            
            <img
            src="/persona-image.jpg"
            alt="Persona"
            className="w-64 h-64 rounded-full shadow-lg mb-4"
            />
            
        </div>

        <div className="flex flex-col items-center justify-center pt-14">
           
            <img
            src="/persona-image.jpg"
            alt="Persona"
            className="w-64 h-64 rounded-full shadow-lg mb-4"
            />
            
        </div>
        
    </div>
    </div>
  )
}

export default Persona
