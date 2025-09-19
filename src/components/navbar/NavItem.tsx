interface NavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
}

export const NavItem = ({ label, href, isActive }: NavItemProps) => {
  return (
    <a
      href={href}
      className={`transition-all duration-300 font-medium ${
        isActive
          ? 'bg-gradient-to-b from-[#6BFC02] to-yellow-300 bg-clip-text text-transparent'
          : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#6BFC02] hover:to-yellow-300'
      }`}
    >
      {label}
    </a>
  );
};
