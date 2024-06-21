import LogoSVG from "@/assets/svg/Logo.svg?react";
import MenuSVG from "@/assets/svg/menu.svg?react";
import CloseSVG from "@/assets/svg/close.svg?react";
import { useEffect, useState } from "react";

export interface Link {
  href: string;
  title: string;
}

export const links: Link[] = [
  { href: "#ourproducts", title: "our products" },
  { href: "#aboutus", title: "about us" },
  { href: "#testamonial", title: "testimonial" },
  { href: "#contactus", title: "contact us" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeShowMenu = () => setShowMenu(false);

  useEffect(() => {
    window.addEventListener("resize", closeShowMenu);

    return () => {
      removeEventListener("resize", closeShowMenu);
    };
  }, []);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleNavigate = () => {
    closeShowMenu();
  };

  return (
    <>
      <nav className="fixed top-0 z-50 flex h-14 w-full flex-row items-center justify-center gap-x-56 bg-[#F0F0F0] shadow-md lg:h-28 lg:justify-center lg:gap-x-96 lg:bg-white/[0.95]">
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
              <Anchor link={link} />
            </li>
          ))}
        </ul>
      </nav>
      {showMenu && (
        <ul
          className={`fixed top-0 z-40 flex h-screen w-screen flex-col items-center gap-y-16 bg-[#F0F0F0] pt-28 lg:hidden`}
        >
          {links.map((link) => (
            <li key={link.title}>
              <Anchor link={link} onClick={handleNavigate} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const Anchor = (props: { link: Link; onClick?: () => void }) => {
  return (
    <a
      onClick={props.onClick ?? undefined}
      href={props.link.href}
      className="font-jost font-medium uppercase text-gray-800 hover:text-perrywinkle"
      style={{
        transition: "color ease-in 300ms",
      }}
    >
      {props.link.title}
    </a>
  );
};

export default Navbar;
