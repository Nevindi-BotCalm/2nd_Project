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
    {
      src: IconCrystal, alt: 'Crystal Icon',class: 'right-[55%] bottom-[50%]',
    },
    { src: IconFire, alt: 'Fire Icon', class: 'left-[18%] bottom-[20%]' },
    { src: IconBolt, alt: 'Bolt Icon', class: 'right-[10%] bottom-[12%]' },
    { src: IconGreen, alt: 'Green Icon', class: 'top-[42%] left-[47%]' },
  ];

  return (
    <section className="relative flex w-full items-center justify-center bg-black px-4 py-8">
      <div className="relative w-full max-w-[1920px] min-w-[380px] overflow-hidden rounded-xl border-[6px] border-[#00FF26] bg-gradient-to-b from-[#00FF26] to-[#EAFF06] p-[3px]">
        {/* Background Image */}
        <img
          src={ResourcesImage}
          alt="Mecha Resources"
          className="h-full w-full rounded-lg object-cover"
        />

        {/* Heading */}
        <h2 className="absolute top-1/2 right-4 -translate-y-1/2 font-['Bebas_Neue'] text-[24px] leading-[96%] font-normal tracking-[-0.04em] text-white capitalize sm:text-[36px] md:text-[60px] lg:text-[90px] xl:text-[103px]">
          Resources
        </h2>

        {/* Floating Icons */}
        <div className="absolute inset-0">
          {icons.map(({ src, alt, class: pos }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              className={`absolute w-[12%] sm:w-[9%] md:w-[7%] lg:w-[6%] ${pos}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesSection;
