/* eslint-disable */

import React from 'react'
import { useRef, useState, useEffect } from 'react';



const CaseStudy = () => {
  const [divWidth, setDivWidth] = useState(0)

  const images = [
    {
        img: "ER.png",
        alt: "Website design and SEO optimization"
    },
    {
        img: "Kept.png",
        alt: "Website design and SEO optimization"
    },
    {
        img: "collaks.png",
        alt: "Website design and SEO optimization"
    },
  ]

//   useEffect(() => {
//     const width = window.innerWidth
//     if (width >= 768){
//       // console.log(heroRef.current.clientHeight)
//     //   window.addEventListener('scroll', () => {
//     //     const scrollPos = window.scrollY
//     //     if (scrollPos > heroRef.current.clientHeight){
//     //       setShowNav(true)
//     //     } else {
//     //       setShowNav(false)
//     //     }
//     //   })
      
//       setDivWidth(width / 3)
//     } else {
//       setDivWidth(width)
//     }
//     divRef.current.scrollRight += 3000

  
//   }, [])


//   const divRef = useRef();

  return (
    <div className='case-study'>
        <div className="container">
            <div className="left">1 - 5</div>
            <div className="right">
                <h2>CASE STUDIES</h2>
                <div className="case-study-div">
                    {
                        images.map((image,i) => (
                            <span key={i} className="image">
                                <img src={image.img} alt={image.alt} />
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default CaseStudy