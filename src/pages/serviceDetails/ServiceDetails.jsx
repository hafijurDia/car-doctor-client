import { Link, useLoaderData, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect } from "react";

const ServiceDetails = () => {
  // Use useLoaderData to get the service data from the loader
  const { service, allServices } = useLoaderData();
  const facilities = service.facility;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16">
     <div className="relative rounded-md">
  {/* Background Image */}
  <div
    className="flex justify-center items-center relative"
    style={{
      backgroundImage: `url(${service.img})`,
      backgroundSize: "cover", // Makes the image cover the entire div
      backgroundPosition: "center center", // Centers the image
      backgroundRepeat: "no-repeat", // Prevents repeating of the background image
      width: "100%", // Ensures it takes full width
      height: "200px", // Adjust height as needed for responsiveness
      borderRadius: '0.5rem', // Ensure the border radius is applied
    }}
  >
    <h2 className="text-3xl font-bold mb-4 text-white absolute z-10">{service.title}</h2>
  
  </div>

  {/* Gray Overlay */}
  <div
    className="absolute inset-0 bg-gray-800 opacity-80 rounded-md" // Gray overlay with some transparency
    style={{ zIndex: 1 }} // Ensures the overlay is on top of the image
  ></div>
</div>


      {service ? (
        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="md:w-2/3 space-y-5">
            <img src={service.img} alt="" className="w-full rounded-md" />
            <h2 className="text-3xl font-semibold">{service.title}</h2>
            <p className="text-base text-gray-600">{service.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="p-4 shadow-lg border-t-4 border-t-error rounded-lg bg-white"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600">{facility.details}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 space-y-5">
          <div className="bg-gray-100 rounded-md px-4 py-5">
          <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3 p-0 m-0">
              {allServices.map((item, index) => (
                <li key={index} className="text-lg bg-white py-2 px-5 rounded-md hover:bg-error ">
                 <Link to={`/service/${item._id}`} className=" text-black font-semibold text-base flex justify-between items-center hover:text-white"> {item.title} <FaArrowRightLong /></Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Price ${service.price}</h2>
          </div>
          <div>
            <Link to={`/booking/${service._id}`} className="btn btn-error w-full text-lg text-white hover:bg-black">Book Service</Link>
          </div>
          </div>
        </div>
      ) : (
        <p>Loading service details...</p>
      )}
    </div>
  );
};

ServiceDetails.propTypes = {
  service: PropTypes.object,
};

export default ServiceDetails;
