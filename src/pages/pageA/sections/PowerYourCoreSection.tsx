function PowerYourCoreSection() {
  const stats = [
    { label: 'CORE RESERVE', value: '10%' },
    { label: 'PARTNERSHIPS', value: '20%' },
    { label: 'TOTAL SUPPLY', value: '1,000' },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="mb-16 text-center font-['Bebas_Neue'] text-[103px] text-white">
        POWER YOUR CORE
      </h1>
      
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="mb-4 bg-gradient-to-b from-[#00FF26] to-[#EAFF06] px-6 py-2 text-sm font-bold text-black [clip-path:polygon(0%_0,100%_0,90%_100%,10%_100%)]">
              {stat.label}
            </div>
            <div className="text-6xl font-bold text-white lg:text-8xl">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-16 h-[25px]">
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 justify-center">
          <button className="bebas flex h-[56.5px] w-[284px] items-center justify-center bg-gradient-to-b from-[#00FF26] to-[#EAFF06] text-lg font-bold tracking-wider text-black opacity-100 transition [clip-path:polygon(0%_0,100%_0,90%_100%,10%_100%)] hover:opacity-90">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default PowerYourCoreSection;