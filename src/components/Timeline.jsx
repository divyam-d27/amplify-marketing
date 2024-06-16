import React from "react";
import TimelineCard from "./TimelineCard";
const Timeline = (props) => {
  return (
    <>
      {/* <!-- ====== Banner Section Start --> */}
      <div className="relative z-10 overflow-hidden bg-gradient-to-b from-blue to-light pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="text-4xl font-mdeium text-darkblue">
                  {props.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-flex items-center justify-center w-full absolute bottom-0">
          <hr class="w-full h-px border-0 bg-gradient-to-r from-light via-darkblue to-light" />
        </div>
        {/* <div>
          <span className="absolute top-0 left-0 z-[-1]">
            <svg
              width="495"
              height="470"
              viewBox="0 0 495 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="55"
                cy="442"
                r="138"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="50"
              />
              <circle
                cx="446"
                r="39"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="20"
              />
              <path
                d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                stroke="white"
                stroke-opacity="0.08"
                stroke-width="12"
              />
            </svg>
          </span>
          <span className="absolute top-0 right-0 z-[-1]">
            <svg
              width="493"
              height="470"
              viewBox="0 0 493 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="462"
                cy="5"
                r="138"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="50"
              />
              <circle
                cx="49"
                cy="470"
                r="39"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="20"
              />
              <path
                d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                stroke="white"
                stroke-opacity="0.06"
                stroke-width="13"
              />
            </svg>
          </span>
        </div> */}
      </div>
      {/* <!-- ====== Banner Section End --> */}
      {/* Timeline starts */}
      {/* <div className="container bg-gray-200 mx-auto w-full h-full rounded-xl m-4">
        <div className="relative wrap overflow-hidden py-2 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-4 md:left-[50%]"></div>
          {props.array.map((el, i) => {
            return (
              <TimelineCard
                id={i}
                step={el.step}
                process={el.process}
                img={el.img}
              />
            );
          })}
        </div>
        <div>
          <a
            href="#"
            className="flex cursor-pointer justify-center items-center duration-500"
          >
            <div className="border-2  border-primary rounded-lg px-3 py-2 mb-4 text-primary hover:bg-primary hover:text-white">
              Let's Discuss{" "}
            </div>
          </a>
        </div>
      </div> */}
      <div className="bg-gradient-to-b from-light to-blue p-20">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
            <div className="lg:py-6 lg:pr-16">
              {props.array.map((el) => {
                return <TimelineCard step={el.step} process={el.process} />;
              })}
              <div className="success flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full border-darkblue">
                      <svg
                        className="w-6 text-main"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <polyline
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          points="6,12 10,16 18,8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="mb-2 text-lg text-darkblue font-bold">
                    Success
                  </p>
                  <p className="text-main" />
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Timeline Ends */}
    </>
  );
};
export default Timeline;
