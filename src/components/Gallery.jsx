import React from 'react';
import l from '../assets/l.png';
import p from '../assets/p.png';
import m from '../assets/m.png';

const Gallery = () => {
  const images = [
    { src: l, title: "Mind Up - E-learning platform" },
    { src: p, title: "Paragon Motors - Online spare parts website" },
    { src: m, title: "GoodLook - E-commerce clothing website" },
    
  ];

  return (
    <div id='projects' className='mt-5 text-center pb-24'>
      <h2 className="text-6xl font-bold mb-8">
        Project{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
          Gallery
        </span>
      </h2>

      {/* Masonry-style layout */}
      <div className="columns-2 gap-4 max-w-5xl mx-auto sm:columns-1 md:columns-2 lg:columns-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt=""
            title={img.title}
            className="w-full mb-4 object-contain cursor-pointer filter grayscale hover:grayscale-0 transition duration-500"
          />
        ))}
      </div>

      <div className='mt-9'>
        <a
          href="https://www.linkedin.com/in/hashintha-chanuka-b405ba336/"
          className='mt-4 bg-gradient-to-r from-orange-500 to-red-700 text-white py-2 px-4 rounded inline-block'
        >
          Show More on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Gallery;
