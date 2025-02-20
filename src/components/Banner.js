import React from 'react';
import Image from '../assets/thi-cover.jpeg';
// import Image2 from '../assets/avatar.svg';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Pdf from "../assets/thi-dev-resume.pdf"
const Banner = () => {
  return (
    <section className='min-h-[85vh] lg: min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'> 
          <div className='flex-1 text-center font-secondary lg:text-left'>
            {/* text */}
            <motion.h1 variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              NGUYEN PHAM UYEN THI
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation
                sequence={[
                  'front-end developer',
                  2000,
                  'customer supporter',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className='text-accent'
                wrapper='span'
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              {/* I’m a frontend developer and customer support specialist committed to delivering high-quality user experiences, with 2.5 years of experience. */}
              I’m a frontend developer that aim to create intuitive and impactful digital experiences while continuously learning and refining my skills, with 2.5 years of experience.
              </motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7}} className='flex max-w-max items-center gap-x-6 mb-12 mx-auto lg:mx-0'>
              <a href={Pdf} className='text-gradient btn-link border p-2 rounded-2xl' target = "_blank">
                Resume
              </a>
            </motion.div>
            {/* socials */}
            <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
             
              <a href='https://github.com/uyenthi30604/portfoliodev.git' target = "_blank">
                <FaGithub />
              </a>
              
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
