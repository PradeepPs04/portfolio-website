import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import ComputerTable from '../components/ComputerTable'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import {calculateSizes} from '../data';
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'

const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidtg: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'>

        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Pradeep <span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient'>Web Developer</p>
        </div>

        <div className='w-full h-full absolute inset-0'>
            {/* <Leva/> */}
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                    <HeroCamera isMobile={isMobile}>
                        <ComputerTable 
                            scale={sizes.deskScale}
                            position={sizes.deskPosition}
                            rotation={[0.3, -3.2, 0]}
                        />
                    </HeroCamera>

                    <group>
                        <Target position={sizes.targetPosition}/>
                        <ReactLogo position={sizes.reactLogoPosition}/>
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition}/>
                    </group>

                    <ambientLight intensity={2}/>
                    <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                </Suspense>

            </Canvas>
        </div>

        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
            <a href='./myResume/MyResume.pdf' download className='w-fit'>
                <Button name="Get My Résumé" isBeam containerClass="sm:w-fit w-full sm:min-w-[96px]"/>
            </a>
        </div>

    </section>
  )
}

export default Hero