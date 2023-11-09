import React from 'react';

export default function Experience(props) {
  const {enterprise, post, duration, missions} = props;
  return (
    <div className='border-b border-dashed border-gray-400 dark:border-neutral-600 py-5'>
      <h1 className='text-xl md:text-2xl'>{enterprise}</h1>
      <div className="flex justify-between mt-3">
        <h2 className='text-base md:text-lg text-red-600'>{post}</h2>
        <p className='flex items-center gap-2'>{duration}</p>
      </div>
      <p className='mt-3 text-justify'>{missions}</p>
    </div>
  )
}
