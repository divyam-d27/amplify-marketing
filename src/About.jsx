import aboutImg from "/images/about/about-image.svg";
import testimg from "/images/about/test.svg";

const About = () => {
  return (
    <>
      <div class="inline-flex items-center justify-center w-full absolute">
        <hr class="w-32 sm:w-40 h-px border-0 bg-gradient-to-l from-darkblue via-blue to-light" />
        <span class=" px-3 font-extralight text-subtle">
          {" "}
          <em>about</em>
        </span>
        <hr class="w-32 sm:w-40 h-px border-0 bg-gradient-to-r from-darkblue via-blue to-light" />
      </div>
      <section
        id="about"
        className="bg-gradient-to-b from-light to-blue pt-20 pb-20 lg:pt-[120px] lg:pb-[120px] flex flex-col justify-center items-center"
      >
        <div className="container">
          <div className=" bg-light rounded-lg">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="items-center justify-between overflow-hidden lg:flex">
                  <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                    <div className="flex justify-start items-center">
                      <p className="inline-block pr-4 text-lg font-light text-main">
                        About Us
                      </p>
                      <div className="h-[1px] bg-gradient-to-r from-main to-light w-32"></div>
                    </div>
                    <h2 className="mb-6 mt-6 text-3xl font-bold text-darkblue sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                      Amplify Marketing
                    </h2>
                    <p className="mb-9 text-base leading-relaxed text-main">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="mb-9 text-base leading-relaxed text-main">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam
                    </p>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center rounded bg-darkblue py-4 px-6 text-base font-medium text-gold transition duration-300 ease-in-out hover:bg-opacity-90 shadow-lg hover:shadow-2xl"
                    >
                      Our Sevices
                    </a>
                  </div>

                  <div className="relative z-10 grid place-items-center">
                    <img
                      src={testimg}
                      alt="image"
                      className="rounded-r-xl mx-auto object-cover lg:ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
