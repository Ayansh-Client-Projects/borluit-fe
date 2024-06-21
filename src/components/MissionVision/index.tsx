import clsx from "clsx";
import { ReactElement } from "react";
import styles from "./MissionVision.module.css";

const circularCardTexts = [
  "Craft exceptional teas that showcase the rich and diverse heritage of Assam's tea traditions.",
  "Partner with local growers, ensuring fair wages and supporting community development.",
  "Implement sustainable farming and production practices to promote a healthier planet.",
];

const MissionVision = () => {
  const textClasses =
    "text-perrywinkle text-center font-jost font-medium tracking-wider lg:max-w-[920px] lg:text-center";

  return (
    <section
      className={clsx(
        "space-y-16 bg-[#F0F0F0] px-6 pt-16 shadow-inner lg:space-y-32 lg:p-32 lg:shadow-none",
        styles["background-mask"],
      )}
    >
      <section className="space-y-9">
        <Card header="Our Vision">
          <p className={textClasses}>
            Our vision at Borluit Tea is to be the global ambassador of
            Assam&apos;s rich tea heritage, offering exceptional and sustainable
            tea experiences to the world. We aim to inspire and delight tea
            lovers with our high-quality, ethically sourced teas, celebrating
            tradition and promoting wellness.
          </p>
        </Card>
      </section>
      <section className="space-y-5">
        <Card header="Our Mission">
          <p className={textClasses}>
            At Borluit Tea, our mission is to deliver the finest Assam teas that
            embody the rich heritage and traditions of the region. We are
            dedicated to maintaining the highest standards of quality and
            sustainability, ensuring that each cup of tea brings joy and
            well-being to our customers.
          </p>
        </Card>
      </section>
      <section className="flex flex-col items-center lg:flex-row lg:justify-center">
        {circularCardTexts.map((text, index) => (
          <CardCircular
            text={text}
            position={index}
            key={text.slice(0, 4) + index}
            classes={textClasses}
          />
        ))}
      </section>
    </section>
  );
};

const Card = (props: { header: string; children: ReactElement }) => {
  let content = "before:content-['our_vision']";
  if (props.header.toLocaleLowerCase() === "our mission") {
    content = "before:content-['our_mission']";
  }

  return (
    <section className="space-y-9">
      <h2
        className={clsx(
          "font-jost relative text-center text-2xl font-semibold uppercase tracking-wider text-canopy before:absolute before:left-1/2 before:block before:-translate-x-1/2 before:scale-[2] before:text-[1.35rem] before:opacity-10 lg:text-4xl lg:before:text-4xl",
          content,
        )}
      >
        {props.header}
      </h2>
      <div className="lg:grid lg:place-items-center">{props.children}</div>
    </section>
  );
};

const CardCircular = (props: {
  text: string;
  classes: string;
  position: number;
}) => {
  let translateClass =
    "-translate-y-[0px] lg:-translate-x-[0px] lg:-translate-y-[0px]";
  switch (props.position) {
    case 1:
      translateClass =
        "-translate-y-[24px] lg:-translate-x-[24px] lg:-translate-y-[0px]";
      break;
    case 2:
      translateClass =
        "-translate-y-[48px] lg:-translate-x-[48px] lg:-translate-y-[0px]";
      break;
    case 3:
      translateClass =
        "-translate-y-[72px] lg:-translate-x-[72px] lg:-translate-y-[0px]";
      break;
    default:
      break;
  }

  return (
    <div
      className={clsx(
        "group grid size-[250px] place-items-center rounded-full border-2 border-[#55634b2f] border-opacity-30 px-8 text-center hover:bg-[#55634ba5] hover:bg-opacity-95 sm:px-12 lg:size-[300px]",
        translateClass,
      )}
      style={{
        transition: "background ease-in 200ms",
      }}
    >
      <p className={clsx(props.classes, "group-hover:text-white")}>
        {props.text}
      </p>
    </div>
  );
};

export default MissionVision;
