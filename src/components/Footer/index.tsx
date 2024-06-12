import LogoSVG from "@/assets/svg/logo2.svg?react";
import clsx from "clsx";
import { MyInput } from "../ContactUs";
import { links as websitelinks, Link } from "@components/Navbar";

const socialLinks: Link[] = [
  {
    title: "facebook",
    href: "#",
  },
  {
    title: "instagram",
    href: "#",
  },
  {
    title: "whatsapp",
    href: "#",
  },
  {
    title: "twitter",
    href: "#",
  },
];

const Footer = () => {
  return (
    <section className="relative bg-canopy px-6 pb-24 pt-8 lg:flex lg:justify-between lg:px-32 lg:py-16">
      <section className="space-y-4 lg:max-w-[300px] lg:space-y-8">
        <LogoSVG />
        <p className="font-satoshi tracking-wider text-white">
          Discover the perfect cup with our premium tea selection.Handpicked
          from the finest gardens, each blend offers a unique taste experience.
        </p>
      </section>
      <section className="flex justify-between pt-8 lg:gap-32">
        <ListSection links={websitelinks} title="company" />
        <ListSection links={socialLinks} title="follow us" />
      </section>
      <section className="space-y-4 pt-8">
        <h3 className="font-display font-medium uppercase tracking-wider text-[#D8BB7B]">
          newsletter
        </h3>
        <div className="space-y-4 lg:flex lg:gap-8 lg:space-y-0">
          <MyInput placeholder="Enter your email address" />
          <button className="h-14 w-36 rounded-2xl bg-honey font-display font-medium text-white">
            Subscribe
          </button>
        </div>
      </section>
      <p className="absolute bottom-6 font-display font-medium tracking-wider text-white">
        ©2024 borluittea
      </p>
    </section>
  );
};

const ListSection = (props: { links: Link[]; title: string }) => {
  const textClasses = "font-display font-medium uppercase tracking-wider";

  return (
    <div className="space-y-4">
      <p className={clsx(textClasses, "text-[#D8BB7B]")}>{props.title}</p>
      {props.links.map((link) => (
        <a
          className={clsx(textClasses, "block text-[#D9D9D9]")}
          key={link.title}
          href={link.href}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Footer;
