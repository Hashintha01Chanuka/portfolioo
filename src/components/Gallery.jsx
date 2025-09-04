import React from 'react'
import l from '../assets/l.png'
import p from '../assets/p.png'
import m from '../assets/m.png'

const Gallery = () => {
  return (
    <div id='projects' className='mt-5 text-center border-neutral-800 pb-24'>
      <h2 className="text-6xl font-bold mb-8">
        Project{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
          Gallery
        </span>
      </h2>

      {/* Use grid for 2 images per row */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
        <img 
          src={l} 
          alt="" 
          title="Mind Up - E-learning platform"
          className="w-full cursor-pointer h-auto filter grayscale hover:grayscale-0 transition duration-500" 
        />
        <img 
          src={m} 
          alt="" 
          title="GoodLook - E-commerce clothing website"
          className="w-full cursor-pointer h-auto filter grayscale hover:grayscale-0 transition duration-500" 
        />
        <img 
          src={p} 
          alt="" 
          title="Paragon Motors - Online spare parts website"
          className="w-full cursor-pointer h-auto filter grayscale hover:grayscale-0 transition duration-500" 
        />
      </div>

      <div className='mt-9'>
        <a 
          href="https://www.linkedin.com/in/hashintha-chanuka-b405ba336/" 
          className='mt-4 bg-gradient-to-r from-orange-500 to-red-700 text-white py-2 px-4 rounded'
        >
          Show More on LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Gallery