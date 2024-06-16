import { Link } from "react-router-dom";

import seo from "/svg/seo.svg";
import digital from "/svg/digital.svg";
import content from "/svg/content.svg";
import email from "/svg/email.svg";
const Services = () => {
  return (
    <>
      <div class="inline-flex items-center justify-center w-full absolute">
        <hr class="w-32 sm:w-40 h-px border-0 bg-gradient-to-l from-darkblue via-blue to-light" />
        <span class=" px-3 font-extralight text-subtle">
          {" "}
          <em>services</em>
        </span>
        <hr class="w-32 sm:w-40 h-px border-0 bg-gradient-to-r from-darkblue via-blue to-light" />
      </div>
      <section className="bg-light pt-20 pb-8 lg:pt-[120px] lg:pb-[70px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-12 max-w-[620px] lg:mb-20">
                <span className="mb-2 block text-lg font-medium text-main">
                  Services / Features
                </span>
                <h2 className="mb-4 text-3xl font-bold text-darkblue sm:text-4xl md:text-[42px]">
                  Main Services / Features provided by Amplify Marketing
                </h2>
                <p className="text-lg leading-relaxed text-main sm:text-xl sm:leading-relaxed">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mb-10 xl:justify-between md:flex-wrap flex-col items-center md:flex-row">
            <div className="md:w-[344px] md:px-[2.594rem] lg:w-[464px] lg:px-[6.344rem] xl:w-[277px] xl:px-2 mb-4">
              <img
                src={seo}
                alt=""
                className="rounded-xl h-[512px] w-[261px]"
              />
            </div>
            <div className="md:w-[344px] md:px-[2.594rem] lg:w-[464px] lg:px-[6.344rem] xl:w-[277px] xl:px-2 mb-4">
              <img src={email} alt="" className="h-[512px] w-[261px]" />
            </div>
            <div className="md:w-[344px] md:px-[2.594rem] lg:w-[464px] lg:px-[6.344rem] xl:w-[277px] xl:px-2 mb-4">
              <img src={content} alt="" className="h-[512px] w-[261px]" />
            </div>
            <div className="md:w-[344px] md:px-[2.594rem] lg:w-[464px] lg:px-[6.344rem] xl:w-[277px] xl:px-2 mb-4">
              <img src={digital} alt="" className="h-[512px] w-[261px]" />
            </div>
          </div>
          <div>
            <Link
              to="/services"
              className="flex cursor-pointer justify-between items-center w-60 hover:w-72 duration-500"
            >
              <div className="border-2 border-darkblue rounded-lg px-3 py-2 text-darkblue hover:bg-darkblue hover:text-white">
                Explore our services{" "}
              </div>
              <svg
                className="ml-5 fill-darkblue"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
