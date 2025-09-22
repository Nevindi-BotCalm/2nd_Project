import { Logo } from './ui/Logo';
import vector from '../assets/Vector.png';
import Marquee from 'react-fast-marquee';

function StripeIcon() {
  const repeats = Array(110).fill(0);

  return (
    <Marquee
      gradient={false}
      speed={50}
      pauseOnHover={true}
      className="relative z-10 mt-[-40px] w-full overflow-hidden bg-black px-4 py-14"
    >
      <div className="relative z-10 mt-[-40px] w-full overflow-hidden bg-black px-4 py-2">
        <div className="flex w-full flex-nowrap items-center justify-between gap-6">
          {repeats.map((_, idx) => (
            <div key={idx} className="flex flex-shrink-0 items-center gap-2">
              <img
                src={vector}
                alt="Vector"
                className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px] md:h-[26px] md:w-[26px]"
              />
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </Marquee>
  );
}

export default StripeIcon;
