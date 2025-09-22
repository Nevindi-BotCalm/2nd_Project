import GreyRectangle from '../../../assets/GreyRec.png';
import Vector22 from '../../../assets/Vector22.png';
import Vector11 from '../../../assets/Vector11.png';
import BotCalm from '../../../assets/botcalm.png';

function JoinCommunitySection() {
  return (
    <div className="relative mx-auto h-[823px] w-[1920px] overflow-hidden">
      {/* Background */}
      <img
        src={GreyRectangle}
        alt="Mecha Resources"
        className="h-full w-full rounded-lg object-cover"
      />

    
      <div className="absolute top-[6%] left-[2.3%] w-[46%] h-auto">
        <img
          src={Vector22}
          alt="Vector 22"
          className="w-full h-auto"
        />
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bebas flex h-[56.5px] w-[284px] items-center justify-center bg-gradient-to-b from-[#00FF26] to-[#EAFF06] text-lg font-bold tracking-wider text-black transition [clip-path:polygon(0%_0,100%_0,90%_100%,10%_100%)] hover:opacity-90">
          JOIN OUR COMMUNITY
        </button>
      </div>

     
      <div className="absolute top-[6%] right-[2.3%] w-[46%] h-auto">
        <img
          src={Vector11}
          alt="Vector 11"
          className="w-full h-auto"
        />
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bebas flex h-[56.5px] w-[284px] items-center justify-center bg-gradient-to-b from-[#00FF26] to-[#EAFF06] text-lg font-bold tracking-wider text-black transition [clip-path:polygon(0%_0,100%_0,90%_100%,10%_100%)] hover:opacity-90">
          JOIN OUR COMMUNITY
        </button>
      </div>


      <img
        src={BotCalm}
        alt="Bot Calm"
        className="absolute top-[27%] left-1/2 w-[36%] h-auto -translate-x-1/2"
      />
    </div>
  );
}

export default JoinCommunitySection;
