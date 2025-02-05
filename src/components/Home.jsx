import React from 'react';
import '../assets/css/main.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Nav from './Nav';


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
      <Nav/>
    </header>
    <main class="xl:flex xl:justify-around xl:items-end mb-28 xl:w-full">
      <section
        id="hero"
        class="my-12 md:mt-[200px] md:text-lg flex flex-col items-start tracking-wide"
      >
        <p id="zigzag-text" class="uppercase font-semibold tracking-wider pb-4">
          Umolo Blessing Johnson
        </p>
        <p class="font-extralight">Software Engineer (FrontEnd Developer)</p>
        <p class="font-extralight">
          Currently working as FreeLance FrontEnd Developer
          {/* <a
            class="underline font-medium"
            href="https://www.aremxyplug.com/"
            target="_blank"
            referrerpolicy="no-referrer" rel='noreferrer'
            >AremxyPlug Business Ent, LTD.</a
          > */}
        </p>
      </section>
      <section
        id="navigation"
        class="text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[8.5rem] uppercase font-[cursive]"
      >
        <ul>
        <li class="hover:italic hover:text-gray-500 hover:ml-[50px] underline">
      <Link to="/About" class="Link hover:underline">about</Link>
    </li>
    <li class="hover:italic hover:text-gray-500 hover:ml-[50px] underline">
      <Link to="/Projects" class="Link hover:underline">projects</Link>
    </li>
    <li class="Link hover:italic hover:text-gray-500 hover:ml-[50px] underline">
      <Link to="/Contact"class="Link hover:underline">contact</Link>
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
