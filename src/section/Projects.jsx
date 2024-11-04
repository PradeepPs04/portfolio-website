import React, { Suspense, useState } from 'react'
import { myProjects } from '../data'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import ProjectVideoComputer from '../components/ProjectVideoComputer';

const Projects = () => {

    const projectCnt = myProjects.length;
    const [projectIndex, setProjectIndex] = useState(0);
    const curProject = myProjects[projectIndex];

    const handleNavigation = (direction) => {
        setProjectIndex((prevIdx) => {
            if(direction === 'prev') {
                return prevIdx === 0 ? projectCnt - 1 : prevIdx - 1;
            }
            else {
                return prevIdx === projectCnt - 1 ? 0 : prevIdx + 1;
            }
        })
    }

  return (
    <section className='c-space my-20' id='project'>
        <p className='head-text select-none'>My Projects</p>

        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                <div className='absolute top-0 right-0'>
                    <img src={curProject.spotlight} alt='spotlight' className='w-full h-96 object-cover rounded-xl'/>
                </div>

                <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={curProject.logoStyle}>
                    <img src={curProject.logo} alt='logo' className='w-10 h-10 shadow-sm'/>
                </div>

                <div className='flex flex-col gap-5 text-white-600 my-5'>
                    <p className='text-white text-2xl font-semibold animatedText'>{curProject.title}</p>
                    <p className='animatedText'>{curProject.desc}</p>
                    <p className='animatedText'>{curProject.subdesc}</p>
                </div>

                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div className='flex items-center gap-3 '>
                        {
                            curProject.tags.map((tag, index) => (
                                <div key={index} className='tech-logo hover:scale-[1.15] transition-all duration-200'>
                                    <img src={tag.path} alt={tag.name}/>
                                </div>
                            ))
                        }
                    </div>

                    <a className='relative group flex items-center gap-2 cursor-pointer text-white-600 italic' href={curProject.href} target='_blank' rel='noreferrer'>
                        <p>{curProject.checkLive}</p>
                        <img src='/assets/arrow-up.png' className='w-3 h-3' alt='arrow'/>
                        <span className='absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 group-hover:w-[85%]' style={{backgroundColor: curProject.linecolor}}></span>
                    </a>
                </div>

                <div className='flex justify-between items-center mt-7'>
                    <button className='arrow-btn hover:scale-[1.15] transition-all duration-200' onClick={() => handleNavigation('prev')}>
                        <img src='/assets/left-arrow.png' alt='left' className='w-4 h-4'/>
                    </button>
                    <button className='arrow-btn hover:scale-[1.15] transition-all duration-200' onClick={() => handleNavigation('next')}>
                        <img src='/assets/right-arrow.png' alt='left' className='w-4 h-4'/>
                    </button>
                </div>

            </div>
            
            <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
                <Canvas>
                    <ambientLight intensity={3.14}/>
                    <directionalLight position={[10, 10, 5]}/>
                    <Center/>
                    <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
                    <Suspense fallback={<CanvasLoader/>}/>
                    <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                        <ProjectVideoComputer texture={curProject.texture}/>
                    </group>
                </Canvas>
            </div>


        </div>

    </section>
  )
}

export default Projects