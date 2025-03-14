import React from 'react'
import './blog.css'
import { FaArrowRight } from 'react-icons/fa'
import Blog1 from '../../assets/blog1.jpg'
import Blog2 from '../../assets/blog2.jpg'
import Blog3 from '../../assets/blog3.jpg'
import shapeOne from '../../assets/shape-1.png'

const Blog = () => {
  return (
    <section className='blog section' id="blog">
         <h2 className='section__title'>Latest Blog</h2>
         <p className='section__subtitle'>
           My <span>Articles and Advice</span>
         </p>
         <div className='blog__container container grid'>
             <div className='blog__item card card-one'>
                  <span className='blog__date text-cs'>October 31, 2022</span>
                  <h3 className='blog__title'>The Main Thing For The Designer</h3>
                  <p className='blog__description'>Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare erget...</p>
                  <a href="" className='link'>
                      Read more
                     <FaArrowRight className='link__icon' />
                  </a>
                  <img src={Blog1} alt='' className='blog__img'/>
             </div>
             <div className='blog__item card card-one'>
                  <span className='blog__date text-cs'>November 31, 2023</span>
                  <h3 className='blog__title'>Follow Your Own Design Process</h3>
                  <p className='blog__description'>Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare erget...</p>
                  <a href="" className='link'>
                      Read more
                     <FaArrowRight className='link__icon' />
                  </a>
                  <img src={Blog2} alt='' className='blog__img'/>
             </div>
             <div className='blog__item card card-one'>
                  <span className='blog__date text-cs'>November, 2024</span>
                  <h3 className='blog__title'>Usability Secrets to Create Better Interfaces</h3>
                  <p className='blog__description'>Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare erget...</p>
                  <a href="" className='link'>
                      Read more
                     <FaArrowRight className='link__icon' />
                  </a>
                  <img src={Blog3} alt='' className='blog__img'/>
             </div>
         </div>
         <div className='section__deco deco__right'>
              <img src={shapeOne} alt='' className='shape' />
         </div>
    </section>
  )
}

export default Blog
