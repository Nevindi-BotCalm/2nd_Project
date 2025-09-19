interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizes = {
    sm: 'text-[32px]',
    md: 'text-[32px]',
    lg: 'text-[32px]',
  };

  return (
    <div
      className={`bebas font-normal tracking-[11%]  leading-[112%] capitalize ${sizes[size]} ${className}`}
    >
      <span className="text-white">MECHA</span>
      <span className="bg-gradient-to-b from-[#00ff00] to-yellow-400 bg-clip-text text-transparent">
        CORE
      </span>
    </div>
  );
};
