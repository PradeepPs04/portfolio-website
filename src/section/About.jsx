import React, { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const techStackImages = [
  {
    id: 1,
    img: '/assets/javascript.png', 
  },
  {
    id: 2,
    img: '/assets/react.svg', 
  },
  {
    id: 3,
    img: '/assets/nodejs.png', 
  },
  {
    id: 4,
    img: '/assets/express.png', 
  },
  {
    id: 5,
    img: '/assets/rest-api.png', 
  },
  {
    id: 6,
    img: '/assets/mongodb.png', 
  },
  {
    id: 7,
    img: '/assets/postman.png', 
  },
  {
    id: 8,
    img: '/assets/github.svg', 
  },
  {
    id: 9,
    img: '/assets/html-5.png', 
  },
  {
    id: 10,
    img: '/assets/css.png', 
  },
  {
    id: 11,
    img: '/assets/tailwindcss.png', 
  },
  {
    id: 12,
    img: '/assets/sql.png', 
  },
  {
    id: 13,
    img: '/assets/python.png', 
  },
  {
    id: 14,
    img: '/assets/cpp.png', 
  },
  {
    id: 15,
    img: '/assets/cLang.png', 
  },
]

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText('pradeep.ps2004@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const globe = globeRef.current;
    let frameId;

    const rotateGlobe = () => {
      if (globe) {
        globe.pointOfView({ lat: globe.pointOfView().lat, lng: globe.pointOfView().lng + 0.5 });
      }
      frameId = requestAnimationFrame(rotateGlobe);
    };

    rotateGlobe();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="c-space my-20" id='about'>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Pradeep</p>
              <p className="grid-subtext">I'm a 3rd year B.Tech Computer Science student and a full-stack web developer.</p>
            </div>
          </div>
        </div>

        {/* tech stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container flex flex-col justify-between">
            {/* tech stack images */}
            <div className='grid grid-cols-3 gap-3 relative'>
              <img className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 mix-blend-lighten opacity-30' src='/assets/blob.gif'/>
              {
                techStackImages.map((item) => (
                  <img 
                    src={item.img}
                    className='w-[60px] z-20 hover:scale-[1.2] transition-all duration-300 text-white'
                    alt={item.img.split('/').at(-1).split('.').at(0)}
                    />
                ))
              }
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">My tech stack includes C, C++, Javascript, Python, and the MERN stack for full-stack development.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef} // Add the ref to the Globe component
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <p className="grid-headtext">
              Available for Remote and On-Site Roles
            </p>
            <p className="grid-subtext">
              I'm based in Uttrakhand, India and open to work on-site & remote work worldwide.
            </p>
            <a href='#contact'>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </a>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding isn't just my
                profession - it is my passion.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  pradeep.ps2004@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
