import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className='fimg'>
    <Image src="fb.svg" alt='' height={30} width={30}/>
    <Image src="insta.svg" alt='' height={30} width={30}/>
    <Image src="Group.svg" alt='' height={30} width={30}/>
    <Image src="Linkedin.svg" alt='' height={30} width={30}/>
      </div>
      <div className='ftxt'>
        <p>Copyright &copy;2020 All Rights Reserved</p>
      </div>
    </div>
    </>
  )
}

export default Footer