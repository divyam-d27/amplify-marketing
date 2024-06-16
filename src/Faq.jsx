import { qnaArray } from "./content/Faq";
import Qna from "./components/Qna";

const Faq = () => {
  const qnaLength = qnaArray.length / 2;
  return (
    <section
      id="faq"
      className="relative z-20 overflow-hidden bg-[#f3f4ff] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                Any Questions? Answered
              </h2>
              <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full lg:w-1/2 px-4">
            {qnaArray.slice(0, qnaLength).map((qna) => {
              return (
                <>
                  <Qna ques={qna.question} ans={qna.answer} />
                </>
              );
            })}
          </div>
          <div className="w-full lg:w-1/2 px-4">
            {qnaArray.slice(qnaLength).map((qna) => {
              return (
                <>
                  <Qna ques={qna.question} ans={qna.answer} />
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
export default Faq;
