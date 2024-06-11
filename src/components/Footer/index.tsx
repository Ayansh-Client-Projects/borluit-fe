import LogoSVG from "@/assets/svg/logo2.svg?react";
import clsx from "clsx";
import { MyInput } from "../ContactUs";

const websitelinks = [
  {
    title: "about us",
    link: "#",
  },
  {
    title: "our products",
    link: "#",
  },
  {
    title: "testimonial",
    link: "#",
  },
  {
    title: "contact us",
    link: "#",
  },
];

const socialLinks = [
  {
    title: "facebook",
    link: "#",
  },
  {
    title: "instagram",
    link: "#",
  },
  {
    title: "whatsapp",
    link: "#",
  },
  {
    title: "twitter",
    link: "#",
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
          <button className="bg-honey h-14 w-36 rounded-2xl font-display font-medium text-white">
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

const ListSection = (props: {
  links: { title: string; link: string }[];
  title: string;
}) => {
  const textClasses = "font-display font-medium uppercase tracking-wider";

  return (
    <div className="space-y-4">
      <p className={clsx(textClasses, "text-[#D8BB7B]")}>{props.title}</p>
      {props.links.map((link) => (
        <a
          className={clsx(textClasses, "block text-[#D9D9D9]")}
          key={link.title}
          href={link.link}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Footer;
