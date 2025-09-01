import React from 'react'
import { 
  RiReactjsLine 
} from 'react-icons/ri'
import { 
  FaNodeJs, FaLaravel, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaPhp, FaJava, FaGitAlt, FaBootstrap 
} from 'react-icons/fa'
import { 
  SiMongodb, SiSpringboot, SiExpress, SiNextdotjs, SiPostgresql, SiKotlin, SiTailwindcss, SiPostman, SiFirebase 
} from 'react-icons/si'

const Technology = () => {
  return (
    <div id='technology' className='border-b text-center border-neutral-800 pb-24'>
      <h2 className="text-6xl font-bold mb-8">
        Technology{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
          Stack
        </span>
      </h2>

      {/* First Row */}
      <div className='flex flex-wrap items-center justify-center gap-6 mb-10'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-7xl text-green-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiSpringboot className='text-7xl text-green-600' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaLaravel className='text-7xl text-red-600' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-7xl text-gray-300' />
        </div>
      </div>

      {/* Second Row */}
      <div className='flex flex-wrap items-center justify-center gap-6 mb-10'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaHtml5 className='text-7xl text-orange-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaCss3Alt className='text-7xl text-blue-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJs className='text-7xl text-yellow-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiNextdotjs className='text-7xl text-white' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaDatabase className='text-7xl text-gray-400' /> {/* SQL Generic */}
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPostgresql className='text-7xl text-sky-700' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiKotlin className='text-7xl text-purple-600' />
        </div>
      </div>

      {/* Third Row */}
      <div className='flex flex-wrap items-center justify-center gap-6'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiFirebase className='text-7xl text-yellow-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPhp className='text-7xl text-indigo-600' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJava className='text-7xl text-red-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaBootstrap className='text-7xl text-purple-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTailwindcss className='text-7xl text-sky-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPostman className='text-7xl text-orange-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaGitAlt className='text-7xl text-orange-600' />
        </div>
      </div>
    </div>
  )
}

export default Technology
