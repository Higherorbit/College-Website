import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
return (
    <div className='bg-slate-200'>
        <div className='container mx-auto flex justify-between items-center max-w-6xl mx-auto p-4'>
            <Link to='/' className='text-2xl font-bold'>College Website</Link>
            <div className='flex items-center font-bold gap-4'>
                <Link to='/about'>About</Link>
                <Link to='/signin'>Sign In</Link>
                <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
    </div>
)
}
