import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'react-bootstrap-icons';

export default function Breadcrumb(props) {
    const {CurrentPage} = props
  return (
    <div className='flex items-center gap-3 my-5 text-sm md:text-base'>
        <Link href="/" className='text-neutral-700 hover:underline hover:text-neutral-900 dark:hover:text-white dark:text-gray-200'>Accueil</Link>
        <ChevronRight size={15}/>
        <p className='text-red-600'>{CurrentPage}</p>
    </div>
  )
}
