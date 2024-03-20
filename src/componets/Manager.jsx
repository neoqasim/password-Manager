import React from 'react'
import create from "../assets/create.gif"

const Manager = () => {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_left,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
            </div>
            <div className="container mx-auto bg-slate-200 max-w-4xl my-12">
                <h1 className="font-bold text-2xl text-center pt-4"> &lt; Sheild<span className='text-purple-800' >PASS /  &gt;</span></h1>
                <h1 className="font-bold capitalize text-center text-xl text-purple-800">your own password manager </h1>
                <div className="text-black flex flex-col gap-4 py-4 px-12">
                    <input type="text" name="" id="" className='rounded-full outline-none px-4 py-2' />
                    <div className="flex justify-around gap-4 ">
                        <input type="text" name="" id="" className='rounded-full outline-none px-4 py-1 w-3/4' />
                        <div className=" bg-white rounded-full outline-none px-4 py-1 w-3/6 flex justify-between">
                            <input type="text" name="" id="" className='outline-none' />

                        </div>
                    </div>
                    <button className=' flex gap-4 w-max mx-auto bg-white text-purple-800 border hover:shadow-md duration-100 hover:shadow-purple-800 border-purple-700 font-semibold px-4 py-2 rounded-full '>Add Password <img height={20} width={20} src={create} alt='add' /> </button>
                </div>
            </div>
        </>
    )
}

export default Manager