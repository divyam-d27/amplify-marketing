import React from "react";
const TimelineCard = (props) => {
  // let id = props.id + 1; old
  return (
    <>
      {/* <div
        className={`mb-8 flex justify-start md:justify-between md:${
          id % 2 ? "" : "flex-row-reverse"
        } items-center w-full`}
      >
        <div className="md:order-1 md:w-[45%] relative md:inline-block"></div>
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full mr-4 md:mr-0">
          <h1 className="mx-auto font-semibold text-lg text-white">{id}</h1>
        </div>
        <div
          className={`order-1 bg-${
            id % 2 ? "secondary" : "primary"
          } rounded-lg shadow-xl w-full md:w-[45%] px-6 py-4 flex flex-row justify-center items-center flex-wrap  lg:flex-nowrap`}
        >
          <div className="w-full xl:w-[50%] 2xl:w-[40%] lg:mr-3 mb-3 lg:mb-0">
            <img
              src={props.img}
              alt=""
              className="rounded-xl object-cover w-auto h-auto lg:w-96 lg:h-56 xl:w-96 xl:h-48"
            />
          </div>
          <div className=" w-full xl:w-[50%] 2xl:w-[60%]">
            <h3 className="mb-3 font-bold text-white text-xl">{props.step}</h3>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              {props.process}
            </p>
          </div>
        </div>
      </div> */}
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-10 h-10 border rounded-full border-darkblue">
              <svg
                className="w-4 text-main"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="22"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="19,15 12,22 5,15"
                />
              </svg>
            </div>
          </div>
          <div className="w-px h-full bg-darkblue" />
        </div>
        <div className="pt-1 pb-8">
          <p className="mb-2 text-lg text-darkblue font-bold">{props.step}</p>
          <p className="text-main">{props.process}</p>
        </div>
      </div>
    </>
  );
};
export default TimelineCard;
