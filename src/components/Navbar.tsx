import LogoSVG from "@/assets/svg/Logo.svg?react";
import MenuSVG from "@/assets/svg/menu.svg?react";
import CloseSVG from "@/assets/svg/close.svg?react";
import { useEffect, useState } from "react";

interface Link {
  href: string;
  title: string;
}

const links: Link[] = [
  { href: "#", title: "our products" },
  { href: "#", title: "about us" },
  { href: "#", title: "testimonial" },
  { href: "#", title: "contact us" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const closeShowMenu = () => setShowMenu(false);

    window.addEventListener("resize", closeShowMenu);

    return () => {
      removeEventListener("resize", closeShowMenu);
    };
  }, []);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 flex h-14 w-full flex-row items-center justify-center gap-x-56 bg-white shadow-md lg:h-28 lg:justify-center lg:gap-x-96 lg:bg-white/[0.8]">
        <a href="#">
          <LogoSVG className="h-[34.77px] w-[71.96px] lg:h-[46.43px] lg:w-[97.42px]" />
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center"
            onClick={handleShowMenu}
          >
            {showMenu ? (
              <CloseSVG title="Close menu" />
            ) : (
              <MenuSVG title="Mobile menu" />
            )}
          </button>
        </div>
        <ul className="hidden flex-row gap-x-24 lg:flex">
          {links.map((link) => (
            <li key={link.title}>
              <Anchor {...link} />
            </li>
          ))}
        </ul>
      </nav>
      {showMenu && (
        <ul
          className={`absolute z-40 flex h-screen w-screen flex-col items-center gap-y-16 bg-white pt-28 lg:hidden`}
        >
          {links.map((link) => (
            <li key={link.title}>
              <Anchor {...link} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const Anchor = (props: Link) => {
  return (
    <a
      href={props.href}
      className="font-display font-medium uppercase text-gray-800"
    >
      {props.title}
    </a>
  );
};

export default Navbar;
