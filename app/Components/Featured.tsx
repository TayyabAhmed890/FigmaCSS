import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <>
    <div className='mainFeatured'>
      <div className='fw'>
        <h4>Featured Work</h4>
      </div>
      <div className="add">
        <Image className='Image' src="img1.svg" alt="" height={180} width={246}/>
        <div className="content">
        <h2>Designing Dashboards</h2>
        <div className='DashPar'>
          <h4>2020</h4>
          <p>Dashboard</p>
          </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex vitae, consectetur placeat, tempora cumque natus excepturi, soluta saepe assumenda quia commodi iure Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="add">
        <Image className='Image' src="img2.svg" alt="" height={180} width={246}/>
        <div className="content">
        <h2>Designing Dashboards</h2>
        <div className='DashPar'>
          <h4>2020</h4>
          <p>Dashboard</p>
          </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex vitae, consectetur placeat, tempora cumque natus excepturi, soluta saepe assumenda quia commodi iure Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="add">
        <Image className='Image' src="img3.svg" alt="" height={180} width={246}/>
        <div className="content">
        <h2>Designing Dashboards</h2>
        <div className='DashPar'>
          <h4>2020</h4>
          <p>Dashboard</p>
          </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex vitae, consectetur placeat, tempora cumque natus excepturi, soluta saepe assumenda quia commodi iure Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Featured