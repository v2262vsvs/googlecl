import React from 'react'
import Image from "next/image"
import { useRouter } from "next/router"
import { ViewGridIcon, MicrophoneIcon, SearchIcon} from "@heroicons/react/solid"
import { useRef } from "react"
import { XIcon } from "@heroicons/react/solid"



function Header() {
    const router = useRouter(null)
    const searchInputRef = useRef(null)

    const handleClick = event => {
        router.push("/")
    }

    const search = event => {
        event.preventDefault();
        const term = searchInputRef?.current.value
        console.log(term)
        if (!term) return;

        router.push(`/search?term=${term} `);

    }
    return (
        <div>
            <header className='sticky top-0  w-full border-b-2 b border-gray-100 '>
                <div className='bg-white space-x-2  flex items-center justify-between p-6 w-full  text-sm text-gray-700 '>
                    <div className=' hidden sm:inline-block '>
                    <Image
                        src={"https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}
                        height={40}
                        width={100}
                        alt=""
                        className="cursor-pointer flex "
                        onClick={handleClick}
                    />
                    </div>
                    <div className='flex  space-x-5  w-3/4 pl-0 lg:pl-36'>
                    
                    
                    <form className=' flex flex-grow  border border-gray-200 rounded-full    py-3  shadow-lg max-w-3xl items-center  mr-0 sm:mr-10 '>
                        <input
                            placeholder={router.query.term}
                            ref={searchInputRef}
                            className=" px-6 rounded-full flex-grow mx-auto w-full focus:outline-none "
                            type="text"
                        />
                        <button hidden type="submit" className=' ' onClick={search} />
                        <XIcon className='h-6 text-gray-500 cursor-pointer hover:scale-125 transition duration-100 sm:mr-3   '
                            onClick={() => (searchInputRef.current.value = "")}
                        />
                        <MicrophoneIcon className="hidden sm:inline-flex h-6 mr-3 text-blue-700  cursor-pointer  border-l-2 pl-4 border-gray-500" />
                        <SearchIcon className='hidden sm:inline-flex h-6 mr-3 text-gray-500  cursor-pointer' />

                    </form>
                    </div>
                   
                    <div className=" flex flex-right space-x-4 items-center ">
                        <p className="hidden md:inline-flex hover:underline cursor-pointer ">Gmail</p>
                        <p className="hidden md:inline-flex hover:underline cursor-pointer ">Images</p>
                        <ViewGridIcon className="hidden sm:inline-flex w-10 h-10 text-gray-700 p-2 cursor-pointer hover:scale-110 hover:bg-gray-300 rounded-full" />
                        <Image
                        src={'https://avatars.githubusercontent.com/u/61426238?s=40&v=4'}
                        height={40}
                        width={40}
                        loading="lazy" 
                        alt="profilepic" 
                        className="rounded-full  cursor-pointer duration-150 transform hover:scale-110"
                    />
                    </div>
                </div>


                <div className='flex space-x-5 items-center px-3 sm:pl-[%5] md:pl=[%15] lg:pl-72   '>
                    <div className='flex cursor-pointer text-gray-600 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-1 '>
                        <SearchIcon className=' h-4 text-gray-500 ' />
                        <button className='hidden sm:inline-flex'>Все</button>
                    </div>
                    <div className='flex cursor-pointer text-gray-600  border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-1 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <button className='hidden sm:inline-flex'>Картинки</button>
                    </div>
                    <div className='flex cursor-pointer text-gray-600 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-1 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <button className='hidden sm:inline-flex'>Новости</button>
                    </div>
                    <div className='flex cursor-pointer text-gray-600 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <button className='hidden sm:inline-flex'>Видео</button>
                    </div>
                    <div className='flex cursor-pointer text-gray-600 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <button className='hidden sm:inline-flex'>Карты</button>
                    </div>
                    <div className='flex cursor-pointer text-gray-600 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <button className='hidden sm:inline-flex'>Еще</button>
                    </div>

                    <div className='flex px-20 pb-1    '>
                        
                        <button className='hidden md:inline-flex cursor-pointer text-gray-600 rounded-sm p-2 hover:bg-gray-100 hover:border-gray-200 hover:border '>Инструменты</button>
                    </div>
                </div>


            </header>

        </div>
    )
}

export default Header