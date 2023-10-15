import stark from "../../public/images/stark1024.jpg"
import { motion } from "framer-motion"
import { useState } from "react"
import { useMediaQuery } from "../utils/useMediaQuery"

export default function Nav(){
  const [toggled, setToggled] = useState(false)
  const matches = useMediaQuery('(min-width: 128px)')
  console.log(matches)

  return(
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg 
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 2L428 2" stroke="#282828" strokeWidth={2} strokeLinecap="round"/>
      </svg>
      <div>
        <img src="../../public/images/stark.jpg" alt="Profile picture of me" width={96} height="auto" className="rounded-full"/>
      </div>

      {/* Title */}
      <h1 className="text-lg font-bold">
        <a href="/">Stark.</a>
      </h1>

      <div 
        onClick={() => setToggled((prevToggle) => !prevToggle)} 
        className="space-y-1 cursor-pointer xl:hidden"
      >
        <span className="block h-0.5 w-8 bg-black"></span>
        <span className="block h-0.5 w-5 bg-black"></span>
        <span className="block h-0.5 w-5 bg-black"></span>
      </div>
    </nav>
  )
}  