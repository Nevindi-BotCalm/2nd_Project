import image1 from '../../../assets/image1.png';
import group1 from '../../../assets/Group1.png';
import group2 from '../../../assets/Group2.png';

export const HeroSection = () => {
  return (
    <section
      id=""
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black pt-16 text-white sm:pt-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        {/* Title */}
        <div className="relative">
          <h1 className="babes wtext-center max-w-[273px] font-['Bebas_Neue'] text-[70px] leading-[96%] font-normal tracking-[-4%] text-white capitalize opacity-100 lg:max-w-[780px] lg:text-[103px]">
            The Engineers Behind the Core
          </h1>

          <img
            src={group1}
            alt="Group1"
            className="absolute -top-2 left-10 h-10 w-10 sm:-top-4 sm:-left-20 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 2xl:h-28 2xl:w-28"
          />

          <img
            src={group2}
            alt="Group2"
            className="absolute top-[230px] right-[1px] h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 2xl:h-28 2xl:w-28"
          />
        </div>

        <div className="mt-8 flex justify-center gap-1">
          <div className="bg-gradient-to-b from-[#00FF26] to-[#EAFF06] p-[1px] [clip-path:polygon(0_0,100%_0,calc(100%-8px)_100%,0_100%)] sm:p-[2px]">
            <button className="flex items-center justify-center bg-gradient-to-r from-[#00FF26] to-[#EAFF06] px-10 py-2 text-sm font-semibold text-black [clip-path:polygon(0_0,100%_0,calc(100%-8px)_100%,0_100%)] sm:px-4 md:px-5 lg:px-6 xl:px-8 xl:py-3 xl:text-base">
              Buy Token
            </button>
          </div>

          <div className="bg-gradient-to-b from-[#00FF26] to-[#EAFF06] p-[1px] [clip-path:polygon(8px_0,100%_0,100%_100%,0_100%)] sm:p-[2px]">
            <button className="flex items-center justify-center bg-black px-10 py-2 text-sm font-semibold text-white [clip-path:polygon(8px_0,100%_0,100%_100%,0_100%)] sm:px-4 md:px-5 lg:px-6 xl:px-8 xl:py-3 xl:text-base">
              <span className="hidden sm:inline">Join Now</span>
              <span className="sm:hidden">Join Now </span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mb-8 flex justify-center">
        <img
          src={image1}
          alt="Hero"
          className="h-[213px] w-[380px] opacity-100 md:h-[420px] md:w-[749px]"
        />
      </div>
    </section>
  );
};
