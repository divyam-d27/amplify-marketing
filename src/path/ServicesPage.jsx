import React from "react";
import ServiceCard from "../components/ServiceCard";
import heroImg from "/images/service.png";
import metaImg from "/images/meta.jpg";
import fbImg from "/images/facebook.jpg";
import seoImg from "/images/seo.jpg";
import instaImg from "/images/insta.jpg";
const ServicesPage = () => {
  return (
    <>
      {/* <Nav /> */}
      {/* <!-- ====== Banner Section Start --> */}
      <div className="relative z-10 overflow-hidden bg-gradient-to-b from-blue to-light pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="text-4xl font-medium text-darkblue">Services</h1>
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

      {/* <!-- ====== Service Section Start --> */}
      <section className="overflow-hidden flex items-center justify-center bg-gradient-to-b from-light to-blue p-20">
        <div className="flex flex-col justify-center">
          <ServiceCard
            img={heroImg}
            title={`Here goes service title`}
            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}
            id={1}
          />
          <ServiceCard
            img={metaImg}
            title={`META Ads`}
            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}
            id={2}
          />
          <ServiceCard
            img={fbImg}
            title={`FaceBook Ads`}
            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}
            id={3}
          />
          <ServiceCard
            img={seoImg}
            title={`SEO`}
            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}
            id={4}
          />
          <ServiceCard
            img={instaImg}
            title={`Instagram Ads`}
            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}
            id={5}
          />
        </div>
      </section>
      {/* ====== Service Section End */}
    </>
  );
};
export default ServicesPage;
