import React, { ChangeEvent, useRef } from 'react';
import './Header.css';

type HeaderProps = {
    onUploadComplete: () => void
} 

const Header: React.FC<HeaderProps> = ({
    onUploadComplete
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if(fileInputRef && fileInputRef.current){
            fileInputRef.current.click();
        }
    }

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        
        if(!files || files.length === 0) return

        const formData = new FormData()

        Array.from(files).forEach( file => formData.append('files', file) )

        try {
            const response = await fetch("http://localhost:5000/upload", {
                method: 'POST',
                body: formData
            })

            if(response.ok) {
                onUploadComplete()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return <div className='navigation-bar'>
        <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange}
            hidden 
            multiple/>
        <button onClick={handleClick}>Upload</button>
        <button>Delete</button>
        <button>Search</button>
    </div>
}

export default Header