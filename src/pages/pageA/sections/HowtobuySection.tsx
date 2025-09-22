import robo1 from '../../../assets/robo1.png';
import robo2 from '../../../assets/robo2.png';
import robo4 from '../../../assets/robo4.png';

function HowtobuySection() {
  const images = [
    {
      src: robo1,
      alt: 'robot1',
      text: 'Go to Uniswap, the decentralized exchange (DEX) where MechaCore Token is officially listed. Uniswap allows you to trade tokens securely and directly from your crypto wallet without the need for intermediaries.',
      button: 'MAKE WALLET',
    },
    {
      src: robo2,
      alt: 'robot2',
      text: 'Go to Uniswap, the decentralized exchange (DEX) where MechaCore Token is officially listed. Uniswap allows you to trade tokens securely and directly from your crypto wallet without the need for intermediaries.',
      button: 'GET SOME ETH',
    },
    {
      src: robo1,
      alt: 'robot3',
      text: 'Go to Uniswap, the decentralized exchange (DEX) where MechaCore Token is officially listed. Uniswap allows you to trade tokens securely and directly from your crypto wallet without the need for intermediaries.',
      button: 'SWITH TO TELANG',
    },
    {
      src: robo4,
      alt: 'robot4',
      text: 'Go to Uniswap, the decentralized exchange (DEX) where MechaCore Token is officially listed. Uniswap allows you to trade tokens securely and directly from your crypto wallet without the need for intermediaries.',
      button: 'GO UNISWAP',
    },
  ];

  return (
    <div>
      <div className="mt-[60px] flex flex-col justify-center gap-10 lg:flex-row">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group relative h-full w-full cursor-pointer overflow-visible lg:w-[calc((1676px-3*24px)/4)]"
          >
            <div className="group relative">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-contain transition-all duration-300"
              />
              {/* Full-image black gradient overlay on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="relative h-[25px]">
            
              
              <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 justify-center">
                <button className="bebas flex h-[56.5px] w-[284px] items-center justify-center bg-gradient-to-b from-[#00FF26] to-[#EAFF06] text-lg font-bold tracking-wider text-black opacity-100 transition [clip-path:polygon(0%_0,100%_0,90%_100%,10%_100%)] hover:opacity-90">
                  {img.button}
                </button>
              </div>
            </div>

            {/* Hover overlay text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-75">
              <span className="px-4 text-center text-xl font-semibold text-white">
                {img.text}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h1 className="mt-[60px] text-center font-['Bebas_Neue'] text-[103px] text-white tracking-[-4%] leading-96%">
        How to Buy
      </h1>
    </div>
  );
}

export default HowtobuySection;
