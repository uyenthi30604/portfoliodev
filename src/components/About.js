import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/thi-avatar.jpeg";
import Image2 from "../assets/laptop-cover.jpeg";
import {Link} from 'react-scroll'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center">
          {/* img */}
          {/* bg-about */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 max-w-[320px] mr-10 lg:max-w-[482px] bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          >
            <img src={Image2} alt="" />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            {/* <h3 className="h3 mb-4">
              I'm a Freelance Front-end Developer with over 2 years of
              experience.
            </h3> */}
            <p className="mb-6">
              As a front end developer and customer support specialist, I have
              desire to ensure high-quality user experiences. Passionate about
              improving both the technical and customer-facing aspects of
              digital products.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={0.5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={1} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              
              <Link to='contact'>
              <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href="#" className="text-gradient btn-link">
                {" "}
                My portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
