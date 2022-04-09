import { useRouter } from 'next/router';
import React from 'react'
import Link from "next/link"
import {ChevronRightIcon, ChevronLeftIcon} from "@heroicons/react/solid"

function Paggination() {
    const router = useRouter(null);
    const startIndex = Number(router.query.start) || 0;
  return (
    <div className='flex space-x-10 pb-10'>
        {startIndex >= 10 && (
            <Link  href={`/search?term=${router.query.term}&start=${startIndex-10}`}>
            <div className=''>
                <ChevronLeftIcon className='h-6 w-6 ml-4 text-blue-500 cursor-pointer'/>
                <p className="text-blue-500  cursor-pointer underline-none hover:border-b border-blue-500 w-fit">Previous</p>
            </div>
            </Link>
        )}
        <Link  href={`/search?term=${router.query.term}&start=${startIndex+10}`}>
            <div className=''>
            <ChevronRightIcon className='h-6 w-6 text-blue-500 cursor-pointer ml-1'/>
            <p className="text-blue-500 cursor-pointer underline-none hover:border-b border-blue-500 w-fit">Next</p>
            </div>
        </Link>
    </div>
  )
}

export default Paggination