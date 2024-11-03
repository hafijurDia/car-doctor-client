import { useEffect, useState } from "react";
import ServiceCard from "../home/service/ServiceCard";



const Services = () => {
    const [services, setService] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className="max-w-6xl mx-auto">
            <div className="p-4 md:p-0">
            <div className="space-y-1 mt-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center">Our Service Area</h1>
          <p className="text-base text-gray-600 text-center md:w-3/4 lg:w-3/4 mx-auto">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
        </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
           {
                services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
            }
           </div>
           <div className="text-center my-14">
            <button className="btn btn-outline btn-error text-white text-lg">More Services</button>
           </div>
        </div>
        </div>
    );
};


Services.propTypes = {

};


export default Services;
