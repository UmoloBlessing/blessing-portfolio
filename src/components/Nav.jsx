import { React, useState, useEffect} from 'react'

export default function Nav() {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000); 
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div>
      <nav class="flex flex-row items-center justify-between">
        <div class="flex gap-x-4 md:gap-x-14 items-center">
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
            class="h-5 w-[2px] md:w-[1px] md:h-32 transform rotate-[90deg] md:rotate-0 bg-font-black"
          ></span>
        </div>
        <div class="flex gap-3 text-sm">
          <p class="">&copy;</p>
          <p>/</p>
          <p class="md:rotate-[-180deg]">{currentDateTime.toLocaleString()}</p>
        </div>
      </nav>
    </div>
  )
}

