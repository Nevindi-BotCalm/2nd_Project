function PowerYourCoreSection() {
  const stats = [
    { label: 'CORE RESERVE', value: '10%' },
    { label: 'PARTNERSHIPS', value: '20%' },
    { label: 'TOTAL SUPPLY', value: '1,000' },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="mb-16 text-center font-['Bebas_Neue'] text-[103px] text-white tracking-[-4%] leading-96%">
        POWER YOUR CORE
      </h1>
      
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        {stats.map((stat, idx) => (
          <div key={idx} className=" flex flex-col items-center">
            <div className="bebas text-[28px] mb-4 bg-gradient-to-b from-[#00FF26] to-[#EAFF06] px-6 py-2 text-sm font-normal text-black [clip-path:polygon(0%_0,100%_0,90%_100%,10%_100%)]">
              {stat.label}
            </div>
            <div className="bebas text-[50px] font-normal text-white lg:text-[80px]">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default PowerYourCoreSection;
