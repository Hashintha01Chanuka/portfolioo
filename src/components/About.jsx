import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-20  text-white'>
      <div className='max-w-4xl mb-10 mx-auto text-center'>
        <h2 className='text-6xl mb-8 font-bold mb-6'>
          About <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left'>
          {/* Left: About Text */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold'>Passionate Web Developer & Tech Creator</h3>
            <p className='text-gray-300'>
  I am an undergraduate pursuing a Computer Science degree, passionate about building scalable and impactful software solutions.
</p>
<p className='text-gray-300'>
  I have hands-on experience with full-stack technologies including MERN, Spring Boot with React, and Laravel, which allow me to work across both frontend and backend effectively.
</p>
<p className='text-gray-300'>
  As a self-learner, I am eager to grow with technology, collaborate with others, and contribute to creating meaningful software that makes a positive impact in the world.
</p>
            
          </div>
          {/* Right: Cards */}
          <div className='mt-8 space-y-6'>
            <div className='bg-gray-700 rounded-lg p-6 shadow-lg '>
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="text-purple-400"></span> Web Development
              </h4>
              <p className="text-gray-300 text-sm">
                Creating responsive websites and web applications with modern frameworks.
              </p>
            </div>
            <div className='bg-gray-700 rounded-lg p-6 shadow-lg '>
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="text-purple-400"></span> UI/UX Design
              </h4>
              <p className="text-gray-300 text-sm">
                Designing intuitive user interfaces and seamless user experiences.
              </p>
            </div>
            <div className='bg-gray-700 rounded-lg p-6 shadow-lg'>
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="text-purple-400"></span> Project Management
              </h4>
              <p className="text-gray-300 text-sm">
                Leading projects from conception to completion with agile methodologies.
              </p>
            </div>
            </div>
        </div>
      </div>
    </section>
    
  )
}

export default About