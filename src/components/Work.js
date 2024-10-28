'use client'
import React, { Fragment, useState } from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//img
import Img1 from "../assets/ics.jpg";
import Img2 from "../assets/mifs.png";
import Img3 from "../assets/hdvn.png";
import ProjectModal from "./ProjectModal";

const Work = () => {
  const [open, setOpen] = useState(false);
  return (    
    <Fragment className="relative">
      <ProjectModal className="absolute z-100" open={open} onClose={()=> setOpen(false)}>
        <h1>Hello</h1>
      </ProjectModal>
      <section className="section" id="work">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-10">
            <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7}} className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
              {/* text */}
              <div>
                <h2 className="h2 leading-tight text-accent">
                  My Latest <br /> Work.
                </h2>
                <p className="max-w-sm mb-16"> 
                  These are my 3 latest web applications. These projects are utilized in a production company's digital exchange procedure.
                </p>
                <button className="btn btn-sm" onClick={() => setOpen(true)}>View detail</button>
              </div>
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img1}
                  alt=""
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">UI/UX Design <br />Customer Support</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Inventory Control System</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7}} className="flex-1 flex flex-col gap-y-10">
              {/* image 2*/}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img2}
                  alt=""
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">UI/UX Design</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Maintenance Management System</span>
                </div>
              </div>
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img 3*/}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img3}
                  alt=""
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">UI/UX Design<br />Customer Support</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">HDVN Inspection system</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Fragment>  
      
    
  );
};

export default Work;
