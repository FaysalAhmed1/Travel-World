import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://haunted-ghost-42061.herokuapp.com/travelplans')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])





    return (
        <div className="bg-secondary" >

            <h2 className="mt-5 text-info bg-dark pt-5 pb-5" style={{ textAlign: "center" }}> Our Travel Plans </h2>

            <div className="service-container" >

                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>)


                }

            </div>
        </div>
    );

};


export default Services;