import React from 'react';
import "./Portfolio.css";
import PortfolioCard from './PortfolioCard';
import exp from "../image/exp.png"
import gym from "../image/gym.png"
import netflix from "../image/netflix-clone.png"
import portfolio from "../image/port.png"
import ToDo from "../image/todo.png";
import User from "../image/user.png"

const Portfolio = () => {
    return (
        <>
              <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid fet'>
            {/* {Portfolio_data.map((value, index) => {
            console.log(value.image);

              return <PortfolioCard key={index} image={value.image} 
                      category={value.category} totalLike={value.totalLike} 
                      title={value.title}  description={value.description}/>

            })} */}

            <PortfolioCard
            
             id= {1}
             category= {"Development"}
             totalLike= {600}
             title= {"Expenses Tracker "}
             image= {exp}
             description={"An expense tracker app allows you to monitor and categorize your expenses across different bank and investment accounts and credit cards. Some of these apps also offer budgeting tools, and advice to grow your net worth."}
            />
            <PortfolioCard
            id= {2}
            category= {"APPLICATION"}
            totalLike= {750}
            title= {"A Gym website "}
            image= {gym}
            description={"What is a Fitness App? Fitness apps are applications designed by companies to keep you fit and healthy. These apps can be downloaded on mobile phones quite easily. The aim of these apps is to make your lifestyle healthier by tracking your food intake, water intake and workout pattern."}
           />
            <PortfolioCard
            id= {3}
            category= {"Development"}
            totalLike= {750}
            title= {"A Netflix-Clone Application  "}
            image= {netflix}
            description={"Netflix Clone is an on-demand video streaming app solution that helps to launch your own on-demand OTT platform like Netflix, where you can watch unlimited movies & TV shows for one low month to month cost. Netflix Clone broadcasts movies and TV shows over the Internet to new locations with enormous audiences."}
           />
            <PortfolioCard
            id= {4}
            category= {"Development"}
            totalLike= {868}
            title= {"A Portfolio "}
            image= {portfolio}
            description={"What is a Portfolio Website? Let's start by defining what a portfolio website is. At its most basic form, a portfolio website provides professional information about an individual or a company and presents a showcase of their work."}
           />
            <PortfolioCard
            id= {5}
            category= {"Development"}
            totalLike= {654}
            title= {"Todo App "}
            image= {ToDo}
            description={"A to-do list app lets you write, organize, and reprioritize your tasks more efficiently. They also let you attach notes, links, and files to a task, and many let you see when someone else has completed a task. In many ways, a good to-do app is the ultimate productivity app."}
           />
            <PortfolioCard
            id= {6}
            category= {"Development"}
            totalLike= {784}
            title= {"User Information "}
            image= {User}
            description={"A to-do list app lets you write, organize, and reprioritize your tasks more efficiently. They also let you attach notes, links, and files to a task, and many let you see when someone else has completed a task. In many ways, a good to-do app is the ultimate productivity app."}
           />

            {/*<div className='box btn_shadow '>
              <div className='img'>
                  <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Development</span>
                  <label>
                    <i className='far fa-heart'></i> 360
                  </label>
              </div>
              <div className='title'>
                  <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
            
        </>
    );
};

export default Portfolio;