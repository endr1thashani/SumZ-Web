import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Save time with AI summarization',
    text: 'Our AI summarization feature utilizes advanced algorithms to condense lengthy texts into concise summaries, saving you valuable time and effort in reading and understanding complex information.',
  },
  {
    title: 'Stay informed on the go',
    text: 'Our summarization app allows you to stay up to date with the latest information even when you are on the move. Whether you are a student, professional, or simply curious, our app enables you to quickly access and comprehend important information wherever you are.',
  },
  {
    title: 'Enhance your productivity',
    text: 'By streamlining the process of digesting information, our app enhances your productivity. Spend less time reading lengthy texts and more time focusing on what matters most, whether it is studying, conducting research, or staying updated in your field.',
  },
];

const Features = () => (
  <div className="features section__padding" id="features">
    <div className="features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
