import why from '../../../assets/whywhy.png';

function WhychooseSection() {
  return (
    <div
      className="mt-[150px] bg-black px-4 py-12 text-white"
      role="region"
      aria-label="Ecosystem Section"
    >
      <div className="mx-auto flex max-w-[1527.75px] flex-col md:flex-row md:items-center md:justify-between lg:gap-[124px] lg:px-16">
        <div className="relative mx-auto mt-12 w-full max-w-[600px] md:mt-0">
          <div className="relative h-[400px] w-full sm:h-[480px] md:h-[512px]">
            <img
              src={why}
              alt="eco background"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Left Section (Text & Q&A) */}
        <div className="flex w-full max-w-[600px] flex-col space-y-8">
          <h1 className="mt-10 text-center font-['Bebas_Neue'] text-[50px] leading-[100%] font-normal tracking-[-1px] capitalize sm:text-[64px] md:text-[80px] lg:text-[103px]">
            Why Hold MCORE?
          </h1>

          <p className="text-center font-['Nunito'] text-[21.13px] leading-[146%] font-normal tracking-[-0.02em] text-white">
            The MechaCore team blends blockchain engineers, game designers, and
            visionary creatives. With partnerships across gaming studios and
            blockchain platforms, we're building the future of robotic
            entertainment.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-1 font-semibold">
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
      </div>
    </div>
  );
}

export default WhychooseSection;
