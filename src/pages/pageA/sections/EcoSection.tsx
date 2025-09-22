import { useState } from 'react';

import Arrow from '../../../assets/Arrow.png';
import Group from '../../../assets/Group1.png';
import echo from '../../../assets/echo.png';
import image6 from '../../../assets/image6.png';
import image7 from '../../../assets/image7.png';
import image8 from '../../../assets/image8.png';
import image9 from '../../../assets/image9.png';

function EcoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Staff Picks With Erin This Week's Picks",
      answer:
        'MCORE follows a transparent, gamer-first token economy. Every allocation supports community, ecosystem, and growth. The Core Sentinel, a robotic panda forged from circuits and steel, is the guardian of the MechaCore ecosystem. Equipped with glowing energy leaves and armored plating, it represents strength, innovation, and community trust.',
    },
    {
      question: 'Compelling Games Is 20 Years of Age!',
      answer:
        'MCORE follows a transparent, gamer-first token economy. Every allocation supports community, ecosystem, and growth. The Core Sentinel, a robotic panda forged from circuits and steel, is the guardian of the MechaCore ecosystem. Equipped with glowing energy leaves and armored plating, it represents strength, innovation, and community trust.',
    },
    {
      question: 'Irresistible Games Merchandise Is Here',
      answer:
        'MCORE follows a transparent, gamer-first token economy. Every allocation supports community, ecosystem, and growth. The Core Sentinel, a robotic panda forged from circuits and steel, is the guardian of the MechaCore ecosystem. Equipped with glowing energy leaves and armored plating, it represents strength, innovation, and community trust.',
    },
  ];

  return (
    <div
      className="bg-black px-4 py-12 text-white"
      role="region"
      aria-label="Ecosystem Section"
    >
      <img src={Group} alt="group1" className="h-14 w-14 object-contain" />

      <div className="mx-auto flex max-w-[1527.75px] flex-col md:flex-row md:items-center md:justify-between lg:gap-[124px] lg:px-16">
        {/* Left Section (Text & Q&A) */}
        <div className="flex w-full max-w-[600px] flex-col space-y-8">
          <h1 className="font-['Bebas_Neue'] text-[70px] leading-[96%] font-normal tracking-[-4%] capitalize sm:text-[64px] md:text-[80px] lg:text-[103px]">
            Powering the Future of Gaming
          </h1>

          {/* Accordion Section */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded border border-green-500 bg-black/50"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left transition ${
                    openIndex === index
                      ? 'bg-green-500/20 text-white'
                      : 'text-white hover:bg-green-500/10'
                  }`}
                >
                  <img
                    src={Arrow}
                    alt="arrow"
                    className="h-4 w-4 object-contain"
                  />
                  <span className="text-base font-medium">{faq.question}</span>
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4">
                    <p className="text-base text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-1 sm:justify-start">
            <div className="bg-gradient-to-b from-[#00FF26] to-[#EAFF06] p-[1px] [clip-path:polygon(0_0,100%_0,calc(100%-8px)_100%,0_100%)] sm:p-[2px]">
              <button className="flex items-center justify-center bg-gradient-to-r from-[#00FF26] to-[#EAFF06] px-10 py-2 text-sm font-semibold text-black [clip-path:polygon(0_0,100%_0,calc(100%-8px)_100%,0_100%)] sm:px-4 md:px-5 lg:px-6 xl:px-8 xl:py-3 xl:text-base">
                Buy Token
              </button>
            </div>

            <div className="bg-gradient-to-b from-[#00FF26] to-[#EAFF06] p-[1px] [clip-path:polygon(8px_0,100%_0,100%_100%,0_100%)] sm:p-[2px]">
              <button className="flex items-center justify-center bg-black px-10 py-2 text-sm font-semibold text-white [clip-path:polygon(8px_0,100%_0,100%_100%,0_100%)] sm:px-4 md:px-5 lg:px-6 xl:px-8 xl:py-3 xl:text-base">
                <span className="hidden sm:inline">Join Now</span>
                <span className="sm:hidden">Join Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="relative mx-auto mt-12 w-full max-w-[600px] md:mt-0">
          <div className="relative h-[400px] w-full sm:h-[480px] md:h-[512px]">
            <img
              src={echo}
              alt="eco background"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Sponsor Section */}

      <div className="mt-[171px] flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 md:gap-16 lg:gap-20">
        <img
          src={image6}
          alt="sponsor6"
          className="h-12 w-full object-contain sm:h-14 sm:w-auto md:h-16 lg:h-20"
        />
        <img
          src={image7}
          alt="sponsor7"
          className="h-12 w-full object-contain sm:h-14 sm:w-auto md:h-16 lg:h-20"
        />
        <img
          src={image8}
          alt="sponsor8"
          className="h-12 w-full object-contain sm:h-14 sm:w-auto md:h-16 lg:h-20"
        />
        <img
          src={image9}
          alt="sponsor9"
          className="h-12 w-full object-contain sm:h-14 sm:w-auto md:h-16 lg:h-20"
        />
      </div>
    </div>
  );
}

export default EcoSection;
