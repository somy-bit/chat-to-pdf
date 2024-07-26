'use client'

import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import {
    CheckCircleIcon,
    SaveIcon,
    HammerIcon,
    RocketIcon,
    CircleArrowDown
} from 'lucide-react'

function FileUploader() {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({ onDrop })
    return (
        <div className='flex flex-col max-w-7xl gap-4 items-center mx-auto'>
            <div {...getRootProps()}
                className={`p-10 border-2 rounded-lg h-96 flex items-center text-center justify-center
                     border-dashed mt-10 w-[90%] border-indigo-600 text-indigo-600 ${isFocused || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"}`}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <>
                            <RocketIcon className='w-20 h-20 animate-ping' />
                            <p>Drop the files here ...</p>
                        </>
                        :
                        <div className='flex flex-col justify-center items-center'> 
                            <CircleArrowDown className='h-20 w-20 animate-bounce' />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>

                }
            </div>
        </div>

    )
}

export default FileUploader