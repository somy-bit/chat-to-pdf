import React from 'react'
import { PlaceholderDocument } from './PlaceholderDocument'

export const Documents = () => {
  return (
    <div
    className='flex flex-wrap p-5 bg-gray-100 justify-center 
    lg:justify-start rounded-smgap-5 max-w-7xl  mx-auto'
    >
        {/* map through docs */}

        <PlaceholderDocument />
    
    </div>
  )
}
