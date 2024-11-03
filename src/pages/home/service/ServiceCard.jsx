import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceCard = ({service}) => {
    const {_id,title, price, img} = service;
  return (
    <div>
      <div className="card border shadow-xl p-5">
        <figure className="">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl md:h-52"
          />
        </figure>
        <div className="card-body pl-0 pb-0 pr-0">
          <h2 className="card-title">{title}</h2>
          <div className="flex">
            <p className="text-lg font-bold text-error ">Price: ${price}</p>
              <Link to={`/service/${_id}`}><button className="text-lg font-bold text-error"><FaArrowRight /></button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {};

export default ServiceCard;
