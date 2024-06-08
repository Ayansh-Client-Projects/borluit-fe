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
      <nav className="bg-white w-full h-14 justify-center gap-x-56 lg:h-28 lg:bg-white/[0.8] flex flex-row items-center lg:justify-center lg:gap-x-96 fixed top-0 z-50 shadow-md">
        <a href="#">
          <LogoSVG />
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
        <ul className="hidden lg:flex flex-row gap-x-24">
          {links.map((link) => (
            <li key={link.title}>
              <Anchor {...link} />
            </li>
          ))}
        </ul>
      </nav>
      {showMenu && (
        <ul
          className={`lg:hidden h-screen w-screen top-0 pt-24 bg-white flex flex-col items-center gap-y-16 absolute z-40`}
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
      className="uppercase font-display font-medium text-gray-800"
    >
      {props.title}
    </a>
  );
};

export default Navbar;
