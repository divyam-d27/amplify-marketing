import "./homeAnim.css";
import laptopImg2 from "/images/hero/laptop2.png";

export const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="relative flex flex-col-reverse px-4 py-24 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full bg-transparent">
          <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
            <img
              // src={laptopImg}
              src={laptopImg2}
              className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
              alt=""
            />
          </div>
          <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
            <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
              <div className="max-w-xl mb-6">
                <div className="flex justify-start items-center">
                  <p className="flex items-center py-px text-xs font-semibold tracking-wider text-main uppercase rounded-full">
                    Amplify Marketing
                  </p>
                  <div className="border-b-2 border-b-red rounded-full w-32 ml-2"></div>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-darkblue sm:text-4xl sm:leading-none">
                  We will bring your
                  <br className="hidden md:block" />
                  business <span className="inline-block text-red">online</span>
                </h2>
                <p className="text-base text-main md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.
                </p>
              </div>
              <div class="btn-container ">
                <a href="https://wa.me/" class="button">
                  <div class="button__line"></div>
                  <div class="button__line"></div>
                  <span class="button__text">WHATSAPP</span>
                  <div class="button__drow1"></div>
                  <div class="button__drow2"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
