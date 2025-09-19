import { NAV_ITEMS } from '../../constants/navItems.constant';
import { Logo } from '../ui/Logo';
import { useState } from 'react';

const getNavItemClassName = (isActive: boolean) =>
  `text-sm lg:text-base xl:text-lg text-white hover:bg-gradient-to-b hover:from-[#6BFC02] hover:to-yellow-300 hover:bg-clip-text hover:text-transparent transition-colors ${
    isActive
      ? 'bg-gradient-to-b from-[#6BFC02] to-yellow-300 bg-clip-text text-transparent'
      : ''
  }`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black px-3 py-3 sm:px-4 sm:py-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="mx-auto max-w-[1676px] flex items-center justify-between">
        {/* Logo */}
        <Logo className="text-white" />

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-6 lg:flex xl:space-x-8 2xl:space-x-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={getNavItemClassName(item.label === 'Home')}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right-side buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 xl:space-x-6">
          {/* Buy Token Button */}
          <div className="bg-gradient-to-r from-[#00FF26] to-[#EAFF06] p-[1px] [clip-path:polygon(0_0,100%_0,calc(100%-8px)_100%,0_100%)] sm:p-[2px]">
            <button className="flex items-center justify-center bg-gradient-to-r from-[#00FF26] to-[#EAFF06] px-3 py-2 text-sm font-semibold text-black [clip-path:polygon(0_0,100%_0,calc(100%-8px)_100%,0_100%)] sm:px-4 sm:text-base md:px-5 md:text-base lg:px-6 lg:text-lg xl:px-8 xl:py-3 xl:text-lg 2xl:px-10 2xl:text-xl">
              <span className="hidden sm:inline">Buy Token</span>
              <span className="sm:hidden">Buy Token</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="bg-gradient-to-r from-[#00FF26] to-[#EAFF06] p-[1px] [clip-path:polygon(5px_0,100%_0,100%_100%,0_100%)] sm:p-[2px] lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-8 w-8 items-center justify-center bg-black [clip-path:polygon(5px_0,100%_0,100%_100%,0_100%)] sm:h-9 sm:w-9 md:h-10 md:w-10 xl:h-12 xl:w-12"
            >
              <svg
                className="h-5 w-5 text-white sm:h-5 sm:w-5 md:h-6 md:w-6 xl:h-7 xl:w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 border-t border-gray-800 pb-4 sm:mt-5 sm:pb-5 lg:hidden">
          <div className="flex flex-col items-center space-y-4 pt-4 text-center sm:space-y-5 sm:pt-5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={getNavItemClassName(item.label === 'Home')}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
