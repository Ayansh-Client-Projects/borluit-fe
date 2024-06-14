import C1SVG from "@/assets/svg/icon-defense.svg?react";
import C2SVG from "@/assets/svg/iconhand.svg?react";
import C3SVG from "@/assets/svg/iconhead.svg?react";
import C4SVG from "@/assets/svg/iconworld.svg?react";
import S1SVG from "@/assets/svg/iconpeople.svg?react";
import S2SVG from "@/assets/svg/iconsun.svg?react";
import S3SVG from "@/assets/svg/iconindustry.svg?react";
import S4SVG from "@/assets/svg/iconleaf.svg?react";
import S5SVG from "@/assets/svg/iconmug.svg?react";
import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./CS.module.css";

const clist = [
  {
    icon: C1SVG,
    title: "Authentic Assam Flavour",
    text: "Borluit Tea sources its leaves from the fertile soils of Assam, infusing each cup with the region's distinctively bold and malty flavour profile.",
  },
  {
    icon: C2SVG,
    title: "Sustainable Sourcing",
    text: "We prioritize ethical and sustainable farming practices, ensuring that every leaf is cultivated with care for the environment and local communities.",
  },
  {
    icon: C3SVG,
    title: "Craftsmanship",
    text: "Our tea is crafted by artisans, blending traditional techniques with modern innovation, resulting in unparalleled quality and consistency.",
  },
  {
    icon: C4SVG,
    title: "Community Impact",
    text: "Borluit Tea's commitment to community empowerment means that every purchase supports the well-being of the people of Assam.",
  },
];

const slist = [
  {
    icon: S1SVG,
    text: "102 farmers & counting",
  },
  {
    icon: S2SVG,
    text: "721 hectares",
  },
  {
    icon: S3SVG,
    text: "98 percent traceability",
  },
  {
    icon: S4SVG,
    text: "56 percent fineleaf count",
  },
  {
    icon: S5SVG,
    text: "25 crore tea cups / year",
  },
];

const CSComp = () => {
  return (
    <section
      className={clsx(
        "space-y-16 bg-[#F0F0F0] lg:space-y-0 lg:p-32",
        styles["background-mask"],
      )}
    >
      <section className={"space-y-8 lg:space-y-16"}>
        <Header title="Distinctive characteristics" />
        <div className="grid place-items-center space-y-6 lg:flex lg:items-start lg:justify-center lg:gap-x-4 lg:space-y-0">
          {clist.map((item) => {
            return (
              <div
                key={item.title}
                className="grid w-[280px] place-items-center space-y-2"
              >
                <Badge icon={<item.icon />} title={item.title} isS />
                <p className="text-center font-satoshi tracking-wide text-perrywinkle">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="space-y-8 lg:space-y-16 lg:pt-[240px]">
        <Header title="our stats"></Header>
        <div className="grid place-items-center space-y-6 lg:flex lg:items-start lg:justify-center lg:gap-x-4 lg:space-y-0">
          {slist.map((item) => {
            return (
              <div
                key={item.text.slice(0, 5)}
                className="grid w-[219px] place-items-center space-y-2"
              >
                <Badge icon={<item.icon />} title={item.text} isS={false} />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export const Header = (props: { title: string }) => {
  return (
    <h2 className="text-center font-display text-2xl font-semibold uppercase tracking-widest text-canopy lg:text-4xl">
      {props.title}
    </h2>
  );
};

const Badge = (props: { icon: ReactElement; title: string; isS: boolean }) => {
  return (
    <>
      <div
        className={`grid size-[100px] place-items-center rounded-full ${props.isS ? "bg-canopy" : "bg-honey"}`}
      >
        {props.icon}
      </div>
      <p className="text-center font-display font-medium tracking-wide text-wine">
        {props.title}
      </p>
    </>
  );
};

export default CSComp;
