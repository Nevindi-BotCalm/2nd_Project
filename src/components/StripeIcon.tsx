import { Logo } from './ui/Logo';
import vector from '../assets/Vector.png';

function StripeIcon() {
  const repeats = Array(10).fill(0); // Adjust based on screen width and logo size

  return (
    <div className="relative z-10 w-full overflow-hidden bg-black px-4 py-2 mt-[-40px]">
      <div className="flex w-full flex-nowrap items-center justify-between gap-6">
        {repeats.map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 flex-shrink-0"
          >
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
  );
}

export default StripeIcon;
