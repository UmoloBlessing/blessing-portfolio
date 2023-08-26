import React from 'react';
import '../assets/css/main.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Home = () => {

useEffect(() => {
    const links = document.querySelectorAll('a.Link');
    const loadingContainer = document.getElementById('loadingContainer');
    
    function showLoadingAnimation() {
      loadingContainer.style.display = 'flex';
    }
  
    function handleLinkClick(event) {
      event.preventDefault();
      showLoadingAnimation();
  
      const href = event.target.getAttribute('href');
  
      setTimeout(() => {
        window.location.href = href;
      }, 1000);
    }
  
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });
  
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []); 


  return (
    <div>
    <body class="bg-accent p-4 md:flex md:gap-x-10 lg:gap-x-14">
    <header class="writing text-[30px] py-3 md:h-[95%]">
      <nav class="flex flex-row items-center justify-between">
        <div class="flex gap-x-14 items-center">
          <ul class="flex gap-x-4 md:gap-x-12">
            <li class="md:rotate-[360deg] cursor-pointer">
              <a href="https://github.com/UmoloBlessing" target="_blank" rel='noreferrer'
                ><i class="uil uil-github hover:text-blue-800"></i
              ></a>
            </li>
            <li class="md:rotate-[360deg] cursor-pointer">
              <a
                href="https://www.linkedin.com/in/umolo-blessing-43634420a/"
                target="_blank" rel='noreferrer'
                ><i class="uil uil-linkedin hover:text-blue-800"></i
              ></a>
            </li>
            <li class="md:rotate-[360deg] cursor-pointer">
              <a href="https://twitter.com/umolo_johnson" target="_blank" rel='noreferrer'
                ><i class="uil uil-twitter hover:text-blue-600"></i
              ></a>
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
    <main class="xl:flex xl:justify-around xl:items-end mb-28 xl:w-full">
      <section
        id="hero"
        class="my-12 md:mt-[200px] md:text-lg flex flex-col items-start tracking-wide"
      >
        <p id="zigzag-text" class="uppercase font-semibold tracking-wider pb-4">
          Umolo Blessing Johnson
        </p>
        <p class="font-extralight">Frontend developer</p>
        <p class="font-extralight">
          Currently working as an intern at
          <a
            class="underline font-medium"
            href="https://axia.africa/"
            target="_blank"
            referrerpolicy="no-referrer" rel='noreferrer'
            >Axia Africa</a
          >
        </p>
      </section>
      <section
        id="navigation"
        class="text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[8.5rem] uppercase font-[cursive]"
      >
        <ul>
        <li class="hover:italic hover:text-gray-500 hover:ml-[50px] underline">
      <Link to="./About" class="Link hover:underline">about</Link>
    </li>
    <li class="hover:italic hover:text-gray-500 hover:ml-[50px] underline">
      <Link to="./Projects" class="Link hover:underline">projects</Link>
    </li>
    <li class="Link hover:italic hover:text-gray-500 hover:ml-[50px] underline">
      <Link to="./Contact" class="Link hover:underline">contact</Link>
    </li>
        </ul>
      </section>

      <div id="loadingContainer" class="hidden">
        <div class="loading-spinner"></div>
      </div>
      
    </main>
  </body>

    </div>
    )
}


export default Home;
