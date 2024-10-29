import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
   <>
   <div className="Hero">
    <div className="div1">
    <h1>
      Hi, I am John,<br />
      Creative Technologist
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur odit eveniet eos amet culpa cupiditate officia accusantium rerum neque, ut magni 
    </p>
    <button>
      Download Resume
    </button>
    </div>
    <div className="div2">
    <Image className="image" src="hero-image.svg" alt="" height={100} width={100}/>
    </div>
   </div>
   </>
  )
}

export default Hero