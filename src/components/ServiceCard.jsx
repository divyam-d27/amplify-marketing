import React from "react";
import { Link } from "react-router-dom";
const ServiceCard = (props) => {
  return (
    <>
      {/* LIGHT */}
      {/* <div
        className={`relative flex flex-col ${
          props.id % 2 ? "md:flex-row" : "md:flex-row-reverse"
        } md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-testimonial max-w-xs md:max-w-[80%] mx-auto bg-light m-5`}
        // p-3 => removed
      >
        <div className="w-full md:w-1/3  grid place-items-center">
          <img
            src={props.img}
            alt=""
            className={`${
              props.id % 2 ? "rounded-l-xl" : "rounded-r-xl"
            } object-cover h-64 w-96`}
          />
        </div>
        <div className="w-full md:w-2/3  flex flex-col justify-center space-y-2 p-3">
          <h3 className="font-semibold text-darkblue md:text-3xl text-xl">
            {props.title}
          </h3>
          <p className="md:text-lg text-main font-light text-base">
            {props.content}
          </p>
          <Link
            to={`/services/${props.title.replaceAll(" ", "-").toLowerCase()}`}
            className="bg-darkblue relative inline-block text-white text-center no-underline font-normal shadow-[0_10px_20px_rgba(0,0,0,0.2)] mt-[15px] px-5 py-2 rounded-xl hover:bg-opacity-70"
          >
            Consult
          </Link>
        </div>
      </div> */}
      {/* DARK */}
      <div
        className={`relative flex flex-col ${
          props.id % 2 ? "md:flex-row" : "md:flex-row-reverse"
        } md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-testimonial max-w-xs md:max-w-[80%] mx-auto bg-darkblue m-5`}
        // p-3 => removed
      >
        <div className="w-full md:w-1/3  grid place-items-center">
          <img
            src={props.img}
            alt=""
            className={`${
              props.id % 2 ? "rounded-l-xl" : "rounded-r-xl"
            } object-cover h-64 w-96`}
          />
        </div>
        <div className="w-full md:w-2/3  flex flex-col justify-center space-y-2 p-3">
          <h3 className="font-semibold text-blue md:text-3xl text-xl">
            {props.title}
          </h3>
          <p className="md:text-lg text-subtle font-light text-base">
            {props.content}
          </p>
          <Link
            to={`/services/${props.title.replaceAll(" ", "-").toLowerCase()}`}
            className="border border-gold relative inline-block text-gold text-center no-underline font-normal shadow-[0_10px_20px_rgba(0,0,0,0.2)] mt-[15px] px-5 py-2 rounded-xl hover:bg-gold hover:text-darkblue"
          >
            Consult
          </Link>
        </div>
      </div>
    </>
  );
};
export default ServiceCard;
