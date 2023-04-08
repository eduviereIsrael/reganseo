/* eslint-disable */

import React, {use, useState} from 'react'

const services = [
    {
        service: "Website Design",
        description: "Spme random text that i test with",
    },
    {
        service: "Website development and management",
        description: "Spme random text that i test with",
    },
    {
        service: "Search Engine Optimization",
        description: "Spme random text that i test with",
    },
    {
        service: "Social Media Content Design",
        description: "Spme random text that i test with",
    },
]

const Services = () => {

  const [openService, setOpenService] = useState([])

  const handleServiceChange = (serviceClicked) => {
    console.log(serviceClicked)
    const foundService = openService.find(service => service === serviceClicked)
    // const newOpenService = [];
    if (foundService){
        const newOpenService = openService.filter(service => service !== foundService)
        console.log(newOpenService)
        return newOpenService;
    }

    const newOpenService = [...openService, serviceClicked]
    console.log(newOpenService)
    return newOpenService;
  }

  return (
    <div className='services'>
        <div className="container">
            <div className="left">
                <img src="/asterisk.svg" alt="" />
            </div>
            <div className="right">
                <h2>SERVICES DESIGNED TO ACHIEVE BUSINESS GOALS</h2>
                <div className="services-div">
                    <hr/>
                    {
                        services.map(({service, description}) => (
                            // const { title, description } = service
                            <span key={service}>
                                <div className='service-item' onClick={() => setOpenService(handleServiceChange(service))}>
                                    <p className='small-text'>{service}</p>
                                    <p className={`${openService.includes(service)? 'clicked' : ''} smaller-text`}>{description}</p>
                                    <div className={`${openService.includes(service)? 'clicked-toggle' : ''} toggle`}>
                                        <div className='top'></div>
                                        <div className='bottom'></div>
                                    </div>
                                </div>
                                <hr />
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services