import robo1 from '../../../assets/robo1.png';
import robo2 from '../../../assets/robo2.png';
import robo4 from '../../../assets/robo4.png';

function HowtobuySection() {
  const images = [
    {
      src: robo1,
      alt: 'robot1',
      text: 'Go to Uniswap, the decentralized exchange (DEX) where MechaCore Token is officially listed. Uniswap allows you to trade tokens securely and directly from your crypto wallet without the need for intermediaries.',
    },
    {
      src: robo2,
      alt: 'robot2',
      text: 'Go to Uniswap, the decentralized exchange (DEX) where MechaCore Token is officially listed. Uniswap allows you to trade tokens securely and directly from your crypto wallet without the need for intermediaries.',
    },
    {
      src: robo1,
      alt: 'robot3',
      text: 'Go to Uniswap, the decentralized exchange (DEX) where MechaCore Token is officially listed. Uniswap allows you to trade tokens securely and directly from your crypto wallet without the need for intermediaries.',
    },
    {
      src: robo4,
      alt: 'robot4',
      text: 'Go to Uniswap, the decentralized exchange (DEX) where MechaCore Token is officially listed. Uniswap allows you to trade tokens securely and directly from your crypto wallet without the need for intermediaries.',
    },
  ];

  return (
    <div>
      <div className="flex flex-col mt-[60px] justify-center gap-10 lg:flex-row">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group relative h-full w-full cursor-pointer overflow-hidden lg:w-[calc((1676px-3*24px)/4)]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-contain"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-black opacity-0 transition-opacity duration-300 group-hover:opacity-75">
              <span className="text-center text-xl font-semibold text-white">
                {img.text}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h1 className=" mt-[60px] text-center font-['Bebas_Neue'] text-[103px] text-white">
        How to Buy
      </h1>
    </div>
  );
}

export default HowtobuySection;
