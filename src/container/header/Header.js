import React from 'react'
import './header.css'
import sum from '../../assets/sum.png'
const Header = () => {
  return (
    <div className='header section_padding' id='home'>
      <div className='header_content'>
        <h1 className='gradient__text'>
          Let's build something amazing together
        </h1>
        <p>With our app, lengthy articles, research papers, and documents are condensed into concise and coherent summaries, saving you valuable time and effort. Powered by advanced natural language processing algorithms, our app analyzes the text, identifies key ideas, and generates a condensed summary that captures the essence of the original content.</p>
        <div className='header-content__input'>
        <input
        type='email'
        placeholder='Enter your email'
        />
        <button type='button'>Get Started</button>
        </div>
      </div>
      <div className='header-image'>
          <img src={sum} alt='sum'/>
        </div>
    </div>
  )
}

export default Header
