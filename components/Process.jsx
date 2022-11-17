import React from 'react'
import ServCard from './ServCard'

const Process = () => {

  const servicesData = [
    {
      img: '/research.webp',
      title: 'Research',
      text: "We start by conducting a market research to understand your industry and collect useful information and questions that your custom audience are seeking answers to."
    },
    {
      img: '/web.webp',
      title: 'Web Audit',
      text: "We then proceed to work on your website( or build a new one ), the objective here is to create a modern website with the right information in the right places, and is fast."
    },
    {
      img: '/content.webp',
      title: 'Content Creation',
      text: "To get the results your business needs, we move on to create blogs to answer a variety of questions and objections that are holding back prospects from purchasing your product/service."
    },
    {
      img: '/link.webp',
      title: 'Link Building',
      text: "And to seal the deal, we finish with link building. This is vital if we want google and other search engines to recognize your website as an authority in your industry and recommend it's contents."
    },
  ]
  return (
    <div className='process'>
        <div className="container sect-wrap">
            <div className="intro">
                <span className='header-span'>This is how we get results</span>
                <h2>OUR APPROACH</h2>
                <p>We offer full service, <span>{'"what does that even mean?"'}</span></p>
                <p>Our sole objective is getting our clients the results their business needs, so we play every card in our arsenal to make sure that happens.
                </p>

                <p>We are result-oriented.</p>
            </div>
            <div></div>
            <div className="cards-cont">
              {servicesData.map(({img, title, text}, i) => (
                <ServCard key={i} img={img} title={title} text={text}  />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Process