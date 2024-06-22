import LogoSVG from "@/assets/svg/logo2.svg?react";
import clsx from "clsx";
import { MyInput } from "../ContactUs";
import { links as websitelinks, Link } from "@components/Navbar";

const socialLinks: Link[] = [
  {
    title: "facebook",
    href: "https://www.facebook.com/profile.php?id=61558882003901&mibextid=LQQJ4d",
  },
  {
    title: "instagram",
    href: "https://instagram.com/borluit.tea",
  },
  {
    title: "whatsapp",
    href: "https://wa.me/+919854068382",
  },
];

const Footer = () => {
  return (
    <section className="relative bg-canopy px-6 pb-24 pt-8 lg:flex lg:justify-between lg:px-32 lg:py-16">
      <section className="space-y-4 lg:max-w-[300px] lg:space-y-8">
        <LogoSVG />
        <p className="font-satoshi tracking-wider text-white">
          Borluit Tea is dedicated to bringing the rich heritage and exquisite
          flavours of Assam to tea lovers around the world.
        </p>
      </section>
      <section className="flex justify-between pt-8 lg:gap-32">
        <ListSection links={websitelinks} title="company" />
        <ListSection
          links={socialLinks}
          openLinkBlank={true}
          title="follow us"
        />
      </section>
      <section className="space-y-4 pt-8">
        <h3 className="font-jost font-medium uppercase tracking-wider text-[#D8BB7B]">
          newsletter
        </h3>
        <form
          name="newsletter-form"
          method="POST"
          data-netlify="true"
          className="space-y-4 lg:flex lg:gap-8 lg:space-y-0"
        >
          <input type="hidden" name="form-name" value="newsletter-form" />
          <MyInput
            type="email"
            placeholder="Enter your email address"
            name="newsletter-email"
            required={true}
          />
          <button
            type="submit"
            className="h-14 w-36 rounded-2xl bg-honey font-jost font-medium text-white hover:opacity-60"
            style={{
              transition: "opacity ease-in 300ms",
            }}
          >
            Subscribe
          </button>
        </form>
      </section>
      <p className="absolute bottom-6 font-jost font-medium tracking-wider text-white">
        ©2024 borluittea
      </p>
    </section>
  );
};

const ListSection = ({
  links,
  title,
  openLinkBlank = false,
}: {
  links: Link[];
  title: string;
  openLinkBlank?: boolean;
}) => {
  const textClasses = "font-jost font-medium uppercase tracking-wider";

  return (
    <div className="space-y-4">
      <p className={clsx(textClasses, "text-[#D8BB7B]")}>{title}</p>
      {links.map((link) => (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          className={clsx(textClasses, "block text-[#D9D9D9]")}
          key={link.title}
          href={link.href}
          target={openLinkBlank ? "_blank" : undefined}
          rel={openLinkBlank ? "noopener noreferrer" : undefined}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Footer;
