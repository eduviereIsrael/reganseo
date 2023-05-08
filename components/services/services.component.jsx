import React, {useState, useEffect, useCallback} from 'react'
import { ServicesContent, ServicesDetailsDiv, ServicesDiv, ServicesHead, ImageContainer } from './services.styles';
import { THEME } from '../../styles/theme/theme';
import { motion } from 'framer-motion';


const services = [
    {
        title: "Branding",
        text: "WE DELIVER POWERFUL BRANDING THAT INSPIRES CREDIBILITY.",
        text2: "Position yourself as an authority across various social media platforms with consistent designs, powerful branding and engaging content that is sure to make your target audience stop and read.",
        image: "/social-media.webp",
    },
    {
        title: "Website",
        text: "WE GO BEYOND BUILDING WEBSITES, WE BUILD DIGITAL ASSETS.",
        text2: "Get a website that presents your brand in the most credible and fashionable way possible. This is a crucial part of building a strong online presence that lasts the test of time. ",
        image: "/website.webp",
    },
    {
        title: "SEO",
        text: "OPEN DOORS TO NEW OPPORTUNITIES",
        text2: "We don't just design a beautiful brand, we pull thousands of cold traffic to your website. And we do this with an organized and result-driven SEO campaign. This is the secret ingredient.",
        image: "/seo.webp",
    },
];

const Services = () => {

  const [autoSwitching, setAutoSwitching] = useState(true);
  const [index, setIndex] = useState(1);
  const [activeService, setActiveService] = useState(null);
  const [timer, setTimer] = useState(20);

  const automaticSwitching = useCallback(() => {
        setActiveService(services[index]);
        switch (index){
            case 0:
                setIndex(1);
                return
            case 1:
                setIndex(2);
                return
            case 2:
                setIndex(0)
                return
            default:
                setIndex(0);
                return
        }
        // console.log(index)
  }, [index]);

    useEffect(() => {
        
        if (autoSwitching){
            const timeoutFunction = setInterval(automaticSwitching, 10000)
            return () => clearInterval(timeoutFunction);
        }
    
    }, [automaticSwitching, autoSwitching]);

  const handleServiceSwitch = (indx) => {
    console.log(indx)
    setAutoSwitching(false);
    setIndex(indx)
    setTimeout(() => {
        setAutoSwitching(true);
        setTimeout(() => {
            console.log(autoSwitching);
        },1000)
    }, 10000)
  };
  return (
    <ServicesDiv>
        <ServicesDetailsDiv>
            <motion.h2 initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} >THE NEXT LEVEL FOR YOUR BUSINESS IS JUST A FEW STEPS AWAY.</motion.h2>
            <ServicesContent>
                <ServicesHead>
                    {services.map((service, indx) => <p onClick={() => handleServiceSwitch(indx)} style={{color: `${indx == index? THEME.colors.light1 : THEME.colors.light3 }`}} key={service.title}>{service.title}</p>)}
                </ServicesHead>
                <motion.p  initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} style={{color: `#fff`, marginBottom: "8px"}}>{services[index].text}</motion.p>
                <motion.p  initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} style={{color: THEME.colors.light3}}>{services[index].text2}</motion.p>
            </ServicesContent>
        </ServicesDetailsDiv>
        <ImageContainer>
            <motion.img src={services[index].image} />
        </ImageContainer>
        {/* <h1>{timer}</h1> */}
    </ServicesDiv> 
  )
}

export default Services