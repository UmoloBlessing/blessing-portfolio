import React from 'react';
import '../assets/css/main.css';
import ProfilePic from '../assets/images/umolo.jpeg'
import File from '../assets/file/Resume.pdf' 
import { Link } from 'react-router-dom';



const About = () => {

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
    
    <main class="md:pl-20">
      <section>
        <div class="flex items-center gap-x-4 md:gap-10 lg:gap-28">
          <h1 class="hello font-[cursive] text-[4.5rem] md:text-[8.5rem] lg:text-[12rem]">About</h1>
          <picture class="max-w-[200px] lg:max-w-[400px]">
            <img
              src={ProfilePic}
              alt="umolo"
              class="w-full h-full rounded-3xl"
            />
          </picture>
        </div>
        <div>
          <p class="font-[cursive] text-2xl px-1 font-semibold leading-9 md:text-3xl md:mt-5 lg:text-5xl lg:w-[80%] lg:leading-normal">
            I'm Blessing Umolo Johnson, a frontend developer, based in Lagos,
            Nigeria.
          </p>
        </div>
      </section>
      
      <section class="mt-8">
        <div class="leading-8 space-y-8 md:text-[20px]">
          <p>
            I am a front-end Developer passionate about buidling accessible
            apps thats user love.
          </p>
          <p>
            A quick learner with a broad variety of skills in the science and
            technology fields.
          </p>
          <p>
          At the moment, I am proficient in crafting and enhancing UI designs using a combination of HTML, CSS, TAILWIND CSS, JAVASCRIPT, and REACT.js. I have successfully delivered projects including dynamic landing pages, dashboards, and a variety of other applications utilizing the power of React.
          </p>
          <p>
            A devoted supporter of the industry who has proven his value by
            acquiring the necessary skills and who is eager to learning new ones
            in the field, especially in science and technology, and who
            participates in professional activities throughout time, even while
            still a student.
          </p>
          <p>
            A diligent and innovative person with skills that are beneficial to
            science and technological orgaizations. Excellent team player that
            prioritizes achieving the predetermined goals by perseverance,
            professionalism, attention to detail, and an inventive mindset.
          </p>
          <p>
            In order to improve the organisation. I'm motivated to work well
            with everyone in the company and to execute projects that will
            benefit it and to put professional experience and competence to good
            use.
          </p>
        </div>
      </section>

      <section class="mt-8">
        <h2 class="font-[cursive] text-[2rem] md:text-[4rem]">EXPERIENCE</h2>

        <div>
          <ul class="space-y-4">
            <li class="font-400 text-2xl">
              - Axia Africa
            </li>
            <p class="font-light md:text-[18px]">
              Learnt HTML, CSS, GITHUB, TAILWINDCSS, NETLIFY, VSCODE, JAVASCAIPT, REACT JS and still
              Learning.
            </p>

            <li class="font-400 text-2xl">
              - Bluedevtech solutions
            </li>
            <p class="font-light md:text-[18px]">Built static websites for company branding and advertisement.</p>

            <li class="font-400 text-2xl">
              - Axia Africa Freetechbootcamp
            </li>
            <p class="font-light md:text-[18px]">HTML Fundamentals</p>
            <p class="font-light md:text-[18px]">CSS Fundamentals</p>
            <p class="font-light md:text-[18px]">Responsive Web Design</p>
            <p class="font-light md:text-[18px]">Web development Frameworks</p>
            <p class="font-light md:text-[18px]">GitHub</p>

            
            <li class="font-400 text-2xl">
              - Zuri Internship
            </li>
            <p class="font-light md:text-[18px]">Learnt HMTL and CSS.</p>

          </ul>

        </div>

      </section>


      <section class="mt-8">

        <h2 class="font-[cursive] text-[2rem] md:text-[4rem]">SKILLS</h2>

        <div class="mt-5 md:text-[25px]">
          <p>HTML / CSS / GITHUB / TAILWINCSS / NETLIFY / VSCODE / JAVASCIPT / REACT JS.</p>
          
        </div>

        <div class="flex gap-5 text-sm mt-5">
          <div class="bg-black rounded-lg py-3 px-4">
            <a
            href={File}
            download={File}
                           class="text-[#ece7e1]">Download Resume</a
            >
          </div>
          <div class="bg-black py-3 px-5 rounded-lg text-[#ece7e1]">
            <a href="https://wa.me/2348103099255?text=Hello%20there">Hire Me</a>
          </div>
        </div>


      </section>
    </main>
  </body>
        </div>
    )
}


export default About;