import ResourcesImage from '../../../assets/ResourcesSection.png';
import IconMoon from '../../../assets/IconMoon.png';
import IconLeaf from '../../../assets/IconLeaf.png';
import IconFire from '../../../assets/IconFire.png';
import IconBolt from '../../../assets/IconBolt.png';
import IconCrystal from '../../../assets/IconCrystal.png';
import IconGreen from '../../../assets/IconGreen.png';

function ResourcesSection() {
  const icons = [
    { src: IconMoon, alt: 'Moon Icon', class: 'left-[8%] top-[10%]' },
    { src: IconLeaf, alt: 'Leaf Icon', class: 'right-[15%] top-[12%]' },
    { src: IconCrystal, alt: 'Crystal Icon', class: 'right-[55%] bottom-[50%]' },
    { src: IconFire, alt: 'Fire Icon', class: 'left-[18%] bottom-[20%]' },
    { src: IconBolt, alt: 'Bolt Icon', class: 'right-[10%] bottom-[12%]' },
    { src: IconGreen, alt: 'Green Icon', class: 'top-[42%] left-[47%]' },
  ];

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-black px-4 py-8">
      <div className="relative h-[823px] w-[1920px] overflow-hidden rounded-xl border-[6px] border-[#00FF26] bg-gradient-to-b from-[#00FF26] to-[#EAFF06] p-[3px]">
        
        {/* Background */}
        <img
          src={ResourcesImage}
          alt="Mecha Resources"
          className="absolute top-[45px] left-[45px] h-[734px] w-[1830px] object-cover"
        />

        {/* Heading */}
        <h2 className="bebas absolute top-[362px] left-[1469px] w-[326px] text-center text-[103px] leading-[96%] font-normal tracking-[-0.04em] text-white capitalize">
          Resources
        </h2>

        {/* Floating Icons */}
        <div className="absolute inset-0">
          {icons.map(({ src, alt, class: pos }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              className={`
                absolute w-[12%] sm:w-[9%] md:w-[7%] lg:w-[6%] ${pos}
                animate-[float_6s_ease-in-out_infinite]
              `}
              style={{
                animationDelay: `${i * 1.2}s`, // staggered delay for fish-tank effect
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesSection;
