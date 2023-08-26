import React from 'react';
import '../assets/css/main.css';
import Portfolio from '../assets/images/portfolio project.png'
import Project1 from '../assets/images/project1.png'
import Project2 from '../assets/images/project2.png'
import Project3 from '../assets/images/project3.png'
import Project4 from '../assets/images/project4.png'
import Project5 from '../assets/images/project5.png'
import Project6 from '../assets/images/project6.png'
import Project7 from '../assets/images/project7.png'
import Project8 from '../assets/images/project8.png'
import { Link } from 'react-router-dom';



const Projects = () => {
    return (
        <div>
            <body class="bg-accent p-8 md:flex md:gap-x-10 lg:gap-x-14 lg:px-20">
    <header class="writing text-[18px] py-3 md:h-[95%] md:fixed">
      <nav class="flex flex-row items-center justify-between">
        <div class="flex gap-x-14 items-center">
          <ul class="flex gap-x-4 md:gap-x-12">
            <li
              class="md:rotate-[-180deg] cursor-pointer uppercase tracking-widest font-light"
            >
            <Link to="/" class="hover:line-through">home</Link>
            </li>
          </ul>
          <span
            class="h-10 w-[2px] md:w-[1px] md:h-32 transform rotate-[90deg] md:rotate-0 bg-font-black"
          ></span>
        </div>
        <div class="flex gap-3 text-sm">
          <p class="">&copy;</p>
          <p>/</p>
          <p class="md:rotate-[-180deg]">2023</p>
        </div>
      </nav>
    </header>

    <main>
      <section id="section-4" class="mt-5 md:px-10">
        <h2 class="text-center text-2xl font-[500] mb-5 space-x-3">
          <span class="underline">MY</span>
          <span class="bg-black rounded-xl py-2 px-3 text-white">PROJECTS</span>
        </h2>

        <p class="md:text-center md:text-[20px]">
          This is the showcase of my work in variety of fields. I'm learning and
          getting new skills everyday.
        </p>

        <div class="project mt-20 px-5">


          <div class="item">
            <img
              src={Portfolio}
              alt=""
              class="project1"
            />

            <div class="left mb-10">
              <p class="text-[15px] sm:text-xl font-[500] mt-3">Portfolio</p>
              <div class="flex gap-5 text-sm mt-5">
                <div class="bg-black rounded-lg py-3 px-4 text-[#ece7e1]">
                  <a href="https://github.com/UmoloBlessing/My-Portfolio"
                    >GITHUB REPO</a
                  >
                </div>
                <div class="bg-black py-3 px-5 rounded-lg text-[#ece7e1]">
                  <a href="https://umoloblessing.github.io/My-Portfolio/"
                    >Demo Link</a
                  >
                </div>


              </div>
            </div>
          </div>

          <div class="item">
            <img src={Project1} alt="" class="project1" />

            <div class="left mb-10">
              <p class="text-[15px] sm:text-xl font-[500] mt-3">Saas Website</p>
              <div class="flex gap-5 text-sm mt-5">
                <div class="bg-black rounded-lg py-3 px-4 text-[#ece7e1]">
                  <a
                    href="https://github.com/UmoloBlessing/Blessing-SaaS-Website"
                    >GITHUB REPO</a
                  >
                </div>
                <div class="bg-black py-3 px-5 rounded-lg text-[#ece7e1]">
                  <a
                    href="https://umoloblessing.github.io/Blessing-SaaS-Website/"
                    >Demo Link</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src={Project2} alt="" class="project1" />

            <div class="left mb-10">
              <p class="text-[15px] sm:text-xl font-[500] mt-3">Dashboard</p>
              <div class="flex gap-5 text-sm mt-5">
                <div class="bg-black rounded-lg py-3 px-4 text-[#ece7e1]">
                  <a
                    href="https://github.com/UmoloBlessing/Blessing-Dashboard-ASS"
                    >GITHUB REPO</a
                  >
                </div>
                <div class="bg-black py-3 px-5 rounded-lg text-[#ece7e1]">
                  <a
                    href="https://umoloblessing.github.io/Blessing-Dashboard-ASS/"
                    >Demo Link</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src={Project3} alt="" class="project1" />

            <div class="left mb-10">
              <p class="text-[15px] sm:text-xl font-[500] mt-3">
                Furniture Website
              </p>
              <div class="flex gap-5 text-sm mt-5">
                <div class="bg-black rounded-lg py-3 px-4 text-[#ece7e1]">
                  <a href="https://github.com/UmoloBlessing/AXIA-ASS5"
                    >GITHUB REPO</a
                  >
                </div>
                <div class="bg-black py-3 px-5 rounded-lg text-[#ece7e1]">
                  <a href="https://umoloblessing.github.io/AXIA-ASS5/"
                    >Demo Link</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src={Project4} alt="" class="project1" />
            <div class="left mb-10">
              <p class="text-[15px] sm:text-xl font-[500] mt-3">
                Sign In/Up page
              </p>
              <div class="flex gap-5 text-sm mt-5">
                <div class="bg-black rounded-lg py-3 px-4 text-[#ece7e1]">
                  <a href="https://github.com/UmoloBlessing/AXIA-ASS3"
                    >GITHUB REPO</a
                  >
                </div>
                <div class="bg-black py-3 px-5 rounded-lg text-[#ece7e1]">
                  <a href="https://umoloblessing.github.io/AXIA-ASS3/"
                    >Demo Link</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src={Project5} alt="" class="project1" />
            <div class="left mb-10">
              <p class="text-[15px] sm:text-xl font-[500] mt-3">
                Food Recipes Website
              </p>
              <div class="flex gap-5 text-sm mt-5">
                <div class="bg-black rounded-lg py-3 px-4 text-[#ece7e1]">
                  <a href="https://github.com/UmoloBlessing/AXIA-ASS2"
                    >GITHUB REPO</a
                  >
                </div>
                <div class="bg-black py-3 px-5 rounded-lg text-[#ece7e1]">
                  <a href="https://umoloblessing.github.io/AXIA-ASS2/"
                    >Demo Link</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src={Project6} alt="" class="project1" />
            <div class="left mb-10">
              <p class="text-[15px] sm:text-xl font-[500] mt-3">
                Acme Web Design
              </p>
              <div class="flex gap-5 text-sm mt-5">
                <div class="bg-black rounded-lg py-3 px-4 text-[#ece7e1]">
                  <a href="https://github.com/UmoloBlessing/Acme-Web-Design"
                    >GITHUB REPO</a
                  >
                </div>
                <div class="bg-black py-3 px-5 rounded-lg text-[#ece7e1]">
                  <a
                    href="https://umoloblessing.github.io/Acme-Web-Design/index.html"
                    >Demo Link</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src={Project7} alt="" class="project1" />
            <div class="left mb-10">
              <p class="text-[15px] sm:text-xl font-[500] mt-3">
                Personal Profile Website
              </p>
              <div class="flex gap-5 text-sm mt-5">
                <div class="bg-black rounded-lg py-3 px-4 text-[#ece7e1]">
                  <a href="https://github.com/UmoloBlessing/AXIAAFRICA-PROJECT"
                    >GITHUB REPO</a
                  >
                </div>
                <div class="bg-black py-3 px-5 rounded-lg text-[#ece7e1]">
                  <a href="https://umoloblessing.github.io/AXIAAFRICA-PROJECT/"
                    >Demo Link</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src={Project8} alt="" class="project1" />
            <div class="left mb-10">
              <p class="text-[15px] sm:text-xl font-[500] mt-3">
                Blue Dev Tech About Website
              </p>
              <div class="flex gap-5 text-sm mt-5">
                <div class="bg-black rounded-lg py-3 px-4 text-[#ece7e1]">
                  <a href="https://github.com/UmoloBlessing/Blue-devtech"
                    >GITHUB REPO</a
                  >
                </div>
                <div class="bg-black py-3 px-5 rounded-lg text-[#ece7e1]">
                  <a href="https://umoloblessing.github.io/Blue-devtech/"
                    >Demo Link</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <p
          class="text-center font-[cursive] text-[3rem] md:text-[4rem] lg:text-[6rem]"
        >
          Thank you!!!
        </p>
      </div>
    </main>
  </body>
        </div>
    )
}


export default Projects;