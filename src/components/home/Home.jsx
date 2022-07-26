import React from 'react';
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
// import MYPic from "../pic/mypic.png"
// import { Typewriter } from "react-simple-typewriter"
import Typical from "react-typical";

import * as Icon from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Bhairav Shinde </span>
            </h1>
            <h1>a</h1>
            <span ><Typical 
                loop={Infinity}
                steps={[
                  "MERN Stack Developer ", 1000,
                  "Front-End Developer", 1000,
                  "Backend Developer", 1000,
                ]}
              /></span>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <a><Icon.FaFacebook size={20} /></a>
                  </button>
                  <button className='btn_shadow'>
                    <a href='https://instagram.com/thenameis_bhairav?igshid=YmMyMTA2M2Y=' target="_blank"><Icon.FaInstagram size={20} /></a>
                  </button>
                  <button className='btn_shadow'>
                    <a><Icon.FaLinkedinIn size={20} /></a>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;