import React from 'react'
import Feature from '../../components/feature/Feature';
import './about.css'
const About = () => {
  return (
    <div className="about section__margin" id="about">
    <div className="about-feature">
    <Feature title="What is SumZ?" text="SumZ is an advanced AI-powered app that revolutionizes the way you consume information. With its state-of-the-art summarization algorithms, SumZ condenses lengthy texts into concise and coherent summaries. By extracting key ideas and capturing the essence of the original content, SumZ saves you time and effort in understanding complex information. Stay informed, enhance productivity, and effortlessly extract the most important insights with SumZ, your ultimate summarization AI app." />
    </div>
    <div className="about-heading">
      <h1 className="gradient__text">The possibilities are endless</h1>
      <p>Explore the Library</p>
    </div>
    <div className="about-container">
    <Feature title="Fast" text="Experience blazing-fast summarization with our AI-powered app. Our advanced algorithms work swiftly to condense lengthy texts into concise summaries, allowing you to quickly grasp the main ideas and key points of any document." />
<Feature title="Knowledgebase" text="Unlock a vast knowledgebase with our summarization AI app. By harnessing the power of artificial intelligence, we provide you with access to a wealth of information at your fingertips. Explore various topics and expand your understanding with ease." />
<Feature title="Education" text="Transform your learning experience with our education-focused summarization AI app. From academic materials to research papers, our app simplifies complex information, making it accessible and comprehensible. Stay ahead in your studies and gain a deeper understanding of your subjects." />
    </div>
  </div>
  )
}

export default About
