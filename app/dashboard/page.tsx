export const dynmaic = "force-dynamic"
import { Documents } from '@/components/Documents'
import React from 'react'


function dashboard() {
    return (
        <div className='h-full max-w-7xl mx-auto'>
            <h1 className='text-3xl font-extralight bg-gray-100 p-5 text-indigo-600 '>
                My Documents
            </h1>

            <Documents />
        </div>
    )
}

export default dashboard