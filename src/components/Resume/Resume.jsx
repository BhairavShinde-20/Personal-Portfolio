import React from 'react';
import "./Resume.css";
import Card from './Card';
import ResumeApi from './ResumeApi';


const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4> 4+MONTH'S OF EXPERIENCE</h4>
            <h1>My Resume</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>2017-2021</h4>
                <h1>Education Qualification</h1>
              </div>

              <div className='content'>
                {
                ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}

                
              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>2021-2022</h4>
                <h1>Skills</h1>
              </div>

              <div className='content'>
                {
                ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="r">
          <a href="pdfname" download="pdfname.pdf"><button className='home-btn center'>Get Resume</button></a>
        </div>
      </section>

    </>
  );
};

export default Resume;