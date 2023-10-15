import stark from "../../public/images/stark.jpg"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Nav(){
  const [toggled, setToggled] = useState(false)
  return(
    <nav className="relative mx-8 mb-24">
      <svg 
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 2L428 2" stroke="#282828" strokeWidth={2} strokeLinecap="round"/>
      </svg>
    </nav>
  )
}  