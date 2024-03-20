import React from 'react'

const NAvbar = () => {
    return (
        <>
            <nav className='text-purple-800 -black flex justify-around py-4 px-12 shadow-md mx-auto bg-white bg-opacity-10 rounded-full max-w-4xl mb-4 ' >
                <div className="logo font-bold text-3xl tracking-tighter">ShieldPass</div>
                <ul>
                    <li className='flex gap-8 uppercase font-semibold text-xl' >
                        <a>Home</a>
                        <a>PAsswords</a>
                        <a>About</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NAvbar