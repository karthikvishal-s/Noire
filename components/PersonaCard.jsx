import React from 'react'

const persona_item = ({src,alt}) => {
  return (
    <div className="pt-14">
            <img
            src={src}
        
            className="w-64 h-64 rounded-full shadow-lg mb-4"
            />
            
        </div>
  )
}

export default persona_item
