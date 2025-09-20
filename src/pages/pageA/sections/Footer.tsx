import { MessageCircle, Twitter, Users } from 'lucide-react';

function Footer() {
  const navLinks = [
    'Home',
    'Ecosystem',
    'How To Buy',
    'Why Choose',
    'Tokenomics',
    'Resources',
  ];

  return (
    <footer className=" bg-black px-8 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div className="flex flex-col gap-6">
            <h2 className="font-['Bebas_Neue'] text-4xl text-white lg:text-5xl">
              JOIN THE MECHA LEGION
            </h2>
            <img
              src="/src/assets/Frame192.png"
              alt="Download App Options"
              className="h-auto w-auto"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-center gap-1">
              <div className="bg-gradient-to-b from-[#00FF26] to-[#EAFF06] p-[1px] [clip-path:polygon(0_0,100%_0,calc(100%-8px)_100%,0_100%)] sm:p-[2px]">
                <button className="flex items-center justify-center bg-gradient-to-r from-[#00FF26] to-[#EAFF06] px-10 py-2 text-sm font-semibold text-black [clip-path:polygon(0_0,100%_0,calc(100%-8px)_100%,0_100%)] sm:px-4 md:px-5 lg:px-6 xl:px-8 xl:py-3 xl:text-base">
                  Buy Token
                </button>
              </div>

              <div className="bg-gradient-to-b from-[#00FF26] to-[#EAFF06] p-[1px] [clip-path:polygon(8px_0,100%_0,100%_100%,0_100%)] sm:p-[2px]">
                <button className="flex items-center justify-center bg-black px-10 py-2 text-sm font-semibold text-white [clip-path:polygon(8px_0,100%_0,100%_100%,0_100%)] sm:px-4 md:px-5 lg:px-6 xl:px-8 xl:py-3 xl:text-base">
                  <span className="hidden sm:inline">Join Now</span>
                  <span className="sm:hidden">Join Now</span>
                </button>
              </div>
            </div>

            <nav className="flex flex-wrap gap-4 text-right">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-gray-300 transition-colors hover:text-[#00FF26]"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-700 pt-6 lg:flex-row lg:items-center">
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-1 text-gray-400 transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">Telegram</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-gray-400 transition-colors hover:text-white"
            >
              <Twitter className="h-4 w-4" />
              <span className="text-sm">X</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-gray-400 transition-colors hover:text-white"
            >
              <Users className="h-4 w-4" />
              <span className="text-sm">Discord</span>
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Copyright ©2025. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;